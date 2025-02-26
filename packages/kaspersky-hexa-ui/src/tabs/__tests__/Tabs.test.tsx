import { ConfigProvider } from '@design-system/context'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'

import { GroupTabs, Tabs } from '../Tabs'
import { TabsProps } from '../types'

const defaultProps = {
  klId: 'test-tabs',
  testId: 'test-id'
}

const getTabs = (klId = defaultProps.klId) => screen.getByTestId(klId)

const DefaultTabs = (props: TabsProps) => (
  <ConfigProvider>
    <Tabs {...defaultProps} {...props}>
      <Tabs.TabPane tab="Tab" key="1">
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab" key="3">
        Content of Tab Pane 3
      </Tabs.TabPane>
    </Tabs>
  </ConfigProvider>
)

describe('Tabs', () => {
  test('should render', () => {
    const { container } = render(<DefaultTabs />)

    expect(getTabs()).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should have left className if tapPosition is left', () => {
    render(<DefaultTabs tabPosition="left" />)
    expect(getTabs()).toHaveClass('ant-tabs-left')
  })

  test('should set active element according to activeKey prop', () => {
    render(<DefaultTabs activeKey="1" />)
    const tabsList = getTabs()
      .querySelector('.ant-tabs-nav-list')
      ?.querySelectorAll('.ant-tabs-tab')
    expect(tabsList?.[0]).toHaveClass('ant-tabs-tab-active')
  })

  test('should set active element according to defaultActiveKey prop', () => {
    render(<DefaultTabs defaultActiveKey="1" />)
    const tabsList = getTabs()
      .querySelector('.ant-tabs-nav-list')
      ?.querySelectorAll('.ant-tabs-tab')
    expect(tabsList).toBeDefined()
    expect(tabsList?.[0]).toHaveClass('ant-tabs-tab-active')
  })

  test('should call onChange function when active tab is changed', () => {
    const onChange = jest.fn()
    render(<DefaultTabs defaultActiveKey="1" onChange={onChange} />)
    const tabsList = getTabs()
      .querySelector('.ant-tabs-nav-list')
      ?.querySelectorAll('.ant-tabs-tab')
    const secondTab = tabsList?.[1] as HTMLDivElement
    expect(secondTab).toBeDefined()
    act(() => {
      secondTab.click()
    })
    expect(onChange).toHaveBeenCalled()
  })

  test('should call onTabClick function when any tab is clicked', () => {
    const onTabClick = jest.fn()
    render(<DefaultTabs defaultActiveKey="1" onTabClick={onTabClick} />)
    const tabsList = getTabs()
      .querySelector('.ant-tabs-nav-list')
      ?.querySelectorAll('.ant-tabs-tab')
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
    render(<DefaultTabs defaultActiveKey="1" destroyInactiveTabPane />)
    const tabsList = getTabs()
      .querySelector('.ant-tabs-nav-list')
      ?.querySelectorAll('.ant-tabs-tab')
    const secondTab = tabsList?.[1] as HTMLDivElement
    expect(secondTab).toBeDefined()
    act(() => {
      secondTab.click()
    })
    expect(screen.queryByText('Content of Tab Pane 1')).not.toBeInTheDocument()
  })

  test('should display content of the active tab', () => {
    render(<DefaultTabs defaultActiveKey="1" />)

    const firstTabContent = screen.getByText('Content of Tab Pane 1')
    expect(firstTabContent).toBeInTheDocument()
    expect(firstTabContent).toBeVisible()

    const tabs = screen.getAllByText('Tab')
    const secondTab = tabs[1]
    act(() => {
      secondTab.click()
    })

    expect(firstTabContent).toBeInTheDocument()
    expect(firstTabContent).not.toBeVisible()

    expect(screen.getByText('Content of Tab Pane 2')).toBeVisible()
  })

  test('should trigger click event on specific button', () => {
    const handleClick = jest.fn()

    const { container } = render(
      <ConfigProvider>
        <Tabs klId="guDD97Ke27">
          <Tabs.TabPane tab="Tab 1" key="1">
            <div kl-id="rkgaLcpgRW">
              <button kl-id="add" onClick={handleClick}>
                Add
              </button>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </Tabs.TabPane>
        </Tabs>
      </ConfigProvider>
    )

    const addButton = container.querySelector(
      '[kl-id="guDD97Ke27"] [kl-id="rkgaLcpgRW"] [kl-id="add"]'
    )

    expect(addButton).toBeInTheDocument()

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.click(addButton!)

    expect(handleClick).toHaveBeenCalled()
  })

  const GroupedTabs = () => {
    return (
      <GroupTabs>
        <GroupTabs.TabPaneHeader
          data-testid="tab-pane-header-1"
          title="Заголовок группы 1"
          key="tab-pane-header1"
        />
        <Tabs.TabPane
          tab={<Tabs.TabPaneHead text="Taб 1" indicator number={5} />}
          key="1"
        >
          Содержимое 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Таб 2" key="2">
          Содержимое 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="Таб 3" key="3">
          Содержимое 3
        </Tabs.TabPane>
        <GroupTabs.TabPaneHeader
          divider
          dividerClassName="divider-1"
          title="Заголовок группы 2"
          key="tab-group-header-2"
        />
        <Tabs.TabPane tab="Таб 4" key="4">
          Содержимое 4
        </Tabs.TabPane>
        <Tabs.TabPane tab="Таб 5" key="5">
          Содержимое 5
        </Tabs.TabPane>
        <GroupTabs.TabPaneHeader
          divider
          dividerClassName="divider-2"
          title="Заголовок группы 3"
          key="tab-group-header-3"
        />
        <Tabs.TabPane tab="Таб 6" key="6">
          Содержимое 6
        </Tabs.TabPane>
        <Tabs.TabPane tab="Таб 7" key="7">
          Содержимое 7
        </Tabs.TabPane>
      </GroupTabs>
    )
  }

  test('should display group headers', () => {
    render(
      <ConfigProvider>
        <GroupedTabs />
      </ConfigProvider>
    )
    expect(screen.getByText('Заголовок группы 1')).toBeInTheDocument()
    expect(screen.getByText('Заголовок группы 2')).toBeInTheDocument()
    expect(screen.getByText('Заголовок группы 3')).toBeInTheDocument()
  })

  // Codium AI
  test('should change active tab on tab click', () => {
    const onChange = jest.fn()
    const { container } = render(
      <ConfigProvider>
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <Tabs.TabPane tab="Tab 1" key="1">Content 1</Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="2">Content 2</Tabs.TabPane>
        </Tabs>
      </ConfigProvider>
    )
    const secondTab = container.querySelectorAll('.ant-tabs-tab')[1]
    fireEvent.click(secondTab)
    expect(onChange).toHaveBeenCalledWith('2')
  })

  test('should handle Tabs component with only one tab', () => {
    const { container } = render(
      <ConfigProvider>
        <Tabs>
          <Tabs.TabPane tab="Tab 1" key="1">Content 1</Tabs.TabPane>
        </Tabs>
      </ConfigProvider>
    )
    expect(container.querySelectorAll('.ant-tabs-tab').length).toBe(1)
  })

  test('should handle Tabs component with all tabs disabled', () => {
    const { container } = render(
      <ConfigProvider>
        <Tabs>
          <Tabs.TabPane tab="Tab 1" key="1" disabled>Content 1</Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="2" disabled>Content 2</Tabs.TabPane>
        </Tabs>
      </ConfigProvider>
    )
    const tabs = container.querySelectorAll('.ant-tabs-tab')
    tabs.forEach(tab => expect(tab).toHaveClass('ant-tabs-tab-disabled'))
  })

  test('should show more button', () => {
    const generateTabs = (length: number, tabText = 'Tab', contentText = 'Content of tab') => Array.from({ length: length }, (_, i) => i).map((i) => ({
      text: tabText,
      content: `${contentText} ${i + 1}`
    }
    ))
    const { container } = render(
      <Tabs>
        {generateTabs(2).map((el, i) => <Tabs.TabPane
            tab={
              <Tabs.TabPaneHead text={el.text + ' ' + (i + 2)} />
            }
            key={i + 1}
          >
            {el.content}
          </Tabs.TabPane>
        )}
      </Tabs>
    )
    const visibility = getComputedStyle(container.querySelector('.kl6-tabs-more-button') as Element).visibility
    expect(visibility).toBe('visible')
  })

  test('should hide more button', () => {
    const { container } = render(
      <Tabs>
        <Tabs.TabPane
          tab={
            <Tabs.TabPaneHead text="Some text" />
          }
          key={1}
        >
          Some other text
        </Tabs.TabPane>
      </Tabs>
    )
    const visibility = getComputedStyle(container.querySelector('.kl6-tabs-more-button') as Element).visibility
    expect(visibility).toBe('hidden')
  })
})
