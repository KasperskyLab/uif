import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'

import { TreeSelect } from '../TreeSelect'
import { TreeSelectProps } from '../types'

import { defaultArgs, treeSelectPropPresentation } from './TreeSelect.controls'

export const treeSelectStorySettings: Meta<TreeSelectProps> = {
  argTypes: buildStoryArgTypes(treeSelectPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'tree-select-test-id',
    klId: 'tree-select-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.missingDesign]
  }
}

const meta = {
  title: 'Hexa UI Components/TreeSelect',
  component: TreeSelect,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['treeSelectStorySettings'],
  ...treeSelectStorySettings
} satisfies Meta<TreeSelectProps>

export default meta

type Story = StoryObj<TreeSelectProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(treeSelectPropPresentation),
      sort: 'none'
    }
  }
}
