import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { useTheme } from '@design-system/theme'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls, sbSetDefaultValue } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from './__meta__/meta.json'
import { Anchor } from './Anchor/Anchor'
import { AnchorProps } from './Anchor/types'

const meta: Meta<AnchorProps> = {
  title: 'Deprecated/Anchor',
  component: Anchor,
  argTypes: {
    affix: {
      ...sbSetDefaultValue('true'),
      control: { type: 'boolean' }
    },
    offsetTop: {
      ...sbSetDefaultValue('0'),
      control: { type: 'number' }
    },
    items: {
      table: {
        type: {
          summary: 'AnchorLinkProps[]',
          detail: `
[
  {
    href: string;
    title: string;
    counter?: number;
    hasNotification?: boolean;
  }
]
        `
        }
      }
    },
    ...sbHideControls(['theme'])
  },
  args: {
    items: [
      { href: '#anchor-1', title: 'Simple title' },
      { href: '#anchor-2', title: 'With counter', counter: 10 },
      { href: '#anchor-3', title: 'With notification', hasNotification: true },
      {
        href: '#anchor-4',
        title: 'With counter & notification',
        counter: 25,
        hasNotification: true
      },
      {
        href: '#anchor-5',
        title: 'Anchor 5',
        counter: 20
      }, {
        href: '#anchor-6',
        title: 'Anchor 6',
        hasNotification: true
      }
    ],
    testId: 'anchor-test-id',
    klId: 'anchor-kl-id'
  },
  parameters: {
    badges: [badges.deprecated],
    deprecatedLink: 'Hexa UI Components/AnchorNavigation',
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}
export default meta

type Story = StoryObj<AnchorProps>

export const Basic: Story = {
  render: (args: AnchorProps) => {
    const theme = useTheme()

    const baseBlockStyle = {
      height: '120vw',
      border: `1px solid ${theme.colors['text-icons-elements'].primary}`,
      color: theme.colors['text-icons-elements'].primary,
      verticalAlign: 'middle',
      lineHeight: '100vw',
      textAlign: 'center'
    }

    return (
      <div style={{ minWidth: '90vw' }}>
        <Anchor {...args} />
        {
          [...Array(10).keys()].map(item => (
            <div id={`anchor-${item}`} style={{ ...baseBlockStyle, textAlign: 'center' }} key={item}>
              {item}
            </div>
          ))
        }
      </div>
    )
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: { anchor_links: componentColors.anchor_links, anchor_links_item: componentColors.anchor_links_item } },
  render: args => <ThemedPalette {...args} />
}
