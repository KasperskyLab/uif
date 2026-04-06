# План: один `configHook` на форму (роадмап п.3.4, пункт 1)

**Статус:** ✅ реализовано (п.3.4.1)  
**Фича:** [feat-form-config-hook-unified](../features/feat-form-config-hook-unified.md)  
**Роадмап:** [§3.4](../roadmap.md#normalization-roadmap-p34) (пункт 1 — этот план; пункты 2–5 — только в роадмапе)

---

## В объёме этого этапа (только п.3.4.1)

Единственный TS-модуль динамической конфигурации на форму; диспатч по **`control.id`**; **без** поля `configHook` на элементах дерева; **без** fallback на per-control загрузку; **без** обратной совместимости DSL со старым вариантом.

| ID | Описание | Статус |
|----|----------|--------|
| `form.config-hook.341.dsl` | В модели и сериализации формы — **только** путь/импорт форменного модуля (каталог **`dsl/{id}/`**, файлы **`{id}.schema.ts`** и **`{id}.config-hook.ts`**). Поле **`configHook` у контролов удаляется** (`normalizeFormData`, типы, `formToTs`, миграция снимков без сохранения старого формата). | ✅ |
| `form.config-hook.341.contract` | **Default export** — функция **без аргументов**, возвращающая объект **`Record<controlId, (FormSlice) => ComponentProps | null>`**. Значения по ключам — те же семантики, что у прежнего default export per-control модуля (см. [feat-config-hook](../features/feat-config-hook.md)). | ✅ |
| `form.config-hook.341.runtime` | **`FormRenderer`** (tool + viewer): один раз загрузить модуль формы, вызвать фабрику, получить реестр; для каждого контрола — **`registry[control.id]`** или только статические пропсы из DSL, **без** попыток подгрузить отдельный файл по контролу. | ✅ |
| `form.config-hook.341.tool-ui` | Редактор: пути/пикер для форменного хука; **не** вводить scaffold файла дефолтов на этом этапе (дефолты — вне scope, см. ниже). | ✅ |
| `form.config-hook.341.demo` | Демо: **`dsl/demo-form/`** с **`demo-form.schema.ts`** и **`demo-form.config-hook.ts`**, один `configHook` на форму. | ✅ |
| `form.config-hook.341.tests` | Тесты: `normalizeFormData`, сериализация, при необходимости — сценарий рендера с реестром. | ✅ |

---

## Вне объёма (остальные пункты §3.4 — позже)

- Открытие файла хука по ссылке из браузера (**п.3.4 п.2**).
- WYSIWYG vs Editor как отдельная проработка (**п.3.4 п.3**).
- Файл значений по умолчанию при создании хука (**п.3.4 п.4**); **текущие дефолты в коде не меняем**.
- Dev-сценарии viewer / Chrome DevTools (**п.3.4 п.5**).

---

## Порядок работ (после утверждения спеки)

1. Типы и DSL: `FormData`, элементы без `configHook`, сериализация.
2. Рантайм: загрузка форменного модуля, реестр, рендер без per-control путей.
3. UI tool: привязка к одному файлу хука, без расширений про дефолтный scaffold.
4. Демо-форма и тесты.

---

## Зависимости

- [feat-config-hook](../features/feat-config-hook.md) — контракт входа/выхода функции на контрол.
- [feat-lazy-dsl-runtime](../features/feat-lazy-dsl-runtime.md) — загрузка и транспиляция `.ts`.
- [feat-editor-preview-target](../features/feat-editor-preview-target.md) — общий `FormRenderer`.
