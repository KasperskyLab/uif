import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { action } from 'storybook/actions'

import MetaData from '../__meta__/meta.json'

import { ImageWidgetStoryWrapper } from './ImageWidgetStoryWrapper'
import { imageWidgetStub } from './ImageWidgetStub'

const meta = {
  title: 'Widget/ImageWidget',
  component: ImageWidgetStoryWrapper,
  args: {
    onOverlayClick: action('onOverlayClick'),
    readonly: false,
    editTrigger: 'Upload picture',
    placeholder: 'No Image Selected',
    width: 300,
    height: 300
  },
  argTypes: {
    width: { control: { type: 'range', min: 100, max: 1000 } },
    height: { control: { type: 'range', min: 100, max: 1000 } }
  },
  parameters:{
    docs: {
      page: withMeta(MetaData)
    }
  }
} satisfies Meta<typeof ImageWidgetStoryWrapper>
export default meta
type Story = StoryObj<typeof ImageWidgetStoryWrapper>

export const NP: Story = {
  name: 'No Picture (readonly)',
  args: imageWidgetStub[0]
}

export const P: Story = {
  name: 'Picture (readonly)',
  args: imageWidgetStub[2]
}

export const E: Story = {
  name: 'Editable',
  args: imageWidgetStub[1]
}
