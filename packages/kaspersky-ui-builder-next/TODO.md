# TODO

Список отложенных доработок JSON Form Builder. Пункты здесь не входят в текущую версию, пока явно не перенесены в рабочий план.

## Палитра компонентов

- Перейти с локального `palette.json` в корне билдера на manifest из корня npm-пакета `@kaspersky/hexa-ui`, когда пакет начнёт поставлять файл по контракту. Сохранить проверку версии manifest и возможность диагностировать несовместимый пакет.

## Конвертер старых JSON-форм → схема v1

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
