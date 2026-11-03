export const presetsUsageExample = `
import { generateId } from '@kaspersky/hexa-ui/helpers'
import {
  FilterOperation,
  FilterType,
  Table,
  TablePresetsProp
} from '@kaspersky/hexa-ui'

// Пресет — это сохранённое состояние таблицы: какие колонки показаны,
// какие применены фильтры/сортировка/группировка и размер страницы.
// Один клик в меню пресетов возвращает таблицу к этому состоянию.
// View (вью) — это самостоятельный набор пресетов для отдельного сценария.
// Для каждого view задаются:
//   - свои пресеты и свой дефолтный пресет (внутри view),
//   - свои действия в тулбаре (toolbarActions) и в меню пресета (presetActions),
//   - своя кнопка переключения view в тулбаре таблицы.
const presets: TablePresetsProp<Row> = {
  views: [
    {
      id: 'default-view',                      // уникальный идентификатор view
      name: 'Default view',                    // название в меню выбора view
      description: 'View with several extra actions for presets', // описание в списке views
      default: true,                           // применяется при первом открытии таблицы
      presets: [
        {
          id: 'sales-top',                     // уникальный идентификатор пресета
          name: 'Sales top',                   // название, видимое в меню пресетов
          default: true,                       // дефолтный пресет внутри этого view — применяется при первом открытии таблицы
          system: true,                        // системный пресет — пользователь не может его переименовать/удалить
          settings: {
            // Видимость, порядок и ширина колонок (sortIndex — порядок слева направо)
            columns: {
              fullname: { show: true, sortIndex: 0, width: 200 },
              group: { show: true, sortIndex: 1, width: 125 },
              salary: { show: true, sortIndex: 2, width: 100 }
            },
            // Фильтры таблицы: name — dataIndex колонки,
            // condition — операция, type — тип фильтра, value — значение
            filters: [
              {
                name: 'group',
                condition: FilterOperation.eq,
                type: FilterType.Enum,
                value: 'Sales'
              },
              {
                name: 'salary',
                condition: FilterOperation.gt,
                type: FilterType.Number,
                value: 400000
              }
            ],
            groupBy: 'group',                          // группировка по dataIndex колонки
            sorting: { field: 'fullname', direction: 'desc' }, // сортировка по колонке
            pageSize: 20                               // размер страницы
          }
        },
        {
          id: 'page-size-50',
          name: 'Page size 50',
          settings: {
            columns: {
              fullname: { show: true, sortIndex: 0 },
              salary: { show: true, sortIndex: 1 }
            },
            pageSize: 50
          }
        },
        {
          id: 'group-developers',
          name: 'Filter by group Developers',
          settings: {
            filters: [
              { name: 'group', condition: FilterOperation.eq, type: FilterType.Enum, value: 'Developers' }
            ]
          }
        }
      ],
      settings: {
        // Дополнительные действия в меню пресета (кроме сохранения/переименования/удаления)
        presetActions: [
          {
            key: 'show-only-trainees',
            name: 'Show only trainees',
            onClick: preset => ({
              ...preset,
              settings: {
                ...preset.settings,
                filters: [
                  ...(preset.settings.filters ?? []),
                  { name: 'isTrainee', condition: FilterOperation.eq, type: FilterType.Boolean, value: true }
                ]
              }
            })
          }
        ],
        // Действия в тулбаре, показанные только для этого view
        toolbarActions: () => [
          {
            type: 'button',
            key: 'tool-1',
            label: 'Tool 1',
            onClick: () => {}
          },
          {
            type: 'button',
            key: 'tool-2',
            label: 'Tool 2',
            onClick: () => {}
          }
        ]
      }
    },
    {
      id: 'view-2',
      name: 'View #2',
      description: 'Compact view with a few toolbar actions',
      presets: [
        {
          id: 'default-2',
          name: 'Default #2 preset',
          default: true,
          system: true,
          settings: { pageSize: 20 }
        },
        {
          id: 'salary-top',
          name: 'Filter by salary > 400000',
          settings: {
            filters: [
              { name: 'salary', condition: FilterOperation.gt, type: FilterType.Number, value: 400000 }
            ]
          }
        }
      ],
      settings: {
        toolbarActions: () => [
          { type: 'button', key: 'tool-1', label: 'Tool 1', onClick: () => {} },
          { type: 'button', key: 'tool-2', label: 'Tool 2', onClick: () => {} },
          { type: 'button', key: 'tool-3', label: 'Tool 3', onClick: () => {} }
        ]
      }
    },
    {
      id: 'view-3',
      name: 'View #3',
      description: 'View shows all available toolbar actions',
      presets: [
        {
          id: 'default-3',
          name: 'Default #3 preset',
          default: true,
          system: true,
          settings: { pageSize: 20 }
        },
        {
          id: 'group-by-group',
          name: 'Group by group',
          settings: { groupBy: 'group' }
        }
      ]
    }
  ],
  // Обработчики вызываются при действиях пользователя — здесь нужно обращаться к вашему бэкенду:
  onCreatePreset: async (preset, viewId) => ({ ...preset, id: generateId() }), // создать пресет (viewId — если создают внутри view) и вернуть его с id
  onUpdatePreset: async preset => preset,                             // сохранить изменения пресета
  onDeletePreset: async () => {},                                     // удалить пресет
  onPresetSelected: async () => {},                                   // пресет выбран — отправить запрос данных на сервер
  onViewSelected: async () => {}                                      // view выбран (если используются views)
}

// Просто передайте объект в проп presets таблицы —
// меню пресетов (или views) появится в тулбаре таблицы.
const MyTable = () => (
  <Table
    columns={columns}
    dataSource={dataSource}
    presets={presets}
  />
)
`

export const presetsWithExternalFiltersExample = `
// Внешние компоненты могут хранить значения в удобном для продукта формате.
const initialValues = {
  status: [] // Пустой список — без ограничения по статусу.
}

// Для таблицы каждое условие описывается через:
// name      — идентификатор поля;
// type      — тип фильтра;
// condition — операция сравнения;
// value     — выбранное значение или массив значений.
const toTableFilters = (values) => (
  values.status.length
    ? [{
        name: 'external.status',
        type: FilterType.Enum,
        condition: FilterOperation.cont_or, // Любое из выбранных значений.
        value: values.status               // Например, ['Enabled', 'Disabled'].
      }]
    : []
)

// Обратное преобразование нужно для восстановления внешних компонентов
// после выбора пресета или удаления чипса.
const fromTableFilters = (filters) => ({
  status: filters.find(filter => filter.name === 'external.status')?.value ?? []
})

// Пресет содержит идентификатор, название и настройки таблицы.
// Фильтры находятся в settings.filters в том же формате,
// который передаётся в externalFilters.
const presets = {
  presets: [
    {
      id: 'all',
      name: 'Все записи',
      default: true,
      system: true,
      settings: {
        filters: []
      }
    },
    {
      id: 'enabled',
      name: 'Только включённые',
      settings: {
        filters: toTableFilters({ status: ['Enabled'] })
      }
    }
  ],

  // API продукта: создать и вернуть пресет с id,
  // обновить и вернуть пресет, удалить пресет.
  onCreatePreset: preset => api.createPreset(preset),
  onUpdatePreset: preset => api.updatePreset(preset),
  onDeletePreset: preset => api.deletePreset(preset)
}

// Единое состояние для таблицы и внешних компонентов.
const [filters, setFilters] = useState(toTableFilters(initialValues))
const values = fromTableFilters(filters)

const handleChange = (nextValues) => {
  setFilters(previous => [
    // Сохраняем фильтры, которыми внешние компоненты не управляют.
    ...previous.filter(filter => filter.name !== 'external.status'),
    ...toTableFilters(nextValues)
  ])
}

// В этом примере продукт самостоятельно применяет фильтры к данным.
// Вместо этого можно передать фильтры в запрос к серверу.
const filteredData = applyFilters(data, filters)

return (
  <>
    <ExternalControls
      value={values}
      onChange={handleChange}
    />

    <Table
      columns={columns}
      dataSource={filteredData}
      isServerFiltering
      externalFilters={filters}
      onFiltersChange={setFilters}
      presets={presets}
    />
  </>
)

// Изменение внешнего компонента → обновление filters → обновление чипсов.
// Сохранение пресета → текущие фильтры попадают в settings.filters.
// Применение пресета → onFiltersChange → обновление filters,
// внешних компонентов и данных.
//
// Пресет также может содержать другие поддерживаемые настройки таблицы:
// состояние колонок, их ширину, сортировку, группировку и размер страницы.
`
