# Modular JSON Form Builder

## Назначение

React SPA для визуального создания и редактирования JSON-схем, на основании которых runtime собирает React-формы из компонентов подключаемого UI-пакета.

## Основные сценарии

- Открытие существующей или создание новой формы.
- Одновременная работа с несколькими формами во вкладках.
- Добавление компонентов из палитры в схему.
- Выбор, перемещение, настройка и удаление элементов.
- Настройка свойств формы.
- Валидация, импорт, экспорт и сохранение JSON-схемы.
- Предупреждение о несохранённых изменениях при закрытии вкладки или переходе.

## Интерфейс

### Header

- Текстовая кнопка «Формы» без иконок открывает отдельный раздел Forms Manager под header; popup не используется. Раздел на время заменяет весь трёхколоночный редактор.
- Forms Manager содержит список форм и поиск по `id` и `name` без учёта регистра. Выбор формы открывает её во вкладке и возвращает трёхколоночный редактор.
- Пока открыт Forms Manager, действия undo/redo/save в правой части header заменяются кнопкой «Создать форму».
- При закрытии последней вкладки Forms Manager отображается автоматически. Отдельный welcome-screen или промежуточная кнопка «Открыть форму» не используются.
- Вкладки открытых форм.
- Индикатор несохранённых изменений.
- Закрытие и переключение вкладок.

### Рабочая область

Редактор состоит из трёх колонок:

1. **Палитра компонентов** — формируется из TypeScript-типов и метаданных пакета компонентов; поддерживает категории, поиск, фильтрацию и добавление компонентов кликом или drag-and-drop.
2. **View** — схематично отображает структуру формы, контейнеры, поля и вложенность; поддерживает выделение, drag-and-drop, изменение порядка и состояния `empty`, `selected`, `invalid`, `locked`.
3. **Inspector** — показывает настройки выделенного элемента либо формы, включая props, источник данных, валидацию, зависимости и мета-свойства. Содержит кнопки «Отмена» и «Сохранить».

View отображает количество ошибок схемы как интерактивный индикатор. По клику открывается список диагностик с понятным сообщением, JSON-путём и ID связанного компонента; выбор диагностики переключает View в режим «Схема», выделяет компонент и прокручивает его в видимую область. Значок ошибки непосредственно на компоненте также открывает список его диагностик.

Кнопки «Отмена» и «Сохранить» в Inspector отображаются только при наличии локальных несохранённых изменений относительно открытой формы или элемента. Для настроек элемента «Отмена» отбрасывает изменения и снимает выделение элемента; Inspector закрывает свойства компонента и возвращается к настройкам формы. Для настроек формы она сбрасывает локальный draft к текущему состоянию формы.

Кнопка «Сохранить» в header сохраняет изменения структуры формы, которые не проходят через Inspector: добавление, удаление и перемещение элементов, а также применение JSON. Она отключена при чистом saved snapshot и активируется при dirty-state формы.

«Сохранить» в Inspector применяет draft к текущей форме и записывает всю форму через Persistence Adapter. Saved snapshot и статус вкладки обновляются только после успешной записи; при ошибке форма остаётся в dirty-state.

## Модули

Реализации находятся в отдельных папках [`src/modules/`](./src/modules/README.md).
Каждый модуль содержит README с назначением и основными файлами. Общие типы формы
и диагностик вынесены в `schema-model`; App Shell связывает модули, а не реализует их логику.

- **App Shell / Layout** — header, вкладки и трёхколоночный интерфейс.
- **Forms Manager** — список, создание, открытие, закрытие и сохранение форм.
- **Component Registry** — преобразование TypeScript-типов и метаданных UI-пакета в каталог компонентов.
- **Component Palette** — поиск, категории и добавление компонентов.
- **Schema View** — визуальное дерево и операции над элементами.
- **Inspector** — настройка формы или выбранного элемента.
- **Form Controls** — undo/redo, сохранение, удаление, копирование и перемещение.

### Локальное хранение форм

- Формы хранятся отдельными JSON-файлами в каталоге `forms/`; имя файла формируется как `<FormSchema.name>.json`. `id` остаётся идентификатором формы в схеме и API, но не используется как имя файла. При изменении `name` Persistence Adapter создаёт файл с новым именем и удаляет прежний; коллизия с другой формой считается ошибкой сохранения.
- Локальный API билдера поддерживает получение списка, создание/перезапись и удаление формы.
- Forms Manager показывает ошибки схемы, dirty-state и состояние открытой вкладки; поддерживает открытие, создание, дублирование и удаление с подтверждением.
- Закрытие вкладки с несохранёнными изменениями требует подтверждения.

### Режимы центральной колонки

- В заголовке центральной колонки расположен переключатель `Схема | JSON | Превью`.
- `Схема` показывает редактируемое дерево и drag-and-drop.
- `JSON` показывает форматированное представление всей `FormSchema`, позволяет отредактировать его и применить корректный JSON обратно в текущую форму. Применение является одной операцией истории; изменения из других режимов автоматически отражаются в JSON.
- `Превью` рекурсивно рендерит доступные компоненты `@kaspersky/hexa-ui` с текущими `props` и базовыми состояниями; для пока не подключённых компонентов используется нейтральный fallback-контейнер.
- В Preview подключаются `GlobalStyle`, дизайн-токены и только компонентные стили Ant Design, необходимые используемым Hexa-компонентам. Общий файл `@kaspersky/hexa-ui/design-system/global-style/styles.css` не подключается: содержащиеся в нём глобальные reset-правила не должны влиять на UI билдера. Компонентные стили загружаются вместе с lazy-модулем Preview.
- Для всех 51 записей текущей палитры зарегистрированы React Preview-адаптеры. Сложные компоненты получают безопасные демонстрационные props, если обязательные props ещё не настроены в форме.
- Специализированные Preview-адаптеры преобразуют `children` согласно API UI-kit: `Field` получает `control`, `Tabs` создаёт `TabPane`, `Repeater` использует первый дочерний узел как шаблон, `Modal` и `Popover` получают дочерние узлы как `content`, а `Wizard` формирует шаги из дочерних узлов. Общие отступы `style`, позиция и тип label, ширина контрола и tooltip применяются при рендеринге.
- Ошибка рендера одного элемента перехватывается на уровне этого элемента и заменяется диагностическим fallback; остальная форма продолжает отображаться.
- Модуль всех Hexa Preview-адаптеров загружается лениво только при первом переходе в режим `Превью` и не входит в основной JS-чанк редактора.
- Скрытые элементы (`state.visible: false`) в Preview не рендерятся.
- **Schema Builder** — сборка нормализованной JSON-схемы.
- **Schema Validator** — проверка структуры, props, связей, ID и обязательных полей.
- **Semantic Validator** — межузловые проверки дерева, registry, ссылок, циклов dependencies и props с единым результатом `Diagnostic[]`.
- **Persistence Adapter** — абстракция над REST API, локальным хранилищем или другим backend.
- **History Store** — история изменений и dirty-state отдельно для каждой вкладки.

Store редактора реализует изолированные вкладки форм, выбор элемента, dirty-state, add/remove/move/update, каскадное удаление контейнера и отдельную undo/redo-историю до 100 операций для каждой формы. В историю одной операцией попадают сохранение Inspector, добавление, удаление, drag-and-drop, применение JSON и изменение настроек формы. Доступны кнопки в header и сочетания `Ctrl/⌘ + Z`, `Ctrl/⌘ + Shift + Z`; внутри полей ввода сохраняется нативная история текста. Операции размещения проверяют `acceptsChildren`, `deniedChildren` и максимальную глубину до изменения состояния.

## Базовая модель данных

```ts
interface FormSchema {
  id: string;
  name: string;
  schemaVersion: number;
  elements: SchemaNode[];
  settings?: FormSettings;
  meta?: Record<string, unknown>;
}

interface SchemaNode {
  id: string;
  alias?: string;
  helpId?: string;
  type: string;
  props: Record<string, unknown>;
  lockId?: string;
  accordionId?: string;
  state?: ElementState;
  value?: ElementValue;
  style?: ElementStyle;
  meta: ElementMeta;
  validation?: ValidationRule[];
  dependencies?: ElementDependency[];
  children?: SchemaNode[];
}
```

- `elements` содержит элементы верхнего уровня в порядке их отображения.
- `schemaVersion` — версия формата JSON-схемы. Она используется для проверки совместимости и запуска миграций; это не версия содержимого конкретной формы. Для первой версии обязательно значение `1`.
- Служебный корневой элемент не используется.
- Вложенность формируется через `children` у контейнерных элементов.
- Пустая форма содержит пустой массив `elements`.
- `SchemaNode.id` — «ID компонента», обязательный уникальный строковый идентификатор элемента в пределах формы.
- `SchemaNode.alias` — «Alias компонента», опциональная строка.
- `SchemaNode.helpId` — «ID справки», опциональная строка.
- `SchemaNode.lockId` — «Замок», опциональная ссылка на `id` элемента этой же формы, у которого `ComponentDefinition.meta.entity` имеет значение `lock`.
- `SchemaNode.accordionId` — «Аккордеон», опциональная ссылка на `id` элемента этой же формы, у которого `ComponentDefinition.meta.entity` имеет значение `accordion`.
- Для опциональных строковых полей отсутствие свойства, пустая строка и `null` являются разными значениями и сериализуются по общим правилам явного значения.
- В Inspector поля «Замок» и «Аккордеон» отображаются как select по подходящим элементам текущей формы; сохраняется выбранный `SchemaNode.id`.
- Элемент не может ссылаться через `lockId` или `accordionId` на самого себя.
- Ссылки разрешены независимо от положения элементов в дереве и не требуют общего контейнера или родителя.
- JSON Schema проверяет только строковый тип этих полей. Существование целевого `id`, принадлежность текущей форме и соответствие `meta.entity` проверяются семантическим валидатором.
- Отсутствующая или неверная ссылка является ошибкой элемента и подсвечивается в Inspector и View.

## Группы настроек элемента в Inspector

Настройки элемента отображаются в Inspector в виде аккордеонов. Группы определяют только организацию UI и не создают дополнительные уровни вложенности в JSON-схеме.

Группы отображаются в следующем порядке:

1. **Основные настройки** — `id`, `alias`, `helpId`, `state`, а также настройки `props`, сгенерированные из TypeScript-типа компонента.
2. **Значение** — объект `value`, включая источник данных, события и взаимодействие с моделью.
3. **Замок** — свойство `lockId`.
4. **Аккордеон** — свойство `accordionId`.
5. **Внешний вид контрола** — объект `style`.
6. **Зависимости** — массив `dependencies`.
7. **Валидация** — массив `validation`.

- Наличие группы в UI не означает обязательность соответствующих полей в JSON.
- Пустые опциональные секции не сохраняются.
- Состав полей внутри групп может зависеть от метаданных и TypeScript-типа выбранного компонента, но порядок групп остаётся фиксированным.

## Явное значение опционального поля

Над опциональным полем Inspector отображает переключатель режима сериализации:

```ts
type OptionalFieldMode = "value" | "notDefined" | "emptyString" | "null";
```

| Режим UI | Результат в JSON |
|---|---|
| `value` | Свойство присутствует со значением из основного контрола |
| `notDefined` | Свойство отсутствует |
| `emptyString` | Свойство присутствует со значением `""` |
| `null` | Свойство присутствует со значением `null` |

- Режим по умолчанию — `notDefined`.
- Сам `OptionalFieldMode` является состоянием редактора и не сохраняется в JSON.
- Выбранный UI-режим хранится отдельно от фактического значения: пустое начальное значение основного контрола в режиме `value` не должно автоматически переключать поле в `emptyString`.
- В режиме `notDefined` основной контрол поля недоступен, а свойство удаляется из схемы.
- В режиме `emptyString` основной контрол показывает пустую строку; режим доступен для строковых полей.
- В режиме `null` основной контрол недоступен, а значение сериализуется как JSON `null`.
- При вводе обычного значения поле сериализуется с этим значением. Переключатель должен позволять вернуться к `notDefined`, `""` или `null` без потери различия между режимами.
- Выбранное значение select сериализуется всегда, даже если оно совпадает со значением по умолчанию. Например, сохраняются `buildType: "any"`, `displayType: "default"` и `dataSource.type: "manual"`.
- Чтобы не сохранять опциональный select, пользователь должен явно выбрать режим `notDefined`; совпадение с default само по себе не удаляет свойство.
- Машиночитаемая JSON Schema должна разрешать `null` для опциональных полей, в UI которых доступен режим `null`, например через `type: ["string", "null"]`.
- Обязательные поля не поддерживают режим `notDefined`. Допустимость `""` и `null` для них определяется контрактом конкретного поля; обязательные `FormSchema.id`, `FormSchema.name`, `SchemaNode.id` и `SchemaNode.type` требуют непустую строку и не допускают `null`.

## Базовые состояния элемента

Опциональное поле `state` содержит явно заданные базовые состояния элемента.

```ts
interface ElementState {
  visible?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  invalid?: boolean;
}
```

- `state` присутствует в JSON-схеме, если явно указано хотя бы одно из его свойств.
- Пустой объект `state: {}` не допускается и не сохраняется.
- Отсутствующие значения используют defaults: `visible: true`, `disabled: false`, `readOnly: false`, `loading: false`, `invalid: false`.
- Выполненная зависимость из `dependencies` переопределяет соответствующее базовое значение из `state`.
- Если выполнены несколько зависимостей для одного свойства, применяется последняя зависимость в порядке массива.

## Ссылки на функции

Во всех настройках формы и элементов используется единый контракт ссылки на функцию:

```ts
type FunctionReference =
  | {
      type: "runtime";
      key: string;
    }
  | {
      type: "file";
      filePath: string;
      exportName?: string;
    };
```

- `runtime` хранит строковый ключ. Наличие функции и её контракт не проверяются билдером: runtime самостоятельно резолвит значение из своего объекта функций по `key`.
- `file` хранит путь к файлу в `filePath`. Если `exportName` указан, используется именованный экспорт; иначе используется `export default`.
- `filePath` задаётся относительно каталога функций, указанного в конфигурации билдера `settings.ts`.
- Файловый picker рекурсивно отображает только файлы внутри настроенного `basePath`, сохраняет структуру вложенных директорий и записывает нормализованный путь вида `./handlers/model/get.ts`. Файлы вне `basePath` выбрать нельзя.
- Поле ввода функции поддерживает автокомплит по функциям из файлов настроенного каталога: при вводе список фильтруется по имени файла без учёта регистра. Отдельная стрелка выпадающего списка не отображается.
- Справа от поля находится кнопка с иконкой файла. Она позволяет выбрать файл и сохранить ссылку с `type: "file"`.
- После выбора файла доступно опциональное текстовое поле «Имя функции», сохраняемое в `exportName`.
- Аргументы, возвращаемое значение, синхронность или асинхронность и способ обработки ошибок не типизируются и не проверяются JSON-схемой.
- Проверка существования runtime-ключа, файла или экспорта не является структурной проверкой JSON-схемы и может выполняться редактором только как неблокирующая диагностика.

## Настройки формы

Группы настроек используются только в UI Inspector как заголовки аккордеонов. Они не создают дополнительные уровни вложенности в JSON. Поля `id` и `name` находятся непосредственно в `FormSchema`, остальные настройки — в плоском объекте `settings`, кроме явно сложносоставных значений.

```ts
type ObjectType = string;
type FormDisplayType = "default" | "details" | "flyout" | "modal";

interface FormSettings {
  helpId?: string;
  title?: string;
  modeAddTitle?: string;
  modeEditTitle?: string;
  showInNav?: boolean;
  rootForm?: boolean;
  ignoreValidationOnDomainSave?: boolean;
  objectType?: ObjectType;
  domain?: string;
  buildType?: BuildType;
  author?: string;

  dataSource?: FormDataSource;
  dataSave?: FormDataSave;
  useCachedData?: boolean;
  disableChangeTracking?: boolean;
  isParentEntity?: boolean;
  progressIndicatorFunction?: ToggleableFunction;
  keepOpenOnDomainSave?: boolean;
  showSaveAndCloseButton?: boolean;

  onInitialize?: ToggleableFunction;
  afterRender?: ToggleableFunction;
  onClose?: ToggleableFunction;

  displayType?: FormDisplayType;
  parentFormId?: string;

  hideActionBarOnFormChange?: boolean;
  customButtonsGetter?: ToggleableFunction;
  actionBarAssistantBootstrapper?: ToggleableFunction;
  actionBarGetButtonsHandler?: ToggleableFunction;
  actionBarEnableOverride?: boolean;
  actionBarButtons?: ActionBarButtonsOverride;
}

interface ToggleableFunction {
  enabled: boolean;
  function?: FunctionReference;
}

type ServerParametersSource =
  | {
      type: "object";
      object: string;
    }
  | {
      type: "handler";
      function: FunctionReference;
    };

interface ServerMethodConfig {
  methodName: string;
  parametersSource: ServerParametersSource;
}

type FormDataSource =
  | {
      type: "manual";
    }
  | {
      type: "handler";
      function: FunctionReference;
    }
  | {
      type: "server";
      server: ServerMethodConfig;
    };

type FormDataSave = FormDataSource;

interface ActionBarButtonsOverride {
  enabled: boolean;
  okButtonTitle?: string;
  saveButtonTitle?: string;
  cancelButtonTitle?: string;
}
```

### Основные настройки

| Ключ | Поле в интерфейсе | Контрол и правила |
|---|---|---|
| `id` | ID формы | Обязательное текстовое поле `FormSchema.id` |
| `helpId` | ID справки | Текстовое поле |
| `name` | Название формы | Обязательное текстовое поле `FormSchema.name` |
| `title` | Заголовок формы | Текстовое поле |
| `modeAddTitle` | Заголовок формы [mode=add] | Текстовое поле |
| `modeEditTitle` | Заголовок формы [mode=edit] | Текстовое поле |
| `showInNav` | Отображать форму в навигации | Чекбокс |
| `rootForm` | Root форма | Чекбокс |
| `ignoreValidationOnDomainSave` | Игнорировать валидацию формы при сохранении домена | Чекбокс |
| `objectType` | Тип объекта | Необязательная строка |
| `domain` | Домен | Текстовое поле |
| `buildType` | Тип билда | Select: `any`, `A`, `typeB` |
| `author` | Автор | Текстовое поле |

`objectType` допускает произвольное имя типа объекта.

### Данные

`dataSource` — «Источник данных»:

- `manual` — «Данные выставляются вручную», значение по умолчанию;
- `handler` — «Функция»; ссылка на функцию хранится в `function`;
- `server` — «Серверный метод» с объектом `server`.

Для серверного источника:

- `server.methodName` — «Название метода», заблокированное текстовое поле со значением `getFormModel` по умолчанию;
- `server.parametersSource.type` — «Тип источника параметров»: `object` («Объект») или `handler` («Хендлер-функция»);
- для `object` отображается текстовое поле «Объект», значение хранится в `object`;
- для `handler` отображается поле «Имя функции», значение хранится в `function`.

`dataSave` — «Сохранение данных»:

- `manual` — «Данные выставляются вручную», значение по умолчанию;
- `server` — «Серверный метод» с объектом `server`.

Для серверного сохранения используются те же варианты `parametersSource`, а `server.methodName` заблокирован и по умолчанию равен `setFormModel`.

Остальные поля группы:

| Ключ | Поле в интерфейсе | Контрол |
|---|---|---|
| `useCachedData` | Использовать кешированные данные | Чекбокс |
| `disableChangeTracking` | Не отслеживать изменения формы | Чекбокс |
| `isParentEntity` | Является родительской сущностью | Чекбокс |
| `progressIndicatorFunction` | Использовать функцию для настройки полосы индикации | Чекбокс и активируемое текстовое поле имени функции |
| `keepOpenOnDomainSave` | Не закрывать форму при сохранении домена | Чекбокс |
| `showSaveAndCloseButton` | Добавить кнопку «Сохранить и закрыть» | Чекбокс |

### Обработчики событий

| Ключ | Поле в интерфейсе |
|---|---|
| `onInitialize` | При инициализации запустить функцию |
| `afterRender` | После рендеринга формы запустить функцию |
| `onClose` | При закрытии формы запустить функцию |

Каждая настройка представлена чекбоксом. При активации становится доступно обязательное поле ссылки на функцию `function`.

### Внешний вид

| Ключ | Поле в интерфейсе | Контрол и значения |
|---|---|---|
| `displayType` | Тип отображения формы | Select: `default`, `details`, `flyout`, `modal` |
| `parentFormId` | Родительская форма | Select с `id` другой формы |

Подписи `displayType`: «Default», «Details», «Flyout», «Modal» соответственно. `parentFormId` не может ссылаться на текущую форму.

### Панель действий (Action bar)

| Ключ | Поле в интерфейсе | Контрол |
|---|---|---|
| `hideActionBarOnFormChange` | Не показывать action-bar при изменении формы | Чекбокс |
| `actionBarButtons` | Переопределить кнопки | Чекбокс и активируемые текстовые поля |

При `actionBarButtons.enabled: true` доступны поля:

- `okButtonTitle` — «Название кнопки Ok»;
- `saveButtonTitle` — «Название кнопки Save»;
- `cancelButtonTitle` — «Название кнопки Cancel».

Для булевых настроек по умолчанию используется `false`, если отдельно не указано иное. Опциональные текстовые поля различают отсутствие, пустую строку и `null` по общим правилам явного значения. Значения по умолчанию: `dataSource.type: "manual"`, `dataSave.type: "manual"`, `buildType: "any"`, `displayType: "default"`. Если соответствующий select определён в UI, выбранное default-значение также сохраняется в JSON.

## Источник данных элемента

Опциональное свойство `value` описывает источник значения элемента, обработку изменений и взаимодействие с моделью. Если источник данных не настроен, свойство `value` отсутствует.

```ts
type ValueSource =
  | {
      type: "simpleValue";
      value: string;
      cast: ValueCast;
    }
  | {
      type: "fileFunction";
      function: FunctionReference & { type: "file" };
    }
  | {
      type: "functionHandler";
      getter: FunctionReference;
      initializeOnly: boolean;
      setter: FunctionReference;
    }
  | {
      type: "modelProperty";
      propertyName: string;
      cast: ValueCast;
      patchFromContextBeforeDisplay: boolean;
      patchBeforeSaveToContext: boolean;
    }
  | {
      type: "runtimeVariable";
      key: string;
    };

interface ValueEvents {
  afterValueChange?: {
    function: FunctionReference;
  };
  hideActionBarOnChange?: boolean;
}

interface ValueModelInteraction {
  ignoreModelChangesAfterInitialization?: boolean;
  suppressControlChangeHighlight?: boolean;
}

interface ElementValue {
  source: ValueSource;
  events?: ValueEvents;
  modelInteraction?: ValueModelInteraction;
}
```

### Варианты источника

| Ключ `type` | Опция в интерфейсе | Дополнительные поля |
|---|---|---|
| `simpleValue` | Простое значение | Строковое поле `value`, select приведения типа `cast` |
| `fileFunction` | Функция из файла | Ссылка `function` с относительным путём файла и опциональным именем экспорта |
| `functionHandler` | Функция-хендлер | `getter`, `initializeOnly`, `setter` |
| `modelProperty` | Свойство модели | `propertyName`, `cast`, `patchFromContextBeforeDisplay`, `patchBeforeSaveToContext` |
| `runtimeVariable` | Значение переменной runtime | Строковый ключ `key` |

Для `cast` доступны общие варианты: `none`, `string`, `int`, `number`, `bool`, `date`.

### События

После выбора источника Inspector отображает группу «События»:

- `afterValueChange` — чекбокс «После изменения значения». При включении отображается обязательное поле `function` с подписью «Запустить функцию».
- `hideActionBarOnChange` — чекбокс «Не показывать action-bar при изменении».

Если «После изменения значения» выключено, свойство `afterValueChange` отсутствует.

### Взаимодействие с моделью

Inspector отображает группу «Взаимодействие с моделью»:

- `ignoreModelChangesAfterInitialization` — «Игнорировать изменения модели после инициализации».
- `suppressControlChangeHighlight` — «Не подсвечивать изменения контрола».

Неактивные опциональные настройки могут отсутствовать; их значение по умолчанию — `false`. Пути выбранных файлов сохраняются относительно корня проекта и должны находиться в разрешённой директории.

## Реестр компонентов

Билдер может работать с любым npm-пакетом компонентов при наличии `palette.json`, соответствующего этому контракту. Пока `@kaspersky/hexa-ui` не содержит manifest, актуальный `palette.json` хранится в корне проекта билдера. Manifest явно привязывается к имени и диапазону версий целевого npm-пакета.

Текущая локальная палитра Hexa UI содержит 51 компонент. Расширение выполнено пакетами: базовые контролы, дополнительные контролы, контейнеры, отображение данных и сценарные/навигационные компоненты. Реализация Preview для новых записей выполняется отдельным этапом после стабилизации полного состава палитры.

```ts
interface PaletteManifest {
  schemaVersion: number;
  paletteVersion: string;
  package: {
    name: string;
    versionRange: string;
  };
  categoryOrder?: string[];
  components: PaletteComponent[];
}

interface PaletteComponent {
  type: string;
  exportName: string;
  exportPath?: string;
  propsType: string;
  propsTypePath?: string;
  title: string;
  description?: string;
  keywords?: string[];
  category?: string;
  order?: number;
  icon?: string;
  status?: "stable" | "experimental" | "deprecated";
  deprecatedMessage?: string;
  since?: string;
  until?: string;
  acceptsChildren: boolean;
  deniedChildren?: string[];
  defaultProps?: Record<string, unknown>;
  defaultMeta?: ElementMeta;
  preview?: PalettePreviewConfig;
  props?: PalettePropsConfig;
  meta?: PaletteComponentMeta;
}

interface PalettePreviewConfig {
  labelProp?: string;
  valueProp?: string;
  icon?: string;
}

interface PalettePropsConfig {
  include?: string[];
  exclude?: string[];
  overrides?: Record<string, PropEditorOverride>;
}

type PropEditorType =
  | "text"
  | "number"
  | "checkbox"
  | "select"
  | "multiselect"
  | "json"
  | "function"
  | "iconSelect"
  | "hidden";

interface PropEditorOverride {
  editor?: PropEditorType;
  title?: string;
  description?: string;
  options?: Array<{
    value: string | number | boolean;
    label: string;
  }>;
}

interface PaletteComponentMeta extends Record<string, unknown> {
  entity?: string;
}

interface ComponentDefinition {
  type: string;
  exportName: string;
  exportPath: string;
  title: string;
  description?: string;
  keywords: string[];
  category?: string;
  order?: number;
  icon?: string;
  status: "stable" | "experimental" | "deprecated";
  deprecatedMessage?: string;
  acceptsChildren: boolean;
  deniedChildren: string[];
  meta: PaletteComponentMeta;
  defaultMeta: ElementMeta;
  preview?: PalettePreviewConfig;
  propsSchema: JsonSchema;
  defaultProps: Record<string, unknown>;
}
```

Пример `palette.json`:

```json
{
  "schemaVersion": 1,
  "paletteVersion": "1.0.0",
  "package": {
    "name": "@kaspersky/hexa-ui",
    "versionRange": "^6.387.4"
  },
  "categoryOrder": ["Поля ввода", "Контейнеры"],
  "components": [
    {
      "type": "TextInput",
      "exportName": "TextInput",
      "propsType": "TextInputProps",
      "title": "Текстовое поле",
      "description": "Однострочное поле ввода",
      "keywords": ["input", "text"],
      "category": "Поля ввода",
      "order": 10,
      "status": "stable",
      "acceptsChildren": false,
      "defaultProps": {},
      "defaultMeta": {
        "buildType": "any"
      },
      "preview": {
        "labelProp": "label",
        "valueProp": "value"
      },
      "meta": {
        "entity": "text"
      }
    },
    {
      "type": "Table",
      "exportName": "Table",
      "propsType": "TableProps",
      "title": "Таблица",
      "category": "Контейнеры",
      "status": "stable",
      "acceptsChildren": true,
      "deniedChildren": ["table"],
      "defaultProps": {},
      "defaultMeta": {
        "buildType": "any"
      },
      "meta": {
        "entity": "table"
      }
    }
  ]
}
```

### Назначение полей

- `schemaVersion` — версия контракта `palette.json`, не связанная с `FormSchema.schemaVersion`.
- `paletteVersion` — версия содержимого manifest. Изменение значения инвалидирует сгенерированный registry и его cache.
- `package.name` — точное имя целевого npm-пакета.
- `package.versionRange` — поддерживаемый semver-диапазон версий пакета.
- `categoryOrder` — опциональный порядок категорий в палитре.
- `type` — обязательный уникальный идентификатор компонента внутри пакета; это значение сохраняется в `SchemaNode.type`.
- `exportName` — имя экспортируемого React-компонента.
- `exportPath` — опциональный subpath импорта относительно npm-пакета; по умолчанию используется корень пакета.
- `propsType` — имя TypeScript-типа props. Указывается явно и не выводится из `type` или `exportName` по соглашению.
- `propsTypePath` — опциональный subpath декларации типа; по умолчанию используется `exportPath`.
- `title` — отображаемое название компонента в палитре.
- `description` — опциональное описание для палитры и Inspector.
- `keywords` — дополнительные строки поиска.
- `category` — опциональная категория для группировки компонентов.
- `order` — опциональный порядок компонента внутри категории. При равных или отсутствующих значениях используется порядок массива.
- `icon` — опциональная строка с точным именем экспорта иконки из пакета `@kaspersky/hexa-ui-icons`.
- `status` — статус компонента: `stable` по умолчанию, `experimental` или `deprecated`.
- `deprecatedMessage` — сообщение для deprecated-компонента.
- `since` и `until` — semver-границы доступности компонента в целевом пакете.
- `acceptsChildren` — разрешает компоненту содержать `SchemaNode.children`.
- `deniedChildren` — список запрещённых значений `meta.entity` дочерних компонентов.
- `defaultProps` — опциональные исходные значения props при добавлении компонента.
- `defaultMeta` — исходные значения сохраняемого `SchemaNode.meta`; для текущей схемы должен содержать `buildType`.
- `preview` — правила схематичного отображения во View: props для подписи, значения и опциональная иконка.
- `props` — опциональные правила отбора и отображения props в Inspector.
- `meta` — расширяемые метаданные только для билдера. Они не копируются в `SchemaNode.meta` и не передаются React-компоненту.
- `meta.entity` — строковый класс компонента, используемый в том числе правилами `deniedChildren`. Примеры: `text`, `button`, `checkbox`, `table`.

### Генерация настроек props

- Настройки Inspector для `SchemaNode.props` генерируются из TypeScript-типа, указанного в `propsType`.
- `propsType` должен быть доступен как экспорт типа из `propsTypePath`; если путь не указан — из `exportPath`, затем из корня npm-пакета.
- TypeScript-типы props преобразуются в JSON Schema на этапе подготовки/сборки реестра. Runtime формы не анализирует TypeScript.
- Обязательность, типы, enum/union и значения по умолчанию props берутся из сгенерированной схемы и `defaultProps`.
- `defaultProps` должен соответствовать сгенерированной схеме props. При создании элемента значения из него материализуются в `SchemaNode.props`.
- `SchemaNode.props` всегда сохраняет все фактические значения props, включая значения, совпадающие с `defaultProps` пакета компонентов.
- Сериализатор не удаляет props на основании совпадения с defaults и не рассчитывает diff относительно `defaultProps`.
- Полная материализация props обеспечивает воспроизводимость формы: изменение defaults в новой версии UI-kit не меняет поведение ранее сохранённой схемы.
- Если пользователь выбирает для опционального prop режим `notDefined`, этот prop отсутствует в `SchemaNode.props`; `""` и `null` сохраняются как явные значения по общим правилам.
- Сгенерированная `propsSchema` является частью внутреннего `ComponentDefinition`, но не обязана храниться в `palette.json`.

TypeScript определяет структуру и допустимые значения props, а `palette.json.props` — их представление и исключения в Inspector.

#### Автоматическое соответствие типов и редакторов

| TypeScript-тип | Редактор Inspector |
|---|---|
| `string` | Text input |
| `number` | Number input |
| `boolean` | Checkbox |
| Конечный union строковых или числовых литералов | Select |
| Конечный template literal | Select |
| Imported enum | Select |
| `string[]` | Редактируемый список строк |
| `number[]` | Редактируемый список чисел |
| Простой объект | Вложенная группа полей |
| Массив простых объектов | Повторяемая группа |
| Tuple | Фиксированный набор полей |
| `Record<string, T>` | Key-value editor |
| `Date` | Date input |
| `any` или `unknown` | JSON editor |
| Сложный union | Выбор варианта и редактор выбранной ветки |
| Callback | Редактор `FunctionReference`, только если он явно включён или переопределён |
| `React.CSSProperties` | JSON/CSS-object editor, только если явно включён |
| `ReactNode`, `ReactElement`, `JSX.Element`, ref | Автоматически не генерируется |

- Optional prop поддерживает режимы явного значения, разрешённые его типом: `notDefined`, `emptyString` для строк и `null` при наличии `null` в union.
- Для generic-типа используется default generic-параметр. Generic без default и конкретизации считается неподдерживаемым.
- `Omit`, `Pick`, intersection, наследование и `ComponentProps` должны разрешаться TypeScript type checker до генерации внутренней JSON Schema.

#### Include, exclude и overrides

- `include` — allowlist props. Если указан, автоматически рассматриваются только перечисленные имена.
- `exclude` — denylist props, применяемый после `include` или автоматического обнаружения.
- `overrides` — переопределяет редактор, подпись, описание и опции конкретного prop.
- `editor: "hidden"` исключает prop из Inspector.
- Если одновременно указаны `include`, `exclude` и `overrides`, порядок применения: `include` → `exclude` → `overrides`.
- Override не может изменить допустимый тип или значения вопреки TypeScript-схеме. Несовместимый override является ошибкой компонента палитры.

#### Системные исключения

Без явного override Inspector не генерирует:

- `children`, `ref`, `key`;
- callbacks с именами `on*`;
- `disabled`, `readOnly`, `loading`, поскольку ими управляет `SchemaNode.state`;
- `className` и `style`, поскольку ими управляет `SchemaNode.style`;
- технические testing props.

Неподдерживаемый тип prop пропускается, отображается как неблокирующая диагностика компонента и не мешает генерации остальных props.

Составные object/array/generic/смешанные union props редактируются универсальным JSON-контролом. Некорректный JSON остаётся локальным draft textarea, сопровождается сообщением синтаксической ошибки и блокирует кнопку сохранения элемента до исправления; последнее успешно разобранное значение в `SchemaNode.props` при этом не повреждается.

### Загрузка и проверка пакета

- Билдер читает настроенный локальный `palette.json`, проверяет manifest и совместимость установленной версии `package.name` с `package.versionRange`, затем генерирует `ComponentDefinition[]`.
- Текущий генератор запускается командой `npm run generate:registry` и сохраняет нормализованный результат в `src/modules/component-registry/generated.json`.
- Контракт локального manifest описан машинной схемой `schemas/palette.schema.json`.
- Если пакет в будущем начнёт поставлять собственный `palette.json`, источник manifest выбирается настройкой билдера; контракт остаётся тем же.
- Отсутствие `palette.json`, неподдерживаемая `schemaVersion`, повторяющийся `type`, отсутствующий `exportName`/`propsType` или ошибка генерации props делают соответствующий пакет либо компонент недоступным в палитре и отображаются как диагностическая ошибка.
- Несовместимая версия целевого пакета является ошибкой manifest и блокирует построение его палитры.
- Ошибка одного компонента не должна скрывать остальные корректные компоненты пакета.
- Если открытая форма содержит неизвестный `SchemaNode.type`, View показывает неразрешённый placeholder и сохраняет исходные данные элемента без потерь. Сохранение формы остаётся доступным.
- Категории сортируются по `categoryOrder`, затем по названию. Компоненты внутри категории сортируются по `order`, затем сохраняют порядок массива.
- Поиск выполняется по `title`, `type`, `category`, `description` и `keywords`.
- `deprecated`-компоненты остаются доступными для существующих схем и помечаются в UI; `experimental` получают соответствующий бейдж.
- Компонент вне диапазона `since`/`until` не предлагается для добавления, но существующий элемент сохраняется и отображается как совместимый placeholder с диагностикой.
- Если `icon` указан, но соответствующий экспорт отсутствует в `@kaspersky/hexa-ui-icons`, компонент остаётся доступным в палитре, отображается без иконки, а билдер показывает неблокирующую диагностическую ошибку.

### Контейнеры и вложенность

- Возможность наличия `children` определяется свойством `acceptsChildren` в настройках компонента, поступающих в `Component Registry` и палитру.
- Если `acceptsChildren: false`, свойство `children` у элемента не допускается.
- Если `acceptsChildren: true`, элемент считается контейнером и может содержать массив `children`.
- При добавлении или перемещении элемента его `meta.entity` сравнивается с `deniedChildren` целевого контейнера. Совпадение запрещает операцию.
- Если у дочернего компонента отсутствует `meta.entity`, правило `deniedChildren` к нему не применяется.
- `deniedChildren` ограничивает только непосредственных дочерних элементов контейнера.

Для текущей палитры используются следующие консервативные запреты прямой саморекурсии:

| Контейнер | Запрещённый `meta.entity` |
|---|---|
| `Field` | `field` |
| `Accordion` | `accordion` |
| `AccordionPanel` | `accordionPanel` |
| `Grid` | `grid` |
| `GridItem` | `gridItem` |
| `Tabs` | `tabs` |
| `Repeater` | `repeater` |
| `Tooltip` | `tooltip` |
| `Modal` | `modal` |
| `Popover` | `popover` |
| `Wizard` | `wizard` |

У `Space`, `Card` и `Panel` список пуст: эти компоненты считаются композиционными и могут вкладываться в компоненты той же категории. Ограничения не заменяют `acceptsChildren` и проверку максимальной глубины.
- Максимальная глубина вложенности элементов — 10 уровней. Элементы массива `FormSchema.elements` находятся на первом уровне.
- Палитра и View не должны разрешать добавление или перемещение элемента, если результат превысит максимальную глубину.
- Валидатор схемы отклоняет схему с глубиной вложенности более 10 уровней.
- При удалении контейнера он удаляется вместе со всеми вложенными `children` на любой глубине. Операция считается одной командой и целиком восстанавливается через undo.

## Зависимости элемента

Динамические состояния задаются массивом `dependencies`. Имя `visibility` не используется; оно заменено на `visible`.

```ts
type DependencyProperty = "visible" | "enabled" | "disabled" | "readOnly" | "loading";
type ConditionCombinator = "AND" | "OR";

interface ElementDependency {
  id: string;
  property: DependencyProperty;
  value: boolean;
  condition: ConditionExpression;
}
```

- `visible` управляет видимостью элемента.
- `disabled` запрещает взаимодействие с элементом.
- `readOnly` запрещает изменение, но сохраняет чтение, фокусировку и копирование.
- `loading` показывает загрузку и блокирует действия, меняющие значение.
- Базовые значения: `visible: true`, остальные свойства — `false`.
- При `AND` должны выполниться все дочерние выражения, при `OR` — хотя бы одно.
- Вычисление групп использует short-circuit.
- Если несколько выполненных зависимостей меняют одно свойство, применяется последняя в массиве.
- Для изменения нескольких свойств одним логическим условием создаются отдельные зависимости.
- Runtime пересчитывает зависимости при изменении элементов, модели или runtime-переменных.

### Условия

```ts
type ConditionSource =
  | { type: "element"; elementId: string }
  | { type: "runtime"; key: string }
  | { type: "model"; path: string }
  | { type: "function"; function: FunctionReference }
  | { type: "modelExpression"; expression: string };

type ConditionOperator =
  | "truthy"
  | "falsy"
  | "eq"
  | "neq"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "includes"
  | "empty"
  | "notEmpty";

type ValueCast = "none" | "string" | "int" | "number" | "bool" | "date";

type ConditionOperand =
  | { type: "literal"; value: unknown }
  | { type: "source"; source: ConditionSource };

interface Condition {
  source: ConditionSource;
  operator?: ConditionOperator;
  operand?: ConditionOperand;
  cast?: {
    source: ValueCast;
    operand: ValueCast;
  };
}

interface ConditionGroup {
  combinator: ConditionCombinator;
  conditions: ConditionExpression[];
}

type ConditionExpression = Condition | ConditionGroup;
```

Источником условия может быть:

- значение другого элемента по `elementId`;
- runtime-переменная по строковому ключу;
- свойство модели по строковому пути;
- результат функции, заданной строкой либо выбранным файлом с сохранением относительного пути;
- строковое выражение, сочетающее несколько значений модели.

Правый операнд задаётся литералом (`operand.type: "literal"`) либо динамическим источником (`operand.type: "source"`). Для операторов `truthy`, `falsy`, `empty` и `notEmpty` правый операнд не требуется.

Левый и правый операнды приводятся независимо через `cast.source` и `cast.operand`. Доступны: без преобразования, `string`, `int`, `number`, `bool`, `date`. Даты сравниваются по timestamp.

### Группировка и ошибки вычисления

- Условия поддерживают рекурсивно вложенные группы, например `(A AND B) OR C`.
- `ConditionGroup.conditions` должен содержать минимум одно дочернее условие или группу.
- Если источник отсутствует, функция завершилась ошибкой либо значение невозможно привести к указанному типу, действие только этой `ElementDependency` пропускается. Другие зависимости продолжают вычисляться.
- Ошибка вычисления отображается рядом с зависимостью в Inspector и не приводит к падению формы.
- Циклические зависимости подсвечиваются красным во View и Inspector, рядом отображается сообщение о цикле.
- Наличие цикла считается неблокирующей ошибкой: сохранение элемента и формы остаётся доступным.
- Зависимости, входящие в обнаруженный цикл, не применяются до устранения цикла; остальные зависимости продолжают работать.

### Асинхронные условия

- Функции, используемые как источники условий, могут быть синхронными или асинхронными.
- Пока асинхронные зависимости элемента вычисляются, runtime временно устанавливает этому элементу `loading: true`.
- После завершения всех актуальных асинхронных вычислений зависимости применяются, затем временный `loading` снимается и снова используется вычисленное значение `state.loading`/`dependencies`.
- Результат устаревшего асинхронного вычисления не применяется, если до его завершения изменился один из источников и начался новый цикл вычисления.

## Настройки отображения элемента

Настройки отображения хранятся в отдельном объекте `style`. Ключи настроек задаются на английском языке в `camelCase`.

```ts
type NestingLevel =
  | "none"
  | "related"
  | "grouped"
  | "section"
  | "separated"
  | "space1"
  | "space2"
  | "space3"
  | "checkboxWidth"
  | "toggleWidth"
  | "labelWidth";

type VerticalMargin =
  | "none"
  | "related"
  | "grouped"
  | "section"
  | "separated"
  | "space1"
  | "space2"
  | "space3"
  | "negative1"
  | "negative2"
  | "negative3";

type RightMargin =
  | "none"
  | "related"
  | "grouped"
  | "section"
  | "separated"
  | "space1"
  | "space2"
  | "space3";

type LabelPosition = "left" | "top" | "right";
type LabelType = "default" | "full" | "stretch";

interface ElementStyle {
  nestingLevel?: NestingLevel;
  marginBottom?: VerticalMargin;
  marginTop?: VerticalMargin;
  marginRight?: RightMargin;
  labelPosition?: LabelPosition;
  labelType?: LabelType;
  controlWidth?: number;
  tooltipWidth?: number;
  cssClass?: string;
}
```

| Ключ | Поле в интерфейсе | Тип контрола |
|---|---|---|
| `nestingLevel` | Уровень вложенности (отступ слева) | Select |
| `marginBottom` | Отступ нижний | Select |
| `marginTop` | Отступ верхний | Select |
| `marginRight` | Отступ справа | Select |
| `labelPosition` | Позиция лейбла | Select |
| `labelType` | Тип лейбла | Select |
| `controlWidth` | Ширина контрола | Number input |
| `tooltipWidth` | Ширина тултипа | Number input |
| `cssClass` | CSS class | Text input |

### Опции уровня вложенности

| Ключ | Подпись | Отступ | Группа в select | Статус |
|---|---|---:|---|---|
| `none` | None | — | — | Актуальный |
| `related` | Related (8px) | 8 px | Margin (Outers) | Актуальный |
| `grouped` | Grouped (16px) | 16 px | Margin (Outers) | Актуальный |
| `section` | Section (24px) | 24 px | Margin (Outers) | Актуальный |
| `separated` | Separated (32px) | 32 px | Margin (Outers) | Актуальный |
| `space1` | Space 1 (24px) | 24 px | Deprecated | Устаревший |
| `space2` | Space 2 (48px) | 48 px | Deprecated | Устаревший |
| `space3` | Space 3 (72px) | 72 px | Deprecated | Устаревший |
| `checkboxWidth` | Ширина чекбокса | Зависит от UI-kit | Deprecated | Устаревший |
| `toggleWidth` | Ширина тоггла | Зависит от UI-kit | Deprecated | Устаревший |
| `labelWidth` | Ширина лейбла | Зависит от UI-kit | Deprecated | Устаревший |

- `Margin (Outers)` и `Deprecated` — только визуальные заголовки групп и не сохраняются как значения.
- Устаревшие варианты доступны для открытия и редактирования существующих схем, но в UI помечаются как deprecated.
- Перечни ниже являются текущим полным контрактом select-полей `style`: `nestingLevel`, `marginTop`, `marginBottom`, `marginRight`, `labelPosition` и `labelType` сохраняются только с перечисленными значениями. Произвольные строки для этих полей не допускаются JSON Schema.

### Опции верхнего и нижнего отступов

Один набор значений `VerticalMargin` используется для `marginTop` и `marginBottom`.

| Ключ | Подпись | Отступ | Группа в select | Статус |
|---|---|---:|---|---|
| `none` | None | — | — | Актуальный |
| `related` | Related (8px) | 8 px | Margin (Outers) | Актуальный |
| `grouped` | Grouped (16px) | 16 px | Margin (Outers) | Актуальный |
| `section` | Section (24px) | 24 px | Margin (Outers) | Актуальный |
| `separated` | Separated (32px) | 32 px | Margin (Outers) | Актуальный |
| `space1` | Space 1 (12px) | 12 px | Deprecated | Устаревший |
| `space2` | Space 2 (24px) | 24 px | Deprecated | Устаревший |
| `space3` | Space 3 (36px) | 36 px | Deprecated | Устаревший |
| `negative1` | Negative 1 (-12px) | -12 px | Deprecated | Устаревший |
| `negative2` | Negative 2 (-24px) | -24 px | Deprecated | Устаревший |
| `negative3` | Negative 3 (-36px) | -36 px | Deprecated | Устаревший |

- `Margin (Outers)` и `Deprecated` являются визуальными заголовками групп и не сохраняются в JSON.
- Устаревшие варианты остаются доступными для совместимости с существующими схемами и помечаются в UI как deprecated.

### Опции правого отступа

| Ключ | Подпись | Отступ | Группа в select | Статус |
|---|---|---:|---|---|
| `none` | None | — | — | Актуальный |
| `related` | Related (8px) | 8 px | Margin (Outers) | Актуальный |
| `grouped` | Grouped (16px) | 16 px | Margin (Outers) | Актуальный |
| `section` | Section (24px) | 24 px | Margin (Outers) | Актуальный |
| `separated` | Separated (32px) | 32 px | Margin (Outers) | Актуальный |
| `space1` | Space 1 (24px) | 24 px | Deprecated | Устаревший |
| `space2` | Space 2 (48px) | 48 px | Deprecated | Устаревший |
| `space3` | Space 3 (72px) | 72 px | Deprecated | Устаревший |

- `Margin (Outers)` и `Deprecated` являются визуальными заголовками групп и не сохраняются в JSON.
- Устаревшие варианты остаются доступными для совместимости с существующими схемами и помечаются в UI как deprecated.

### Опции позиции лейбла

| Ключ | Подпись в интерфейсе |
|---|---|
| `left` | Слева |
| `top` | Сверху |
| `right` | Справа |

### Опции типа лейбла

| Ключ | Подпись в интерфейсе |
|---|---|
| `default` | По умолчанию |
| `full` | full |
| `stretch` | stretch |
- Все поля `style` опциональны; отсутствующее поле означает использование стандартного значения компонента или темы.
- `controlWidth` и `tooltipWidth` задаются только конечными числами без единицы измерения.
- Для обоих полей допустимы любые значения `>= 0`; дополнительного верхнего ограничения нет.
- Значение `0` означает автоматическую ширину.
- `cssClass` может содержать одну или несколько CSS-классов, разделённых пробелами.

### Миграция состояния из старой схемы

Поле `defaultControlState` не используется в актуальной схеме. В старой схеме базовое состояние задавалось единым select внутри настроек отображения. При миграции оно преобразуется в `SchemaNode.state`:

| Старое значение | Результат миграции |
|---|---|
| `--` | `state` не создаётся |
| Не доступен | `{ "disabled": true }` |
| Скрыт | `{ "visible": false }` |
| Readonly | `{ "readOnly": true }` |
| Invalid | `{ "invalid": true }` |

- После миграции `defaultControlState` удаляется.
- Если в целевом `state` уже явно задано соответствующее свойство, его значение имеет приоритет над переносимым значением старого селекта.

## Валидация элементов

На текущем этапе `type` правила совпадает с `name`.

```ts
interface ValidationRule {
  id: string;
  name: ValidationType;
  type: ValidationType;
  enabled?: boolean;
  message?: string;
  config?: ValidationConfig;
}

type ValidationType =
  | "Legacy"
  | "Date"
  | "Email"
  | "Integer"
  | "Number"
  | "Float number"
  | "IPv4"
  | "IPv6"
  | "MAC address"
  | "Path"
  | "Range"
  | "String"
  | "Proxy"
  | "Host name"
  | "Net bios name"
  | "Not empty"
  | "Length"
  | "Group"
  | "RangeEnum"
  | "IPv4Mask"
  | "IPv6Mask"
  | "ipv4SubnetMask"
  | "ipv6SubnetMask"
  | "Ignore special chars"
  | "Ignore special chars (v2)"
  | "Ignore special chars (v3)"
  | "Ignore special chars (v4)"
  | "Password"
  | "Ignore first or last spaces"
  | "URL Input"
  | "URL http Input"
  | "Port"
  | "Custom function"
  | "Equality"
  | "Not equal";

type LengthOperator = ">" | ">=" | "<=" | "<" | "=";

type ValidationConfig =
  | { kind: "legacy"; rule: Record<string, unknown> }
  | { kind: "range"; from?: number | string; to?: number | string }
  | { kind: "length"; operator: LengthOperator; value: number }
  | {
      kind: "rangeEnum";
      from?: number | string;
      to?: number | string;
      allowEmpty: boolean;
    }
  | { kind: "customFunction"; function: FunctionReference }
  | { kind: "equality"; equals: string }
  | { kind: "notEqual"; notEquals: string };
```

Дополнительные поля:

- `Range` — значения «От» и «До».
- `Length` — условие `>`, `>=`, `<=`, `<` или `=` и неотрицательное целое число.
- `RangeEnum` — значения «От» и «До» и чекбокс «Допускать пустые значения».
- `Custom function` — ссылка на функцию.
- `Equality` — строковое поле «Равно».
- `Not equal` — строковое поле «Не равно».

Правила выполняются по порядку. `enabled: false` отключает правило без удаления. `message` переопределяет стандартную ошибку. Для диапазонов проверяется, что «От» не превышает «До».

## Мета-свойства элемента

Служебные свойства хранятся в обязательном объекте `meta` и не передаются React-компоненту как `props`.

```ts
type BuildType = "any" | "A" | "typeB";

interface ElementMeta {
  buildType: BuildType;
}
```

| Ключ | Подпись в интерфейсе |
|---|---|
| `any` | Любой |
| `A` | Только A |
| `typeB` | Только B |

`SchemaNode.meta` сохраняется всегда, даже если все его свойства совпадают со значениями по умолчанию. Сериализатор не рассчитывает diff для `meta` и не удаляет default-значения. `buildType` обязателен внутри `meta`; его значение по умолчанию — `any`, которое также всегда сохраняется. Сборщик фильтрует элементы по целевому типу билда. При исключении контейнера исключаются и его дочерние элементы.

## Архитектурные принципы

- Модули взаимодействуют через типизированные контракты.
- Редактор получает компоненты через `Component Registry` и не зависит от конкретного UI-пакета напрямую.
- Состояние каждой открытой формы изолировано.
- Изменения оформляются как команды для поддержки undo/redo.
- Схема версируется и поддерживает миграции.
- Ошибки показываются одновременно во View и Inspector.
- Сохранение разрешается после успешной валидации.
- Кнопка «Применить» в JSON-редакторе сначала проверяет исходный JSON по JSON Schema, затем нормализованную форму семантическим валидатором. При наличии блокирующих ошибок форма не изменяется и список проблем отображается над textarea. При успешной проверке форма применяется и сразу сохраняется через Persistence Adapter; saved snapshot и dirty-state обновляются только после успешной записи.
- Количество third-party зависимостей должно быть минимальным. В первую очередь используются стандартные возможности TypeScript, React, браузерной платформы и уже принятого UI-стека.
- Новая сторонняя библиотека добавляется только при наличии существенной выгоды по сложности, надёжности или безопасности, которую нецелесообразно реализовывать средствами текущего стека.
- Для каждой новой зависимости оцениваются размер клиентского bundle, активность сопровождения, лицензия, безопасность, совместимость и возможность дальнейшей замены.
- Не допускаются сторонние библиотеки, дублирующие уже имеющиеся возможности проекта без обоснованной необходимости.

## Машиночитаемая JSON Schema

- JSON-редактор и загрузка формы используют `schemas/form.schema.json` как диспетчер и выполняют полную проверку Draft 2020-12 перед применением данных.
- Ошибки JSON Schema преобразуются в общий `Diagnostic[]`, содержат JSON Pointer в `path` и, когда возможно, `elementId`; они отображаются во View и соответствующем Inspector.
- Перед сериализацией форма проходит единый нормализатор: материализует defaults `settings`, `state`, `style`, `props` и `meta`, сохраняет `false`, `""`, `null` и составные объекты, но удаляет только пустые структурные `children`, `validation`, `dependencies`. Массивы внутри props, мета и параметров сохраняются. Обязательный массив `elements` сохраняется даже пустым.
- Эталонные минимальная и полная формы хранятся в `fixtures/forms/` и проверяются машинной схемой в domain checks.

- Используется JSON Schema Draft 2020-12.
- Общая точка входа реализована в `schemas/form.schema.json` и выступает диспетчером версий через `oneOf`.
- Схема первой версии реализована в `schemas/v1/form.schema.json` и требует `schemaVersion` со значением `const: 1`.
- Каждая следующая версия получает отдельную неизменяемую схему, например `schemas/v2/form.schema.json` с `const: 2`.
- Неизвестные свойства запрещаются через `additionalProperties: false` во всех структурных объектах.
- Произвольные свойства разрешены только в `SchemaNode.props` и явно расширяемых объектах `meta`.
- Для пользовательских ошибок приложение сначала выбирает валидатор по `schemaVersion`; схема-диспетчер предназначена также для IDE, CLI и внешних инструментов.
- JSON Schema v1 описывает форму, настройки, элементы, значения, состояния, style, dependencies, рекурсивные группы условий, validation и ссылки на функции.
- Проверки уникальности ID во всём дереве, максимальной глубины 10, равенства `ValidationRule.name` и `ValidationRule.type`, циклов и ссылочной целостности выполняются семантическим валидатором, поскольку зависят от нескольких узлов или внешнего Component Registry.

## Правила сериализации

- Булевы поля сериализуются всегда, включая значение `false`.
- Пустые массивы не сохраняются. Это относится к `children`, `validation`, `dependencies` и другим опциональным массивам. Обязательный `FormSchema.elements` сохраняется всегда, включая `elements: []`.
- Defaults объектов `settings`, `state` и `style` материализуются и сохраняются как фактические значения, включая значения select по умолчанию и булевы `false`.
- `SchemaNode.props` сохраняет все фактические значения, включая defaults пакета компонентов.
- `SchemaNode.meta` сохраняется всегда вместе с default-значениями.
- Совпадение значения с default не является основанием для удаления свойства.
- Режим `notDefined` остаётся явным способом удалить опциональное поле из JSON; `""` и `null` сохраняются как заданные значения.
- Составной объект сохраняется, если содержит хотя бы одно фактическое значение, включая `false`, `""` или `null`. Например, `{ "enabled": false }` сохраняется.
- Пустой составной объект `{}` сохраняется, если он был фактически задан или материализован нормализатором. Обязательный `SchemaNode.props` всегда сохраняется, в том числе как `{}`.

## MVP

- Несколько форм во вкладках.
- Генерация палитры из метаданных пакета компонентов.
- Добавление, выбор, настройка, перемещение и удаление элементов.
- Редактирование настроек формы.
- Настройка зависимостей, валидации и мета-свойств элементов.
- Undo/redo и dirty-state.
- Сборка, валидация, импорт и экспорт JSON-схемы.
- Сохранение через заменяемый persistence-адаптер.


## Совместимость со старыми формами

Дополнения к контракту v1 и правила переноса определены в [migration.md](./migration.md).
Машиночитаемая схема и `src/modules/schema-model/form-schema.ts` включают открытый `objectType`,
`FormSchema.meta`, зависимость `enabled`, вариант валидации `Legacy`, функции
кнопок и общий контракт источника/сохранения данных с `handler`. Эти дополнения
расширяют приведённые выше примеры типов без изменения schemaVersion.
