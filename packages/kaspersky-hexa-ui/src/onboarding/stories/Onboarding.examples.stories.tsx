import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Onboarding } from '../Onboarding'
import { InteractiveTourStep } from '../types'

import { TableOnboardingDemo } from './HiddenInterfaceTour'
import { demoSteps, OnboardingDemo, OnboardingDemoProps } from './Onboarding.demo'
import { onboardingStorySettings } from './Onboarding.stories'

const meta: Meta<OnboardingDemoProps> = {
  title: 'Hexa UI Components/Onboarding/Stories',
  component: Onboarding as Meta<OnboardingDemoProps>['component'],
  tags: ['!autodocs'],
  ...onboardingStorySettings
}

export default meta

type Story = StoryObj<OnboardingDemoProps>

const stepsWithoutImages: InteractiveTourStep[] = demoSteps.map(step => ({ ...step, image: undefined }))

const stepsWithFixedPlacement: InteractiveTourStep[] = demoSteps.map(step => ({ ...step, placement: 'bottom' }))

const renderDemo = (args: OnboardingDemoProps) => <OnboardingDemo {...args} />

export const TourVariant: Story = {
  args: { variant: 'tour' },
  render: renderDemo
}

export const InfoVariant: Story = {
  args: {
    variant: 'info',
    link: {
      text: 'Learn more',
      href: 'https://www.kaspersky.com',
      target: '_blank'
    }
  },
  render: renderDemo
}

export const TourWithoutImages: Story = {
  args: { variant: 'tour', tour: { steps: stepsWithoutImages } },
  render: renderDemo
}

export const TourWithFixedPlacement: Story = {
  args: { variant: 'tour', tour: { steps: stepsWithFixedPlacement } },
  render: renderDemo
}

export const HiddenInterfaceTour: StoryObj = {
  name: 'Tour through table',
  render: () => <TableOnboardingDemo />,
  tags: ['skip-visual']
}
