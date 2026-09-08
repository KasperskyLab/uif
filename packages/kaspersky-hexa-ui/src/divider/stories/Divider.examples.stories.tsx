import { StoryColumn, StoryWrapper } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Divider as DividerComponent } from '../Divider'
import { DividerProps } from '../types'

import { dividerStorySettings } from './Divider.stories'

const SomeContent = styled.div`
  width: 50px;
  height: 50px;
  background: grey;
`

const meta: Meta<typeof DividerComponent> = {
  title: 'Hexa UI Components/Divider/Stories',
  component: DividerComponent,
  tags: ['!autodocs'],
  ...dividerStorySettings
}

export default meta

type Story = StoryObj<DividerProps>

export const Basic: Story = {
  render: (args: DividerProps) => {
    const Wrapper = args.direction === 'horizontal' ? StoryColumn : StoryWrapper
    return (
      <Wrapper>
        <SomeContent />
        <DividerComponent {...args} />
        <SomeContent />
        <DividerComponent {...args} />
        <SomeContent />
      </Wrapper>
    )
  }
}
