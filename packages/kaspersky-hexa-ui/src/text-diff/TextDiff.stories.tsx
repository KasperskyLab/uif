import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import MetaData from './__meta__/meta.json'
import { TextDiff as TextDiffComponent } from './TextDiff'
import { TextDiffProps } from './types'

const meta: Meta<TextDiffProps> = {
  component: TextDiffComponent,
  title: 'Hexa UI Components/Text diff',
  argTypes: {
    textType: {
      options: Object.keys(textLevels),
      control: { type: 'select' }
    }
  },
  args: {
    testId: 'text-diff-test-id',
    klId: 'text-diff-kl-id',
    newText: 'New text',
    oldText: 'Old text',
    textType: 'BTR3'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <div style={{ width: 200 }}>
        <Story {...context} />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<TextDiffProps>

export const TextDiff: Story = {}
