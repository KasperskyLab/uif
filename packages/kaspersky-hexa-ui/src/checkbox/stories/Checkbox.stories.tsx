import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { badges } from '@sb/badges'
import {
  buildStoryArgTypes,
  getControlsInclude
} from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Checkbox as CheckboxComponent } from '../Checkbox'
import MetaData from '../meta.json'
import { CheckboxProps } from '../types'

import {
  checkboxPropPresentation,
  defaultArgs
} from './Checkbox.controls'

const checkboxControlsInclude = getControlsInclude(checkboxPropPresentation)

export const checkboxStorySettings: Meta<CheckboxProps> = {
  argTypes: buildStoryArgTypes(checkboxPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'checkbox-test-id',
    klId: 'checkbox-kl-id'
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
  title: 'Hexa UI Components/Checkbox',
  component: CheckboxComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['checkboxStorySettings'],
  ...checkboxStorySettings
} satisfies Meta<typeof CheckboxComponent>

export default meta

type Story = StoryObj<CheckboxProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: checkboxControlsInclude,
      sort: 'none'
    }
  },
  render: (args) => (
    <PopupConfigProvider getPopupContainer={() => document.body}>
      <CheckboxComponent {...args}>
        {args.children}
      </CheckboxComponent>
    </PopupConfigProvider>
  )
}
