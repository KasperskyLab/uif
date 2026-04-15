# Каталог фич: UI Normalization

Иерархия **возможностей** (feature tree) туллинга. Каждая фича — отдельный файл: контракт, ограничения, связь с кодом. Сводный обзор решения и навигация — **[tooling.md](../tooling.md)**.

---

## Дерево (вложенность)

```
Решение: config-driven формы + Hexa UI
│
├── Продукт и поставка
│   └── [Продукт, паритет, два приложения](./feat-product-and-parity.md)
│
├── DSL и исполнение
│   ├── [Корневая модель FormData](./feat-dsl-root-model.md)
│   ├── [Принцип «одна настройка — один способ»](./feat-dsl-one-setting.md)
│   ├── [Контракт configHook](./feat-config-hook.md)
│   ├── [handlers формы и useConfig (отдельные хуки)](./feat-schema-handlers.md)
│   ├── [Ленивый рантайм: parseFormTs, Sucrase, чанки](./feat-lazy-dsl-runtime.md)
│   └── [Типизация автором и импорты потребителя](./feat-typing-and-imports.md)
│
├── Рабочее пространство (браузер)
│   └── [FSA, IndexedDB, URL form, сценарии, среда](./feat-workspace-browser.md)
│
├── Целевое состояние (роадмап)
│   ├── [Архитектурные решения и направления](./feat-architecture-directions.md)
│   ├── [Превью в редакторе — единый рендер-движок](./feat-editor-preview-target.md)
│   └── [Один configHook на форму](./feat-form-config-hook-unified.md)
│
└── Репозиторий
    └── [Пакеты и shared-модули](./feat-repo-layout.md)
```

---

## Связь с другими документами

| Документ | Роль |
|----------|------|
| [tooling.md](../tooling.md) | Краткое **описание решения** + таблица ссылок на фичи |
| [roadmap.md](../roadmap.md) | Этапы п.1–9, статусы |
| [plans/](../plans/) | **Требования** по эпикам (фича → описание), трассировка к роадмапу |

---

## Именование фич в требованиях (plans)

В планах используются стабильные идентификаторы вида **`domain.short-name`** (например **`config-hook.button`**) для ссылок из обсуждений и PR.
