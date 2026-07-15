import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'

import MetaData from '../__meta__/meta.json'
import { FormLabel as FormLabelComponent } from '../FormLabel'
import { defaultArgs, formLabelPropPresentation } from './FormLabel.controls'
import { FormLabelProps } from '../types'

export const formLabelStorySettings: Meta<FormLabelProps> = {
  argTypes: buildStoryArgTypes(formLabelPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'form-label-test-id',
    klId: 'form-label-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta: Meta<typeof FormLabelComponent> = {
  title: 'Hexa UI Components/FormLabel',
  component: FormLabelComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['formLabelStorySettings'],
  ...formLabelStorySettings
}

export default meta

type Story = StoryObj<FormLabelProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(formLabelPropPresentation),
      sort: 'none'
    }
  }
}
