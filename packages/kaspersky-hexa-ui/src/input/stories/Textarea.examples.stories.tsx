import { renderVariants } from '@sb/StoryComponents'
import { validationStatuses } from '@helpers/typesHelpers'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Textbox } from '../Textbox'
import { TextboxTextareaProps } from '../types'

import { textareaStorySettings } from './Textarea.stories'

const meta: Meta<TextboxTextareaProps> = {
  title: 'Hexa UI Components/Textarea/Stories',
  component: Textbox.Textarea,
  tags: ['!autodocs'],
  ...textareaStorySettings
}

export default meta

type Story = StoryObj<TextboxTextareaProps>

const textareaValue = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'

const renderTextarea = (
  props: TextboxTextareaProps,
  value = textareaValue,
  onChange?: (value: string) => void
) => (
  <Textbox.Textarea
    {...props}
    value={value}
    onChange={onChange}
  />
)

export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState(textareaValue)
    const [emptyValue, setEmptyValue] = useState('')

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 400 }}>
        {renderTextarea(args, value, (v) => setValue(v))}
        {renderTextarea({
          ...args,
          placeholder: 'Empty textarea',
          rows: 5
        }, emptyValue, (v) => setEmptyValue(v))}
      </div>
    )
  }
}

export const State: Story = {
  render: (args) => {
    const [value, setValue] = useState(textareaValue)

    return (
      renderVariants(
        [
          {
            label: 'default',
            content: renderTextarea(args, value, (v) => setValue(v))
          },
          {
            label: 'readonly',
            content: renderTextarea({ ...args, readOnly: true }, textareaValue)
          },
          {
            label: 'disabled',
            content: renderTextarea({ ...args, disabled: true }, textareaValue)
          }
        ],
        true
      )
    )
  },
  argTypes: {
    disabled: { control: false, table: { disable: true } },
    readOnly: { control: false, table: { disable: true } }
  },
  args: {
    disabled: false,
    readOnly: false
  }
}

export const ValidationStatus: Story = {
  render: (args) =>
    renderVariants(
      validationStatuses.map((status) => ({
        label: status,
        content: renderTextarea({ ...args, validationStatus: status }, textareaValue)
      })),
      true
    )
}

export const WithCounter: Story = {
  render: (args) => {
    const [value, setValue] = useState('Текст в поле с ограничением.')

    return renderTextarea(
      { ...args, showCount: true, maxLength: 100 },
      value,
      (v) => setValue(v)
    )
  }
}
