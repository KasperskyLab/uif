import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { LoadingOverlay as LoadingOverlayComponent } from '../LoadingOverlay'
import { LoadingOverlayProps } from '../types'

import { defaultArgs, loadingOverlayPropPresentation } from './LoadingOverlay.controls'

export const loadingOverlayStorySettings: Meta<LoadingOverlayProps> = {
  argTypes: buildStoryArgTypes(loadingOverlayPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'loading-overlay-test-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta: Meta<typeof LoadingOverlayComponent> = {
  title: 'Hexa UI Components/LoadingOverlay',
  component: LoadingOverlayComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['loadingOverlayStorySettings'],
  ...loadingOverlayStorySettings
}

export default meta

type Story = StoryObj<LoadingOverlayProps>

function OverlayContainer ({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      border: '1px solid grey',
      height: 300,
      padding: 20,
      position: 'relative',
      width: 500
    }}>
      {children}
    </div>
  )
}

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(loadingOverlayPropPresentation),
      sort: 'none'
    }
  },
  render: (args: LoadingOverlayProps) => (
    <OverlayContainer>
      <LoadingOverlayComponent {...args} />
    </OverlayContainer>
  )
}
