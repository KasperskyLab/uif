import { render, screen, act, waitFor } from '@testing-library/react'
import { Toolbar } from '../Toolbar'
import { ThemeKey } from '@design-system/types'
import { ThemeProvider } from '@design-system/theme'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import React from 'react'
import { ToolbarItems } from '../types'
import userEvent from '@testing-library/user-event'
import { Search } from '@src/search'
import { ConfigProvider } from '@design-system/context'

describe('Toolbar ', () => {
  const itemsLeft: ToolbarItems[] = [
    {
      type: 'button',
      key: '1',
      label: 'Tool 1',
      onClick: () => console.log('Tool 1')
    },
    {
      type: 'button',
      key: '2',
      label: 'Tool 2',
      onClick: () => console.log('Tool 2')
    },
    {
      type: 'button',
      key: '3',
      label: 'Tool 3',
      onClick: () => console.log('Tool 3')
    },
    {
      type: 'button',
      key: '4',
      label: 'Tool 4',
      onClick: () => console.log('Tool 4')
    }
  ]

  const itemsRight: ToolbarItems[] = [
    {
      type: 'children',
      key: '0',
      children: (
        <Toolbar.CollapsibleSearch
          onChange={(value) => { console.log(value) }}
          klId='kl-collapsible-search-item'
        />
      )
    },
    {
      type: 'children',
      key: '1',
      children: (
        <Search
          onChange={(value) => { console.log(value) }}
          klId='kl-search-item'
        />
      )
    },
    {
      type: 'children',
      key: '2',
      children: (
        <Toolbar.FilterItem klId='kl-filter-item' onClick={() => console.log('filter')} />
      )
    },
    {
      type: 'children',
      key: '3',
      children: <Toolbar.SettingsItem klId='kl-settings-item' onClick={() => console.log('settings')} />
    },
    {
      type: 'children',
      key: '4',
      children: <Toolbar.ScaleItem klId='kl-scale-item' onClick={() => console.log('scale')} />
    }
  ]

  const klId = 'toolbar-id'
  const testId = 'toolbar-id'

  test('should render', () => {
    const { container } = render(<Toolbar klId={klId} testId={testId} />)

    expect(container.querySelector(`[kl-id="${klId}"]`)).toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
  })

  test('should render toolbar items in left part', () => {
    render(
      <ThemeProvider theme={ThemeKey.Light} >
        <Toolbar testId={testId} left={itemsLeft}/>
      </ThemeProvider>
    )

    const buttonTool = screen.getByText('Tool 1')
    expect(buttonTool).toBeInTheDocument()
  })
  test('should correctly render toolbar items with maxLeftItemsCount', () => {
    render(
      <ThemeProvider theme={ThemeKey.Light} >
        <Toolbar testId={testId} left={itemsLeft} leftLimit={2}/>
      </ThemeProvider>
    )

    const buttonTool2 = screen.queryByText('Tool 2')
    expect(buttonTool2).toBeInTheDocument()

    const buttonTool3 = screen.queryByText('Tool 3')
    expect(buttonTool3).not.toBeInTheDocument()
  })
  test('should correctly render items in dropdown with maxLeftItemsCount', async () => {
    const { container } = render(
      <ThemeProvider theme={ThemeKey.Light} >
        <Toolbar testId={testId} left={itemsLeft} leftLimit={2}/>
      </ThemeProvider>
    )

    const dropdown = container.querySelector('[kl-id="toolbar-dropdown-button"]')!
    expect(dropdown).toBeInTheDocument()

    expect(screen.queryByText('Tool 1')).toBeInTheDocument()
    expect(screen.queryByText('Tool 2')).toBeInTheDocument()
    expect(screen.queryByText('Tool 3')).not.toBeInTheDocument()
    expect(screen.queryByText('Tool 4')).not.toBeInTheDocument()

    act(() => userEvent.click(dropdown))

    await waitFor(() => expect(screen.queryByText('Tool 1')).toBeInTheDocument())
    await waitFor(() => expect(screen.queryByText('Tool 2')).toBeInTheDocument())
    await waitFor(() => expect(screen.queryByText('Tool 3')).toBeInTheDocument())
    await waitFor(() => expect(screen.queryByText('Tool 4')).toBeInTheDocument())
  })
  test('should correctly render items without dropdown', async () => {
    const { container } = render(
      <ThemeProvider theme={ThemeKey.Light} >
        <Toolbar testId={testId} left={itemsLeft}/>
      </ThemeProvider>
    )
    const dropdown = container.querySelector('[kl-id="toolbar-dropdown-button"]')!
    expect(dropdown).not.toBeInTheDocument()
    expect(screen.queryByText('Tool 1')).toBeInTheDocument()
    expect(screen.queryByText('Tool 2')).toBeInTheDocument()
    expect(screen.queryByText('Tool 3')).toBeInTheDocument()
    expect(screen.queryByText('Tool 4')).toBeInTheDocument()
  })
  test('should render toolbar items in right part', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <Toolbar testId={testId} left={itemsLeft} right={itemsRight}/>
      </ConfigProvider>
    )

    const collapsibleSearch = container.querySelector('[kl-id="kl-collapsible-search-item"]')
    const search = container.querySelector('[kl-id="kl-search-item"]')
    const btnFilter = container.querySelector('[kl-id="kl-filter-item"]')!
    const btnSettings = container.querySelector('[kl-id="kl-settings-item"]')!
    const btnScale = container.querySelector('[kl-id="kl-scale-item"]')!

    expect(collapsibleSearch).toBeInTheDocument()
    expect(search).toBeInTheDocument()
    expect(btnFilter).toBeInTheDocument()
    expect(btnSettings).toBeInTheDocument()
    expect(btnScale).toBeInTheDocument()
  })

  // Codium AI
  test('should render toolbar with left and right items correctly', () => {
    const itemsLeft: ToolbarItems[] = [
      { type: 'button', key: '1', label: 'Tool 1' },
      { type: 'button', key: '2', label: 'Tool 2' }
    ]
    const itemsRight: ToolbarItems[] = [
      { type: 'button', key: '3', label: 'Tool 3' }
    ]
    render(<Toolbar left={itemsLeft} right={itemsRight} />)
    expect(screen.getByText('Tool 1')).toBeInTheDocument()
    expect(screen.getByText('Tool 2')).toBeInTheDocument()
    expect(screen.getByText('Tool 3')).toBeInTheDocument()
  })

  test('should handle visibility of toolbar items correctly', () => {
    const itemsLeft: ToolbarItems[] = [
      { type: 'button', key: '1', label: 'Visible Tool', visible: true },
      { type: 'button', key: '2', label: 'Hidden Tool', visible: false }
    ]
    render(<Toolbar left={itemsLeft} />)
    expect(screen.getByText('Visible Tool')).toBeInTheDocument()
    expect(screen.queryByText('Hidden Tool')).not.toBeInTheDocument()
  })

  test('should render correctly when no left or right items provided', () => {
    const { container } = render(<Toolbar />)
    expect(container.firstChild).toBeInTheDocument()
  })

  test('should render toolbar items when all have visible set to false', () => {
    const itemsLeft: ToolbarItems[] = [
      { type: 'button', key: '1', label: 'Tool 1', visible: false },
      { type: 'button', key: '2', label: 'Tool 2', visible: false }
    ]
    const { container } = render(<Toolbar left={itemsLeft} testId={testId} />)
    expect(screen.queryByText('Tool 1')).not.toBeInTheDocument()
    expect(screen.queryByText('Tool 2')).not.toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
  })
})
