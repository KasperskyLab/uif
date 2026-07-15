import { P } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LoadingOverlay as LoadingOverlayComponent } from '../LoadingOverlay'
import { LoadingOverlayProps } from '../types'

import { loadingOverlayStorySettings } from './LoadingOverlay.stories'

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

const meta: Meta<typeof LoadingOverlayComponent> = {
  title: 'Hexa UI Components/LoadingOverlay/Stories',
  component: LoadingOverlayComponent,
  tags: ['!autodocs'],
  ...loadingOverlayStorySettings
}

export default meta

type Story = StoryObj<LoadingOverlayProps>

export const Basic: Story = {
  render: args => (
    <OverlayContainer>
      <LoadingOverlayComponent {...args} />
      <P>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </P>
    </OverlayContainer>
  ),
  name: 'Loading Overlay'
}

export const Size: Story = {
  render: args => (
    <div style={{ display: 'flex', gap: 24 }}>
      {(['medium', 'large'] as const).map(size => (
        <OverlayContainer key={size}>
          <LoadingOverlayComponent {...args} size={size} />
        </OverlayContainer>
      ))}
    </div>
  ),
  argTypes: {
    size: { control: false }
  }
}
