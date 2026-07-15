import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { StoryColumn } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { SegmentedButton } from '../SegmentedButton'
import { SegmentedButtonProps } from '../types'

const meta: Meta<SegmentedButtonProps> = {
  title: 'Hexa UI Components/SegmentedButton/Stories',
  component: SegmentedButton,
  tags: ['!autodocs']
}

export default meta

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

type Story = StoryObj<SegmentedButtonProps>

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
        type="radio"
      />
    </StoryColumn>
  ),
  args: {
    value: ['checked1'],
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
      <ControllableSegmentedButton {...args} />
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

export const Overflow: Story = {
  render: ControllableSegmentedButton,
  args: {
    value: ['beforeAfter'],
    items: [
      {
        text: 'And thou treble-dated crow That thy sable gender mak\'st',
        value: 'default',
        testId: 'testId',
        klId: 'klId',
        componentsBefore: [<Placeholder key="icon" />],
        componentsAfter: [<Placeholder key="icon" />]
      },
      {
        text: 'With the breath thou giv\'st and tak\'st',
        value: 'disabled',
        disabled: true
      },
      {
        text: '\'Mongst our mourners shalt thou go',
        value: 'before',
        componentsBefore: [<Placeholder key="icon" />]
      },
      {
        text: 'Here the anthem doth commence:',
        value: 'after',
        componentsAfter: [<Placeholder key="icon" />]
      },
      {
        text: 'Love and constancy is dead',
        value: 'beforeAfter',
        componentsBefore: [<Placeholder key="icon" />],
        componentsAfter: [<Placeholder key="icon" />]
      }
    ]
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: {
    source: {
      segmented_button: componentColors.segmented_button,
      segmented_button_item: componentColors.segmented_button_item
    }
  },
  render: args => <ThemedPalette {...args} />
}
