# Schema Validator

Проверяет форму по версионированной JSON Schema через Ajv.

`form-validator.ts` возвращает Diagnostic[] для структуры и обязательных полей.

Схемы находятся в корневой папке schemas/. Межузловые проверки выполняет отдельный Semantic Validator.
