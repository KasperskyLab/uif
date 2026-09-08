# Гайд: как писать тесты таблицы

Практическое руководство по написанию юнит-тестов компонента `Table`
(**Jest + @testing-library/react**). Взаимодействие с таблицей — через page-object
[`TableTestingClass`](../test-utils/TableTestingClass.tsx); данные — из
[`filtersMockData`](../__mocks__/filtersMockData.tsx).

---

## 1. Быстрый старт — скелет теста

Скопируйте и адаптируйте:

```tsx
import { configure } from '@testing-library/react'
import { TableTestingClass } from '../test-utils/TableTestingClass'

// Репозиторный дефолт testIdAttribute — `kl-id`. Если ищете по data-testid — переопределите:
configure({ testIdAttribute: 'data-testid' })

// Хелпер рендера: передавайте только то, что специфично для теста.
// tableColumns + generatedData подставляются автоматически (дефолт TestTable).
const renderTable = (props = {}) => ({ table: TableTestingClass.render(props) })

describe('Моя фича', () => {
  it('делает X', async () => {
    const { table } = renderTable({ /* нужные пропы */ })

    await table.sorting.sortBy('fullname', 'asc')

    expect(await table.sorting.isActive('fullname', 'asc')).toBe(true)
  })
})
```

Запуск во время разработки:

```bash
npm run test:only src/table/__tests__/МойФайл.test.tsx
```

---

## 2. Прямой доступ к DOM — подумай о переиспользовании

Взаимодействуйте с таблицей через неймспейсы класса (`rows`, `selection`, `sorting`, `filters`,
`columnFilters`, `columnSettings`, `columns`, `pagination`, `toolbar`, `contextMenu`) — полный список
ручек смотрите в [`TableTestingClass`](../test-utils/TableTestingClass.tsx).

Если нужного действия/геттера там нет и хочется достать элемент селектором — сначала спроси себя:
**пригодится ли это в других тестах?**

- **Да** → добавь ручку в [`TableTestingClass`](../test-utils/TableTestingClass.tsx) (в подходящий
  неймспейс), а в тесте вызывай её.
- **Нет** (одноразовая, узкоспецифичная проверка) → используй `table.query(selector)` /
  `table.queryAll(selector)` прямо в тесте.

`get*`/`is*` — синхронные; `async` (`await`) — там, где нужно дождаться появления
(`openColumnDropdown`, `sortBy`, `selectAll`, `filters.add`, `columnSettings.open`,
`contextMenu.getMenu`, `rows.waitForData`). Правило: **вернул `Promise` — ставь `await`.**

---

## 3. Данные — предпочитайте `filtersMockData`

По умолчанию берите данные из [`__mocks__/filtersMockData.tsx`](../__mocks__/filtersMockData.tsx) —
это общий источник для всех тестов:

| Экспорт | Что это |
|---|---|
| `generatedData` | 100 строк `MockRow` (`fullname`, `group`, `salary`, `isTrainee`, `dateHired`, `datetime`, `details`…). **Ключ строки — `key` (UUID).** |
| `tableColumns` | 7 колонок с реальными `filterType` (Text/Enum/Number/DateTime/Boolean), `sortingAttributes`, `filterAttributes` |
| `groups`, `cities` | справочники значений |
| `createMockDataSourceFunction` | серверная пагинация/сортировка/фильтрация |
| `mockCustomFilterFunction`, `MockRow` | кастомная фильтрация и тип строки |

`tableColumns` + `generatedData` — **дефолт `TestTable`**, поэтому в `TableTestingClass.render()`
их передавать не нужно — только специфичное для теста.

Нужна особая конфигурация колонки — по возможности патчьте существующую через `modifyColumns`
из [`test-utils/helpers`](../test-utils/helpers.ts), а не заводите новую:

```ts
import { modifyColumns } from '../test-utils/helpers'

const columns = modifyColumns(tableColumns, 'group', { showEnumFiltersInColumn: true })
renderTable({ columns })
```

Инлайновые фикстуры уместны, когда тесту нужна особая форма данных, которой нет в моке
(пустые ячейки, конкретные пограничные значения и т.п.).

---

## 4. Как рендерить: `render` vs `renderElement`

```ts
// (A) Обычный случай — таблица с пропами. ДЕФОЛТНЫЙ выбор.
const table = TableTestingClass.render({ rowSelection: { builtInRowSelection: true } })

// (B) Нужен свой компонент вокруг таблицы (управляемое состояние, ref, кнопки).
const table = TableTestingClass.renderElement(<ControllableTable dataSource={data} ref={ref} />)
```

```
Тебе нужен свой React-компонент (useState/ref/кнопки рядом с таблицей)?
├─ Нет  → TableTestingClass.render(props)
└─ Да   → TableTestingClass.renderElement(<Custom/>)
          внутри Custom рендерь сырой <Table> из @src/table
          (провайдер даёт renderElement)
```

Не вызывайте `render(...)` из RTL напрямую — используйте тестовый класс. Всё, что даёт RTL, доступно
через инстанс: `table.container`, `table.rerender(ui)`, `table.unmount()`, `table.query(sel)`,
`table.queryAll(sel)`, `table.getInstance()`, `table.getBody()`.
