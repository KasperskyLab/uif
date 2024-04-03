import React from 'react'
import { AnchorProps } from './Anchor/types'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { useTheme } from '@design-system/theme'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbSetDefaultValue, sbHideControls } from '@helpers/storybookHelpers'
import MetaData from './__meta__/meta.json'
import { Anchor } from './Anchor/Anchor'

const meta: Meta<AnchorProps> = {
  title: 'Atoms/Anchor',
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
    badges: [badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
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
