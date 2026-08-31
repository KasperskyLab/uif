# Поля компонентов: старый и новый билдер

[Выводы, таблицы общих настроек и вопросы](./settings-comparison.md).

Инвентаризация выполнена статическим разбором исходников, без запуска старого билдера.
В старой части перечислены объявления полей 38 property-set, включая форму;
динамические customFields зависят от конкретного проекта и не раскрываются автоматически.
`—` означает отсутствие явной настройки, а не гарантию отсутствия свойства в runtime.
Для Value/Style/Lock/Accordion/Dependencies/Validation подставлены стандартные ключи фабрик.
Списки внутри одного property-set могут зависеть от условий; таблица показывает объявленные поля.

В новой части перечислены 51 компонента и именно поля props, включённые в сгенерированный
Inspector. Общие state/style/value/validation показываются отдельно и рассмотрены в основном отчёте.
Сходство имени компонента или поля само по себе не доказывает эквивалентность runtime API.

## Основные соответствия для проверки адаптеров

| Старый property-set / поле | Кандидат нового компонента / поле | Статус |
| --- | --- | --- |
| Checkbox: title, labelType, labelMappingProperty, labelHandler | Checkbox: props.children; общий value | Динамическая подпись не сведена к одному текстовому props.children |
| Button: label, click_handler | Button: props.text, onClick API | Текст переименован; строка имени обработчика не равна React callback |
| Select: elements | Select: props.options | Список значений; это не schemaNode.children |
| Select: title | Field с Select в control | Подпись не является props.title самого Select |
| Textarea: title, value | Textbox с режимом либо другой адаптер | Нельзя гарантировать эквивалентность по названию |
| Custom component: type, customParams | Открытый SchemaNode.type, props.customParams | Допустимо хранение; адаптер Preview отсутствует для неизвестного типа |
| Date/Time: value | Calendar/TimeInput: props.value + общий value.source | Требуется выбор единственного источника значения и преобразования типа |
| Style.state | Общий node.state | Отличается форма хранения; props UI большей частью исключает дубли |

## Точные пересечения полей в новом Inspector

Это список совпадений/аналогов среди реально доступных props; окончательная семантика
описана в основном отчёте. DOM id, подпись Toggle и подпись Field автоматически не объединяются.

| Компонент | Props, пересекающиеся с общими полями | Общие поля |
| --- | --- | --- |
| Textbox | `value` | `value.source` |
| CheckboxGroup | `invalid` | `state.invalid` |
| Toggle | `labelPosition` | `style.labelPosition` |
| Select | `id`, `value` | `node.id`, `value.source` |
| Calendar | `value` | `value.source` |
| RangePicker | `value` | `value.source` |
| Button | `id` | `node.id` |
| Field | `labelPosition`, `labelType`, `controlWidth`, `popoverWidth` | `style.labelPosition`, `style.labelType`, `style.controlWidth`, `style.tooltipWidth` |
| Tooltip | `id` | `node.id` |
| TimeInput | `value` | `value.source` |
| ToggleButton | `value` | `value.source` |
| ToggleButtonGroup | `value` | `value.source` |
| KeyValue | `labelPosition` | `style.labelPosition` |

## Старые property-set: ключи и подписи

### accordion-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/accordion-property-set.js#L6) |
| `title` | Label | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/accordion-property-set.js#L10) |
| `id` | ID | TextField | — | [строка 15](../../kaspersky-ui-builder/src/client/modules/property-sets/accordion-property-set.js#L15) |
| `—` | Child form | InnerFormField | — | [строка 20](../../kaspersky-ui-builder/src/client/modules/property-sets/accordion-property-set.js#L20) |
| `expandByDefault` | Expand by default | BoolField | — | [строка 23](../../kaspersky-ui-builder/src/client/modules/property-sets/accordion-property-set.js#L23) |
| `value` | — | ValueField | — | [строка 29](../../kaspersky-ui-builder/src/client/modules/property-sets/accordion-property-set.js#L29) |
| `dependencies` | — | DependencyListField | — | [строка 31](../../kaspersky-ui-builder/src/client/modules/property-sets/accordion-property-set.js#L31) |

### action-bar-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `id` | ID | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/action-bar-property-set.js#L6) |

### agreement-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `id` | ID | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/agreement-property-set.js#L6) |
| `value` | — | ValueField | — | [строка 13](../../kaspersky-ui-builder/src/client/modules/property-sets/agreement-property-set.js#L13) |
| `dependencies` | — | DependencyListField | — | [строка 15](../../kaspersky-ui-builder/src/client/modules/property-sets/agreement-property-set.js#L15) |

### artboard-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `buttons` | Control buttons | ButtonsListField | — | [строка 5](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L5) |
| `customButtonsGetter` | Custom buttons getter | OptionalFunctionField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L10) |
| `navigationTitle` | ?Navigation title | TextField | — | [строка 51](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L51) |
| `navigationGroup` | Navigation group | TextField | — | [строка 58](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L58) |
| `dataModelName` | Model name | TextField | — | [строка 70](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L70) |
| `id` | Form ID | TextField | — | [строка 83](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L83) |
| `topicId` | Help topic ID | TextField | — | [строка 88](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L88) |
| `name` | Form file name | TextField | — | [строка 92](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L92) |
| `title` | Form title | TextField | — | [строка 98](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L98) |
| `version` | Form version | SelectField |  → v1.0; 2 → v2.0 | [строка 104](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L104) |
| `navigationChecked` | Display form in navigation | BoolField | — | [строка 118](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L118) |
| `rootForm` | Root form | BoolField | — | [строка 130](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L130) |
| `ignoreDomainValidation` | Ignore domain validation | BoolField | — | [строка 134](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L134) |
| `objectType` | Object type | SelectField |  → ; 0 → Policy; 4 → Profile; 1 → Task; 6 → Task (initial); 7 → Task (custom schedule); 2 → Local task; 3 → Settings; 5 → Distributive; 8 → Report | [строка 138](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L138) |
| `domain` | Domain | TextField | — | [строка 185](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L185) |
| `author` | Author | TextField | — | [строка 189](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L189) |
| `dataSource` | Data source | DataSourceField | — | [строка 195](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L195) |
| `dataSaveAction` | Data save action | DataSaveActionField | — | [строка 200](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L200) |
| `useCache` | Use cache | BoolField | — | [строка 206](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L206) |
| `isInSilentChangeMode` | Don`t show action-bar on form change | BoolField | — | [строка 210](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L210) |
| `modelTrackerIsOff` | Do not track form changes | BoolField | — | [строка 214](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L214) |
| `isParentEntity` | Is parent entity | BoolField | — | [строка 218](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L218) |
| `actionBarAssistantBootstrapper` | Setup action bar with handler | OptionalFunctionField | — | [строка 222](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L222) |
| `ignoreFormCloseOnDomainSave` | Don`t close form when saving domain | BoolField | — | [строка 226](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L226) |
| `init` |  | FormInitFunctionField | — | [строка 232](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L232) |
| `onRendered` | Invoke handler onRender | OptionalFunctionField | — | [строка 236](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L236) |
| `onDispose` | Invoke handler onClose | OptionalFunctionField | — | [строка 240](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L240) |
| `type` | View type | SelectField | ui-sequence → Sequence; detail-page → Details-page; flyout-panel → Flyout-panel | [строка 246](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L246) |
| `parentFormId` | Parent form | SelectField | [] | [строка 268](../../kaspersky-ui-builder/src/client/modules/property-sets/artboard-property-set.js#L268) |

### auto-tree-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `compact` | Compact mode | BoolField | — | [строка 4](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L4) |
| `descriptionGetter` | Description getter for compact mode | TextField | — | [строка 16](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L16) |
| `id` | ID | TextField | — | [строка 23](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L23) |
| `topicId` | Help topic ID | TextField | — | [строка 28](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L28) |
| `cacheEntries` | Cache entries | BoolField | — | [строка 32](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L32) |
| `hideSelectedEntriesCounter` | Hide selected entries counter | BoolField | — | [строка 36](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L36) |
| `value` | — | ValueField | — | [строка 44](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L44) |
| `customActionsResolver` | Custom buttons getter | OptionalFunctionField | — | [строка 48](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L48) |
| `actionsStateResolver` | Sync buttons state handler | OptionalFunctionField | — | [строка 52](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L52) |
| `isInSingleSelectionMode` | Single selection mode | BoolField | — | [строка 56](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L56) |
| `selectionSyncEnvVarName` | Runtime variable to get selected rows | OptionalTextField | — | [строка 65](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L65) |
| `childRowResolver` | Child row resolver | OptionalFunctionField | — | [строка 74](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L74) |
| `syncSelectToChildren` | Select child rows when parent is selected | BoolField | — | [строка 78](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L78) |
| `lock` | — | LockSourceField | — | [строка 85](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L85) |
| `accordion` | — | AccordionSourceField | — | [строка 86](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L86) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass", "state"] | [строка 88](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L88) |
| `dependencies` | — | DependencyListField | — | [строка 93](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L93) |
| `validation` | — | ValidationListField | — | [строка 94](../../kaspersky-ui-builder/src/client/modules/property-sets/auto-tree-property-set.js#L94) |

### button-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `label` | Text | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/button-property-set.js#L6) |
| `alias` | Alias | TextField | — | [строка 11](../../kaspersky-ui-builder/src/client/modules/property-sets/button-property-set.js#L11) |
| `click_handler` | Click handler | TextField | — | [строка 15](../../kaspersky-ui-builder/src/client/modules/property-sets/button-property-set.js#L15) |
| `id` | ID | TextField | — | [строка 19](../../kaspersky-ui-builder/src/client/modules/property-sets/button-property-set.js#L19) |
| `topicId` | Help topic ID | TextField | — | [строка 24](../../kaspersky-ui-builder/src/client/modules/property-sets/button-property-set.js#L24) |
| `lock` | — | LockSourceField | — | [строка 29](../../kaspersky-ui-builder/src/client/modules/property-sets/button-property-set.js#L29) |
| `accordion` | — | AccordionSourceField | — | [строка 30](../../kaspersky-ui-builder/src/client/modules/property-sets/button-property-set.js#L30) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass", "state"] | [строка 31](../../kaspersky-ui-builder/src/client/modules/property-sets/button-property-set.js#L31) |
| `dependencies` | — | DependencyListField | — | [строка 34](../../kaspersky-ui-builder/src/client/modules/property-sets/button-property-set.js#L34) |
| `—` | — | DependantsField | — | [строка 34](../../kaspersky-ui-builder/src/client/modules/property-sets/button-property-set.js#L34) |

### checkbox-field-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `title` | Text | TextField | — | [строка 4](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L4) |
| `labelMappingProperty` | Model property | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L10) |
| `labelHandler` | Handler name | TextField | — | [строка 15](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L15) |
| `labelType` | Source type | SelectField | text → Constant; mapToProperty → Model property; handler → Handler | [строка 42](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L42) |
| `alias` | Alias | TextField | — | [строка 64](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L64) |
| `description` | Description | TextField | — | [строка 68](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L68) |
| `id` | ID | TextField | — | [строка 72](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L72) |
| `topicId` | Help topic ID | TextField | — | [строка 77](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L77) |
| `value` | — | ValueField | — | [строка 89](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L89) |
| `lock` | — | LockSourceField | — | [строка 91](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L91) |
| `accordion` | — | AccordionSourceField | — | [строка 92](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L92) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass", "state"] | [строка 93](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L93) |
| `dependencies` | — | DependencyListField | — | [строка 96](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L96) |
| `validation` | — | ValidationListField | — | [строка 97](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-field-property-set.js#L97) |

### checkbox-group-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `elements` | List elements | KeyValueListField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-group-property-set.js#L6) |
| `title` | Label | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-group-property-set.js#L10) |
| `alias` | Alias | TextField | — | [строка 15](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-group-property-set.js#L15) |
| `id` | ID | TextField | — | [строка 19](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-group-property-set.js#L19) |
| `topicId` | Help topic ID | TextField | — | [строка 24](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-group-property-set.js#L24) |
| `value` | — | ValueField | — | [строка 30](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-group-property-set.js#L30) |
| `lock` | — | LockSourceField | — | [строка 32](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-group-property-set.js#L32) |
| `accordion` | — | AccordionSourceField | — | [строка 33](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-group-property-set.js#L33) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass", "state"] | [строка 34](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-group-property-set.js#L34) |
| `dependencies` | — | DependencyListField | — | [строка 37](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-group-property-set.js#L37) |
| `validation` | — | ValidationListField | — | [строка 38](../../kaspersky-ui-builder/src/client/modules/property-sets/checkbox-group-property-set.js#L38) |

### component-toggle-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/component-toggle-property-set.js#L10) |
| `title` | Label | TextField | — | [строка 14](../../kaspersky-ui-builder/src/client/modules/property-sets/component-toggle-property-set.js#L14) |
| `description` | Description | TextField | — | [строка 19](../../kaspersky-ui-builder/src/client/modules/property-sets/component-toggle-property-set.js#L19) |
| `expandTitle` | Expand title | TextField | — | [строка 24](../../kaspersky-ui-builder/src/client/modules/property-sets/component-toggle-property-set.js#L24) |
| `id` | ID | TextField | — | [строка 29](../../kaspersky-ui-builder/src/client/modules/property-sets/component-toggle-property-set.js#L29) |
| `topicId` | Help topic ID | TextField | — | [строка 34](../../kaspersky-ui-builder/src/client/modules/property-sets/component-toggle-property-set.js#L34) |
| `lnkChildForm` | — | LinkButtonField | — | [строка 38](../../kaspersky-ui-builder/src/client/modules/property-sets/component-toggle-property-set.js#L38) |
| `autoExpand` | Automatically open child form on enable | BoolField | — | [строка 43](../../kaspersky-ui-builder/src/client/modules/property-sets/component-toggle-property-set.js#L43) |
| `value` | — | ValueField | — | [строка 49](../../kaspersky-ui-builder/src/client/modules/property-sets/component-toggle-property-set.js#L49) |
| `lock` | — | LockSourceField | — | [строка 51](../../kaspersky-ui-builder/src/client/modules/property-sets/component-toggle-property-set.js#L51) |
| `accordion` | — | AccordionSourceField | — | [строка 52](../../kaspersky-ui-builder/src/client/modules/property-sets/component-toggle-property-set.js#L52) |
| `dependencies` | — | DependencyListField | — | [строка 53](../../kaspersky-ui-builder/src/client/modules/property-sets/component-toggle-property-set.js#L53) |

### control-group-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `formToInherit` | Form | SelectField | — | [строка 3](../../kaspersky-ui-builder/src/client/modules/property-sets/control-group-property-set.js#L3) |
| `formToInheritResolver` | Function to dynamically get form ID | TextField | — | [строка 45](../../kaspersky-ui-builder/src/client/modules/property-sets/control-group-property-set.js#L45) |
| `inheritControls` | Inherit controls from form | BoolField | — | [строка 50](../../kaspersky-ui-builder/src/client/modules/property-sets/control-group-property-set.js#L50) |
| `inheritControlsResolver` | Use Function to dynamically get form ID | BoolField | — | [строка 57](../../kaspersky-ui-builder/src/client/modules/property-sets/control-group-property-set.js#L57) |
| `alias` | Alias | TextField | — | [строка 67](../../kaspersky-ui-builder/src/client/modules/property-sets/control-group-property-set.js#L67) |
| `elements` | — | ControlGroupElementsField | — | [строка 71](../../kaspersky-ui-builder/src/client/modules/property-sets/control-group-property-set.js#L71) |
| `id` | ID | TextField | — | [строка 74](../../kaspersky-ui-builder/src/client/modules/property-sets/control-group-property-set.js#L74) |
| `itemsOrientation` | Items orientation | SelectField |  → --; column → Vertical; row → Horizontal | [строка 79](../../kaspersky-ui-builder/src/client/modules/property-sets/control-group-property-set.js#L79) |
| `lock` | — | LockSourceField | — | [строка 104](../../kaspersky-ui-builder/src/client/modules/property-sets/control-group-property-set.js#L104) |
| `accordion` | — | AccordionSourceField | — | [строка 105](../../kaspersky-ui-builder/src/client/modules/property-sets/control-group-property-set.js#L105) |
| `style` | — | StyleField | — | [строка 106](../../kaspersky-ui-builder/src/client/modules/property-sets/control-group-property-set.js#L106) |
| `dependencies` | — | DependencyListField | — | [строка 107](../../kaspersky-ui-builder/src/client/modules/property-sets/control-group-property-set.js#L107) |

### custom-component-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `type` | Component name | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/custom-component-property-set.js#L6) |
| `customParams` | Component params | TextAreaField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/custom-component-property-set.js#L10) |
| `id` | ID | TextField | — | [строка 14](../../kaspersky-ui-builder/src/client/modules/property-sets/custom-component-property-set.js#L14) |
| `topicId` | Help topic ID | TextField | — | [строка 19](../../kaspersky-ui-builder/src/client/modules/property-sets/custom-component-property-set.js#L19) |
| `value` | — | ValueField | — | [строка 25](../../kaspersky-ui-builder/src/client/modules/property-sets/custom-component-property-set.js#L25) |
| `lock` | — | LockSourceField | — | [строка 27](../../kaspersky-ui-builder/src/client/modules/property-sets/custom-component-property-set.js#L27) |
| `accordion` | — | AccordionSourceField | — | [строка 28](../../kaspersky-ui-builder/src/client/modules/property-sets/custom-component-property-set.js#L28) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass", "state"] | [строка 29](../../kaspersky-ui-builder/src/client/modules/property-sets/custom-component-property-set.js#L29) |
| `validation` | — | ValidationListField | — | [строка 32](../../kaspersky-ui-builder/src/client/modules/property-sets/custom-component-property-set.js#L32) |
| `dependencies` | — | DependencyListField | — | [строка 33](../../kaspersky-ui-builder/src/client/modules/property-sets/custom-component-property-set.js#L33) |

### data-table-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `id` | ID | TextField | — | [строка 145](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L145) |
| `topicId` | Help topic ID | TextField | — | [строка 150](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L150) |
| `paginationMode` | Pagination mode | BoolField | — | [строка 154](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L154) |
| `simplePagination` | Simple pagination | BoolField | — | [строка 158](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L158) |
| `unusePagination` | Don`t use pagination | BoolField | — | [строка 162](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L162) |
| `tablePageSize` | Page size | SelectField | 0 → --; 5 → 5; 10 → 10; 20 → 20; 50 → 50; 100 → 100 | [строка 166](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L166) |
| `dataSourceFunction` | Datasource function | OptionalFunctionField | — | [строка 196](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L196) |
| `getterIdForFilter` | Getter Id For Filter | OptionalFunctionField | — | [строка 200](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L200) |
| `refreshEvent` | Event for table update | OptionalFunctionField | — | [строка 204](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L204) |
| `reinitEvent` | Event for reinitialization | OptionalFunctionField | — | [строка 208](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L208) |
| `rowModelPatchFunction` | Row modelp patch function | OptionalFunctionField | — | [строка 212](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L212) |
| `value` | — | ValueField | — | [строка 218](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L218) |
| `columns` | — | TableColumnListField | — | [строка 221](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L221) |
| `customColumnsGetter` | Custom columns getter | OptionalFunctionField | — | [строка 227](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L227) |
| `columnsPatchFunction` | Columns patch function | OptionalFunctionField | — | [строка 231](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L231) |
| `showFilterTab` | Filtration | BoolField | — | [строка 238](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L238) |
| `showColumnsTab` | Columns | BoolField | — | [строка 243](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L243) |
| `showSearchTab` | Search | BoolField | — | [строка 248](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L248) |
| `showGroupingTab` | Grouping | BoolField | — | [строка 253](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L253) |
| `buttons` | Available actions | ListEditorActionsField | — | [строка 263](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L263) |
| `customActionsResolver` | Custom buttons getter | OptionalFunctionField | — | [строка 267](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L267) |
| `actionsStateResolver` | Syn buttons state handler | OptionalFunctionField | — | [строка 271](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L271) |
| `factory` | New row function-constructor | OptionalFunctionField | — | [строка 275](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L275) |
| `selectionPossible` | Row can be selected | BoolField | — | [строка 279](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L279) |
| `hasSelectAll` | Has select all | BoolField | — | [строка 283](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L283) |
| `isInSingleSelectionMode` | Single select | BoolField | — | [строка 287](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L287) |
| `isDraggableRows` | Draggable rows | BoolField | — | [строка 291](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L291) |
| `isBusyVarName` | Is Busy var name | OptionalFunctionField | — | [строка 295](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L295) |
| `lnkEditor` | — | LinkButtonField | — | [строка 304](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L304) |
| `customFilterFunction` | Custom Filter Function | OptionalFunctionField | — | [строка 313](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L313) |
| `customSearchFunction` | Custom search function | OptionalFunctionField | — | [строка 317](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L317) |
| `predefinedFiltersFunction` | Predefined filters function | OptionalTextField | — | [строка 321](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L321) |
| `removeLocalStorageFilters` | Remove local storage filters | BoolField | — | [строка 325](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L325) |
| `filtersPresetFunction` | Filters preset function | OptionalFunctionField | — | [строка 329](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L329) |
| `selectionSyncEnvVarName` | Runtime variable to get selected rows | OptionalTextField | — | [строка 338](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L338) |
| `selectedColumnsVecFieldsSyncEnvVarName` | Runtime variable for getting server names of fields of selected columns | OptionalTextField | — | [строка 342](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L342) |
| `elements` | — | ListEditorElementsField | — | [строка 349](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L349) |
| `lock` | — | LockSourceField | — | [строка 352](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L352) |
| `accordion` | — | AccordionSourceField | — | [строка 353](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L353) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass"] | [строка 356](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L356) |
| `dependencies` | — | DependencyListField | — | [строка 362](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L362) |
| `validation` | — | ValidationListField | — | [строка 363](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L363) |
| `getPreselectedRows` | Preselected rows getter | OptionalFunctionField | — | [строка 365](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L365) |
| `—` | — | Array | — | [строка 382](../../kaspersky-ui-builder/src/client/modules/property-sets/data-table-property-set.js#L382) |

### date-field-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/date-field-property-set.js#L6) |
| `title` | Label | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/date-field-property-set.js#L10) |
| `id` | ID | TextField | — | [строка 16](../../kaspersky-ui-builder/src/client/modules/property-sets/date-field-property-set.js#L16) |
| `topicId` | Help topic ID | TextField | — | [строка 21](../../kaspersky-ui-builder/src/client/modules/property-sets/date-field-property-set.js#L21) |
| `value` | — | ValueField | — | [строка 27](../../kaspersky-ui-builder/src/client/modules/property-sets/date-field-property-set.js#L27) |
| `lock` | — | LockSourceField | — | [строка 29](../../kaspersky-ui-builder/src/client/modules/property-sets/date-field-property-set.js#L29) |
| `accordion` | — | AccordionSourceField | — | [строка 30](../../kaspersky-ui-builder/src/client/modules/property-sets/date-field-property-set.js#L30) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "labelPos", "customClass", "state"] | [строка 31](../../kaspersky-ui-builder/src/client/modules/property-sets/date-field-property-set.js#L31) |
| `dependencies` | — | DependencyListField | — | [строка 34](../../kaspersky-ui-builder/src/client/modules/property-sets/date-field-property-set.js#L34) |
| `validation` | — | ValidationListField | — | [строка 35](../../kaspersky-ui-builder/src/client/modules/property-sets/date-field-property-set.js#L35) |

### empty-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `—` | Add a control to display data in this container. | SimpleTextField | — | [строка 4](../../kaspersky-ui-builder/src/client/modules/property-sets/empty-property-set.js#L4) |

### header-field-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/header-field-property-set.js#L6) |
| `level` | Level | SelectField | 1 → 1; 2 → 2; 3 → 3; 4 → 4; 5 → 5 | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/header-field-property-set.js#L10) |
| `id` | ID | TextField | — | [строка 21](../../kaspersky-ui-builder/src/client/modules/property-sets/header-field-property-set.js#L21) |
| `topicId` | Help topic ID | TextField | — | [строка 26](../../kaspersky-ui-builder/src/client/modules/property-sets/header-field-property-set.js#L26) |
| `value` | — | ValueField | — | [строка 32](../../kaspersky-ui-builder/src/client/modules/property-sets/header-field-property-set.js#L32) |
| `accordion` | — | AccordionSourceField | — | [строка 34](../../kaspersky-ui-builder/src/client/modules/property-sets/header-field-property-set.js#L34) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass", "state"] | [строка 35](../../kaspersky-ui-builder/src/client/modules/property-sets/header-field-property-set.js#L35) |
| `dependencies` | — | DependencyListField | — | [строка 38](../../kaspersky-ui-builder/src/client/modules/property-sets/header-field-property-set.js#L38) |

### helpers.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `prop` | Model property | TextField | — | [строка 24](../../kaspersky-ui-builder/src/client/modules/property-sets/helpers.js#L24) |
| `—` | — | TypeToClass | — | [строка 28](../../kaspersky-ui-builder/src/client/modules/property-sets/helpers.js#L28) |
| ``${fieldName}Type`` | Datasource type | SelectField | text → Text (constant); mapToProperty → Map to model property; handler → Get from handler; runtimeVariable → runtime.variable | [строка 71](../../kaspersky-ui-builder/src/client/modules/property-sets/helpers.js#L71) |
| ``${fieldName}Fixed`` | Text | TextField | — | [строка 96](../../kaspersky-ui-builder/src/client/modules/property-sets/helpers.js#L96) |
| ``${fieldName}ModelProperty`` | Model property | TextField | — | [строка 102](../../kaspersky-ui-builder/src/client/modules/property-sets/helpers.js#L102) |
| ``${fieldName}HandlerName`` | Handler name | TextField | — | [строка 107](../../kaspersky-ui-builder/src/client/modules/property-sets/helpers.js#L107) |
| ``${fieldName}RuntimeVariableName`` | runtime.variable name | TextField | — | [строка 112](../../kaspersky-ui-builder/src/client/modules/property-sets/helpers.js#L112) |

### icon-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `id` | ID | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/icon-property-set.js#L6) |
| `click_handler` | Click handler | TextField | — | [строка 11](../../kaspersky-ui-builder/src/client/modules/property-sets/icon-property-set.js#L11) |
| `value` | — | ValueField | — | [строка 16](../../kaspersky-ui-builder/src/client/modules/property-sets/icon-property-set.js#L16) |
| `accordion` | — | AccordionSourceField | — | [строка 17](../../kaspersky-ui-builder/src/client/modules/property-sets/icon-property-set.js#L17) |
| `style` | — | StyleField | — | [строка 18](../../kaspersky-ui-builder/src/client/modules/property-sets/icon-property-set.js#L18) |
| `dependencies` | — | DependencyListField | — | [строка 19](../../kaspersky-ui-builder/src/client/modules/property-sets/icon-property-set.js#L19) |

### key-value-field-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 7](../../kaspersky-ui-builder/src/client/modules/property-sets/key-value-field-property-set.js#L7) |
| `title` | Label | TextField | — | [строка 11](../../kaspersky-ui-builder/src/client/modules/property-sets/key-value-field-property-set.js#L11) |
| `id` | ID | TextField | — | [строка 16](../../kaspersky-ui-builder/src/client/modules/property-sets/key-value-field-property-set.js#L16) |
| `topicId` | Help topic ID | TextField | — | [строка 21](../../kaspersky-ui-builder/src/client/modules/property-sets/key-value-field-property-set.js#L21) |
| `value` | — | ValueField | — | [строка 27](../../kaspersky-ui-builder/src/client/modules/property-sets/key-value-field-property-set.js#L27) |
| `lock` | — | LockSourceField | — | [строка 29](../../kaspersky-ui-builder/src/client/modules/property-sets/key-value-field-property-set.js#L29) |
| `accordion` | — | AccordionSourceField | — | [строка 30](../../kaspersky-ui-builder/src/client/modules/property-sets/key-value-field-property-set.js#L30) |
| `style` | — | StyleField | — | [строка 31](../../kaspersky-ui-builder/src/client/modules/property-sets/key-value-field-property-set.js#L31) |
| `dependencies` | — | DependencyListField | — | [строка 32](../../kaspersky-ui-builder/src/client/modules/property-sets/key-value-field-property-set.js#L32) |
| `validation` | — | ValidationListField | — | [строка 33](../../kaspersky-ui-builder/src/client/modules/property-sets/key-value-field-property-set.js#L33) |

### label-field-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/label-field-property-set.js#L6) |
| `id` | ID | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/label-field-property-set.js#L10) |
| `topicId` | Help topic ID | TextField | — | [строка 15](../../kaspersky-ui-builder/src/client/modules/property-sets/label-field-property-set.js#L15) |
| `value` | — | ValueField | — | [строка 21](../../kaspersky-ui-builder/src/client/modules/property-sets/label-field-property-set.js#L21) |
| `accordion` | — | AccordionSourceField | — | [строка 23](../../kaspersky-ui-builder/src/client/modules/property-sets/label-field-property-set.js#L23) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass", "state"] | [строка 24](../../kaspersky-ui-builder/src/client/modules/property-sets/label-field-property-set.js#L24) |
| `dependencies` | — | DependencyListField | — | [строка 27](../../kaspersky-ui-builder/src/client/modules/property-sets/label-field-property-set.js#L27) |

### labeltext-field-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 7](../../kaspersky-ui-builder/src/client/modules/property-sets/labeltext-field-property-set.js#L7) |
| `title` | Label | TextField | — | [строка 11](../../kaspersky-ui-builder/src/client/modules/property-sets/labeltext-field-property-set.js#L11) |
| `id` | ID | TextField | — | [строка 16](../../kaspersky-ui-builder/src/client/modules/property-sets/labeltext-field-property-set.js#L16) |
| `value` | — | ValueField | — | [строка 23](../../kaspersky-ui-builder/src/client/modules/property-sets/labeltext-field-property-set.js#L23) |
| `lock` | — | LockSourceField | — | [строка 25](../../kaspersky-ui-builder/src/client/modules/property-sets/labeltext-field-property-set.js#L25) |
| `accordion` | — | AccordionSourceField | — | [строка 26](../../kaspersky-ui-builder/src/client/modules/property-sets/labeltext-field-property-set.js#L26) |
| `style` | — | StyleField | — | [строка 27](../../kaspersky-ui-builder/src/client/modules/property-sets/labeltext-field-property-set.js#L27) |
| `dependencies` | — | DependencyListField | — | [строка 28](../../kaspersky-ui-builder/src/client/modules/property-sets/labeltext-field-property-set.js#L28) |
| `validation` | — | ValidationListField | — | [строка 29](../../kaspersky-ui-builder/src/client/modules/property-sets/labeltext-field-property-set.js#L29) |

### link-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `route` | Route | TextField | — | [строка 5](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L5) |
| `handler` | Handler name | TextField | — | [строка 9](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L9) |
| `targetBlank` | Open in new tab | BoolField | — | [строка 14](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L14) |
| `mode` | Mode | SelectField | href → PAss value to «href»; name → Pass value to «name»; route → Pass value to route params; handler → Invoke function on cick | [строка 42](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L42) |
| `label` | Text | TextField | — | [строка 67](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L67) |
| `labelMappingProperty` | Model property | TextField | — | [строка 73](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L73) |
| `labelHandler` | Handler name | TextField | — | [строка 78](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L78) |
| `labelType` | Datasource type | SelectField | text → Text (constant); mapToProperty → Map to property; handler → Get from handler | [строка 105](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L105) |
| `alias` | Alias | TextField | — | [строка 133](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L133) |
| `value` | — | ValueField | — | [строка 137](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L137) |
| `description` | Description | TextField | — | [строка 142](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L142) |
| `iconClass` | Icon class | TextField | — | [строка 146](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L146) |
| `lock` | — | LockSourceField | — | [строка 164](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L164) |
| `accordion` | — | AccordionSourceField | — | [строка 167](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L167) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass", "state"] | [строка 169](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L169) |
| `dependencies` | — | DependencyListField | — | [строка 173](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L173) |
| `—` | — | DependantsField | — | [строка 174](../../kaspersky-ui-builder/src/client/modules/property-sets/link-property-set.js#L174) |

### list-editor-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `id` | ID | TextField | — | [строка 11](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L11) |
| `topicId` | Help topic ID | TextField | — | [строка 16](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L16) |
| `value` | — | ValueField | — | [строка 23](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L23) |
| `columns` | — | TableColumnListField | — | [строка 26](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L26) |
| `showFilterTab` | Filters | BoolField | — | [строка 35](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L35) |
| `showColumnsTab` | Columns | BoolField | — | [строка 40](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L40) |
| `showSearchTab` | Search | BoolField | — | [строка 45](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L45) |
| `showGroupingTab` | Grouping | BoolField | — | [строка 50](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L50) |
| `buttons` | Available actions | ListEditorActionsField | — | [строка 60](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L60) |
| `customActionsResolver` | Custom buttons getter | OptionalFunctionField | — | [строка 64](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L64) |
| `actionsStateResolver` | Custom buttons sync state handler | OptionalFunctionField | — | [строка 68](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L68) |
| `factory` | New row function-constructor | OptionalFunctionField | — | [строка 72](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L72) |
| `selectionPossible` | Rows can be selected regardless of the presence of a toolbar | BoolField | — | [строка 76](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L76) |
| `isInSingleSelectionMode` | Single selection | BoolField | — | [строка 80](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L80) |
| `isDraggableRows` | Draggable rows | BoolField | — | [строка 84](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L84) |
| `lnkEditor` | — | LinkButtonField | — | [строка 93](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L93) |
| `customFilterFunction` | Custom filter function | OptionalFunctionField | — | [строка 103](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L103) |
| `customSearchFunction` | Custom search function | OptionalFunctionField | — | [строка 107](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L107) |
| `selectionSyncEnvVarName` | runtime variable to get selected rows | OptionalTextField | — | [строка 116](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L116) |
| `treeMode` | Tree mode | BoolField | — | [строка 125](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L125) |
| `childRowResolver` | Child row resolver | OptionalFunctionField | — | [строка 129](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L129) |
| `syncSelectToChildren` | Select child rows when parent is selected | BoolField | — | [строка 133](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L133) |
| `elements` | — | ListEditorElementsField | — | [строка 140](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L140) |
| `lock` | — | LockSourceField | — | [строка 143](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L143) |
| `accordion` | — | AccordionSourceField | — | [строка 144](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L144) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass", "state"] | [строка 147](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L147) |
| `height` | List height (px) | TextField | — | [строка 150](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L150) |
| `dynamicHeightMode` | Automatically calculate list height | BoolField | — | [строка 154](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L154) |
| `additionalMarginBottom` | Additional Margin Bottom | TextField | — | [строка 158](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L158) |
| `dependencies` | — | DependencyListField | — | [строка 165](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L165) |
| `—` | — | Array | — | [строка 178](../../kaspersky-ui-builder/src/client/modules/property-sets/list-editor-property-set.js#L178) |

### locale-text-field-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/locale-text-field-property-set.js#L6) |
| `topicId` | Help topic ID | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/locale-text-field-property-set.js#L10) |
| `id` | ID | TextField | — | [строка 14](../../kaspersky-ui-builder/src/client/modules/property-sets/locale-text-field-property-set.js#L14) |
| `—` | — | LocaleValueField | — | [строка 21](../../kaspersky-ui-builder/src/client/modules/property-sets/locale-text-field-property-set.js#L21) |
| `accordion` | — | AccordionSourceField | — | [строка 23](../../kaspersky-ui-builder/src/client/modules/property-sets/locale-text-field-property-set.js#L23) |
| `style` | — | StyleField | — | [строка 24](../../kaspersky-ui-builder/src/client/modules/property-sets/locale-text-field-property-set.js#L24) |
| `dependencies` | — | DependencyListField | — | [строка 25](../../kaspersky-ui-builder/src/client/modules/property-sets/locale-text-field-property-set.js#L25) |

### lock-group-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `lockInfoPath` | Lock info path | ValueListField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/lock-group-property-set.js#L6) |
| `getterFncName` | Get lock value from handler | ToggledRuntimeMemberSearchField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/lock-group-property-set.js#L10) |
| `setterFncName` | onChange setter | ToggledRuntimeMemberSearchField | — | [строка 14](../../kaspersky-ui-builder/src/client/modules/property-sets/lock-group-property-set.js#L14) |
| `alwaysHidden` | Alway hidden | BoolField | — | [строка 18](../../kaspersky-ui-builder/src/client/modules/property-sets/lock-group-property-set.js#L18) |
| `isTitleVisible` | Show only title | BoolField | — | [строка 22](../../kaspersky-ui-builder/src/client/modules/property-sets/lock-group-property-set.js#L22) |
| `alias` | Alias | TextField | — | [строка 26](../../kaspersky-ui-builder/src/client/modules/property-sets/lock-group-property-set.js#L26) |
| `title` | Label | TextField | — | [строка 30](../../kaspersky-ui-builder/src/client/modules/property-sets/lock-group-property-set.js#L30) |
| `id` | ID | TextField | — | [строка 35](../../kaspersky-ui-builder/src/client/modules/property-sets/lock-group-property-set.js#L35) |
| `topicId` | Help topic ID | TextField | — | [строка 40](../../kaspersky-ui-builder/src/client/modules/property-sets/lock-group-property-set.js#L40) |
| `dependencies` | — | DependencyListField | — | [строка 49](../../kaspersky-ui-builder/src/client/modules/property-sets/lock-group-property-set.js#L49) |
| `—` | — | DependantsField | — | [строка 50](../../kaspersky-ui-builder/src/client/modules/property-sets/lock-group-property-set.js#L50) |

### markdown-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 7](../../kaspersky-ui-builder/src/client/modules/property-sets/markdown-property-set.js#L7) |
| `title` | Label | TextField | — | [строка 11](../../kaspersky-ui-builder/src/client/modules/property-sets/markdown-property-set.js#L11) |
| `id` | ID | TextField | — | [строка 16](../../kaspersky-ui-builder/src/client/modules/property-sets/markdown-property-set.js#L16) |
| `value` | — | ValueField | — | [строка 23](../../kaspersky-ui-builder/src/client/modules/property-sets/markdown-property-set.js#L23) |
| `style` | — | StyleField | — | [строка 25](../../kaspersky-ui-builder/src/client/modules/property-sets/markdown-property-set.js#L25) |
| `dependencies` | — | DependencyListField | — | [строка 26](../../kaspersky-ui-builder/src/client/modules/property-sets/markdown-property-set.js#L26) |
| `validation` | — | ValidationListField | — | [строка 27](../../kaspersky-ui-builder/src/client/modules/property-sets/markdown-property-set.js#L27) |

### password-field-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `title` | Label | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/password-field-property-set.js#L6) |
| `alias` | Alias | TextField | — | [строка 11](../../kaspersky-ui-builder/src/client/modules/property-sets/password-field-property-set.js#L11) |
| `id` | ID | TextField | — | [строка 15](../../kaspersky-ui-builder/src/client/modules/property-sets/password-field-property-set.js#L15) |
| `topicId` | Help topic ID | TextField | — | [строка 20](../../kaspersky-ui-builder/src/client/modules/property-sets/password-field-property-set.js#L20) |
| `value` | — | ValueField | — | [строка 26](../../kaspersky-ui-builder/src/client/modules/property-sets/password-field-property-set.js#L26) |
| `lock` | — | LockSourceField | — | [строка 28](../../kaspersky-ui-builder/src/client/modules/property-sets/password-field-property-set.js#L28) |
| `accordion` | — | AccordionSourceField | — | [строка 29](../../kaspersky-ui-builder/src/client/modules/property-sets/password-field-property-set.js#L29) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "labelPos", "width", "customClass", "state"] | [строка 30](../../kaspersky-ui-builder/src/client/modules/property-sets/password-field-property-set.js#L30) |
| `dependencies` | — | DependencyListField | — | [строка 33](../../kaspersky-ui-builder/src/client/modules/property-sets/password-field-property-set.js#L33) |
| `validation` | — | ValidationListField | — | [строка 34](../../kaspersky-ui-builder/src/client/modules/property-sets/password-field-property-set.js#L34) |

### repeater-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/repeater-property-set.js#L6) |
| `elements` | — | ControlGroupElementsField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/repeater-property-set.js#L10) |
| `id` | ID | TextField | — | [строка 13](../../kaspersky-ui-builder/src/client/modules/property-sets/repeater-property-set.js#L13) |
| `value` | — | ValueField | — | [строка 20](../../kaspersky-ui-builder/src/client/modules/property-sets/repeater-property-set.js#L20) |
| `lock` | — | LockSourceField | — | [строка 22](../../kaspersky-ui-builder/src/client/modules/property-sets/repeater-property-set.js#L22) |
| `accordion` | — | AccordionSourceField | — | [строка 23](../../kaspersky-ui-builder/src/client/modules/property-sets/repeater-property-set.js#L23) |
| `style` | — | StyleField | — | [строка 24](../../kaspersky-ui-builder/src/client/modules/property-sets/repeater-property-set.js#L24) |
| `dependencies` | — | DependencyListField | — | [строка 25](../../kaspersky-ui-builder/src/client/modules/property-sets/repeater-property-set.js#L25) |

### segmented-form-group-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `elements` | Tabs | KeyValueListField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/segmented-form-group-property-set.js#L6) |
| `onActiveFormChange` | onActiveFormChange | OptionalFunctionField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/segmented-form-group-property-set.js#L10) |
| `onChangeHandler` | onChangeHandler | OptionalFunctionField | — | [строка 14](../../kaspersky-ui-builder/src/client/modules/property-sets/segmented-form-group-property-set.js#L14) |
| `menuType` | Menu type | SelectField | vertical → Vertical; horizontal → Horizontal; tabular → Horizontal with tabs | [строка 18](../../kaspersky-ui-builder/src/client/modules/property-sets/segmented-form-group-property-set.js#L18) |
| `useContextSplitter` | Use context splitter | BoolField | — | [строка 36](../../kaspersky-ui-builder/src/client/modules/property-sets/segmented-form-group-property-set.js#L36) |
| `customValidateFunction` | Custom validate function | OptionalFunctionField | — | [строка 40](../../kaspersky-ui-builder/src/client/modules/property-sets/segmented-form-group-property-set.js#L40) |
| `dependencies` | — | DependencyListField | — | [строка 45](../../kaspersky-ui-builder/src/client/modules/property-sets/segmented-form-group-property-set.js#L45) |
| `style` | — | StyleField | ["customClass"] | [строка 47](../../kaspersky-ui-builder/src/client/modules/property-sets/segmented-form-group-property-set.js#L47) |

### select-field-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `elements` | List elements | KeyValueListField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/select-field-property-set.js#L6) |
| `alias` | Alias | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/select-field-property-set.js#L10) |
| `title` | Label | TextField | — | [строка 14](../../kaspersky-ui-builder/src/client/modules/property-sets/select-field-property-set.js#L14) |
| `id` | ID | TextField | — | [строка 19](../../kaspersky-ui-builder/src/client/modules/property-sets/select-field-property-set.js#L19) |
| `topicId` | Help topic ID | TextField | — | [строка 24](../../kaspersky-ui-builder/src/client/modules/property-sets/select-field-property-set.js#L24) |
| `placeholder` | Placeholder | TextField | — | [строка 28](../../kaspersky-ui-builder/src/client/modules/property-sets/select-field-property-set.js#L28) |
| `value` | — | ValueField | — | [строка 35](../../kaspersky-ui-builder/src/client/modules/property-sets/select-field-property-set.js#L35) |
| `lock` | — | LockSourceField | — | [строка 37](../../kaspersky-ui-builder/src/client/modules/property-sets/select-field-property-set.js#L37) |
| `accordion` | — | AccordionSourceField | — | [строка 38](../../kaspersky-ui-builder/src/client/modules/property-sets/select-field-property-set.js#L38) |
| `style` | — | StyleField | — | [строка 39](../../kaspersky-ui-builder/src/client/modules/property-sets/select-field-property-set.js#L39) |
| `dependencies` | — | DependencyListField | — | [строка 40](../../kaspersky-ui-builder/src/client/modules/property-sets/select-field-property-set.js#L40) |
| `validation` | — | ValidationListField | — | [строка 41](../../kaspersky-ui-builder/src/client/modules/property-sets/select-field-property-set.js#L41) |

### state-selector-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `elements` | List elements | KeyValueListField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/state-selector-property-set.js#L6) |
| `title` | Label | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/state-selector-property-set.js#L10) |
| `alias` | Alias | TextField | — | [строка 15](../../kaspersky-ui-builder/src/client/modules/property-sets/state-selector-property-set.js#L15) |
| `id` | ID | TextField | — | [строка 19](../../kaspersky-ui-builder/src/client/modules/property-sets/state-selector-property-set.js#L19) |
| `topicId` | Help topic ID | TextField | — | [строка 24](../../kaspersky-ui-builder/src/client/modules/property-sets/state-selector-property-set.js#L24) |
| `value` | — | ValueField | — | [строка 30](../../kaspersky-ui-builder/src/client/modules/property-sets/state-selector-property-set.js#L30) |
| `lock` | — | LockSourceField | — | [строка 32](../../kaspersky-ui-builder/src/client/modules/property-sets/state-selector-property-set.js#L32) |
| `accordion` | — | AccordionSourceField | — | [строка 33](../../kaspersky-ui-builder/src/client/modules/property-sets/state-selector-property-set.js#L33) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass", "state"] | [строка 34](../../kaspersky-ui-builder/src/client/modules/property-sets/state-selector-property-set.js#L34) |
| `dependencies` | — | DependencyListField | — | [строка 37](../../kaspersky-ui-builder/src/client/modules/property-sets/state-selector-property-set.js#L37) |
| `validation` | — | ValidationListField | — | [строка 38](../../kaspersky-ui-builder/src/client/modules/property-sets/state-selector-property-set.js#L38) |

### text-area-field-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/text-area-field-property-set.js#L6) |
| `title` | Label | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/text-area-field-property-set.js#L10) |
| `id` | ID | TextField | — | [строка 15](../../kaspersky-ui-builder/src/client/modules/property-sets/text-area-field-property-set.js#L15) |
| `value` | — | ValueField | — | [строка 22](../../kaspersky-ui-builder/src/client/modules/property-sets/text-area-field-property-set.js#L22) |
| `lock` | — | LockSourceField | — | [строка 24](../../kaspersky-ui-builder/src/client/modules/property-sets/text-area-field-property-set.js#L24) |
| `accordion` | — | AccordionSourceField | — | [строка 25](../../kaspersky-ui-builder/src/client/modules/property-sets/text-area-field-property-set.js#L25) |
| `dependencies` | — | DependencyListField | — | [строка 26](../../kaspersky-ui-builder/src/client/modules/property-sets/text-area-field-property-set.js#L26) |

### time-field-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/time-field-property-set.js#L6) |
| `title` | Label | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/time-field-property-set.js#L10) |
| `id` | ID | TextField | — | [строка 16](../../kaspersky-ui-builder/src/client/modules/property-sets/time-field-property-set.js#L16) |
| `topicId` | Help topic ID | TextField | — | [строка 21](../../kaspersky-ui-builder/src/client/modules/property-sets/time-field-property-set.js#L21) |
| `value` | — | ValueField | — | [строка 27](../../kaspersky-ui-builder/src/client/modules/property-sets/time-field-property-set.js#L27) |
| `lock` | — | LockSourceField | — | [строка 29](../../kaspersky-ui-builder/src/client/modules/property-sets/time-field-property-set.js#L29) |
| `accordion` | — | AccordionSourceField | — | [строка 30](../../kaspersky-ui-builder/src/client/modules/property-sets/time-field-property-set.js#L30) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "labelPos", "customClass", "state"] | [строка 31](../../kaspersky-ui-builder/src/client/modules/property-sets/time-field-property-set.js#L31) |
| `dependencies` | — | DependencyListField | — | [строка 34](../../kaspersky-ui-builder/src/client/modules/property-sets/time-field-property-set.js#L34) |
| `validation` | — | ValidationListField | — | [строка 35](../../kaspersky-ui-builder/src/client/modules/property-sets/time-field-property-set.js#L35) |

### toggle-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/toggle-property-set.js#L6) |
| `title` | Label | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/toggle-property-set.js#L10) |
| `description` | Description | TextField | — | [строка 15](../../kaspersky-ui-builder/src/client/modules/property-sets/toggle-property-set.js#L15) |
| `id` | ID | TextField | — | [строка 19](../../kaspersky-ui-builder/src/client/modules/property-sets/toggle-property-set.js#L19) |
| `topicId` | Help topic ID | TextField | — | [строка 24](../../kaspersky-ui-builder/src/client/modules/property-sets/toggle-property-set.js#L24) |
| `value` | — | ValueField | — | [строка 30](../../kaspersky-ui-builder/src/client/modules/property-sets/toggle-property-set.js#L30) |
| `lock` | — | LockSourceField | — | [строка 32](../../kaspersky-ui-builder/src/client/modules/property-sets/toggle-property-set.js#L32) |
| `accordion` | — | AccordionSourceField | — | [строка 33](../../kaspersky-ui-builder/src/client/modules/property-sets/toggle-property-set.js#L33) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass", "state"] | [строка 34](../../kaspersky-ui-builder/src/client/modules/property-sets/toggle-property-set.js#L34) |
| `dependencies` | — | DependencyListField | — | [строка 37](../../kaspersky-ui-builder/src/client/modules/property-sets/toggle-property-set.js#L37) |

### typeahead-field-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `elements` | List elements | KeyValueListField | — | [строка 7](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L7) |
| `alias` | Alias | TextField | — | [строка 11](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L11) |
| `title` | Label | TextField | — | [строка 15](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L15) |
| `placeholder` | Placeholder | TextField | — | [строка 20](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L20) |
| `searchText` | Default search text | TextField | — | [строка 25](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L25) |
| `filteredProperty` | Filtered property | TextField | — | [строка 29](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L29) |
| `multiselect` | Multiselect | BoolField | — | [строка 33](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L33) |
| `allowAddOwnItems` | Allow user items | BoolField | — | [строка 37](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L37) |
| `id` | ID | TextField | — | [строка 41](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L41) |
| `topicId` | Help topic ID | TextField | — | [строка 46](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L46) |
| `value` | — | ValueField | — | [строка 52](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L52) |
| `lock` | — | LockSourceField | — | [строка 54](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L54) |
| `accordion` | — | AccordionSourceField | — | [строка 55](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L55) |
| `style` | — | StyleField | — | [строка 56](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L56) |
| `dependencies` | — | DependencyListField | — | [строка 57](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L57) |
| `validation` | — | ValidationListField | — | [строка 58](../../kaspersky-ui-builder/src/client/modules/property-sets/typeahead-field-property-set.js#L58) |

### ui-sequence-trigger-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/ui-sequence-trigger-property-set.js#L10) |
| `title` | Label | TextField | — | [строка 14](../../kaspersky-ui-builder/src/client/modules/property-sets/ui-sequence-trigger-property-set.js#L14) |
| `expandTitle` | Expand title | TextField | — | [строка 19](../../kaspersky-ui-builder/src/client/modules/property-sets/ui-sequence-trigger-property-set.js#L19) |
| `description` | Description (DEPRECATED, use section "Description") | TextField | — | [строка 24](../../kaspersky-ui-builder/src/client/modules/property-sets/ui-sequence-trigger-property-set.js#L24) |
| `id` | ID | TextField | — | [строка 29](../../kaspersky-ui-builder/src/client/modules/property-sets/ui-sequence-trigger-property-set.js#L29) |
| `showActionBar` | Show action-bar in child form | BoolField | — | [строка 34](../../kaspersky-ui-builder/src/client/modules/property-sets/ui-sequence-trigger-property-set.js#L34) |
| `controlType` | View mode | SelectField | button → Button; link → Link | [строка 38](../../kaspersky-ui-builder/src/client/modules/property-sets/ui-sequence-trigger-property-set.js#L38) |
| `topicId` | Help topic ID | TextField | — | [строка 52](../../kaspersky-ui-builder/src/client/modules/property-sets/ui-sequence-trigger-property-set.js#L52) |
| `lnkEditor` | — | LinkButtonField | — | [строка 56](../../kaspersky-ui-builder/src/client/modules/property-sets/ui-sequence-trigger-property-set.js#L56) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass", "state"] | [строка 66](../../kaspersky-ui-builder/src/client/modules/property-sets/ui-sequence-trigger-property-set.js#L66) |
| `lock` | — | LockSourceField | — | [строка 69](../../kaspersky-ui-builder/src/client/modules/property-sets/ui-sequence-trigger-property-set.js#L69) |
| `dependencies` | — | DependencyListField | — | [строка 70](../../kaspersky-ui-builder/src/client/modules/property-sets/ui-sequence-trigger-property-set.js#L70) |

### url-input-field-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `alias` | Alias | TextField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/url-input-field-property-set.js#L6) |
| `title` | Label | TextField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/url-input-field-property-set.js#L10) |
| `id` | ID | TextField | — | [строка 15](../../kaspersky-ui-builder/src/client/modules/property-sets/url-input-field-property-set.js#L15) |
| `topicId` | Help topic ID | TextField | — | [строка 20](../../kaspersky-ui-builder/src/client/modules/property-sets/url-input-field-property-set.js#L20) |
| `value` | — | ValueField | — | [строка 26](../../kaspersky-ui-builder/src/client/modules/property-sets/url-input-field-property-set.js#L26) |
| `lock` | — | LockSourceField | — | [строка 28](../../kaspersky-ui-builder/src/client/modules/property-sets/url-input-field-property-set.js#L28) |
| `accordion` | — | AccordionSourceField | — | [строка 29](../../kaspersky-ui-builder/src/client/modules/property-sets/url-input-field-property-set.js#L29) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "labelPos", "customClass", "state"] | [строка 30](../../kaspersky-ui-builder/src/client/modules/property-sets/url-input-field-property-set.js#L30) |
| `dependencies` | — | DependencyListField | — | [строка 33](../../kaspersky-ui-builder/src/client/modules/property-sets/url-input-field-property-set.js#L33) |
| `validation` | — | ValidationListField | — | [строка 34](../../kaspersky-ui-builder/src/client/modules/property-sets/url-input-field-property-set.js#L34) |

### validation-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `syncValue` | — | TextField | — | [строка 3](../../kaspersky-ui-builder/src/client/modules/property-sets/validation-property-set.js#L3) |
| `value` | — | ValueField | — | [строка 25](../../kaspersky-ui-builder/src/client/modules/property-sets/validation-property-set.js#L25) |
| `style` | — | StyleField | ["indent", "offsetBottom", "offsetTop", "offsetAfter", "customClass"] | [строка 28](../../kaspersky-ui-builder/src/client/modules/property-sets/validation-property-set.js#L28) |
| `syncType` | Validate: | SelectField | onFormSave → On Form save; model → On model change; variable → runtime.variable on change; event → runtime.trigger / runtime.on | [строка 33](../../kaspersky-ui-builder/src/client/modules/property-sets/validation-property-set.js#L33) |
| `validationFunction` | Handler name | TextField | — | [строка 58](../../kaspersky-ui-builder/src/client/modules/property-sets/validation-property-set.js#L58) |
| `scrollToElement` | Scroll to element | BoolField | — | [строка 62](../../kaspersky-ui-builder/src/client/modules/property-sets/validation-property-set.js#L62) |

### wizard-property-set.js

| Ключ / fieldName | Label | Редактор | Опции / правила | Источник |
| --- | --- | --- | --- | --- |
| `elements` |  | WizardStepsField | — | [строка 6](../../kaspersky-ui-builder/src/client/modules/property-sets/wizard-property-set.js#L6) |
| `customStepsGetter` | Get steps from handler | OptionalFunctionField | — | [строка 10](../../kaspersky-ui-builder/src/client/modules/property-sets/wizard-property-set.js#L10) |

## Новый registry: доступные props каждого компонента

Источник: [generated.json](../src/modules/component-registry/generated.json). Список не включает общие поля Inspector.

### Textbox — Текстовое поле

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `value` | value | text | нет |
| `showClearButton` | showClearButton | select | нет |
| `validationStatus` | validationStatus | select | нет |
| `componentType` | componentType | text | нет |
| `theme` | theme | select | нет |

### Checkbox — Чекбокс

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `children` | Текст | text | нет |
| `required` | required | checkbox | нет |
| `mode` | mode | select | нет |

### CheckboxGroup — Группа чекбоксов

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `options` | Опции | json | нет |
| `invalid` | invalid | checkbox | нет |
| `mode` | mode | select | нет |
| `direction` | direction | select | нет |

### Radio — Радиогруппа

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `vertical` | vertical | checkbox | нет |
| `options` | Опции | json | да |

### Toggle — Тоггл

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `labelPosition` | labelPosition | select | нет |
| `text` | text | text | нет |
| `required` | required | select | нет |
| `description` | description | text | нет |
| `theme` | theme | select | нет |
| `componentType` | componentType | text | нет |

### Select — Список

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `theme` | theme | select | нет |
| `id` | id | text | нет |
| `mode` | mode | select | нет |
| `allowClear` | allowClear | select | нет |
| `autoClearSearchValue` | autoClearSearchValue | select | нет |
| `autoFocus` | autoFocus | select | нет |
| `defaultValue` | defaultValue | json | нет |
| `validationStatus` | validationStatus | select | нет |
| `dropdownClassName` | dropdownClassName | text | нет |
| `dropdownMaxHeight` | dropdownMaxHeight | number | нет |
| `filterOption` | filterOption | json | нет |
| `filterSort` | filterSort | function | нет |
| `closeOnParentScroll` | closeOnParentScroll | select | нет |
| `loadingError` | Ошибка загрузки | text | нет |
| `maxTagCount` | maxTagCount | json | нет |
| `maxTagTextLength` | maxTagTextLength | number | нет |
| `notFoundContent` | Нет данных | text | нет |
| `open` | open | select | нет |
| `optionFilterProp` | optionFilterProp | text | нет |
| `optionLabelProp` | optionLabelProp | text | нет |
| `options` | Опции | json | нет |
| `placeholder` | Плейсхолдер | text | нет |
| `placement` | placement | select | нет |
| `searchValue` | searchValue | text | нет |
| `showArrow` | showArrow | select | нет |
| `showSearch` | showSearch | select | нет |
| `tokenSeparators` | tokenSeparators | json | нет |
| `allowNonUniqueValues` | allowNonUniqueValues | select | нет |
| `value` | value | json | нет |
| `virtual` | virtual | select | нет |
| `hasMore` | hasMore | select | нет |
| `labelInValue` | labelInValue | select | нет |
| `usePortal` | usePortal | select | нет |
| `componentType` | componentType | text | нет |

### Calendar — Дата

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `showTime` | showTime | select | нет |
| `value` | value | json | нет |
| `format` | format | text | нет |
| `validationStatus` | validationStatus | select | нет |
| `showToday` | showToday | select | нет |
| `theme` | theme | select | нет |
| `componentType` | componentType | text | нет |

### RangePicker — Диапазон дат

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `dropdownClassName` | dropdownClassName | text | нет |
| `value` | value | json | нет |
| `disabledDate` | disabledDate | function | нет |
| `customKeyDown` | customKeyDown | function | нет |
| `validDatePattern` | validDatePattern | json | нет |
| `validationStatus` | validationStatus | select | нет |
| `hasResetButton` | hasResetButton | select | нет |
| `showTime` | showTime | select | нет |
| `format` | format | text | нет |
| `theme` | theme | select | нет |
| `componentType` | componentType | text | нет |

### Button — Кнопка

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `size` | size | select | нет |
| `theme` | theme | select | нет |
| `mode` | mode | select | нет |
| `id` | id | text | нет |
| `loadingSecond` | loadingSecond | select | нет |
| `iconBefore` | Иконка слева | iconSelect | нет |
| `iconAfter` | Иконка справа | iconSelect | нет |
| `text` | text | text | нет |
| `type` | type | json | нет |
| `isPressed` | isPressed | select | нет |
| `componentType` | componentType | text | нет |

### Field — Поле формы

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `wrapperClassNames` | wrapperClassNames | json | нет |
| `labelPosition` | labelPosition | select | нет |
| `labelType` | labelType | select | нет |
| `controlWidth` | controlWidth | number | нет |
| `description` | description | text | нет |
| `message` | message | text | нет |
| `messageMode` | messageMode | select | нет |
| `getPopupContainer` | getPopupContainer | function | нет |
| `gridLayout` | gridLayout | json | нет |
| `gridPreset` | gridPreset | select | нет |
| `popoverPlacement` | popoverPlacement | select | нет |
| `popoverWidth` | popoverWidth | number | нет |
| `required` | required | select | нет |
| `theme` | theme | select | нет |
| `componentType` | componentType | text | нет |

### Accordion — Аккордеон

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `activeKey` | activeKey | json | нет |
| `defaultActiveKey` | defaultActiveKey | json | нет |
| `theme` | theme | select | нет |
| `withBorder` | withBorder | select | нет |
| `expandIconPosition` | expandIconPosition | json | нет |
| `accordion` | accordion | select | нет |
| `componentType` | componentType | text | нет |

### AccordionPanel — Секция аккордеона

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `title` | Заголовок | text | нет |
| `additionalText` | additionalText | text | нет |
| `actions` | actions | json | нет |
| `shouldDisableActions` | shouldDisableActions | select | нет |
| `theme` | theme | select | нет |
| `titleSize` | titleSize | select | нет |

### Grid — Сетка

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `componentType` | componentType | text | нет |
| `direction` | direction | text | нет |
| `layout` | layout | json | нет |
| `layoutProperty` | layoutProperty | json | нет |
| `cols` | cols | number | нет |
| `gridType` | gridType | select | нет |
| `withPadding` | withPadding | select | нет |

### GridItem — Ячейка сетки

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `areaName` | areaName | text | нет |
| `columnSpan` | columnSpan | number | нет |
| `rowSpan` | rowSpan | number | нет |
| `span` | span | number | нет |

### Space — Группа с отступами

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `direction` | direction | select | нет |
| `size` | size | number | нет |
| `gap` | gap | json | нет |
| `wrap` | wrap | select | нет |
| `align` | align | json | нет |
| `justify` | justify | json | нет |
| `height` | height | text | нет |
| `width` | width | text | нет |
| `maxWidth` | maxWidth | select | нет |

### Divider — Разделитель

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `theme` | theme | select | нет |
| `direction` | direction | select | нет |
| `mode` | mode | select | нет |
| `componentType` | componentType | text | нет |

### Badge — Бейдж

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `count` | count | number | нет |
| `text` | text | text | нет |
| `overflowCount` | overflowCount | number | нет |
| `title` | title | text | нет |
| `showZero` | showZero | select | нет |
| `size` | size | select | нет |
| `mode` | mode | select | нет |
| `theme` | theme | select | нет |
| `componentType` | componentType | text | нет |

### Link — Ссылка

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `title` | title | text | нет |
| `href` | href | text | нет |
| `target` | target | json | нет |
| `text` | text | text | нет |
| `decoration` | decoration | select | нет |
| `visited` | visited | select | нет |
| `icon` | Иконка | iconSelect | нет |
| `iconPosition` | iconPosition | select | нет |
| `name` | name | text | нет |
| `isTooltipVisible` | isTooltipVisible | select | нет |

### Alert — Сообщение

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `mode` | mode | select | да |
| `closable` | closable | select | нет |
| `actions` | actions | json | нет |
| `width` | width | json | нет |

### Loader — Индикатор загрузки

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `centered` | centered | select | нет |
| `delay` | delay | number | нет |
| `spinning` | spinning | select | нет |
| `theme` | theme | select | нет |
| `mode` | mode | select | нет |
| `size` | size | select | нет |
| `componentType` | componentType | text | нет |

### ProgressBar — Прогресс

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `track` | track | number | нет |
| `background` | background | select | нет |
| `width` | width | number | нет |
| `theme` | theme | select | нет |
| `mode` | mode | select | да |
| `size` | size | select | нет |
| `componentType` | componentType | text | нет |

### Tooltip — Тултип

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `id` | id | text | нет |
| `prefixCls` | prefixCls | text | нет |
| `showArrow` | showArrow | json | нет |
| `animation` | animation | text | нет |
| `transitionName` | transitionName | text | нет |
| `getPopupContainer` | getPopupContainer | function | нет |
| `builtinPlacements` | builtinPlacements | json | нет |
| `fresh` | fresh | select | нет |
| `mouseLeaveDelay` | mouseLeaveDelay | number | нет |
| `mouseEnterDelay` | mouseEnterDelay | number | нет |
| `forceRender` | forceRender | select | нет |
| `popupVisible` | popupVisible | select | нет |
| `trigger` | trigger | json | нет |
| `defaultVisible` | defaultVisible | select | нет |
| `visible` | visible | select | нет |
| `motion` | motion | json | нет |
| `afterVisibleChange` | afterVisibleChange | function | нет |
| `overlayClassName` | overlayClassName | text | нет |
| `getTooltipContainer` | getTooltipContainer | function | нет |
| `destroyTooltipOnHide` | destroyTooltipOnHide | select | нет |
| `align` | align | json | нет |
| `zIndex` | zIndex | number | нет |
| `styles` | styles | json | нет |
| `classNames` | classNames | json | нет |
| `openClassName` | openClassName | text | нет |
| `arrowPointAtCenter` | arrowPointAtCenter | select | нет |
| `autoAdjustOverflow` | autoAdjustOverflow | json | нет |
| `theme` | theme | select | нет |
| `placement` | placement | select | нет |
| `defaultAlign` | defaultAlign | select | нет |
| `text` | Текст подсказки | text | да |

### Search — Поиск

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| — | Нет отдельных props в Inspector | — | — |

### TimeInput — Время

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `format` | format | select | нет |
| `placeholder` | placeholder | text | нет |
| `theme` | theme | select | нет |
| `value` | value | text | нет |

### RangeTimeInput — Диапазон времени

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `format` | format | select | нет |
| `placeholder` | placeholder | text | нет |
| `theme` | theme | select | нет |
| `valueStart` | valueStart | text | нет |
| `valueEnd` | valueEnd | text | нет |

### TreeSelect — Древовидный список

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `validationStatus` | validationStatus | select | нет |

### ToggleButton — Кнопка-переключатель

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `size` | size | select | нет |
| `mode` | mode | select | нет |
| `theme` | theme | select | нет |
| `tooltip` | tooltip | text | нет |
| `text` | text | text | нет |
| `value` | value | text | да |
| `selected` | selected | select | нет |

### ToggleButtonGroup — Группа кнопок-переключателей

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `items` | Элементы | json | да |
| `value` | Выбранные значения | json | да |

### SegmentedControl — Сегментированный контрол

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `tabsData` | Сегменты | json | да |
| `defaultActiveTab` | defaultActiveTab | text | нет |
| `theme` | theme | select | нет |
| `size` | size | select | нет |

### Uploader — Загрузка файлов

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `fileList` | fileList | json | нет |
| `manual` | manual | select | нет |
| `maxCount` | maxCount | number | нет |
| `maxFileSize` | maxFileSize | number | нет |
| `maxTotalSize` | maxTotalSize | number | нет |
| `showProgress` | showProgress | select | нет |
| `size` | size | select | нет |
| `theme` | theme | select | нет |
| `truncateFileName` | truncateFileName | select | нет |
| `validationStatus` | validationStatus | select | нет |

### Card — Карточка

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `theme` | theme | select | нет |
| `mode` | mode | select | нет |
| `size` | size | select | нет |
| `draggable` | draggable | select | нет |
| `closable` | closable | select | нет |
| `interactive` | interactive | select | нет |
| `maxHeight` | maxHeight | text | нет |

### Panel — Панель

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `resizeHandle` | resizeHandle | select | нет |
| `resizable` | resizable | select | нет |
| `closable` | closable | select | нет |
| `open` | open | select | нет |
| `title` | title | text | нет |
| `titleSize` | titleSize | select | нет |
| `initialSize` | initialSize | number | нет |
| `padding` | padding | select | нет |
| `parentLayout` | parentLayout | select | нет |

### FieldSet — Набор полей

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `items` | Поля | json | да |

### Tabs — Вкладки

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `theme` | theme | select | нет |
| `tabPosition` | tabPosition | select | нет |
| `activeKey` | activeKey | text | нет |
| `defaultActiveKey` | defaultActiveKey | text | нет |
| `destroyInactiveTabPane` | destroyInactiveTabPane | select | нет |
| `padding` | padding | select | нет |
| `noMargin` | noMargin | select | нет |

### Repeater — Повторитель

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `data` | Данные | json | да |

### Table — Таблица

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `dataSource` | Данные | json | нет |
| `columns` | Колонки | json | нет |
| `search` | search | select | нет |
| `header` | header | text | нет |
| `pagination` | Пагинация | json | нет |
| `showColumnsSelector` | showColumnsSelector | select | нет |
| `useAccordion` | useAccordion | select | нет |
| `stickyHeader` | stickyHeader | number | нет |
| `stickyFooter` | stickyFooter | select | нет |
| `borderedStyle` | borderedStyle | select | нет |
| `fullHeight` | fullHeight | select | нет |

### KeyValue — Ключ — значение

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `gridLayout` | Сетка | json | нет |
| `keyRequired` | keyRequired | select | нет |
| `keyMode` | keyMode | select | нет |
| `labelPosition` | labelPosition | select | нет |
| `data` | Пары | json | нет |
| `rowHeight` | rowHeight | number | нет |
| `padding` | padding | number | нет |
| `keysMargin` | keysMargin | number | нет |
| `theme` | theme | select | нет |

### Text — Текст

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `title` | title | text | нет |
| `color` | color | select | нет |
| `type` | type | select | нет |

### Heading — Заголовок

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `title` | title | text | нет |
| `color` | color | select | нет |

### Tag — Тег

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `size` | size | select | нет |
| `theme` | theme | select | нет |
| `mode` | mode | select | нет |
| `closable` | closable | select | нет |
| `outlined` | outlined | select | нет |
| `interactive` | interactive | select | нет |
| `isResponsive` | isResponsive | select | нет |

### Status — Статус

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `theme` | theme | select | нет |
| `mode` | mode | select | нет |
| `label` | label | text | нет |

### Skeleton — Скелетон

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `flexWidth` | flexWidth | select | нет |
| `size` | size | select | нет |
| `theme` | theme | select | нет |

### Placeholder — Плейсхолдер

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `title` | title | text | нет |
| `image` | image | select | нет |
| `actionLinks` | Ссылки действий | json | нет |
| `textAlign` | textAlign | select | нет |
| `theme` | theme | select | нет |
| `size` | size | select | нет |
| `mode` | mode | select | нет |

### Modal — Модальное окно

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `header` | Заголовок | text | нет |
| `content` | Содержимое | text | нет |
| `actions` | Действия | json | нет |
| `customButtons` | Кнопки | json | нет |
| `theme` | theme | select | нет |
| `mode` | mode | select | нет |
| `size` | size | select | нет |

### Popover — Всплывающая панель

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `content` | Содержимое | text | нет |
| `placement` | placement | select | нет |
| `shouldLimitSize` | shouldLimitSize | select | нет |
| `width` | width | number | нет |
| `height` | height | number | нет |
| `theme` | theme | select | нет |

### SectionMessage — Сообщение раздела

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `width` | width | json | нет |
| `closable` | closable | select | нет |
| `expandable` | expandable | select | нет |
| `defaultExpanded` | defaultExpanded | select | нет |
| `title` | title | text | нет |
| `actions` | Действия | json | нет |
| `theme` | theme | select | нет |
| `mode` | mode | select | да |

### LoadingOverlay — Оверлей загрузки

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `description` | description | text | нет |
| `size` | size | select | нет |
| `theme` | theme | select | нет |

### Breadcrumbs — Хлебные крошки

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `theme` | theme | select | нет |
| `size` | size | select | нет |
| `routes` | Маршруты | json | нет |

### Pagination — Пагинация

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `current` | current | number | нет |
| `pageSize` | pageSize | number | нет |
| `hideOnSinglePage` | hideOnSinglePage | select | нет |
| `pageSizeOptions` | pageSizeOptions | json | нет |
| `showSizeChanger` | showSizeChanger | select | нет |
| `showLessItems` | showLessItems | select | нет |
| `jumper` | jumper | select | нет |
| `total` | total | number | нет |
| `totalRoot` | totalRoot | number | нет |
| `selected` | selected | number | нет |
| `showSelected` | showSelected | select | нет |
| `cursor` | cursor | select | нет |
| `simple` | simple | select | нет |
| `theme` | theme | select | нет |

### HorizontalNav — Горизонтальная навигация

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `activeKey` | activeKey | text | нет |
| `borderless` | borderless | select | нет |
| `items` | Разделы | json | нет |

### Wizard — Мастер

| Новый props-ключ | Новый label | Редактор | Обязательный |
| --- | --- | --- | --- |
| `view` | view | select | да |
| `steps` | Шаги | json | да |
| `activeStep` | activeStep | number | нет |
| `initialStep` | initialStep | number | нет |
| `cancelButtonText` | cancelButtonText | text | нет |
| `backButtonText` | backButtonText | text | нет |
| `nextButtonText` | nextButtonText | text | нет |
| `finishButtonText` | finishButtonText | text | нет |
| `isVertical` | isVertical | select | нет |
