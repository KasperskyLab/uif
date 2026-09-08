import type { Meta } from '@storybook/react'

import { RichTextEditorContainer as RichTextEditor } from '../RichTextEditorContainer'

import { Basic, Story, StoryRichTextEditorProps } from './helpers'
import { richTextEditorStorySettings } from './RichTextEditor.stories'
import {
  initialValueEmpty,
  longValue
} from './richTextEditorData'

const meta = {
  title: 'Hexa UI Components/RichTextEditor/Stories',
  component: RichTextEditor,
  tags: ['!autodocs'],
  render: Basic.bind({}),
  ...richTextEditorStorySettings
} satisfies Meta<StoryRichTextEditorProps>

export default meta

export const RichTextEnabled: Story = {
  args: {
    enabled: true
  }
}

export const ReadOnly: Story = {
  args: {
    readOnly: true
  }
}

export const Empty: Story = {
  args: {
    initialValue: initialValueEmpty
  }
}

export const CustomPlaceholder: Story = {
  args: {
    initialValue: initialValueEmpty,
    placeholder: 'This is custom placeholder'
  }
}

export const WithTextLimit: Story = {
  args: {
    initialValue: longValue,
    limitTextSize: 60
  }
}
