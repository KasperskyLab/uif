# Semantic Validator

Проверяет ID, props, вложенность, ссылки и циклы зависимостей.

`semantic-validator.ts` принимает форму и registry, возвращает Diagnostic[].

Не изменяет форму и не выполняет функции runtime. Общие типы диагностик находятся в Schema Model.
