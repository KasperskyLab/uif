import { StoryObj } from '@storybook/react-webpack5'

import { CasbTable as Component } from './CasbTable'
import { model } from './model'

export default {
  title: 'Hexa UI Components/Table',
  component: Component,
  argTypes: {
    model: { type: 'object' }
  },
  args: {
    model
  }
}

export const CasbTable: StoryObj = {}
