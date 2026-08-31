# Сравнение настроек старого и нового билдера

Срез кода: 30 августа 2026. Это сравнение реализаций, не только спецификаций.
Старый `state` хранит редакторские дескрипторы, а `buildJSON` — runtime-ключи;
они показаны раздельно там, где отличаются. Новые пути указаны относительно
`FormSchema.settings` или `SchemaNode`, если не оговорено иное.

**Сделано сейчас:** восстановлены однозначные старые подписи полей формы и style
в Inspector. **Не сделано до уточнения:** изменение формата v1, удаление полей,
переименование ключей и автоматическая миграция сохранённых форм.
Колонка нового билдера фиксирует исходный формат для сравнения; старые labels
остаются эталоном. Существование поля в TypeScript/JSON Schema не означает,
что оно доступно в Inspector или исполняется в Preview.

Дополнения: [все методы валидации](./validation-comparison.md),
[поля компонентов и пересечения](./component-fields-comparison.md).

## Вопросы, влияющие на формат и поведение

1. **Формат v1.** Переводить существующие v1-файлы на старые ключи и числовые
   style-коды, удаляя новые синонимы, или нужна поддержка обоих входных форматов?
   Два записываемых поля для одного значения оставлять не следует.
2. **Источник значений для компонентов.** Приоритет должен быть у общих
   `state/style/value`, с сокрытием дублирующих props, или у props Hexa UI?
   Сейчас Field.style перезаписывает props, а `value.source` Preview не вычисляет.
3. **Новые возможности.** Сохранять ли `related/grouped/section/separated`,
   `tooltipWidth`, file-функции, `readOnly/loading/invalid` и дополнительные
   операторы зависимостей, которых нет в соответствующих старых редакторах?
4. **Неясные аналоги.** `progressIndicatorFunction` управляет полосой индикации
   по новому label, а старый `actionBarAssistantBootstrapper` — action bar.
   Это один обработчик с ошибочной подписью или две разные возможности?
   Аналогично нельзя без подтверждения сопоставить спецвалидаторы `(v2/v3/v4)`
   с `(NWC)/(KSC)/Kes4win`.

## Настройки формы

Источники: [ArtBoardPropertySet](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js),
[getFormResult](../../kaspersky-ui-builder/src/client/components/art-board/art-board.tag.js),
[новая модель](../src/modules/schema-model/form-schema.ts),
[Inspector](../src/modules/inspector/Inspector.tsx).

| Старый ключ | Старый label | Новый ключ до унификации | Различие / решение |
| --- | --- | --- | --- |
| `id` | Form ID | `FormSchema.id` | Совпадает; ID не следует дублировать в settings |
| `name` | Form file name | `FormSchema.name` | Совпадает; старый name исключён из runtime-json, но есть в файле |
| `topicId` | Help topic ID | `helpId` | Переименование; не хранить topicId и helpId как независимые значения |
| `title` | Form title | `title` | Ключ совпадает; старое поле localized и required |
| `version` | Form version | нет отдельного поля | Старые значения `""` → v1.0, `"2"` → v2.0; это НЕ schemaVersion |
| `dataModelName` | Model name | только `meta.legacy` | Пропущена настройка; в старом UI зависит от version |
| `navigationChecked` (state) | Display form in navigation | `showInNav` | Старый getFormResult сохраняет navigationTitle/Group либо false, сам флаг не копирует наверх |
| `navigationTitle` | ?Navigation title | только `meta.legacy` | Отдельного редактора нет |
| `navigationGroup` | Navigation group | только `meta.legacy` | Отдельного редактора нет |
| `rootForm` | Root form | `rootForm` | Совпадает |
| `ignoreDomainValidation` | Ignore domain validation | `ignoreValidationOnDomainSave` | Переименование, канонический старый ключ предпочтителен |
| `objectType` | Object type | `objectType` | Ключ совпадает; старый select кодов, новый произвольный input |
| `domain` | Domain | `domain` | Совпадает |
| `author` | Author | `author` | Совпадает |
| `dataSource` | Data source | `dataSource` | Ключ совпадает, вложенный формат отличается — см. ниже |
| `dataSaveAction` | Data save action | `dataSave` | Переименование и другой вложенный формат |
| `useCache` | Use cache | `useCachedData` | Переименование |
| `isInSilentChangeMode` | Don`t show action-bar on form change | `hideActionBarOnFormChange` | Переименование |
| `modelTrackerIsOff` | Do not track form changes | `disableChangeTracking` | Переименование |
| `isParentEntity` | Is parent entity | `isParentEntity` | Совпадает |
| `actionBarAssistantBootstrapper` | Setup action bar with handler | `actionBarAssistantBootstrapper` и `progressIndicatorFunction` | Первый есть в схеме без UI; второй есть в UI с другим смыслом — вопрос 4 |
| `ignoreFormCloseOnDomainSave` | Don`t close form when saving domain | `keepOpenOnDomainSave` | Переименование |
| `init` | отдельный FormInitFunctionField | `onInitialize` | Старая строка fncName → новый ToggleableFunction |
| `onRendered` | Invoke handler onRender | `afterRender` | То же событие, другое имя и формат функции |
| `onDispose` | Invoke handler onClose | `onClose` | То же событие, другое имя и формат функции |
| `type` в json; `mode` наверху | View type | `displayType` | Значения отличаются; не создавать ещё один независимый mode |
| `buttons` | Control buttons | `actionBarButtons` | НЕ эквиваленты: список кнопок с обработчиками против трёх заголовков |
| `customButtonsGetter` | Custom buttons getter | `customButtonsGetter` | Есть в схеме без UI; строка → ToggleableFunction |
| `parentFormId` | Parent form | `parentFormId` | Совпадает |
| `customFields` | Additional fields | `meta.legacy.customFields` | Динамические дополнительные поля старого проекта; нет генерации UI |
| нет в ArtBoardPropertySet | — | `modeAddTitle`, `modeEditTitle` | Новые самостоятельные поля, не доказанные синонимы title |
| нет в ArtBoardPropertySet | — | `buildType` | Новая настройка; не синоним версии формы |
| нет в ArtBoardPropertySet | — | `showSaveAndCloseButton` | Нельзя утверждать, что старый стандартный ключ — addSaveCloseButton |
| нет в ArtBoardPropertySet | — | `actionBarEnableOverride`, `actionBarGetButtonsHandler` | Добавлены в новую схему; прямой источник в штатном редакторе не найден |

Дополнительные поля из TODO (`entityType`, `excludeFromValidateMessage`,
`mandatoryMode`, `preventCloseOnCancel`, `migrationInfo`, `section`, `objectId`,
`showFlyoutHeader`, `size`, `navTitle`) не объявлены как стандартные поля этого
ArtBoardPropertySet. Некоторые копируются/могут поставляться расширениями;
их нельзя выдавать за подтверждённые аналоги текущих настроек без конкретного источника.

### Значения select формы

| Настройка | Старый value → label | Новый value → label | Вывод |
| --- | --- | --- | --- |
| objectType | `""` → пусто; `"0"` → Policy; `"4"` → Profile; `"1"` → Task; `"6"` → Task (initial); `"7"` → Task (custom schedule); `"2"` → Local task; `"3"` → Settings; `"5"` → Distributive; `"8"` → Report | произвольная строка | Вернуть старый список в UI; отдельно решить допуск расширений |
| type/displayType | `ui-sequence` → Sequence; `detail-page` → Details-page; `flyout-panel` → Flyout-panel | `default` → Default; `details` → Details; `flyout` → Flyout; `modal` → Modal | Sequence не доказан как эквивалент default; popup обрабатывается старым кодом, но отсутствует в select |
| version | `""` → v1.0; `"2"` → v2.0 | нет | Нельзя заменять `schemaVersion: 1` |

### Данные и ссылки на функции

Источники: [data-source-mapper](../../kaspersky-ui-builder/src/client/components/control-settings-components/data-source-mapper/data-source-mapper.tag.html),
[data-source-field](../../kaspersky-ui-builder/src/client/modules/control-settings-fields/data-source-field.js),
[data-save-action-field](../../kaspersky-ui-builder/src/client/modules/control-settings-fields/data-save-action-field.js).

| Старый state / runtime | Старый label | Новый формат | Отличие |
| --- | --- | --- | --- |
| `dsType: ""` / `{type:""}` у source; `{}` у save | The data is set manually | `{type:"manual"}` | Различные представления отсутствия действия |
| `dsType: "url"` / `type: "serverAPICall"` | Server method | `type: "server"` | Это вызов метода, НЕ HTTP URL |
| `dsType: "function"` / `type: "staticFunction"` | Function | `type: "handler"` | Старый save скрывает эту опцию, хотя serializer поддерживает |
| `serverFunctionName` / `apiMethod` | Method name | `server.methodName` | В старом UI readonly default getFormModel/setFormModel; новый редактируется |
| `staticFunctionName` / `name` | Handler name | `function: {type:"runtime", key}` | Иное имя и формат ссылки |
| `paramsSourceType: static/function` | PArameters source type | `parametersSource.type: object/handler` | UI state не равен runtime JSON |
| `params` | Object | `parametersSource.object` | Сырая строка; старый parsedParams хранится отдельно |
| `paramsHandler` | Handler name | `parametersSource.function` | Строка → FunctionReference |
| `parsedParams` | — | нет отдельного поля | Сохранять исходник; нельзя молча потерять |
| `fncName` → строка поля init/onRendered/etc. | разные labels обработчиков | `{enabled,function:{type,key/filePath}}` | Новый file-source отсутствует в старом контракте; нужно сохранить как расширение либо убрать по решению |

## Общие настройки компонента

Источники: [constants](../../kaspersky-ui-builder/src/client/modules/constants.js),
[property-sets](../../kaspersky-ui-builder/src/client/modules/property-sets),
[lock-source-field](../../kaspersky-ui-builder/src/client/modules/control-settings-fields/lock-source-field.js).

| Старый runtime-ключ | Старый label | Новый путь | Вывод |
| --- | --- | --- | --- |
| `id` | ID | `id` | Совпадает; props.id некоторых компонентов требует отдельного решения |
| `alias` | Alias | `alias` | Совпадает |
| `topicId` | Help topic ID | `helpId` | Переименование |
| `title` | Label | зависит от компонента: props.title/children/label, Field | Нет универсального переименования: разные API Hexa |
| `description` | Description | зависит от propsSchema | Не общий универсальный аналог |
| `placeholder` | Placeholder | `props.placeholder`, где поддерживается | Ключ сохранён внутри props |
| `lock` | Control is manged by the lock-group | `lockId` | Переименование; старый label содержит опечатку |
| `accordion` | Control is managed by the accordion | `accordionId` | Переименование |
| `customParams` | Component params | свободный `props.customParams` | Сырая строка; штатный Inspector неизвестного компонента её не описывает |
| `elements` | зависит от компонента | `children` либо `props.options/data/...` | В Select это список значений, не дерево — нельзя всегда переводить в children |
| `type` | Component name для custom component | `type` | Старые kebab-типы разрешены схемой, но не автоматически поддержаны Preview |

## Style: ключи, значения и labels

Источники: [style-setup HTML](../../kaspersky-ui-builder/src/client/components/control-settings-components/style-setup/style-setup.tag.html),
[числовая сериализация state](../../kaspersky-ui-builder/src/client/components/control-settings-components/style-setup/style-setup.tag.js),
[buildJSON](../../kaspersky-ui-builder/src/client/modules/control-settings-fields/style-field.js),
[новый Preview](../src/modules/schema-view/FormPreview.tsx).

| Старый ключ | Старый label | Старые значения | Новый путь/значения | Несостыковка |
| --- | --- | --- | --- | --- |
| `style.indent` | Nesting level (left indent) | 0 None; 1 Space 1 (24px); 2 Space 2 (48px); 3 Space 3 (72px); 101 Checkbox width; 102 Toggle width; 103 Label width | `style.nestingLevel`: none/space1/space2/space3/checkboxWidth/toggleWidth/labelWidth + дополнительные токены | Новый Preview не задаёт offsets для трёх width-токенов, получается 0 |
| `style.offsetBottom` | Margin bottom | 0 None; 1 12px; 2 24px; 3 36px; -1 -12px; -2 -24px; -3 -36px | `style.marginBottom`: none/space1/2/3/negative1/2/3 + токены | -2/-3 в старом select disabled, в новом доступны |
| `style.offsetTop` | Margin top | как offsetBottom | `style.marginTop` | То же |
| `style.offsetAfter` | Margin right | 0 None; 1 24px; 2 48px; 3 72px | `style.marginRight`: none/space1/2/3 + токены | Смена ключа и типа значения |
| `style.labelPos` | Label position | 0 Left; 1 Top; 2 Right | `style.labelPosition`: left/top/right | У Field одновременно есть props.labelPosition с API before/top/after |
| `style.labelType` | Label type | 0 By default; 1 full; 2 stretch | `style.labelType`: default/full/stretch | Ключ совпадает, тип значения другой; дублируется в Field.props |
| `style.width` | Control width | число через Number(input.value) | `style.controlWidth`: number ≥ 0 | Старый ввод text, serializer приводит к числу; новый запрет отрицательных; Preview применяет ширину только к Field |
| `style.state` | Control state by default | state: 0/1/3; runtime: отсутствует/disabled/hidden | `state.disabled`, `state.visible` и дополнительные state-поля | Один select заменён набором boolean, возможны одновременные состояния |
| `style.customClass` | CSS class | строка | `style.cssClass` | Переименование; className исключён из props UI генератором |
| нет | — | — | `style.tooltipWidth` | Новая настройка, пересекается с Field.props.popoverWidth |
| нет | — | — | related/grouped/section/separated | Новые токены; section=24px совпадает с space1 у горизонтальных и space2 у вертикальных отступов |

Важно: старый `StyleField` по умолчанию включает только
`indent,labelPos,labelType,width,state,customClass`. Отступы top/bottom/after
включаются конкретными property-set. Новый Inspector показывает один общий
набор style для всех компонентов, даже если Preview соответствующее поле не использует.
`labelType` в Checkbox на верхнем уровне — тип источника подписи (text/mapToProperty/handler),
а `style.labelType` — геометрия подписи. Это разные настройки, объединять их нельзя.

## Источник значения и события компонента

Источники: [value-field-mapper](../../kaspersky-ui-builder/src/client/components/control-settings-components/value-field-mapper/value-field-mapper.tag.html),
[value-field.buildJSON](../../kaspersky-ui-builder/src/client/modules/control-settings-fields/value-field.js).

| Старый runtime-ключ / state | Старый label | Новый путь | Отличие |
| --- | --- | --- | --- |
| value literal / slct=0 | Constant | `value.source: simpleValue` | Новый wrapper + cast; не то же самое, что props.value |
| value.mapTo.type=function / slct=1 | Handler | `source.type: functionHandler` | Другая структура |
| value.mapTo.getter.name | Getter name | `source.getter.key` | Строка runtime → FunctionReference |
| value.mapTo.getter.once | Call only when initializing the form | `source.initializeOnly` | Прямой аналог, новое имя |
| value.mapTo.setter.name | Setter name | `source.setter.key` | Другая структура ссылки |
| value.mapTo.type=property / slct=2 | Model property | `source.type: modelProperty` | Переименование значения |
| value.mapTo.name | Property name | `source.propertyName` | Переименование |
| value.mapTo.valueType | Value type | `source.cast` | Старые значения raw/string/number/boolean; новые none/string/int/number/bool/date |
| value.mapTo.type=runtimeVariable; name / slct=3 | runtime.variable | `source.type: runtimeVariable; key` | name → key |
| onBeforeRead | Patch context value before show | `source.patchFromContextBeforeDisplay` | **Потеря функции:** старая строка имени, новый boolean |
| onBeforeSave | Patch value before saving to context | `source.patchBeforeSaveToContext` | **Потеря функции:** старая строка имени, новый boolean |
| onChange | After changing the value / invoke handler | `value.events.afterValueChange.function` | Строка → объект ссылки |
| isInSilentChangeMode | Don't show the action-bar when changing | `value.events.hideActionBarOnChange` | Переименование |
| ignoreModelUpdates | Ignore model changes after initialization | `value.modelInteraction.ignoreModelChangesAfterInitialization` | Переименование |
| highlightChanges | Do not highlight control changes | `value.modelInteraction.suppressControlChangeHighlight` | **Инверсия:** старый checkbox checked при highlightChanges=false |
| нет | — | `source.type: fileFunction` | Новая возможность; пересекается с functionHandler, где getter уже допускает file |

Не следует сводить все valueType к одному старому enum: редактор значения использует
`raw/string/number/boolean`, а редактор зависимостей — `String/Int/Number/Bool/Date`.

## Зависимости

Источник: [dependency-setup](../../kaspersky-ui-builder/src/client/components/control-settings-components/dependency-setup/dependency-setup.tag.html)
и [его сериализация](../../kaspersky-ui-builder/src/client/components/control-settings-components/dependency-setup/dependency-setup.tag.js).

| Старый ключ / value | Старый label | Новый путь / value | Отличие |
| --- | --- | --- | --- |
| set.state=hidden/visible/disabled/enabled | Control state | property=visible/disabled/enabled + value:boolean | `enabled:true` и `disabled:false` выражают одно состояние; hidden заменён visible:false |
| when.type=0, masterCtrlId | Control value / Control ID | source.type=element, elementId | Переименование и новая структура |
| when.type=1, varName | runtime.variable / Variable name | source.type=runtime, key | То же |
| when.type=2, fncName | handler result / Handler name | source.type=function, function | Без operand возможен truthy; с value нужен явный оператор |
| when.type=3, modelPropName | model property / Property name | source.type=model, path | Переименование |
| when.type=4, complexCondition | Combination of model values / Condition | source.type=modelExpression, expression | Схожий смысл, разный формат |
| editor operator `=` / `[]` | Equals / Contains one of the elements | eq / includes + другие | Старый buildJSON не сохраняет operator, а [] влияет на массив value; направление includes нужно проверить в runtime |
| when.value | значение условия | operand.literal.value | Смена структуры |
| when.valueType | To cast this value to the type | cast.source + cast.operand | Один старый cast заменён двумя; не механическое соответствие |
| нет | — | combinator AND/OR и вложенные ConditionGroup | Расширение нового редактора |

## Подтверждённые и возможные дубли

| Поля | Классификация | Что сейчас происходит | Предлагаемый единственный источник |
| --- | --- | --- | --- |
| validation[].name и validation[].type | Подтверждённый дубль | Семантический валидатор требует равенства | method; label берётся из справочника |
| Number и Float number | Дубли одного старого метода | Два enum/option, старый float один | float → Number / Float number |
| Field.style.labelPosition и props.labelPosition | Два интерфейса настройки одного API-параметра | Preview всегда перезаписывает props из style, даже default | Выбрать style.labelPos или props; второй редактор убрать |
| Field.style.labelType и props.labelType | Подтверждённый дубль | style перезаписывает props | Один источник |
| Field.style.controlWidth и props.controlWidth | Подтверждённый дубль | style > 0 перезаписывает props; 0 оставляет props | Один источник с определённым значением 0 |
| Field.style.tooltipWidth и props.popoverWidth | Вероятный дубль | Аналогичный приоритет в Preview | Один источник после выбора расширений |
| CheckboxGroup.state.invalid и props.invalid | Два источника одного boolean | state=true побеждает, state=false не отменяет props=true | state либо props, не оба |
| source.simpleValue и props.value | Семантическое пересечение | value.source не вычисляется Preview, рендерится props.value | Определить приоритет источника value |
| node.id и props.id (Select/Button/Tooltip) | Не доказанный дубль | node.id — ID схемы; props.id может быть DOM ID | Не объединять без подтверждения назначения |
| style.labelPosition и Toggle/KeyValue.props.labelPosition | Не доказанный дубль | style обрабатывается только для Field | Уточнить область действия общего style |
| progressIndicatorFunction и actionBarAssistantBootstrapper | Не доказанный дубль | Разные labels, только первый редактируется в UI | Нужен ответ пользователя |
| actionBarButtons.enabled и actionBarEnableOverride | Возможный дубль | Первая настройка UI, вторая schema-only | Нужен контракт кнопок |
| source.fileFunction и source.functionHandler.getter(file) | Частичное пересечение | Второй также хранит setter/initializeOnly | Не удалять без решения об источниках |
| meta.legacy и активные поля | Архивная копия, не активная настройка | Не исполняется runtime | Явно считать мета архивом; не вторым приоритетным источником |

Генератор уже скрывает общие disabled/readOnly/readonly/loading/className/style
из стандартного props UI. Это уменьшает дубли, но invalid/id/value и поля Field
покрыты не полностью. Свободные props в JSON всё ещё могут содержать скрытые поля.
