import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { validationStatuses } from '@helpers/typesHelpers'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Field } from '@src/field'
import { clickHandler } from '@src/menu/stories/CustomItem'
import { Notification } from '@src/notification'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'


import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import MigrationInputPasswordData from '../__meta__/migrationInputPassword.json'
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
    design: MetaData.pixsoView
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
    const [value, setValue] = useState<TextboxNumberProps['value']>()
    return (
      <Textbox.Number
        {...args}
        value={value}
        onChange={valueNumber => setValue(valueNumber)}
      />
    )
  },
  args: {
    value: undefined
  },
  argTypes: {
    min: {
      control: 'number',
      description: 'The min value'
    },
    integerOnly: {
      control: 'boolean',
      description: 'Allow input of integers only'
    },
    allowEmpty: {
      control: 'boolean',
      description: 'Allow input have not the value'
    }
  }
}

// Password
export const PasswordTextbox: StoryObj<TextboxPasswordProps> = {
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('')
    return (
      <Textbox.Password
        {...args}
        value={value}
        onChange={value => setValue(value)}
      />
    )
  }
}

const validationRules = [
  {
    message: 'Пароль содержит от 8 до 256 символов.',
    validate: (v: string) => v.length >= 8 && v.length <= 256
  },
  {
    message: 'Пароль содержит символы как минимум трех групп из четырех:\n- верхний регистр (A–Z);\n- нижний регистр (a–z);\n- цифры (0–9);\n- специальные символы (@ # $ % ^ & * - _ ! + = [ ] { } | : \' , . ? / \\ ` ~ " ( ) );',
    validate: (v: string) => {
      const groups = [
        /[A-Z]/.test(v),
        /[a-z]/.test(v),
        /[0-9]/.test(v),
        /[@#$%^&*\-_!+=[\]{}|:'",.?/\\`~"()]/.test(v)
      ]
      return groups.filter(Boolean).length >= 3
    }
  },
  {
    message: 'Пароль не содержит пробелов, символов Юникода или комбинаций "." и "@", расположенных рядом друг с другом.',
    validate: (v: string) => !/[^\x20-\x7E]/.test(v) && !v.includes('.@') && !v.includes('@.')
  }
]

const defaultValidationResult = validationRules.map((rule) => {
  return {
    message: rule.message,
    isValid: false
  }
})

export const PasswordWithValidation: StoryObj<TextboxPasswordProps> = {
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('kXp7*8$tE!R&2f')
    const [validationResult, setValidationResult] = useState(defaultValidationResult)

    useEffect(() => {
      setValidationResult(validationRules.map(rule => ({
        message: rule.message,
        isValid: rule.validate ? rule.validate(value) : false
      })))
    }, [value])

    const isValid = useMemo(() => validationResult.every((r) => r.isValid), [validationResult])
    const validationStatus = isValid ? 'success' : 'error'

    return (
      <Field
        control={
          <Textbox.Password
            {...args}
            value={value}
            onChange={setValue}
            validationRules={validationResult}
            validationStatus={validationStatus}
          />
        }
        message={isValid ? 'Все требования к паролю выполнены' : 'Некорректный пароль'}
        messageMode={validationStatus}
      />
    )
  },
  parameters: {
    design: MigrationInputPasswordData.pixsoView
  }
}

export const PasswordWithActions: StoryObj<TextboxPasswordProps> = {
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('')
    return (
      <>
        <Notification />
        <Textbox.Password
          {...args}
          value={value}
          onChange={setValue}
          actions={[
            {
              tooltip: 'Скопировать',
              icon: 'Copy',
              onClick: () => clickHandler('Пароль скопирован!')
            },
            {
              tooltip: 'Сгенерировать надежный пароль',
              icon: 'Key',
              onClick: () => clickHandler('Пароль сгенерирован!')
            }
          ]}
        />
      </>
    )
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
