import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { badges } from '@sb/badges'
import { StoryColumn } from '@sb/StoryComponents'
import { Toggle } from './Toggle'
import { Text } from '@src/typography/text'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from './meta.json'
import { ToggleProps } from './types'

const meta: Meta<ToggleProps> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  argTypes: {
    ...sbHideControls(['theme', 'tooltip', 'icon'])
  },
  args: {
    disabled: false,
    readonly: false,
    loading: false,
    testId: 'toggle-test-id',
    klId: 'toggle-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<ToggleProps>

export const Basic: Story = {
  args: {
    children: 'Label'
  }
}

export const Control: Story = {
  render: (args: ToggleProps) => {
    const [first, setFirst] = useState<boolean>(true)
    const [second, setSecond] = useState<boolean>(true)
    const getLabel = (value: boolean) => (value ? 'On' : 'Off')
    const changeState = action('update state')

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
