import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Size } from '@design-system/types'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { Loader } from '../Loader'
import { LoaderMode, LoaderProps, LoaderSize } from '../types'
import { loaderStorySettings } from '../Loader.stories'

const meta: Meta<typeof Loader> = {
  title: 'Hexa UI Components/Loader/Stories',
  component: Loader,
  tags: ['!autodocs'],
  ...loaderStorySettings
}

export default meta

type Story = StoryObj<LoaderProps>

export const Basic: Story = {}

export const Centered: Story = {
  render: (args) => (
    <div style={{ height: 'calc(100vh - 16 * 2px)' }}>
      <Loader {...args} />
    </div>
  ),
  args: {
    centered: true
  }
}

const LoadersContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

const LoaderContainer = styled.div<{ mode: LoaderMode }>`
  padding: 8px;
  border-radius: 8px;
  ${(props) => {
    return props.mode === 'inverted' && `background-color: ${props.theme.colors?.bg['base-invert']}`
  }}
`

export const Modes: Story = {
  render: (args: LoaderProps) => {
    const modes: LoaderMode[] = ['default', 'inverted']
    return (
      <LoadersContainer>
        {modes.map(mode => {
          return (
            <LoaderContainer key={mode} mode={mode}>
              <Loader mode={mode} tip={`${mode} loader`} {...args} />
            </LoaderContainer>
          )
        })}
      </LoadersContainer>
    )
  },
  args: {
    size: Size.Large
  }
}

export const Sizes: Story = {
  render: (args: LoaderProps) => {
    const sizes: LoaderSize[] = [Size.ExtraSmall, Size.Small, Size.Medium, Size.Large, Size.ExtraLarge]
    return (
      <LoadersContainer>
        {sizes.map(size => (
          <Loader key={size} {...args} size={size} />
        ))}
      </LoadersContainer>
    )
  },
  args: {
    tip: 'Loader with Text'
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.loader },
  render: args => <ThemedPalette {...args} />
}
