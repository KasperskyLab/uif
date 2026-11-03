import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { generateId } from '@helpers/generateId'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { CodeViewer } from '@src/code-viewer'
import { Notification, openNotification } from '@src/notification'
import { Toggle } from '@src/toggle'
import { Meta } from '@storybook/react'
import React from 'react'

import { ChartColumn, Filter } from '@kaspersky/hexa-ui-icons/16'

import {
  Table,
  TablePreset,
  TablePresetsProp,
  TableRecord,
  TableView
} from '../..'
import MetaData from '../../__meta__/meta.json'
import {
  generatedData,
  MockRow,
  tableColumns,
  TableMockProps,
  TableMockStory
} from '../../__mocks__/filtersMockData'
import { FilterOperation, FilterType } from '../../modules/Filters'
import { Wrapper } from '../_commonConstants'

import { presetsUsageExample } from './presetsCodeExample'
import { PresetsHowItWorks } from './PresetsHowItWorks'
import { WithTableExample } from './PresetsWithExternalFilters'

const columns = [
  ...tableColumns,
  ...new Array(3).fill(0).map((_, i) => ({
    title: `Long column name ${i + 1}`,
    key: `mock${i + 1}`,
    dataIndex: `mock${i + 1}`,
    show: false
  }))
].map(column => ({ ...column, hideColumnAvailable: true }))

const meta: Meta<TableMockProps> = {
  title: 'Hexa UI Components/Table/Presets',
  component: Table,
  args: {
    columns,
    dataSource: generatedData,
    pagination: { pageSize: 20, showSizeChanger: true },
    rowSelection: { builtInRowSelection: true },
    toolbar: {
      autoDropdown: true,
      collapsibleSearch: true,
      left: [
        {
          type: 'button',
          key: '1',
          label: 'Tool 1',
          disabled: true,
          onClick: () => openNotification({ mode: 'success', description: 'Tool 1' }),
          testId: 'item-1'
        },
        {
          type: 'divider',
          key: 'divider'
        },
        {
          type: 'children',
          key: 'toggle-with-tooltip',
          children: (
            <Toggle tooltip="Toggle tooltip">
              Toggle
            </Toggle>
          )
        },
        {
          type: 'divider',
          key: 'divider'
        },
        {
          type: 'button',
          key: '3',
          label: 'Tool 3',
          onClick: () => openNotification({ mode: 'success', description: 'Tool 3' }),
          testId: 'item-3'
        },
        {
          type: 'dropdown',
          key: '4',
          label: 'Dropdown items',
          testId: 'item-4',
          overlay: [
            {
              children: 'Action 7',
              onClick: () => openNotification({ mode: 'success', description: 'Action 7' })
            },
            {
              children: 'Action 8',
              onClick: () => openNotification({ mode: 'success', description: 'Action 8' })
            }
          ]
        },
        {
          type: 'button',
          key: '6',
          label: 'Some action 2',
          onClick: () => openNotification({ mode: 'success', description: 'Tool 6' }),
          testId: 'item-6'
        }
      ],
      onRefresh: () => openNotification({ mode: 'success', description: 'Table refreshed' }),
      showColumns: true,
      showFilterSidebar: true,
      showGrouping: true,
      showSearch: true,
      sticky: 0
    },
    useFiltersSidebar: true
  },
  parameters: {
    badges: [badges.stable],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: /(columns|dataSource|pagination|useFiltersSidebar)/
    }
  },
  decorators: [
    (Story, context) => <Wrapper><Story {...context} /></Wrapper>
  ],
  tags: ['!autodocs']
}

export default meta

const withIds = <T extends Record<string, unknown>>(items: T[]): (T & { id: string })[] => (
  items.map(item => ({ ...item, id: generateId() }))
)

const makePresetsProp = <T extends TableRecord = MockRow>(
  presets?: Array<Omit<TablePreset<T>, 'id'>>,
  views?: Array<Omit<TableView<T>, 'id' | 'presets'> & { presets: Array<Omit<TablePreset<T>, 'id'>> }>
): TablePresetsProp<T> => ({
  presets: presets ? withIds(presets) : undefined,
  views: views ? views.map(view => ({
    ...view,
    id: generateId(),
    presets: withIds(view.presets)
  })) : undefined,
  onCreatePreset: async preset => {
    await new Promise(resolve => setTimeout(resolve, 2500))

    if (preset.name === 'error') {
      throw new Error('can not create')
    }

    return { ...preset, id: generateId() }
  },
  onDeletePreset: async (preset) => {
    await new Promise(resolve => setTimeout(resolve, 2500))

    if (preset.name.includes('Group by isTrainee')) {
      throw new Error('can not delete')
    }
  },
  onUpdatePreset: async preset => {
    await new Promise(resolve => setTimeout(resolve, 2500))

    if (preset.name === 'error' || preset.name.includes('Group by group')) {
      throw new Error('can not update')
    }

    return { ...preset }
  },
  onPresetSelected: async () => {},
  onViewSelected: async () => {}
})

const WithPresetsTable = (args: TableMockProps) => (
  <>
    <Notification />
    <PopupConfigProvider usePortal>
      <Table {...args} />
    </PopupConfigProvider>
  </>
)

export const WithPresets: TableMockStory = {
  render: (args) => {
    return (
      <>
        <WithPresetsTable {...args} />
        <CodeViewer<{ javascript: [] }>
          readonly
          language="javascript"
          initialValue={presetsUsageExample}
          width={1300}
          height={700}
          lineWrapping
        />
      </>
    )
  },
  args: {
    presets: makePresetsProp([
      {
        name: 'Default preset',
        default: true,
        system: true,
        settings: {
          columns: {
            fullname: { show: true, sortIndex: 0, width: 200 },
            group: { show: true, sortIndex: 1, width: 125 },
            salary: { show: true, sortIndex: 2, width: 100 },
            dateHired: { show: true, sortIndex: 6, width: 125 },
            datetime: { show: true, sortIndex: 4, width: 200 },
            isTrainee: { show: true, sortIndex: 5, width: 75 },
            details: { show: true, sortIndex: 3, width: 250 }
          },
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
          groupBy: 'group',
          sorting: { field: 'fullname', direction: 'desc' },
          pageSize: 20
        }
      },
      {
        name: 'Page size 50',
        settings: {
          columns: {
            salary: { show: true, sortIndex: 0 },
            fullname: { show: true, sortIndex: 1 }
          },
          pageSize: 50
        }
      },
      {
        name: 'Page size 100',
        settings: {
          columns: {
            dateHired: { show: true, sortIndex: 0 },
            salary: { show: true, sortIndex: 1 },
            group: { show: true, sortIndex: 2 },
            fullname: { show: true, sortIndex: 3 }
          },
          pageSize: 100
        }
      },
      {
        name: 'Filter by fullname contains Evgen',
        settings: {
          filters: [
            {
              name: 'fullname',
              condition: FilterOperation.cont,
              type: FilterType.Text,
              value: 'Evgen'
            }
          ]
        }
      },
      {
        name: 'Filter by salary > 15000 and group = Developers',
        settings: {
          filters: [
            {
              name: 'salary',
              condition: FilterOperation.gt,
              type: FilterType.Number,
              value: 150000
            },
            {
              name: 'group',
              condition: FilterOperation.eq,
              type: FilterType.Enum,
              value: 'Developers'
            }
          ]
        }
      },
      {
        name: 'Filter by column filter "Should contain Evgenija"',
        settings: {
          filters: [
            { name: 'fullname', filterName: 'Should contain "Evgenija"' }
          ]
        }
      },
      {
        name: 'Filter by column filters "Should start with E" && "Should be >300000"',
        settings: {
          filters: [
            { name: 'fullname', filterName: 'Should start with E' },
            { name: 'salary', filterName: 'Should be >300000' }
          ]
        }
      },
      {
        name: 'Sort by fullname desc',
        settings: { sorting: { field: 'fullname', direction: 'desc' } }
      },
      {
        name: 'Sort by details.city asc',
        settings: { sorting: { field: 'details', attribute: 'city', direction: 'asc' } }
      },
      {
        name: 'Group by group (updating throws an error)',
        settings: { groupBy: 'group' }
      },
      {
        name: 'Group by isTrainee (deleting throws an error)',
        settings: { groupBy: 'isTrainee' }
      },
      {
        name: 'Long name and long description + widths are set to 75. Btw the quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog',
        settings: {
          columns: Object.assign(
            {},
            ...columns.map((column, index) => ({ [column.key]: { show: true, sortIndex: index, width: 75 } }))
          )
        }
      }
    ])
  }
}

export const WithNoUserPresets: TableMockStory = {
  ...WithPresets,
  render: WithPresetsTable,
  tags: ['skip-visual'],
  args: {
    ...WithPresets.args,
    presets: makePresetsProp([
      {
        name: 'Default preset',
        default: true,
        system: true,
        settings: {
          columns: Object.assign({}, ...tableColumns.map((x, i) => ({ [x.key]: { show: true, sortIndex: i } }))),
          pageSize: 20
        }
      }
    ])
  }
}

export const WithViews: TableMockStory = {
  ...WithPresets,
  render: WithPresetsTable,
  args: {
    ...WithPresets.args,
    presets: makePresetsProp<MockRow>(undefined, [
      {
        default: true,
        name: 'Default view',
        description: 'View with several extra actions for presets',
        presets: [
          {
            name: 'Default preset',
            default: true,
            system: true,
            settings: {
              columns: Object.assign({}, ...tableColumns.map((x, i) => ({ [x.key]: { show: true, sortIndex: i } }))),
              filters: [
                {
                  name: 'fullname',
                  condition: FilterOperation.neq,
                  type: FilterType.Text,
                  value: 'default view'
                }
              ],
              pageSize: 20
            }
          },
          {
            name: 'Page size 50',
            description: 'pageSize should be switched to 50',
            settings: {
              columns: { fullname: { show: true, sortIndex: 0 }, salary: { show: true, sortIndex: 1 } },
              pageSize: 50
            }
          },
          {
            name: 'Filter by group Developers',
            settings: {
              filters: [
                {
                  name: 'group',
                  condition: FilterOperation.eq,
                  type: FilterType.Enum,
                  value: 'Developers'
                }
              ]
            }
          }
        ],
        settings: {
          presetActions: [
            {
              key: 'keep-fullname-only',
              icon: <ChartColumn />,
              name: 'Keep only fullname column',
              onClick: (preset: TablePreset<MockRow>) => ({
                ...preset,
                settings: { ...preset.settings, columns: { fullname: { show: true, sortIndex: 0 } } }
              })
            },
            {
              key: 'add-trainee-filter',
              icon: <Filter />,
              name: 'Show only trainees',
              onClick: (preset: TablePreset<MockRow>) => ({
                ...preset,
                settings: {
                  ...preset.settings,
                  filters: [
                    ...(preset.settings.filters ?? []),
                    {
                      name: 'isTrainee',
                      condition: FilterOperation.eq,
                      type: FilterType.Boolean,
                      value: true
                    }
                  ]
                }
              })
            }
          ],
          toolbarActions: () => [
            {
              type: 'children',
              key: 'toggle-with-tooltip',
              children: (
                <Toggle tooltip="Toggle tooltip">
                  Toggle
                </Toggle>
              )
            },
            {
              type: 'button',
              key: '1',
              label: 'Tool 1',
              disabled: true,
              onClick: () => openNotification({ mode: 'success', description: 'Tool 1' }),
              testId: 'item-1'
            },
            {
              type: 'divider',
              key: 'divider'
            },
            {
              type: 'button',
              key: '2',
              label: 'Tool 2',
              onClick: () => openNotification({ mode: 'success', description: 'Tool 2' }),
              testId: 'item-2'
            },
            {
              type: 'divider',
              key: 'divider'
            },
            {
              type: 'button',
              key: '3',
              label: 'Tool 3',
              onClick: () => openNotification({ mode: 'success', description: 'Tool 3' }),
              testId: 'item-3'
            },
            {
              type: 'dropdown',
              key: '5',
              label: 'Dropdown items 1',
              testId: 'item-5',
              overlay: [
                {
                  children: 'Action 7',
                  onClick: () => openNotification({ mode: 'success', description: 'Action 7' })
                },
                {
                  children: 'Action 8',
                  onClick: () => openNotification({ mode: 'success', description: 'Action 8' })
                }
              ]
            },
            {
              type: 'button',
              key: '6',
              label: 'Some action 2',
              onClick: () => openNotification({ mode: 'success', description: 'Tool 6' }),
              testId: 'item-6'
            }
          ]
        }
      },
      {
        name: 'View #2',
        description: 'Compact view with a few toolbar actions',
        presets: [
          {
            name: 'Default #2 preset',
            default: true,
            system: true,
            settings: {
              columns: Object.assign({}, ...tableColumns.map((x, i) => ({ [x.key]: { show: true, sortIndex: i } }))),
              filters: [
                {
                  name: 'fullname',
                  condition: FilterOperation.neq,
                  type: FilterType.Text,
                  value: 'view #2'
                }
              ],
              pageSize: 20
            }
          },
          {
            name: 'Filter by salary > 15000',
            settings: {
              filters: [
                {
                  name: 'salary',
                  condition: FilterOperation.gt,
                  type: FilterType.Number,
                  value: 150000
                }
              ]
            }
          }
        ],
        settings: {
          toolbarActions: () => [
            {
              type: 'button',
              key: '1',
              label: 'Tool 1',
              disabled: true,
              onClick: () => openNotification({ mode: 'success', description: 'Tool 1' }),
              testId: 'item-1'
            },
            {
              type: 'button',
              key: '2',
              label: 'Tool 2',
              onClick: () => openNotification({ mode: 'success', description: 'Tool 2' }),
              testId: 'item-2'
            },
            {
              type: 'button',
              key: '3',
              label: 'Tool 3',
              onClick: () => openNotification({ mode: 'success', description: 'Tool 3' }),
              testId: 'item-3'
            }
          ]
        }
      },
      {
        name: 'View #3',
        description: 'View shows all available toolbar actions',
        presets: [
          {
            name: 'Default #3 preset',
            default: true,
            system: true,
            settings: {
              columns: Object.assign({}, ...tableColumns.map((x, i) => ({ [x.key]: { show: true, sortIndex: i } }))),
              filters: [
                {
                  name: 'fullname',
                  condition: FilterOperation.neq,
                  type: FilterType.Text,
                  value: 'view #3'
                }
              ],
              pageSize: 20
            }
          },
          {
            name: 'Group by group',
            settings: { groupBy: 'group' }
          }
        ]
      }
    ])
  }
}

export const HowItWorks: TableMockStory = {
  name: 'How it works',
  render: () => <PresetsHowItWorks />,
  parameters: { controls: { disable: true } },
  tags: ['skip-visual']
}

export const PresetsWithExternalFilters: TableMockStory = {
  name: 'Presets with external filters',
  render: () => <WithTableExample />,
  parameters: { controls: { disable: true } },
  tags: ['skip-visual']
}