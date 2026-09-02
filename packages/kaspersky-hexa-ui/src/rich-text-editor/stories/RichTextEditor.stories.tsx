import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import type { Meta } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { allPlugins } from '../index'
import { RichTextEditorContainer as RichTextEditor } from '../RichTextEditorContainer'

import { Basic, Story, StoryRichTextEditorProps } from './helpers'
import { componentPropPresentation, defaultArgs } from './RichTextEditor.controls'
import { initialValue } from './richTextEditorData'

const Container = ({ children }: { children?: React.ReactNode }) => (
  <div style={{ width: '100%' }}>{children}</div>
)

export const richTextEditorStorySettings: Meta<StoryRichTextEditorProps> = {
  argTypes: {
    ...buildStoryArgTypes(componentPropPresentation)
  },
  args: {
    ...defaultArgs,
    initialValue,
    plugins: allPlugins,
    testId: 'rich-text-editor'
  },
  parameters: {
    badges: [badges.stable],
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => <Container><Story {...context} /></Container>
  ],
  render: Basic.bind({})
}

const meta = {
  title: 'Hexa UI Components/RichTextEditor',
  component: RichTextEditor,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['richTextEditorStorySettings'],
  ...richTextEditorStorySettings
} satisfies Meta<StoryRichTextEditorProps>

export default meta

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(componentPropPresentation),
      sort: 'none'
    }
  }
}
