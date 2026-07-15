import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ArrowRightSmall, Placeholder, Plus, Settings } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Button as ButtonComponent } from '../Button'
import { buttonModes, ButtonProps, splitButtonModes } from '../types'

import {
  buttonIconOptions,
  buttonPropPresentation,
  defaultArgs
} from './Button.controls'

export { buttonModes, splitButtonModes }

export const buttonIconVariants = {
  none: undefined,
  placeholder: <Placeholder klId="button-icon" />,
  plus: <Plus klId="button-icon" />,
  arrowRightSmall: <ArrowRightSmall klId="button-icon" />,
  settings: <Settings klId="button-icon" />
} as const

type StoryButtonProps = Omit<ButtonProps, 'iconBefore' | 'iconAfter'> & {
  iconBefore: (typeof buttonIconOptions)[number]
  iconAfter: (typeof buttonIconOptions)[number]
}

export const buttonStorySettings: Meta<StoryButtonProps> = {
  argTypes: buildStoryArgTypesFromComponents(
    ButtonComponent,
    buttonPropPresentation
  ),
  args: {
    ...defaultArgs,
    testId: 'button-test-id',
    klId: 'button-kl-id'
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
  title: 'Hexa UI Components/Button',
  component: ButtonComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: [
    'buttonModes',
    'buttonStorySettings',
    'buttonIconVariants',
    'splitButtonModes'
  ],
  ...buttonStorySettings
} satisfies Meta<StoryButtonProps>

export default meta

type Story = StoryObj<StoryButtonProps>

export const Playground: Story = {
  name: 'Playground',
  render: ({ iconBefore, iconAfter, ...rest }) => (
    <ButtonComponent
      {...rest}
      iconAfter={buttonIconVariants[iconAfter]}
      iconBefore={buttonIconVariants[iconBefore]}
    />
  ),
  parameters: {
    controls: {
      include: getControlsInclude(buttonPropPresentation),
      sort: 'none'
    }
  }
}
