import React from 'react'

import { H6, Link } from '@kaspersky/hexa-ui'

import { PieChart } from '../../charts/PieChart'
import { useActiveDataPoints } from '../hooks/useActiveDataPoints'
import { Legend } from '../Legend/components/Legend'

import styles from './PieWidget.module.scss'

export const PieWidget = <T, >({ data, legend, showTotal, title, widgetLink, description }: any) => {
  const { widgetData, updateActiveSlice } = useActiveDataPoints(data)

  return (
    <div className={styles.simpleWidgetPie}>
      <H6>{title}</H6>
      { widgetLink ? <Link onClick={widgetLink.clickHandler}>{widgetLink.text}</Link> : null }
      <div className={styles.widgetCols}>
        <PieChart
          data={widgetData}
          showTotal={showTotal}
          width={180}
          height={180}
          onHoverData={(_, payload) => {
            updateActiveSlice(payload)
          }}
          onLeaveData={() => {
            updateActiveSlice(undefined)
          }}
        />
        <Legend
          items={legend}
          description={description}
          showTotal
        />
      </div>
    </div>
  )
}
