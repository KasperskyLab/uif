import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls, sbSetDefaultValue } from '@sb/helpers'
import { StoryColumn } from '@sb/StoryComponents'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { SectionMessage } from '../SectionMessage'
import { SectionMessageMode, SectionMessageProps } from '../types'

const ActionsButtons: SectionMessageProps['actions'] = {
  FIRST_ACTION: {
    text: 'Action1',
    onClick: () => console.log('Action1')
  },
  SECOND_ACTION: {
    text: 'Action2',
    onClick: () => console.log('Action2')
  }
}

const meta: Meta<SectionMessageProps> = {
  title: 'Hexa UI Components/SectionMessage',
  component: SectionMessage,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    title: 'Title',
    mode: 'success',
    testId: 'section-message-test-id',
    klId: 'section-message-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    }
  },
  decorators: [
    (Story, context) => (
      <StoryColumn>
        <Story {...context} />
      </StoryColumn>
    )
  ]
}
export default meta

type Story = StoryObj<SectionMessageProps>

export const Basic: Story = {}

export const WithChildrenAndActions: Story = {
  args: {
    children: <Text type="BTR3">Title and actions are optional. Toggle their visibility as needed.</Text>,
    actions: ActionsButtons
  }
}

export const AllModes: Story = {
  render: (args: SectionMessageProps) => {
    const modes: SectionMessageMode[] = ['error', 'success', 'warning', 'info']
    return (
      <>
        {modes.map(mode => <SectionMessage {...args} key={mode} mode={mode}/>)}
      </>
    )
  },
  argTypes: {
    expandable: sbSetDefaultValue('true')
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.section_message },
  render: args => <ThemedPalette {...args} />
}
