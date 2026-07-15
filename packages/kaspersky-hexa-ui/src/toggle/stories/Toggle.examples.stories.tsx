import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { TooltipCompositionWarning } from '@sb/components/Warnings'
import { StoryColumn } from '@sb/StoryComponents'
import { Textbox } from '@src/input'
import { Tooltip } from '@src/tooltip'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { Toggle } from '../Toggle'
import { ToggleProps } from '../types'

const meta = {
  title: 'Hexa UI Components/Toggle/Stories',
  component: Toggle,
  tags: ['!autodocs'],
  args: {
    disabled: false,
    readonly: false,
    loading: false,
    labelPosition: 'after',
    children: 'Label'
  }
} satisfies Meta<ToggleProps>

export default meta

type Story = StoryObj<ToggleProps>

export const Basic: Story = {}

export const WithoutLabel: Story = {
  args: {
    children: undefined
  }
}

export const Disabled: Story = {
  render: (args: ToggleProps) => (
    <StoryColumn>
      <Toggle {...args} disabled>Label</Toggle>
      <Toggle {...args} disabled checked>Label</Toggle>
      <Toggle {...args} disabled />
    </StoryColumn>
  )
}

export const Readonly: Story = {
  render: (args: ToggleProps) => (
    <StoryColumn>
      <Toggle {...args} readonly>Label</Toggle>
      <Toggle {...args} readonly checked>Label</Toggle>
      <Toggle {...args} readonly />
    </StoryColumn>
  )
}

export const Loading: Story = {
  render: (args: ToggleProps) => (
    <StoryColumn>
      <Toggle {...args} loading>Label</Toggle>
      <Toggle {...args} loading checked>Label</Toggle>
      <Toggle {...args} loading />
    </StoryColumn>
  )
}

export const Control: Story = {
  render: (args: ToggleProps) => {
    const [first, setFirst] = useState<boolean>(true)
    const [second, setSecond] = useState<boolean>(true)
    const getLabel = (value: boolean) => (value ? 'On' : 'Off')

    return (
      <StoryColumn>
        <Toggle
          {...args}
          checked={first}
          onChange={(value) => {
            alert(`first: ${value}`)
            setFirst(value)
          }}
        >
          {getLabel(first)}
        </Toggle>
        {!first && <Text>second onChange does not work</Text>}
        <Toggle
          {...args}
          checked={second}
          onChange={(value) => {
            if (!first) return
            alert(`second: ${value}`)
            setSecond(value)
          }}
        >
          {getLabel(first)}
        </Toggle>
      </StoryColumn>
    )
  }
}

export const WithAdditionalContent: Story = {
  args: {
    description: 'Some description',
    dependentElement: <Textbox placeholder="dependentElement" />
  }
}

type CompositionTooltipStory = StoryObj<ToggleProps & { compositionTooltip?: string }>

export const WithTooltip: CompositionTooltipStory = {
  render: (args: any) => (
    <div>
      <TooltipCompositionWarning propName="compositionTooltip" />
      <div style={{ width: 'min-content' }}>
        <Tooltip text={args.compositionTooltip}>
          <span><Toggle {...args} /></span>
        </Tooltip>
      </div>
    </div>
  ),
  argTypes: {
    compositionTooltip: {
      control: 'text'
    }
  },
  args: {
    compositionTooltip: 'Toggle tooltip'
  } as any,
  parameters: {
    controls: {
      exclude: /(tooltip|componentType)/
    }
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.toggle },
  render: args => <ThemedPalette {...args} />
}
