# Фича: превью в редакторе — единый рендер-движок

**Родитель:** решение config-driven. Роадмап **п.3.1** ✅ ([якорь](../roadmap.md#normalization-roadmap-p31)); открытые вопросы — **п.3.2** ⏳ ([якорь](../roadmap.md#normalization-roadmap-p32)).

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
| `editor.preview.scenario-hook` | Опциональный модуль моков/патча `state` для превью (черновик) | ⏳ (п.3.2) |

---

## Открытые вопросы (→ п.3.2)

- Синхронизация **`rows`/`cols`** у Grid/Table в DSL с возвратом хука.
- Единый контракт **тулбара** и **`rowSelection`** у Table (DSL vs Hexa из хука).
- **`editor.preview.scenario-hook`** — точное имя поля и сигнатура при реализации.

---

## Ссылки

- [plan-editor-preview.md](../plans/plan-editor-preview.md)
- [roadmap §3.1](../roadmap.md#normalization-roadmap-p31), [§3.2](../roadmap.md#normalization-roadmap-p32)
