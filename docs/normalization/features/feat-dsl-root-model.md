# Фича: корневая модель DSL (FormData)

**Родитель:** DSL и исполнение.

---

## Описание

Форма в рантайме — объект **`FormData`**: идентификаторы, опционально схема полей и обработчики уровня формы, дерево контролов. Источник в репозитории — **`shared/types/form.ts`** и нормализация в **`shared/normalization-form-dsl/form-dsl-core.ts`**.

---

## Требования

- **`dsl.root.fields`:** корень содержит **`id`** формы.
- **`dsl.root.schema`:** опционально — описание полей данных формы в модуле/JSON; **в normalization-tool не редактируется** (нет смысла в UI: превью и **`FormRenderer`** на это поле не опираются).
- **`dsl.root.handlers`:** опционально — жизненный цикл формы (**`onFormInit`**, **`onFormSubmit`**) и др.; значения — путь к **`.ts`**, ленивый **`import()`**, либо функция после нормализации. Семантика и резолв — [feat-schema-handlers](./feat-schema-handlers.md). Редактор вызывает lifecycle при загрузке хуков (**`FormEditorConfigHookProvider`**).
- **`dsl.root.modelContract`:** опционально — модуль контракта путей данных (**`MODEL_PATHS`**); формат ссылки как у **`handlers`**. Детали и **`FormSlice.dataBind`** — [feat-form-model-binding](./feat-form-model-binding.md).
- **`dsl.root.elements`:** дерево контролов: семантический **`type`**, **`id`**, привязки к данным, валидация, условия видимости/доступности, обработчики на контроле; опционально **`dataBindPath`** (путь из контракта для **`useConfig`**) — [feat-form-model-binding](./feat-form-model-binding.md).
- **`dsl.mapping.semantics-to-hexa`:** маппинг «семантика контрола → компонент ДС» живёт в **реестрах / рендерерах** приложений, не как отдельный дублирующий метатип в DSL.

---

## Ссылки

- Типы: `shared/types/form.ts`
- Логика контролов: `shared/normalization-form-dsl/form-dsl-core.ts`, entry `form-dsl.ts`
- **`handlers` / `useConfig`:** [feat-schema-handlers](./feat-schema-handlers.md)
- **Привязка к модели:** [feat-form-model-binding](./feat-form-model-binding.md)
