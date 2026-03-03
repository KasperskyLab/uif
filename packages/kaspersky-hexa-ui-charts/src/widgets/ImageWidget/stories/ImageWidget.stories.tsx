import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { ImageWidget } from '../ImageWidget'

import { ImageWidgetStub } from './ImageWidgetStub'

const meta: Meta<typeof ImageWidget> = {
  title: 'Widget/ImageWidget',
  component: ImageWidget,
  args: {
    onOverlayClick: action('onOverlayClick'),
    src: null,
    readonly: false,
    editTrigger: 'Upload picture',
    placeholder: 'No Image Selected',
    width: 300,
    height: 300
  }
}

export default meta

type Story = StoryObj<typeof ImageWidget>

export const NP: Story = {
  name: 'No Picture (readonly)',
  args: ImageWidgetStub[0]
}
export const NP3: Story = {
  name: 'No Picture',
  args: ImageWidgetStub[1]
}
export const P: Story = {
  name: 'Picture (readonly)',
  args: ImageWidgetStub[2]
}
export const P3: Story = {
  name: 'Picture',
  args: ImageWidgetStub[3]
}
