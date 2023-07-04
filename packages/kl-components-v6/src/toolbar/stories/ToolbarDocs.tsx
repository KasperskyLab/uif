import React from 'react'
import {
  Subtitle,
  CodeOrSourceMdx
} from '@storybook/addon-docs'

export const ToolbarDocs: React.VFC<Record<string, unknown>> = () => {
  const codeExample = `
import { Toolbar, Search, Link, Text } from '@kl/components'
import { ToolbarItemKey, ToolbarItems, ToolbarProps } from '@kl/components/toolbar/types'

const items = [
  {
    children: (
      <Link target="_blank" href="#">
        1st menu item
      </Link>
    )
  },
  {
    children: <Button>2nd menu item</Button>
  },
  {
    children: <Text type="BTR3">3rd menu item</Text>,
    disabled: true
  }
]

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
    type: ToolbarItemKey.DROPDOWN,
    key: '4',
    label: 'Tool 4',
    overlay: items,
    disabled: true
  },
  {
    type: ToolbarItemKey.BUTTON,
    key: '5',
    label: 'Tool 5',
    onClick: () => console.log('Tool 5')
  },
  {
    type: ToolbarItemKey.BUTTON,
    key: '6',
    label: 'Tool 6',
    onClick: () => console.log('Tool 6')
  },
  {
    type: ToolbarItemKey.CHILDREN,
    key: '7',
    children: 'text'
  },
  {
    type: ToolbarItemKey.CHILDREN,
    key: '8',
    children: <Link href="#">Link</Link>
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
    children: <Toolbar.FilterItem onClick={() => console.log('filter')} disabled />
  },
  {
    type: ToolbarItemKey.CHILDREN,
    key: '3',
    children: <Toolbar.SettingsItem onClick={() => console.log('settings')} />
  },
  {
    type: ToolbarItemKey.CHILDREN,
    key: '4',
    children: <Toolbar.ScaleItem onClick={() => console.log('scale')} />
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
