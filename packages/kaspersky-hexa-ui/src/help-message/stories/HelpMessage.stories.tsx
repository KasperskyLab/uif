import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'

import MetaData from '../__meta__/meta.json'
import { HelpMessage } from '../HelpMessage'
import { HelpMessageProps } from '../types'
import { defaultArgs, helpMessagePropPresentation } from './HelpMessage.controls'

const helpMessageControlsOrder = getControlsInclude(helpMessagePropPresentation)

export const helpMessageStorySettings: Meta<HelpMessageProps> = {
  argTypes: buildStoryArgTypes(helpMessagePropPresentation),
  args: {
    ...defaultArgs,
    testId: 'help-message-test-id',
    klId: 'help-message-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

const meta: Meta<typeof HelpMessage> = {
  title: 'Hexa UI Components/HelpMessage',
  component: HelpMessage,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['helpMessageStorySettings'],
  ...helpMessageStorySettings
}

export default meta

type Story = StoryObj<HelpMessageProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: helpMessageControlsOrder,
      sort: 'none'
    }
  }
}
