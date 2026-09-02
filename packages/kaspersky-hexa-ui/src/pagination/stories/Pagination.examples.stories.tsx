import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { Pagination } from '../Pagination'
import { PaginationTemplate, paginationStorySettings } from './Pagination.stories'
import { PaginationProps } from '../types'

const meta: Meta<PaginationProps> = {
  title: 'Hexa UI Components/Pagination/Stories',
  component: Pagination,
  tags: ['!autodocs'],
  ...paginationStorySettings
}

export default meta

type Story = StoryObj<PaginationProps>

export const Basic: Story = {
  render: PaginationTemplate
}

export const Simple: Story = {
  render: PaginationTemplate,
  args: {
    simple: true
  }
}

export const HideOnSinglePage: Story = {
  render: PaginationTemplate,
  args: {
    total: 5,
    hideOnSinglePage: true
  }
}

export const WithSizeChanger: Story = {
  render: PaginationTemplate,
  args: {
    showSizeChanger: true
  }
}

export const WithJumper: Story = {
  render: PaginationTemplate,
  args: {
    jumper: true,
    showSizeChanger: true
  }
}

export const Disabled: Story = {
  render: PaginationTemplate,
  args: {
    showSizeChanger: true,
    disabled: true
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>

export const ColorTokens: PaletteStory = {
  args: { source: componentColors.pagination },
  render: args => <ThemedPalette {...args} />
}
