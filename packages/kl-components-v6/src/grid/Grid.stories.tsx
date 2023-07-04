import React from 'react'
import styled from 'styled-components'
import { badges } from '../../.storybook/badges'
import { Grid } from './Grid'
import { IGridProps } from './types'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import Meta from './__meta__/meta.json'
import { GridItem } from './GridItem'
import { SingleRowLayout, TwoColumnsLayout } from './layouts'
import { Button } from '../button'
import { Checkbox, Select } from 'antd'
import { Link } from '../link'

export default {
  title: 'Molecules/Grid',
  component: Grid,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const Widget = styled.div`
  width: 100%;
  height: 100%;
  border : solid 5px #aaa;
  text-align: center;
  font-weight: bold;
`

const defaultLayout = {
  cols: ['repeat(3, 100px)'],
  rows: ['repeat(3, 100px)']
}

const defaultLayoutProperty = {
  gap: 12
}

const GridTemplate = ({
  layout = defaultLayout,
  layoutProperty = defaultLayoutProperty,
  ...rest
}: IGridProps) => {
  return (
    <Grid layout={layout} layoutProperty={layoutProperty} {...rest}>
      <GridItem span={2}>
        <Widget>Widget #1</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #2</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #3</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #4</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #5</Widget>
      </GridItem>
    </Grid>
  )
}

export const Basic = GridTemplate.bind({})

const WithGapTemplate = ({
  layout = defaultLayout,
  ...rest
}: IGridProps) => {
  return (
    <Grid layout={layout} layoutProperty={{ gap: 4 }} {...rest}>
      <GridItem span={2}>
        <Widget>Widget #1</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #2</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #3</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #4</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #5</Widget>
      </GridItem>
    </Grid>
  )
}

export const WithGap = WithGapTemplate.bind({})

const WithRowAndColumnGapTemplate = ({
  layout = defaultLayout,
  ...rest
}: IGridProps) => {
  return (
    <Grid
      layout={layout}
      layoutProperty={{ rowGap: 8, columnGap: 32 }}
      {...rest}
    >
      <GridItem span={2}>
        <Widget>Widget #1</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #2</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #3</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #4</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #5</Widget>
      </GridItem>
    </Grid>
  )
}

export const WithRowAndColumnGap = WithRowAndColumnGapTemplate.bind({})

const WithRowAndColumnSpanTemplate = ({
  layout = defaultLayout,
  layoutProperty = defaultLayoutProperty,
  ...rest
}: IGridProps) => {
  return (
    <Grid layout={layout} layoutProperty={layoutProperty} {...rest}>
      <GridItem columnSpan={2} rowSpan={2}>
        <Widget>Widget #1</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #2</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #3</Widget>
      </GridItem>
    </Grid>
  )
}

export const WithRowAndColumnSpan = WithRowAndColumnSpanTemplate.bind({})

const WithSingleRowLayoutTemplate = (props: IGridProps) => {
  return (
    <Grid layout={SingleRowLayout} layoutProperty={{
      alignItems: 'center',
      ...defaultLayoutProperty
    }} {...props}>
      <GridItem>
        <Button>Button 1</Button>
      </GridItem>
      <GridItem>
        <Button>Button 2</Button>
      </GridItem>
      <GridItem style={{
        width: '100px'
      }}>
        <Select placeholder='Select' />
      </GridItem>
      <GridItem>
        <Checkbox>Check</Checkbox>
      </GridItem>
    </Grid>
  )
}

export const WithSingleRowLayout = WithSingleRowLayoutTemplate.bind({})

const WithTwoColumnLayoutTemplate = (props: IGridProps) => {
  return (
    <Grid layout={TwoColumnsLayout} layoutProperty={defaultLayoutProperty} {...props}>
      <GridItem areaName={'right'}>
        <p>Description</p>
        <Select placeholder='Select' />
      </GridItem>
      <GridItem areaName={'left'}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>,
        <Link href='#'>the lazy dog</Link>
      </GridItem>
    </Grid>
  )
}

export const WithTwoColumnLayout = WithTwoColumnLayoutTemplate.bind({})

const WithCustomLayoutTemplate = (props: IGridProps) => {
  return (
    <Grid layout={{
      cols: ['repeat(2, 100px)'],
      rows: ['repeat(3, 100px)']
    }} layoutProperty={defaultLayoutProperty} {...props}>
      <GridItem>
        <Widget>Widget #1</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #2</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #3</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #4</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #5</Widget>
      </GridItem>
      <GridItem>
        <Widget>Widget #6</Widget>
      </GridItem>
    </Grid>
  )
}

export const WithCustomLayout = WithCustomLayoutTemplate.bind({})
