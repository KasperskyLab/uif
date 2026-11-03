import { ConfigProvider } from '@design-system/context/provider/ConfigProvider'
import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react'
import i18next from 'i18next'
import React, { useState } from 'react'
import styled from 'styled-components'

import InputNumberMetaData from '../../__meta__/inputNumberMeta.json'
import { InputNumber } from '../../InputNumber'
import { TextboxNumberProps } from '../../types'

import { defaultArgs, inputNumberPropPresentation } from './InputNumber.controls'

const Wrapper = styled.div`
  width: 300px;
`

export const ruI18n = i18next.createInstance()
ruI18n.init({ lng: 'ru-ru', resources: {}, initImmediate: false })

export const enI18n = i18next.createInstance()
enI18n.init({ lng: 'en-us', resources: {}, initImmediate: false })

export const inputNumberStorySettings: Meta<TextboxNumberProps> = {
  argTypes: buildStoryArgTypes(inputNumberPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'input-number-test-id',
    klId: 'input-number-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: InputNumberMetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    )
  ]
}

const meta: Meta<typeof InputNumber> = {
  title: 'Hexa UI Components/Inputs/InputNumber',
  component: InputNumber,
  tags: ['!autodocs'],
  includeStories: ['Playground', 'Grouping'],
  excludeStories: ['inputNumberStorySettings'],
  ...inputNumberStorySettings
}

export default meta

type Story = StoryObj<TextboxNumberProps>

const InputNumberPlayground: React.FC<TextboxNumberProps> = ({
  value: valueProp,
  onChange,
  ...rest
}) => {
  const [value, setValue] = React.useState<TextboxNumberProps['value']>(valueProp)

  React.useEffect(() => {
    setValue(valueProp)
  }, [valueProp])

  return (
    <InputNumber
      {...rest}
      value={value}
      onChange={(newValue) => {
        setValue(newValue)
        onChange?.(newValue)
      }}
    />
  )
}

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <InputNumberPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(inputNumberPropPresentation),
      sort: 'none'
    }
  }
}

export const Grouping: Story = {
  name: 'Digit Grouping',
  render: function RenderGrouping (args) {
    const [callbackValue, setCallbackValue] = useState<number | string | undefined>()

    return (
      <Space gap="grouped">
        <div>
          <div>Русская локаль — ru-ru</div>
          <ConfigProvider locale="ru-ru" i18n={ruI18n}>
            <InputNumberPlayground {...args} useGrouping />
          </ConfigProvider>
        </div>

        <div>
          <div>Английская локаль — en-us</div>
          <ConfigProvider locale="en-us" i18n={enI18n}>
            <InputNumberPlayground {...args} useGrouping />
          </ConfigProvider>
        </div>

        <div>
          <div>Локаль из настроек Storybook</div>
          <InputNumberPlayground
            useGrouping
            onChange={value => {
              setCallbackValue(value)
            }}
          />
          <div>
            {callbackValue === undefined
              ? 'Измените значение, чтобы увидеть результат onChange'
              : `onChange: ${callbackValue} (тип: ${typeof callbackValue})`}
          </div>
        </div>
      </Space>
    )
  },
  args: { value: 1234567.89 }
}