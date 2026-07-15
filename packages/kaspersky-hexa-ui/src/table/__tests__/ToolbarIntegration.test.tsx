import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { Table } from '../test-utils/shared'
import { TableToolbarProps } from '../types'

describe('Table ToolbarIntegration module', () => {
  const toolbarWithAllElements: TableToolbarProps = {
    left: [
      {
        type: 'button',
        key: '1',
        label: 'Tool 1',
        disabled: true,
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
        testId: 'item-2'
      }
    ],
    showSearch: true,
    showFilterSidebar: true,
    onRefresh: jest.fn(),
    showColumns: true,
    importExportButton: {
      dropdown: true,
      onClick: jest.fn(),
      onImport: jest.fn(),
      onExport: jest.fn()
    }
  }

  it('should not render toolbar', () => {
    const { container } = render(<Table />)

    expect(container.querySelector('[data-testid="table-toolbar"]')).not.toBeInTheDocument()
  })

  it('should render toolbar with all elements', () => {
    const { container } = render(<Table toolbar={toolbarWithAllElements} />)

    expect(container.querySelector('[data-testid="table-toolbar"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="item-1"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="item-2"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="table-filter-sidebar"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="table-refresh-button"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="table-settings"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="table-import-export"]')).toBeInTheDocument()
  })

  it('should render toolbar without refresh button', () => {
    const { container } = render(
      <Table
        toolbar={{
          ...toolbarWithAllElements,
          onRefresh: undefined
        }}
      />
    )

    expect(container.querySelector('[data-testid="table-refresh-button"]')).not.toBeInTheDocument()
  })

  it('should call refresh callback when refresh button is clicked', () => {
    const refreshCallback = jest.fn()

    const { container } = render(
      <Table
        toolbar={{
          ...toolbarWithAllElements,
          onRefresh: refreshCallback
        }}
      />
    )

    userEvent.click(container.querySelector('[data-testid="table-refresh-button"]') as Element)

    expect(refreshCallback).toHaveBeenCalledTimes(1)
  })

  it('should call import export callbacks when buttons are clicked', () => {
    const onClick = jest.fn()
    const onImport = jest.fn()
    const onExport = jest.fn()

    const { container } = render(
      <Table
        toolbar={{
          ...toolbarWithAllElements,
          importExportButton: {
            dropdown: true,
            onClick,
            onImport,
            onExport
          }
        }}
      />
    )

    userEvent.click(container.querySelector('[data-testid="table-import-export"]') as Element)

    expect(onClick).toHaveBeenCalledTimes(1)

    userEvent.click(screen.getByText('Import'))
    expect(onImport).toHaveBeenCalledTimes(1)

    userEvent.click(container.querySelector('[data-testid="table-import-export"]') as Element)

    userEvent.click(screen.getByText('Export'))
    expect(onExport).toHaveBeenCalledTimes(1)
  })
})
