# KL Dev Tools

## ESLint

`@kaspersky/dev-tools`  содержит в себе набор общих конфигурационных файлов, плагинов и расширений для ESLint.

Дополнительная установка плагинов/конфигов eslint-а в ваш проект не требуется.

### Настройка ESLint

**1. Добавить  `.eslintrc.js`**

Для настройки ESLint необходимо создать файл `.eslintrc.js` в корне проекта и подключить нужный набор конфигов:

```js
const { getConfigPath } = require('@kaspersky/dev-tools/src/configs/eslint/patch')

module.exports = {
  extends: [
    getConfigPath('base'),
    getConfigPath('typescript'),
    getConfigPath('react'),
    getConfigPath('storybook'),
    getConfigPath('tags'),
  ],
  parserOptions: { tsconfigRootDir: __dirname } // for TS projects only
}
```

* Опция `parserOptions: { tsconfigRootDir: __dirname }` нужна только для проектов, где используется Typescript и есть `tsconfig.json`.

* Подключение патча `require('@kaspersky/dev-tools/src/configs/eslint/patch')`  необходимо для того, что бы, плагины и конфиги резолвились в рамках данного пакета (eslint по умолчанию ищет плагины относительно `.eslintrc.js` в проекте).

**2. Установить зависимости**

Для работы ESlint нужно добавить только 2 зависимости - `@kaspersky/dev-tools` версии выше 2.4.0 и `eslint` (6-8 версии), например:

```json
{
  "devDependencies": {
    "@kaspersky/dev-tools": "^2.4.0",
    "eslint": "7.14.0",
    ...
  }
}
```

### Добавление новых общих конфигов ESLint

Новые конфиги можно добавлять в папку `/src/configs/eslint`, например, это могут быть конфиги для фреймворка (angular, vue и др.).

При этом, необходимые пакеты с плагинами и конфигами eslint-а нужно добавлять в `dependencies` в package.json, что бы при установке пакета `@kaspersky/dev-tools` он содержал их в себе `node_modules`.

### Расширение конфига

Если вам необходимо добавить новые правила или расширить текущий конфиг, то это лучше делать через данный пакет `@kaspersky/dev-tools`, путём расширения текущей конфигурации или добавления новой, как описано в пункте выше. Исключениями могут быть правила, относящиеся только к вашему проекту, но не меняющие правила общих конфигов (rules), например свойства `env`, `globals`, `ignorePatterns`

### FAQ

* *После установки пакета не работает Eslint в IDE*
  
Перезапустите IDE после обновления пакета @kaspersky/dev-tools. Если в консоли ESlint пишет, что не находит каких-то модулей, то попробуйте удалить node_modules и сделать установку зависимостей заново. Проверьте, что нет синтаксических ошибок в `.eslintrc.js` файле, присутствует `parserOptions: { tsconfigRootDir: __dirname }` для TS проекта. Обязательно наличие импорта патча `eslint/patch` и использование `getConfigPath` для указания имени конфига.

### Поддержка разных версий Node.js

Для поддержки различных версий Node.js иногда необходимо устанавливать `NODE_OPTIONS`, например, для запуска определённых версий TS и Webpack через ноду начиная с 17 версии могут потребоваться установки опций `NODE_OPTIONS=\"--openssl-legacy-provider --no-experimental-fetch\"`.

Что-бы сделать обратную совместимость с 16 нодой (которая не поддерживает эти опции) можно использовать скрипт `utils/get-node-options.js`, который возвращает нужный `NODE_OPTIONS` в зависимости от установленной версии.

Для установки env переменной `NODE_OPTIONS` используется библиотека `env-cmd`.

#### Добавление скрипта в проект

В вашем проекте необходимо будет добавить в `package.json` следующий скрипт:

```json
"set-env": "./node_modules/@kaspersky/dev-tools/node_modules/.bin/env-cmd -f ./node_modules/@kaspersky/dev-tools/src/utils/get-node-options.js"
```

и далее в скрипты `build`, `release` и другие, добавить `yarn set-env` перед нужной командой, например:

```json
"release": "yarn set-env gulp release",
```

Данный скрипт добавит к `gulp release` установку нужных `NODE_OPTIONS` в зависимости от версии Node.js перед его запуском.
