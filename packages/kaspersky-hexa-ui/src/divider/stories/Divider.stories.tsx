import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'

import MetaData from '../__meta__/meta.json'
import { Divider as DividerComponent } from '../Divider'
import { defaultArgs, dividerPropPresentation } from './Divider.controls'
import { DividerProps } from '../types'

export const dividerStorySettings: Meta<DividerProps> = {
  argTypes: buildStoryArgTypes(dividerPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'divider-test-id',
    klId: 'divider-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta: Meta<typeof DividerComponent> = {
  title: 'Hexa UI Components/Divider',
  component: DividerComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['dividerStorySettings'],
  ...dividerStorySettings
}

export default meta

type Story = StoryObj<DividerProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(dividerPropPresentation),
      sort: 'none'
    }
  }
}
