import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Menu2, Multidevice } from '@kaspersky/hexa-ui-icons/16'
import { ArrowForward } from '@kaspersky/hexa-ui-icons/24'

import { ActionButton } from '@src/action-button'

import MetaData from './__meta__/meta.json'
import { LicenseCard } from './LicenseCard'
import { LicenseCardProps } from './types'

import {
  defaultArgs,
  licenseCardElementAfterOptions,
  licenseCardIconBeforeOptions,
  licenseCardPropPresentation
} from './stories/LicenseCard.controls'

export const iconBeforeVariants: Record<(typeof licenseCardIconBeforeOptions)[number], React.ReactNode> = {
  none: undefined,
  multidevice: <Multidevice />,
  arrowForward: <ArrowForward />
}

export const elementAfterVariants: Record<(typeof licenseCardElementAfterOptions)[number], React.ReactNode> = {
  none: undefined,
  'action-button': <ActionButton icon={<Menu2 />} size="large" />
}

type StoryLicenseCardProps = Omit<LicenseCardProps, 'iconBefore' | 'elementAfter'> & {
  iconBefore: (typeof licenseCardIconBeforeOptions)[number]
  elementAfter: (typeof licenseCardElementAfterOptions)[number]
}

export const licenseCardStorySettings: Meta<LicenseCardProps> = {
  args: {
    title: 'Kaspersky | Russian Edition',
    number: 'EB29584F-A5C7-4510-9B8B-01A6FA952B95',
    mode: 'valid',
    expirationDate: new Date('2025-03-01'),
    activationDate: new Date('2023-03-01'),
    term: 730,
    daysRemaining: 340,
    compact: false,
    statusSection: true,
    validitySection: true
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/LicenseCard',
  // @ts-expect-error Playground maps story-only icon controls in render
  component: LicenseCard,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: [
    'licenseCardStorySettings',
    'iconBeforeVariants',
    'elementAfterVariants'
  ],
  ...licenseCardStorySettings,
  argTypes: buildStoryArgTypesFromComponents(
    LicenseCard,
    licenseCardPropPresentation
  ),
  args: {
    ...defaultArgs
  }
} satisfies Meta<StoryLicenseCardProps>

export default meta

type Story = StoryObj<StoryLicenseCardProps>

export const Playground: Story = {
  name: 'Playground',
  render: ({ iconBefore, elementAfter, ...rest }) => (
    <LicenseCard
      {...rest}
      iconBefore={iconBeforeVariants[iconBefore]}
      elementAfter={elementAfterVariants[elementAfter]}
    />
  ),
  parameters: {
    controls: {
      include: getControlsInclude(licenseCardPropPresentation),
      sort: 'none'
    }
  }
}
