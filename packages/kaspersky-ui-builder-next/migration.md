# Контракт переноса старых форм в v1

Уточнения по фактическому коду старого UI, дубли и вопросы унификации собраны
в [сравнительных таблицах](./docs/settings-comparison.md). Старые select используют
числовые коды style и разные enum valueType; labels методов валидации не являются
их runtime-ключами. Пока правила ниже описывают перенос в текущую схему v1.

Это правила для будущего конвертера, а не готовый импортёр или адаптер старого runtime.
Схема и TypeScript-контракт поддерживают хранение описанных данных. Наличие данных
не означает, что Preview умеет исполнять старые компоненты, функции или валидаторы.

## Источник истины

Исходник — целый объект файла `packages/kaspersky-ui-builder/assets/ui/*.json`.
`getFormResult` в `src/client/components/art-board/art-board.tag.js` собирает его,
а `src/server/forms.js` записывает целиком через `write-form`.

1. Дерево брать из `form.json.elements`, детей — из `element.elements`.
   Не строить дерево из редакторских `form.elements` и `state`.
2. Настройки runtime (`type`, `buttons`, `domain`, `rootForm`,
   `ignoreDomainValidation`, а также `showFlyoutHeader` и `size`, если присутствуют)
   брать из `form.json`.
3. Остальные настройки брать из одноимённых полей верхнего уровня.
4. `state` использовать только для отсутствующего поля. Проверять наличие ключа,
   а не truthiness: `false`, `0`, `""`, `null` и `[]` — явные значения.
   Извлекать известный дескриптор конкретного поля (`input`, `slct`, `fncName`),
   не разворачивать рекурсивно все похожие объекты. Конфликты диагностировать.

Для сохранения всех данных без потерь `FormSchema.meta.legacy` хранит исходные
`json` (без `elements`), верхнеуровневые поля и использованные fallback-значения.
Неизвестные поля сохраняются под исходными именами. Если нужна побайтовая
обратимость или восстановление редакторского проекта, отдельно сохранять весь
исходный файл: v1 не обещает восстановить WYSIWYG-state, форматирование или код.
Исходные `js`, `children` и редакторские данные нельзя молча выбрасывать:
сохранять в `meta.legacy` либо отдельном архиве, указанном в отчёте конвертера.

## Типы и props

`SchemaNode.type` — открытая непустая строка, а не enum палитры. Старые типы
(`control-group`, `react-wrapper`, `react-renderer`, `auto-wizard`,
`qsw-defaults-list`, `locale`, `key-value-pair`, `list-editor`, `huge-table`,
`data-table` и остальные) можно сохранять дословно. Это безопаснее механического
преобразования kebab-case в PascalCase: сходные названия не гарантируют одинаковые
props и поведение. Замена на `Grid`, `Textbox` и т.д. допустима только при наличии
проверенного адаптера. Неизвестный компонент получает неблокирующую диагностику.

`props` — свободный JSON-объект. В него переносятся компонентные поля, в том числе
`customParams` **как исходная строка**, без JSON.parse и слияния с остальными props.
Объекты, массивы и props React-обёрток сохраняют тип и вложенность. Структурные
поля (`id`, `type`, `elements`, зависимости и т.д.) переносятся в соответствующие
поля v1; их неадаптированные варианты — в `node.meta.legacy`.

## Значения и зависимости

- `mapTo.type: function` → `value.source.type: functionHandler`;
  `getter.name` / `setter.name` → runtime FunctionReference,
  `getter.once` → `initializeOnly`. Пустое имя не подменять выдуманной функцией:
  неполную конфигурацию сохранять в `meta.legacy.value` с диагностикой.
- `mapTo.type: property` → `modelProperty`, `name` → `propertyName`.
  `valueType`: `string`/`String` → `string`, `Int`/`integer`/`int` → `int`,
  `Float`/`Number`/`number` → `number`, `Bool`/`bool` → `bool`, `Date`/`date` → `date`,
  `raw`, пустой или отсутствующий → `none`; `boolean` → `bool`. Исходный `valueType` сохранять в
  `meta.legacy.value`; неизвестный тип диагностировать, не угадывать.
- `runtimeVariable` → одноимённый source, `name` → `key`.
  Простая строка/null → `simpleValue`; другие литералы, для которых этот source
  не подходит, сохранять в `meta.legacy.value` до появления адаптера.
- `onBeforeRead`/`onBeforeSave` — имена функций, а не boolean-патчи v1;
  сохранять в мета, не превращать в `true`. Остальные события адаптировать лишь
  при доказанном соответствии семантики.
- `set.state: enabled` → `property: enabled`, `value: true`; инверсия при
  вычислении disabled относится к runtime, а не к сериализации.
- `when.type` принимать числом или строкой: `0` → element (`masterCtrlId`),
  `1` → runtime (`varName`), `2` → function (`fncName`), `3` → model
  (`modelPropName`), `4` → modelExpression (`complexCondition`).
- Для функции без значения использовать `operator: truthy`, без `operand`.
  Для скалярного сравнения — `eq` с literal-операндом. Не восстанавливать
  утраченный старым buildJSON оператор из значения. Неоднозначные сравнения,
  включая направление проверки вхождения массива, сохранять в мета с диагностикой.

## Валидация и стили

Для любого старого правила есть вариант без потерь:
`{ id, name: "Legacy", type: "Legacy", config: { kind: "legacy", rule } }`,
где `rule` — исходный объект целиком. Он сохраняет `method` (включая `path`, `ip`,
`email`, `length`, `range`, `regexp` и пользовательские методы), `source`,
`params.condition`, `params.range`, `preventIncorrectInput` и неизвестные поля.
`validation.type` контейнера сохраняется в `node.meta.legacy.validationType`.
Семантическая проверка предупреждает, что правило требует адаптера runtime.
Не разбирать диапазон простым split('-'): отрицательные числа делают его неоднозначным.
Стандартные правила v1 по-прежнему используют закрытый enum и проверку config.

Исходный `style` целиком сохраняется в `node.meta.legacy.style`.
`indent`, `offsetTop`, `offsetBottom`, `offsetAfter`, `width` не округлять до
space-токенов. Переносить в `nestingLevel`/`margin*` можно только при точном
соответствии токенов обоих runtime. Числовую неотрицательную ширину переносить
в `controlWidth` лишь при подтверждённых одинаковых единицах измерения;
проценты, `auto`, отрицательные и неизвестные значения оставлять в мета.
Так сохраняются данные без обещания идентичной геометрии Preview.

## Настройки формы и кнопки

Прямые аналоги: `useCache` → `useCachedData`, `ignoreDomainValidation` →
`ignoreValidationOnDomainSave`, `ignoreFormCloseOnDomainSave` → `keepOpenOnDomainSave`,
`addSaveCloseButton` → `showSaveAndCloseButton`; `init`, `onRendered`, `onDispose` →
`onInitialize`, `afterRender`, `onClose` как ToggleableFunction.
`objectType` теперь допускает произвольную строку, а не тестовые type1/type2/type3.

В `settings` добавлены ToggleableFunction-поля `customButtonsGetter`,
`actionBarAssistantBootstrapper`, `actionBarGetButtonsHandler` и boolean
`actionBarEnableOverride`. Имена функций — runtime references, непустые имена
включают обработчик. Исходные настройки также сохраняются в `meta.legacy`.
`json.buttons` не сводить к трём заголовкам `actionBarButtons`: сохранять полностью.

Поля без точного аналога хранятся под исходными именами в `meta.legacy`:
`entityType`, `excludeFromValidateMessage`, `migrationInfo`, `section`, `objectId`,
`mandatoryMode`, `preventCloseOnCancel`, `showFlyoutHeader`, `size`, `dataModelName`,
`navigationGroup`, `navigationTitle`, `navTitle`, `topicId`, `version`, `mode`,
`customFields`. Это распространяется и на неизвестные будущие настройки.
Новые поля мета и обработчики кнопок редактируются во вкладке JSON.

## Источник и сохранение данных

`dsType` — редакторский дескриптор. В `data-save-action-field.js` значение `url`
компилируется в `{ type: "serverAPICall", apiMethod, params, parsedParams,
paramsHandler }`, а `function` — в `{ type: "staticFunction", name, ... }`.
Таким образом, обычный старый «url» соответствует **server**, а не HTTP URL.

- `serverAPICall.apiMethod` → `server.methodName`;
  непустой `paramsHandler` → `parametersSource: { type: "handler", function }`,
  иначе сырая строка `params` → `{ type: "object", object: params }`.
- `staticFunction.name` → `{ type: "handler", function }`.
  `FormDataSave` теперь использует тот же контракт, что и `FormDataSource`.
- `params`, `parsedParams`, дополнительные параметры функции и исходный объект
  целиком сохраняются в `meta.legacy.dataSource` / `meta.legacy.dataSaveAction`.
- Если внешний файл действительно содержит URL или неизвестный формат,
  сохранить его целиком в мета с диагностикой; не выдавать URL за methodName
  и не выполнять сетевые запросы при конвертации.

## Нормализация

Удаляются только пустые структурные `children`, `validation`, `dependencies`.
Пустой `elements` и все массивы внутри props, мета, параметров правил и операндов
сохраняются, включая вложенные `[]`. Нормализация не изменяет исходный объект.
Проверки контракта и сохранности данных: `npm run check:domain`.
