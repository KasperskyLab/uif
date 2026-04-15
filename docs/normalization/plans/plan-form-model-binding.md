# План: биндинг к модели (п. 3.4.4)

**Роадмап:** [roadmap.md §3.4.4](../roadmap.md#normalization-roadmap-p344)  
**Статус:** согласован контракт (ответы заказчика); реализация — после утверждения плана в PR.

---

## Решения (зафиксировано)

| Вопрос | Решение |
|--------|---------|
| Имя в DSL (п. 1) | **Вариант B** — отдельное поле **`dataBindPath`**, **не** переиспользовать **`fieldName`**. |
| Источник списка путей (п. 2) | Явный контракт в отдельном файле **`*.contract.ts`**. Ссылка на модуль контракта задаётся **на уровне формы** (корень **`FormData`**). |
| Передача в хук (п. 3) | **Явная** передача выбранного биндинга в контекст хука (расширение **`FormSlice`** или эквивалент). |
| Вложенность ключей | **Да**, с первой версии (нотация путей, см. ниже). |
| Не-input контролы | Биндинг **разрешён** для всех типов контролов; при отсутствии выбора — **`null`** (нет биндинга). |

---

## Имя корня: контракт формы (**утверждено**)

- Отдельное поле **`FormData.modelContract`**: ссылка на **`{formId}.contract.ts`** (строка пути, ленивый **`import()`** или прямая функция — по тем же правилам, что **`handlers`**).
- Не помещать контракт внутрь **`handlers`**, чтобы не смешивать с lifecycle.

---

## Идентификаторы требований

| ID | Требование |
|----|------------|
| `form.model-binding.dsl.path` | На контроле опциональное поле **`dataBindPath`**: **`string \| null`**. Значение — путь в данных в нотации **точек** (`user`, `user.email`, `items.0.title`). Пусто / не задано = **нет биндинга** (**`null`** в рантайме). |
| `form.model-binding.dsl.contract-root` | На корне **`FormData`** — ссылка на модуль **`*.contract.ts`** (строка пути относительно каталога формы и/или ленивый **`import()`** / прямая функция по тем же правилам, что **`handlers`**). Имя файла по конвенции: **`{formId}.contract.ts`** рядом с **`{formId}.schema.ts`**. |
| `form.model-binding.contract.file` | Файл рядом со схемой: **`{formId}.contract.ts`** (маска **`*.contract.ts`**). |
| `form.model-binding.contract.exports` | Модуль — **контракт модели**: тип(ы) фрагмента **`state`** для **`data.ts`** и **`export const MODEL_INITIAL = { … } satisfies …`** — объект-шаблон; пути для **tool** выводятся **`deriveModelPathsFromInitialShape(MODEL_INITIAL)`** (массивы: только элемент **`[0]`**). |
| `form.model-binding.contract.validation` | При сохранении / смене **`dataBindPath`** в UI: если задан контракт и путь **не** входит в выведенный список — предупреждение или блок сохранения (уровень строгости — на реализации; в плане минимум — **предупреждение**). |
| `form.model-binding.slice.shape` | Расширить **`FormSlice`** полем **`dataBind: { path: string; value: unknown } \| null`**, вычисляемым рендерером **перед вызовом** **`useConfig`** для данного **`control.id`**: **`path`** = **`control.dataBindPath`**, **`value`** = **`getValueAtPath(state, path)`** (или согласованный корень, если позже вынесем отдельно от **`state`**). Без биндинга — **`dataBind: null`**. |
| `form.model-binding.slice.get` | Утилита **`getValueAtPath(state, path: string): unknown`** с поддержкой сегментов **`a.b.c`**; договориться о **массивах** (`items.0` vs только объекты) — в MVP допустить **цифровые сегменты** как индексы массива. |
| `form.model-binding.tool.panel` | В **`PropertiesPanel`**: для **каждого** типа контрола — блок «Модель»: выпадающий список путей из **`MODEL_INITIAL`** (после загрузки **`*.contract.ts`**); под списком **только чтение** текущего **`value`** для выбранного пути. |
| `form.model-binding.tool.load-contract` | Загрузка списка путей: тот же механизм, что для **`data.ts`** / линковки (**`loadTsModule`**, FSA, при необходимости — eval экспорта из blob после транспиляции). Кэш по ключу формы. |
| `form.model-binding.tool.no-contract` | Если контракт не задан или не загрузился — выпадашка недоступна, **`SectionMessage`** с подсказкой. |
| `form.model-binding.normalize` | **`normalizeFormData`**, **`controlToJson`**, **`formToTs`**, **`parseFormTs`**: поддержка **`dataBindPath`** и корневого поля контракта. |
| `form.model-binding.viewer.parity` | **transpile-viewer**: тот же **`FormSlice`** и отображение read-only значения (минимум в tool; viewer — в том же PR или следующим, явно отметить). |
| `form.model-binding.demo` | Обновить **`dsl/demo`**: **`model/demo.contract.ts`** (тип + **`MODEL_INITIAL`**), ссылка в **`demo.schema.ts`**, **`model/demo.data.ts`** (**`onFormInit`**) наполняет **`state`** согласованно с шаблоном, один контрол с биндингом. |
| `form.model-binding.docs` | Обновить **`feat-schema-handlers.md`** / **`tooling.md`** — ссылка на этот план и конвенция **`*.contract.ts`**. |

---

## Порядок реализации (эпики)

1. **`*.contract.ts`** + типы **`FormSlice.dataBind`** + **`getValueAtPath`**.  
2. DSL + нормализация + сериализация (**`dataBindPath`**, **`modelContract`**).  
3. Загрузка контракта в tool + **`PropertiesPanel`** (Select + read-only).  
4. **`FormEditorConfigHookContext`** / **`FormCanvas`** / **`FormRenderer`**: прокинуть **`dataBind`** в вызов **`useConfig`**.  
5. Демо + тесты + доки.  
6. Viewer parity.

---

## Зависимости

- Открытый каталог формы (FSA) для загрузки **`*.contract.ts`** в tool — как для схемы и **`data.ts`**.  
- [feat-schema-handlers.md](../features/feat-schema-handlers.md) — **`parseFormTs`** с линковкой.

---

## Открытые мелочи (можно решить в PR)

- Строгость валидации пути против списка из **`MODEL_INITIAL`**.  
- Нужен ли **зеркальный** экспорт типов из контракта в **`data.ts`** — не требуется для MVP.
