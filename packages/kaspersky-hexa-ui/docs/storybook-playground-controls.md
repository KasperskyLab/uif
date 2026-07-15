# Storybook Playground Controls

Документ описывает, как в `kl-hexa-ui` формируется набор пропов для вкладки `Playground`, как задаётся порядок controls и какими способами скрывать ненужные пропы.

## Где настраивается Playground

Основные точки настройки:

- `src/<component>/stories/<Component>.stories.tsx`
- `src/<component>/stories/<Component>.controls.ts` или аналогичный `*.controls.ts`
- `.storybook/components/Documentation/propPresentation.tsx`
- `.storybook/components/designControls/withDesignControls.tsx`
- `.storybook/preview.ts`

Практически логика разделяется на два сценария:

1. Компонент использует `PropPresentationMap` и подключает `buildStoryArgTypes(...)` + `getControlsInclude(...)`.
2. Компонент не использует `PropPresentationMap` и полагается на обычные `args`, docgen и `parameters.controls.exclude`.

## Рекомендуемый сценарий: через PropPresentationMap

Для новых и мигрируемых компонентов `PropPresentationMap` должен быть основным источником правды для `Playground`.

### Базовая схема

В `*.stories.tsx`:

```tsx
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'

import { componentPropPresentation } from './Component.controls'

export const componentStorySettings: Meta<ComponentProps> = {
  argTypes: buildStoryArgTypes(componentPropPresentation),
  args: {
    ...
  }
}

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(componentPropPresentation)
    }
  }
}
```

### Что делает buildStoryArgTypes

Функция `buildStoryArgTypes(presentation)` превращает `PropPresentationMap` в Storybook `argTypes`.

Она переносит в `meta.argTypes`:

- `label`
- `description`
- `options`
- `control`
- `type` / `table.type`

Именно этот объект становится базой для панели controls во вкладке `Playground`.

### Что делает getControlsInclude

Функция `getControlsInclude(presentation)` возвращает curated whitelist пропов для `Playground`.

Она не вычисляет список автоматически и не фильтрует его. В `Playground` попадут ровно те пропы, которые вручную перечислены в `PropPresentationMap`.

Это важно: `getControlsInclude(...)` больше не решает, какие пропы скрывать. Он только возвращает ключи `presentation` в порядке объявления.

## Как задаётся порядок controls

Порядок controls зависит от двух уровней: порядка в `include` и сортировки Storybook.

### 1. Порядок в getControlsInclude

`getControlsInclude(presentation)` сохраняет порядок объявления пропов в `PropPresentationMap`.

Пример:

```tsx
export const componentPropPresentation: PropPresentationMap = {
  mode: {
    control: 'select',
    options: ['primary', 'secondary']
  },
  size: {
    control: 'select',
    options: ['small', 'medium', 'large']
  },
  disabled: {
    control: 'boolean'
  }
}
```

Здесь в `Playground` controls будут показаны как `mode` → `size` → `disabled`.

### 2. Глобальный fallback

В `.storybook/preview.ts` задан глобальный fallback:

```tsx
controls: {
  sort: 'alpha'
}
```

## Как изменить порядок пропов

Рабочая точка изменения порядка почти всегда одна: файл `stories/<Component>.controls.ts`.

### Способ 1. Изменить порядок объявления ключей

```tsx
export const componentPropPresentation: PropPresentationMap = {
  mode: { control: 'select' },
  size: { control: 'select' },
  disabled: { control: 'boolean' }
}
```

Controls в `Playground` пойдут в порядке объявления ключей в `PropPresentationMap`.

### Рекомендация

Для стабильности лучше держать осмысленный порядок ключей в `PropPresentationMap`, потому что именно он определяет порядок controls в `Playground`.

## Как скрыть ненужные пропы

Для `Playground` скрытие теперь делается только одним способом: не включать проп в curated `PropPresentationMap`.

Если проп не перечислен в `presentation`, он не попадёт в `getControlsInclude(...)` и не будет показан во вкладке `Playground`.

## Скрытие пропов без PropPresentationMap

Если компонент ещё не использует `*.controls.ts`, состав controls приходится ограничивать напрямую в `*.stories.tsx`.

### Через controls.exclude

```tsx
export const componentStorySettings: Meta<ComponentProps> = {
  parameters: {
    controls: {
      exclude: ['onChange', 'klId', 'testId']
    }
  }
}
```

Или через регулярное выражение:

```tsx
export const componentStorySettings: Meta<ComponentProps> = {
  parameters: {
    controls: {
      exclude: /(on.*|.*Id)/
    }
  }
}
```

### Глобально скрываемые пропы

В `.storybook/preview.ts` уже задан глобальный `exclude`:

```tsx
controls: {
  exclude: /(componentType|componentId|dataTestId|klId|theme)/
}
```

Это значит, что такие пропы скрываются даже без локальной настройки компонента.

## Реальные примеры из репозитория

### Пример 1. DatePicker: рекомендуемый сценарий

Файл: `src/datepicker/stories/DatePicker.stories.tsx`

```tsx
export const datePickerStorySettings: Meta<CalendarProps> = {
  argTypes: buildStoryArgTypes(datePickerPropPresentation),
  args: {
    testId: 'calendar-test-id',
    klId: 'calendar-kl-id',
    validationStatus: 'default',
    showTime: false,
    disabled: false,
    readonly: false
  }
}

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <CalendarPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(datePickerPropPresentation)
    }
  }
}
```

Файл: `src/datepicker/stories/DatePicker.controls.ts`

```tsx
export const datePickerPropPresentation: PropPresentationMap = {
  showTime: {
    description: 'Показывать выбор времени в выпадающей панели',
    control: 'boolean',
    defaultValue: 'false'
  },
  testId: fromSharedProp('testId'),
  klId: fromSharedProp('klId')
}
```

Что видно на этом примере:

- `showTime` попадёт в `Playground`
- в `Playground` будут только пропы, которые вручную перечислены в `datePickerPropPresentation`
- если `value` и `onChange` не нужны пользователю, их просто не добавляют в curated map
- `testId` и `klId` не должны считаться пользовательскими controls и их тоже не стоит включать в curated map

### Пример 2. CodeViewer: смешанный набор простых и сложных пропов

Файл: `src/code-viewer/stories/CodeViewer.controls.ts`

```tsx
export const codeViewerPropPresentation: PropPresentationMap = {
  language: {
    description: 'Язык подсветки синтаксиса',
    control: 'select',
    options: [...languageOptions]
  },
  initialValue: {
    description: 'Начальное содержимое редактора',
    control: 'text'
  }
}
```

Здесь:

- `language` и `initialValue` будут доступны пользователю в `Playground`
- сложные технические пропы вроде `minConstraints`, `linesHighlighted` и `onChange` не появятся в `Playground`, если их не включать в curated map

### Пример 3. ActionButton: fallback без PropPresentationMap

Файл: `src/action-button/stories/ActionButton.stories.tsx`

```tsx
export const actionButtonStorySettings: Meta<ActionButtonProps> = {
  args: {
    mode: 'ghost',
    size: 'medium',
    children: 'Action',
    interactive: true,
    disabled: false,
    noIcon: false,
    testId: 'action-button-test-id',
    klId: 'action-button-kl-id'
  }
}
```

У `ActionButton` сейчас нет отдельного `ActionButton.controls.ts`, поэтому:

- набор controls строится из обычных story `args` и docgen Storybook
- точный состав и порядок контролов не централизованы через `PropPresentationMap`
- скрытие делается только через Storybook `controls.exclude` и глобальные настройки `.storybook/preview.ts`

Это рабочий fallback, но не рекомендуемый конечный формат для компонентов, которые переводятся на новый docs-подход.

## Что лучше делать при миграции компонента

Если компонент переводится на новый формат документации:

1. Создать `stories/<Component>.controls.ts`
2. Описать там все appearance и technical пропы
3. Подключить `buildStoryArgTypes(...)` в `...StorySettings`
4. Подключить `getControlsInclude(...)` в `Playground`
5. Убрать из controls всё, что не должно редактироваться вручную
6. Проверить итоговый порядок в Storybook

## Практические правила

- В `Playground` должны оставаться только пропы, которые реально полезно менять руками.
- Всё, что является колбэком, сложным объектом или служебным API, лучше скрывать на уровне `PropPresentationMap`.
- Если порядок controls важен, управляйте им порядком ключей в `PropPresentationMap`.
- `controls.exclude` стоит использовать как fallback, а не как основной механизм в новом формате.
