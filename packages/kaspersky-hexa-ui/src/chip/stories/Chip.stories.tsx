import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Placeholder, Plus, Settings } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Chip as ChipComponent } from '../Chip'
import { ChipProps } from '../types'

import {
  chipIconOptions,
  chipPropPresentation,
  defaultArgs
} from './Chip.controls'

const iconVariants = {
  none: undefined,
  placeholder: <Placeholder klId="chip-icon" />,
  plus: <Plus klId="chip-icon" />,
  settings: <Settings klId="chip-icon" />
} as const

type StoryChipProps = Omit<ChipProps, 'icon'> & {
  icon?: (typeof chipIconOptions)[number]
}

export const chipStorySettings: Meta<ChipProps> = {
  argTypes: buildStoryArgTypesFromComponents(
    ChipComponent,
    chipPropPresentation
  ),
  args: {
    size: defaultArgs.size,
    disabled: defaultArgs.disabled,
    label: defaultArgs.label,
    testId: 'chip-test-id',
    klId: 'chip-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/Chip',
  component: ChipComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['chipStorySettings'],
  ...chipStorySettings
} satisfies Meta<ChipProps>

export default meta

type Story = StoryObj<ChipProps>

export const Playground: StoryObj<StoryChipProps> = {
  name: 'Playground',
  args: defaultArgs,
  render: ({ icon = 'none', ...rest }) => (
    <ChipComponent
      {...rest}
      icon={iconVariants[icon]}
    />
  ),
  parameters: {
    controls: {
      include: getControlsInclude(chipPropPresentation),
      sort: 'none'
    }
  }
}
