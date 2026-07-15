### Выбор строк

Есть два метода работы со строками - [старый нативный от AntDesign](#obsolete-нативный-выбор-строк-из-antd) и новый - через [`builtInRowSelection: true`](#builtinrowselection-true).

#### obsolete Нативный выбор строк из Antd

> **Пример в Storybook:** [@deprecated Antd Controlled Row Selection](./?path=/story/hexa-ui-components-table-row-selection--antd-controlled-row-selection)

Устаревший и нефункциональный способ реализации выбора строк. Реализуется через проп `rowSelection`. Тайпинг и контракты целиком наследуются от Antd. [Документация (убедитесь, что выбрана версия компонентов 4.x.x)](https://4x.ant.design/components/table/#rowSelection).

Основные принципы:
1. `selectedRowKeys` - массив выбранных ключей строк. Ключ строки определяется по полю `key`.
2. `onChange()/onSelect()/onSelectAll()` - хендлеры для обработки
3. **NB** Без дополнительного хранения и обработки стейта `selectedRowKeys` нормальный выбор строк реализовать не получится. Из коробки Antd'шный `onSelect` отдает массив выбранных строк, но т.к. мы используем **НЕ** antd'шную пагинацию, то при переходе на другую страницу этот стейт сбрасывается.

#### builtInRowSelection: true
При включении этого флага становится доступным экстра-функционал, написанный на стороне Hexa-UI, а именно:
1. Появляется чекбокс в шапке, через который можно выбрать все строки, выбрать строки только на текущей странице и сбросить выделение
2. Интегрировано с встроенной в таблицу серверной пагинацией (`dataSourceFunction`)
3. Есть возможность задать предвыбранные строки (смотри раздел [Предвыбранные строки](#предвыбранные-строки))
4. Автоматически считается количество выбранных элементов в подвале таблицы, в том числе для серверной пагинации
5. Нивелирован недостаток из [нативного выбора строк из Antd](#obsolete-нативный-выбор-строк-из-antd), пункт 3
6. Удобный хендлер `processSelection`:
   - `isSelectedAll` - автоматически определяется, выбраны ли все строки
   - `selectedRowKeys` - массив ключей выбранных строк
   - `deselectedRowKeys` - массив ключей строк, с которых выделение снято (только при серверной пагинации через `dataSourceFunction`)
   - `selectedRows` - массив выбранных объектов строк. Даже если поменяете `dataSource`, стейт запомнит оригинальные объекты строк.
   - `deselectedRows` - то же самое, но для строк, с которых снято выделение

> **NB!** Для работы выбора строк **ОБЯЗАТЕЛЬНО** необходимо в объектах строк (`dataSource[n]`) иметь **устойчивое** поле `key`, ибо вся логика выделения строк завязана на это.

С `builtInRowSelection: true` не предполагается controllable управление состоянием `selectedRowKeys`, что сильно упрощает взаимодействие и обработку. То есть вы просто получаете состояния `selectedRowKeys`, `deselectedRowKeys` и тд, и не обрабатываете действия, которые происходят на клик по чекбоксу. Вот так делать **НЕ НУЖНО**:
```ts
...
const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])

return (
  <Table
    // ...
    rowSelection={{
      builtInRowSelection: true,
      selectedRowKeys, // Не нужно пытаться контролировать выбор строк
      processSelection: ({ selectedRowKeys }) => { setSelectedRowKeys(selectedRowKeys) }
    }}
    // ...
  />
)
```


##### Базовый пример

> **Пример в Storybook:** [Row Selection](./?path=/story/hexa-ui-components-table-row-selection--row-selection)

Для большинства случаев достаточно простой конструкции:
```ts
type ProductTableRow = TableRecord & {
  // ...
}

type ProcessSelectionFunc = (selection: TableRowSelectionData<ProductTableRow>) => void

export function SomeProductTable ({ dataSource, columns }: ProductTableProps) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])
  const [deselectedRowKeys, setDeselectedRowKeys] = useState<string[]>([])    // если надо
  const [isSelectedAll, setIsSelectedAll] = useState<boolean | undefined>(false)          // если надо
  const [selectedRows, setSelectedRows] = useState<ProductTableRow[]>([])     // если надо
  const [deselectedRows, setDeselectedRows] = useState<ProductTableRow[]>([]) // если надо

  const processSelection = useCallback<ProcessSelectionFunc>((selection) => {
    setSelectedRowKeys(selection.selectedRowKeys)
    setDeselectedRowKeys(selection.deselectedRowKeys || [])
    setIsSelectedAll(selection.isSelectedAll)
    setSelectedRows(selection.selectedRows || [])
    setDeselectedRows(selection.deselectedRows || [])
  }, [])

  // ...

  // Например, используем знания о выбранных строках для того, чтобы по нажатию на кнопку тулбара сделать какие то действия
  const { toolbar } = useProductToolbar({ selectedRowKeys })

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowSelection={{
        builtInRowSelection: true,
        processSelection
      }}
      toolbar={toolbar}
    />
  )
}
```

##### Особенности работы `builtInRowSelection: true` с серверной пагинацией (`dataSourceFunction`)

> **Пример в Storybook:** [Server Pagination Selection](./?path=/story/hexa-ui-components-table-row-selection--server-pagination-selection)

Выбор строк из коробки умеет обрабатывать сценарии с серверной пагинацией (функция `dataSourceFunction`). Работает он по следующему принципу:
1. В случае единичного выбора строк (ручной клик по чекбоксу каждой строки) ключ строки попадает в массив `selectedRowKeys`, а сама строка попадает в `selectedRows`. Работа с сервером должна происходить по стратегии include. Состояние `isSelectedAll: true` единичным выбором достичь невозможно при серверной пагинации.
2. При нажатии на `Select all` в дропдауне чекбокса из шапки таблицы `isSelectedAll` становится `true`. Это служит индикатором для перехода к стратегии exclude, то есть "выбраны все строки, кроме `deselectedRowKeys`". Сбросить это состояние можно только нажав на `Reset all`. Все строки текущей страницы также попадают в `selectedRowKeys`.
3. При нажатии на `Select all on current page` выбираются все строки текущей страницы. Переход `isSelectedAll` в `true` не происходит, то есть по сути это эквивалентно поштучному выбору всех строк на странице.

```ts
export function SomeProductTable ({ dataSourceFunction, columns }: ProductTableProps) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]) // сюда прилетают ключи строк при единичном выборе и все ключи с текущей страницы при isSelectedAll
  const [deselectedRowKeys, setDeselectedRowKeys] = useState<string[]>([]) // сюда прилетают только ключи строк, с которых выделение снято
  const [isSelectedAll, setIsSelectedAll] = useState<boolean | undefined>(false) // сюда прилетает состояние "выбрано всё", которое можно достичь только через чекбокс в шапке

  const processSelection = useCallback<ProcessSelectionFunc>((selection) => {
    setSelectedRowKeys(selection.selectedRowKeys)
    setDeselectedRowKeys(selection.deselectedRowKeys)
    setIsSelectedAll(selection.isSelectedAll)
  }, [])

  // Псевдокод, в котором мы обращаемся к серверу с разными стратегиями, в зависимости от isSelectedAll
  useEffect(() => {
    if (isSelectedAll) {
      api.getData({ isSelectedAll, keysToExclude: deselectedRowKeys }) // стратегия exclude
    } else {
      api.getData({ neededKeys: selectedRowKeys })                     // стратегия include
    }
  }, [isSelectedAll, selectedRowKeys, deselectedRowKeys])


  return (
    <Table
      dataSourceFunction={dataSourceFunction}
      columns={columns}
      rowSelection={{
        builtInRowSelection: true,
        processSelection
      }}
    />
  )
}
```

##### Предвыбранные строки
Есть два способа задания выбранных строк: через `getPreselectedRows` и через свойство строки `_selected`. Эти сценарии взаимоисключающие

###### `getPreselectedRows`

> **Пример в Storybook:** [Get Preselected Rows](./?path=/story/hexa-ui-components-table-row-selection--get-preselected-rows)

Задание предвыбранных строк через функцию. Работает это и в сценарии с серверной, и в сценарии клиентской пагинации. В сценарии клиентской пагинации в аргумент `rows` приходят все переданные в `dataSource` строки, а в сценарии серверной пагинации только строки с текущей страницы, которые отдала функция `dataSourceFunction`.

Допустим, у нас есть 100 строк, у каждой из которых `key` соответственно равен их порядковому номеру от 0 до 99. На первой странице (пусть размер страницы равен 20) будут строки с ключами от 0 до 19. Пусть мы хотим, чтобы была выбрана каждая пятая строка, то есть под номерами 4, 9, 14 и т. д. Как это будет выглядеть в коде:
```ts
export function SomeProductTable ({ dataSourceFunction, columns }: ProductTableProps) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]) // тут после инициализации таблицы окажутся все ключи, которые мы отдаем в getPreselectedRows

  const getPreselectedRows = useCallback(async (rows) => {
    return rows.filter((_, index) => index % 5 === 4).map(row => row.key) // выбираем только каждую пятую строку
  }, [])


  return (
    <Table
      dataSourceFunction={dataSourceFunction}
      columns={columns}
      rowSelection={{
        builtInRowSelection: true,
        getPreselectedRows,
        processSelection: ({ selectedRowKeys }) => { setSelectedRowKeys(selectedRowKeys) }
      }}
    />
  )
}
```

###### `_selected`

> **Пример в Storybook:** [Preselected Rows In Data](./?path=/story/hexa-ui-components-table-row-selection--preselected-rows-in-data)

Свойство строки, которое позволяет заранее определить, выбрана строка или нет. Например, если мы хотим выбрать каждую третью строку, то строки можно это сделать так:
```ts
const rowsWithSelected = rows.map((row, index) => ({ ...row, _selected: index % 3 === 2 }))
```

##### Отключение массового выбора строк

> **Пример в Storybook:** [Without Select All](./?path=/story/hexa-ui-components-table-row-selection--without-select-all)

Свойство `hasSelectAll` регулирует возможность массового выбора строк через чекбокс в шапке. Если `false`, то отключено. По умолчанию `true`

##### Отключение возможности выбрать конкретную строку

> **Пример в Storybook:** [With Disabled Rows](./?path=/story/hexa-ui-components-table-row-selection--with-disabled-rows)

Чтобы строку нельзя было выбрать, можно воспользоваться свойством `_disabled` или `_selectionDisabled`. Если хотя бы одно из них включено, то выбор этой строки недоступен. Так же имеется возможность выводить тултип с пояснением, почему именно эта строка не может быть выделена, - `_disabledHint`.

##### Режим единичного выбора

> **Пример в Storybook:** [Single Row Selection](./?path=/story/hexa-ui-components-table-row-selection--single-row-selection)

Свойство `type: 'checkbox' | 'radio' = 'checkbox'` управляет режимом выбора строк. `type: 'radio'` включает режим единичного выбора

##### Сброс выделения извне

> **Пример в Storybook:** [Reset Selection Via Ref](./?path=/story/hexa-ui-components-table-row-selection--reset-selection-via-ref)

В `ref`'е таблицы доступен метод сброса выделения извне - `ref.current.resetSelection()`. Пример использования:

```ts
import { TableRef } from '@kaspersky/hexa-ui/src/table/types'

export function SomeProductTable ({ dataSourceFunction, columns }: ProductTableProps) {
  const tableRef = useRef<TableRef | null>(null)

  return (
    <>
      <Button onClick={() => tableRef.current?.resetSelection?.()}>Reset selection</Button>
      <Table
        ref={tableRef}
        dataSourceFunction={dataSourceFunction}
        columns={columns}
        rowSelection={{
          builtInRowSelection: true
        }}
      />
    </>
  )
}
```

##### Использование состояния выбранных строк в тулбаре

> **Пример в Storybook:** [Selection In Toolbar](./?path=/story/hexa-ui-components-table-row-selection--selection-in-toolbar)

Левые элементы тулбара можно формировать динамически в зависимости от выбранных строк через функцию `toolbar.getLeftItems`. Помимо состояния фильтров, сортировки, поиска и `dataSource`, она получает тот же контракт выделения, что и [`processSelection`](#builtinrowselection-true).

Функция **перевызывается при каждом изменении выделения**, поэтому левые кнопки реактивно обновляются под текущий выбор: можно включать массовые действия только когда что-то выбрано, показывать счётчик выбранных, менять подписи и т. д. `getLeftItems` может быть асинхронной (например, если перед формированием кнопок нужно сходить на сервер) и должна вернуть массив `ToolbarItems[]`.

> **NB!** Данные выделения приходят в `getLeftItems` только при включённом `builtInRowSelection: true`.

```tsx
<Table
  dataSource={dataSource}
  columns={columns}
  rowSelection={{ builtInRowSelection: true }}
  toolbar={{
    getLeftItems: ({ selectedRowKeys, isSelectedAll, deselectedRowKeys }) => {
      const selectedCount = selectedRowKeys?.length ?? 0
      const hasSelection = isSelectedAll || selectedCount > 0

      return [
        {
          type: 'button',
          key: 'bulk-delete',
          // Подпись и доступность кнопки зависят от текущего выбора
          label: isSelectedAll ? 'Удалить все' : `Удалить выбранные (${selectedCount})`,
          disabled: !hasSelection,
          onClick: () => api.delete({ isSelectedAll, selectedRowKeys, deselectedRowKeys })
        }
      ]
    }
  }}
/>
```
