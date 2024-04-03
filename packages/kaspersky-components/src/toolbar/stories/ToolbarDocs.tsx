import React from 'react'
import {
  Subtitle,
  CodeOrSourceMdx
} from '@storybook/addon-docs'

export const ToolbarDocs: React.VFC = () => {
  const codeExample = `
import { Toolbar, Search, Link, Text } from '@kaspersky/components'
import { ToolbarItems, ToolbarProps } from '@kaspersky/components/toolbar/types'

const items = [
  {
    children: (
      <Link target='_blank' href='#'>
        1st menu item
      </Link>
    )
  },
  {
    children: <Button>2nd menu item</Button>
  },
  {
    children: <Text type='BTR3'>3rd menu item</Text>,
    disabled: true
  }
]

const itemsLeft: ToolbarItems[] = [
  {
    type: 'button',
    key: '1',
    label: 'Tool 1',
    iconBefore: <Placeholder />,
    onClick: () => console.log('Tool 1')
  },
  {
    type: 'button',
    key: '2',
    label: 'Tool 2',
    iconBefore: <Placeholder />,
    disabled: true,
    onClick: () => console.log('Tool 2')
  },
  {
    type: 'divider',
    key: 'divider'
  },
  {
    type: 'button',
    key: '3',
    label: 'Tool 3',
    onClick: () => console.log('Tool 3')
  },
  {
    type: 'dropdown',
    key: '4',
    label: 'Tool 4',
    overlay: items,
    disabled: true
  },
  {
    type: 'button',
    key: '5',
    label: 'Tool 5',
    onClick: () => console.log('Tool 5')
  },
  {
    type: 'button',
    key: '6',
    label: 'Tool 6',
    onClick: () => console.log('Tool 6')
  },
  {
    type: 'children',
    key: '7',
    children: 'text'
  },
  {
    type: 'children',
    key: '8',
    children: <Link href='#' text='Link'/>
  }
]

const itemsRight: ToolbarItems[] = [
  {
    type: 'children',
    key: '1',
    children: <Search.WithIconRight onChange={value => console.log(value)} />
  },
  {
    type: 'children',
    key: '2',
    children: (
      <Space size={4}>
        <Toolbar.SettingsItem onClick={() => console.log('settings')} />
        <Toolbar.FilterItem onClick={() => console.log('filter')} />
        <Toolbar.ScaleItem onClick={() => console.log('scale')} />
      </Space>
    )
  }
]

const App: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <Toolbar
        left={itemsLeft}
        right={itemsRight}
        leftLimit={2}
      />
    </div>
  )
}
`
  return (
    <>
      <Subtitle>Code example</Subtitle>
      <CodeOrSourceMdx>
        {codeExample}
      </CodeOrSourceMdx>
    </>
  )
}
