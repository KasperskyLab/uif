import { Field } from '@src/field'
import { clickHandler } from '@src/menu/stories/CustomItem'
import { Notification } from '@src/notification'
import { Meta, StoryObj } from '@storybook/react'
import React, { useEffect, useMemo, useState } from 'react'

import { InputPassword } from '../InputPassword'
import { TextboxPasswordProps } from '../types'
import {
  defaultInputPasswordValidationResult,
  inputPasswordValidationRules
} from './inputPasswordExamples'
import { inputPasswordStorySettings } from './InputPassword.stories'

const meta: Meta<TextboxPasswordProps> = {
  title: 'Hexa UI Components/Inputs/InputPassword/Stories',
  component: InputPassword,
  tags: ['!autodocs'],
  ...inputPasswordStorySettings
}

export default meta

type Story = StoryObj<TextboxPasswordProps>

export const Basic: Story = {
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('')
    return (
      <InputPassword
        {...args}
        value={value}
        onChange={setValue}
      />
    )
  }
}

export const WithValidation: Story = {
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('kXp7*8$tE!R&2f')
    const [validationResult, setValidationResult] = useState(defaultInputPasswordValidationResult)

    useEffect(() => {
      setValidationResult(inputPasswordValidationRules.map(rule => ({
        message: rule.message,
        isValid: rule.validate ? rule.validate(value) : false
      })))
    }, [value])

    const isValid = useMemo(() => validationResult.every((r) => r.isValid), [validationResult])
    const validationStatus = isValid ? 'success' : 'error'

    return (
      <Field
        control={(
          <InputPassword
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
    design: 'https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?item-id=39947:148357'
  }
}

export const WithActions: Story = {
  render: (args: TextboxPasswordProps) => {
    const [value, setValue] = useState('')
    return (
      <>
        <Notification />
        <InputPassword
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
