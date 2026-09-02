import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Field } from '@src/field'
import { clickHandler } from '@src/menu/stories/CustomItem'
import { Notification } from '@src/notification'
import { Meta, StoryObj } from '@storybook/react'
import React, { useEffect, useMemo, useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MigrationInputPasswordData from '../../__meta__/migrationInputPassword.json'
import { Textbox } from '../../Textbox'
import { TextboxPasswordProps, TextboxProps } from '../../types'

import { textboxStorySettings } from './Textbox.stories'

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

const defaultValidationResult = validationRules.map((rule) => ({
  message: rule.message,
  isValid: false
}))

const meta: Meta<TextboxProps> = {
  title: 'Hexa UI Components/Inputs/Textbox/Stories',
  component: Textbox,
  tags: ['!autodocs'],
  ...textboxStorySettings
}

export default meta

type Story = StoryObj<TextboxProps>

export const Basic: Story = {
  args: { showClearButton: false }
}

export const PasswordTextbox: StoryObj<TextboxPasswordProps> = {
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('')
    return (
      <Textbox.Password
        {...args}
        value={value}
        onChange={nextValue => setValue(nextValue)}
      />
    )
  }
}

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
        control={(
          <Textbox.Password
            {...args}
            value={value}
            onChange={setValue}
            validationRules={validationResult}
            validationStatus={validationStatus}
          />
        )}
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

type PaletteStory = StoryObj<ThemedPaletteProps>

export const ColorTokens: PaletteStory = {
  args: { source: componentColors.input_text },
  render: args => <ThemedPalette {...args} />
}
