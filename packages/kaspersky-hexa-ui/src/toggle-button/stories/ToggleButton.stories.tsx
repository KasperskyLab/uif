import {
  buildStoryArgTypes,
  getControlsInclude
} from '@sb/components/Documentation'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Placeholder, Plus, Settings } from '@kaspersky/hexa-ui-icons/16'

import { Badge } from '@src/badge'
import { ToggleButton as ToggleButtonComponent } from '../ToggleButton'
import type { ToggleButtonProps } from '../types'

import {
  defaultArgs,
  toggleButtonElementAfterOptions,
  toggleButtonIconOptions,
  toggleButtonPropPresentation
} from './ToggleButton.controls'

type StoryToggleButtonProps = Omit<ToggleButtonProps, 'iconBefore' | 'elementAfter'> & {
  iconBefore: (typeof toggleButtonIconOptions)[number];
  elementAfter: (typeof toggleButtonElementAfterOptions)[number];
}

const iconVariants = {
  none: undefined,
  placeholder: <Placeholder />,
  plus: <Plus />,
  settings: <Settings />
} as const

const elementAfterVariants = {
  none: undefined,
  badge: <Badge count={1} />
} as const

export const toggleButtonStorySettings: Meta<StoryToggleButtonProps> = {
  argTypes: buildStoryArgTypes(toggleButtonPropPresentation),
  args: defaultArgs
}

const meta = {
  title: 'Hexa UI Components/ToggleButton',
  // @ts-expect-error Playground maps string controls to React nodes in render
  component: ToggleButtonComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['toggleButtonStorySettings'],
  ...toggleButtonStorySettings
} satisfies Meta<StoryToggleButtonProps>

export default meta

type Story = StoryObj<StoryToggleButtonProps>

export const Playground: Story = {
  name: 'Playground',
  render: ({ iconBefore, elementAfter, ...args }) => (
    <ToggleButtonComponent
      {...args}
      iconBefore={iconVariants[iconBefore]}
      elementAfter={elementAfterVariants[elementAfter]}
    />
  ),
  parameters: {
    controls: {
      include: getControlsInclude(toggleButtonPropPresentation),
      sort: 'none'
    }
  }
}
