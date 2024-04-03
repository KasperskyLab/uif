import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { Text } from '@src/typography/text'
import { SectionMessage } from '../SectionMessage'
import { SectionMessageMode, SectionMessageProps } from '../types'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbHideControls, sbSetDefaultValue } from '@helpers/storybookHelpers'
import { StoryColumn } from '@sb/StoryComponents'
import MetaData from '../__meta__/meta.json'

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
  title: 'Molecules/SectionMessage',
  component: SectionMessage,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    title: 'Title',
    mode: 'success',
    children: <Text type="BTR3">Title and actions are optional. Toggle their visibility as needed.</Text>,
    actions: ActionsButtons,
    testId: 'section-message-test-id',
    klId: 'section-message-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
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
