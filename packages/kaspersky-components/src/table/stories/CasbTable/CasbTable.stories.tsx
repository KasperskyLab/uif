import React from 'react'
import { Story } from '@storybook/react'
import { CasbTable as Component } from './CasbTable'
import { model } from './model'

export default {
  title: 'Organisms/Table',
  component: Component,
  argTypes: {
    model: { type: 'object' }
  },
  args: {
    model
  }
}

export const CasbTable: Story<typeof Component> = (args) => {
  return <Component {...args}/>
}
