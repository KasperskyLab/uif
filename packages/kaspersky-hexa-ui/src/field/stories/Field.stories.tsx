import { badges } from '@sb/badges'
import { buildStoryArgTypesFromComponents, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Field as FieldComponent, Textbox } from '@src/index'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { FieldProps } from '../types'

import { defaultArgs, fieldPropPresentation } from './Field.controls'

export const fieldStorySettings: Meta<FieldProps> = {
  argTypes: buildStoryArgTypesFromComponents(FieldComponent, fieldPropPresentation),
  args: {
    ...defaultArgs,
    control: (<Textbox placeholder="Textbox" />),
    testId: 'field-test-id',
    klId: 'field-kl-id'
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
  title: 'Hexa UI Components/Field',
  component: FieldComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['fieldStorySettings'],
  ...fieldStorySettings
} satisfies Meta<FieldProps>

export default meta

type Story = StoryObj<FieldProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(fieldPropPresentation),
      sort: 'none'
    }
  }
}
