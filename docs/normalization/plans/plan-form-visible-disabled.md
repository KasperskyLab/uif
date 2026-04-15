# План: видимость и блокировка по модели (п. 3.4.5)

Якорь роадмапа: [roadmap §3.4.5](../roadmap.md#normalization-roadmap-p345). Фича: [feat-form-visible-disabled.md](../features/feat-form-visible-disabled.md).

## Решение

- Условия **только по путям в `state`**, синтаксис пути как у **`dataBindPath`** (список из **`MODEL_INITIAL`**).
- Поле **`Condition.modelPath`** (строка); **`fieldName`** в условиях **не** используется.

## Идентификаторы требований

| ID | Требование |
|----|------------|
| `form.visible-disabled.dsl.condition` | **`Condition`**: **`modelPath`**, **`operator`**, опционально **`value`**; парсинг только с **`modelPath`**. |
| `form.visible-disabled.runtime` | **`evaluateCondition(state, condition)`**; **`FormRenderer`**: скрытие при **`visibleWhen`**, блокировка при **`disabledWhen`**. |
| `form.visible-disabled.tool` | Панель: выбор **`modelPath`** из путей контракта (**`MODEL_INITIAL`**); блок для всех **`FormControlBase`**. |
| `form.visible-disabled.toolbar` | Нормализация **`toolbar`**: проброс **`visibleWhen`** / **`disabledWhen`**. |
