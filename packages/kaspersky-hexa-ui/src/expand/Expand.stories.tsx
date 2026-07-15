import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'

import MetaData from './__meta__/meta.json'
import { Expand as ExpandComponent } from './Expand'
import { expandMockText } from './stories/expandStoryData'
import { defaultArgs, expandPropPresentation } from './stories/Expand.controls'
import { ExpandProps } from './types'

export { expandMockText } from './stories/expandStoryData'

export const expandStorySettings: Meta<ExpandProps> = {
  argTypes: buildStoryArgTypesFromComponents(
    ExpandComponent,
    expandPropPresentation
  ),
  args: {
    ...defaultArgs,
    children: expandMockText,
    testId: 'expand-test-id',
    klId: 'expand-kl-id'
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
  title: 'Hexa UI Components/Expand',
  component: ExpandComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['expandStorySettings', 'expandMockText'],
  ...expandStorySettings
} satisfies Meta<ExpandProps>

export default meta

type Story = StoryObj<ExpandProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(expandPropPresentation),
      sort: 'none'
    }
  }
}
