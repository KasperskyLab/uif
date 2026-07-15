import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ArrowRight, LinkExternal, Placeholder, SettingsGear } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Link as LinkComponent } from '../Link'
import { LinkProps } from '../types'

import {
  defaultArgs,
  linkIconOptions,
  linkPropPresentation
} from './Link.controls'

export const linkIconVariants = {
  linkExternal: <LinkExternal />,
  arrowRight: <ArrowRight />,
  settingsGear: <SettingsGear />,
  placeholder: <Placeholder />
} as const

type StoryLinkProps = Omit<LinkProps, 'icon'> & {
  icon: (typeof linkIconOptions)[number]
}

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
  ...linkStorySettings
} satisfies Meta<StoryLinkProps>

export default meta

type Story = StoryObj<StoryLinkProps>

export const Playground: Story = {
  name: 'Playground',
  render: ({ icon, decoration, ...rest }) => (
    <LinkComponent
      {...rest}
      decoration={decoration}
      icon={decoration === 'icon' ? linkIconVariants[icon] : undefined}
    />
  ),
  parameters: {
    controls: {
      include: getControlsInclude(linkPropPresentation),
      sort: 'none'
    }
  }
}
