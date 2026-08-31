# Persistence Adapter

Обеспечивает чтение и запись файлов форм и поиск файлов функций.

`forms-api.ts` — браузерный HTTP-клиент; `local-api.ts` — серверный Vite middleware.

local-api.ts подключается только из vite.config.ts, не из браузерного кода. Данные хранятся в forms/; настройки поиска — в settings.ts.
