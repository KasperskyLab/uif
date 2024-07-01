import React, { useEffect, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { Radio } from './Radio'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from './meta.json'
import { RadioProps } from '@src/radio/types'
import { Tag } from '@src/tag'

const meta: Meta<RadioProps> = {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
    ...sbHideControls(['theme', 'optionType', 'mode'])
  },
  args: {
    disabled: false,
    readonly: false,
    vertical: true,
    invalid: false,
    name: 'first',
    testId: 'radio-test-id',
    klId: 'radio-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<RadioProps>

const radioOptions = [
  { label: 'First', value: '1' },
  { label: 'Second', value: '2' },
  { label: 'Third', value: '3', disabled: true }
]

export const Basic: Story = {
  render: (args: RadioProps) => {
    const [radioState, changeRadioState] = useState<string>()
    return (
      <Radio
        {...args}
        onChange={(e) => {
          changeRadioState(e.target.value)
        }}
        value={radioState}
      />
    )
  },
  args: {
    options: radioOptions
  }
}

const radioOptionsCustomizing = [
  { label: 'Required', value: '1', required: true },
  { label: 'With tooltip', value: '2', tooltip: 'tooltip text' },
  { label: 'Disabled', value: '3', disabled: true },
  {
    label: (
      <div>
        <Tag>Four</Tag>
        React Element<br />with multiple lines
      </div>
    ),
    value: '4'
  },
  { label: 'Readonly', value: '5', readonly: true }
]

export const Customizing: Story = {
  render: (args: RadioProps) => {
    const [radioState, changeRadioState] = useState<string>()
    return (
      <Radio
        {...args}
        onChange={(e) => {
          changeRadioState(e.target.value)
        }}
        value={radioState}
      />
    )
  },
  args: {
    options: radioOptionsCustomizing
  }
}

export const WithAsyncSetValue: Story = {
  render: ({
    value,
    ...rest
  }: RadioProps) => {
    const [currentValue, setCurrentValue] = useState<string>()
    useEffect(() => {
      setTimeout(() => { setCurrentValue('1') }, 3000)
    }, [])
    return (
      <Radio
        {...rest}
        onChange={ e => setCurrentValue(e.target.value) }
        value={currentValue}
      />
    )
  },
  args: {
    options: radioOptions,
    value: null
  }
}

export const InlineOptions: Story = {
  render: (args: RadioProps) => {
    const [radioState, setRadioState] = useState<string>()
    return (
      <Radio
        {...args}
        onChange={(e) => setRadioState(e.target.value)}
        value={radioState}
      />
    )
  },
  args: {
    options: radioOptions,
    vertical: false
  }
}
