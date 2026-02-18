import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Size } from '@design-system/types'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Button } from '@src/button'
import { Divider } from '@src/divider'
import {
  SegmentedContentProperties,
  SegmentedControlProps,
  SegmentedControlSize
} from '@src/segmented-control/types'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from './meta.json'
import { SegmentedControl } from './SegmentedControl'

type PaletteStory = StoryObj<ThemedPaletteProps>

const defaultSizes: SegmentedControlSize[] = [
  Size.Small,
  Size.Medium,
  Size.Large
]

const tabsData = [
  {
    name: 'one',
    content: 'default',
    properties: {
      state: 'disabled',
      text: 'im text from tab One properties'
    },
    text: 'One'
  },
  {
    name: 'two',
    content: 'default',
    properties: {
      state: 'disabled',
      text: 'im text from tab Two properties'
    },
    text: 'Two'
  },
  {
    name: 'three',
    content: 'another',
    properties: {
      text: 'im text from tab Three properties'
    },
    text: 'Three'
  },
  {
    name: 'four',
    content: 'another',
    properties: {
      state: 'disabled',
      text: 'im text from tab Four properties'
    },
    text: 'Four'
  }
]
const contentData = {
  default: (properties: SegmentedContentProperties | undefined) => {
    const { state, text }: {
      state?: boolean,
      text?: string
    } = properties || {}
    return (
      <Space direction="vertical" size={15} align="flex-start" justify="normal">
        <Divider />
        <Button disabled={state}>
          Some button
        </Button>
        {
          text && <>
            <Divider />
            <div>{text}</div>
          </>
        }
      </Space>
    )
  },
  another: (properties: SegmentedContentProperties | undefined) => {
    const { state, text }: {
      state?: boolean,
      text?: string
    } = properties || {}
    return (
      <Space direction="vertical" size={15} align="flex-start" justify="normal">
        <Divider />
        <Button disabled={state}>
          Another button
        </Button>
        {
          text && <>
            <Divider />
            <div>{text}</div>
          </>
        }
      </Space>
    )
  }
}

const meta: Meta<SegmentedControlProps> = {
  title: 'Hexa UI Components/SegmentedControl',
  component: SegmentedControl,
  argTypes: {
    size: {
      options: defaultSizes,
      control: { type: 'radio' }
    },
    ...sbHideControls(['theme', 'componentType', 'componentId', 'dataTestId', 'klId', 'contentData'])
  },
  args: {
    size: 'large',
    tabsData,
    contentData,
    defaultActiveTab: 'two',
    testId: 'segmented-control-test-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: false
  }
}
export default meta

type Story = StoryObj<SegmentedControlProps>

export const Basic: Story = {}

export const Icons: Story = {
  args: {
    size: 'large',
    tabsData: tabsData.map(tab => {
      return {
        ...tab,
        iconBefore: <Placeholder/>
      }
    }),
    contentData,
    testId: 'segmented-control-test-id'
  }
}

export const WithIndicator: Story = {
  args: {
    size: 'large',
    tabsData: tabsData.map(tab => {
      return {
        ...tab,
        iconBefore: <Placeholder/>,
        indicator: Math.floor(Math.random() * 10) > 5 ? 'new' : 'critical'
      }
    }),
    contentData,
    testId: 'segmented-control-test-id'
  }
}

export const WithCounter: Story = {
  args: {
    size: 'large',
    tabsData: tabsData.map(tab => {
      return {
        ...tab,
        iconBefore: <Placeholder/>,
        counter: {
          number: Math.floor(Math.random() * 14),
          mode: Math.floor(Math.random() * 10) > 5 ? 'critical_transparent' : 'neutral_transparent'
        }
      }
    }),
    contentData,
    testId: 'segmented-control-test-id'
  }
}

export const WithTooltip: Story = {
  args: {
    size: 'large',
    tabsData: tabsData.map(tab => {
      return {
        ...tab,
        iconBefore: <Placeholder/>,
        infoTooltip: 'Lorem ipsum'
      }
    }),
    contentData,
    testId: 'segmented-control-test-id'
  }
}

export const ColorTokens: PaletteStory = {
  args: {
    source: {
      segmented_control: componentColors.segmented_control,
      segmented_control_item: componentColors.segmented_control_item
    }
  },
  render: args => <ThemedPalette {...args} />
}
