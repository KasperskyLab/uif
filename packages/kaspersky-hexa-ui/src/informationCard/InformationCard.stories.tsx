import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from './__meta__/meta.json'
import { InformationCard as InformationCardComponent } from './InformationCard'
import {
  contentVariantOptions,
  footerVariantOptions,
  leftSideVariantOptions,
  resolveContentVariant,
  resolveFooterVariant,
  resolveLeftSideVariant,
  resolveRightCornerVariant,
  rightCornerVariantOptions
} from './stories/constants'
import {
  defaultArgs,
  informationCardPropPresentation
} from './stories/InformationCard.controls'
import { InformationCardProps } from './types'

type StoryInformationCardProps = Omit<
  InformationCardProps,
  'leftSide' | 'rightCorner' | 'children' | 'footer'
> & {
  leftSideVariant: (typeof leftSideVariantOptions)[number]
  rightCornerVariant: (typeof rightCornerVariantOptions)[number]
  contentVariant: (typeof contentVariantOptions)[number]
  footerVariant: (typeof footerVariantOptions)[number]
}

const informationCardControlsOrder = getControlsInclude(informationCardPropPresentation)

export const informationCardStorySettings: Meta<StoryInformationCardProps> = {
  argTypes: buildStoryArgTypesFromComponents(
    InformationCardComponent,
    informationCardPropPresentation
  ),
  args: {
    ...defaultArgs,
    testId: 'information-card-test-id',
    klId: 'information-card-kl-id'
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
  title: 'Hexa UI Components/InformationCard',
  component: InformationCardComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['informationCardStorySettings'],
  ...informationCardStorySettings
} satisfies Meta<StoryInformationCardProps>

export default meta

type Story = StoryObj<StoryInformationCardProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: informationCardControlsOrder,
      sort: 'none'
    }
  },
  render: ({
    leftSideVariant,
    rightCornerVariant,
    contentVariant,
    footerVariant,
    disabled,
    ...rest
  }) => (
    <InformationCardComponent
      {...rest}
      disabled={disabled}
      leftSide={resolveLeftSideVariant(leftSideVariant)}
      rightCorner={resolveRightCornerVariant(rightCornerVariant, disabled)}
      footer={resolveFooterVariant(footerVariant, disabled)}
    >
      {resolveContentVariant(contentVariant, disabled)}
    </InformationCardComponent>
  )
}
