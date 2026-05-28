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

logger = logging.getLogger(__name__)

app = FastAPI(
    title="AI Agent API",
    description="AI Agent 应用的 HTTP API 接口",
    version="0.1.0",
)

# 全局 Agent 实例（生产环境可使用依赖注入管理）
_agent = AgentCore()


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
        stripped = value.strip()
        if not stripped:
            raise ValueError("字段不能为空白")
        return stripped


class ChatResponse(BaseModel):
    """非流式聊天响应模型。"""

    session_id: str
    response: str


class ObservationCreateRequest(BaseModel):
    """观察记录创建请求。"""

    session_id: str = Field(min_length=1, max_length=128)
    species: str = Field(min_length=1, max_length=64)
    location: str = Field(min_length=1, max_length=64)
    note: str | None = Field(default=None, max_length=500)
    image_url: str | None = Field(default=None, max_length=2048)
    status: Literal["confirmed", "pending"] = "confirmed"

    @field_validator("session_id", "species", "location")
    @classmethod
    def _strip_required_fields(cls, value: str) -> str:
        stripped = value.strip()
        if not stripped:
            raise ValueError("字段不能为空白")
        return stripped


class RecommendationRequest(BaseModel):
    """推荐请求。"""

    session_id: str = Field(min_length=1, max_length=128)
    season: str | None = Field(default=None, max_length=32)
    location: str | None = Field(default=None, max_length=64)
    limit: int = Field(default=3, ge=1, le=5)

    @field_validator("session_id")
    @classmethod
    def _strip_session_id(cls, value: str) -> str:
        stripped = value.strip()
        if not stripped:
            raise ValueError("字段不能为空白")
        return stripped


class RecommendationResponse(BaseModel):
    """推荐响应。"""

    session_id: str
    today_species: list[dict[str, str]]
    today_tasks: list[str]
    rationale: list[str]


@app.get("/health")
async def health_check() -> dict[str, str]:
    """健康检查端点。"""
    return {"status": "ok", "active_sessions": str(_agent.active_session_count)}


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
    record = _agent.create_observation(
        session_id=request.session_id,
        species=request.species,
        location=request.location,
        note=request.note,
        image_url=request.image_url,
        status=request.status,
    )
    return {"saved": True, "record": record}


@app.post("/api/v1/recommendations", response_model=RecommendationResponse)
async def get_recommendations(request: RecommendationRequest) -> RecommendationResponse:
    """获取推荐内容。"""
    result = _agent.get_recommendations(
        session_id=request.session_id,
        season=request.season,
        location=request.location,
        limit=request.limit,
    )
    return RecommendationResponse(session_id=request.session_id, **result)
