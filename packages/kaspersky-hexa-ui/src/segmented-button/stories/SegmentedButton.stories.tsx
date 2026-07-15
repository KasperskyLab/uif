import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React, { useEffect, useState } from 'react'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../meta.json'
import { SegmentedButton } from '../SegmentedButton'
import { SegmentedButtonProps } from '../types'

import {
  defaultArgs,
  segmentedButtonPropPresentation
} from './SegmentedButton.controls'

export const segmentedButtonStorySettings: Meta<SegmentedButtonProps> = {
  argTypes: buildStoryArgTypes(segmentedButtonPropPresentation),
  args: {
    ...defaultArgs,
    value: ['opt2'],
    items: [
      { text: 'Option 1', value: 'opt1' },
      { text: 'Option 2', value: 'opt2', componentsBefore: [<Placeholder key="icon" />] },
      { text: 'Option 3', value: 'opt3' },
      { text: 'Option 4', value: 'opt4', disabled: true }
    ],
    onChange: () => undefined
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

const meta: Meta<SegmentedButtonProps> = {
  title: 'Hexa UI Components/SegmentedButton',
  component: SegmentedButton,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['segmentedButtonStorySettings'],
  ...segmentedButtonStorySettings
}

export default meta

type Story = StoryObj<SegmentedButtonProps>

export const Playground: Story = {
  name: 'Playground',
  render: ({ value: defaultValue, disabled, size, isStretch, items }) => {
    const [value, setValue] = useState<string[]>(defaultValue)

    useEffect(() => {
      setValue(defaultValue)
    }, [defaultValue])

    return (
      <SegmentedButton
        items={items}
        value={value}
        onChange={setValue}
        disabled={disabled}
        size={size}
        isStretch={isStretch}
      />
    )
  },
  parameters: {
    controls: {
      include: getControlsInclude(segmentedButtonPropPresentation),
      sort: 'none'
    }
  }
}
