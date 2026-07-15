# Работа с пропсами в Storybook: текущее состояние

Документ описывает, как сейчас устроена работа с пропсами в `kl-hexa-ui` для Storybook `Controls` и документационных вкладок **Properties** и **autodoc**.

## Основные участники

- `helpers/resolveDesignControls.ts` — `sharedPropConfig`, `designControlsConfig`
- `.storybook/components/designControls/withDesignControls.tsx`
- `.storybook/main.ts` — настройки `react-docgen-typescript`
- `.storybook/components/Documentation/types.ts`
- `.storybook/components/Documentation/propPresentation.tsx` — `PropsTable`, helpers
- `.storybook/components/Documentation/AutodocArgsTable.tsx` — вкладка autodoc
- `.storybook/components/Documentation/docgenProbes.tsx` — probe-компоненты для docgen (testing props)
- `src/*/stories/*.controls.ts` — `PropPresentationMap` компонента
- `src/*/*.stories.tsx`
- `src/*/stories/*.documentation.mdx`

## Три связанных потока

Пропсы участвуют сразу в трёх потоках:

1. **Controls** — правая панель у Playground story.
2. **Properties** — курируемая таблица на MDX-странице (секции «ВНЕШНИЙ ВИД», «СЛУЖЕБНЫЕ», «УСТАРЕВШИЕ»).
3. **autodoc** — «сырая» docgen-таблица API компонента на той же MDX-странице.

Потоки 2 и 3 рендерятся на вкладках одного `*.documentation.mdx`, но собирают данные по-разному.

```text
TypeScript props компонента
        │
        ▼
react-docgen (main.ts) ──► extractArgTypes ──┬──► PropsTable (Properties)
                                              └──► AutodocArgsTable (autodoc, слой 1)

*.controls.ts (PropPresentationMap) ──► buildStoryArgTypes ──► meta.argTypes в *.stories.tsx
                                      ├──► Controls (Playground)
                                      ├──► getPropsTableRows ──► PropsTable (Properties)
                                      └──► mergeMissingArgTypes ──► AutodocArgsTable (autodoc, слой 2)

docgenProbes.tsx (TestingPropsProbe) ──► extractArgTypes ──► AutodocArgsTable (autodoc, слой 3, при includeTestingProps)
```

## 1. Источник docgen: `main.ts`

Storybook извлекает типы и JSDoc из TypeScript через `reactDocgenTypescriptOptions` в `.storybook/main.ts`:

- `shouldExtractLiteralValuesFromEnum: true`
- `shouldRemoveUndefinedFromOptional: true`
- `skipChildrenPropWithoutDoc: false` — `children` попадает в docgen даже без локального JSDoc
- `propFilter` — пропускает `children`, `className`, `style`, `id` из `@types/react`; остальные inherited props из `node_modules` отфильтровывает

Результат docgen доступен через встроенный Storybook helper `parameters.docs.extractArgTypes(component)`.

**Важно для autodoc:** docgen извлекает только то, что видит в TS-типах компонента. При `type Props = A & B` (пересечение alias) docgen часто возвращает урезанный набор (например, только `children`). Полный список пропов в autodoc без правок `src` восполняется **вторым слоем** — `preparedMeta.argTypes` со страницы docs (см. раздел 7). Явный `interface` с JSDoc по-прежнему улучшает первый слой, но не обязателен, если проп уже описан в `*.controls.ts` и подключён в `*.stories.tsx`.

## 2. Общий словарь метаданных: `resolveDesignControls.ts`

Файл хранит два слоя:

### `sharedPropConfig`

Переиспользуемые описания общих пропов (`children`, `disabled`, `mode`, `size`, `className`, `style`, `testId`, legacy testing props и т.д.) с полями:

- `description`, `control`, `options`, `defaultValue`
- `deprecated`, `showInControls`

В `*.controls.ts` подключается через `extendPropPresentation(sharedPropConfig[propName], overrides)`.

### `designControlsConfig`

Словарь по компонентам (`button`, `badge`, …) для legacy-режима design controls. Используется только `withDesignControls`, не участвует напрямую во вкладках Properties/autodoc.

## 3. Presentation-конфиг компонента: `*.controls.ts`

Для каждого мигрированного компонента создаётся файл вида `Button.controls.ts` с экспортом `PropPresentationMap`.

На примере `button`:

- обычные пропы (`mode`, `size`, `text`, `iconBefore`, `isPressed`, `onClick`, `testId`, …) — общая таблица Properties и Controls, если не скрыты фильтрами;
- deprecated-пропы (`klId`, `dataTestId`, …) — отдельная секция Properties;
- descriptions частично берутся из `sharedPropConfig` через `extendPropPresentation`;
- `control: false` исключает проп из Controls (`getControlsInclude`).

## 4. Типы presentation-слоя

Файл `.storybook/components/Documentation/types.ts` задаёт `PropPresentation`:

| Поле | Назначение |
|------|------------|
| `order` | порядок внутри секции |
| `description` | текст для docs и Controls |
| `deprecated` | секция «УСТАРЕВШИЕ» |
| `hidden` | скрыть из Properties |
| `showInControls` | скрыть из Controls при `false` |
| `control` | override Storybook control; `false` — не показывать в Controls |
| `options` | значения для select/radio |
| `type`, `defaultValue` | override типа и default в таблице |
| `table.type`, `table.defaultValue` | альтернативный синтаксис тех же override |

## 5. Helpers в `propPresentation.tsx`

### `buildStoryArgTypes(presentation)`

Преобразует `PropPresentationMap` в Storybook `ArgTypes` для Playground:

- переносит `description`, `options`, `control`;
- переносит `type` / `table.type` в `table.type.summary`.

Используется в `*.stories.tsx`:

```tsx
argTypes: buildStoryArgTypes(buttonPropPresentation),
parameters: {
  controls: {
    include: getControlsInclude(buttonPropPresentation)
  }
}
```

### `getControlsInclude(presentation)`

Список пропов для `parameters.controls.include`:

- не `hidden`, не `deprecated`;
- `control !== false` и `showInControls !== false`;
- порядок сохраняется по объявлению ключей в `PropPresentationMap`.

### `getPropsTableRows(argTypes, presentation, deprecatedSection)`

Сборка строк для **Properties**:

1. Берёт переданные `argTypes` (из docgen / meta).
2. Исключает `argType.table.disable` и `presentation[name].hidden`.
3. Накладывает overrides из presentation (`description`, `type`, `defaultValue`).
4. Сортирует: сначала не deprecated, потом deprecated; внутри секции — по `order`.
5. Возвращает `{ rows, deprecatedRows }`.

### `extendPropPresentation(base, overrides)`

Мержит `sharedPropConfig[...]` с локальными overrides компонента.

## 6. Вкладка Properties: `PropsTable`

Компонент объявлен в `propPresentation.tsx`.

### Подключение в MDX

```mdx
<PropsTable of={ButtonStories} presentation={buttonPropPresentation} />
```

- `of={ComponentStories}` — модуль stories (meta), не React-компонент;
- `presentation={...}` — правила порядка, скрытия и override текстов и типов.

### Как получаются argTypes

1. `useOf(of || 'meta')` — Storybook docs context.
2. `getStoryArgTypes(resolved)`:
   - для **meta**: `parameters.docs.extractArgTypes(component)` (docgen), fallback — `preparedMeta.argTypes`;
   - для **story**: `story.argTypes`.
3. `getPropsTableRows(...)` накладывает presentation и отделяет deprecated-пропы.
4. Рендерится основная таблица и, при необходимости, отдельная deprecated-таблица.

### Что показывает Properties

Курируемый список: только пропы, описанные в presentation и не помеченные `hidden`. Типы и defaults берутся из docgen, но могут быть переопределены в `*.controls.ts`. Deprecated-пропы по-прежнему выводятся отдельно через `deprecated`.

Properties **не** дублирует Controls один в один: deprecated-пропы не попадают в Playground controls и выводятся отдельно в таблице.

## 7. Вкладка autodoc: `AutodocArgsTable`

Отдельный компонент в `.storybook/components/Documentation/AutodocArgsTable.tsx`. Сборка строк — **многослойный merge** через `mergeMissingArgTypes`: каждый следующий слой добавляет только те ключи, которых ещё нет (существующие строки docgen **не перезаписываются**).

### Подключение в MDX

Рекомендуемый вариант (без `presentation` в MDX):

```mdx
<Meta of={ActionButtonStories} name="Action Button Docs" />

<Tabs.TabPane tab="autodoc" key="autodoc">
  <Description of={ActionButtonStories} />
  <AutodocArgsTable of={ActionButton} includeTestingProps />
</Tabs.TabPane>
```

На той же MDX-странице обязателен `<Meta of={*Stories} />` — от него берётся meta-контекст для второго слоя.

Устаревший вариант (дублирует то, что уже даёт meta, если пропы есть в `*.stories.tsx`):

```mdx
<AutodocArgsTable
  of={Card}
  presentation={cardPropPresentation}
  includeTestingProps
/>
```

Проп `presentation` в `AutodocArgsTable` помечен **deprecated**; предпочтительно не передавать его в MDX.

### Параметры

| Параметр | Назначение |
|----------|------------|
| `of` | React-компонент (`of={Button}`) или meta (`of={ButtonStories}`). Если не передан — `useOf('meta')`. |
| `includeTestingProps` | Добавляет testing-пропы через docgen probe `TestingPropsProbe` (слой 3). |
| `presentation` | **Deprecated.** Третий ручной слой из `buildStoryArgTypes(presentation)`; нужен только если meta на странице недоступна или argTypes в stories не заданы. |
| `sort` | По умолчанию `'alpha'` (в Properties — `'none'`). |

### Как получаются argTypes (четыре слоя)

```text
useOf(of ?? 'meta')  +  useOf('meta')   ← два контекста Storybook docs
        │
        ▼
resolveComponent → React-компонент для docgen
        │
        ├─► Слой 1: docgenRows = extractArgTypes(component)
        │
        ├─► Слой 2: metaArgTypes = preparedMeta.argTypes
        │           (из *.stories.tsx: buildStoryArgTypes(*PropPresentation))
        │
        ├─► Слой 3 (опц.): presentationRows = buildStoryArgTypes(presentation)
        │
        └─► Слой 4 (опц.): testingRows = extractArgTypes(TestingPropsProbe)
                    │
                    ▼
        mergeMissingArgTypes(docgen, meta, presentation?, testing?)
                    │
                    ▼
              PureArgsTable (одна плоская таблица)
```

#### Слой 1 — docgen компонента

`parameters.docs.extractArgTypes(component)` с настройками из `main.ts` (см. раздел 1).

Даёт «сырые» типы и JSDoc из `src`. При `type Props = HTMLProps & CustomProps` часто извлекается только часть пропов (типичный случай — `children` и несколько унаследованных из whitelist `propFilter`).

#### Слой 2 — meta argTypes (основное дополнение без `presentation` в MDX)

`useOf('meta')` читает meta текущей docs-страницы (`<Meta of={ComponentStories} />`).

`preparedMeta.argTypes` — это те же argTypes, что в Playground: они собираются в `*.stories.tsx` через `buildStoryArgTypes(componentPropPresentation)`.

Пример для Action Button: в `ActionButton.stories.tsx` заданы `argTypes: buildStoryArgTypes(actionButtonPropPresentation)` — в autodoc автоматически появляются `mode`, `size`, `icon`, `disabled`, `onClick`, `testId` и т.д., **без** `presentation={...}` в MDX.

Типы и descriptions для строк, уже попавших в слой 1 из docgen, остаются из docgen; meta только **добавляет недостающие** строки.

#### Слой 3 — `presentation` в пропе компонента (legacy)

`buildStoryArgTypes(presentation)` — ручной дубль слоя 2. Используется в старых MDX (`Card`, `Alert`, …), пока не переведены на meta-only.

#### Слой 4 — testing props (`includeTestingProps`)

Файл `.storybook/components/Documentation/docgenProbes.tsx` экспортирует `TestingPropsProbe` — минимальный React-компонент с `interface TestingPropsProbeProps` и JSDoc (тексты синхронизированы с `helpers/typesHelpers.ts` → `TestingProps`).

`extractArgTypes(TestingPropsProbe)` добавляет `testId`, `klId`, `componentId`, `dataTestId`, `componentType`, если их нет в предыдущих слоях.

Probe живёт только в `.storybook`, **не в `src`**.

### Чем autodoc отличается от Properties

| | Properties | autodoc |
|---|------------|---------|
| Компонент MDX | `PropsTable` | `AutodocArgsTable` |
| `of` | stories meta (`*Stories`) | React-компонент или meta |
| Источник строк | docgen + presentation (фильтр/overrides) | docgen → meta → presentation? → testing? |
| Группировка | основная таблица + deprecated-секция | одна таблица |
| Сортировка | по `order`, deprecated в конце | алфавит (`alpha`) |
| Пропы только в `*.controls.ts` | в таблице, если есть в presentation | в таблице, если попали в `meta.argTypes` (через stories) |
| Testing props | только если есть в presentation | `includeTestingProps` + probe |
| Controls-колонка | нет (`inTabPanel`) | нет (`inTabPanel`) |

autodoc — плоская техническая таблица API; Properties — курируемое представление с секциями.

## 8. Ветка Storybook Controls (Playground)

Отдельно от вкладок docs, но использует тот же `*.controls.ts`:

- `buildStoryArgTypes` → `meta.argTypes`;
- `getControlsInclude` → `parameters.controls.include`;
- опционально `withDesignControls` при `localStorage.showDesignControls === 'true'` подмешивает `designControlsConfig` поверх meta.

## 9. Эталонная связка файлов

### Button (docgen покрывает большинство пропов)

| Файл | Роль |
|------|------|
| `Button.tsx`, `types.ts` | API + docgen (`interface ButtonProps`) |
| `stories/Button.controls.ts` | presentation для Controls и Properties |
| `Button.stories.tsx` | `buildStoryArgTypes` → `meta.argTypes`; Playground controls |
| `stories/Button.documentation.mdx` | `PropsTable of={ButtonStories}`, `AutodocArgsTable of={Button}` |

### Action Button (docgen урезан, autodoc опирается на meta)

| Файл | Роль |
|------|------|
| `ActionButton.tsx`, `types.ts` | `type ActionButtonProps = HTMLProps & CustomProps` — docgen видит мало |
| `stories/ActionButton.controls.ts` | presentation → `meta.argTypes` и Properties |
| `ActionButton.stories.tsx` | `argTypes: buildStoryArgTypes(actionButtonPropPresentation)` |
| `stories/ActionButton.documentation.mdx` | `<Meta of={ActionButtonStories} />`, autodoc **без** `presentation` в `AutodocArgsTable` |

Для Action Button полнота autodoc обеспечивается связкой **MDX Meta + argTypes в stories**, а не дублированием `presentation` на вкладке autodoc.

## 10. Source of truth

| Уровень | Что определяет |
|---------|----------------|
| TypeScript props компонента | фактический runtime API |
| react-docgen (`main.ts`) | типы и JSDoc для autodoc и базы Properties |
| `*.controls.ts` | порядок, overrides, скрытие и Controls/Properties; через `meta.argTypes` — недостающие строки autodoc |
| `meta.argTypes` в `*.stories.tsx` | argTypes Playground = второй слой autodoc |
| `docgenProbes.tsx` | testing props для autodoc (`includeTestingProps`) |
| `sharedPropConfig` | общие descriptions и defaults для переиспользования |
| `designControlsConfig` | legacy design controls (не Properties/autodoc) |

Одного файла-источника для всего процесса нет. Схема составная: docgen даёт типы, presentation — порядок, скрытие и overrides для docs и Controls.

## 11. Что обновляется автоматически, а что нет

Ни один из потоков не синхронизирует все слои сам по себе. Ниже — что произойдёт при типичных изменениях без ручной правки конфигов.

### Controls (Playground)

**Source of truth:** `*.controls.ts` (+ опционально `designControlsConfig` при `localStorage.showDesignControls === 'true'`).

| Изменение | Обновится автоматически? |
|-----------|-------------------------|
| Добавили/удалили проп в `*.controls.ts` | **Да** — появится/исчезнет в Controls (если проходит фильтр `getControlsInclude`) |
| Изменили `description`, `control`, `options`, `group`, `showInControls` в `*.controls.ts` | **Да** |
| Изменили `sharedPropConfig`, от которого зависит presentation | **Да** (после пересборки / HMR Storybook) |
| Добавили проп только в TS-типы компонента, но не в `*.controls.ts` | **Нет** |
| Изменили тип/required в TS, проп уже есть в presentation | **Нет** — Controls не читают docgen, тип в панели не обновится |
| Изменили JSDoc в TS | **Нет** — описание берётся из presentation, не из docgen |
| Изменили `meta.args` в `*.stories.tsx` | **Да** — меняются только default values в Controls |
| Правки только в `designControlsConfig` | **Нет**, пока не включён режим design controls |

**Итог:** Controls полностью ручные относительно API компонента. Любой новый проп в коде нужно явно добавить в `*.controls.ts`, если он должен быть в Playground.

### Properties (`PropsTable`)

**Source of truth:** docgen (база строк) + `*.controls.ts` (фильтрация, группы, overrides).

| Изменение | Обновится автоматически? |
|-----------|-------------------------|
| Добавили проп в TS `interface`, docgen его извлёк | **Да** — строка появится |
| Удалили проп из TS-типов | **Да** — строка исчезнет |
| Изменили тип / required / optional в TS | **Да** — колонка Type обновится из docgen |
| Изменили JSDoc в TS, нет override в presentation | **Да** — колонка Description обновится |
| Изменили JSDoc в TS, но в presentation задан `description` | **Нет** — побеждает presentation |
| Задали `type` / `defaultValue` override в presentation | **Нет** — пока не измените `*.controls.ts` |
| Нужен порядок, `deprecated`, `hidden` | **Нет** — только через `*.controls.ts` |
| Добавили проп только в `*.controls.ts`, docgen его не видит | **Нет** — `PropsTable` не использует `supplementMissingRows` |
| Проп есть в docgen, но не описан в presentation | **Да** — строка всё равно покажется |
| Проп помечен `hidden: true` в presentation | **Нет** — скрыт вручную, docgen его не «вернёт» |

**Итог:** типы и «сырые» описания из TS подтягиваются сами, но editorial-слой (порядок, тексты, скрытие) — только через `*.controls.ts`.

### autodoc (`AutodocArgsTable`)

**Source of truth (по приоритету отображения):** docgen (типы/JSDoc для уже извлечённых пропов) → `meta.argTypes` из stories → опционально `presentation` в MDX → `TestingPropsProbe`.

| Изменение | Обновится автоматически? |
|-----------|-------------------------|
| Добавили/удалили проп в TS, docgen его извлёк | **Да** — слой 1 |
| Изменили тип / required / JSDoc в TS для prop из docgen | **Да** — слой 1 (строки из meta не перезаписывают docgen) |
| Добавили проп в `*.controls.ts` и в `*.stories.tsx` (`buildStoryArgTypes`) | **Да** — слой 2 (meta), без `presentation` в MDX |
| Удалили проп из `*.controls.ts` / stories `argTypes` | **Да** — исчезнет из слоя 2, если нет в docgen |
| Изменили `description` только в `*.controls.ts` | **Частично** — для новых строк (только meta); для prop уже в docgen описание из TS |
| Проп только в MDX `presentation={...}`, нет в stories meta | **Да** — слой 3 (legacy) |
| `includeTestingProps` | **Да** — тексты из JSDoc probe в `docgenProbes.tsx` |
| Inherited props из `@types/react`, кроме whitelist `propFilter` | **Нет** в слое 1; **Да** в слое 2, если проп описан в `*.controls.ts` и подключён в stories |
| `type Props = A & B` без записи в presentation/stories | **Нет** в autodoc |
| Нет `<Meta of={*Stories} />` на docs-странице | Слой 2 пустой — autodoc только docgen (+ testing) |

**Итог:** без правок `src` полнота autodoc держится на **`*.controls.ts` + `*.stories.tsx` + `<Meta of={Stories} />`**. MDX достаточно `of={Component}` и `includeTestingProps`. Явный `presentation` в `AutodocArgsTable` не нужен.

### Сводка по типам изменений

| Что изменили | Controls | Properties | autodoc |
|--------------|----------|------------|---------|
| TS `interface` компонента (новый/удалённый проп) | нет* | да** | да** |
| TS тип / required / optional | нет | да | да |
| JSDoc в TS | нет | да*** | да |
| `*.controls.ts` (новый проп, group, hidden, showInControls) | да | да | да**** |
| `*.stories.tsx` `argTypes` (без правки properties) | нет | нет | да, если argTypes уже собраны |
| `sharedPropConfig` | да***** | да***** | да**** |
| `meta.args` в stories | defaults | нет | нет |
| `includeTestingProps` / `docgenProbes.tsx` | нет | нет | testing props |
| `<Meta of={Stories} />` на docs-странице | — | — | нужен для слоя 2 |

\* — только если параллельно обновили `*.controls.ts`.  
\** — если prop извлекается docgen; иначе в Properties не появится.  
\*** — если нет `description` override в presentation.  
\**** — через `meta.argTypes` (слой 2), если проп добавлен в `*.controls.ts` и `buildStoryArgTypes` в stories; descriptions для строк docgen не перезаписываются.  
\***** — через `extendPropPresentation` в `*.controls.ts`.

### Чеклист при изменении API компонента

1. Обновить TS-типы (`types.ts`) — **Properties** и слой 1 **autodoc** (где docgen видит проп).
2. Обновить `*.controls.ts`:
   - новый appearance-проп → иначе не попадёт в **Controls**;
   - секция/порядок/текст → **Properties**;
   - проп не ловится docgen → достаточно добавить в presentation: он попадёт в **autodoc** через `meta.argTypes` в stories (слой 2).
3. Убедиться, что в `*.stories.tsx` есть `argTypes: buildStoryArgTypes(...)` (как в `actionButtonStorySettings`).
4. В `*.documentation.mdx`: `<Meta of={ComponentStories} />`, autodoc: `<AutodocArgsTable of={Component} includeTestingProps />` — **без** `presentation`.
5. При необходимости обновить `meta.args` для defaults в **Controls**.
6. Testing props в autodoc: `includeTestingProps` + при смене текстов — JSDoc в `docgenProbes.tsx`.

## 12. Практический итог

- **Controls:** `*.controls.ts` → `buildStoryArgTypes` + `getControlsInclude` в Playground; docgen не используется.
- **Properties:** docgen + `PropsTable` + presentation → секции «ВНЕШНИЙ ВИД» / «СЛУЖЕБНЫЕ» / «УСТАРЕВШИЕ».
- **autodoc:** `AutodocArgsTable` мержит docgen (компонент) → `meta.argTypes` (stories, из того же `*.controls.ts`) → опционально legacy `presentation` в MDX → `TestingPropsProbe`. В MDX: `<Meta of={Stories} />` + `of={Component}` + `includeTestingProps`; дублировать `presentation` в autodoc не нужно.

### `mergeMissingArgTypes`

Экспортируемый helper в `AutodocArgsTable.tsx`: объединяет два словаря ArgTypes, добавляя ключи из второго только если их нет в первом. Вся логика supplement autodoc построена на нём.
