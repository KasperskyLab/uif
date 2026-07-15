import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { getContextParams } from '../modules/ContextMenu'
import { GetLeftItemsProps } from '../modules/ToolbarIntegration/types'
import { Table } from '../test-utils/shared'
import { ITableProps } from '../types'

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
    const { baseElement } = render(
      <Table
        contextMenu={() => toolbar.left}
        toolbar={toolbar}
      />
    )

    fireEvent.contextMenu(baseElement.querySelector('td')!)

    expect(await screen.findByTestId('table-context-menu')).toBeInTheDocument()
    expect(baseElement.querySelector(
      '[data-testid="table-context-menu"] [data-testid="action-2"]'
    )).toBeInTheDocument()
  })

  it('should render context menu for the selected rows', async () => {
    const mockContextMenu = jest.fn().mockReturnValue(toolbar.left)
    const { baseElement } = render(
      <Table
        contextMenu={mockContextMenu}
        rowSelection={{ selectedRowKeys: [1, 2] }}
        toolbar={toolbar}
      />
    )

    fireEvent.contextMenu(baseElement.querySelector('tr[data-row-key="1"] td')!)
    await screen.findByTestId('table-context-menu')

    expect(mockContextMenu).toHaveBeenCalledTimes(1)

    const calledWith = mockContextMenu.mock.calls[0][0]

    expect(calledWith).toHaveLength(2)
    expect(calledWith).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ key: 1 }),
        expect.objectContaining({ key: 2 })
      ])
    )
    expect(
      baseElement.querySelector('[data-testid="table-context-menu"]')?.textContent
    ).toContain('Selected: 2')
  })

  it('should render context menu for the clicked row', async () => {
    const mockContextMenu = jest.fn().mockReturnValue(toolbar.left)
    const { baseElement } = render(
      <Table
        contextMenu={mockContextMenu}
        rowSelection={{ selectedRowKeys: [1, 2] }}
        toolbar={toolbar}
      />
    )

    fireEvent.contextMenu(baseElement.querySelector('tr[data-row-key="3"] td')!)
    await screen.findByTestId('table-context-menu')

    expect(mockContextMenu).toHaveBeenCalledTimes(1)

    const calledWith = mockContextMenu.mock.calls[0][0]

    expect(calledWith).toHaveLength(1)
    expect(calledWith).toEqual(expect.arrayContaining([expect.objectContaining({ key: 3 })]))
    expect(
      baseElement.querySelector('[data-testid="table-context-menu"]')?.textContent
    ).not.toContain('Selected')
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
