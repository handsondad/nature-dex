"""Agent 核心模块。

提供 Agent 的主循环和消息处理逻辑。
"""

from __future__ import annotations

import logging
import os
from asyncio import to_thread
from collections.abc import AsyncIterator
from typing import Any, Literal

from src.adventures.models import ExplorationAdventure
from src.adventures.selector import select_today_adventure
from src.agent.experience import build_recommendations
from src.agent.learning import LearningCard, LearningReply, LearningService, build_learning_card
from src.agent.notebook import NatureNotebook
from src.agent.session import AgentSession, SessionStatus
from src.discoveries.models import DiscoveryDraft
from src.discoveries.service import DiscoveryService
from src.knowledge.species import AgeGroup, get_default_catalog
from src.memory.database import SQLiteDatabase
from src.memory.store import MemoryStore
from src.notebook.repository import NotebookRepository
from src.observations.models import ObservationCreate, ObservationRecord, ObservationStatus
from src.observations.repository import InMemoryObservationRepository, ObservationRepository
from src.tools.registry import ToolRegistry

logger = logging.getLogger(__name__)


class AgentCore:
    """Agent 核心，负责协调 LLM 调用、工具执行和记忆管理。

    Example:
        agent = AgentCore()
        async for chunk in agent.chat(session_id="123", message="你好"):
            print(chunk, end="", flush=True)
    """

    def __init__(
        self,
        tool_registry: ToolRegistry | None = None,
        memory_store: MemoryStore | None = None,
        observation_repository: ObservationRepository | None = None,
        notebook_repository: NotebookRepository | None = None,
        model: str | None = None,
    ) -> None:
        """初始化 AgentCore。

        Args:
            tool_registry: 工具注册中心，为 None 时使用全局注册中心
            memory_store: 记忆存储，为 None 时使用内存存储
            observation_repository: 观察记录仓储，为 None 时使用内存实现
            notebook_repository: 寻找清单与图鉴仓储；默认使用本地 SQLite
            model: LLM 模型名称，为 None 时从环境变量读取
        """
        self._tool_registry = tool_registry or ToolRegistry.get_global()
        self._memory = memory_store or MemoryStore()
        self._observations = observation_repository or InMemoryObservationRepository()
        self._learning = LearningService()
        self.notebook = NatureNotebook(
            self._observations,
            notebook_repository
            or NotebookRepository(
                SQLiteDatabase(os.getenv("NATURE_DEX_DB_PATH", ".data/nature-dex.sqlite3"))
            ),
        )
        self._learning_topics: dict[str, tuple[str, ...]] = {}
        self._discoveries = DiscoveryService(
            observation_repository=self._observations,
        )
        self._model = model or os.getenv("OPENAI_MODEL", "gpt-4o")
        self._sessions: dict[str, AgentSession] = {}

        logger.info("AgentCore 初始化完成", extra={"model": self._model})

    def get_or_create_session(self, session_id: str) -> AgentSession:
        """获取或创建会话。

        Args:
            session_id: 会话唯一标识符

        Returns:
            会话对象
        """
        if session_id not in self._sessions:
            self._sessions[session_id] = AgentSession(session_id=session_id)
            logger.info("创建新会话", extra={"session_id": session_id})
        return self._sessions[session_id]

    async def chat(
        self,
        session_id: str,
        message: str,
        role: Literal["child", "parent"] = "child",
        confidence: float | None = None,
        season: str | None = None,
        location: str | None = None,
        age_group: AgeGroup = "7-9",
    ) -> AsyncIterator[str]:
        """处理用户消息并流式返回 Agent 响应。

        Args:
            session_id: 会话 ID
            message: 用户输入的消息

        Yields:
            Agent 响应的文本片段（流式）

        Raises:
            RuntimeError: 如果会话处于非法状态
        """
        reply = await self.learn(
            session_id=session_id,
            message=message,
            role=role,
            confidence=confidence,
            age_group=age_group,
        )
        session = self.get_or_create_session(session_id)
        session.status = SessionStatus.PROCESSING
        try:
            recommendations = await to_thread(
                self.get_recommendations,
                session_id=session_id,
                season=season,
                location=location,
                limit=2,
            )
            self._memory.set(session_id, "last_recommendations", recommendations)
            names = ", ".join(item["name"] for item in recommendations["today_species"])
            yield f"{reply.answer}\n今日推荐：{names or '继续记录后生成'}"
        except Exception:
            logger.exception("聊天响应失败", extra={"session_id": session_id})
            session.status = SessionStatus.ERROR
            raise
        finally:
            if session.status is SessionStatus.PROCESSING:
                session.status = SessionStatus.IDLE

    async def learn(
        self,
        *,
        session_id: str,
        message: str,
        age_group: AgeGroup = "7-9",
        role: Literal["child", "parent"] = "child",
        confidence: float | None = None,
    ) -> LearningReply:
        """生成有目录依据的学习答复，并保留本会话的指代话题。"""
        session = self.get_or_create_session(session_id)

        if session.status == SessionStatus.PROCESSING:
            raise RuntimeError(f"会话 {session_id} 正在处理中，请等待完成后再发送消息")

        session.add_user_message(message)
        session.status = SessionStatus.PROCESSING

        logger.info(
            "开始处理消息",
            extra={"session_id": session_id, "message_length": len(message)},
        )

        try:
            reply = self._learning.answer(
                session_id=session_id,
                message=message,
                age_group=age_group,
                role=role,
                confidence=confidence,
                topic_ids=self._learning_topics.get(session_id, ()),
            )
            self._learning_topics[session_id] = tuple(card.species_id for card in reply.cards)
            session.add_assistant_message(reply.answer)

        except Exception as e:
            logger.error(
                "消息处理失败",
                extra={"session_id": session_id, "error": str(e)},
            )
            session.status = SessionStatus.ERROR
            raise
        else:
            session.status = SessionStatus.IDLE
        return reply

    def create_observation(
        self,
        *,
        session_id: str,
        species: str,
        location: str,
        child_id: str | None = None,
        species_id: str | None = None,
        note: str | None = None,
        image_url: str | None = None,
        status: str = "confirmed",
    ) -> dict[str, Any]:
        """创建并保存观察记录。

        Args:
            session_id: 会话标识符。
            species: 物种名称。
            location: 观察地点。
            child_id: 儿童档案标识；未提供时由会话 ID 派生。
            species_id: 可选的目录物种稳定标识。
            note: 可选备注。
            image_url: 可选图片 URL。
            status: 记录状态。

        Returns:
            创建的观察记录字典。
        """
        resolved_child_id = child_id or self._child_id_for_session(session_id)
        resolved_species_id = species_id
        if resolved_species_id is None and status == ObservationStatus.CONFIRMED.value:
            known_species = get_default_catalog().get_by_name(species)
            if known_species is None:
                raise ValueError("已确认记录必须关联物种目录中的 species_id")
            resolved_species_id = known_species.id
        record = self._observations.create(
            ObservationCreate(
                child_id=resolved_child_id,
                species_id=resolved_species_id,
                species_name=species,
                location=location,
                note=note or "",
                image_url=image_url,
                status=ObservationStatus(status),
            )
        )
        return self._record_to_dict(record)

    def get_observation_records(
        self,
        child_id: str,
        *,
        limit: int = 50,
    ) -> list[ObservationRecord]:
        """获取儿童档案下最近保存的观察记录。"""
        return self._observations.list_by_child(child_id, limit=limit)

    def list_learning_species(
        self, age_group: AgeGroup, kind: str | None = None, category: str | None = None
    ) -> list[LearningCard]:
        """按类型和现有分类标签提供学习卡，分类不代表个人收集进度。"""
        return [
            build_learning_card(item, age_group)
            for item in get_default_catalog().list_species()
            if (kind is None or item.kind == kind)
            and (category is None or item.category == category)
        ]

    def start_discovery(
        self,
        *,
        session_id: str,
        child_id: str | None,
        description: str,
        location: str,
        season: str | None = None,
    ) -> DiscoveryDraft:
        """从孩子描述开始一段可恢复的发现台探索。"""
        return self._discoveries.start(
            session_id=session_id,
            child_id=child_id or self._child_id_for_session(session_id),
            description=description,
            location=location,
            season=season,
        )

    def get_discovery(self, draft_id: str) -> DiscoveryDraft:
        """读取指定发现草稿。"""
        return self._discoveries.get(draft_id)

    def submit_discovery_evidence(self, draft_id: str, answer: str) -> DiscoveryDraft:
        """记录孩子对当前观察问题的一条回答。"""
        return self._discoveries.submit_evidence(draft_id, answer)

    def confirm_discovery(
        self,
        draft_id: str,
        *,
        species_id: str | None = None,
    ) -> dict[str, Any]:
        """将候选朋友保存为已确认观察记录。"""
        return self._record_to_dict(self._discoveries.confirm(draft_id, species_id=species_id))

    def save_discovery_as_mystery(self, draft_id: str) -> dict[str, Any]:
        """将未知发现保存为待确认的神秘发现。"""
        return self._record_to_dict(self._discoveries.save_as_mystery(draft_id))

    def get_observations(self, session_id: str) -> list[dict[str, Any]]:
        """获取当前会话对应儿童的记录，兼容推荐规则输入。"""
        records = self.get_observation_records(self._child_id_for_session(session_id))
        return [self._record_to_dict(record) for record in records]

    @staticmethod
    def _child_id_for_session(session_id: str) -> str:
        """为未登录 MVP 会话生成隔离的临时儿童档案标识。"""
        return f"session:{session_id}"

    @staticmethod
    def _record_to_dict(record: ObservationRecord) -> dict[str, Any]:
        """序列化领域记录，并保留旧推荐规则使用的 species 键。"""
        payload = record.model_dump(mode="json")
        payload["species"] = record.species_name
        return payload

    def get_recommendations(
        self,
        *,
        session_id: str,
        child_id: str | None = None,
        season: str | None = None,
        location: str | None = None,
        limit: int = 3,
    ) -> dict[str, Any]:
        """获取推荐结果。

        Args:
            session_id: 会话标识符。
            child_id: 可选儿童档案标识；未提供时由会话 ID 派生。
            season: 可选季节标签。
            location: 可选地点标签。
            limit: 推荐数量上限。

        Returns:
            包含 today_species、today_tasks 和 rationale 的推荐字典。
        """
        resolved_child_id = child_id or self._child_id_for_session(session_id)
        return build_recommendations(
            observations=[
                self._record_to_dict(record)
                for record in self.get_observation_records(resolved_child_id)
            ],
            season=season,
            location=location,
            limit=limit,
        )

    def get_today_adventure(
        self,
        *,
        session_id: str,
        child_id: str | None = None,
        season: str | None = None,
        location_type: str | None = None,
        exclude_adventure_id: str | None = None,
    ) -> ExplorationAdventure | None:
        """选择一项可跳过的儿童真实世界探索任务。"""
        resolved_child_id = child_id or self._child_id_for_session(session_id)
        observations = [
            self._record_to_dict(record)
            for record in self.get_observation_records(resolved_child_id)
        ]
        return select_today_adventure(
            observations=observations,
            season=season,
            location_type=location_type,
            exclude_adventure_id=exclude_adventure_id,
        )

    def terminate_session(self, session_id: str) -> bool:
        """终止并清理会话。

        Args:
            session_id: 要终止的会话 ID

        Returns:
            True 如果会话存在并被终止，False 如果会话不存在
        """
        if session_id in self._sessions:
            del self._sessions[session_id]
            self._learning_topics.pop(session_id, None)
            logger.info("会话已终止", extra={"session_id": session_id})
            return True
        return False

    @property
    def active_session_count(self) -> int:
        """当前活跃会话数量。"""
        return len(self._sessions)
