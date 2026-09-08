import { badges } from '@sb/badges'
import { buildStoryArgTypesFromComponents, getControlsInclude } from '@sb/components/Documentation'
import { Button } from '@src/button'
import { generateRoutes } from '@src/breadcrumbs/helpers'
import { Tag } from '@src/tag'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Placeholder, Settings } from '@kaspersky/hexa-ui-icons/24'

import MetaData from '../__meta__/meta.json'
import { PageHeader as PageHeaderComponent } from '../PageHeader'
import { PageHeaderProps } from '../types'

import {
  defaultArgs,
  elementAfterOptions,
  iconBeforeOptions,
  pageHeaderPropPresentation
} from './PageHeader.controls'

type StoryPageHeaderProps = Omit<PageHeaderProps, 'breadcrumbs' | 'elementAfter' | 'iconBefore' | 'tagsAfter'> & {
  breadcrumbs: boolean
  elementAfter: (typeof elementAfterOptions)[number]
  iconBefore: (typeof iconBeforeOptions)[number]
  tagsAfter: boolean
}

const iconBeforeVariants = {
  none: undefined,
  placeholder: <Placeholder />,
  settings: <Settings />
} as const

const elementAfterVariants = {
  none: undefined,
  placeholder: <Placeholder />,
  button: <Button text="Создать" />
} as const

export const pageHeaderStorySettings: Meta<StoryPageHeaderProps> = {
  argTypes: buildStoryArgTypesFromComponents(PageHeaderComponent, pageHeaderPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/PageHeader',
  // @ts-expect-error Story args convert ReactNode props to control values.
  component: PageHeaderComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['pageHeaderStorySettings'],
  ...pageHeaderStorySettings
} satisfies Meta<StoryPageHeaderProps>

export default meta

type Story = StoryObj<StoryPageHeaderProps>

export const Playground: Story = {
  name: 'Playground',
  render: ({ breadcrumbs, elementAfter, iconBefore, tagsAfter, ...args }) => (
    <PageHeaderComponent
      {...args}
      breadcrumbs={breadcrumbs ? { routes: generateRoutes() } : undefined}
      elementAfter={elementAfterVariants[elementAfter]}
      iconBefore={iconBeforeVariants[iconBefore]}
      tagsAfter={tagsAfter ? [{ label: 'Tag 1' }, { label: 'Tag 2' }] : undefined}
    />
  ),
  parameters: {
    controls: {
      include: getControlsInclude(pageHeaderPropPresentation),
      sort: 'none'
    }
  }
}
