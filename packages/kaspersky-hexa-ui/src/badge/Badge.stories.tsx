import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { StyledTag, TooltipCompositionWarning } from '@sb/components/Warnings'
import { PropsWithTooltip } from '@sb/helpers'
import { renderVariants } from '@sb/StoryComponents'
import { SectionMessage } from '@src/section-message'
import { Space } from '@src/space'
import { Tooltip } from '@src/tooltip'
import { P } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import MetaData from './__meta__/meta.json'
import { Badge as BadgeComponent } from './Badge'
import { badgeModes, BadgeProps, badgeSizes, badgeTransparentModes } from './types'

const storySettings: Meta = {
  argTypes: {
    mode: {
      control: 'select',
      options: badgeModes
    },
    size: {
      control: false,
      defaultValue: 'medium'
    }
  },
  args: {
    overflowCount: 99,
    count: 1,
    size: 'medium',
    mode: 'neutral',
    text: '',
    testId: 'badge-test-id',
    klId: 'badge-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: /(title|tooltip)/
    },
    design: MetaData.pixsoView
  }
}

const meta: Meta<BadgeProps> = {
  title: 'Hexa UI Components/Badge',
  component: BadgeComponent,
  ...withDesignControls<BadgeProps>({
    componentName: 'badge',
    meta: storySettings
  })
}

export default meta

type BadgeStoryProps = PropsWithTooltip<BadgeProps>
type Story = StoryObj<BadgeStoryProps>

export const Badge: Story = {}

export const Mode: Story = {
  render: (args: BadgeProps) =>
    renderVariants(
      badgeModes.map(mode => ({
        label: mode,
        content:
          <BadgeComponent
            {...args}
            size="medium"
            mode={mode}
          />
      })),
      true,
      'medium'
    ),
  argTypes: {
    mode: { control: false },
    size: { control: false }
  }
}

export const Size: Story = {
  render: (args: BadgeProps) => <div style={{ width: '100%' }}>
    <SectionMessage closable={false} mode="info" style={{ marginBottom: 16 }}>
      <P>The large size is only available for the following two modes: <StyledTag>neutralTransparent</StyledTag>, <StyledTag>criticalTransparent</StyledTag>. For all other modes, use medium.</P>
      <P>Размер large доступен только для двух модов: <StyledTag>neutralTransparent</StyledTag>, <StyledTag>criticalTransparent</StyledTag>. Для всех остальных модов используйте medium.</P>
    </SectionMessage>
    { renderVariants(
      badgeSizes.map(size => ({
        label: size,
        content: (
          <Space gap={16}>
            {size === 'medium'
              ? badgeModes.map(mode => <BadgeComponent {...args} key={mode} text={args.text || mode} size="medium" mode={mode} />)
              : badgeTransparentModes.map(mode => <BadgeComponent {...args} key={mode} text={args.text || mode} size="large" mode={mode} />)
            }
          </Space>
        )
      })),
      true
    )}
  </div>,
  argTypes: {
    mode: { control: false },
    size: { control: false }
  }
}

export const WithText: Story = {
  args: {
    text: 'Badge text'
  }
}

export const WithTooltip: Story = {
  render: (args: BadgeStoryProps) => (
    <div style={{ width: '100%' }}>
      <TooltipCompositionWarning />
      <Tooltip text={args.tooltip}>
        <span><BadgeComponent {...args} /></span>
      </Tooltip>
    </div>
  ),
  argTypes: {
    tooltip: {
      control: 'text'
    }
  },
  args: {
    tooltip: 'Tooltip'
  },
  parameters: {
    controls: {
      exclude: /(title)/
    }
  }
}

export const WithOverflow: Story = {
  args: {
    count: 10,
    overflowCount: 9
  }
}
