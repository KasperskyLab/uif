# AGENTS.md — контекст проекта UISB

Документ для AI-агентов (Cursor и др.): назначение проекта, структура, соглашения и важные пути.

---

## Назначение проекта

**UISB** — визуальный редактор UI-форм на базе дизайн-системы **Hexa UI** (Kaspersky). Пользователь выбирает каталог на диске (File System Access API), создаёт и редактирует формы в виде **`.ts`-модулей**, перетаскивает контролы с палитры на холст (в т.ч. в ячейки grid/table и вкладки tabs). Формы хранятся как исходный модуль (не JSON).

Редактор поддерживает:
- **Привязку данных** (fieldName, dataType, defaultValue, schema формы)
- **Валидацию** (required, minLength, maxLength, min, max, pattern, custom)
- **Условную логику** (visibleWhen, disabledWhen — показ/блокировка контролов по значению других полей)
- **Обработчики событий** уровня формы и отдельных контролов (файлы `.js`/`.ts` из каталога формы, по принципу Unity)
- **Undo/redo**, копирование, дублирование, горячие клавиши
- **Предпросмотр формы** с валидацией и условной логикой
- **Экспорт DSL** (JS-модуль, JSON)
- **Шаблоны** типовых форм

В будущем DSL будет трансформироваться в формы на произвольных библиотеках и дизайн-системах; сейчас рендеринг реализован только через Hexa UI. Генерация React-компонентов и TypeScript-типов из DSL **не входит** в scope — разработчику не важно, что под капотом.

---

## Стек и скрипты

- **React 17**, **TypeScript**, **Vite**
- **Hexa UI**: `@kaspersky/hexa-ui`, `@kaspersky/hexa-ui-icons`
- **Тесты**: Vitest (unit), Playwright (e2e)
- **Скрипты**: `npm run dev` (разработка), `npm run build`, `npm run test`, `npm run test:e2e`, `npm run release` (build + npm pack)

---

## Структура репозитория

**Общий DSL (источник правды):** `shared/types/form.ts` (корень формы), `shared/normalization-form-dsl/` — `form-dsl-core.ts`, `form-dsl.ts` (entry для alias `@normalization/form-dsl`). Юнит-тесты: `form-dsl.test.ts`.

```
src/
  types/
    form-dsl.ts          # реэкспорт shared DSL (@normalization/form-dsl)
  controls/
    registry.ts          # createControl, getDescriptor, PALETTE_ITEMS, CONTROL_TYPES
    types.ts             # CanvasContext, ControlDescriptor
    descriptors/         # по одному файлу на тип: hexa, tabs, toolbar, icon, row
    registry.test.ts
  components/
    ControlsPalette.tsx  # палитра контролов с поиском
    FormCanvas.tsx       # холст, DnD, контейнеры grid/table/tabs, бейджи (fieldName, ⚡, fn)
    PropertiesPanel.tsx  # панель свойств: PropsEditor, FieldBindingEditor, ValidationEditor,
                         # ConditionEditor, SchemaEditor + HandlersEditor
    HandlersEditor.tsx   # универсальный редактор обработчиков событий
    HandlerFilePicker.tsx # файловый браузер для выбора обработчика из каталога формы
    FormPreview.tsx      # предпросмотр формы с валидацией и условной логикой
    CodeExportDialog.tsx # диалог экспорта DSL (JS-модуль, JSON)
    SelectWithOptionWidth.tsx
    CanvasPreviewErrorBoundary.tsx
  hooks/
    useDirectoryPicker.ts
    useFormFilesList.ts  # дерево файлов .ts в выбранном каталоге
    useFormFile.ts       # загрузка/сохранение (loadFormDslBrowserRuntime → parseFormTs, formToTs)
    useHistory.ts        # undo/redo стек для состояния контролов
  templates.ts           # предустановленные шаблоны форм (FORM_TEMPLATES)
  App.tsx                # корневой компонент: layout, хоткеи, интеграция хуков
  main.tsx               # точка входа; проверка наличия #root
  main.css
  constants.ts           # FORM_EXT = '.ts' (новые файлы)
  utils/
    getErrorMessage.ts   # единообразная обработка ошибок
jsons/                   # демо-каталог: одна форма + обработчик (можно указать при разработке)
  form-*.ts              # примеры форм (в т.ч. демо с grid/table)
  handlers/
    handler.js           # пример обработчика
e2e/                     # Playwright: app-load, demo-form
TESTING-GAPS.md          # документация непокрытых сценариев тестирования
```

---

## Формат формы (модуль `.ts`)

Один файл формы — один ES-модуль с **`export default`** объектом:

```js
export default {
  name: "Название формы",
  id: "form-123",
  schema: {                              // опционально: схема данных
    email: { type: "string", label: "Email" },
    age: { type: "number" }
  },
  handlers: {                            // опционально: обработчики событий формы
    onSubmit: () => import("./handlers/submit.js"),
    onInit: () => import("./handlers/init.js")
  },
  elements: [
    {
      type: "input",
      id: "input-1",
      placeholder: "Email",
      fieldName: "email",
      dataType: "string",
      validation: [{ type: "required", message: "Обязательное поле" }],
      handlers: {
        onChange: () => import("./handlers/email-change.js")
      }
    },
    {
      type: "button",
      id: "button-1",
      text: "Отправить",
      mode: "primary",
      handlers: {
        onClick: () => import("./handlers/submit.js")
      }
    }
  ]
}
```

- **В DSL у каждого элемента свой семантический тип**: кнопка — `type: "button"`, табы — `type: "tabs"`, алерт — `type: "alert"` и т.д. Метатипа («component», «hexa») нет; реализация (Hexa UI) не входит в описание формы.
- **Обработчики** в данных хранятся как строки путей (например `handlers/submit.js`); при сериализации в модуль подставляется `() => import("./handlers/submit.js")`.
- **Загрузка**: **`loadFormDslBrowserRuntime()`** → **`parseFormTs`**: Sucrase → Blob → `import(url)` → **`normalizeFormData(mod.default)`**.
- **Сохранение**: тот же ленивый рантайм → **`formToTs(formData)`** → исходник модуля.

---

## Типы контролов (DSL)

В DSL у каждого элемента свой **семантический тип** (как у кнопки и табов): кнопка — `type: "button"`, табы — `type: "tabs"`, алерт — `type: "alert"` и т.д. Метатипа («component»/«hexa») нет.

- **Базовые**: `button`, `text`, `input`, `checkbox`, `radio`, `select`, `toggle`, `markdown` — плоские поля (text, mode, options и т.д.).
- **С типом + props**: `alert`, `heading`, `dropdown`, `field`, `fieldSet`, `p`, `link`, … (`EXTRA_UI_DSL_TYPES`) — `type` + `props: Record<string, string>`.
- **`icon`** — иконка по имени (свой дескриптор).
- **`toolbar`** — тулбар с `left`/`right` (свой дескриптор).
- **Контейнеры**: `grid`, `row`, `table`, `tabs`
  - `grid` — 2D сетка: `rows × cols`, `children: (FormControl | null)[]`
  - `row` — горизонтальный flex-ряд: `gap?`, `align?`, `children`
  - `table` — таблица: `rows × cols`, `toolbar`, `children`
  - `tabs` — вкладки: `items[].key/label/children`, `activeKey`
- Типы и маппинг componentId↔тип DSL — в `src/types/form-dsl.ts` (`COMPONENT_ID_TO_DSL_TYPE`, `EXTRA_UI_DSL_TYPES`).

Добавление нового UI-компонента: добавить запись в `COMPONENT_ID_TO_DSL_TYPE` и `EXTRA_UI_DSL_TYPES`, а также в `HEXA_COMPONENT_MAP`, `HEXA_PALETTE_GROUPS` и `COMPONENT_PROPS` в `hexa.tsx`; для базового типа (аналог button/input) — свой дескриптор в `descriptors/`.

---

## Модель данных контрола (FormControlBase)

Каждый контрол наследует `FormControlBase`:

| Поле | Тип | Назначение |
|------|-----|-----------|
| `id` | `string` | Уникальный идентификатор |
| `fieldName?` | `string` | Привязка к полю данных формы |
| `dataType?` | `'string' \| 'number' \| 'boolean' \| 'date' \| 'array'` | Тип данных поля |
| `defaultValue?` | `unknown` | Начальное значение |
| `validation?` | `ValidationRule[]` | Правила валидации |
| `visibleWhen?` | `Condition` | Условие видимости |
| `disabledWhen?` | `Condition` | Условие блокировки |
| `handlers?` | `Record<string, string>` | Обработчики событий (имя → путь к файлу) |

`FormData` дополнительно содержит `schema?: Record<string, FieldSchema>` и `handlers?: Record<string, string>`.

---

## Обработчики событий

Система обработчиков по принципу Unity: файлы-скрипты `.js`/`.ts` в каталоге формы назначаются на события через инспектор свойств.

### Доступные события

Определены в константах `CONTROL_EVENTS` и `FORM_EVENTS` (`form-dsl.ts`):

**Формы**: `onSubmit`, `onInit`, `onChange`, `onValidationError`

**Контролы**:
| Тип | События |
|-----|---------|
| `button`, `text`, `input`, … `alert`, `heading`, … | см. CONTROL_EVENTS в form-dsl.ts |
| `tabs` | `onTabChange` |
| `icon` | `onClick` |
| `toolbar` | `onAction` |
| `grid`, `row`, `table` | — |

### UI

- **`HandlersEditor`** (`src/components/HandlersEditor.tsx`) — универсальный компонент: показывает доступные события типа, для каждого — текстовое поле пути и кнопку выбора файла.
- **`HandlerFilePicker`** (`src/components/HandlerFilePicker.tsx`) — файловый браузер каталога формы (навигация по папкам, фильтр `.js`/`.ts`).
- Обработчики отображаются в `PropertiesPanel`: для контрола — секция «Обработчики событий», для формы (без выбранного контрола) — секция «Обработчики формы».
- На холсте контролы с обработчиками показывают фиолетовый бейдж **fn** (с количеством и тултипом).

### Сериализация

- В памяти: `handlers: { onClick: "handlers/click.js" }` (строки путей)
- В **модуле формы `.ts`**: `handlers: { "onClick": () => import("./handlers/click.js") }` (динамический импорт; путь к обработчику может быть `.js` или `.ts`)
- При загрузке: `getImportPathFromHandler(fn)` извлекает путь из функции

---

## Валидация

Правила валидации задаются в `validation: ValidationRule[]` на контроле.

Типы правил (`ValidationRuleType`): `required`, `minLength`, `maxLength`, `min`, `max`, `pattern`, `custom`.

Каждое правило: `{ type, value?, message }`. Редактируются в `ValidationEditor` (внутри `PropertiesPanel`). Контролы с `required` показывают красную звёздочку `*` на холсте.

---

## Условная логика

Контролы могут иметь `visibleWhen` и `disabledWhen` — объекты `Condition`:

```ts
{ fieldName: string, operator: 'eq'|'neq'|'gt'|'lt'|'contains'|'empty'|'notEmpty', value?: string }
```

- В редакторе: `ConditionEditor` в панели свойств (чекбокс + поля).
- В предпросмотре (`FormPreview`): `evaluateCondition` скрывает/блокирует контролы в реальном времени.
- На холсте: бейдж ⚡ с тултипом условия.

---

## Дескрипторы и холст

- **ControlDescriptor**: `type`, `label`, `Icon`, `createDefault`, `CanvasPreview`, `PropsEditor`.
- **component** — универсальный тип для всех UI-компонентов на палитре: `componentId` + `props`. Заголовки H1–H6 объединены в один элемент «Заголовок» (Heading) с пропом уровня. Палитра сгруппирована по семантике (`getPaletteGroups()`); палитра имеет поиск. При добавлении компонента передаётся `options.componentId`.
- **CanvasContext** передаётся в превью: `selectedId`, `onSelect`, `onRemove`, `rootSetControls`, `renderControlBlock`, `createControl(type, options?)`, `setGridChildrenInTree`, `setRowChildrenInTree`, `setTableChildrenInTree`.
- Обновление дерева при DnD в контейнерах — через `setGridChildrenInTree` / `setRowChildrenInTree` / `setTableChildrenInTree` / `setTabsChildrenInTree` из `form-dsl.ts`.
- **Бейджи на холсте**: зелёный — fieldName (с `*` для required), жёлтый ⚡ — условия, фиолетовый fn — обработчики.

---

## UX редактора

- **Undo/redo**: `useHistory<T>` (`src/hooks/useHistory.ts`) — стек до 50 состояний. Ctrl+Z / Ctrl+Shift+Z.
- **Горячие клавиши**: Ctrl+S (сохранить), Ctrl+C (копировать), Ctrl+V (вставить), Ctrl+D (дублировать), Delete (удалить), Escape (сбросить выбор / выйти из предпросмотра).
- **Предпросмотр**: `FormPreview` — рендер формы с интерактивными контролами, валидацией, условной логикой. Кнопка «Предпросмотр» в тулбаре.
- **Экспорт DSL**: `CodeExportDialog` — вкладки «JS модуль» и «JSON» с кнопкой копирования. Генерация React/TS-компонентов **не** входит в scope.
- **Шаблоны**: `FORM_TEMPLATES` (`src/templates.ts`) — предустановленные формы (вход, регистрация и т.д.). Отображаются в левой панели под палитрой.
- **Предупреждение при закрытии**: `useFormFile.closeFile` спрашивает подтверждение при наличии несохранённых изменений.

---

## Безопасность

- **hexa** (Link и др. с ссылками): в превью URL в `href`/`src`/`url` проверяются по белому списку схем (`http:`, `https:`, `mailto:`, `tel:`) во избежание XSS.
- **parseFormTs** (через **`loadFormDslBrowserRuntime`**): Sucrase, затем динамический `import(blobUrl)`.

---

## Файлы и каталог формы

- **useFormFilesList**: только **`.ts`** (`isFormModuleFile` из DSL).
- **useFormFile**: **`loadFormDslBrowserRuntime()`** → **`parseFormTs(content)`** / **`formToTs`**, новые файлы — **`FORM_EXT = '.ts'`**.

---

## E2E и демо-режим

- При `window.__E2E_DEMO__ = true` приложение открывает редактор с пустой формой без выбора каталога (для тестов).
- E2E: `e2e/README.md`, сценарии `app-load.spec.ts`, `demo-form.spec.ts`; перед первым запуском — `npx playwright install`.

---

## Важные соглашения

- **Язык интерфейса**: русский (подписи кнопок, панели, сообщения).
- **Обработчики событий**: файлы `.js`/`.ts` в каталоге формы (например `handlers/submit.js`). В DSL — строка пути; в модуле формы — `() => import("./...")`.
- **Единственная реализация createControl** — в `src/controls/registry.ts`; в форме дерево контролов — массив `FormControl[]`, контейнеры содержат `children` или `items[].children` (без лишних null в конце при отображении табов).
- **controlToJson** — все ветки используют `{ ...base, ... }` для сохранения общих свойств (`fieldName`, `handlers`, `validation`, `visibleWhen`, `disabledWhen` и т.д.).
- **Корень приложения**: в `main.tsx` проверяется наличие `#root`; при отсутствии — throw.

---

## Стиль кода и ревью

- **Типы**: возвращаемые типы хуков вынесены в интерфейсы (`UseFormFileResult`, `UseFormFilesListResult`) для переиспользования.
- **Ошибки**: единообразная обработка через `getErrorMessage(err, fallback)` (`src/utils/getErrorMessage.ts`).
- **Константы**: `FORM_EXT = '.ts'` в `src/constants.ts`; фильтр списка — `isFormModuleFile` из DSL.
- **Цвета**: в стилях предпочтительны CSS-переменные Hexa (`var(--primary--main, ...)`, `var(--surface--neutral, ...)`, `var(--tagsoutlined--neutral-border, ...)`) для единообразия и темы. Бейджи на холсте: зелёный (#00a88e) — данные, жёлтый (#fa8c16) — условия, фиолетовый (#722ed1) — обработчики.

---

## Полезные точки входа для правок

| Задача | Файлы |
|--------|--------|
| Новый компонент Hexa UI | `hexa.tsx` (HEXA_COMPONENT_MAP, COMPONENT_PROPS, HEXA_PALETTE_GROUPS) |
| Новое свойство на FormControlBase | `form-dsl.ts` (тип + normalizeControl + controlToJson + base) |
| Логика загрузки/сохранения формы | `loadFormDslBrowserRuntime`, `useFormFile.ts`, shared `parse-form-ts` / `form-dsl-core` |
| DnD, контейнеры (grid/row/table/tabs) на холсте | `FormCanvas.tsx`, `form-dsl.ts` (set*ChildrenInTree) |
| Панель свойств | `PropertiesPanel.tsx`, отдельные дескрипторы (PropsEditor) |
| Обработчики событий | `HandlersEditor.tsx`, `HandlerFilePicker.tsx`, `form-dsl.ts` (CONTROL_EVENTS, FORM_EVENTS) |
| Валидация / условная логика | `PropertiesPanel.tsx` (ValidationEditor, ConditionEditor), `FormPreview.tsx` |
| Список файлов в каталоге | `useFormFilesList.ts` |
| Undo/redo | `useHistory.ts`, `App.tsx` (интеграция) |
| Предпросмотр формы | `FormPreview.tsx` |
| Экспорт DSL | `CodeExportDialog.tsx`, DSL (`formToTs`, `formToJsonString`) |
| Шаблоны форм | `templates.ts` |
| Безопасность ссылок (XSS) | дескрипторы с URL (например `hexa.tsx` — CanvasPreview) |
