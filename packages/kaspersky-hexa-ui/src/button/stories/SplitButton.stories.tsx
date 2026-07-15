import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { PropsWithTooltip } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ArrowRightSmall, Placeholder, Plus, Settings } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Button as ButtonComponent } from '../Button'
import { SplitButtonProps } from '../types'

const storyIcons = {
  '-': null,
  Placeholder: <Placeholder klId="button-icon" />,
  Plus: <Plus klId="button-icon" />,
  ArrowRightSmall: <ArrowRightSmall klId="button-icon" />,
  Settings: <Settings klId="button-icon" />
}

type StoryIconsType = keyof typeof storyIcons

type StorySplitButtonProps = PropsWithTooltip<Omit<SplitButtonProps, 'iconBefore'> & {
  iconBefore?: StoryIconsType
}>

const resolveSplitButtonIcon = (icon?: StorySplitButtonProps['iconBefore']) =>
  icon !== '-' && storyIcons[icon || '-']

export const splitButtonStorySettings: Meta<SplitButtonProps> = {
  args: {
    iconBefore: '-',
    text: 'Split button',
    type: 'button',
    testId: 'split-button-test-id',
    klId: 'split-button-kl-id',
    mode: 'primary',
    disabled: false,
    loading: false,
    items: [
      {
        children: 'Option 1',
        description: 'Some description'
      },
      {
        children: 'Option 2'
      },
      {
        children: 'Option 3',
        description: 'Some description',
        componentsBefore: [
          <Placeholder key="placeholder-icon" />
        ]
      }
    ]
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: /(tooltip|size|iconAfter|isPressed)/
    },
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/SplitButton',
  component: ButtonComponent.SplitButton,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: [
    'resolveSplitButtonIcon',
    'splitButtonModes',
    'splitButtonStorySettings'
  ],
  ...withDesignControls({
    componentName: 'button',
    meta: splitButtonStorySettings
  })
} satisfies Meta<typeof ButtonComponent.SplitButton>

export default meta

type Story = StoryObj<StorySplitButtonProps>

export const Playground: Story = {
  render: ({
    iconBefore,
    ...rest
  }: StorySplitButtonProps) => (
    <ButtonComponent.SplitButton
      {...rest}
      iconBefore={resolveSplitButtonIcon(iconBefore)}
    />
  )
}
