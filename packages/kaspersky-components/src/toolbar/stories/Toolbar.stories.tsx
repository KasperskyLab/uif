import React, { useState } from 'react'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { Meta, StoryObj } from '@storybook/react'
import MetaData from '../__meta__/meta.json'
import { Toolbar } from '../Toolbar'
import { ToolbarDocs } from './ToolbarDocs'
import { ToolbarItems, ToolbarProps } from '../types'
import { Placeholder } from '@kaspersky/icons/16'

import { Button } from '@src/button'
import { Link } from '@src/link'
import { Space } from '@src/space'
import { Toggle } from '@src/toggle'

const meta: Meta<ToolbarProps> = {
  title: 'Molecules/Toolbar',
  component: Toolbar,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    testId: 'toolbar-test-id',
    klId: 'toolbar-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData, ToolbarDocs)
    },
    design: MetaData.figmaView
  },
  decorators: [
    (Story, context) => (
      <div style={{ width: '90vw' }}>
        <Story {...context}/>
      </div>
    )
  ],
  excludeStories: ['itemsLeft', 'itemsRight']
}
export default meta

type Story = StoryObj<ToolbarProps>

const items = [
  {
    children: 'Action 1',
    onClick: () => console.log('Action 1')
  },
  {
    children: 'Action 2',
    onClick: () => console.log('Action 2')
  },
  {
    children: <Button onClick={() => console.log('Action 3')}>Action 3</Button>
  },
  {
    children: 'Action 4',
    onClick: () => console.log('Action 4')
  }
]

export const itemsLeft: ToolbarItems[] = [
  {
    type: 'button',
    key: '1',
    label: 'Button 1',
    iconBefore: <Placeholder />,
    onClick: () => console.log('Button 1'),
    testId: 'item-1'
  },
  {
    type: 'dropdown',
    key: '2',
    label: 'Button 2',
    iconBefore: <Placeholder />,
    testId: 'item-2',
    overlay: items
  },
  {
    type: 'divider',
    key: 'divider'
  },
  {
    type: 'button',
    key: '3',
    label: 'Button 3',
    onClick: () => console.log('Button 3'),
    testId: 'item-3'
  },
  {
    type: 'button',
    key: '4',
    label: 'Button 4',
    visible: false
  },
  {
    type: 'dropdown',
    key: '5',
    label: 'Button 5',
    overlay: items,
    iconBefore: <Placeholder />,
    disabled: true
  },
  {
    type: 'dropdown',
    key: '6',
    label: 'Button 6',
    overlay: items
  },
  {
    type: 'button',
    key: '7',
    label: 'Button 7',
    iconBefore: <Placeholder />,
    iconAfter: <Placeholder />,
    onClick: () => console.log('Button 7')
  }
]

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Toolbar.Search
      onChange={value => setSearchValue(value as string)}
      value={searchValue}
      onClearClick={() => setSearchValue('')}
    />
  )
}

const CollapsibleSearch = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Toolbar.CollapsibleSearch
      onChange={value => setSearchValue(value as string)}
      value={searchValue}
      onClearClick={() => setSearchValue('')}
    />
  )
}

export const itemsRight: ToolbarItems[] = [
  {
    type: 'children',
    key: '1',
    children: <Search />
  },
  {
    type: 'children',
    key: '2',
    children: (
      <Space size={4} wrap='nowrap'>
        <Toolbar.SettingsItem onClick={() => console.log('settings')} />
        <Toolbar.FilterItem onClick={() => console.log('filter')} />
      </Space>
    )
  }
]

const itemsWithCollapsibleSearch: ToolbarItems[] = [
  {
    type: 'children',
    key: '1',
    children: <CollapsibleSearch />
  },
  ...itemsRight.slice(1)
]

const customItems: ToolbarItems[] = [
  {
    type: 'children',
    key: '1',
    children: <Link href="#" text="Link" />
  },
  {
    type: 'divider',
    key: 'divider'
  },
  {
    type: 'children',
    key: '2',
    children: <Toggle>Label</Toggle>
  }
]

export const Basic: Story = {
  args: {
    left: itemsLeft.slice(0, 4),
    right: itemsRight
  }
}

export const WithLeftLimit: Story = {
  args: {
    left: itemsLeft,
    right: itemsRight,
    leftLimit: 5
  }
}
export const AutoDropdown: Story = {
  args: {
    left: itemsLeft,
    autoDropdown: true,
    leftLimit: undefined,
    right: itemsRight
  }
}

export const Variations: Story = {
  render: (args: ToolbarProps) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Toolbar {...args} left={itemsLeft.slice(0, 4)} right={itemsRight} />
      <Toolbar {...args} left={itemsLeft.slice(0, 4)} right={itemsRight.slice(0, 1)} />
      <Toolbar {...args} left={itemsLeft.slice(0, 4)} right={itemsRight.slice(1, 2)} />
      <Toolbar {...args} left={itemsLeft.slice(0, 4)} />
      <Toolbar {...args} right={itemsRight} />
      <Toolbar {...args} right={itemsRight.slice(0, 1)} />
      <Toolbar {...args} right={itemsRight.slice(1, 2)} />
    </div>
  )
}

export const WithCollapsibleSearch: Story = {
  render: (args: ToolbarProps) => (
    <Toolbar {...args} left={itemsLeft} right={itemsWithCollapsibleSearch} autoDropdown />
  )
}

export const WithCustomElements: Story = {
  render: (args: ToolbarProps) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Toolbar {...args} left={customItems} styleLeft={{ left: '8px' }} />
      <Toolbar {...args} right={customItems} styleRight={{ right: '8px' }} />
    </div>
  )
}
