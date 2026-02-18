import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Size } from '@design-system/types'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from './__meta__/meta.json'
import { Loader } from './Loader'
import { LoaderMode, LoaderProps, LoaderSize } from './types'

const meta: Meta<LoaderProps> = {
  title: 'Hexa UI Components/Loader',
  component: Loader,
  argTypes: {
    ...sbHideControls(['theme', 'tip']),
    size: {
      control: 'select',
      options: [Size.ExtraSmall, Size.Small, Size.Medium, Size.Large, Size.ExtraLarge]
    }
  },
  args: {
    testId: 'loader-test-id',
    klId: 'loader-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
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
