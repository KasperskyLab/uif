import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import MetaData from '../meta.json'
import { Radio } from '../Radio'
import { RadioProps } from '../types'
import {
  defaultArgs,
  radioPropPresentation
} from './Radio.controls'

export const radioStorySettings: Meta<RadioProps> = {
  argTypes: buildStoryArgTypesFromComponents(Radio, radioPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'radio-test-id',
    klId: 'radio-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const playgroundOptions: RadioProps['options'] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]

const meta = {
  title: 'Hexa UI Components/Radio',
  component: Radio,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['radioStorySettings'],
  ...radioStorySettings
} satisfies Meta<RadioProps>

export default meta

type Story = StoryObj<RadioProps>

export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string>()
    return (
      <Radio
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={playgroundOptions}
      />
    )
  },
  parameters: {
    controls: {
      include: getControlsInclude(radioPropPresentation),
      sort: 'none'
    }
  }
}
