# Документация: UI Normalization

Спецификация туллинга **config-driven** форм (редактор, transpile viewer, DSL).

| Документ | Описание |
|----------|----------|
| **[tooling.md](./tooling.md)** | Спека: пакеты, DSL, границы и паритет, контракт **configHook**, типизация/загрузка, сценарии, IndexedDB, URL `form`, структура кода. |
| **[roadmap.md](./roadmap.md)** | Краткий план этапов (п.1–8); детали решений — в tooling. |
| **[plans/plan-dsl-typing.md](./plans/plan-dsl-typing.md)** | **П.2.1** (✅): shared DSL, только **`.ts`** формы; **п.2.2** — динамические импорты (отложено). |
| **[plans/plan-button.md](./plans/plan-button.md)** | **Button**, п.1: ✅ (`ButtonProps \| null`, паритет tool + viewer). |
| **[plans/plan-text.md](./plans/plan-text.md)** | **Text**, п.1: ✅ (`TextProps \| null`, паритет с Button). |
| **[plans/plan-grid.md](./plans/plan-grid.md)** | **Grid**, п.1: ✅ (структура в DSL + `configHook` для `GridProps`). |
| **[plans/plan-table.md](./plans/plan-table.md)** | **Table**, п.1: ✅ (`Partial<ITableProps>`, Hexa `<Table />`, паритет tool + viewer). |

Точка входа: **[tooling.md](./tooling.md)**.
