import {
  createMockDataSourceFunction,
  generatedData,
  MockRow,
  tableColumns,
  TableMockProps
} from '../__mocks__/filtersMockData'

import { TableTestingClass } from './TableTestingClass'

export const DEFAULT_SERVER_PAGE_SIZE = 20
const DEFAULT_SERVER_TEST_ID = 'server-table'

export const spyDataSource = (rows: MockRow[] = generatedData.slice(0, 25)): jest.Mock =>
  jest.fn(createMockDataSourceFunction(rows, tableColumns))

export interface RenderServerResult {
  table: TableTestingClass
  dataSourceFunction: jest.Mock
}

export const renderServer = (
  props: Partial<TableMockProps> = {},
  dataSourceFunction: TableMockProps['dataSourceFunction'] = spyDataSource()
): RenderServerResult => {
  const table = TableTestingClass.render({
    testId: DEFAULT_SERVER_TEST_ID,
    columns: tableColumns,
    dataSource: undefined,
    dataSourceFunction,
    pagination: { pageSize: DEFAULT_SERVER_PAGE_SIZE },
    ...props
  })
  return { table, dataSourceFunction: dataSourceFunction as jest.Mock }
}
