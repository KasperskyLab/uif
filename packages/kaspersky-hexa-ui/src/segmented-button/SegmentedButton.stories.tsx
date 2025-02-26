import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { StoryColumn } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/icons/16'

import MetaData from './meta.json'
import { SegmentedButton } from './SegmentedButton'
import { SegmentedButtonProps } from './types'

const meta: Meta<SegmentedButtonProps> = {
  title: 'Hexa UI Components/SegmentedButton',
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

const ControllableSegmentedButton = ({
  value: defaultValue,
  type,
  ...rest
}: SegmentedButtonProps): React.ReactElement => {
  const [value, setValue] = useState<string[]>(defaultValue)

  useEffect(() => {
    setValue(defaultValue)
  }, [type, defaultValue])

  return (
    <SegmentedButton
      {...rest}
      value={value}
      onChange={setValue}
      type={type}
    />
  )
}

export const Basic: Story = {
  render: ControllableSegmentedButton,
  args: {
    value: ['beforeAfter'],
    items: [
      {
        text: 'default',
        value: 'default',
        testId: 'testId',
        klId: 'klId'
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
        componentsBefore: [<Placeholder key="icon" />]
      },
      {
        text: 'componentsAfter',
        value: 'after',
        componentsAfter: [<Placeholder key="icon" />]
      },
      {
        text: 'componentsBefore & componentsAfter',
        value: 'beforeAfter',
        componentsBefore: [<Placeholder key="icon" />],
        componentsAfter: [<Placeholder key="icon" />]
      }
    ]
  }
}

export const Disabled: Story = {
  render: (args: SegmentedButtonProps) => (
    <StoryColumn>
      <SegmentedButton
        {...args}
        type="checkbox"
      />
      <SegmentedButton
        {...args}
        type="radio"
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

const StyledContainer = styled.div`
  width: 600px;
`

export const Stretched: Story = {
  render: (args: SegmentedButtonProps) => (
    <StyledContainer>
      <ControllableSegmentedButton {...args}/>
    </StyledContainer>
  ),
  args: {
    isStretch: true,
    value: ['We'],
    items: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(item => ({
      text: item,
      value: item
    }))
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: {
    source: {
      segmented_button: componentColors.segmented_button,
      segmented_button_radio_item: componentColors.segmented_button_radio_item,
      segmented_button_checkbox_item: componentColors.segmented_button_checkbox_item
    }
  },
  render: args => <ThemedPalette {...args} />
}
