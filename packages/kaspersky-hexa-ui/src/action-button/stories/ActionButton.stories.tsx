import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import {
  ArrowRight,
  CrossM,
  Delete,
  Heart,
  Placeholder,
  SettingsGear
} from '@kaspersky/hexa-ui-icons/16'
import { Close } from '@kaspersky/hexa-ui-icons/8'

import MetaData from '../__meta__/meta.json'
import { ActionButton as ActionButtonComponent } from '../ActionButton'
import { ActionButtonProps } from '../types'

import {
  actionButtonElementAfterOptions,
  actionButtonIconOptions,
  actionButtonPropPresentation
} from './ActionButton.controls'

type StoryActionButtonProps = Omit<
  ActionButtonProps,
  'icon' | 'elementAfter'
> & {
  icon: (typeof actionButtonIconOptions)[number];
  elementAfter: (typeof actionButtonElementAfterOptions)[number];
}

const actionButtonControlsOrder = getControlsInclude(
  actionButtonPropPresentation
)

const iconVariants = {
  placeholder: <Placeholder />,
  close: <Close />,
  crossM: <CrossM />,
  heart: <Heart />,
  settingsGear: <SettingsGear />,
  delete: <Delete />,
  arrowRight: <ArrowRight />,
  none: undefined
} as const

export const actionButtonStorySettings: Meta<ActionButtonProps> = {
  args: {
    mode: 'ghost',
    size: 'medium',
    children: 'Action',
    interactive: true,
    disabled: false,
    noIcon: false,
    testId: 'action-button-test-id',
    klId: 'action-button-kl-id'
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
  title: 'Hexa UI Components/ActionButton',
  // @ts-expect-error Playground adds story-only controls and maps them in render
  component: ActionButtonComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['actionButtonStorySettings'],
  ...actionButtonStorySettings,
  argTypes: buildStoryArgTypesFromComponents(
    ActionButtonComponent,
    actionButtonPropPresentation
  ),
  args: {
    mode: 'ghost',
    size: 'medium',
    children: 'Action',
    interactive: true,
    disabled: false,
    noIcon: false,
    testId: 'action-button-test-id',
    klId: 'action-button-kl-id',
    icon: 'placeholder' as const,
    elementAfter: 'none' as const
  }
} satisfies Meta<StoryActionButtonProps>

export default meta

type Story = StoryObj<StoryActionButtonProps>

export const Playground: Story = {
  args: {
    mode: 'filled',
    size: 'large',
    icon: 'settingsGear',
    elementAfter: 'arrowRight',
    children: 'This is ActionButton'
  },

  name: 'Playground',

  render: ({ icon, elementAfter, ...rest }) => (
    <ActionButtonComponent
      {...rest}
      elementAfter={iconVariants[elementAfter]}
      icon={iconVariants[icon]}
    />
  ),

  parameters: {
    controls: {
      include: actionButtonControlsOrder,
      sort: 'none'
    }
  }
}
