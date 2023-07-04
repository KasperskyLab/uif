import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Tabs } from '../Tabs'
import { ITabsProps } from '../types'

const defaultProps = {
  klId: 'test-tabs',
  children: (
    <>
      <Tabs.TabPane tab="Tab" key="1">
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab" key="3">
        Content of Tab Pane 3
      </Tabs.TabPane>
    </>
  )
}

const getTabs = (klId = defaultProps.klId) => screen.getByTestId(klId)

const DefaultTabs = (props: ITabsProps) => <Tabs {...defaultProps} {...props} />

describe('Tabs', () => {
  test('should render', () => {
    render(<DefaultTabs />)
    expect(getTabs()).toBeInTheDocument()
  })

  test('should have card className if prop type is card', () => {
    render(<DefaultTabs type='card' />)
    expect(getTabs()).toHaveClass('ant-tabs-card')
  })

  test('should have left className if tapPosition is left', () => {
    render(<DefaultTabs tabPosition='left' />)
    expect(getTabs()).toHaveClass('ant-tabs-left')
  })

  test('should set active element according to activeKey prop', () => {
    render(<DefaultTabs activeKey='1' />)
    const tabsList = getTabs().querySelector('.ant-tabs-nav-list')?.querySelectorAll('.ant-tabs-tab')
    expect(tabsList?.[0]).toHaveClass('ant-tabs-tab-active')
  })

  test('should set active element according to defaultActiveKey prop', () => {
    render(<DefaultTabs defaultActiveKey='1' />)
    const tabsList = getTabs().querySelector('.ant-tabs-nav-list')?.querySelectorAll('.ant-tabs-tab')
    expect(tabsList).toBeDefined()
    expect(tabsList?.[0]).toHaveClass('ant-tabs-tab-active')
  })

  test('should call onChange function when active tab is changed', () => {
    const onChange = jest.fn()
    render(<DefaultTabs defaultActiveKey='1' onChange={onChange} />)
    const tabsList = getTabs().querySelector('.ant-tabs-nav-list')?.querySelectorAll('.ant-tabs-tab')
    const secondTab = tabsList?.[1] as HTMLDivElement
    expect(secondTab).toBeDefined()
    act(() => {
      secondTab.click()
    })
    expect(onChange).toHaveBeenCalled()
  })

  test('should call onTabClick function when any tab is clicked', () => {
    const onTabClick = jest.fn()
    render(<DefaultTabs defaultActiveKey='1' onTabClick={onTabClick} />)
    const tabsList = getTabs().querySelector('.ant-tabs-nav-list')?.querySelectorAll('.ant-tabs-tab')
    const secondTab = tabsList?.[1] as HTMLDivElement
    expect(secondTab).toBeDefined()
    act(() => {
      secondTab.click()
    })
    expect(onTabClick).toHaveBeenCalled()
  })

  test('should have inline styles when style prop is passed', () => {
    const style = {
      color: 'red'
    }
    render(<DefaultTabs style={style} />)
    expect(getTabs()).toHaveStyle(style)
  })

  test('should destroy inactive tab content with destroyInactiveTabPane true', () => {
    render(<DefaultTabs defaultActiveKey='1' destroyInactiveTabPane />)
    const tabsList = getTabs().querySelector('.ant-tabs-nav-list')?.querySelectorAll('.ant-tabs-tab')
    const secondTab = tabsList?.[1] as HTMLDivElement
    expect(secondTab).toBeDefined()
    act(() => {
      secondTab.click()
    })
    expect(screen.queryByText('Content of Tab Pane 1')).not.toBeInTheDocument()
  })
})
