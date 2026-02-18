# Kaspersky Dev Tools

## ESLint

`@kaspersky/dev-tools`  содержит в себе набор общих конфигурационных файлов, плагинов и расширений для ESLint.

Дополнительная установка плагинов/конфигов eslint-а в ваш проект не требуется.

При миграции с версии 2 на версию 3 воспользуйтесь следующей [инструкцией](#миграция-с-версии-2-на-версию-3).

### Настройка ESLint

**1. Добавить  `eslint.config.mjs`**

Для настройки ESLint необходимо создать файл `eslint.config.mjs` в корне проекта и подключить нужный набор конфигов:

```js
import { defineConfig, globalIgnores } from 'eslint/config'
import { configs } from '@kaspersky/dev-tools'

export default defineConfig([
  configs.eslint.base,
  configs.eslint.react,
  configs.eslint.typescript,
  globalIgnores([
    '**/._*.*',
    'node_modules/**/*',
    '_build/**/*',
  ]),
  {
    files: ['client/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: 'client/tsconfig.json'
      }
    }
  },
  {
    files: ['server/**/*.{js,ts}'],
    languageOptions: {
      parserOptions: {
        project: 'server/tsconfig.json'
      }
    }
  }
])
```

**2. Установить зависимости**

Для работы ESlint нужно добавить только 2 зависимости:
- `@kaspersky/dev-tools` версии выше 3.0.0
- `eslint` версии выше 9.0.0

```json
{
  "devDependencies": {
    "@kaspersky/dev-tools": "3.4.0",
    "eslint": "9.25.0",
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
  
Перезапустите IDE после обновления пакета @kaspersky/dev-tools. Если в консоли ESlint пишет, что не находит каких-то модулей, то попробуйте удалить node_modules и сделать установку зависимостей заново. Проверьте, что нет синтаксических ошибок в `eslint.config.js` файле, присутствует `parserOptions: { project: './tsconfig.json' }` для TS проекта. Обязательно наличие импорта патча `eslint/patch` и использование `getConfigPath` для указания имени конфига.

### Миграция с версии 2 на версию 3

Для того чтобы мигрировать на версию 3 необходимо:

- Переименовать файл `.eslintrc` в `eslint.config.mjs`
- по текущему воркспейсу (где обновляете линтер) **выполнить автозамену** всех импортов c `@kaspersky/dev-tools/src` на `@kaspersky/dev-tools/lib`. Т.к. изменилась итоговая папка
- Удалить файл `.eslintignore` и задать исключения через `globalIgnores`, как в примере выше.
- Определить параметр `files` и импортировать базовые конфигурации и в файле `eslint.config.mjs`:

  Дополнительно можно настроить автоматическое форматирования в VSCode, для этого нужно добавить в `.vscode/settings.json` следующие параметры:

  ```json
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
  ```

## Поддержка разных версий Node.js

Для поддержки различных версий Node.js иногда необходимо устанавливать `NODE_OPTIONS`, например, для запуска определённых версий TS и Webpack через ноду начиная с 17 версии могут потребоваться установки опций `NODE_OPTIONS=\"--openssl-legacy-provider --no-experimental-fetch\"`.

Что-бы сделать обратную совместимость с 16 нодой (которая не поддерживает эти опции) можно использовать скрипт `utils/get-node-options.js`, который возвращает нужный `NODE_OPTIONS` в зависимости от установленной версии.

Для установки env переменной `NODE_OPTIONS` используется библиотека `env-cmd`.

#### Добавление скрипта в проект

В вашем проекте необходимо будет добавить в `package.json` следующий скрипт:

```json
"set-env": "./node_modules/@kaspersky/dev-tools/node_modules/.bin/env-cmd -f ./node_modules/@kaspersky/dev-tools/lib/utils/get-node-options.js"
```

и далее в скрипты `build`, `release` и другие, добавить `yarn set-env` перед нужной командой, например:

```json
"release": "yarn set-env gulp release",
```

Данный скрипт добавит к `gulp release` установку нужных `NODE_OPTIONS` в зависимости от версии Node.js перед его запуском.
