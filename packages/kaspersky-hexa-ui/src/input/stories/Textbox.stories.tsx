import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { validationStatuses } from '@helpers/typesHelpers'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { Textbox } from '../Textbox'
import {
  TextboxMaskedProps,
  TextboxNumberProps,
  TextboxPasswordProps,
  TextboxProps,
  TextboxTextareaProps
} from '../types'

const meta: Meta<TextboxProps> = {
  title: 'Hexa UI Components/Inputs/Input',
  component: Textbox,
  argTypes: {
    validationStatus: {
      control: { type: 'radio' },
      options: validationStatuses
    },
    ...sbHideControls(['theme'])
  },
  args: {
    disabled: false,
    readOnly: false,
    validationStatus: 'default',
    placeholder: 'Placeholder',
    className: '',
    testId: 'input-test-id',
    klId: 'input-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    )
  ]
}
export default meta

const Wrapper = styled.div`
  width: 300px;
`

const getMaskOptions = (type: unknown) => ({
  Date: {
    mask: Date,
    lazy: false,
    overwrite: true,
    autofix: true
  },
  Number: {
    mask: Number
  },
  Phone: {
    mask: '+7 (000) 000-00-00',
    lazy: false,
    overwrite: true,
    autofix: true
  },
  Pattern: {
    mask: '{#}000[aaa]/NIC-`*[**]',
    lazy: false,
    overwrite: true,
    autofix: true
  },
  Email: {
    mask: 'NAME@HOST.CODE',
    blocks: {
      // eslint-disable-next-line no-useless-escape
      NAME: { mask: /^[a-zA-Z0-9_\-\.]*$/ },
      // eslint-disable-next-line no-useless-escape
      HOST: { mask: /^[a-zA-Z0-9_\-]*$/ },
      // eslint-disable-next-line no-useless-escape
      CODE: { mask: /^[a-zA-Zs\.]{1,8}$/ }
    }
  },
  None: undefined,
  IP: {
    mask: 'NUM.NUM.NUM.NUM',
    blocks: {
      NUM: {
        mask: /^[0-9]{1,3}$/
      }
    }
  },
  MAC: {
    mask: 'MACAD:MACAD:MACAD:MACAD',
    blocks: {
      MACAD: { mask: /^[0-9a-f]{1,2}$/ }
    },
    lazy: false,
    overwrite: true,
    autofix: true
  }
}[type as string])

// Basic
export const Basic: StoryObj<TextboxProps> = {}

// Masked
type TextboxMaskedPropsForStory = TextboxMaskedProps & { mask: string }
export const MaskedTextbox: StoryObj<TextboxMaskedPropsForStory> = {
  render: ({ mask, ...args }: TextboxMaskedPropsForStory) => (
    <Textbox.Masked
      maskOptions={getMaskOptions(mask)}
      {...args}
    />
  ),
  argTypes: {
    mask: {
      control: { type: 'select', default: 'None' },
      options: ['None', 'Date', 'Number', 'Phone', 'Pattern', 'Email', 'IP', 'MAC']
    }
  }
}

// Number
export const NumberTextbox: StoryObj<TextboxNumberProps> = {
  render: (args: TextboxNumberProps) => {
    const [value, setValue] = useState<TextboxNumberProps['value']>(0)
    return (
      <Textbox.Number
        {...args}
        value={value}
        onChange={valueNumber => setValue(valueNumber)}
      />
    )
  },
  argTypes: {
    allowEmpty: {
      control: 'boolean',
      description: 'Allow input have not the value'
    }
  }
}

// Password
type TextboxPasswordPropsForStory = TextboxPasswordProps & { readOnly: boolean }
export const PasswordTextbox: StoryObj<TextboxPasswordPropsForStory> = {
  render: (args: TextboxPasswordPropsForStory) => {
    const [value, setValue] = useState('')
    return (
      <Textbox.Password
        {...args}
        value={value}
        onChange={value => setValue(value)}
      />
    )
  },
  argTypes: {
    readOnly: { table: { disable: true } }
  }
}

// Textarea
export const TextareaTextbox: StoryObj<TextboxTextareaProps> = {
  render: (args: TextboxTextareaProps) => {
    const [value, setValue] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
    return (
      <Textbox.Textarea
        {...args}
        value={value}
        onChange={(value) => setValue(value)}
      />
    )
  },
  argTypes: {
    maxLength: { type: 'number' },
    rows: { type: 'number' },
    showCount: { type: 'boolean' }
  },
  args: {
    showCount: false,
    maxLength: 1024
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.input_text },
  render: args => <ThemedPalette {...args} />
}
