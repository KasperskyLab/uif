import { generateId } from '@helpers/generateId'
import { localization } from '@helpers/localization'
import { openNotification } from '@src/notification'
import {
  act,
  configure,
  fireEvent,
  screen,
  waitFor
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { generatedData, MockRow, tableColumns } from '../__mocks__/filtersMockData'
import {
  FilterOperation,
  FilterType
} from '../modules/Filters/types'
import { getPresetColumnKeys } from '../modules/Presets/helpers'
import { TablePreset, TablePresetDraft, TablePresetsProp, TableView } from '../modules/Presets/types'
import { TableTestingClass, TestTable } from '../test-utils/TableTestingClass'
import {
  TableRecord,
  TableToolbarProps
} from '../types'

jest.mock('@src/notification', () => ({
  openNotification: {
    success: jest.fn(),
    error: jest.fn()
  }
}))

configure({ testIdAttribute: 'data-testid' })

const withIds = <T extends Record<string, unknown>>(items: T[]): (T & { id: string })[] => (
  items.map(item => ({ ...item, id: generateId() }))
)

const makePresetsProp = <T extends TableRecord = MockRow>(
  presets?: Array<Omit<TablePreset<T>, 'id'>>,
  views?: Array<Omit<TableView<T>, 'id' | 'presets'> & { presets: Array<Omit<TablePreset<T>, 'id'>> }>,
  patch?: Partial<TablePresetsProp<T>>
): TablePresetsProp<T> => ({
  onCreatePreset: jest.fn((preset: TablePresetDraft<T>) => Promise.resolve<TablePreset<T>>({ ...preset, id: generateId() })),
  onDeletePreset: jest.fn(() => Promise.resolve()),
  onUpdatePreset: jest.fn((preset: TablePreset<T>) => Promise.resolve({ ...preset })),
  onPresetSelected: jest.fn(() => Promise.resolve()),
  onViewSelected: jest.fn(() => Promise.resolve()),
  presets: presets ? withIds(presets) : undefined,
  views: views ? views.map(view => ({
    ...view,
    id: generateId(),
    presets: withIds(view.presets)
  })) : undefined,
  ...patch
})

describe('Table Presets module', () => {
  const locale = localization['en-us'].translation.tablePresets
  const defaultProps = {
    columns: tableColumns.map(x => ({ ...x, hideColumnAvailable: true })),
    dataSource: generatedData,
    testId: 'test-',
    toolbar: { showColumns: true, showPresets: true }
  }

  const presets = makePresetsProp([
    { name: 'Default preset', default: true, system: true, settings: {} },
    { name: 'Custom preset', description: 'Only rows active in the last 24 hours', settings: {} }
  ])

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should not render the show presets button when presets prop is empty', async () => {
    const table = await TableTestingClass.render(defaultProps)

    expect(table.toolbar.getPresetsButton()).not.toBeInTheDocument()
  })

  it('should open a dropdown with preset items when the show presets button is clicked', async () => {
    const table = await TableTestingClass.render({ ...defaultProps, presets })

    expect(screen.queryByText('Default preset')).not.toBeInTheDocument()

    await table.presets.openPresetList()

    expect(screen.getByText('Default preset')).toBeInTheDocument()
    expect(screen.getByText('Custom preset')).toBeInTheDocument()
  })

  it('should highlight the default preset when the dropdown is opened', async () => {
    const table = await TableTestingClass.render({ ...defaultProps, presets })

    await table.presets.openPresetList()

    expect(table.presets.isPresetSelected('Default preset')).toBe(true)
    expect(table.presets.isPresetSelected('Custom preset')).toBe(false)
  })

  it('should set the clicked preset as currentPreset and highlight it', async () => {
    const table = await TableTestingClass.render({ ...defaultProps, presets })

    userEvent.click(table.toolbar.getPresetsButton()!)
    userEvent.click(screen.getByText('Custom preset'))

    await table.presets.openPresetList()

    expect(table.presets.isPresetSelected('Default preset')).toBe(false)
    expect(table.presets.isPresetSelected('Custom preset')).toBe(true)
  })

  it('should show visible column titles as description in the presets list', async () => {
    const columnsWithTitles = [
      { key: 'fullname', title: 'Fullname', dataIndex: 'fullname', show: true },
      { key: 'group', title: 'Group', dataIndex: 'group', show: true },
      { key: 'salary', title: 'Salary', dataIndex: 'salary', show: true }
    ]
    const presetsWithColumns = makePresetsProp([
      { name: 'Default preset', default: true, system: true, settings: {} },
      { name: 'Custom preset', settings: { columns: { fullname: { show: true, sortIndex: 0 }, group: { show: true, sortIndex: 1 } } } }
    ])

    const table = await TableTestingClass.render({
      ...defaultProps,
      columns: columnsWithTitles,
      presets: presetsWithColumns
    })

    await table.presets.openPresetList()
    await waitFor(() => expect(screen.getByText('Custom preset')).toBeInTheDocument())

    expect(
      screen.getByText('Custom preset').closest('.ant-dropdown-menu-item')
    ).toHaveTextContent('Fullname, Group')
  })

  describe('system presets', () => {
    it('should not render the preset actions for a system preset', async () => {
      const table = await TableTestingClass.render({
        ...defaultProps,
        presets: makePresetsProp([
          { name: 'System preset', system: true, settings: { pageSize: 5 } },
          { name: 'User preset', settings: { pageSize: 5 } }
        ])
      })

      await table.presets.openPresetList()

      expect(table.presets.getPresetMenuButton('System preset')).not.toBeInTheDocument()
      expect(table.presets.getPresetMenuButton('User preset')).toBeInTheDocument()
    })

    it('should not show the update button for a system preset even when the current settings are dirty', async () => {
      const table = await TableTestingClass.render({
        ...defaultProps,
        pagination: {
          total: 100,
          pageSizeOptions: ['5', '10', '20'],
          showSizeChanger: true
        },
        presets: makePresetsProp([
          { name: 'User preset', settings: { pageSize: 5 } },
          { name: 'System preset', system: true, settings: { pageSize: 5 } }
        ])
      })

      await table.presets.openPresetList()
      fireEvent.click(screen.getByText('System preset'))
      await table.presets.openPresetList()

      table.pagination.selectPageSize(10)
      await table.presets.openPresetList()

      expect(table.presets.hasDirtyIndicator()).toBe(true)
      expect(screen.queryByTestId('test--update-table-preset')).not.toBeInTheDocument()
      expect(screen.queryByTestId('test--create-table-preset')).toBeInTheDocument()
    })
  })

  describe('presets list', () => {
    it('should show the default preset first and sort the rest alphabetically', async () => {
      const table = await TableTestingClass.render({
        ...defaultProps,
        presets: makePresetsProp([
          { name: 'Default preset', default: true, system: true, settings: {} },
          { name: 'Zeta preset', settings: {} },
          { name: 'Alpha preset', settings: {} },
          { name: 'Mid preset', settings: {} }
        ])
      })

      await table.presets.openPresetList()

      const itemTexts = Array.from(document.querySelectorAll('.ant-dropdown-menu-item'))
        .map(item => item.textContent ?? '')

      const indexOf = (name: string): number => itemTexts.findIndex(text => text.includes(name))

      expect(indexOf('Default preset')).toBeLessThan(indexOf('Alpha preset'))
      expect(indexOf('Alpha preset')).toBeLessThan(indexOf('Mid preset'))
      expect(indexOf('Mid preset')).toBeLessThan(indexOf('Zeta preset'))
    })

    it('should show a loader instead of the list while presets are loading', async () => {
      const table = await TableTestingClass.render({
        ...defaultProps,
        presets: makePresetsProp([
          { name: 'Default preset', default: true, system: true, settings: {} },
          { name: 'Custom preset', settings: {} }
        ], undefined, {
          loading: true
        })
      })

      await table.presets.openPresetList()

      expect(document.querySelector('.ant-spin')).toBeInTheDocument()
      expect(screen.queryByText('Default preset')).not.toBeInTheDocument()
      expect(screen.queryByText('Custom preset')).not.toBeInTheDocument()
      expect(screen.queryByTestId('test--create-table-preset')).not.toBeInTheDocument()
    })
  })

  describe('create preset', () => {
    const createPresetProps = {
      ...defaultProps,
      pagination: {
        total: 100,
        pageSizeOptions: ['5', '10', '20'],
        showSizeChanger: true
      },
      presets: makePresetsProp([
        { name: 'Default preset', default: true, system: true, settings: { pageSize: 5 } },
        { name: 'Second preset', settings: { pageSize: 10 } }
      ])
    }

    it('should create a preset and set it active', async () => {
      const table = await TableTestingClass.render(createPresetProps)

      table.pagination.selectPageSize(10)
      await table.presets.createPreset('My preset')
      await table.presets.openPresetList()

      expect(table.presets.isPresetSelected('My preset')).toBe(true)
      expect(openNotification.success).toHaveBeenCalledWith('Preset My preset saved')
    })

    it('should show an error if creating a preset with an existing name', async () => {
      const table = await TableTestingClass.render(createPresetProps)

      table.pagination.selectPageSize(10)
      await table.presets.createPreset('Default preset')

      expect(screen.getByText(locale.validation.presetNameExists)).toBeInTheDocument()
    })

    it('should show an error notification if creation fails', async () => {
      const failingPresetProps = {
        ...createPresetProps,
        presets: makePresetsProp([
          { name: 'Default preset', default: true, system: true, settings: { pageSize: 5 } },
          { name: 'Second preset', settings: { pageSize: 10 } }
        ], undefined, {
          onCreatePreset: jest.fn(() => Promise.reject(new Error('create failed')))
        })
      }
      const table = await TableTestingClass.render(failingPresetProps)

      table.pagination.selectPageSize(10)
      await table.presets.createPreset('My preset')

      expect(openNotification.error).toHaveBeenCalled()
      await table.presets.openPresetList()
      expect(screen.queryByText('My preset')).not.toBeInTheDocument()
    })

    it('should show an error when creating a preset with an empty name', async () => {
      const table = await TableTestingClass.render(createPresetProps)

      table.pagination.selectPageSize(10)
      await table.presets.openPresetList()
      await act(async () => { userEvent.click(screen.getByTestId('test--create-table-preset')!) })
      await waitFor(() => expect(screen.getByText('Save table settings as a new preset')).toBeInTheDocument())
      await act(async () => { userEvent.click(screen.getByTestId('modal-confirm')!) })

      expect(screen.getByText(locale.validation.presetNameEmpty)).toBeInTheDocument()
      expect(screen.getByTestId('table-preset-name')).toBeInTheDocument()
    })
  })

  describe('rename preset', () => {
    const renamePresetProps = {
      ...defaultProps,
      presets
    }

    it('should rename preset', async () => {
      const table = await TableTestingClass.render(renamePresetProps)

      await table.presets.renamePreset('Custom preset', 'Renamed preset')
      await table.presets.openPresetList()

      expect(screen.getByText('Renamed preset')).toBeInTheDocument()
      expect(screen.queryByText('Custom preset')).not.toBeInTheDocument()
    })

    it('should show an error if renaming to an existing preset name', async () => {
      const table = await TableTestingClass.render(renamePresetProps)

      await table.presets.renamePreset('Custom preset', 'Default preset')

      expect(screen.getByText(locale.validation.presetNameExists)).toBeInTheDocument()
    })

    it('should show an error notification if rename fails', async () => {
      const failingPresetProps = {
        ...renamePresetProps,
        presets: makePresetsProp([
          { name: 'Default preset', default: true, system: true, settings: {} },
          { name: 'Custom preset', description: 'Only rows active in the last 24 hours', settings: {} }
        ], undefined, {
          onUpdatePreset: jest.fn(() => Promise.reject(new Error('rename failed')))
        })
      }
      const table = await TableTestingClass.render(failingPresetProps)

      await table.presets.renamePreset('Custom preset', 'Renamed preset')
      await table.presets.openPresetList()

      expect(openNotification.error).toHaveBeenCalled()
      expect(screen.queryByText('Renamed preset')).not.toBeInTheDocument()
      expect(screen.getByText('Custom preset')).toBeInTheDocument()
    })
  })

  describe('update preset', () => {
    const updatePresetProps = {
      ...defaultProps,
      pagination: {
        total: 100,
        pageSizeOptions: ['5', '10', '20'],
        showSizeChanger: true
      },
      presets: makePresetsProp([
        { name: 'Default preset', default: true, system: true, settings: { pageSize: 5 } },
        { name: 'Custom preset', settings: { pageSize: 5 } }
      ])
    }

    it('should update the active preset', async () => {
      const table = await TableTestingClass.render(updatePresetProps)

      await table.presets.selectPreset('Custom preset')
      table.pagination.selectPageSize(10)
      await table.presets.openPresetList()
      await act(async () => { userEvent.click(screen.getByTestId('test--update-table-preset')!) })

      await table.presets.openPresetList()
      expect(table.presets.isPresetSelected('Custom preset')).toBe(true)
      expect(table.pagination.hasPage(10)).toBe(true)
    })

    it('should show an error notification if update fails', async () => {
      const failingPresetProps = {
        ...updatePresetProps,
        presets: makePresetsProp([
          { name: 'Default preset', default: true, system: true, settings: { pageSize: 5 } },
          { name: 'Custom preset', settings: { pageSize: 5 } }
        ], undefined, {
          onUpdatePreset: jest.fn(() => Promise.reject(new Error('update failed')))
        })
      }
      const table = await TableTestingClass.render(failingPresetProps)

      await table.presets.selectPreset('Custom preset')
      table.pagination.selectPageSize(10)
      await table.presets.openPresetList()
      await act(async () => { userEvent.click(screen.getByTestId('test--update-table-preset')!) })

      expect(openNotification.error).toHaveBeenCalled()
      expect(table.presets.hasDirtyIndicator()).toBe(true)
    })
  })

  describe('preset footer actions', () => {
    const footerActionsProps = {
      ...defaultProps,
      pagination: {
        total: 100,
        pageSizeOptions: ['5', '10', '20'],
        showSizeChanger: true
      },
      presets: makePresetsProp([
        { name: 'Default preset', default: true, system: true, settings: { pageSize: 5 } },
        { name: 'Custom preset', settings: { pageSize: 5 } }
      ])
    }

    it('should show Save and Update actions for a dirty custom preset', async () => {
      const table = await TableTestingClass.render(footerActionsProps)

      await table.presets.selectPreset('Custom preset')
      table.pagination.selectPageSize(10)
      await table.presets.openPresetList()

      expect(table.presets.hasDirtyIndicator()).toBe(true)
      expect(screen.getByTestId('test--create-table-preset')).toBeInTheDocument()
      expect(screen.getByTestId('test--update-table-preset')).toBeInTheDocument()
    })

    it('should show no footer actions for a clean custom preset', async () => {
      const table = await TableTestingClass.render(footerActionsProps)

      await table.presets.selectPreset('Custom preset')
      await table.presets.openPresetList()

      expect(table.presets.hasDirtyIndicator()).toBe(false)
      expect(screen.queryByTestId('test--create-table-preset')).not.toBeInTheDocument()
      expect(screen.queryByTestId('test--update-table-preset')).not.toBeInTheDocument()
    })

    it('should switch presets without warning when the table has unsaved changes', async () => {
      const table = await TableTestingClass.render(footerActionsProps)

      table.pagination.selectPageSize(10)
      expect(table.presets.hasDirtyIndicator()).toBe(true)

      await table.presets.selectPreset('Custom preset')
      await table.presets.openPresetList()

      expect(table.presets.isPresetSelected('Custom preset')).toBe(true)
      expect(table.presets.hasDirtyIndicator()).toBe(false)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  describe('delete preset', () => {
    const deletePresetProps = {
      ...defaultProps,
      presets
    }

    it('should delete a non-active preset', async () => {
      const table = await TableTestingClass.render(deletePresetProps)

      await table.presets.deletePreset('Custom preset')

      await table.presets.openPresetList()
      expect(screen.queryByText('Custom preset')).not.toBeInTheDocument()
      expect(openNotification.success).toHaveBeenCalledWith('Preset Custom preset deleted')
    })

    it('should show an error notification if deletion fails', async () => {
      const failingPresetProps = {
        ...deletePresetProps,
        presets: makePresetsProp([
          { name: 'Default preset', default: true, system: true, settings: {} },
          { name: 'Custom preset', description: 'Only rows active in the last 24 hours', settings: {} }
        ], undefined, {
          onDeletePreset: jest.fn(() => Promise.reject(new Error('delete failed')))
        })
      }
      const table = await TableTestingClass.render(failingPresetProps)

      await table.presets.deletePreset('Custom preset')

      expect(openNotification.error).toHaveBeenCalled()
      expect(openNotification.success).not.toHaveBeenCalledWith('Preset Custom preset deleted')

      await table.presets.openPresetList()
      expect(screen.getByText('Custom preset')).toBeInTheDocument()
    })

    it('should show a confirmation dialog with the preset name before deleting', async () => {
      const table = await TableTestingClass.render(deletePresetProps)

      await table.presets.openPresetMenu('Custom preset')
      await act(async () => { fireEvent.click(screen.getByTestId('delete-table-preset')!) })

      expect(screen.getByText(/Delete preset "Custom preset"/)).toBeInTheDocument()
    })
  })

  describe('pageSize settings', () => {
    const pageSizeDefaultProps = {
      ...defaultProps,
      pagination: {
        total: 100,
        pageSizeOptions: ['5', '10', '20'],
        showSizeChanger: true
      },
      presets: makePresetsProp([
        { name: 'Default preset', default: true, system: true, settings: { pageSize: 5 } },
        {
          name: 'PageSize10 preset',
          settings: { pageSize: 10 }
        }
      ])
    }

    it('should apply the default preset pageSize', async () => {
      const table = await TableTestingClass.render(pageSizeDefaultProps)

      expect(table.pagination.hasPage(20)).toBe(true)
      expect(table.pagination.hasPage(21)).toBe(false)
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should change pageSize when selecting another preset', async () => {
      const table = await TableTestingClass.render(pageSizeDefaultProps)

      await table.presets.selectPreset('PageSize10 preset')

      expect(table.pagination.hasPage(10)).toBe(true)
      expect(table.pagination.hasPage(11)).toBe(false)
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should mark dirty when pageSize is changed by user', async () => {
      const table = await TableTestingClass.render(pageSizeDefaultProps)

      table.pagination.selectPageSize(10)

      expect(table.pagination.hasPage(10)).toBe(true)
      expect(table.pagination.hasPage(11)).toBe(false)
      expect(table.presets.hasDirtyIndicator()).toBe(true)

      await table.presets.openPresetList()
      expect(table.presets.isPresetSelected('Default preset')).toBe(true)
    })
  })

  describe('column width settings', () => {
    const widthDefaultProps = {
      ...defaultProps,
      presets: makePresetsProp([
        { name: 'Default preset', default: true, system: true, settings: {} },
        {
          name: 'Width preset',
          settings: {
            columns: {
              fullname: { show: true, sortIndex: 0, width: 250 },
              group: { show: true, sortIndex: 1 }
            }
          }
        }
      ])
    }

    it('should apply column widths from the preset', async () => {
      const table = await TableTestingClass.render(widthDefaultProps)

      expect(table.columns.getWidthFromColgroup(0)).toBe(160)

      await table.presets.selectPreset('Width preset')

      expect(table.columns.getWidthFromColgroup(0)).toBe(250)
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should restore original column widths when switching to a preset without widths', async () => {
      const table = await TableTestingClass.render(widthDefaultProps)

      await table.presets.selectPreset('Width preset')
      expect(table.columns.getWidthFromColgroup(0)).toBe(250)

      await table.presets.selectPreset('Default preset')

      expect(table.columns.getWidthFromColgroup(0)).toBe(160)
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })
  })

  describe('columnsVisible settings', () => {
    const columnsVisibleDefaultProps = {
      ...defaultProps,
      presets: makePresetsProp([
        {
          name: 'Default preset',
          default: true,
          system: true,
          settings: { columns: {
            fullname: { show: true, sortIndex: 0 },
            salary: { show: true, sortIndex: 1 },
            dateHired: { show: true, sortIndex: 2 },
            datetime: { show: true, sortIndex: 3 },
            isTrainee: { show: true, sortIndex: 4 }
          } }
        },
        {
          name: 'Custom preset',
          settings: { columns: { fullname: { show: true, sortIndex: 0 }, group: { show: true, sortIndex: 1 } } }
        }
      ])
    }

    it('should apply the default preset columnsVisible', async () => {
      const table = await TableTestingClass.render(columnsVisibleDefaultProps)

      const titles = table.columns.getHeaderTitles()
      expect(titles).toContain('table.columns.fullname')
      expect(titles).not.toContain('table.columns.group')
      expect(titles).toContain('table.columns.salary')
      expect(titles).toContain('table.columns.dateHired')
      expect(titles).toContain('Datetime')
      expect(titles).toContain('table.columns.isTrainee')
      expect(titles).not.toContain('table.columns.details')
      expect(table.presets.hasDirtyIndicator()).toBe(false)

      await table.columnSettings.open()

      expect(table.columnSettings.isVisible('fullname')).toBe(true)
      expect(table.columnSettings.isVisible('group')).toBe(false)
      expect(table.columnSettings.isVisible('salary')).toBe(true)
      expect(table.columnSettings.isVisible('dateHired')).toBe(true)
      expect(table.columnSettings.isVisible('datetime')).toBe(true)
      expect(table.columnSettings.isVisible('isTrainee')).toBe(true)
      expect(table.columnSettings.isVisible('details')).toBe(false)
    })

    it('should change columns visibility when selecting another preset', async () => {
      const table = await TableTestingClass.render(columnsVisibleDefaultProps)

      await table.presets.selectPreset('Custom preset')

      const titles = table.columns.getHeaderTitles()
      expect(titles).toContain('table.columns.fullname')
      expect(titles).toContain('table.columns.group')
      expect(titles).not.toContain('table.columns.salary')
      expect(titles).not.toContain('table.columns.dateHired')
      expect(titles).not.toContain('Datetime')
      expect(titles).not.toContain('table.columns.isTrainee')
      expect(titles).not.toContain('table.columns.details')
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should mark dirty when columns visibility is changed by user', async () => {
      const table = await TableTestingClass.render(columnsVisibleDefaultProps)

      await table.columnSettings.open()
      table.columnSettings.toggleColumnVisibility('salary')
      table.columnSettings.apply()

      const titles = table.columns.getHeaderTitles()
      expect(titles).toContain('table.columns.fullname')
      expect(titles).not.toContain('table.columns.group')
      expect(titles).not.toContain('table.columns.salary')
      expect(titles).toContain('table.columns.dateHired')
      expect(titles).toContain('Datetime')
      expect(titles).toContain('table.columns.isTrainee')
      expect(titles).not.toContain('table.columns.details')
      expect(table.presets.hasDirtyIndicator()).toBe(true)

      await table.presets.openPresetList()
      expect(table.presets.isPresetSelected('Default preset')).toBe(true)
    })

    it('should reset columns to the current preset', async () => {
      const table = await TableTestingClass.render(columnsVisibleDefaultProps)

      await table.columnSettings.open()

      expect(table.columnSettings.isVisible('group')).toBe(false)

      table.columnSettings.toggleColumnVisibility('group')
      table.columnSettings.apply()

      const shownTitles = table.columns.getHeaderTitles()
      expect(shownTitles).toContain('table.columns.group')

      await table.columnSettings.open()

      expect(table.columnSettings.isVisible('group')).toBe(true)

      table.columnSettings.reset()
      table.columnSettings.apply()

      const resetTitles = table.columns.getHeaderTitles()
      expect(resetTitles).not.toContain('table.columns.group')

      await table.columnSettings.open()

      expect(table.columnSettings.isVisible('group')).toBe(false)
    })
  })

  describe('columnsOrder settings', () => {
    const columnsOrderPresets: Array<Omit<TablePreset<MockRow>, 'id'>> = [
      {
        name: 'Default preset',
        default: true,
        system: true,
        settings: {
          columns: {
            fullname: { sortIndex: 0 },
            group: { sortIndex: 1 },
            salary: { sortIndex: 2 },
            dateHired: { sortIndex: 3 },
            datetime: { sortIndex: 4 },
            details: { sortIndex: 5 },
            isTrainee: { sortIndex: 6 }
          }
        }
      },
      {
        name: 'Custom preset',
        settings: {
          columns: {
            fullname: { sortIndex: 0 },
            salary: { sortIndex: 1 },
            group: { sortIndex: 2 },
            dateHired: { sortIndex: 3 },
            datetime: { sortIndex: 4 },
            isTrainee: { sortIndex: 5 },
            details: { sortIndex: 6 }
          }
        }
      },
      {
        name: 'Custom preset2',
        settings: {
          columns: {
            group: { sortIndex: 0 },
            fullname: { show: true, sortIndex: 1 },
            datetime: { show: true, sortIndex: 2 },
            salary: { show: true, sortIndex: 3 }
          }
        }
      }
    ]
    const columnsOrderDefaultProps = {
      ...defaultProps,
      presets: makePresetsProp(columnsOrderPresets)
    }

    const orderedTitles = (table: TableTestingClass): string[] => table.columns.getHeaderTitles()

    it('should apply the default preset columnsOrder', async () => {
      const table = await TableTestingClass.render(columnsOrderDefaultProps)

      const titles = orderedTitles(table)
      expect(titles[0]).toBe('table.columns.fullname')
      expect(titles[1]).toBe('table.columns.group')
      expect(titles[2]).toBe('table.columns.salary')
      expect(titles[3]).toBe('table.columns.dateHired')
      expect(titles[4]).toBe('Datetime')
      expect(titles[5]).toBe('table.columns.details')
      expect(titles[6]).toBe('table.columns.isTrainee')
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should describe preset columns in the columnsOrder in the presets list', async () => {
      const table = await TableTestingClass.render({
        ...columnsOrderDefaultProps,
        presets: makePresetsProp([
          {
            name: 'Custom ordering',
            default: true,
            system: true,
            settings: {
              columns: {
                group: { show: true, sortIndex: 0 },
                salary: { show: true, sortIndex: 1 },
                fullname: { show: true, sortIndex: 2 }
              }
            }
          }
        ])
      })

      await table.presets.openPresetList()

      expect(
        screen.getByText('Custom ordering').closest('.ant-dropdown-menu-item')
      ).toHaveTextContent('table.columns.group, table.columns.salary, table.columns.fullname')
    })

    it('should change columns order when selecting another preset', async () => {
      const table = await TableTestingClass.render(columnsOrderDefaultProps)

      await table.presets.selectPreset('Custom preset')

      const titles = orderedTitles(table)
      expect(titles[0]).toBe('table.columns.fullname')
      expect(titles[1]).toBe('table.columns.salary')
      expect(titles[2]).toBe('table.columns.group')
      expect(titles[3]).toBe('table.columns.dateHired')
      expect(titles[4]).toBe('Datetime')
      expect(titles[5]).toBe('table.columns.isTrainee')
      expect(titles[6]).toBe('table.columns.details')
      expect(table.presets.hasDirtyIndicator()).toBe(false)

      await table.presets.selectPreset('Custom preset2')

      const titles2 = orderedTitles(table)
      expect(titles2).toHaveLength(3)
      expect(titles2[0]).toBe('table.columns.fullname')
      expect(titles2[1]).toBe('Datetime')
      expect(titles2[2]).toBe('table.columns.salary')
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should keep hidden columns in their order position in the settings sidebar', async () => {
      const table = await TableTestingClass.render({
        ...columnsOrderDefaultProps,
        presets: makePresetsProp([
          {
            ...columnsOrderPresets[0],
            settings: {
              ...columnsOrderPresets[0].settings,
              columns: {
                fullname: { show: true, sortIndex: 0 },
                group: { sortIndex: 1 },
                salary: { show: true, sortIndex: 2 },
                dateHired: { sortIndex: 3 },
                datetime: { show: true, sortIndex: 4 },
                details: { sortIndex: 5 },
                isTrainee: { show: true, sortIndex: 6 }
              }
            }
          },
          ...columnsOrderPresets.slice(1)
        ])
      })

      await table.columnSettings.open()

      const itemKeys = Array.from(
        document.querySelectorAll<HTMLElement>('[data-testid^="selector-item-"]')
      )
        .map(el => el.getAttribute('data-testid')?.replace('selector-item-', '') ?? '')

      expect(itemKeys).toEqual(getPresetColumnKeys(columnsOrderPresets[0].settings.columns)?.orderKeys)
    })
  })

  describe('filters settings', () => {
    const filtersDefaultProps = {
      ...defaultProps,
      presets: makePresetsProp([
        {
          name: 'Default preset',
          default: true,
          system: true,
          settings: {
            filters: [
              {
                name: 'fullname',
                condition: FilterOperation.cont,
                type: FilterType.Text,
                value: 'ov'
              }
            ]
          }
        },
        {
          name: 'Custom preset',
          settings: {
            filters: [
              {
                name: 'group',
                condition: FilterOperation.eq,
                type: FilterType.Enum,
                value: 'CEO'
              }
            ]
          }
        },
        {
          name: 'Preset with not filters',
          settings: { pageSize: 50 }
        }
      ]),
      toolbar: { showColumns: true, showFilterSidebar: true },
      useFiltersSidebar: true
    }

    it('should apply the default preset filters', async () => {
      const table = await TableTestingClass.render(filtersDefaultProps)

      expect(table.pagination.getTotal()).toBe(60)
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should change filters when selecting another preset', async () => {
      const table = await TableTestingClass.render(filtersDefaultProps)

      await table.presets.selectPreset('Custom preset')

      expect(table.pagination.getTotal()).toBe(16)
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should reset filters when selecting a preset without filters', async () => {
      const table = await TableTestingClass.render(filtersDefaultProps)

      await table.presets.selectPreset('Preset with not filters')

      expect(table.pagination.getTotal()).toBe(100)
    })

    it('should mark dirty when filters are changed by user', async () => {
      const table = await TableTestingClass.render(filtersDefaultProps)

      await table.filters.openSidebar()
      table.filters.setValue(0, 'ova')
      await table.filters.apply()

      expect(table.pagination.getTotal()).toBe(28)
      expect(table.presets.hasDirtyIndicator()).toBe(true)

      await table.presets.openPresetList()
      expect(table.presets.isPresetSelected('Default preset')).toBe(true)
    })
  })

  describe('column filters settings', () => {
    const columnFiltersDefaultProps = {
      ...defaultProps,
      presets: makePresetsProp([
        {
          name: 'Default preset',
          default: true,
          system: true,
          settings: {
            filters: [
              { name: 'salary', filterName: 'Should be >300000' }
            ]
          }
        },
        {
          name: 'Custom preset',
          settings: {
            filters: [
              { name: 'fullname', filterName: 'Should start with E' }
            ]
          }
        },
        {
          name: 'Preset without column filters',
          settings: { pageSize: 50 }
        }
      ])
    }

    it('should apply the default preset columnFilters', async () => {
      const table = await TableTestingClass.render(columnFiltersDefaultProps)

      await table.header.openColumnDropdown('salary')

      expect(table.columnFilters.isOptionSelected('salary', '0')).toBe(true)
      expect(table.pagination.getTotal()).toBe(47)
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should change column filters when selecting another preset', async () => {
      const table = await TableTestingClass.render(columnFiltersDefaultProps)

      await table.presets.selectPreset('Custom preset')
      await table.header.openColumnDropdown('fullname')

      expect(table.columnFilters.isOptionSelected('fullname', '2', true, false)).toBe(true)
      expect(table.pagination.getTotal()).toBe(10)
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should reset column filters when selecting a preset without columnFilters', async () => {
      const table = await TableTestingClass.render(columnFiltersDefaultProps)

      await table.presets.selectPreset('Preset without column filters')
      await table.header.openColumnDropdown('salary')

      expect(table.columnFilters.isOptionSelected('salary', '0')).toBe(false)
      expect(table.pagination.getTotal()).toBe(100)
    })

    it('should mark dirty when column filters are changed by user', async () => {
      const table = await TableTestingClass.render(columnFiltersDefaultProps)

      await table.header.openColumnDropdown('salary')
      table.columnFilters.selectFilter('salary', '1', false, false)

      expect(table.pagination.getTotal()).toBe(53)
      expect(table.presets.hasDirtyIndicator()).toBe(true)

      await table.presets.openPresetList()
      expect(table.presets.isPresetSelected('Default preset')).toBe(true)
    })
  })

  describe('sorting settings', () => {
    const sortingDefaultProps = {
      ...defaultProps,
      presets: makePresetsProp([
        {
          name: 'Default preset',
          default: true,
          system: true,
          settings: { sorting: { field: 'fullname', direction: 'asc' } }
        },
        {
          name: 'Sorting fullname desc',
          settings: { sorting: { field: 'fullname', direction: 'desc' } }
        },
        {
          name: 'Sorting details.city asc',
          settings: { sorting: { field: 'details', attribute: 'city', direction: 'asc' } }
        },
        { name: 'No sorting preset', settings: {} }
      ])
    }

    it('should apply the default preset sorting', async () => {
      const table = await TableTestingClass.render(sortingDefaultProps)

      expect(await table.sorting.isActive('fullname', 'asc')).toBe(true)
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should change sorting when selecting another preset', async () => {
      const table = await TableTestingClass.render(sortingDefaultProps)

      await table.presets.selectPreset('Sorting fullname desc')

      expect(await table.sorting.isActive('fullname', 'desc')).toBe(true)
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should handle the field attribute sorting', async () => {
      const table = await TableTestingClass.render(sortingDefaultProps)

      await table.presets.selectPreset('Sorting details.city asc')

      expect(await table.sorting.isActive('details', 'asc', 'city')).toBe(true)
    })

    it('should reset sorting when selecting a preset without sorting', async () => {
      const table = await TableTestingClass.render(sortingDefaultProps)

      await table.presets.selectPreset('No sorting preset')

      expect(await table.sorting.isActive('fullname', 'asc')).toBe(false)
      expect(await table.sorting.isActive('fullname', 'desc')).toBe(false)
    })

    it('should mark dirty when sorting is changed by user', async () => {
      const table = await TableTestingClass.render(sortingDefaultProps)

      await table.sorting.sortBy('fullname', 'desc')

      expect(table.presets.hasDirtyIndicator()).toBe(true)

      await table.presets.openPresetList()
      expect(table.presets.isPresetSelected('Default preset')).toBe(true)
    })

    it('should mark dirty when preset sorting is empty and sorting is changed by user', async () => {
      const table = await TableTestingClass.render(sortingDefaultProps)

      await table.presets.selectPreset('No sorting preset')
      await table.sorting.sortBy('fullname', 'desc')

      expect(table.presets.hasDirtyIndicator()).toBe(true)
    })
  })

  describe('groupBy settings', () => {
    const groupByDefaultProps = {
      ...defaultProps,
      presets: makePresetsProp([
        {
          name: 'Default preset',
          default: true,
          system: true,
          settings: { groupBy: 'group' }
        },
        {
          name: 'Group by isTrainee',
          settings: { groupBy: 'isTrainee' }
        },
        { name: 'No grouping', settings: {} }
      ]),
      toolbar: { showColumns: true, showGrouping: true }
    }

    it('should apply the default preset groupBy', async () => {
      const table = await TableTestingClass.render(groupByDefaultProps)

      expect(table.rows.getGroupTitles()).toEqual(
        expect.arrayContaining(['CEO', 'Developers', 'Financials'])
      )
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should change groupBy when selecting another preset', async () => {
      const table = await TableTestingClass.render(groupByDefaultProps)

      await table.presets.selectPreset('Group by isTrainee')

      expect(table.rows.getGroupTitles()).toEqual(expect.arrayContaining(['true', 'false']))
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should reset groupBy when selecting a preset without groupBy', async () => {
      const table = await TableTestingClass.render(groupByDefaultProps)

      await table.presets.selectPreset('No grouping')

      expect(table.rows.getGroupTitles()).toHaveLength(0)
    })

    it('should mark dirty when grouping is changed by user', async () => {
      const table = await TableTestingClass.render(groupByDefaultProps)

      await table.grouping.selectGrouping('table.columns.isTrainee')

      expect(table.presets.hasDirtyIndicator()).toBe(true)

      await table.presets.openPresetList()
      expect(table.presets.isPresetSelected('Default preset')).toBe(true)
    })
  })

  describe('combined settings', () => {
    const combinedProps = {
      ...defaultProps,
      useFiltersSidebar: true,
      pagination: {
        pageSizeOptions: ['5', '10', '20'],
        showSizeChanger: true
      },
      toolbar: {
        showColumns: true,
        showGrouping: true,
        showFilterSidebar: true
      },
      presets: makePresetsProp([
        {
          name: 'Default preset',
          default: true,
          system: true,
          settings: {
            columns: {
              fullname: { show: true, sortIndex: 0 },
              group: { show: true, sortIndex: 1 },
              salary: { show: true, sortIndex: 2 },
              dateHired: { show: true, sortIndex: 3 },
              datetime: { show: true, sortIndex: 4 },
              isTrainee: { show: false, sortIndex: 5 }
            },
            filters: [
              {
                name: 'fullname',
                condition: FilterOperation.cont,
                type: FilterType.Text,
                value: 'ov'
              }
            ],
            groupBy: 'isTrainee',
            pageSize: 5,
            sorting: { field: 'fullname', direction: 'desc' }
          }
        }
      ])
    }

    it('should apply all preset settings at once', async () => {
      const table = await TableTestingClass.render(combinedProps)

      const titles = table.columns.getHeaderTitles()
      expect(titles).toContain('table.columns.fullname')
      expect(titles).toContain('table.columns.salary')
      expect(titles).not.toContain('table.columns.isTrainee')
      expect(table.presets.hasDirtyIndicator()).toBe(false)
    })

    it('should apply filters, groupBy, pageSize and sorting from the preset', async () => {
      const table = await TableTestingClass.render(combinedProps)

      expect(table.pagination.getTotal()).toBe(60)

      expect(await table.sorting.isActive('fullname', 'desc')).toBe(true)

      expect(table.rows.getGroupTitles()).toEqual(
        expect.arrayContaining(['true', 'false'])
      )

      expect(table.pagination.hasPage(12)).toBe(true)
      expect(table.pagination.hasPage(13)).toBe(false)
    })
  })

  describe('views', () => {
    const viewsProps = {
      ...defaultProps,
      pagination: {
        total: 100,
        pageSizeOptions: ['5', '10', '20'],
        showSizeChanger: true
      },
      presets: makePresetsProp(undefined, [
        {
          name: 'Default view',
          description: 'Default view description',
          default: true,
          presets: [
            { name: 'Default preset', default: true, system: true, settings: { groupBy: 'group' } },
            { name: 'Preset A', settings: { groupBy: 'isTrainee' } }
          ]
        },
        {
          name: 'View B',
          description: 'View B description',
          presets: [
            {
              name: 'Preset B default',
              default: true,
              system: true,
              settings: {
                columns: { fullname: { show: true, sortIndex: 0 } },
                pageSize: 10
              }
            },
            { name: 'Preset B', settings: { columns: { fullname: { show: true, sortIndex: 0 } }, pageSize: 10 } }
          ]
        }
      ]),
      toolbar: { showColumns: true, showGrouping: true }
    }

    it('should select the default view and apply its default preset', async () => {
      const table = await TableTestingClass.render(viewsProps)

      await table.presets.openPresetList()

      expect(table.presets.isViewSelected('Default view')).toBe(true)
      expect(table.presets.isPresetSelected('Default preset')).toBe(true)
      expect(table.rows.getGroupTitles()).toEqual(
        expect.arrayContaining(['CEO', 'Developers', 'Financials'])
      )
    })

    it('should not render the view selector when only one view is available', async () => {
      const table = await TableTestingClass.render({
        ...defaultProps,
        presets: makePresetsProp(undefined, [
          {
            name: 'Only view',
            description: 'Only view description',
            presets: [
              { name: 'Default preset', default: true, system: true, settings: {} }
            ]
          }
        ])
      })

      await table.presets.openPresetList()

      expect(screen.getByText('Default preset')).toBeInTheDocument()
      expect(screen.queryByTestId('test--select-table-view')).not.toBeInTheDocument()
    })

    it('should switch views with unsaved changes without confirmation and apply the new view preset', async () => {
      const table = await TableTestingClass.render(viewsProps)

      await table.presets.selectView('View B')
      table.pagination.selectPageSize(5)
      expect(table.presets.hasDirtyIndicator()).toBe(true)

      await table.presets.selectView('Default view')
      await table.presets.openPresetList()

      expect(table.presets.isViewSelected('Default view')).toBe(true)
      expect(table.presets.isPresetSelected('Default preset')).toBe(true)
      expect(table.presets.hasDirtyIndicator()).toBe(false)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('should switch views and apply presets of the selected view', async () => {
      const table = await TableTestingClass.render(viewsProps)

      await table.presets.selectView('View B')
      await table.presets.openPresetList()

      expect(table.presets.isViewSelected('View B')).toBe(true)
      expect(table.presets.isPresetSelected('Preset B default')).toBe(true)
      expect(screen.getByText('Preset B default')).toBeInTheDocument()
      expect(screen.getByText('Preset B')).toBeInTheDocument()
      expect(screen.queryByText('Preset A')).not.toBeInTheDocument()
      expect(table.rows.getGroupTitles()).toHaveLength(0)
    })

    it('should create a preset within the current view', async () => {
      const table = await TableTestingClass.render(viewsProps)

      await table.presets.selectView('View B')
      table.pagination.selectPageSize(5)
      await table.presets.createPreset('New preset of View B')
      await table.presets.openPresetList()

      expect(screen.getByText('New preset of View B')).toBeInTheDocument()
      expect(table.presets.isPresetSelected('New preset of View B')).toBe(true)
    })

    it('should delete a preset within the current view', async () => {
      const table = await TableTestingClass.render(viewsProps)

      await table.presets.selectView('View B')
      await table.presets.deletePreset('Preset B')
      await table.presets.openPresetList()

      expect(screen.queryByText('Preset B')).not.toBeInTheDocument()
      expect(openNotification.success).toHaveBeenCalledWith('Preset Preset B deleted')
    })

    it('should rename a preset within the current view', async () => {
      const table = await TableTestingClass.render(viewsProps)

      await table.presets.selectView('View B')
      await table.presets.renamePreset('Preset B', 'Renamed preset in View B')
      await table.presets.openPresetList()

      expect(screen.getByText('Renamed preset in View B')).toBeInTheDocument()
      expect(screen.queryByText('Preset B')).not.toBeInTheDocument()
    })

    it('should allow renaming a preset to a name that exists in another view', async () => {
      const table = await TableTestingClass.render(viewsProps)

      await table.presets.selectView('View B')
      await table.presets.renamePreset('Preset B', 'Preset A')
      await table.presets.openPresetList()

      expect(screen.getByText('Preset A')).toBeInTheDocument()
      expect(screen.queryByText('Preset B')).not.toBeInTheDocument()
      expect(screen.queryByText(locale.validation.presetNameExists)).not.toBeInTheDocument()
    })

    it('should show an error when renaming a preset to a name that exists in the current view', async () => {
      const table = await TableTestingClass.render(viewsProps)

      await table.presets.selectView('View B')
      await table.presets.renamePreset('Preset B', 'Preset B default')

      expect(screen.getByText(locale.validation.presetNameExists)).toBeInTheDocument()
    })
  })

  describe('preset and view initialization', () => {
    const getProps = (patch: Partial<TablePresetsProp<MockRow>> = {}) => {
      return {
        ...defaultProps,
        presets: makePresetsProp(undefined, undefined, {
          presets: [
            {
              id: 'default-preset',
              name: 'Default preset',
              default: true,
              system: true,
              settings: {}
            },
            {
              id: 'custom-preset',
              name: 'Custom preset',
              settings: {}
            }
          ],
          ...patch
        })
      }
    }

    it('should initialize the current preset by presetId instead of the default one', async () => {
      const table = await TableTestingClass.render(getProps({ presetId: 'custom-preset' }))

      await table.presets.openPresetList()

      expect(table.presets.isPresetSelected('Custom preset')).toBe(true)
      expect(table.presets.isPresetSelected('Default preset')).toBe(false)
    })

    it('should fall back to the default preset when the presetId points to a missing preset', async () => {
      const table = await TableTestingClass.render(getProps({ presetId: 'missing-preset' }))

      await table.presets.openPresetList()

      expect(table.presets.isPresetSelected('Default preset')).toBe(true)
    })

    it('should select the first preset when none is marked as default', async () => {
      const table = await TableTestingClass.render(getProps({
        presets: [
          { id: 'first-preset', name: 'First preset', settings: {} },
          { id: 'second-preset', name: 'Second preset', settings: {} }
        ]
      }))

      await table.presets.openPresetList()

      expect(table.presets.isPresetSelected('First preset')).toBe(true)
      expect(table.presets.isPresetSelected('Second preset')).toBe(false)
    })

    it('should initialize the current view by viewId instead of the default one', async () => {
      const table = await TableTestingClass.render(getProps({
        presets: undefined,
        views: [
          {
            id: 'default-view',
            name: 'Default view',
            description: 'Default view description',
            default: true,
            presets: [
              {
                id: 'preset-a',
                name: 'Preset A',
                default: true,
                system: true,
                settings: {}
              }
            ]
          },
          {
            id: 'custom-view',
            name: 'Custom view',
            description: 'Custom view description',
            presets: [
              {
                id: 'preset-b',
                name: 'Preset B',
                default: true,
                system: true,
                settings: {}
              }
            ]
          }
        ],
        viewId: 'custom-view'
      }))

      await table.presets.openPresetList()

      expect(table.presets.isViewSelected('Custom view')).toBe(true)
      expect(table.presets.isPresetSelected('Preset B')).toBe(true)
    })

    it('should update inner state when presets prop is changed', async () => {
      const props = getProps({ presetId: 'default-preset' })
      const nextProps = getProps({
        presetId: 'custom-preset',
        presets: [
          {
            id: 'default-preset',
            name: 'Default preset',
            default: true,
            system: true,
            settings: {}
          },
          {
            id: 'custom-preset',
            name: 'Custom preset',
            settings: { columns: { fullname: { show: true, sortIndex: 0 }, group: { show: true, sortIndex: 1 } } }
          }
        ]
      })

      const table = await TableTestingClass.render(props)
      await table.presets.openPresetList()

      expect(table.presets.isPresetSelected('Default preset')).toBe(true)

      table.rerender(<TestTable {...nextProps} />)
      await table.presets.openPresetList()
      await waitFor(() => expect(screen.getByText('Custom preset')).toBeInTheDocument())

      expect(table.presets.isPresetSelected('Custom preset')).toBe(true)
      expect(
        screen.getByText('Custom preset').closest('.ant-dropdown-menu-item')
      ).toHaveTextContent('table.columns.fullname, table.columns.group')
    })

    it('should call onViewSelected', async () => {
      const onViewSelected = jest.fn(() => Promise.resolve())
      const table = await TableTestingClass.render(getProps({
        presets: undefined,
        views: [
          {
            id: 'default-view',
            name: 'Default view',
            description: 'Default view description',
            default: true,
            presets: [
              {
                id: 'preset-a',
                name: 'Preset A',
                default: true,
                system: true,
                settings: {}
              }
            ]
          },
          {
            id: 'custom-view',
            name: 'Custom view',
            description: 'Custom view description',
            presets: [
              {
                id: 'preset-b',
                name: 'Preset B',
                default: true,
                system: true,
                settings: {}
              }
            ]
          }
        ],
        onViewSelected
      }))

      await table.presets.selectView('Custom view')

      await waitFor(() => expect(onViewSelected).toHaveBeenCalledWith('custom-view'))
    })

    it('should call onPresetSelected', async () => {
      const onPresetSelected = jest.fn(() => Promise.resolve())
      const table = await TableTestingClass.render(getProps({ onPresetSelected }))

      await table.presets.selectPreset('Custom preset')

      await waitFor(() => expect(onPresetSelected).toHaveBeenCalledWith('custom-preset'))
    })
  })

  describe('view toolbarActions', () => {
    const toolbarActionsProps = {
      ...defaultProps,
      presets: makePresetsProp(undefined, [
        {
          name: 'Default view',
          description: 'Default view description',
          default: true,
          presets: [
            { name: 'Default preset', default: true, system: true, settings: {} }
          ]
        },
        {
          name: 'Limited view',
          description: 'Limited view description',
          settings: {
            toolbarActions: () => ([
              { type: 'button', key: '1', label: 'Tool 1', testId: 'item-1' },
              { type: 'button', key: '3', label: 'Tool 3', testId: 'item-3' }
            ])
          },
          presets: [
            { name: 'Limited preset', default: true, system: true, settings: {} }
          ]
        }
      ]),
      toolbar: ((): TableToolbarProps<MockRow> => ({
        showColumns: true,
        showGrouping: true,
        left: [
          { type: 'button', key: '1', label: 'Tool 1', testId: 'item-1' },
          { type: 'divider', key: 'divider' },
          { type: 'button', key: '2', label: 'Tool 2', testId: 'item-2' },
          { type: 'button', key: '3', label: 'Tool 3', testId: 'item-3' }
        ]
      }))()
    }

    it('should render all left items when the selected view has no toolbarActions', async () => {
      const table = await TableTestingClass.render(toolbarActionsProps)

      expect(table.toolbar.getCustomItem(1)).toBeInTheDocument()
      expect(table.toolbar.getCustomItem(2)).toBeInTheDocument()
      expect(table.toolbar.getCustomItem(3)).toBeInTheDocument()
    })

    it('should render view-specific toolbarActions instead of the default left items', async () => {
      const table = await TableTestingClass.render(toolbarActionsProps)

      await table.presets.selectView('Limited view')

      expect(table.toolbar.getCustomItem(1)).toBeInTheDocument()
      expect(table.toolbar.getCustomItem(2)).not.toBeInTheDocument()
      expect(table.toolbar.getCustomItem(3)).toBeInTheDocument()
    })

    it('should restore the full left items set after switching to a view without toolbarActions', async () => {
      const table = await TableTestingClass.render(toolbarActionsProps)

      await table.presets.selectView('Limited view')
      expect(table.toolbar.getCustomItem(2)).not.toBeInTheDocument()

      await table.presets.selectView('Default view')
      expect(table.toolbar.getCustomItem(2)).toBeInTheDocument()
    })

    it('should use view toolbarActions instead of async getLeftItems', async () => {
      const table = await TableTestingClass.render({
        ...toolbarActionsProps,
        toolbar: {
          getLeftItems: async () => ([
            { type: 'button', key: 'x', label: 'Custom X', testId: 'item-99' },
            { type: 'button', key: 'y', label: 'Custom Y', testId: 'item-98' }
          ])
        },
        presets: makePresetsProp(undefined, [
          {
            name: 'Default view',
            description: 'Default view description',
            default: true,
            presets: [{ name: 'Default preset', default: true, system: true, settings: {} }]
          },
          {
            name: 'Limited view',
            description: 'Limited view description',
            settings: {
              toolbarActions: () => ([
                { type: 'button', key: 'x', label: 'Custom X', testId: 'item-99' }
              ])
            },
            presets: [{ name: 'Limited preset', default: true, system: true, settings: {} }]
          }
        ])
      })

      expect(table.toolbar.getCustomItem(99)).toBeInTheDocument()
      expect(table.toolbar.getCustomItem(98)).toBeInTheDocument()

      await table.presets.selectView('Limited view')

      expect(table.toolbar.getCustomItem(99)).toBeInTheDocument()
      expect(table.toolbar.getCustomItem(98)).not.toBeInTheDocument()
    })
  })

  describe('view presetActions', () => {
    const props = {
      ...defaultProps,
      presets: makePresetsProp(undefined, [
        {
          name: 'Default view',
          description: 'Default view description',
          default: true,
          settings: {
            presetActions: [
              {
                key: 'share-action',
                name: 'Share',
                onClick: preset => ({ ...preset, name: 'Shared preset' })
              }
            ]
          },
          presets: [
            { name: 'Default preset', default: true, system: true, settings: {} },
            { name: 'Preset A', settings: {} }
          ]
        }
      ])
    }

    it('should render custom preset actions in the preset menu for non-system presets', async () => {
      const table = await TableTestingClass.render(props)

      await table.presets.openPresetMenu('Preset A')

      expect(screen.getByTestId('share-action')).toBeInTheDocument()
    })

    it('should update the preset in the internal state when onClick returns a preset', async () => {
      const table = await TableTestingClass.render(props)

      await table.presets.openPresetMenu('Preset A')
      await act(async () => { fireEvent.click(screen.getByTestId('share-action')!) })

      await table.presets.openPresetList()

      expect(screen.queryByText('Preset A')).not.toBeInTheDocument()
      expect(screen.getByText('Shared preset')).toBeInTheDocument()
    })
  })

  describe('presets survive table re-render', () => {
    it('should not reset user-created presets when columns and dataSource change', async () => {
      const presetsProp = makePresetsProp([
        { name: 'Default preset', default: true, system: true, settings: { pageSize: 5 } }
      ])
      const props = {
        ...defaultProps,
        pagination: {
          total: 100,
          pageSizeOptions: ['5', '10', '20'],
          showSizeChanger: true
        },
        presets: presetsProp
      }

      const table = await TableTestingClass.render(props)

      table.pagination.selectPageSize(10)
      await table.presets.createPreset('My preset')
      await table.presets.openPresetList()
      expect(screen.getByText('My preset')).toBeInTheDocument()

      const nextProps = {
        ...props,
        columns: tableColumns.map((column, index) => ({
          ...column,
          hideColumnAvailable: true,
          title: `${column.title} ${index}`
        })),
        dataSource: [...generatedData.slice(0, 10)]
      }

      table.rerender(<TestTable {...nextProps} />)
      await table.presets.openPresetList()

      await waitFor(() => expect(screen.getByText('My preset')).toBeInTheDocument())
      expect(screen.getByText('Default preset')).toBeInTheDocument()
    })
  })
})
