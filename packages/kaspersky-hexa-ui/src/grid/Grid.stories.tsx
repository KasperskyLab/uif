import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'
import styled from 'styled-components'

import MetaData from './__meta__/meta.json'
import { Grid } from './Grid'
import { GridProps } from './types'

const meta: Meta<GridProps> = {
  title: 'Hexa UI Components/Layout/Grid',
  component: Grid,
  argTypes: { 
    cols: { control: { type: 'number', min: 1 } },
    layoutProperty: { control: 'object' }
  },
  args: {
    layoutProperty: {
      gap: 'grouped'
    },
    testId: 'grid-test-id',
    klId: 'grid-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<GridProps>

const Widget = styled.div`
  width: 100%;
  height: 100%;
  border : solid 2px blue;
  text-align: center;
  font-weight: bold;
`

const defaultArray = Array(28).fill('empty value')

export const Basic: Story = {
  render: (args: GridProps) => {
    return <>
      <Grid {...args}>
        {defaultArray.map((el, i) => (
          <Grid.Item key={i} >
            <Widget>Widget #{i + 1}</Widget>
          </Grid.Item>
        ))}
      </Grid>
    </>
  }
}
