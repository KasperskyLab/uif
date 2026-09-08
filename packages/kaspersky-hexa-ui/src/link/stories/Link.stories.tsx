import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'

import MetaData from '../__meta__/meta.json'
import { Link as LinkComponent } from '../Link'

import { BasicLink, StoryLinkProps } from './helpers'
import { defaultArgs, linkPropPresentation } from './Link.controls'

export const linkStorySettings: Meta<StoryLinkProps> = {
  argTypes: buildStoryArgTypesFromComponents(
    LinkComponent,
    linkPropPresentation
  ),
  args: {
    ...defaultArgs,
    testId: 'link-test-id',
    klId: 'link-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/Link',
  // @ts-expect-error Playground adds story-only controls and maps them in render
  component: LinkComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['linkStorySettings', 'linkIconVariants'],
  render: BasicLink.bind({}),
  ...linkStorySettings
} satisfies Meta<StoryLinkProps>

export default meta

type Story = StoryObj<StoryLinkProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(linkPropPresentation),
      sort: 'none'
    }
  }
}
