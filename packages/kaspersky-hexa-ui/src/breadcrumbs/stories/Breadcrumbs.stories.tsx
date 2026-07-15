import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Breadcrumbs as BreadcrumbsComponent } from '../Breadcrumbs'
import { generateRoutes } from '../helpers'
import { BreadcrumbsProps } from '../types'

import {
  breadcrumbsPropPresentation,
  defaultArgs
} from './Breadcrumbs.controls'

type StoryBreadcrumbsProps = Omit<BreadcrumbsProps, 'routes'> & typeof defaultArgs

export const breadcrumbsStorySettings: Meta<StoryBreadcrumbsProps> = {
  argTypes: buildStoryArgTypes(breadcrumbsPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'breadcrumbs-test-id',
    klId: 'breadcrumbs-kl-id'
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
  title: 'Hexa UI Components/Breadcrumbs',
  // @ts-expect-error Playground adds story-only controls and maps them in render
  component: BreadcrumbsComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['breadcrumbsStorySettings'],
  ...breadcrumbsStorySettings
} satisfies Meta<StoryBreadcrumbsProps>

export default meta

type Story = StoryObj<StoryBreadcrumbsProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(breadcrumbsPropPresentation),
      sort: 'none'
    }
  },
  render: ({ routeCount, size, ...rest }) => (
    <BreadcrumbsComponent
      {...rest}
      size={size}
      routes={generateRoutes(routeCount)}
    />
  )
}
