/* eslint-disable @stylistic/max-len */

import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { Button } from '@src/button'
import { FieldSet, FieldSetItem } from '@src/field-set'
import { IndicatorModes } from '@src/indicator/types'
import { Textbox } from '@src/input'
import { SectionMessage } from '@src/section-message'
import { Sidebar } from '@src/sidebar'
import { Space } from '@src/space'
import { H3 } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Minus, Placeholder, Plus } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Tabs } from '../Tabs'
import { TabsProps } from '../types'

const meta: Meta<TabsProps> = {
  title: 'Hexa UI Components/Tabs/Stories',
  component: Tabs,
  tags: ['!autodocs'],
  parameters: { badges: [badges.stable, badges.reviewedByDesign], design: MetaData.pixsoView }
}
export default meta

type Story = StoryObj<TabsProps>
const indicatorMode = IndicatorModes.filter((mode): mode is 'critical' | 'accent' => mode === 'critical' || mode === 'accent')
type StoryTabsProps = TabsProps & { indicatorMode: typeof indicatorMode[number] }
const pane = (key: string, tab: React.ReactNode, disabled = false) => <Tabs.TabPane tab={tab} key={key} disabled={disabled}>Content of Tab Pane {key}</Tabs.TabPane>

const BasicTabs = (args: TabsProps) => (
  <Tabs {...args}>
    {pane('1', 'Tab 1')}
    {pane('2', 'Tab 2')}
    {pane('3', 'Tab 3')}
  </Tabs>
)

export const Basic: Story = {
  args: { defaultActiveKey: '1' },
  render: (args) => (
    <Space gap={24}>
      <SectionMessage mode="info" closable={false}>
        Vertical tabs are not recommended. Use the Submenu component instead.
      </SectionMessage>

      <BasicTabs {...args} />
    </Space>
  )
}

export const WithIconAndNumber: Story = {
  render: (args) => <Tabs {...args}>{pane('1', <Tabs.TabPaneHead text="Tab" iconBefore={<Placeholder />} />)}{pane('2', <Tabs.TabPaneHead text="Tab" iconAfter={<Placeholder />} />)}{pane('3', <Tabs.TabPaneHead text="Tab" iconBefore={<Placeholder />} iconAfter={<Placeholder />} number={5} />)}</Tabs>
}

export const WithIndicator: StoryObj<StoryTabsProps> = {
  args: { indicatorMode: 'critical' },
  argTypes: { indicatorMode: { control: 'select', options: indicatorMode } },
  render: ({ indicatorMode: mode, ...args }) => <Tabs {...args}>{pane('1', <Tabs.TabPaneHead text="Tab" indicator indicatorMode={mode} />)}{pane('2', <Tabs.TabPaneHead text="Tab" indicator indicatorMode={mode} number={5} />)}</Tabs>
}

export const WithInfoIcon: StoryObj<StoryTabsProps> = {
  args: { indicatorMode: 'critical' },
  argTypes: { indicatorMode: { control: 'select', options: indicatorMode } },
  render: ({ indicatorMode: mode, ...args }) => <Tabs {...args}>{pane('1', <Tabs.TabPaneHead text="Tab" indicator indicatorMode={mode} infoTooltip="Lorem ipsum" />)}{pane('2', <Tabs.TabPaneHead text="Tab" number={5} infoTooltip="Lorem ipsum" />)}</Tabs>
}

export const WithDisabled: Story = {
  render: (args) => <Tabs {...args}>{pane('1', <Tabs.TabPaneHead text="Tab" indicator iconBefore={<Placeholder />} number={5} />)}{pane('2', 'Tab')}{pane('3', <Tabs.TabPaneHead text="Tab" iconBefore={<Placeholder />} number={5} disabledTooltip="This tab is disabled and has tooltip" />, true)}</Tabs>
}

const generateTabs = (length = 15, tabText = 'Tab', contentText = 'Content of tab') => Array.from({ length }, (_, index) => ({ text: tabText, disabled: index === 8, content: `${contentText} ${index + 1}` }))

export const CollapsedHorizontalGroup: Story = {
  render: (args) => {
    const { t } = useTranslation()
    return (
      <Tabs {...args}>
        {generateTabs(20, 'tabs.dropdown.more').map((item, index) => (
          <Tabs.TabPane
            tab={(
              <Tabs.TabPaneHead
                testId={`tab-${index + 1}`}
                text={`${t(item.text)} ${index + 1}`}
                iconBefore={<Placeholder />}
              />
            )}
            key={index + 1}
            disabled={item.disabled}
          >
            {item.content}
          </Tabs.TabPane>
        ))}
      </Tabs>
    )
  }
}

const RightButton = <Button mode="secondary" text="Right extra button" />
const LeftButton = <Button mode="secondary" text="Left extra button" />
export const WithExtraContent: Story = { render: (args) => <Space gap={16}><H3>Отступы и другие стили временно необходимо задавать вручную, в будущем будет проработано со стороны дизайна</H3><BasicTabs {...args} tabBarExtraContent={RightButton} /> <BasicTabs {...args} tabBarExtraContent={{ right: RightButton, left: LeftButton }} /></Space> }

export const SidebarWithDynamicTabs = () => {
  const [tabsCount, setTabsCount] = useState(24)
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const tabs = useMemo(() => Array.from({ length: tabsCount }, (_, index) => index), [tabsCount])
  return <><Button mode="tertiary" iconBefore={<Plus />} onClick={() => setSidebarVisible(!sidebarVisible)} /><Sidebar visible={sidebarVisible} size="large" onClose={() => setSidebarVisible(false)}><Tabs tabBarExtraContent={<><Button mode="tertiary" iconBefore={<Plus />} onClick={() => setTabsCount((count) => count + 1)} /><Button mode="tertiary" iconBefore={<Minus />} onClick={() => setTabsCount((count) => count - 1)} /></>}>{tabs.map((index) => pane(String(index), <Tabs.TabPaneHead text={`Tab ${index}`} number={index} />))}</Tabs></Sidebar></>
}

const HighContainer = styled.div`min-height: 80vh; display: flex; flex-direction: column;`
const StretchedTabs = styled(BasicTabs)`margin-top: 15px; flex: 1 0 auto;`
export const StretchedInHeight: Story = { render: (args) => <HighContainer><H3>The Header</H3><StretchedTabs {...args} /></HighContainer>, args: { tabPosition: 'left' } }

export const WithTextbox: Story = {
  render: (args) => (
    <Space gap={48}>
      <Tabs {...args}>
        <Tabs.TabPane tab={<Textbox />} key="1">Content of Tab Pane 1</Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
      </Tabs>
      <Tabs {...args}>
        <Tabs.TabPane tab={<Textbox.Textarea />} key="1">Content of Tab Pane 1</Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
      </Tabs>
    </Space>
  )
}

export const WithPreventTabChange: Story = {
  render: (args) => {
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

    const fields: FieldSetItem[] = [
      { label: 'textbox', control: { component: 'textbox', placeholder: 'hello' } },
      {
        label: 'textbox-masked',
        control: {
          component: 'textbox-masked',
          maskOptions: { mask: 'NUM.NUM.NUM.NUM', blocks: { NUM: { mask: /^[0-9]{1,3}$/ } } },
          placeholder: 'hello'
        }
      },
      { label: 'textbox-number', control: { component: 'textbox-number', placeholder: '123' } },
      { label: 'textbox-password', control: { component: 'textbox-password', value: '123' } }
    ]

    return (
      <Tabs {...args} activeKey={activeKey} onChange={handleChange}>
        <Tabs.TabPane tab="Tab 1" key="1"><FieldSet items={fields} /></Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2"><FieldSet items={fields} /></Tabs.TabPane>
      </Tabs>
    )
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>

export const ColorTokens: PaletteStory = {
  args: { source: { tabs: componentColors.tabs, tabs_item: componentColors.tabs_item } },
  render: (args) => <ThemedPalette {...args} />
}
