import React from 'react'
import { badges } from '../../../.storybook/badges'
import { Button } from '../../button'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import { useTheme } from '../../../design-system/theme/hooks'
import { Story } from '@storybook/react'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import Meta from '../__meta__/meta.json'
import { Toolbar } from '../Toolbar'
import { ToolbarItemKey, ToolbarItems, ToolbarProps } from '../types'
import { Search } from '../../search'
import { Link } from '../../link'
import { Text } from '../../typography'
import { ToolbarDocs } from './ToolbarDocs'

export default {
  title: 'Molecules/Toolbar',
  component: Toolbar,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta, ToolbarDocs)
    }
  }
}

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
    children: (
      <Toolbar.FilterItem onClick={() => console.log('filter')} disabled />
    )
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

export const Default: Story<ToolbarProps> = (args) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <div style={{ width: '100%' }}>
        <Toolbar {...args} left={itemsLeft.slice(0, 4)} right={itemsRight} />
      </div>
    </StoryLayout>
  )
}

Default.argTypes = {
  componentId: { defaultValue: 'kl-toolbar' },
  theme: {
    table: {
      disable: true
    }
  },
  leftLimit: {
    table: {
      disable: true
    }
  }
}

export const WithLeftLimit: Story<ToolbarProps> = (args) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <div style={{ width: '100%' }}>
        <Toolbar {...args} left={itemsLeft} right={itemsRight} />
      </div>
    </StoryLayout>
  )
}

WithLeftLimit.argTypes = {
  componentId: { defaultValue: 'kl-toolbar' },
  theme: {
    table: {
      disable: true
    }
  },
  leftLimit: {
    defaultValue: 4,
    control: { type: 'number' }
  }
}
