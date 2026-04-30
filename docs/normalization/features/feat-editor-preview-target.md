# Фича: превью в редакторе — единый рендер-движок

**Родитель:** решение config-driven. Роадмап **п.3.1** ✅ ([якорь](../roadmap.md#normalization-roadmap-p31)); структура Grid/Table — **п.3.2** ✅ ([якорь](../roadmap.md#normalization-roadmap-p32)); WYSIWYG-canvas — **п.3.3** ✅ ([якорь](../roadmap.md#normalization-roadmap-p33)); один `configHook` на форму — **п.3.4.1** ✅ ([якорь](../roadmap.md#normalization-roadmap-p341), [план](../plans/plan-form-config-hook-341.md), [фича](./feat-form-config-hook-unified.md)).

---

## Описание

Режим визуализации в **normalization-tool** использует **тот же** `FormRenderer`, что и **transpile-viewer**. Два режима tool: **editor** (холст, DnD, свойства) и **viewer** (превью через `FormRenderer`). Визуализация в превью идентична внешнему потребителю — один рендер-движок, один контур модулей.

---

## Реализация

| Артефакт | Назначение |
|----------|-----------|
| `vite.config.ts` → `@viewer` | Алиас на `transpile-viewer/src`; `resolve.dedupe` для react/hexa — один экземпляр зависимостей |
| `src/viewer-form-renderer.d.ts` | Ambient-модуль `@viewer/components/FormRenderer` — типы для `tsc` без компиляции исходника viewer |
| `src/components/ToolbarStaticPreview.tsx` | Шим: реэкспорт `ToolbarStaticPreview` из дескриптора тулбара для импорта `@/components/ToolbarStaticPreview` из `FormRenderer` |
| `App.tsx` → `<FormRenderer>` | В `previewMode` — `FormRenderer` с `elements`, `formDirectoryHandle`, `formKey` |

Все `@/` внутри `FormRenderer` при сборке tool резолвятся в `tool/src/` — утилиты (`loadConfigHookModule`, `tableControlHexa`, `defaultGridHexaProps`), типы (`form-dsl`), компоненты. Viewer-исходник **не** входит в `tsconfig` tool (нет дублирования типов React/Hexa).

---

## Требования

| ID | Описание | Статус |
|----|----------|--------|
| `editor.preview.embed-viewer` | В превью — `FormRenderer` из viewer, без дублирования кода | ✅ |
| `editor.preview.same-import-graph` | Один контур `@/`-импортов, те же `configHook` и утилиты | ✅ |
| `editor.preview.ts-isolation` | Ambient `.d.ts` вместо `tsconfig`-включения viewer | ✅ |
| `editor.preview.toolbar-shim` | Шим `ToolbarStaticPreview` для `FormRenderer` | ✅ |
| `editor.preview.vite-dedupe` | `resolve.dedupe` react/hexa — единый экземпляр | ✅ |
| `editor.preview.scenario-hook` | Опциональный модуль моков/патча `state` для превью (черновик) | ⏳ |
| `editor.preview.grid-hook-cols` | `configHook` может вернуть `cols` для Grid; renderer — pad/truncate children | ✅ (п.3.2) |
| `editor.preview.table-hook-dims` | `configHook` для Table — `Partial<ITableProps>`; размер матрицы по длине `columns`/`dataSource`; rebuild matrix | ✅ (п.3.2) |
| `editor.preview.table-toolbar` | `toolbar` из хука — нативный Hexa; при отсутствии — статический превью DSL | ✅ (п.3.2) |
| `editor.wysiwyg.data-control-id` | Каждый контрол в `FormRenderer` обёрнут в `div[data-control-id]` — DOM-якорь для overlay | ✅ (п.3.3) |
| `editor.wysiwyg.overlay-selection` | `WysiwygCanvas`: transparent overlay, `elementFromPoint` → click-to-select, highlight с `ResizeObserver` | ✅ (п.3.3) |
| `editor.wysiwyg.props-panel` | Панель свойств видна в WYSIWYG-режиме; редактирование свойств через панель, undo/redo | ✅ (п.3.3) |
| `editor.wysiwyg.dnd` | DnD в WYSIWYG-режиме: шестерёнка = drag source, drop zones overlay, root reorder/insert, palette drop, grid/table cell move/insert | ✅ (п.3.3 it.2) |
| `editor.wysiwyg.dnd-utils` | `src/utils/dnd.ts`: shared DATA_ID_KEY/DATA_TYPE_KEY, getDropTypeAndOptions, tree mutation helpers; FormCanvas переходит на импорты из utils | ✅ (п.3.3 it.2) |
| `editor.wysiwyg.palette-both-modes` | Палитра компонентов видна в обоих режимах (Editor и WYSIWYG) | ✅ (п.3.3 it.2) |

---

## Решённые вопросы (п.3.2 ✅)

- ~~Синхронизация размерности Grid/Table~~ → Grid: `cols` из хука; Table: число строк/столбцов по длине `dataSource`/`columns` в хуке; renderer делает pad/truncate `children`.
- ~~Единый контракт **тулбара**~~ → `toolbar` из хука заменяет DSL-превью; `rowSelection` — пропс Hexa Table, проходит через хук.
- **`editor.preview.scenario-hook`** — остаётся открытым, не привязан к п.3.2.

---

## Ссылки

- [plan-editor-preview.md](../plans/plan-editor-preview.md)
- [plan-form-config-hook-341.md](../plans/plan-form-config-hook-341.md) (п.3.4.1)
- [roadmap §3.1](../roadmap.md#normalization-roadmap-p31), [§3.2](../roadmap.md#normalization-roadmap-p32), [§3.3](../roadmap.md#normalization-roadmap-p33), [§3.4.1](../roadmap.md#normalization-roadmap-p341), [§3.4](../roadmap.md#normalization-roadmap-p34)
