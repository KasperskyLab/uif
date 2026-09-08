import { Meta, StoryObj } from '@storybook/react'

import { TextDiff } from '../TextDiff'
import { TextDiffProps } from '../types'
import { textDiffStorySettings } from './TextDiff.stories'

const meta: Meta<typeof TextDiff> = {
  title: 'Hexa UI Components/TextDiff/Stories',
  component: TextDiff,
  tags: ['!autodocs'],
  ...textDiffStorySettings
}

export default meta

type Story = StoryObj<TextDiffProps>

export const Basic: Story = {}
