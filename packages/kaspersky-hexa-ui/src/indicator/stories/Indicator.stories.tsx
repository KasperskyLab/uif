import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'

import MetaData from '../__meta__/meta.json'
import { Indicator as IndicatorComponent } from '../Indicator'
import { IndicatorProps } from '../types'

import {
  defaultArgs,
  indicatorPropPresentation
} from './Indicator.controls'

export const indicatorStorySettings: Meta<IndicatorProps> = {
  argTypes: buildStoryArgTypes(indicatorPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'indicator-test-id',
    klId: 'indicator-kl-id'
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
  title: 'Hexa UI Components/Indicator',
  component: IndicatorComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['indicatorStorySettings'],
  ...indicatorStorySettings
} satisfies Meta<typeof IndicatorComponent>

export default meta

type Story = StoryObj<IndicatorProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(indicatorPropPresentation),
      sort: 'none'
    }
  }
}
