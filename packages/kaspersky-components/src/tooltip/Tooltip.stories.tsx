import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { StoryColumn } from '@sb/StoryComponents'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from './__meta__/meta.json'
import { Tooltip } from './Tooltip'
import { TooltipProps } from './types'
import { Text } from '../typography'
import { Button } from '../button'

const meta: Meta<TooltipProps> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    ...sbHideControls(['theme'])
  },
  args: {
    text: 'Lorem ipsum'
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

type Story = StoryObj<TooltipProps>

export const Basic: Story = {
  render: (args: TooltipProps) => (
    <StoryColumn style={{ paddingLeft: '200px' }}>
      <Text type="BTM5" themedColor="primary">
        Tooltip here:
      </Text>
      <Tooltip {...args}>
        <Button>hover me to see Tooltip</Button>
      </Tooltip>
    </StoryColumn>
  )
}

export const PerformanceExample: Story = {
  render: (args: TooltipProps) => {
    const tooltips = React.useMemo(() => {
      const arr: number[] = []
      for (let i = 0; i <= 1000; i++) {
        arr.push(i)
      }
      return arr
    }, [])

    return (
      <StoryColumn>
        {tooltips.map((t) => (
          <Tooltip
            {...args}
            key={t}
            text={t}
            destroyTooltipOnHide={{ keepParent: false }}
          >
            <Text>{t}: hover me to see Tooltip</Text>
          </Tooltip>
        ))}
      </StoryColumn>
    )
  }
}
