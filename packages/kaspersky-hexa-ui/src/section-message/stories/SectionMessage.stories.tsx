import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { SectionMessage } from '../SectionMessage'
import { SectionMessageProps } from '../types'

import { defaultArgs, sectionMessagePropPresentation } from './SectionMessage.controls'

export { sectionMessagePropPresentation }

const sectionMessageControlsOrder = getControlsInclude(sectionMessagePropPresentation)

export const sectionMessageStorySettings: Meta<SectionMessageProps> = {
  args: {
    ...defaultArgs,
    testId: 'section-message-test-id',
    klId: 'section-message-kl-id'
  },
  argTypes: buildStoryArgTypes(sectionMessagePropPresentation),
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/SectionMessage',
  component: SectionMessage,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['sectionMessagePropPresentation', 'sectionMessageStorySettings'],
  ...sectionMessageStorySettings
} satisfies Meta<typeof SectionMessage>

export default meta

type Story = StoryObj<SectionMessageProps>

export const Playground: Story = {
  name: 'Playground',

  parameters: {
    controls: {
      include: sectionMessageControlsOrder,
      sort: 'none'
    }
  },

  render: ({ children, ...rest }: SectionMessageProps) => (
    <SectionMessage {...rest}>
      {typeof children === 'string' ? (
        <Text type="BTR3">{children}</Text>
      ) : (
        children
      )}
    </SectionMessage>
  )
}
