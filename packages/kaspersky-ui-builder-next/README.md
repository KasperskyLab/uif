# JSON Form Builder

React SPA для визуального создания и редактирования JSON-схем форм. Схема описывает дерево React-компонентов, их props, состояния, стили, источники значений, зависимости и правила валидации.

Интерфейс состоит из палитры компонентов, центрального представления `Схема | JSON | Превью` и Inspector выбранного элемента или формы. Палитра и настройки props генерируются из TypeScript-типов `@kaspersky/hexa-ui` с учётом локального [`palette.json`](./palette.json). Иконки берутся из `@kaspersky/hexa-ui-icons`.

Формы сохраняются в [`forms/`](./forms/) отдельными файлами `<название формы>.json`. Машиночитаемые схемы находятся в [`schemas/`](./schemas/), полная спецификация — в [`spec.md`](./spec.md), отложенные задачи — в [`TODO.md`](./TODO.md).

## Запуск

Требуются Node.js и npm.

```bash
npm install
npm run generate:registry
npm run dev
```

После запуска приложение доступно по адресу, который выведет Vite (обычно `http://127.0.0.1:5173/`). Локальный Vite middleware предоставляет API чтения и записи форм и поиск файлов функций внутри `basePath`, заданного в [`settings.ts`](./settings.ts).

## Проверки

```bash
npm run typecheck
npm run lint
npm run check:domain
npm run build
```

`generate:registry` необходимо повторять после изменения `palette.json`, версии UI-kit или TypeScript-контрактов компонентов.
