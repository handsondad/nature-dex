"""自然知识领域模型与查询服务。"""

from src.knowledge.species import (
    IdentificationCandidate,
    Species,
    SpeciesCatalog,
    TextSearchResult,
    get_default_catalog,
)

__all__ = [
    "IdentificationCandidate",
    "Species",
    "SpeciesCatalog",
    "TextSearchResult",
    "get_default_catalog",
]
