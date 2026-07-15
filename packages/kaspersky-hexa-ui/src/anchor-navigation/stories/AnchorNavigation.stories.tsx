import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { P } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import {
  AnchorNavigation as AnchorNavigationComponent,
  Navigation
} from '../AnchorNavigation'
import { AnchorNavigationProps } from '../types'

import {
  anchorNavigationPropPresentation,
  defaultArgs
} from './AnchorNavigation.controls'
import {
  buildPlaygroundItems,
  dummyText,
  renderAnchorContent
} from './constants'

type StoryAnchorNavigationProps = Omit<AnchorNavigationProps, 'children' | 'items'> &
  typeof defaultArgs

const anchorNavigationControlsOrder = getControlsInclude(
  anchorNavigationPropPresentation
)

export const anchorNavigationStorySettings: Meta<StoryAnchorNavigationProps> = {
  argTypes: buildStoryArgTypesFromComponents(
    [AnchorNavigationComponent, Navigation],
    anchorNavigationPropPresentation
  ),
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/AnchorNavigation',
  // @ts-expect-error Playground adds story-only controls and maps them in render
  component: AnchorNavigationComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['anchorNavigationStorySettings'],
  ...anchorNavigationStorySettings,
  args: defaultArgs
} satisfies Meta<StoryAnchorNavigationProps>

export default meta

type Story = StoryObj<StoryAnchorNavigationProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: anchorNavigationControlsOrder,
      sort: 'none'
    }
  },
  render: ({
    title,
    sectionCount,
    withElementAfter,
    withLongLabels,
    withNestedItems
  }) => {
    const items = buildPlaygroundItems({
      sectionCount,
      withElementAfter,
      withLongLabels,
      withNestedItems
    })

    return (
      <>
        <P style={{ marginBottom: '1em' }}>{dummyText}</P>

        <AnchorNavigationComponent items={items} title={title}>
          {renderAnchorContent(items)}
        </AnchorNavigationComponent>
      </>
    )
  }
}
