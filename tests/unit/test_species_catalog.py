"""物种目录与文字识别单元测试。"""

from __future__ import annotations

from src.knowledge.species import SpeciesCatalog, get_default_catalog


class TestSpeciesCatalog:
    """验证结构化物种数据和可解释检索。"""

    def test_default_catalog_contains_at_least_thirty_species(self) -> None:
        """首批目录应覆盖至少 30 种小区和公园常见物种。"""
        catalog = get_default_catalog()

        assert len(catalog.list_species()) >= 30

    def test_search_matches_description_and_returns_ranked_candidates(self) -> None:
        """描述中的特征与环境应能召回排序后的候选。"""
        catalog = get_default_catalog()

        result = catalog.search_text("草地边黄色小花，后来会变成白色绒球", limit=3)

        assert result.candidates[0].species.name_zh == "蒲公英"
        assert 0.0 < result.candidates[0].confidence < 1.0
        assert result.candidates[0].distinguishing_features
        assert result.clarifying_questions

    def test_search_returns_uncertain_result_when_evidence_is_weak(self) -> None:
        """证据不足时不应伪造确定识别。"""
        catalog = get_default_catalog()

        result = catalog.search_text("一只奇怪的小动物", limit=3)

        assert result.is_uncertain is True
        assert result.candidates == ()
        assert result.clarifying_questions

    def test_catalog_rejects_duplicate_species_ids(self) -> None:
        """物种 ID 必须唯一，避免错误关联观察记录。"""
        species = get_default_catalog().get_by_id("plant-dandelion")
        assert species is not None

        try:
            SpeciesCatalog((species, species))
        except ValueError as error:
            assert "重复" in str(error)
        else:
            raise AssertionError("重复物种 ID 应被拒绝")
