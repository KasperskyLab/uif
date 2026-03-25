# UI Normalization Tooling

Спецификация **config-driven** форм: источник правды — декларативный конфиг (в рантайме объект **`FormData`**), а не разметка и не ad-hoc React во вью. Два приложения в монорепозитории закрывают разные этапы жизненного цикла конфига.

**Цели:** один формат данных; визуальное редактирование в dev; просмотр «как у пользователя» без редактора; рендер через **Hexa UI** (`@kaspersky/hexa-ui`).

**Не цели:** CI-скрипты, версии зависимостей, полный перечень полей каждого контрола в DSL (см. типы в **`shared/`** и пакетах).

**Границы:** роль пакетов, модель «конфиг → UI», контракты загрузки и хуков. Пороговые команды и локальный запуск — **`README.md`** / **`AGENTS.md`** пакетов.

**Оглавление раздела:** [README в этой папке](./README.md).

---

## Как устроен этот документ

| Слой | Содержание |
|------|------------|
| **Цель** | Зачем tool и viewer; что такое config-driven. |
| **Механика** | Файлы `.ts`, ленивый рантайм **`loadFormDslBrowserRuntime`**, таблица ролей приложений. |
| **Ограничения** | Браузер, паритет пакетов, границы продукта (источники контролов). |
| **Контракты / API** | Корень DSL, принцип «одна настройка», **`configHook`**, [ленивый рантайм](#normalization-dynamic-dsl-runtime), типизация. |
| **Решения** | Зафиксированная архитектура и целевые направления ([§ зафиксированные решения](#normalization-architecture-decisions)). |
| **Операции** | Сценарии, IndexedDB, URL `form`, дерево репозитория. |

Дорожная карта этапов: **[roadmap.md](./roadmap.md)**. Планы по контролам и DSL: **[plans/](./plans/)**.

---

## Config-driven: суть

Форма задаётся **TS-модулем** с **`export default { ... }`**, совместимым с типом **`FormData`**. Редактор и viewer вызывают **`parseFormTs`** из ленивого чанка (**`loadFormDslBrowserRuntime()`**): **Sucrase** → **blob URL** → **`import()`** (см. [§ ленивый рантайм](#normalization-dynamic-dsl-runtime)).

| | **Normalization Tool** | **Transpile Viewer** |
|---|------------------------|----------------------|
| **Пакет** | `packages/kaspersky-ui-normalization-tool` | `packages/kaspersky-ui-normalization-transpile-viewer` |
| **Роль** | Сборка и правка формы | Только просмотр |
| **Редактирование** | Холст, DnD, свойства, undo/redo | Нет |
| **Файлы форм** | **`.ts`** (File System Access API) | То же |
| **Рендер** | Холст + **`FormPreview`** | **`FormRenderer`** |
| **Тесты** | Vitest, Playwright e2e | По необходимости |

---

<a id="normalization-product-boundaries"></a>

## Границы продукта и паритет

**Источники контролов в редакторе — только два класса:**

1. Компоненты из **`@kaspersky/hexa-ui`**.
2. Кастомные компоненты (подключаются отдельно; детали — этапы [roadmap](./roadmap.md)).

Третьих источников нет.

**Паритет tool и viewer:** фича из роадмапа считается закрытой только при согласованном DSL, семантике и поведении **в обоих** пакетах без отставания одного из них.

---

<a id="normalization-architecture-decisions"></a>

## Зафиксированные и целевые архитектурные решения

**DSL и код (сделано, п.2.1–2.2):**

- Один **общий модуль** в дереве репозитория: **`shared/types/form.ts`**, **`shared/normalization-form-dsl/`** — ядро **`form-dsl-core.ts`** (без зависимости от Sucrase), **`parse-form-ts.ts`** (**`parseFormTs`**), **`transpile-config-hook-module.ts`**, entry **`form-dsl.ts`**, **`load-form-dsl-runtime.ts`**, **`form-dsl-browser-runtime.ts`**. В пакетах — реэкспорт **`src/types/form-dsl.ts`**, alias **`@normalization/form-dsl`**, **`@normalization/load-form-dsl-runtime`**.
- **Отдельный publishable-пакет** под DSL **не вводится**; **двух расходящихся копий** полного DSL **нет**.
- Артефакты форм в каталоге — **только `.ts`**.
- **П.2.2:** приложения **не** импортируют Sucrase и **`parseFormTs`** статически из основного entry; тяжёлый рантайм подгружается **одним** async-чанком до первого парсинга формы / транспиляции **`configHook`** ([детали ниже](#normalization-dynamic-dsl-runtime)).

**Модель состояния (текущий этап):**

- **`FormSlice.state`** — **гибкий** контракт (ориентир **`Record<string, unknown>`**), без обязательной строгой связки значений со **`schema`** на уровне типов.

**Отображение и Hexa:**

- Маппинг «семантика контрола → компонент ДС» живёт в **реестрах / рендерерах** приложений, **не** как отдельный дублирующий метатип в DSL.

**Кодовая база (направление, п.6 роадмапа):**

- Контролы обрабатываются **общими** механизмами; частное — в **дескрипторах и типах**, не ветвление копипастой в рендерерах.

**Инструменты как продукты (направление, п.5–8):**

- **Normalization tool** — целевой сценарий: аддон **Storybook**; **transpile viewer** — общий движок рендера для Storybook и прод.
- Оболочки приложений — на компонентах **Hexa UI**; целевое **dogfooding** — свой UI инструментов из DSL + того же рендера (оговорки для холста/DnD — при проектировании).
- **Нейминг (цель):** `kant-editor` / `kant-renderer` вместо текущих имён пакетов — по мере этапа.

**Совместимость и экосистема (п.7, будущие этапы):**

- Контракт **`form-dsl`** и артефакты — **обратная совместимость** с **JSON UI Builder** (или явный мост версий).
- Viewer на **адаптерах** и **Auto UI** без монолитного маппинга «все типы»; **Auto UI** — миграция на **React** end-to-end. Детали — отдельные планы при старте этапа.

---

<a id="normalization-dynamic-dsl-runtime"></a>

## Ленивый рантайм DSL и динамические импорты (п.2.2)

**Цель:** основной бандл **tool** / **viewer** не включает **Sucrase** и логику **`parseFormTs`** до первого открытия **`.ts`** формы, сохранения, экспорта в TS или загрузки **`configHook`**.

**Механика**

1. **`loadFormDslBrowserRuntime()`** (`shared/normalization-form-dsl/load-form-dsl-runtime.ts`) — один раз выполняет **`import('./form-dsl-browser-runtime')`** и кэширует `Promise`. Повторные вызовы возвращают тот же промис.
2. **`form-dsl-browser-runtime.ts`** реэкспортирует **`parseFormTs`**, **`formToTs`**, **`formToJsonString`**, **`transpileConfigHookSource`**, **`isConfigHookPathTs`** — всё, что тянет или сопровождает Sucrase в браузере.
3. **`parseFormTs`** живёт в **`parse-form-ts.ts`** и импортирует только **`normalizeFormData`** из **`form-dsl-core.ts`**; ядро **не** импортирует Sucrase (разделение для tree-shaking основного бандла).
4. **Артефакт формы** при сериализации (**`formToTs`**) записывает **`configHook`** и пути **`handlers`** как **`() => import('./относительный-путь')`**, чтобы при выполнении модуля формы из blob подгрузка хуков оставалась **ленивой** (исполнение — по запросу рендерера, как и сейчас).

**Где вызывается `loadFormDslBrowserRuntime`:** **`useFormFile`**, **`CodeExportDialog`**, **`loadConfigHookModule`** (tool); **`useFormLoader`**, **`loadConfigHookModule`** (viewer).

**Тесты:** **`form-dsl-browser-runtime.test.ts`**, **`transpile-config-hook-module.test.ts`**, **`form-dsl.test.ts`** (Vitest в **normalization-tool**).

**Публичный API:** типы и функции дерева / JSON без парсинга — по-прежнему из **`@normalization/form-dsl`**. Для **`parseFormTs`** в скриптах или тестах можно импортировать **`./parse-form-ts`** напрямую; в браузерных приложениях пакетов — предпочтительно **`loadFormDslBrowserRuntime`**.

---

## Модель данных (DSL)

Корень (**`FormData`**):

- **`name`**, **`id`**
- **`schema`** (опционально) — поля данных
- **`handlers`** (опционально) — события уровня формы → **пути к файлам**
- **`elements`** — дерево контролов: **`type`**, **`id`**, привязки к данным, валидация, видимость/доступность, обработчики на контроле

Исходники типов: **`shared/types/form.ts`**, логика — **`shared/normalization-form-dsl/form-dsl-core.ts`**.

---

<a id="normalization-one-setting-principle"></a>

## Принцип: одна настройка — один способ

У каждого пропа экземпляра компонента **ровно один** источник:

- **Статика** — поле контрола в DSL, задаётся в инспекторе.
- **Динамика** — только через **`configHook`**; для этого пропа **нет** поля в DSL.

Смешивание статики и динамики для **одного** пропа **запрещено** (нет merge и «динамика перекрывает статику»).

---

<a id="normalization-config-hooks"></a>

## Контракт `configHook`

В динамическом режиме пропсы экземпляра компонента ДС задаёт **один** модуль: **`configHook`** (по смыслу React-хук). Колбэки (`onClick`, `onChange`, …) живут **внутри** возвращаемого объекта пропсов. Отдельного типа «обработчик события» в DSL для этого сценария нет. Стиль реализации — ориентир: **`jsons/handlers/*.config-hook.ts`** в пакете tool.

- **Вход:** **`FormSlice`** (конфиг, `state`, то, что нужно для вычисления пропсов). Тип контрола задаётся **самим модулем** (один файл — один вид).
- **Выход:** полный объект пропсов компонента ДС **или `null`** (**`null`** — не монтировать; отдельных `visible` в DSL для этого нет).
- **Реактивность:** хук выполняется как обычный React-хук; зависимости — через стейт/React, не декларативный список в DSL.
- **Два слоя контекста в колбэках:** автор разводит контекст **формы/инструмента** (конфиг, `state`, id в DSL) и контекст **Hexa** (аргументы события, при необходимости актуальные пропсы).

### Язык файлов и загрузка в браузере

| Артефакт | Расширение | Загрузка в приложениях |
|----------|------------|-------------------------|
| Файл формы | **`.ts` только** | **`loadFormDslBrowserRuntime()`** → **`parseFormTs`**: Sucrase → blob → `import()` |
| **`configHook`** | **`.ts` только** | Тот же ленивый рантайм → **`transpileConfigHookSource`** → blob → `import()`; в **`.ts`** формы путь задаётся как **`() => import('./…')`** |
| Пути в **`handlers`** (форма/контрол) | В UI пикера допустимы **`.js`** и **`.ts`** | Контракт исполнения в рантайме выравнивается с песочницей модулей; **приоритет спеки — TS** для новых артефактов |

Тип аргумента хука — **`FormSlice`**. Примеры возврата: кнопка — **`ButtonProps \| null`**, текст — **`TextProps \| null`** (типы Hexa UI).

---

<a id="normalization-dsl-typing-loading"></a>

## Типизация и загрузка (спека)

**Типизация автором:** форма как **`export default`** с опорой на **`FormData`** из **`@normalization/form-dsl`** — `satisfies`, аннотация, `.d.ts` рядом, codegen при сохранении (на выбор). Цель — проверяемая цепочка **`FormSlice`** → контрол → пропсы Hexa в хуке.

**Потребитель viewer как библиотеки:** помимо внутреннего чанка **`loadFormDslBrowserRuntime`**, конфиг формы и модули хуков в проде подключают через **динамический `import()`** по URL/чанкам, а не один статический бандл всего каталога.

Итоги **п.2.1–2.2:** [plan-dsl-typing.md](./plans/plan-dsl-typing.md), [roadmap §2](./roadmap.md).

---

<a id="normalization-editor-preview-planned"></a>

## Превью в редакторе (роадмап п.3, целевая спека)

**Цель:** один код рендера в **dev** и **prod**; расхождения **tool vs viewer** недопустимы.

- В режиме визуализации — **встраивание transpile-viewer** (**`FormRenderer`** и та же обвязка, что у внешнего потребителя), вместо или поверх текущего **`FormPreview`** (UX — при внедрении).
- Один **контур импорта** рендера, те же правила **`configHook`** и песочницы модулей. Отдельное приложение viewer остаётся сценарием «каталог + просмотр» без холста.
- **Превью-сценарии (черновик):** опциональный путь к модулю в духе **`handlers/preview-scenario.ts`**, вызываемому **только в превью**, возвращающему моки / патч **`state`** / контекст; точное имя поля и сигнатура — при реализации.

Открытые продуктовые вопросы (п.3): **`rows`/`cols` у Grid/Table vs возврат хука**; **тулбар и `rowSelection` у Table** (DSL vs `configHook`) — см. [roadmap §3](./roadmap.md#normalization-roadmap-p3).

---

## Сценарии

1. **Разработка:** Tool → каталог → **`.ts`** → холст → сохранение; при необходимости превью и экспорт.
2. **Просмотр без редактора:** Viewer → тот же каталог → файл в дереве → проверка рендера.
3. **Передача артефактов:** каталог с **`.ts`** и **`handlers/`**; **Chrome/Edge desktop** из‑за File System Access API.

---

## Структура в репозитории

```
docs/normalization/
packages/kaspersky-ui-normalization-tool/
  src/utils/directoryHandleStorage.ts   # IndexedDB, ключ tool
  src/utils/formUrlSync.ts              # ?form=
  src/types/form-dsl.ts
  src/controls/
  src/components/
packages/kaspersky-ui-normalization-transpile-viewer/
  src/utils/directoryHandleStorage.ts   # та же база, ключ viewer
  src/utils/formUrlSync.ts
  src/types/form-dsl.ts
  src/components/FormRenderer.tsx
shared/types/form.ts
shared/normalization-form-dsl/
  form-dsl.ts                    # entry типов и ядра (без статического Sucrase)
  form-dsl-core.ts
  parse-form-ts.ts               # parseFormTs + Sucrase
  load-form-dsl-runtime.ts       # кэшированный dynamic import чанка
  form-dsl-browser-runtime.ts    # чанк: parse + formToTs + transpile hook
  transpile-config-hook-module.ts
```

---

## Требования к среде

- **Браузер:** Chrome или Edge (desktop) — каталог и запись файлов.
- **Node.js:** 18+ для установки и скриптов в пакетах.

---

## Память каталога и URL формы

**IndexedDB:** база **`kaspersky-ui-normalization-fsa`**, ключи **`normalization-tool`** и **`transpile-viewer`** хранят **`FileSystemDirectoryHandle`**. При следующем визите — **`queryPermission` / `requestPermission`** (`read`); при **`granted`** диалог не показывается.

**Режим E2E (`window.__E2E_DEMO__`):** у tool персистентность каталога отключена; синхронизация **`form`** в URL отключена.

**Query `form`:** относительный путь к **`.ts`** формы, например **`?form=demo-form.ts`**. Обновление через **`history.replaceState`**; после перезагрузки форма открывается, если каталог восстановлен.

---

## Ссылки

- [Forma README](https://github.com/KasperskyLab/uif/blob/feature/forms/examples/quick-start/src/shared/Forma/README.md) — другой стек, тот же принцип «конфиг во вью».
- [MONOREPO-SCHEME.md](https://github.com/KasperskyLab/uif/blob/feature/setup-js-monorepo/docs/MONOREPO-SCHEME.md)
- [Hexa UI](https://github.com/KasperskyLab/uif)
