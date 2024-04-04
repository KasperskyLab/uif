import * as React from 'react'
import { GridItem } from '../GridItem'
import { Grid } from '../Grid'
import { FormGridProps } from '../types'

export const FormGrid = ({ children, gridPreset }: React.PropsWithChildren<FormGridProps>) => {
  function passGridLayoutProp (children: any) {
    let passedChildren = children
    if (children?.props?.children) {
      passedChildren = React.cloneElement(children, {
        children: Array.isArray(children.props.children)
          ? children.props.children?.map(passGridLayoutProp)
          : passGridLayoutProp(children.props.children)
      })
    }
    if (children?.type?.displayName === 'KeyValue' && !children?.props?.gridLayout) {
      return React.cloneElement(passedChildren, { gridLayout: { cols: [gridPreset] } })
    }
    return passedChildren
  }

  return <Grid layout={{ cols: ['repeat(1, 12fr)'] }}>
    {Array.isArray(children)
      ? children.map((el: any, i: number) => {
          return <GridItem key={i}>{passGridLayoutProp(el)}</GridItem>
        })
      : <GridItem>{passGridLayoutProp(children)}</GridItem>}
  </Grid>
}
