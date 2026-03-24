# Roadmap: Normalization Tool

Краткий план работ. **Концепция, контракты и принятые решения** — в [tooling.md](./tooling.md) (границы продукта, паритет приложений, configHook, типизация, загрузка).

---

## Цель

Редактор и движок просмотра форм на базе **Hexa UI** и общего DSL. Ограничения и паритет **tool** / **viewer** — см. [tooling.md](./tooling.md#normalization-product-boundaries).

---

## 1. Конфиг-хуки (п.1)

**Скоуп контролов:** **Button**, **Text**, **Grid**, **Table** — единый контракт `configHook` и паритет пакетов ([контракт в tooling.md](./tooling.md#normalization-config-hooks)).

**Прогресс**

- ✅ **Button** — [plan-button.md](./plan-button.md)
- ✅ **Text** — [plan-text.md](./plan-text.md)
- ⏳ **Grid**
- ⏳ **Table**

---

## 2. Типизация DSL формы (п.2)

Строгие типы для артефакта формы и согласованность с `form-dsl.ts`; динамическая загрузка формы и configHook при встраивании viewer — см. [tooling.md](./tooling.md#normalization-dsl-typing-loading).

---

## 3. Превью в редакторе

Одна библиотека **Hexa UI** для холста и превью — без расхождения рендереров.

---

## 4. Полная поддержка компонентов ДС

Палитра и настройки из **всех** экспортов `@kaspersky/hexa-ui` и их **`.d.ts`**, без ручных списков.

---

## 5. Storybook и прод

**Normalization tool** — аддон Storybook. **Transpile viewer** — общий **движок рендера** DSL для Storybook и прод-приложений.
