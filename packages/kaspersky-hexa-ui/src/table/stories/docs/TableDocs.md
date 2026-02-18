#### Table props

##### resizeMode?: 'max' | 'last' | 'scroll' | 'manual'
Базово введен для управления поведением колонок с функцией их ресайза (модуль `ResizableColumns.tsx`), в основном это манипуляции с блоком `<colgroup>` для корректного вида таблицы при малом количестве колонок, и свободном пространстве по ширине, однако, далее на эти значения завязались различные эджкейсы работы таблицы.


* `'max'` - в блоке `<colgroup>` у `<col>` с максимальным значением ширины удаляется 'width', при этом колонка займет свободное пространство, если таблица имеет ширину меньше ширины контентной области.
* `'last'` - в блоке `<colgroup>` у последнего `<col>` удаляется `'width'`, при этом колонка займет свободное пространство, если таблица имеет ширину меньше ширины контентной области.
* `'scroll'` - включает кастомный плавающий горизонтальный скроллбар, при этом отключается "sticky footer" и "sticky header". Фактически значение `'scroll'` ничего не делает с фичей ресайза, но при этом на нем завязаны стили для горизонтального скролла и стик-хередры-футеры (файл `tableCss.ts`).
* `'manual'` - не используется


#### Filter props

##### toolbar: { showFilterSidebar?: boolean }
Без него не отображается кнопка открытия фильтров сайдбара

##### useFiltersSidebar?: boolean
Флаг отвечает за то, будут ли работать Sidebar-фильтры или нет

##### predefinedFilters: UnitedFilter[]
Задает фильтры по умолчанию. 
```ts
predefinedFilters:  [
  {
    name: 'dateHired',
    condition: FilterOperation.eq,
    type: FilterType.DateRange,
    value: {
      from: 1672520400000,
      to: 1690837200000
    }
  },
  {
    name: 'fullname',
    condition: FilterOperation.cont,
    type: FilterType.Text,
    value: 'a'
  },
  {
    id: 'column.fullname',
    items: [
      {
        name: 'fullname',
        filterName: 'Should contain "Evgenija"'
      }
    ]
  },
  {
    id: 'column.salary',
    items: [
      {
        name: 'salary',
        filterName: 'Should be >300000'
      }
    ]
  }
]
```
Sidebar-фильтры задаются на рутовом уровне массива в формате `FilterConfig`. Колоночные фильтры обязаны лежать в группах
формата `FilterGroup` с id: \`column.${dataIndex}\`, где dataIndex - это dataIndex из соответствующей колонки. Внутри
групп колоночные фильтры хранятся в формате `FilterFromColumn`, причем `predicate` указывать не надо, т.к. функция 
подхватывается автоматически из поля `filters` в колонке. `name` - имя колонки, `filterName` - имя самого фильтра (в
типе `ColumnFilter` соответствует полю `name`). Фильтры объединяются с хранящимися в `localStorage` (если они есть).

##### externalFilters: UnitedFilter[]
Внешнее управление фильтрами, используется для серверной фильтрации. Формат и правила задания одинаковы с
`predefinedFilters`.

##### isServerFiltering?: boolean
Флаг для включения серверной фильтрации. Во включенном состоянии никакие данные не фильтруются, это задача ложится на
сервер. Но чипы фильтров под тулбаром отображаются.

##### saveFilters?: IFiltersSavingSettings
Ключ для `localStorage`, под которым хранятся сохраненные фильтры. Нужно для реализации аналогичной функциональности в
автогенерации с сохранением фильтров в `localStorage`.

#### onFiltersChange: (filters: UnitedFilter[]) => void
Функция, выполняемая при любом изменении фильтров. В основном применяется в связке с `isServerFiltering`.

##### onCloseFilterSidebar?: () => void
Функция, выполняемая при закрытии сайдбара, будь-то `Save` или `Cancel`

##### @deprecated: defaultFiltersConfig?: FilterConfig[]
##### @deprecated: defaultSidebarFilters?: FilterConfig[]
См. predefinedFilters. Задает sidebar-фильтры по умолчанию. Пример:
```ts
defaultSidebarFilters: [
  {
    name: 'name',
    condition: FilterOperation.ncont,
    type: FilterType.Text,
    value: 'a'
  },
  {
    name: 'age',
    condition: FilterOperation.neq,
    type: FilterType.Number,
    value: 7
  }
]
```

#####  @deprecated: sidebarFilters?: FilterConfig[]
См. externalFilters. Проп для внешнего задания sidebar-фильтров, который отключает встроенную в компонент клиентскую
фильтрацию. В случае, если одновременно используется и `defaultSidebarFilters`, и `sidebarFilters`, применяется
следующее правило:
-Если фильтр по какому-то полю совпадает, то фильтр из `sidebarFilters` будет более приоритетным
-Если фильтр по какому-то не пересекается, то итогом будет объединение фильтров из `defaultSidebarFilters` и
`sidebarFilters`

Рассмотрим на примере. Пусть:
```ts
const defaultSidebarFilters: FilterConfig[] = [
  {
    name: 'name',
    condition: FilterOperation.ncont,
    type: FilterType.Text,
    value: 'a'
  }, // name ⊄ 'a'
  {
    name: 'age',
    condition: FilterOperation.neq,
    type: FilterType.Number,
    value: 7
  } // age ≠ 7
]

const sidebarFilters: FilterConfig[] = [
  {
    name: 'name',
    condition: FilterOperation.cont,
    type: FilterType.Text,
    value: 'b'
  }, // name ⊆ 'b'
  {
    name: 'counry',
    condition: FilterOperation.neq,
    type: FilterType.Enum,
    value: 'Brasil'
  } // country ≠ Brasil
]
```

Тогда пересекающимися являются только фильтры `name ⊄ 'a'` и `name ⊆ 'b'`, возьмется по итогу `name ⊆ 'b'` (т.к.
`sidebarFilters` приоритетнее). С учетом не пересекающихся применятся фильтры `name ⊆ 'b'`, `country ≠ Brasil` и
`age ≠ 7`

##### @deprecated: onSidebarFiltersChange?: (filters: FilterConfig[]) => void
Функция, вызываемая при изменении sidebar-фильтров. На вход принимает массив фильтров.

##### @deprecated: onDropdownFiltersChange?: (filters: DropdownOrSidebarFilter[]) => void
Функция, вызываемая при изменении колоночных фильтров (aka dropdown-фильтры). На вход принимает массив фильтров.

##### @deprecated: onFilterChange?: (val: ActiveFilter) => void
Функция, вызываемая при изменении либо колоночных, либо sidebar-фильтров. На вход принимает массив фильтров.

##### @deprecated: appliedFilters?: ActiveFilter
**Не является внешним контрактом!** Проп необходим для взаимодействия между модулем sidebar-фильтров и dropdown-фильтров (на момент написания документации разделение пока существует).

##### @deprecated: initialFilters?: ActiveFilter
Очередной проп для задания фильтров по умолчанию, только на этот раз только колоночных фильтров.

##### @deprecated: filterItems?: { items: FilterItemTagProps[], clearLinkText?: string, onClear?: () => void }
**Не является внешним контрактом!** Проп необходим для рендера тэгов фильтров под тулбаром

##### showFilterSidebar?: boolean
**Не является внешним контрактом!**. Извне это контролируется пропом `toolbar`, ключ `showFilterSidebar`.
