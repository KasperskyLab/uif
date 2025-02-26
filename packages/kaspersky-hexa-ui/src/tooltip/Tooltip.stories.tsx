import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { StyledTag } from '@sb/components/Warnings'
import { sbHideControls } from '@sb/helpers'
import { StoryColumn } from '@sb/StoryComponents'
import { Button } from '@src/button'
import { SectionMessage } from '@src/section-message'
import { P, Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from './__meta__/meta.json'
import { Tooltip } from './Tooltip'
import { TooltipProps } from './types'

const meta: Meta<TooltipProps> = {
  title: 'Hexa UI Components/Tooltip',
  component: Tooltip,
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    ...sbHideControls(['theme'])
  },
  args: {
    text: 'Lorem ipsum'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<TooltipProps>

export const Basic: Story = {
  render: (args: TooltipProps) => (
    <StoryColumn style={{ paddingLeft: '200px' }}>
      <Text type="BTM5" themedColor="primary">
        Tooltip here:
      </Text>
      <Tooltip {...args}>
        <Button>hover me to see Tooltip</Button>
      </Tooltip>
    </StoryColumn>
  )
}

export const WithTextComponent: Story = {
  render: (args: TooltipProps) => (
    <StoryColumn style={{ paddingLeft: '200px' }}>
      <Text type="BTM5">
        Tooltip here:
      </Text>
      <Tooltip
        {...args}
        text={<Text type="BTM3" themedColor="primary-invert">I&apos;m a Text component</Text>}
      >
        <Button>hover me to see Tooltip</Button>
      </Tooltip>
    </StoryColumn>
  )
}

export const WithDisabledComponent: Story = {
  render: (args: TooltipProps) => <StoryColumn>
    <SectionMessage closable={false} mode="info" style={{ marginBottom: 16 }}>
      <P>Use wrapper for <StyledTag>disabled</StyledTag> components inside <StyledTag>Tooltip</StyledTag> if it&apos;s not working</P>
      <P>Используйте обёртку для <StyledTag>disabled</StyledTag> компонентов внутри <StyledTag>Tooltip</StyledTag> если тултип не отображается</P>
    </SectionMessage>
    <Tooltip
      {...args}
    >
      <span><Button disabled={true} text="Button" /></span>
    </Tooltip>
  </StoryColumn>
}

export const PerformanceExample: Story = {
  render: (args: TooltipProps) => {
    const tooltips = React.useMemo(() => {
      const arr: number[] = []
      for (let i = 0; i <= 1000; i++) {
        arr.push(i)
      }
      return arr
    }, [])

    return (
      <StoryColumn>
        {tooltips.map((t) => (
          <Tooltip
            {...args}
            key={t}
            text={t}
            destroyTooltipOnHide={{ keepParent: false }}
          >
            <Text>{t}: hover me to see Tooltip</Text>
          </Tooltip>
        ))}
      </StoryColumn>
    )
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.tooltip },
  render: args => <ThemedPalette {...args} />
}
