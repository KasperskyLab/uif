import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { CodeViewer, CodeViewerProps } from '@src/code-viewer'
import { Space } from '@src/space'
import { Submenu, SubmenuItemProps } from '@src/submenu'
import { Tabs } from '@src/tabs'
import { Toolbar, ToolbarItems } from '@src/toolbar'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Button } from '../../button'
import MetaData from '../__meta__/meta.json'
import { StyledBorder, SubHeaderWrapper } from '../components/SidebarHeader'
import { Sidebar } from '../Sidebar'
import { SidebarProps } from '../types'

import { withSubmenuExample, withTabsAndSubmenuExample, withToolbarAndSubmenuExample, withToolbarTabsAndSubmenuExample } from './codeExamples'

type Languages = {
  yara: [],
  javascript: [],
  html: [],
  json: [],
  xml: [],
  tsx: []
}

const leftFooter = (
  <>
    <Button mode="primary">Save</Button>
    <Button mode="secondary">Cancel</Button>
  </>
)

const meta: Meta<SidebarProps> = {
  title: 'Hexa UI Components/Sidebar/Presets',
  component: Sidebar,
  args: {
    testId: 'sidebar-test-id',
    klId: 'sidebar-kl-id',
    noPaddingContent: true,
    size: 'large',
    footerLeft: leftFooter
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    controls: {
      exclude: /(dataTestId|klId|theme)/
    },
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

export default meta

type SidebarWithButtonProps = SidebarProps & {
  buttonText?: string
} & Pick<CodeViewerProps<Languages>, 'initialValue'>

type StoryWithButton = StoryObj<SidebarWithButtonProps>

const leftItems: ToolbarItems[] = [
  {
    type: 'button',
    key: 'button1',
    children: 'Button 1'
  },
  {
    type: 'button',
    key: 'button2',
    children: 'Button 2'
  }
]

const rigthItems: ToolbarItems[] = [
  {
    type: 'button',
    key: 'button3',
    children: 'Button 3'
  }
]

const itemsSubmenu: SubmenuItemProps[] = (
  [
    {
      type: 'row',
      text: 'Tab 1.1',
      content: 'Content 1.1',
      key: 'tab-1-1'
    },
    {
      type: 'row',
      text: 'Tab 1.2',
      content: 'Content 1.2',
      key: 'tab-1-2'
    }
  ]
)

const SidebarHeader = () => (
  <SubHeaderWrapper paddingBottom>
    <Toolbar left={leftItems} right={rigthItems} />
  </SubHeaderWrapper>
)

const tabs = (
  <Tabs padding noMargin>
    <Tabs.TabPane
      tab={<Tabs.TabPaneHead text="Tab 1" indicator indicatorMode="critical" />}
      key="1"
    />
    <Tabs.TabPane
      tab={<Tabs.TabPaneHead text="Tab 2" indicator indicatorMode="accent" />}
      key="2"
    />
  </Tabs>
)

const SidebarStory = ({ buttonText, initialValue, ...props }: SidebarWithButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Space direction="vertical" align="start" gap="grouped">
      <Button onClick={() => setIsOpen(true)}>
        {buttonText || 'Open'}
      </Button>
      <CodeViewer<Languages>
        readonly={true}
        language="javascript"
        initialValue={initialValue || withSubmenuExample}
        width={800}
        height={1000}
      />
      <Sidebar
        {...props}
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        title={props.title || 'Sidebar'}
      />
    </Space>
  )
}

export const WithSubmenu: StoryWithButton = {
  render: SidebarStory,
  args: {
    children: <Submenu items={itemsSubmenu} />,
    initialValue: withSubmenuExample
  }
}

export const WithToolbarAndSubmenu: StoryWithButton = {
  render: SidebarStory,
  args: {
    initialValue: withToolbarAndSubmenuExample,
    truncateTitle: true,
    children: <Submenu items={itemsSubmenu} />,
    subHeader: (
      <>
        <SidebarHeader />
        <StyledBorder />
      </>
    )
  }
}

export const WithTabsAndSubmenu: StoryWithButton = {
  render: SidebarStory,
  args: {
    initialValue: withTabsAndSubmenuExample,
    subHeader: tabs,
    children: <Submenu items={itemsSubmenu} />
  }
}

export const WithToolbarTabsAndSubmenu: StoryWithButton = {
  render: SidebarStory,
  args: {
    initialValue: withToolbarTabsAndSubmenuExample,
    children: <Submenu items={itemsSubmenu} />,
    subHeader: (
      <>
        <SidebarHeader />
        {tabs}
      </>
    )
  }
}
