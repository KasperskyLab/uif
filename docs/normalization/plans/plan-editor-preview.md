# Превью в редакторе: требования (роадмап п.3.1)

**Статус:** ✅ выполнено
**Связанные фичи:** [feat-editor-preview-target](../features/feat-editor-preview-target.md), [feat-product-and-parity](../features/feat-product-and-parity.md)

---

## Требования

| ID | Фича | Описание |
|----|------|----------|
| `editor.preview.embed-viewer` | Единый рендер-движок | В режиме превью — тот же **`FormRenderer`**, что в **transpile-viewer**; исходник подключается через Vite-алиас **`@viewer`**, без копирования кода. |
| `editor.preview.same-import-graph` | Один контур импортов | Все **`@/`**-импорты внутри **`FormRenderer`** резолвятся в **`src/`** пакета tool; **`configHook`**, утилиты таблиц/сетки, **`ToolbarStaticPreview`** — общие. |
| `editor.preview.ts-isolation` | Изоляция TypeScript | Viewer-исходник **не** входит в **`tsconfig`** пакета tool; типы декларируются через ambient-модуль **`viewer-form-renderer.d.ts`** — нет дублирования `@types/react` / `@kaspersky/hexa-ui`. |
| `editor.preview.toolbar-shim` | Шим тулбара | **`src/components/ToolbarStaticPreview.tsx`** реэкспортирует `ToolbarStaticPreview` из дескриптора тулбара — точка входа для импорта **`@/components/ToolbarStaticPreview`** из `FormRenderer`. |
| `editor.preview.vite-dedupe` | Дедупликация | **`resolve.dedupe`** для `react`, `react-dom`, `@kaspersky/hexa-ui` — один экземпляр зависимостей в бандле. |

---

## П.3.2 — Хук управляет структурой Grid/Table (✅)

- ✅ Grid: `configHook` может вернуть `cols`; renderer вычисляет `effectiveCols`, `effectiveRows` и делает pad/truncate children.
- ✅ Table: хук возвращает **`Partial<ITableProps>`**; длины **`columns`** и **`dataSource`** задают размерность; renderer перестраивает matrix через `buildTableMatrixColumnsAndDataSource(t, renderCell, overrides)`.
- ✅ Table toolbar: `toolbar` из хука заменяет DSL-превью; `rowSelection` проходит через хук.
- ⏳ **`editor.preview.scenario-hook`** — остаётся открытым.
