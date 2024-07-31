import { useLocalization } from '@helpers/localization/useLocalization'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Button } from '@src/button'
import { IndicatorMode } from '@src/indicator'
import { IndicatorModes } from '@src/indicator/types'
import { Textbox } from '@src/input'
import { Locale } from '@src/locale'
import { Space } from '@src/space'
import { H3 } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { Placeholder } from '@kl/icons/16'

import MetaData from '../__meta__/meta.json'
import { Tabs, GroupTabs } from '../Tabs'
import { TabsProps } from '../types'

const meta: Meta<TabsProps> = {
  title: 'Atoms/Tabs',
  component: Tabs,
  argTypes: {
    ...sbHideControls(['onChange', 'onTabClick', 'style', 'destroyInactiveTabPane', 'theme', 'className', 'type'])
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
    klId: 'tabs-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
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
        tab={<Tabs.TabPaneHead text="Tab" iconBefore={<Placeholder />} />}
        key="1"
      >
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={<Tabs.TabPaneHead text="Tab" iconAfter={<Placeholder />} />}
        key="2"
      >
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead text="Tab" iconBefore={<Placeholder />} iconAfter={<Placeholder />} />
        }
        key="3"
      >
        Content of Tab Pane 3
      </Tabs.TabPane>
      <Tabs.TabPane tab={<Tabs.TabPaneHead text="Tab" number={5} />} key="4">
        Content of Tab Pane 4
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead text="Tab" iconBefore={<Placeholder />} number={5} />
        }
        key="5"
      >
        Content of Tab Pane 5
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead text="Tab" iconAfter={<Placeholder />} number={5} />
        }
        key="6"
      >
        Content of Tab Pane 6
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead text="Tab" iconBefore={<Placeholder />} iconAfter={<Placeholder />} number={5} />
        }
        key="7"
      >
        Content of Tab Pane 7
      </Tabs.TabPane>
    </Tabs>
  )
}

type StoryTabsProps = TabsProps & { indicatorMode: IndicatorMode }

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
      options: IndicatorModes,
      description: 'Indicator mode'
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
            icon={<Placeholder />}
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
      <Tabs.TabPane tab="Tab" disabled key="3">
        Content of Tab Pane 3
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead text="Tab" icon={<Placeholder />} number={5} />
        }
        disabled
        key="4"
      >
        Content of Tab Pane 4
      </Tabs.TabPane>
    </Tabs>
  )
}

const generateTabs = (length = 15, tabText = 'Tab', contentText = 'Content of tab') => [
  ...Array.from({ length: length }, (_, i) => i)
].map((i) => (
  <Tabs.TabPane
    tab={
      <Tabs.TabPaneHead text={`${tabText} ${i + 1}`} icon={<Placeholder/>}/>
    }
    key={i + 1}
    disabled={i === 8}
  >
    {contentText} {i + 1}
  </Tabs.TabPane>
))

export const CollapsedHorizontalGroup: Story = {
  render: (props: TabsProps) => {
    const [dynamicChange, setDynamicChange] = useState<boolean>(true)
    const tabsForMoreButton = generateTabs()
    const tabsForMoreButton2 = generateTabs(15, 'Text', 'Different Content of tab')

    const localizedTab = <Tabs.TabPane
      tab={
        <Tabs.TabPaneHead text={useLocalization('tabs.dropdown.more')} icon={<Placeholder/>}/>
      }
      key={'myKey'}
    >
      <Locale localizationKey={'tabs.dropdown.more'}/>
    </Tabs.TabPane>

    tabsForMoreButton.push(localizedTab)
    tabsForMoreButton2.push(localizedTab)

    return (<>
      <Button onClick={() => { setDynamicChange(!dynamicChange) }}>
        <Locale localizationKey={'tabs.dropdown.more'}/>
      </Button>
      <Tabs {...props}>
        { dynamicChange ? tabsForMoreButton : tabsForMoreButton2 }
      </Tabs></>)
  }
}

const RightButton = <Button mode='secondary' text='Right extra button'/>
const LeftButton = <Button mode='secondary' text='Left extra button'/>

export const WithExtraContent: Story = {
  render: (args: TabsProps) => (
    <Space size={16}>
      <H3>Отступы и другие стили пока задавать надо вручную, в будущем будет проработано со стороны дизайна</H3>
      <Tabs {...args} tabBarExtraContent={RightButton} />
      <Tabs {...args} tabBarExtraContent={{ right: RightButton, left: LeftButton }} />
    </Space>
  )
}

export const WithGroupedTabs: Story = {
  render: (args: TabsProps) => (
    <GroupTabs {...args}>
      {/* Группа 1 */}
      <GroupTabs.TabPaneHeader
        title={'Group 1 heading'}
        key="tab-group-header-1"
      />
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead
            text="Tab 1"
            indicator
            icon={<Placeholder />}
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
        title={'Group 2 heading'}
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
        title={'Group 3 heading'}
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
    <Tabs {...args} tabPosition={'left'} >
      <Tabs.TabPane tab='Tab 1' key='1'>
        <Tabs tabPosition='top'>
          <Tabs.TabPane tab='Tab 1.1' key='1.1'>
            Content in Tab 1.1
          </Tabs.TabPane>
          <Tabs.TabPane tab='Tab 1.2' key='1.2'>
            Content in Tab 1.2
          </Tabs.TabPane>
        </Tabs>
      </Tabs.TabPane>
      <Tabs.TabPane tab='Tab 2' key='2'>Content in Tab 2</Tabs.TabPane>
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
    <Space size={48}>
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
