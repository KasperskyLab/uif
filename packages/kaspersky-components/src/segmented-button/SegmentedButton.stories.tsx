import React, { useState, useEffect } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { StoryColumn } from '@sb/StoryComponents'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from './meta.json'
import { SegmentedButtonProps } from './types'
import { SegmentedButton } from './SegmentedButton'
import { Placeholder } from '@kaspersky/icons/16'

const meta: Meta<SegmentedButtonProps> = {
  title: 'Atoms/SegmentedButton',
  component: SegmentedButton,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    type: 'radio',
    size: 'medium',
    disabled: false,
    testId: 'segmented-button-test-id',
    klId: 'segmented-button-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<SegmentedButtonProps>

export const Basic: Story = {
  render: ({
    value: defaultValue,
    type,
    ...rest
  }: SegmentedButtonProps) => {
    const [value, setValue] = useState<string[]>(defaultValue)

    useEffect(() => {
      setValue(defaultValue)
    }, [type])

    return (
      <SegmentedButton
        {...rest}
        value={value}
        onChange={setValue}
        type={type}
      />
    )
  },
  args: {
    value: ['beforeAfter'],
    items: [
      {
        text: 'default',
        value: 'default',
        testId: '123'
      },
      {
        text: 'custom color',
        value: 'customColor',
        mode: 'emerald'
      },
      {
        text: 'disabled',
        value: 'disabled',
        disabled: true
      },
      {
        text: 'componentsBefore',
        value: 'before',
        componentsBefore: [<Placeholder key='icon' />]
      },
      {
        text: 'componentsAfter',
        value: 'after',
        componentsAfter: [<Placeholder key='icon' />]
      },
      {
        text: 'componentsBefore & componentsAfter',
        value: 'beforeAfter',
        componentsBefore: [<Placeholder key='icon' />],
        componentsAfter: [<Placeholder key='icon' />]
      }
    ]
  }
}

export const Disabled: Story = {
  render: (args: SegmentedButtonProps) => (
    <StoryColumn>
      <SegmentedButton
        {...args}
        type='checkbox'
      />
      <SegmentedButton
        {...args}
        type='radio'
      />
    </StoryColumn>
  ),
  args: {
    value: ['checked1', 'checked2', 'checked3'],
    items: [
      { text: 'checked', value: 'checked1' },
      { text: 'unchecked', value: 'unchecked1' },
      { text: 'checked', value: 'checked2' },
      { text: 'unchecked', value: 'unchecked2' },
      { text: 'checked', value: 'checked3' }
    ],
    disabled: true
  }
}
