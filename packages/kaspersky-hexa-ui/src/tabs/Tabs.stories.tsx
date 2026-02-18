import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { useLocalization } from '@helpers/localization/useLocalization'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Button } from '@src/button'
import { FieldSet } from '@src/field-set'
import { IndicatorModes } from '@src/indicator/types'
import { Textbox } from '@src/input'
import { Sidebar } from '@src/sidebar'
import { Space } from '@src/space'
import { H3 } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Minus, Placeholder, Plus } from '@kaspersky/hexa-ui-icons/16'

import MetaData from './__meta__/meta.json'
import { GroupTabs, Tabs } from './Tabs'
import { tabPositionArray, TabsProps } from './types'

const meta: Meta<TabsProps> = {
  title: 'Hexa UI Components/Tabs',
  component: Tabs,
  argTypes: {
    tabPosition: {
      control: 'select',
      options: tabPositionArray
    },
    ...sbHideControls(['onChange', 'onTabClick', 'style', 'destroyInactiveTabPane', 'theme', 'className'])
  },
  args: {
    tabPosition: 'top',
    defaultActiveKey: '1',
    children: (
      Array.from({ length: 3 }).map((_, index) => (
        <Tabs.TabPane tab="Tab" key={index + 1}>
          Content of Tab Pane {index + 1}
        </Tabs.TabPane>
      ))
    ),
    testId: 'tabs-test-id',
    klId: 'tabs-kl-id',
    padding: false
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <Container>
        <Story {...context}/>
      </Container>
    )
  ]
}
export default meta

type Story = StoryObj<TabsProps>

const Container = styled.div`
  width: 100%;
`

export const Basic: Story = {}

export const WithIconAndNumber: Story = {
  render: (args: TabsProps) => (
    <Tabs {...args}>
      <Tabs.TabPane
        tab={<Tabs.TabPaneHead testId="tab-1" text="Tab" iconBefore={<Placeholder />} />}
        key="1"
      >
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={<Tabs.TabPaneHead testId="tab-2" text="Tab" iconAfter={<Placeholder />} />}
        key="2"
      >
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead testId="tab-3" text="Tab" iconBefore={<Placeholder />} iconAfter={<Placeholder />} />
        }
        key="3"
      >
        Content of Tab Pane 3
      </Tabs.TabPane>
      <Tabs.TabPane tab={<Tabs.TabPaneHead testId="tab-4" text="Tab" number={0} />} key="4">
        Content of Tab Pane 4
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead testId="tab-5" text="Tab" iconBefore={<Placeholder />} number={5} />
        }
        key="5"
      >
        Content of Tab Pane 5
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead testId="tab-6" text="Tab" iconAfter={<Placeholder />} number={5} />
        }
        key="6"
      >
        Content of Tab Pane 6
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead testId="tab-7" text="Tab" iconBefore={<Placeholder />} iconAfter={<Placeholder />} number={5} />
        }
        key="7"
      >
        Content of Tab Pane 7
      </Tabs.TabPane>
    </Tabs>
  )
}

const indicatorMode = IndicatorModes.filter(
  (mode): mode is 'critical' | 'accent' => mode === 'critical' || mode === 'accent'
)

type StoryTabsProps = TabsProps & {
  indicatorMode: typeof indicatorMode[number]
};

export const WithIndicator: StoryObj<StoryTabsProps> = {
  render: (args: StoryTabsProps) => {
    const { indicatorMode, ...props } = args
    return (
      <Tabs {...props}>
        <Tabs.TabPane
          tab={<Tabs.TabPaneHead text="Tab" indicator indicatorMode={indicatorMode} />}
          key="1"
        >
          Content of Tab Pane 1
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<Tabs.TabPaneHead text="Tab" indicator indicatorMode={indicatorMode} number={5} />}
          key="2"
        >
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <Tabs.TabPaneHead
              text="Tab"
              indicator
              indicatorMode={indicatorMode}
              iconBefore={<Placeholder />}
            />}
          key="3"
        >
          Content of Tab Pane 3
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <Tabs.TabPaneHead
              text="Tab"
              indicator
              indicatorMode={indicatorMode}
              iconAfter={<Placeholder />}
            />
          }
          key="4"
        >
          Content of Tab Pane 4
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <Tabs.TabPaneHead
              text="Tab"
              indicator
              indicatorMode={indicatorMode}
              iconBefore={<Placeholder />}
              number={5}
            />
          }
          key="5"
        >
          Content of Tab Pane 5
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <Tabs.TabPaneHead
              text="Tab"
              indicator
              indicatorMode={indicatorMode}
              iconBefore={<Placeholder />}
              iconAfter={<Placeholder />}
              number={5}
            />
          }
          key="6"
        >
          Content of Tab Pane 6
        </Tabs.TabPane>
      </Tabs>
    )
  },
  argTypes: {
    indicatorMode: {
      control: 'select',
      options: indicatorMode,
      description: 'Indicator mode: you can use only "critical" for errors or "accent" for updates'
    }
  }
}

export const WithInfoIcon: StoryObj<StoryTabsProps> = {
  render: (args: StoryTabsProps) => {
    const { indicatorMode, ...props } = args
    return (
      <Tabs {...props}>
        <Tabs.TabPane
          tab={
            <Tabs.TabPaneHead
              text="Tab"
              indicator
              indicatorMode={indicatorMode}
              infoTooltip="Lorem ipsum"
            />
          }
          key="1"
        >
          Content of Tab Pane 1
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <Tabs.TabPaneHead
              text="Tab"
              indicator
              indicatorMode={indicatorMode}
              number={5}
              infoTooltip="Lorem ipsum"
            />
          }
          key="2"
        >
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <Tabs.TabPaneHead
              text="Tab"
              indicator
              indicatorMode={indicatorMode}
              iconBefore={<Placeholder />}
              infoTooltip="Lorem ipsum"
            />}
          key="3"
        >
          Content of Tab Pane 3
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <Tabs.TabPaneHead
              text="Tab"
              iconBefore={<Placeholder />}
              infoTooltip="Lorem ipsum"
              number={5}
            />
          }
          key="4"
        >
          Content of Tab Pane 4
        </Tabs.TabPane>
      </Tabs>
    )
  },
  argTypes: {
    indicatorMode: {
      control: 'select',
      options: indicatorMode,
      description: 'Indicator mode: you can use only "critical" for errors or "accent" for updates'
    }
  }
}

export const WithDisabled: Story = {
  render: (args: TabsProps) => (
    <Tabs {...args}>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead
            text="Tab"
            indicator
            iconBefore={<Placeholder />}
            number={5}
          />
        }
        key="1"
      >
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead text="Tab" iconBefore={<Placeholder />} number={5} disabledTooltip="This tab is disabled and has tooltip" />
        }
        disabled
        key="3"
      >
        Content of Tab Pane 3
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab" disabled key="4">
        Content of Tab Pane 4
      </Tabs.TabPane>
    </Tabs>
  )
}

const generateTabs = (length = 15, tabText = 'Tab', contentText = 'Content of tab') => Array.from({ length: length }, (_, i) => i).map((i) => ({
  text: tabText,
  disabled: i === 8,
  content: contentText + ' ' + (i + 1)
}
))

export const CollapsedHorizontalGroup: Story = {
  render: (props: TabsProps) => {
    return (
      <Tabs {...props}>
        {generateTabs(20, 'tabs.dropdown.more').map((el, i) => <Tabs.TabPane
          tab={
            <Tabs.TabPaneHead testId={`tab-${i + 1}`} text={useLocalization(el.text) + ' ' + (i + 1)} iconBefore={<Placeholder/>}/>
          }
          key={i + 1}
          disabled={el.disabled}
        >
          {el.content}
        </Tabs.TabPane>
        )}
      </Tabs>)
  }
}

const RightButton = <Button mode="secondary" text="Right extra button"/>
const LeftButton = <Button mode="secondary" text="Left extra button"/>

export const WithExtraContent: Story = {
  render: (args: TabsProps) => (
    <Space gap={16}>
      <H3>Отступы и другие стили временно необходимо задавать вручную, в будущем будет проработано со стороны дизайна</H3>
      <Tabs {...args} tabBarExtraContent={RightButton} />
      <Tabs {...args} tabBarExtraContent={{ right: RightButton, left: LeftButton }} />
    </Space>
  )
}

export const SidebarWithDynamicTabs = () => {
  const [tabsCount, setTabsCount] = useState<number>(24)
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false)
  const tabs = useMemo(() => {
    const tabs: number[] = []
    for (let i = 0; i < tabsCount; i++) {
      tabs.push(i)
    }
    return tabs
  }, [tabsCount])
  return (<>
    <Button
      mode="tertiary"
      iconBefore={<Plus/>}
      onClick={() => setSidebarVisible(!sidebarVisible)}
    />
    <Sidebar visible={sidebarVisible} size="large" onClose={() => setSidebarVisible(false)}>
      <Tabs
        tabBarExtraContent={<>
          <Button
            mode="tertiary"
            iconBefore={<Plus/>}
            onClick={() => { setTabsCount(i => i + 1) }}
          >
          </Button>
          <Button
            mode="tertiary"
            iconBefore={<Minus/>}
            onClick={() => { setTabsCount(i => i - 1) }}
          >
          </Button>
        </>}
      >
        {tabs.map(i => {
          return <Tabs.TabPane
            tab={<Tabs.TabPaneHead text={`Tab ${i}`} number={i}/>}
            key={i}
          >
            Content of Tab Pane {i}
          </Tabs.TabPane>
        })}
      </Tabs>
    </Sidebar>
  </>)
}

export const WithGroupedTabs: Story = {
  render: (args: TabsProps) => (
    <GroupTabs {...args}>
      {/* Группа 1 */}
      <GroupTabs.TabPaneHeader
        title="Group 1 heading"
        key="tab-group-header-1"
      />
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead
            text="Tab 1"
            indicator
            iconBefore={<Placeholder />}
            number={5}
          />
        }
        key="1"
      >
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </Tabs.TabPane>

      {/* Группа 2 */}
      <GroupTabs.TabPaneHeader
        divider
        title="Group 2 heading"
        key="tab-group-header-2"
      />
      <Tabs.TabPane tab="Tab 4" key="4">
        Content of Tab Pane 4
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 5" key="5">
        Content of Tab Pane 5
      </Tabs.TabPane>

      {/* Группа 3 */}
      <GroupTabs.TabPaneHeader
        divider
        title="Group 3 heading"
        key="tab-group-header-3"
      />
      <Tabs.TabPane tab="Tab 6" key="6">
        Content of Tab Pane 6
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 7" key="7">
        Content of Tab Pane 7
      </Tabs.TabPane>
    </GroupTabs>
  ),
  args: {
    defaultActiveKey: '1'
  },
  argTypes: {
    ...sbHideControls(['tabPosition'])
  }
}

export const TabsInsideTabs: Story = {
  render: (args: TabsProps) => (
    <Tabs {...args} tabPosition="left">
      <Tabs.TabPane tab="Tab 1" key="1">
        <Tabs tabPosition="top">
          <Tabs.TabPane tab="Tab 1.1" key="1.1">
            Content in Tab 1.1
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 1.2" key="1.2">
            Content in Tab 1.2
          </Tabs.TabPane>
        </Tabs>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 2" key="2">Content in Tab 2</Tabs.TabPane>
    </Tabs>
  )
}

const HighContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
`

const StretchedTabs = styled(Tabs)`
  margin-top: 15px;
  flex: 1 0 auto;
`

export const StretchedInHeight: Story = {
  render: (args: TabsProps) => (
    <HighContainer>
      <H3>The Header</H3>
      <StretchedTabs {...args} />
    </HighContainer>
  ),
  args: {
    tabPosition: 'left'
  }
}

export const WithTextbox: Story = {
  render: (args: TabsProps) => (
    <Space gap={48}>
      <Tabs {...args}>
        <Tabs.TabPane tab={<Textbox />} key="1">
          Content of Tab Pane 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
      <Tabs {...args}>
        <Tabs.TabPane tab={<Textbox.Textarea />} key="1">
          Content of Tab Pane 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
    </Space>
  )
}

export const WithPreventTabChange: Story = {
  render: (args: TabsProps) => {

    const [activeKey, setActiveKey] = useState('1')

    const handleChange = async (key: string) => {
      if (key === '1') {
        alert('You cannot switch to the tab 1 because the form has unsaved changes')
        return false
      }
      if (key === '2') {
        return window.confirm('Do you really want to switch to Tab 2? unsaved changes may be lost')
      }
      setActiveKey(key)
    }

    return (
      <Tabs {...args} activeKey={activeKey} onChange={handleChange}>
        <Tabs.TabPane tab="Tab 1" key="1">
          <FieldSet items={[
            {
              label: 'textbox',
              control: {
                component: 'textbox',
                placeholder: 'hello'
              }
            },
            {
              label: 'textbox-masked',
              control: {
                component: 'textbox-masked',
                maskOptions: {
                  mask: 'NUM.NUM.NUM.NUM',
                  blocks: {
                    NUM: {
                      mask: /^[0-9]{1,3}$/
                    }
                  }
                },
                placeholder: 'hello'
              }
            },
            {
              label: 'textbox-number',
              control: {
                component: 'textbox-number',
                placeholder: '123'
              }
            },
            {
              label: 'textbox-password',
              control: {
                component: 'textbox-password',
                value: '123'
              }
            }
          ]}/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">
          <FieldSet items={[
            {
              label: 'textbox',
              control: {
                component: 'textbox',
                placeholder: 'hello'
              }
            },
            {
              label: 'textbox-masked',
              control: {
                component: 'textbox-masked',
                maskOptions: {
                  mask: 'NUM.NUM.NUM.NUM',
                  blocks: {
                    NUM: {
                      mask: /^[0-9]{1,3}$/
                    }
                  }
                },
                placeholder: 'hello'
              }
            },
            {
              label: 'textbox-number',
              control: {
                component: 'textbox-number',
                placeholder: '123'
              }
            },
            {
              label: 'textbox-password',
              control: {
                component: 'textbox-password',
                value: '123'
              }
            }
          ]}/>
        </Tabs.TabPane>
      </Tabs>
    )
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: { tabs: componentColors.tabs, tabs_item: componentColors.tabs_item } },
  render: args => <ThemedPalette {...args} />
}
