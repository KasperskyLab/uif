import { badges } from '@sb/badges'
import { buildStoryArgTypesFromComponents, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { StoryColumn } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from './__meta__/meta.json'
import { ExpandableText as ExpandableTextComponent } from './ExpandableText'
import { ExpandableTextProps } from './types'
import {
  defaultArgs,
  expandableTextPropPresentation
} from './stories/ExpandableText.controls'

export const expandableTextStorySettings: Meta<ExpandableTextProps> = {
  argTypes: buildStoryArgTypesFromComponents(
    ExpandableTextComponent,
    expandableTextPropPresentation
  ),
  args: {
    ...defaultArgs,
    testId: 'expandable-text-test-id',
    klId: 'expandable-text-kl-id'
  },
  decorators: [
    (Story, context) => (
      <StoryColumn style={{ minWidth: '100px', maxWidth: '400px' }}>
        <Story {...context} />
      </StoryColumn>
    )
  ],
  parameters: {
    badges: [badges.stable, badges.missingDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}

const meta: Meta<typeof ExpandableTextComponent> = {
  title: 'Hexa UI Components/ExpandableText',
  component: ExpandableTextComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['expandableTextStorySettings'],
  ...expandableTextStorySettings
}

export default meta

type Story = StoryObj<ExpandableTextProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(expandableTextPropPresentation),
      sort: 'none'
    }
  }
}
