# Component Registry

Описывает каталог компонентов и генерирует его из типов UI-пакета и palette.json.

`types.ts` и `palette.ts` — контракты; `registry.ts` загружает `generated.json`; `generate.mjs` — генератор.

Запуск из корня пакета: `npm run generate:registry`. Не редактируйте generated.json вручную.
