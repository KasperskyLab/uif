import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { allPlugins } from '../index'
import { RichTextEditorContainer as RichTextEditor } from '../RichTextEditorContainer'

import {
  initialValue,
  initialValueEmpty,
  longValue
} from './richTextEditorData'

const Container = ({ children }: { children?: React.ReactNode }) => (
  <div style={{ width: '100%' }}>{children}</div>
)

const meta = {
  title: 'Hexa UI Components/RichTextEditor',
  component: RichTextEditor,
  parameters: {
    badges: [badges.stable],
    docs: {
      page: withMeta(MetaData)
    }
  },
  args: {
    placeholder: 'Начните вводить текст...',
    plugins: allPlugins,
    initialValue,
    readOnly: false,
    testId: 'rich-text-editor'
  },
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onFocus: { action: 'focused' },
    onHover: { action: 'hovered' }
  },
  decorators: [
    (Story, context) => <Container><Story {...context} /></Container>
  ]
} satisfies Meta<typeof RichTextEditor>

export default meta

type Story = StoryObj<typeof RichTextEditor>

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
