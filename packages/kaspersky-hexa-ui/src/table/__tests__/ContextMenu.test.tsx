import { generatedData, tableColumns } from '../__mocks__/filtersMockData'
import { getContextParams } from '../modules/ContextMenu'
import { GetLeftItemsProps } from '../modules/ToolbarIntegration/types'
import { TableTestingClass } from '../test-utils/TableTestingClass'
import { ITableProps } from '../types'

const defaultProps = {
  columns: tableColumns,
  dataSource: generatedData
}

describe('Table ContextMenu module', () => {
  const toolbar = {
    left: [
      {
        type: 'button' as const,
        key: '1',
        label: 'Action 1',
        testId: 'action-1'
      },
      {
        type: 'divider' as const,
        key: 'divider'
      },
      {
        type: 'button' as const,
        key: '2',
        label: 'Action 2',
        testId: 'action-2'
      }
    ]
  }

  it('should render context menu', async () => {
    const table = TableTestingClass.render({ ...defaultProps, contextMenu: () => toolbar.left, toolbar })

    table.contextMenu.openOnCell(0)

    expect(await table.contextMenu.getMenu()).toBeInTheDocument()
    expect(table.contextMenu.getAction('action-2')).toBeInTheDocument()
  })

  it('should filter out hidden and disabled context menu items', async () => {
    const contextMenu = () => ([
      {
        type: 'button' as const,
        key: 'a',
        label: 'A',
        testId: 'ctx-a'
      },
      {
        type: 'button' as const,
        key: 'hidden',
        label: 'H',
        testId: 'ctx-hidden',
        visible: false
      },
      {
        type: 'button' as const,
        key: 'dis',
        label: 'D',
        testId: 'ctx-dis',
        disabled: true
      },
      {
        type: 'button' as const,
        key: 'b',
        label: 'B',
        testId: 'ctx-b'
      }
    ])

    const table = TableTestingClass.render({ ...defaultProps, contextMenu })

    table.contextMenu.openOnCell(0)
    await table.contextMenu.getMenu()

    expect(table.contextMenu.getAction('ctx-a')).toBeInTheDocument()
    expect(table.contextMenu.getAction('ctx-b')).toBeInTheDocument()
    expect(table.contextMenu.getAction('ctx-hidden')).not.toBeInTheDocument()
    expect(table.contextMenu.getAction('ctx-dis')).not.toBeInTheDocument()
  })

  it('should render context menu for the selected rows', async () => {
    const mockContextMenu = jest.fn().mockReturnValue(toolbar.left)
    const table = TableTestingClass.render({
      ...defaultProps,
      contextMenu: mockContextMenu,
      rowSelection: { selectedRowKeys: [generatedData[0].key, generatedData[1].key] },
      toolbar
    })

    table.contextMenu.openOnRow(generatedData[0].key)
    await table.contextMenu.getMenu()

    expect(mockContextMenu).toHaveBeenCalledTimes(1)

    const calledWith = mockContextMenu.mock.calls[0][0]

    expect(calledWith).toHaveLength(2)
    expect(calledWith).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ key: generatedData[0].key }),
        expect.objectContaining({ key: generatedData[1].key })
      ])
    )
    expect(table.contextMenu.getSelectedCount()).toBe(2)
  })

  it('should render context menu for the clicked row', async () => {
    const mockContextMenu = jest.fn().mockReturnValue(toolbar.left)
    const table = TableTestingClass.render({
      ...defaultProps,
      contextMenu: mockContextMenu,
      rowSelection: { selectedRowKeys: [generatedData[0].key, generatedData[1].key] },
      toolbar
    })

    table.contextMenu.openOnRow(generatedData[2].key)
    await table.contextMenu.getMenu()

    expect(mockContextMenu).toHaveBeenCalledTimes(1)

    const calledWith = mockContextMenu.mock.calls[0][0]

    expect(calledWith).toHaveLength(1)
    expect(calledWith).toEqual(expect.arrayContaining([expect.objectContaining({ key: generatedData[2].key })]))
    expect(table.contextMenu.getSelectedCount()).toBeNull()
  })

  describe('getContextParams', () => {
    const mockPagination: ITableProps<{ key: string }>['pagination'] = {
      total: 100
    }

    const mockDataSource = new Array(5).fill(0).map((_, i) => ({ key: String(i) }))

    const createMockToolbarContext = (params: Partial<GetLeftItemsProps<{ key: string }>> = {}): GetLeftItemsProps<{ key: string }> => ({
      dataSource: mockDataSource,
      selectedRowKeys: [],
      deselectedRowKeys: [],
      isSelectedAll: false,
      ...params
    })

    it.each([
      [
        mockDataSource[2],
        createMockToolbarContext({ selectedRowKeys: ['2', '3'] }),
        [
          [mockDataSource[2], mockDataSource[3]],
          'sameContext',
          2
        ]
      ],
      [
        mockDataSource[1],
        createMockToolbarContext({ selectedRowKeys: ['2', '3'] }),
        [
          [mockDataSource[1]],
          createMockToolbarContext({ selectedRowKeys: ['1'] }),
          1
        ]
      ],
      [
        mockDataSource[1],
        createMockToolbarContext({ isSelectedAll: true }),
        [
          [],
          'sameContext',
          mockPagination.total
        ]
      ],
      [
        mockDataSource[1],
        createMockToolbarContext({
          deselectedRowKeys: ['2', '3'],
          isSelectedAll: true,
          selectedRowKeys: ['0', '1', '4']
        }),
        [
          [mockDataSource[0], mockDataSource[1], mockDataSource[4]],
          'sameContext',
          mockPagination.total! - 2
        ]
      ],
      [
        mockDataSource[2],
        createMockToolbarContext({
          deselectedRowKeys: ['2', '3'],
          isSelectedAll: true
        }),
        [
          [mockDataSource[2]],
          createMockToolbarContext({
            deselectedRowKeys: [],
            isSelectedAll: false,
            selectedRowKeys: ['2']
          }),
          1
        ]
      ]
    ])('%#', (clickedRow, toolbarContext, expected) => {
      const [contextRows, context, count] = getContextParams(
        clickedRow,
        toolbarContext,
        mockPagination
      )

      expect(contextRows).toEqual(expected[0])
      expect(context).toEqual(expected[1] === 'sameContext' ? toolbarContext : expected[1])
      expect(count).toBe(expected[2])
    })
  })
})
