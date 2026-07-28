"""API 路由模块。

定义 HTTP API 端点，使用 FastAPI 框架。
"""

from __future__ import annotations

import logging
from collections.abc import AsyncIterator
from typing import Any, Literal

from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field, field_validator

from src.agent.core import AgentCore
from src.discoveries.models import DiscoveryDraft
from src.knowledge.species import AgeGroup, get_default_catalog

logger = logging.getLogger(__name__)

app = FastAPI(
    title="AI Agent API",
    description="AI Agent 应用的 HTTP API 接口",
    version="0.1.0",
)

# 全局 Agent 实例（生产环境可使用依赖注入管理）
_agent = AgentCore()


def _validate_non_blank(value: str) -> str:
    """校验字符串字段非空白。

    Args:
        value: 待校验的字符串。

    Raises:
        ValueError: 如果字段为空白字符串。

    Returns:
        去除两端空白后的字符串。
    """
    stripped = value.strip()
    if not stripped:
        raise ValueError("字段不能为空白")
    return stripped


class ChatRequest(BaseModel):
    """聊天请求模型。"""

    session_id: str = Field(min_length=1, max_length=128)
    message: str = Field(min_length=1, max_length=2000)
    stream: bool = True
    role: Literal["child", "parent"] = "child"
    confidence: float | None = Field(default=None, ge=0.0, le=1.0)
    season: str | None = Field(default=None, max_length=32)
    location: str | None = Field(default=None, max_length=64)

    @field_validator("session_id", "message")
    @classmethod
    def _not_blank(cls, value: str) -> str:
        return _validate_non_blank(value)


class ChatResponse(BaseModel):
    """非流式聊天响应模型。"""

    session_id: str
    response: str


class TextIdentificationRequest(BaseModel):
    """文字物种识别请求。"""

    query: str = Field(min_length=1, max_length=500)
    age_group: Literal["4-6", "7-9", "10+"] = "7-9"
    location_type: str | None = Field(default=None, max_length=32)
    season: str | None = Field(default=None, max_length=32)
    limit: int = Field(default=3, ge=1, le=5)

    @field_validator("query")
    @classmethod
    def _strip_query(cls, value: str) -> str:
        return _validate_non_blank(value)


class IdentifiedSpecies(BaseModel):
    """候选物种的安全展示字段。"""

    id: str
    name_zh: str
    scientific_name: str
    kind: str
    category: str


class IdentificationCandidateResponse(BaseModel):
    """可解释的文字识别候选。"""

    species: IdentifiedSpecies
    confidence: float
    distinguishing_features: list[str]
    child_explanation: str
    safety_notice: str


class TextIdentificationResponse(BaseModel):
    """文字识别响应。"""

    candidates: list[IdentificationCandidateResponse]
    clarifying_questions: list[str]
    is_uncertain: bool


class ObservationCreateRequest(BaseModel):
    """观察记录创建请求。"""

    session_id: str = Field(min_length=1, max_length=128)
    child_id: str | None = Field(default=None, min_length=1, max_length=128)
    species_id: str | None = Field(default=None, min_length=1, max_length=128)
    species: str | None = Field(default=None, min_length=1, max_length=64)
    location: str = Field(min_length=1, max_length=64)
    note: str | None = Field(default=None, max_length=500)
    image_url: str | None = Field(default=None, max_length=2048)
    status: Literal["confirmed", "pending"] = "confirmed"

    @field_validator("session_id", "child_id", "species_id", "species", "location")
    @classmethod
    def _strip_required_fields(cls, value: str | None) -> str | None:
        if value is None:
            return value
        return _validate_non_blank(value)


class RecommendationRequest(BaseModel):
    """推荐请求。"""

    session_id: str = Field(min_length=1, max_length=128)
    child_id: str | None = Field(default=None, min_length=1, max_length=128)
    season: str | None = Field(default=None, max_length=32)
    location: str | None = Field(default=None, max_length=64)
    limit: int = Field(default=3, ge=1, le=5)

    @field_validator("session_id", "child_id")
    @classmethod
    def _strip_session_id(cls, value: str | None) -> str | None:
        if value is None:
            return None
        return _validate_non_blank(value)


class RecommendationResponse(BaseModel):
    """推荐响应。"""

    class SpeciesRecommendation(BaseModel):
        """推荐物种结构。"""

        name: str
        child_summary: str
        parent_summary: str
        safety_notice: str

    session_id: str
    today_species: list[SpeciesRecommendation]
    today_tasks: list[str]
    rationale: list[str]


class TodayAdventureRequest(BaseModel):
    """请求一项今日微冒险。"""

    session_id: str = Field(min_length=1, max_length=128)
    child_id: str | None = Field(default=None, min_length=1, max_length=128)
    season: str | None = Field(default=None, max_length=32)
    location_type: str | None = Field(default=None, max_length=32)
    exclude_adventure_id: str | None = Field(default=None, max_length=128)

    @field_validator("session_id", "child_id", "exclude_adventure_id")
    @classmethod
    def _strip_identifiers(cls, value: str | None) -> str | None:
        if value is None:
            return None
        return _validate_non_blank(value)


class TodayAdventure(BaseModel):
    """首页展示的儿童微冒险。"""

    id: str
    title: str
    kind: Literal["discover", "revisit", "listen"]
    prompt: str
    action: str
    evidence_hint: str
    safety_notice: str
    fallback_prompt: str
    rationale: str
    target_species_ids: list[str]
    is_skippable: bool


class TodayAdventureResponse(BaseModel):
    """今日微冒险响应，允许安全地没有匹配任务。"""

    adventure: TodayAdventure | None
    empty_state_message: str | None = None


class ObservationRecordResponse(BaseModel):
    """观察记录响应模型。"""

    id: str
    child_id: str
    species_id: str | None
    species_name: str
    location: str
    note: str
    image_url: str | None
    status: Literal["confirmed", "pending"]
    observed_at: str


class ObservationListResponse(BaseModel):
    """儿童观察记录列表响应。"""

    child_id: str
    records: list[ObservationRecordResponse]


class DiscoveryStartRequest(BaseModel):
    """从儿童描述创建发现台草稿。"""

    session_id: str = Field(min_length=1, max_length=128)
    child_id: str | None = Field(default=None, min_length=1, max_length=128)
    description: str = Field(min_length=1, max_length=500)
    location: str = Field(min_length=1, max_length=64)
    season: str | None = Field(default=None, max_length=32)

    @field_validator("session_id", "child_id", "description", "location")
    @classmethod
    def _strip_discovery_fields(cls, value: str | None) -> str | None:
        if value is None:
            return None
        return _validate_non_blank(value)


class DiscoveryEvidenceRequest(BaseModel):
    """孩子对当前一个观察问题的回答。"""

    answer: str = Field(min_length=1, max_length=500)

    @field_validator("answer")
    @classmethod
    def _strip_answer(cls, value: str) -> str:
        return _validate_non_blank(value)


class DiscoveryConfirmRequest(BaseModel):
    """可选地选择候选朋友；缺省时使用首个候选。"""

    species_id: str | None = Field(default=None, min_length=1, max_length=128)

    @field_validator("species_id")
    @classmethod
    def _strip_species_id(cls, value: str | None) -> str | None:
        if value is None:
            return None
        return _validate_non_blank(value)


class DiscoveryCandidateResponse(BaseModel):
    """发现台的候选朋友。"""

    species_id: str
    name_zh: str
    confidence: float
    distinguishing_features: list[str]


class DiscoveryDraftResponse(BaseModel):
    """可恢复的发现台草稿响应。"""

    id: str
    session_id: str
    child_id: str
    description: str
    location: str
    season: str | None
    candidates: list[DiscoveryCandidateResponse]
    evidence_round: int
    current_question: str | None
    status: Literal["awaiting_evidence", "ready_to_confirm", "saved"]


class DiscoverySavedResponse(BaseModel):
    """发现台保存观察记录的响应。"""

    saved: bool = True
    record: dict[str, Any]


@app.get("/health")
async def health_check() -> dict[str, str]:
    """健康检查端点。"""
    return {"status": "ok", "active_sessions": str(_agent.active_session_count)}


@app.post("/api/v1/adventures/today", response_model=TodayAdventureResponse)
async def get_today_adventure(request: TodayAdventureRequest) -> TodayAdventureResponse:
    """返回一项可跳过的今日微冒险，或自由发现提示。"""
    adventure = _agent.get_today_adventure(
        session_id=request.session_id,
        child_id=request.child_id,
        season=request.season,
        location_type=request.location_type,
        exclude_adventure_id=request.exclude_adventure_id,
    )
    if adventure is None:
        return TodayAdventureResponse(
            adventure=None,
            empty_state_message="今天没有安排任务。带着好奇心自由发现，也可以先记下一样让你好奇的东西。",
        )
    return TodayAdventureResponse(
        adventure=TodayAdventure(
            id=adventure.id,
            title=adventure.title,
            kind=adventure.kind,
            prompt=adventure.prompt,
            action=adventure.action,
            evidence_hint=adventure.evidence_hint,
            safety_notice=adventure.safety_notice,
            fallback_prompt=adventure.fallback_prompt,
            rationale=adventure.rationale,
            target_species_ids=list(adventure.target_species_ids),
            is_skippable=adventure.is_skippable,
        )
    )


@app.post("/api/v1/identify/text", response_model=TextIdentificationResponse)
async def identify_text(request: TextIdentificationRequest) -> TextIdentificationResponse:
    """从文字描述中检索物种候选，不将结果伪装成确定性识别。"""
    result = get_default_catalog().search_text(
        request.query,
        limit=request.limit,
        location_type=request.location_type,
        season=request.season,
    )
    age_group: AgeGroup = request.age_group
    candidates = [
        IdentificationCandidateResponse(
            species=IdentifiedSpecies(
                id=item.species.id,
                name_zh=item.species.name_zh,
                scientific_name=item.species.scientific_name,
                kind=item.species.kind,
                category=item.species.category,
            ),
            confidence=item.confidence,
            distinguishing_features=list(item.distinguishing_features),
            child_explanation=item.species.child_summary(age_group),
            safety_notice=item.species.safety_notice,
        )
        for item in result.candidates
    ]
    return TextIdentificationResponse(
        candidates=candidates,
        clarifying_questions=list(result.clarifying_questions),
        is_uncertain=result.is_uncertain,
    )


def _discovery_response(draft: DiscoveryDraft) -> DiscoveryDraftResponse:
    """将发现草稿转换成稳定的 API 响应。"""
    return DiscoveryDraftResponse(
        id=draft.id,
        session_id=draft.session_id,
        child_id=draft.child_id,
        description=draft.description,
        location=draft.location,
        season=draft.season,
        candidates=[
            DiscoveryCandidateResponse(
                species_id=candidate.species_id,
                name_zh=candidate.name_zh,
                confidence=candidate.confidence,
                distinguishing_features=list(candidate.distinguishing_features),
            )
            for candidate in draft.candidates
        ],
        evidence_round=draft.evidence_round,
        current_question=draft.current_question,
        status=draft.status.value,
    )


@app.post("/api/v1/discoveries", response_model=DiscoveryDraftResponse)
async def start_discovery(request: DiscoveryStartRequest) -> DiscoveryDraftResponse:
    """开始发现台：先展示候选，再一次只问一个观察问题。"""
    return _discovery_response(
        _agent.start_discovery(
            session_id=request.session_id,
            child_id=request.child_id,
            description=request.description,
            location=request.location,
            season=request.season,
        )
    )


@app.get("/api/v1/discoveries/{draft_id}", response_model=DiscoveryDraftResponse)
async def get_discovery(draft_id: str) -> DiscoveryDraftResponse:
    """恢复一段未完成的发现台探索。"""
    try:
        return _discovery_response(_agent.get_discovery(draft_id))
    except ValueError as error:
        raise HTTPException(status_code=404, detail=str(error)) from error


@app.post(
    "/api/v1/discoveries/{draft_id}/evidence",
    response_model=DiscoveryDraftResponse,
)
async def submit_discovery_evidence(
    draft_id: str,
    request: DiscoveryEvidenceRequest,
) -> DiscoveryDraftResponse:
    """记录当前证据；“不知道”也是可接受回答。"""
    try:
        return _discovery_response(
            _agent.submit_discovery_evidence(draft_id, request.answer)
        )
    except ValueError as error:
        raise HTTPException(status_code=409, detail=str(error)) from error


@app.post(
    "/api/v1/discoveries/{draft_id}/confirm",
    response_model=DiscoverySavedResponse,
)
async def confirm_discovery(
    draft_id: str,
    request: DiscoveryConfirmRequest | None = None,
) -> DiscoverySavedResponse:
    """确认候选朋友并创建一条已确认观察记录。"""
    try:
        return DiscoverySavedResponse(
            record=_agent.confirm_discovery(
                draft_id,
                species_id=request.species_id if request else None,
            )
        )
    except ValueError as error:
        raise HTTPException(status_code=409, detail=str(error)) from error


@app.post(
    "/api/v1/discoveries/{draft_id}/save-mystery",
    response_model=DiscoverySavedResponse,
)
async def save_discovery_as_mystery(draft_id: str) -> DiscoverySavedResponse:
    """保存神秘发现，不把不确定结果装作已识别物种。"""
    try:
        return DiscoverySavedResponse(record=_agent.save_discovery_as_mystery(draft_id))
    except ValueError as error:
        raise HTTPException(status_code=409, detail=str(error)) from error


@app.post("/api/v1/chat", response_model=None)
async def chat(request: ChatRequest) -> StreamingResponse | ChatResponse:
    """处理聊天消息。

    支持流式和非流式两种响应模式。

    Args:
        request: 聊天请求，包含 session_id、message 和 stream 标志

    Returns:
        流式响应（stream=True）或完整响应（stream=False）

    Raises:
        HTTPException: 如果请求参数无效或处理出错
    """
    logger.info(
        "收到聊天请求",
        extra={
            "session_id": request.session_id,
            "stream": request.stream,
            "role": request.role,
            "message_length": len(request.message),
        },
    )

    try:
        if request.stream:
            return StreamingResponse(
                _stream_chat(
                    session_id=request.session_id,
                    message=request.message,
                    role=request.role,
                    confidence=request.confidence,
                    season=request.season,
                    location=request.location,
                ),
                media_type="text/event-stream",
            )
        else:
            chunks = []
            async for chunk in _agent.chat(
                request.session_id,
                request.message,
                role=request.role,
                confidence=request.confidence,
                season=request.season,
                location=request.location,
            ):
                chunks.append(chunk)
            return ChatResponse(
                session_id=request.session_id,
                response="".join(chunks),
            )

    except RuntimeError as e:
        raise HTTPException(status_code=409, detail=str(e)) from e
    except Exception as e:
        logger.error(
            "聊天请求处理失败",
            extra={"session_id": request.session_id, "error": str(e)},
        )
        raise HTTPException(status_code=500, detail="内部服务器错误") from e


async def _stream_chat(
    session_id: str,
    message: str,
    role: Literal["child", "parent"],
    confidence: float | None,
    season: str | None,
    location: str | None,
) -> AsyncIterator[str]:
    """生成流式响应的异步迭代器。"""
    async for chunk in _agent.chat(
        session_id,
        message,
        role=role,
        confidence=confidence,
        season=season,
        location=location,
    ):
        yield f"data: {chunk}\n\n"
    yield "data: [DONE]\n\n"


@app.delete("/api/v1/sessions/{session_id}")
async def terminate_session(session_id: str) -> dict[str, bool]:
    """终止指定会话。

    Args:
        session_id: 要终止的会话 ID

    Returns:
        {"terminated": true} 如果会话存在并被终止
        {"terminated": false} 如果会话不存在
    """
    terminated = _agent.terminate_session(session_id)
    return {"terminated": terminated}


@app.post("/api/v1/observations")
async def create_observation(request: ObservationCreateRequest) -> dict[str, Any]:
    """创建观察记录。"""
    if request.species is None and request.species_id is None:
        raise HTTPException(status_code=422, detail="必须提供 species_id 或 species")
    species_name = request.species
    if species_name is None and request.species_id is not None:
        catalog_species = get_default_catalog().get_by_id(request.species_id)
        if catalog_species is None:
            raise HTTPException(status_code=422, detail="species_id 不存在于物种目录")
        species_name = catalog_species.name_zh
    if species_name is None:
        raise HTTPException(status_code=422, detail="无法解析物种名称")
    record = _agent.create_observation(
        session_id=request.session_id,
        child_id=request.child_id,
        species_id=request.species_id,
        species=species_name,
        location=request.location,
        note=request.note,
        image_url=request.image_url,
        status=request.status,
    )
    return {"saved": True, "record": record}


@app.get(
    "/api/v1/children/{child_id}/observations",
    response_model=ObservationListResponse,
)
async def get_child_observations(
    child_id: str,
    limit: int = 50,
) -> ObservationListResponse:
    """读取儿童档案下最近保存的观察记录。"""
    normalized_child_id = _validate_non_blank(child_id)
    records = _agent.get_observation_records(normalized_child_id, limit=limit)
    return ObservationListResponse(
        child_id=normalized_child_id,
        records=[
            ObservationRecordResponse(
                **record.model_dump(mode="python", exclude={"observed_at"}),
                observed_at=record.observed_at.isoformat(),
            )
            for record in records
        ],
    )


@app.post("/api/v1/recommendations", response_model=RecommendationResponse)
async def get_recommendations(request: RecommendationRequest) -> RecommendationResponse:
    """获取推荐内容。"""
    result = _agent.get_recommendations(
        session_id=request.session_id,
        child_id=request.child_id,
        season=request.season,
        location=request.location,
        limit=request.limit,
    )
    return RecommendationResponse(session_id=request.session_id, **result)
