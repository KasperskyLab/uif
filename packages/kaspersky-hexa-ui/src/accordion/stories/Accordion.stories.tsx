import { badges } from '@sb/badges'
import { buildStoryArgTypesFromComponents, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Indicator } from '@src/indicator'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { Meta, StoryObj } from '@storybook/react'
import { MenuInfo } from 'rc-menu/lib/interface'
import React from 'react'

import {
  Star,
  StatusOkSolid,
  UserAccount
} from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Accordion as AccordionComponent } from '../Accordion'
import { AccordionPanel } from '../AccordionPanel'
import { AccordionPanelProps, AccordionProps } from '../types'

import {
  accordionActionsOptions,
  accordionElementAfterOptions,
  accordionElementBeforeOptions,
  accordionPropPresentation,
  defaultArgs
} from './Accordion.controls'

type StoryAccordionProps = Omit<AccordionPanelProps, 'elementBefore' | 'elementAfter' | 'actions'> &
  AccordionProps &
  Omit<typeof defaultArgs, 'elementBefore' | 'elementAfter' | 'actions'> & {
    elementBefore: (typeof accordionElementBeforeOptions)[number]
    elementAfter: (typeof accordionElementAfterOptions)[number]
    actions: (typeof accordionActionsOptions)[number]
  }

const elementBeforeVariants = {
  none: undefined,
  statusOkSolid: <StatusOkSolid />,
  star: <Star />,
  indicator: <Indicator />
} as const

const elementAfterVariants = {
  none: undefined,
  statusOkSolid: <StatusOkSolid />,
  userAccount: (
    <Space gap={4}>
      <UserAccount />
      10/10
    </Space>
  )
} as const

const actionsVariants: Record<
  (typeof accordionActionsOptions)[number],
  AccordionPanelProps['actions']
> = {
  none: undefined,
  default: [
    { value: 'Action 1', onClick: (e: MenuInfo) => e.domEvent.stopPropagation() },
    { value: 'Action 2', onClick: (e: MenuInfo) => e.domEvent.stopPropagation() }
  ]
}

const sortObjectByKeyOrder = <T extends Record<string, unknown>>(order: string[], obj: T): T => {
  const otherKeys = Object.keys(obj).filter((key) => !order.includes(key))
  const out = {} as T

  for (const key of [...order, ...otherKeys]) {
    out[key as keyof T] = obj[key as keyof T]
  }

  return out
}

const accordionControlsOrder = getControlsInclude(accordionPropPresentation)

export const accordionStorySettings: Meta<StoryAccordionProps> = {
  args: sortObjectByKeyOrder(accordionControlsOrder, defaultArgs),
  argTypes: buildStoryArgTypesFromComponents(
    [AccordionComponent, AccordionPanel],
    accordionPropPresentation
  ),
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

const meta = {
  // @ts-expect-error потому что везде есть функция render и мы перемапливаем пропы
  component: AccordionComponent,
  title: 'Hexa UI Components/Accordion',
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['accordionStorySettings'],
  ...accordionStorySettings
} satisfies Meta<StoryAccordionProps>

export default meta

type Story = StoryObj<StoryAccordionProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: accordionControlsOrder,
      sort: 'none'
    }
  },
  render: ({
    actions,
    additionalText,
    className,
    disabled,
    elementAfter,
    elementBefore,
    shouldDisableActions,
    title,
    titleSize,
    tagAfterLabel,
    tagAfterMode,
    withBorder,
    ...rest
  }: StoryAccordionProps) => (
    <AccordionComponent {...rest} withBorder={withBorder}>
      <AccordionPanel
        key={1}
        actions={actionsVariants[actions]}
        additionalText={additionalText}
        className={className}
        disabled={disabled}
        elementBefore={elementBeforeVariants[elementBefore]}
        elementAfter={withBorder ? elementAfterVariants[elementAfter] : undefined}
        shouldDisableActions={shouldDisableActions}
        tagAfter={tagAfterLabel ? <Tag label={tagAfterLabel} mode={tagAfterMode} /> : undefined}
        title={title}
        titleSize={titleSize}
      >
        Accordion content
      </AccordionPanel>
    </AccordionComponent>
  )
}
