import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { generatedData, tableColumns } from '../__mocks__/filtersMockData'
import { TableTestingClass } from '../test-utils/TableTestingClass'
import { TableToolbarProps } from '../types'

const defaultProps = {
  columns: tableColumns,
  dataSource: generatedData
}

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
    const table = TableTestingClass.render(defaultProps)

    expect(table.toolbar.getRoot()).not.toBeInTheDocument()
  })

  it('should render toolbar with all elements', () => {
    const table = TableTestingClass.render({ ...defaultProps, toolbar: toolbarWithAllElements })

    expect(table.toolbar.getRoot()).toBeInTheDocument()
    expect(table.toolbar.getCustomItem(1)).toBeInTheDocument()
    expect(table.toolbar.getCustomItem(2)).toBeInTheDocument()
    expect(table.toolbar.getFilterSidebarButton()).toBeInTheDocument()
    expect(table.toolbar.getRefreshButton()).toBeInTheDocument()
    expect(table.toolbar.getSettingsButton()).toBeInTheDocument()
    expect(table.toolbar.getImportExportButton()).toBeInTheDocument()
  })

  it('should render toolbar without refresh button', () => {
    const table = TableTestingClass.render({
      ...defaultProps,
      toolbar: {
        ...toolbarWithAllElements,
        onRefresh: undefined
      }
    })

    expect(table.toolbar.getRefreshButton()).not.toBeInTheDocument()
  })

  it('should call refresh callback when refresh button is clicked', () => {
    const refreshCallback = jest.fn()

    const table = TableTestingClass.render({
      ...defaultProps,
      toolbar: {
        ...toolbarWithAllElements,
        onRefresh: refreshCallback
      }
    })

    userEvent.click(table.toolbar.getRefreshButton() as Element)

    expect(refreshCallback).toHaveBeenCalledTimes(1)
  })

  it('should call import export callbacks when buttons are clicked', () => {
    const onClick = jest.fn()
    const onImport = jest.fn()
    const onExport = jest.fn()

    const table = TableTestingClass.render({
      ...defaultProps,
      toolbar: {
        ...toolbarWithAllElements,
        importExportButton: {
          dropdown: true,
          onClick,
          onImport,
          onExport
        }
      }
    })

    userEvent.click(table.toolbar.getImportExportButton() as Element)

    expect(onClick).toHaveBeenCalledTimes(1)

    userEvent.click(screen.getByText('Import'))
    expect(onImport).toHaveBeenCalledTimes(1)

    userEvent.click(table.toolbar.getImportExportButton() as Element)

    userEvent.click(screen.getByText('Export'))
    expect(onExport).toHaveBeenCalledTimes(1)
  })

  it('should render the settings button when only the grouping tab is enabled', () => {
    const table = TableTestingClass.render({ ...defaultProps, toolbar: { showColumns: false, showGrouping: true } })

    expect(table.toolbar.getSettingsButton()).toBeInTheDocument()
  })

  it('should not render the settings button when both columns and grouping tabs are disabled', () => {
    const table = TableTestingClass.render({ ...defaultProps, toolbar: { showColumns: false, showGrouping: false } })

    expect(table.toolbar.getSettingsButton()).not.toBeInTheDocument()
  })

  it('should render async getLeftItems in the toolbar', async () => {
    const getLeftItems: TableToolbarProps['getLeftItems'] = async () => ([
      {
        type: 'button',
        key: 'x',
        label: 'Custom',
        testId: 'item-99'
      }
    ])
    const table = TableTestingClass.render({ ...defaultProps, toolbar: { getLeftItems } })

    await waitFor(() => expect(table.toolbar.getCustomItem(99)).toBeInTheDocument())
  })

  it('should collapse the search behind a toggle icon when collapsibleSearch is true', () => {
    TableTestingClass.render({ ...defaultProps, toolbar: { showSearch: true, collapsibleSearch: true } })

    expect(document.querySelector('.hexa-ui-collapsible-search-hidden')).toBeInTheDocument()
    expect(document.querySelector('.hexa-ui-collapsible-search')).not.toBeInTheDocument()

    const toggleInput = document.querySelector('[data-testid="toolbar-search-icon-input"]') as HTMLElement
    expect(toggleInput).toBeInTheDocument()

    fireEvent.click(toggleInput)
    expect(document.querySelector('.hexa-ui-collapsible-search')).toBeInTheDocument()
  })

  it('should append custom elements returned by the right callback', () => {
    const right: TableToolbarProps['right'] = existing => [
      ...existing,
      <button key="custom" data-testid="right-custom">Custom right</button>
    ]
    const table = TableTestingClass.render({ ...defaultProps, toolbar: { showColumns: true, right } })

    expect(table.query('[data-testid="right-custom"]')).toBeInTheDocument()
  })
})
