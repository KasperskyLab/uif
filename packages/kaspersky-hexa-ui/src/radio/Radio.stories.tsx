import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Textbox } from '@src/input'
import { Tag } from '@src/tag'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useEffect, useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from './meta.json'
import { Radio } from './Radio'
import { RadioProps } from './types'

const meta: Meta<RadioProps> = {
  title: 'Hexa UI Components/Radio',
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

const radioOptions: RadioProps['options'] = [
  {
    label: 'Summary report on workstation protection and Windows Server protection applications installed',
    value: '1'
  },
  { label: 'Summary report on mail system protection applications installed', value: '2', description: 'Radio option description' },
  { label: 'First', value: '1st' },
  { label: 'Second', value: '2nd' },
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
  { label: 'With tooltip', value: '2', tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet scelerisque ligula, eget aliquet sem elementum id. Suspendisse ornare scelerisque arcu, non tincidunt quam. Vestibulum a laoreet erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a gravida quam. Cras varius, dui quis euismod ultrices, eros leo maximus nibh, a sagittis dolor augue condimentum libero. Duis tortor est, placerat ut porta in, sagittis eu ante. Sed viverra leo magna, sed volutpat diam consequat id. Nulla pharetra nibh sit amet tempus ornare. Nunc ut quam ante.' },
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
  { label: 'Readonly', value: '5', readonly: true },
  {
    label: 'With additionalElement',
    value: '4',
    description: 'Some description',
    dependentElement: <Textbox placeholder="dependentElement" />
  }
]

export const Customizing: Story = {
  render: (args: RadioProps) => {
    const [radioState, changeRadioState] = useState<string>()
    return (
      <PopupConfigProvider getPopupContainer={() => document.body}>
        <Radio
          {...args}
          onChange={(e) => {
            changeRadioState(e.target.value)
          }}
          value={radioState}
        />
      </PopupConfigProvider>
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

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.radio },
  render: args => <ThemedPalette {...args} />
}
