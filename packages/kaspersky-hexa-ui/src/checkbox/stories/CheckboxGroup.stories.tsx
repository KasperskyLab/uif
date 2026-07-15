import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Checkbox as CheckboxComponent } from '../Checkbox'
import MetaData from '../meta.json'
import { CheckboxGroupProps } from '../types'

import {
  checkboxGroupPropPresentation,
  defaultArgs
} from './CheckboxGroup.controls'

const checkboxGroupControlsInclude = getControlsInclude(checkboxGroupPropPresentation)

export const checkboxGroupStorySettings: Meta<CheckboxGroupProps> = {
  argTypes: buildStoryArgTypesFromComponents(
    CheckboxComponent.Group,
    checkboxGroupPropPresentation
  ),
  args: {
    ...defaultArgs,
    testId: 'checkbox-group-test-id',
    klId: 'checkbox-group-kl-id'
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
  title: 'Hexa UI Components/CheckboxGroup',
  component: CheckboxComponent.Group,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['checkboxGroupStorySettings'],
  ...checkboxGroupStorySettings
} satisfies Meta<typeof CheckboxComponent.Group>

export default meta

type Story = StoryObj<CheckboxGroupProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: checkboxGroupControlsInclude,
      sort: 'none'
    }
  },
  render: (args) => <CheckboxComponent.Group {...args} />
}
