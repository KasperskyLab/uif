import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'
import { Map } from '@kaspersky/hexa-ui-icons/24'

import MetaData from '../__meta__/meta.json'
import { Card as CardComponent } from '../Card'
import { CardProps, CardTitleProps, ElementAfter, ElementBefore } from '../types'

import {
  cardActionsModeOptions,
  cardPropPresentation,
  cardTitleElementAfterOptions,
  cardTitleElementBeforeOptions,
  defaultArgs
} from './Card.controls'
import { defaultCardActions, cardTitleRadioElement, StoryWrapper } from './constants'

type StoryCardProps = Omit<CardProps, 'title' | 'actions' | 'children' | 'maxHeight'> &
  typeof defaultArgs

const titleElementBeforeVariants: Record<
  (typeof cardTitleElementBeforeOptions)[number],
  ElementBefore | undefined
> = {
  none: undefined,
  icon: <Map />,
  checkbox: { component: 'checkbox' },
  radio: cardTitleRadioElement,
  toggle: { component: 'toggle' }
}

const titleElementAfterVariants: Record<
  (typeof cardTitleElementAfterOptions)[number],
  ElementAfter | undefined
> = {
  none: undefined,
  text: { component: 'text', children: 'Text', type: 'BTM3' },
  toggle: { component: 'toggle' },
  radio: cardTitleRadioElement
}

const actionsModeVariants: Record<
  (typeof cardActionsModeOptions)[number],
  CardProps['actions']
> = {
  none: undefined,
  single: [{ icon: <Placeholder />, onClick: () => undefined }],
  multiple: defaultCardActions
}

export const cardStorySettings: Meta<StoryCardProps> = {
  argTypes: buildStoryArgTypes(cardPropPresentation),
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <StoryWrapper>
        <Story {...context} />
      </StoryWrapper>
    )
  ]
}

const meta = {
  title: 'Hexa UI Components/Card',
  // @ts-expect-error Playground добавляет story-only controls и маппит их в render
  component: CardComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['cardStorySettings'],
  ...cardStorySettings
} satisfies Meta<StoryCardProps>

export default meta

type Story = StoryObj<StoryCardProps>

export const Playground: Story = {
  name: 'Playground',
  args: {
    ...defaultArgs,
    testId: 'card-test-id',
    klId: 'card-kl-id'
  },
  parameters: {
    controls: {
      include: getControlsInclude(cardPropPresentation),
      sort: 'none'
    }
  },
  render: ({
    actionsMode,
    contentText,
    maxHeight,
    titleElementAfter,
    titleElementBefore,
    titleSize,
    titleText,
    ...rest
  }: StoryCardProps) => {
    const title: CardTitleProps | undefined = titleText
      ? {
          value: titleText,
          size: titleSize,
          elementBefore: titleElementBeforeVariants[titleElementBefore],
          elementAfter: titleElementAfterVariants[titleElementAfter]
        }
      : undefined

    return (
      <CardComponent
        {...rest}
        actions={actionsModeVariants[actionsMode]}
        maxHeight={maxHeight || undefined}
        title={title}
      >
        <Text>{contentText}</Text>
      </CardComponent>
    )
  }
}
