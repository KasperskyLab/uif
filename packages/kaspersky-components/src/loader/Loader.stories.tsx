import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { Loader } from './Loader'
import { LoaderProps, LoaderMode, LoaderSize } from './types'
import MetaData from './__meta__/meta.json'

import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { Size } from '@design-system/types'

const meta: Meta<LoaderProps> = {
  title: 'Atoms/Loader',
  component: Loader,
  argTypes: {
    ...sbHideControls(['theme', 'tip'])
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
    design: MetaData.figmaView
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

export const Modes: Story = {
  render: (args: LoaderProps) => {
    const modes: LoaderMode[] = ['default', 'inverted']
    return (
      <LoadersContainer>
        {modes.map(mode => (
          <Loader key={mode} mode={mode} {...args} />
        ))}
      </LoadersContainer>
    )
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
