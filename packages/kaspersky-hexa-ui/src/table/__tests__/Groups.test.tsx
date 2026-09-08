import { localization } from '@helpers/localization'
import { ITableProps, TableRecord } from '@src/table'
import { fireEvent, screen, waitFor, within } from '@testing-library/react'
import React from 'react'

import {
  generatedData,
  groups,
  MockRow,
  tableColumns,
  TableMockProps
} from '../__mocks__/filtersMockData'
import { modifyColumns } from '../test-utils/helpers'
import { MODES, renderByMode } from '../test-utils/renderByMode'
import { TableTestingClass } from '../test-utils/TableTestingClass'

// Серверные сценарии (мок dataSourceFunction + debounce) не укладываются в дефолтный таймаут jest.
jest.setTimeout(15000)

type MockRowModified = MockRow & {
  group: {
    someInnerValue: typeof groups[number]
  }
}

const renderTable = <T extends TableRecord = TableRecord> (props: Partial<ITableProps<T>> = {}): { table: TableTestingClass } => {
  const table = TableTestingClass.render<T>({
    pagination: false,
    groupBy: 'group',
    ...props
  })
  return { table }
}

const defaultProps = {
  dataSource: generatedData,
  columns: tableColumns
}

describe('Groups module', () => {
  it('should render table without groups when groupBy is not provided', () => {
    const { table } = renderTable({ ...defaultProps, groupBy: undefined })

    const tableRows = table.rows.getAll()
    expect(tableRows.length).toBeGreaterThan(0)

    expect(table.rows.getGroupTitles()).toHaveLength(0)
  })

  it('should group rows by specified field when defaultGroupBy is provided', () => {
    const { table } = renderTable({ ...defaultProps, groupBy: undefined, defaultGroupBy: 'group' })

    const groupTitles = table.rows.getGroupTitles()

    groups.forEach(group => {
      expect(groupTitles).toContain(group)
    })
  })

  it('should group rows by specified field when both groupBy and defaultGroupBy are provided', () => {
    const { table } = renderTable({ ...defaultProps, defaultGroupBy: 'isTrainee' })

    const groupTitles = table.rows.getGroupTitles()

    groups.forEach(group => {
      expect(groupTitles).toContain(group)
    })
  })

  it('should render custom group titles when groupTitleRender is provided', () => {
    const customGroupTitleRender = (title: string) => <div kl-id="custom-group-title">{title}</div>

    const { table } = renderTable({ ...defaultProps, groupTitleRender: customGroupTitleRender })

    const customTitles = screen.getAllByTestId('custom-group-title')
    expect(customTitles.length).toBeGreaterThan(0)

    const customTitlesInContainer = table.queryAll('[kl-id="custom-group-title"]')
    expect(customTitlesInContainer.length).toBeGreaterThan(0)
  })

  it('should show a group counter in the title when showGroupsCounter is true', () => {
    const columns = modifyColumns(tableColumns, 'group', { showGroupsCounter: true })
    const { table } = renderTable({ ...defaultProps, columns })

    const titles = table.rows.getGroupTitles()
    expect(titles.length).toBeGreaterThan(0)
    expect(titles.every(title => /\d/.test(title))).toBe(true)
  })

  it('should render a group title icon when renderGroupTitleIcon is provided', () => {
    const columns = modifyColumns(tableColumns, 'group', {
      renderGroupTitleIcon: () => <span data-testid="grp-icon" />
    })
    const { table } = renderTable({ ...defaultProps, columns })

    expect(table.queryAll('[data-testid="grp-icon"]').length).toBeGreaterThan(0)
  })

  it('should handle group text using resolveGroupingValue', () => {
    const patchedColumns = modifyColumns<MockRow, MockRowModified>(tableColumns, 'group', {
      resolveGroupingValue: (row) => row.group.someInnerValue,
      render: (value) => value?.someInnerValue
    })
    const patchedData = generatedData.map(({ group, ...row }) => ({ ...row, group: { someInnerValue: group } } as MockRowModified))
    const { table } = renderTable({ columns: patchedColumns, dataSource: patchedData })

    const groupTitle = table.query('.group-title-item')?.textContent
    expect(groupTitle).toBe('Unmanaged')
  })

  it('should use a HIDDEN grouping column config (resolveGroupingValue), not fall back to the raw value', () => {
    // group column is hidden (show: false) but still groupable (forceGroupingAvailable). Its config
    // must reach Groups so grouping resolves via resolveGroupingValue instead of falling back to the
    // raw row value. Without the full column set flowing down, findColumn misses the hidden column
    // and the title degrades to String({ someInnerValue }) === '[object Object]'.
    const patchedColumns = modifyColumns<MockRow, MockRowModified>(tableColumns, 'group', {
      show: false,
      forceGroupingAvailable: true,
      resolveGroupingValue: (row) => row.group.someInnerValue,
      render: (value) => value?.someInnerValue
    })
    const patchedData = generatedData.map(({ group, ...row }) => ({ ...row, group: { someInnerValue: group } } as MockRowModified))
    const { table } = renderTable({ columns: patchedColumns, dataSource: patchedData })

    expect(table.rows.getGroupTitles().length).toBeGreaterThan(0)
    expect(table.query('.group-title-item')?.textContent).toBe('Unmanaged')
  })

  it('should sort groups alphabetically by default when groupComparer is not provided', () => {
    const { table } = renderTable({ ...defaultProps })

    const displayedGroupTitles = table.rows.getGroupTitles()
    const ascSortedGroups = [...groups].sort()

    displayedGroupTitles.forEach((group, index) => {
      expect(group).toBe(ascSortedGroups[index])
    })
  })

  it('should sort groups using custom comparer', () => {
    const descendingComparer = (valueA: any, valueB: any): number => -valueA.localeCompare(valueB)

    const { table } = renderTable({ ...defaultProps, customGroupSorter: descendingComparer })

    const displayedGroupTitles = table.rows.getGroupTitles()
    const descSortedGroups = [...groups].sort((a, b) => -a.localeCompare(b))

    displayedGroupTitles.forEach((group, index) => {
      expect(group).toBe(descSortedGroups[index])
    })
  })

  it('should handle empty group values with default title', () => {
    const dataWithEmptyValues: MockRow[] = [
      ...generatedData,
      {
        _uniqueId: 'empty-group',
        key: 'empty-group-key',
        group: '',
        fullname: 'Test User',
        salary: 100000,
        isTrainee: false,
        dateHired: '2024-01-01',
        datetime: '2024-01-01',
        ip: 0,
        details: { email: 'test@test.com', city: 'Moscow' }
      },
      {
        _uniqueId: 'null-group',
        key: 'null-group-key',
        group: null as any,
        fullname: 'Test User 2',
        salary: 100000,
        isTrainee: false,
        dateHired: '2024-01-01',
        datetime: '2024-01-01',
        ip: 0,
        details: { email: 'test2@test.com', city: 'Moscow' }
      }
    ]

    const { table } = renderTable({ ...defaultProps, dataSource: dataWithEmptyValues })

    const groupTitles = table.rows.getGroupTitles()

    expect(groupTitles).toContain('Other')
  })

  it('should list only groupingAvailable columns in the grouping selector', async () => {
    const table = TableTestingClass.render({
      columns: tableColumns,
      dataSource: generatedData.slice(0, 10),
      toolbar: { showColumns: false, showGrouping: true }
    })

    await table.columnSettings.open()
    const groupingSelector = document.querySelector('.grouping-item') as HTMLElement

    expect(groupingSelector.textContent).toContain('table.columns.group') // groupingAvailable: true
    expect(groupingSelector.textContent).toContain('table.columns.isTrainee') // groupingAvailable: true
    expect(groupingSelector.textContent).not.toContain('table.columns.fullname') // без groupingAvailable
  })

  it('should call onGroupByChange when groupBy is set via the settings grouping selector', async () => {
    const onGroupByChange = jest.fn()
    const table = TableTestingClass.render({
      columns: tableColumns,
      dataSource: generatedData.slice(0, 10),
      groupBy: undefined,
      toolbar: { showColumns: false, showGrouping: true },
      onGroupByChange
    })

    await table.columnSettings.open()
    const groupingSelector = document.querySelector('.grouping-item') as HTMLElement
    fireEvent.click(within(groupingSelector).getByText('table.columns.group'))
    table.columnSettings.apply()

    expect(onGroupByChange).toHaveBeenCalledWith('group')
  })

  it('should reset grouping to none via the settings grouping selector', async () => {
    const onGroupByChange = jest.fn()
    const table = TableTestingClass.render({
      columns: tableColumns,
      dataSource: generatedData.slice(0, 10),
      pagination: false,
      groupBy: 'group',
      toolbar: { showColumns: false, showGrouping: true },
      onGroupByChange
    })
    expect(table.rows.getGroupTitles().length).toBeGreaterThan(0)

    await table.columnSettings.open()
    const groupingSelector = document.querySelector('.grouping-item') as HTMLElement
    const noGroupingText = localization['en-us'].translation.table.columnsSettings.noGrouping
    fireEvent.click(within(groupingSelector).getByText(noGroupingText))
    table.columnSettings.apply()

    await waitFor(() => expect(table.rows.getGroupTitles()).toHaveLength(0))
    expect(onGroupByChange).toHaveBeenCalledWith('')
  })
})

describe('Grouping — expandableGrouping', () => {
  const data = generatedData.slice(0, 30)
  const columns = modifyColumns(tableColumns, 'group', { expandableGrouping: true })

  it('should toggle a group open/closed on title click', async () => {
    const { table } = renderTable({ columns, dataSource: data })

    const groupTitle = () => table.queryAll('.group-title-item').find(el => el.textContent?.includes(data[0].group))

    expect(table.rows.getByKey(data[0].key)).not.toBeNull()

    fireEvent.click(groupTitle()!)
    await waitFor(() => expect(table.rows.getByKey(data[0].key)).toBeNull())

    fireEvent.click(groupTitle()!)
    await table.rows.findByKey(data[0].key)
  })

  it('should apply sortGroupsFunction', () => {
    const sortGroupsFunction = jest.fn(() => 0)

    renderTable({ columns: modifyColumns(columns, 'group', { sortGroupsFunction }), dataSource: data })

    expect(sortGroupsFunction).toHaveBeenCalled()
  })
})

describe('Grouping — isClientGroupSortingDisabled (data pre-grouped by server)', () => {
  const data = generatedData.slice(0, 30)
  const dataOrder = [...new Set(data.map(row => row.group))]

  it('should keep groups in data order when set via the isClientGroupSortingDisabled prop', () => {
    const { table } = renderTable({ ...defaultProps, dataSource: data, isClientGroupSortingDisabled: true })

    expect(table.rows.getGroupTitles()).toEqual(dataOrder)
  })

  it('should keep groups in data order when the flag comes from the server response', async () => {
    const dataSourceFunction: TableMockProps['dataSourceFunction'] = jest.fn(async () => ({
      rows: data,
      totalCount: data.length,
      isClientGroupsSortingDisabled: true
    }))
    const table = TableTestingClass.render({
      columns: tableColumns,
      dataSource: undefined,
      dataSourceFunction,
      groupBy: 'group',
      pagination: { pageSize: 100 }
    })
    await table.rows.waitForData()

    await waitFor(() => expect(table.rows.getGroupTitles()).toEqual(dataOrder))
  })
})

describe.each(MODES)('Table grouping - $description', ({ mode }) => {
  it('should group rows by the groupBy column and render its group titles', async () => {
    const data = generatedData.slice(0, 30)
    const expectedGroups = [...new Set(data.map(row => row.group))]

    const { table, dataSourceFunction } = await renderByMode(mode, data, {
      columns: tableColumns,
      groupBy: 'group',
      pagination: mode === 'server' ? { pageSize: 100 } : false
    })

    await waitFor(() => {
      const titles = table.rows.getGroupTitles()
      expectedGroups.forEach(group => expect(titles).toContain(group))
    })

    if (mode === 'server') {
      const dsf = dataSourceFunction as jest.Mock
      await waitFor(() => expect(dsf.mock.lastCall?.[0]?.params.groupBy).toBe('group'))
    }
  })
})
