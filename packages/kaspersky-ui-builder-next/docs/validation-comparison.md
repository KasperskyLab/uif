# Сравнение валидации

[Общее сравнение и вопросы](./settings-comparison.md).

Источник старых **value/label**: [validation-setup.tag.html](../../kaspersky-ui-builder/src/client/components/control-settings-components/validation-setup/validation-setup.tag.html).
Источник runtime-структуры: [validation-list-field.js](../../kaspersky-ui-builder/src/client/modules/control-settings-fields/validation-list-field.js).
Новая схема: [form.schema.json](../schemas/v1/form.schema.json), Inspector: [Inspector.tsx](../src/modules/inspector/Inspector.tsx).

## Методы

Новый enum пока сохраняет labels как значения. Канонический ключ должен быть старым method;
label следует хранить в едином справочнике интерфейса, а не дублировать в каждом правиле.
Спецвалидаторы с неясным соответствием отмечены вопросом; перенос без подтверждения не выполнен.

| Старый value (`method` редактора) | Старый label | Новый `type` и `name` | Результат сравнения |
| --- | --- | --- | --- |
| `date` | Date | Date | Сменить label-значение на старый ключ |
| `email` | Email | Email | Сменить label-значение на старый ключ |
| `integer` | Integer | Integer | Сменить label-значение на старый ключ |
| `float` | Number / Float number | Number; Float number | Дубль: объединить в float |
| `ipv4` | IPv4 | IPv4 | Сменить label-значение на старый ключ |
| `ipv6` | IPv6 | IPv6 | Сменить label-значение на старый ключ |
| `macAddress` | MAC address | MAC address | Сменить label-значение на старый ключ |
| `path` | Path | Path | Сменить label-значение на старый ключ |
| `range` | Range | Range | Сменить label-значение на старый ключ |
| `string` | String | String | Сменить label-значение на старый ключ |
| `proxy` | Proxy | Proxy | Сменить label-значение на старый ключ |
| `hostname` | Host name | Host name | Сменить label-значение на старый ключ |
| `netBiosName` | Net bios name | Net bios name | Сменить label-значение на старый ключ |
| `regexp` | Regexp | нет; только Legacy | Пропущен стандартный метод; нужен params.condition |
| `notEmpty` | Not empty | Not empty | Сменить label-значение на старый ключ |
| `length` | Length | Length | Сменить label-значение на старый ключ |
| `group` | Group | Group | Сменить label-значение на старый ключ |
| `rangeEnum` | RangeEnum | RangeEnum | Сменить label-значение на старый ключ |
| `ipv4Mask` | IPv4Mask | IPv4Mask | Сменить label-значение на старый ключ |
| `ipv6Mask` | IPv6Mask | IPv6Mask | Сменить label-значение на старый ключ |
| `ipv4SubnetMask` | ipv4SubnetMask | ipv4SubnetMask | Сменить label-значение на старый ключ |
| `ipv6SubnetMask` | ipv6SubnetMask | ipv6SubnetMask | Сменить label-значение на старый ключ |
| `ignoreSpecialChars` | Ignore special chars | Ignore special chars | Сменить label-значение на старый ключ |
| `ignoreKSCSpecialChars` | Ignore special chars (NWC) | Ignore special chars (v2)? | Не подтверждено: label v2 не описывает NWC |
| `ignoreKSCSpecialCharsExtended` | Ignore special chars (KSC) | Ignore special chars (v3)? | Не подтверждено: label v3 не описывает KSC |
| `ignoreKes4winSpecialChars` | Ignore Kes4win special chars | Ignore special chars (v4)? | Не подтверждено: label v4 не описывает Kes4win |
| `password` | Password | Password | Сменить label-значение на старый ключ |
| `ignoreFirstLastSpaces` | Ignore first or last spaces | Ignore first or last spaces | Сменить label-значение на старый ключ |
| `urlInput` | URL Input | URL Input | Сменить label-значение на старый ключ |
| `urlHttpInput` | URL http Input | URL http Input | Сменить label-значение на старый ключ |
| `port` | Port | Port | Сменить label-значение на старый ключ |
| `function` | Custom function | Custom function | В старом runtime method удаляется, хранится source.command; нужен выбор формата функции |
| `equality` | Equality | Equality | Сменить label-значение на старый ключ |
| `notEqual` | Not equal | Not equal | Сменить label-значение на старый ключ |

## Структура и параметры

| Старый редактор → runtime | Старый label | Новый формат | Разница |
| --- | --- | --- | --- |
| validation.type `"0"` / `"1"` | OR / AND | validation: ValidationRule[] | Потерян переключатель логики между правилами; мета хранит исходник, но не заменяет исполняемую настройку |
| method | Validation type | name + type | Полный дубль name/type; оставить один method |
| from/to → params.range: `from-to` | From / To | config.kind=range, from/to | Новая раздельная структура точнее; старую строку нельзя бездумно split по минусу |
| allowEmptyValue → params.allowEmptyValue | Allow empty values | config.allowEmpty | Переименование |
| condition → params.condition | Condition | config.operator | Старое равенство `==`, новое `=`; display label в обоих `=` |
| lengthSize → params.length | без отдельного label числа | config.value | Переименование и перенос значения |
| condition → params.condition у regexp | Regular expression | нет стандартного config | Добавить; сейчас только Legacy.rule |
| functionName → source.command, без method | Custom function | type=Custom function, config.kind=customFunction, function | В новой схеме ссылка runtime/file, в старой строка команды |
| equalsTo → params.equalsTo | Equals | config.equals | Переименование |
| notEqualsTo → params.notEqualsTo | Not equals | config.notEquals | Переименование |
| preventIncorrectInput=true у password/integer | без отдельного checkbox | только Legacy.rule | Потеря поведения при обычном переносе в Password/Integer |
| нет в штатном buildJSON | — | id, enabled, message | Новые поля; старый editor id не включается в runtime rule |
| произвольный исходный rule | исходный label метода | type=Legacy, config.kind=legacy, rule | Архивный обход ограничений, не исполнение старой валидации |

Функции валидации не следует путать с `onChange`, `onBeforeRead`, `onBeforeSave`
и обработчиками формы. Ссылка может иметь общий тип, но события и поля разные.
`range`, `length`, `rangeEnum`, `function`, `equality`, `notEqual` требуют
синхронных изменений схемы, TypeScript, Inspector, тестовых форм и нормализации.
Одного переименования option в UI недостаточно.
