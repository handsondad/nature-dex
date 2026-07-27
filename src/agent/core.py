"""Agent 核心模块。

提供 Agent 的主循环和消息处理逻辑。
"""

from __future__ import annotations

import logging
import os
from collections.abc import AsyncIterator
from typing import Any, Literal

from src.agent.experience import (
    build_recommendations,
    build_role_summary,
    build_safety_reminders,
    detect_species,
)
from src.agent.session import AgentSession, SessionStatus
from src.knowledge.species import get_default_catalog
from src.memory.store import MemoryStore
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
        model: str | None = None,
    ) -> None:
        """初始化 AgentCore。

        Args:
            tool_registry: 工具注册中心，为 None 时使用全局注册中心
            memory_store: 记忆存储，为 None 时使用内存存储
            observation_repository: 观察记录仓储，为 None 时使用内存实现
            model: LLM 模型名称，为 None 时从环境变量读取
        """
        self._tool_registry = tool_registry or ToolRegistry.get_global()
        self._memory = memory_store or MemoryStore()
        self._observations = observation_repository or InMemoryObservationRepository()
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
            species = detect_species(message)
            summary = build_role_summary(species, role)
            reminders = build_safety_reminders(message, confidence, species)
            recommendations = build_recommendations(
                observations=self.get_observations(session_id),
                season=season,
                location=location,
                limit=2,
            )
            recommended_names = (
                ", ".join(item["name"] for item in recommendations["today_species"])
                or "继续记录后生成"
            )
            response_text = (
                f"{summary}\n安全提醒：{'；'.join(reminders)}\n今日推荐：{recommended_names}"
            )
            session.add_assistant_message(response_text)
            self._memory.set(session_id, "last_recommendations", recommendations)

            yield response_text

        except Exception as e:
            logger.error(
                "消息处理失败",
                extra={"session_id": session_id, "error": str(e)},
            )
            session.status = SessionStatus.ERROR
            raise
        else:
            session.status = SessionStatus.IDLE

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

    def terminate_session(self, session_id: str) -> bool:
        """终止并清理会话。

        Args:
            session_id: 要终止的会话 ID

        Returns:
            True 如果会话存在并被终止，False 如果会话不存在
        """
        if session_id in self._sessions:
            del self._sessions[session_id]
            logger.info("会话已终止", extra={"session_id": session_id})
            return True
        return False

    @property
    def active_session_count(self) -> int:
        """当前活跃会话数量。"""
        return len(self._sessions)
