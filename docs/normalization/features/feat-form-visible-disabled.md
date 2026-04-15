# Фича: видимость и блокировка по модели (`visibleWhen`, `disabledWhen`)

**Статус:** ✅ п.3.4.5 ([roadmap §3.4.5](../roadmap.md#normalization-roadmap-p345)).

**Родитель:** DSL и исполнение. Тот же корень **`state`**, что **`dataBindPath`** и **`FormSlice.dataBind`**. План: [plan-form-visible-disabled.md](../plans/plan-form-visible-disabled.md).

---

## Описание

- **`visibleWhen`:** если задано — контрол **рендерится только при истинном** условии (операнд — значение по **`modelPath`** в **`FormSlice.state`** через **`getValueAtPath`**).

- **`disabledWhen`:** если задано — при истинном условии контрол **недоступен** (в **viewer** — `disabled` / обёртка с `pointer-events: none` в зависимости от типа).

- **`Condition`:** только **`modelPath`** (путь в нотации точек, как в списке
  из **`MODEL_INITIAL`** контракта) + **`operator`** + опционально **`value`**.
  Тот же модуль контракта задаёт тип модели для **`data.ts`**.
  Привязки к «полю другого контрола» по **`fieldName`** **нет**.

---

## Инструмент

Блок **«Видимость и блокировка»** у всех контролов с **`FormControlBase`** (не у **`button`**). Пути — **`Select`** из путей, выведенных из **`MODEL_INITIAL`**, после **`modelContract`**.

---

## Ссылки на код

| Область | Файл |
|---------|------|
| **`evaluateCondition`**, тип **`Condition`** | `shared/normalization-form-dsl/form-dsl-core.ts` |
| Пути из **`MODEL_INITIAL`** | `shared/normalization-form-dsl/derive-contract-model-paths.ts` |
| Рантайм | `FormRenderer.tsx` (viewer) |
| Панель | `PropertiesPanel.tsx` (tool) |
