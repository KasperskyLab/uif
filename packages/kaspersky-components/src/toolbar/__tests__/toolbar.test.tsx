import { render, screen, act, waitFor } from '@testing-library/react'
import { Toolbar } from '../Toolbar'
import { ThemeKey } from '../../../design-system/types'
import { ThemeProvider } from '../../../design-system/theme'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import React from 'react'
import { ToolbarItems, ToolbarItemKey } from '../types'
import userEvent from '@testing-library/user-event'
import { Search } from '../../search/Search'
import { ConfigProvider } from '../../../design-system/context'
describe('Toolbar ', () => {
  const itemsLeft: ToolbarItems[] = [
    {
      type: ToolbarItemKey.BUTTON,
      key: '1',
      label: 'Tool 1',
      onClick: () => console.log('Tool 1')
    },
    {
      type: ToolbarItemKey.BUTTON,
      key: '2',
      label: 'Tool 2',
      onClick: () => console.log('Tool 2')
    },
    {
      type: ToolbarItemKey.BUTTON,
      key: '3',
      label: 'Tool 3',
      onClick: () => console.log('Tool 3')
    },
    {
      type: ToolbarItemKey.BUTTON,
      key: '4',
      label: 'Tool 4',
      onClick: () => console.log('Tool 4')
    }
  ]

  const itemsRight: ToolbarItems[] = [
    {
      type: ToolbarItemKey.CHILDREN,
      key: '1',
      children: (
        <Search.WithIconRight
          onChange={(value) => {
            console.log(value)
          }}
        />
      )
    },
    {
      type: ToolbarItemKey.CHILDREN,
      key: '2',
      children: (
        <Toolbar.FilterItem klId='kl-filter-item' onClick={() => console.log('filter')} />
      )
    },
    {
      type: ToolbarItemKey.CHILDREN,
      key: '3',
      children: <Toolbar.SettingsItem klId='kl-settings-item' onClick={() => console.log('settings')} />
    },
    {
      type: ToolbarItemKey.CHILDREN,
      key: '4',
      children: <Toolbar.ScaleItem klId='kl-scale-item' onClick={() => console.log('scale')} />
    }
  ]

  const componentId = 'toolbar-id'
  test('should recieve componentId prop', () => {
    const { container } = render(
      <ThemeProvider theme={ThemeKey.Light} >
        <Toolbar componentId={componentId}/>
      </ThemeProvider>
    )
    const toolbar = container.querySelector(
      `[data-component-id="${componentId}"]`
    )
    expect(toolbar).toBeInTheDocument()
  })
  test('should render toolbar items in left part', () => {
    render(
      <ThemeProvider theme={ThemeKey.Light} >
        <Toolbar componentId={componentId} left={itemsLeft}/>
      </ThemeProvider>
    )

    const buttonTool = screen.getByText('Tool 1')
    expect(buttonTool).toBeInTheDocument()
  })

  test('should correctly render toolbar items with maxLeftItemsCount', () => {
    render(
      <ThemeProvider theme={ThemeKey.Light} >
        <Toolbar componentId={componentId} left={itemsLeft} leftLimit={2}/>
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
        <Toolbar componentId={componentId} left={itemsLeft} leftLimit={2}/>
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
        <Toolbar componentId={componentId} left={itemsLeft}/>
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
        <Toolbar componentId={componentId} left={itemsLeft} right={itemsRight}/>
      </ConfigProvider>
    )

    const btnFilter = container.querySelector('[kl-id="kl-filter-item"]')!
    const btnSettings = container.querySelector('[kl-id="kl-settings-item"]')!
    const btnScale = container.querySelector('[kl-id="kl-scale-item"]')!

    expect(btnFilter).toBeInTheDocument()
    expect(btnSettings).toBeInTheDocument()
    expect(btnScale).toBeInTheDocument()
  })
})
