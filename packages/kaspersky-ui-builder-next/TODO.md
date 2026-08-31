# TODO

## Устранение дублей и упорядочение схемы

Основание: [сравнение настроек](./docs/settings-comparison.md),
[валидация](./docs/validation-comparison.md),
[поля компонентов](./docs/component-fields-comparison.md).
Задачи ниже открыты: подготовка контракта переноса через мета не означает,
что унификация ключей и поведения уже завершена.

### Вопросы для согласования

- [ ] Существующие v1-формы переводим на старые ключи и числовые style-коды
  без сохранения новых синонимов? Определить, нужна ли совместимость чтения
  с нынешним форматом, миграция файлов и изменение `schemaVersion`.
- [ ] Общие `state/style/value` делаем единственным источником, убирая
  дубли из props? Зафиксировать приоритет при конфликте и правила переноса
  уже заданных props без потери значений.
- [ ] `progressIndicatorFunction` — это старый `actionBarAssistantBootstrapper`
  или отдельная функция? Если это дубль, оставить старый ключ и label;
  иначе явно разделить назначение и UI этих обработчиков.

### Ключи и дубли

- [ ] Для каждой настройки определить один канонический ключ и label из
  старого билдера. Не смешивать редакторский `state`, runtime JSON и props
  Hexa UI; разные по смыслу поля не объединять только из-за сходства названий.
- [ ] Убрать дубль `validation[].name/type`: выбрать единое поле `method`
  со старыми ключами, а подписи брать из общего справочника интерфейса.
- [ ] Объединить `Number` и `Float number` в старый метод `float`
  с label `Number / Float number`.
- [ ] Устранить дубли Field между `style` и `props`: `labelPosition`,
  `labelType`, `controlWidth`, `tooltipWidth/popoverWidth`. Уточнить смысл
  нулевой ширины и исключить незаметную перезапись props defaults из style.
- [ ] Разобрать `state.invalid/props.invalid` у CheckboxGroup и
  `value.source/props.value` у полей ввода. Согласовать единый источник
  с реальным поведением Preview, включая явное значение `false`.
- [ ] Проверить возможные, но не подтверждённые дубли: `node.id/props.id`,
  общий `style.labelPosition` и props Toggle/KeyValue,
  `actionBarButtons.enabled/actionBarEnableOverride`,
  `fileFunction/functionHandler` с getter из файла.
- [ ] Унифицировать переименованные поля формы и компонента по таблицам:
  `topicId/helpId`, `lock/lockId`, `accordion/accordionId`,
  `dataSaveAction/dataSave`, `useCache/useCachedData`,
  `modelTrackerIsOff/disableChangeTracking`, `init/onInitialize`,
  `onRendered/afterRender`, `onDispose/onClose` и остальные пары.
  Архив `meta.legacy` не должен становиться вторым активным источником настроек.

### Style, валидация и поведение

- [ ] После согласования формата вернуть старые style-ключи и значения:
  `indent`, `offsetTop/offsetBottom/offsetAfter`, `labelPos`, `labelType`,
  `width`, `customClass`. Решить судьбу новых токенов
  `related/grouped/section/separated` и настройки `tooltipWidth`.
- [ ] Согласовать `style.state` со схемой boolean-состояний и зависимостями:
  исключить противоречия между `enabled/disabled` и `hidden/visible`.
  Определить поддержку новых `readOnly/loading/invalid`.
- [ ] Синхронизировать доступные style-поля конкретного компонента с Preview:
  обработать отступы Checkbox/Toggle/Label width, область применения ширины
  и label, доступность отрицательных отступов. Не показывать неработающие настройки.
- [ ] Восстановить отдельный `regexp` с `params.condition`, режим валидации
  OR/AND и `preventIncorrectInput` для integer/password. Уточнить формат
  параметров range/length/rangeEnum/equality/notEqual и равенство `==`.
- [ ] Установить точное соответствие спецвалидаторов `(v2/v3/v4)` старым
  `(NWC)/(KSC)/Kes4win`; не назначать соответствие по порядку элементов.
- [ ] Вернуть ссылки на функции `onBeforeRead/onBeforeSave` вместо одних
  boolean-флагов. Учесть инверсию `highlightChanges`, `getter.once`, разные
  старые enum `valueType` у значений и зависимостей, а также file-функции.
- [ ] Разобрать отличия настроек формы: старые objectType-коды и view type,
  navigation/version/dataModelName, список `buttons` с обработчиками против
  `actionBarButtons` с заголовками. Не путать версию формы со `schemaVersion`.
- [ ] Уточнить семантику зависимостей: направление проверки вхождения массива,
  несохранённый старым buildJSON оператор, функцию с/без значения и два новых cast.

### Завершение унификации

- [ ] Синхронно обновить TypeScript, JSON Schema, Inspector, генератор registry,
  нормализацию, Preview, fixtures и сохранённые формы; не оставлять записываемые
  синонимы и скрытые дубли в JSON после удаления полей из UI.
- [ ] Проверить сохранность данных при миграции, обработку конфликтующих значений,
  повторное открытие/сохранение и отсутствие изменений при повторной миграции.
  Запустить проверки типов, линтер, domain-проверки и сборку.
- [ ] Обновить спецификацию, migration.md и сравнительные таблицы: отметить
  принятые решения, устранённые дубли и оставшиеся расширения нового билдера.

## Конвертер старых JSON-форм → схема v1

Доработки контракта выполнены. Решения по всем 11 пунктам, включая перенос через
мета и ограничения исполнения, описаны в [migration.md](./migration.md).
Сам скрипт конвертации — следующий этап; исходный список требований сохранён ниже.

Доработки, необходимые для написания безпотерьного скрипта конвертации старых JSON-форм (`packages/kaspersky-ui-builder/assets/ui/*.json`) в новый формат `form.schema.json`.

1. **Определить источник истины.** Исследование `packages/kaspersky-ui-builder/src` (`art-board.tag.js` → `getFormResult`, `forms.js`) показало: старые формы — это один объект верхнего уровня, при билде (`write-form`) пишущийся целиком в файл. Источником истины НЕ является ни `json`, ни `state` по отдельности — нужен гибридный подход:
   - **`form.json`** — основа: скомпилированная структура дерева элементов (элементы, `elements[]`-дети, `value`, `dependencies`, `validation`, `style`, `lock`, `accordion`) и форме.уровневые `type`, `buttons`, `domain`, `rootForm`, `ignoreDomainValidation`, `showFlyoutHeader`, `size`. Это формат, уходящий в runtime (`runtime.trigger('form:set', form)`).
   - **Плоские top-level поля формы** — настройки, которых нет в `json`: `dataSource`, `dataSaveAction`, `objectType`, `objectId`, `section`, `title`, `init`, `navigationTitle`/`navigationGroup`, `customButtonsGetter`, `onRendered`, `onDispose`, `isParentEntity`, `actionBarAssistantBootstrapper`, `ignoreFormCloseOnDomainSave`, `author`, `topicId`, `version`, `dataModelName`, `useCache`, `parentFormId`, `mode`, `customFields`.
   - **`state`** — редакторский WYSIWYG-слой (все значения в дескрипторах `{input}`/`{slct}`/`{fncName}`); избыточен и дублирует `json`. Для конвертации НЕ используется (кроме случая, когда нужное значение есть только там).

2. **Enum типов элементов.** Закрепить маппинг старых kebab-типов (`control-group`, `react-wrapper`, `auto-wizard`, `qsw-defaults-list`, `locale`, `key-value-pair`, `list-editor`, `huge-table`, `data-table` и т.д., ~65 значений) на целевые типы схемы v1 (PascalCase, напр. `Grid`, `Textbox`) либо добавить в схему/мета открытый enum типов.

3. **Прокидывание props.** Подтвердить, что свободное поле `schemaNode.props` (`additionalProperties: true`) используется для переноса `customParams` (сырой JSON-строки) и props компонентов, включая `react-wrapper`/`react-renderer`.

4. **Значения: флаг `once` и `valueType`.** В новых `valueSource` отсутствуют `getter.once` и `valueType` (string/number/Int/Bool), присутствующие в старых `mapTo`. Добавить эти поля либо описать эвристику их переноса.

5. **Состояние `enabled` в зависимостях.** Старая зависимость поддерживает `set.state: enabled`, а `elementDependency.property` содержит только `visible/disabled/readOnly/loading`. Добавить `enabled` в enum свойства.

6. **Функциональные зависимости.** Старая `when.type: 2` ссылается на функцию (`fncName`) без значения. Проверить маппинг на `conditionSource` типа `function` / `conditionOperator`.

7. **Полное покрытие методов валидации.** Старые `validation.rules[].method` (`path`, `ip`, `email`, `length`, `range` c `params.condition`, и др.) не полностью входят в закрытый перечень `validationType`. Расширить enum и `validationConfig` либо описать таблицу соответствий старых `method` → новых `type`.

8. **Маппинг стилей.** Старые `indent`, `offsetTop/Bottom/After`, `width` не покрываются точно enum `nestingLevel`/`margin*` (space1/2/3, negative1/2/3). Описать эвристику переноса без потери данных.

9. **Поля формы без аналога в `settings`.** Добавить в `formSettings` (или мета формы) отсутствующие поля: `entityType`, `excludeFromValidateMessage`, `migrationInfo`, `section`, `objectId`, `mandatoryMode`, `preventCloseOnCancel`, `showFlyoutHeader`, `size`, `dataModelName`, `navigationGroup`/`navigationTitle`/`navTitle`, `topicId`, `version`, `ignoreFormCloseOnDomainSave`.

10. **Кастомные кнопки и обработчики.** `actionBarAssistantBootstrapper`, `customButtonsGetter`, `addSaveCloseButton`, `actionBarEnableOverride`, `actionBarGetButtonsHandler` непредставимы через `actionBarButtonsOverride` (только заголовки OK/Save/Cancel). Добавить поддержку функций-геттеров кнопок.

11. **`dataSource`/`dataSave`: тип `url`.** Старый `dsType: "url"` не имеет аналога в `formDataSource`/`formDataSave` (`manual`/`handler`/`server`). Добавить поддержку URL-источника либо описать его перенос в props/мета.
