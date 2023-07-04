/* eslint-disable */
import React from 'react'
import LayoutTypes from './constants/layout-types'
import styled from 'styled-components'

import {
  Grid,
  GridItem,
  SingleRowLayout,
  TwoColumnsLayout,
  DefaultLayout,
  RiotComponentWrapper
} from '@kl/components-v6'

const Widget = styled.div`
  width: 100%;
  height: 100%;
  border : dotted 1px #aaaaaa5e;
  display: block;
`

const GridWrap = styled.div`
  border: #9cabb5 dashed 2px;
`

export default function Component ({ state, setup }) {
  const layout = (() => {
    const select = (state.layoutType && state.layoutType.slct) || ''
    switch (select) {
      case LayoutTypes.SINGLE_ROW:
        return SingleRowLayout
      case LayoutTypes.TWO_COLUMNS:
        return TwoColumnsLayout
      case LayoutTypes.CUSTOM:
        if (!state.customLayout) break
        const customLayout = {}
        customLayout.cols = state.customLayout.columns.split(' ')
        customLayout.rows = state.customLayout.rows.split(' ')
        customLayout.direction = (state.gridAutoFlow && state.gridAutoFlow.slct) || ''
        if (state.customLayout.useAreas) {
          customLayout.areas = state.customLayout.areas
        }
        return customLayout
      default:
        return DefaultLayout
    }
  })()

  const layoutProperty = {
    alignItems: (state.alignItems && state.alignItems.slct) || '',
    justifyItems: (state.justifyItems && state.justifyItems.slct) || ''
  }

  const items = (state.gridItems && state.gridItems.items) || []
  const gridItems = items.map(item => {
    return (
      <GridItem
        areaName={item.areaName}
        span={Number(item.span) || ''}
        className={item.className}
        key={item.id}
      >
        <Widget>
          <RiotComponentWrapper
            riot={riot}
            componentName={'components-grid'}
            opts={{ gridItem: item, setup }}
          />
        </Widget>
      </GridItem>
    )
  })

  return <GridWrap>
    <span class='ui-form-label ui-form-label--group'>Grid</span>
    <Grid layout={layout} children={gridItems} layoutProperty={layoutProperty} />
  </GridWrap>
}
/* eslint-enable */
