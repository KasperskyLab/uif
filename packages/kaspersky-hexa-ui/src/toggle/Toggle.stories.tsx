import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { TooltipCompositionWarning } from '@sb/components/Warnings'
import { sbHideControls } from '@sb/helpers'
import { StoryColumn } from '@sb/StoryComponents'
import { Textbox } from '@src/input'
import { Tooltip } from '@src/tooltip'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from './meta.json'
import { Toggle } from './Toggle'
import { ToggleProps } from './types'

const meta: Meta<ToggleProps> = {
  title: 'Hexa UI Components/Toggle',
  component: Toggle,
  argTypes: {
    labelPosition: {
      options: ['after', 'before'],
      control: { type: 'radio' }
    },
    tooltip: {
      control: 'text'
    },
    ...sbHideControls(['theme', 'icon'])
  },
  args: {
    disabled: false,
    readonly: false,
    loading: false,
    labelPosition: 'after',
    testId: 'toggle-test-id',
    klId: 'toggle-kl-id',
    children: 'Label'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: /(compositionTooltip|componentType)/
    },
    design: MetaData.pixsoView
  }
}
export default meta

type ToggleStoryProps = ToggleProps & { compositionTooltip?: string }
type Story = StoryObj<ToggleStoryProps>

export const Basic: Story = {}

export const WithoutLabel: Story = {
  args: {
    children: null
  }
}

export const Control: Story = {
  render: (args: ToggleProps) => {
    const [first, setFirst] = useState<boolean>(true)
    const [second, setSecond] = useState<boolean>(true)
    const getLabel = (value: boolean) => (value ? 'On' : 'Off')
    const changeState = console.log

    return (
      <StoryColumn>
        <Toggle
          {...args}
          checked={first}
          onChange={(value) => {
            setFirst(value)
            changeState({ first: value })
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
            setSecond(value)
            changeState({ second: value })
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

export const WithTooltip: Story = {
  render: (args: any) => <div>
    <TooltipCompositionWarning propName="compositionTooltip" />
    <div style={{ width: 'min-content' }}>
      <Tooltip text={args.compositionTooltip}>
        <span><Toggle {...args} ></Toggle></span>
      </Tooltip>
    </div>
  </div>,
  argTypes: {
    compositionTooltip: {
      control: 'text'
    }
  },
  args: {
    compositionTooltip: 'Toogle tooltip'
  },
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
