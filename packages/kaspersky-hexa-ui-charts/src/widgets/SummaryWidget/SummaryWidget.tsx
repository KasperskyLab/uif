import React from 'react'

import { H6 } from '@kaspersky/hexa-ui'

import { LineChart } from '../../charts/LineChart'
import { PieChart } from '../../charts/PieChart'
import { Legend } from '../Legend/components/Legend'

import styles from './SummaryWidget.module.scss'

export const SummaryWidget = <T, >({ dataPie, dataLine, legend, titlePie, titleLine, widgetLink, description }: any) => {
  const lineChartProps = {
    lineWidth: 2,
    pointSize: 0,
    xMin: 10,
    xMax: 50,
    yMin: 0,
    yMax: 0,
    gradient: true,
    height: 180
  }

  const pieChartProps = {
    width: 180,
    height: 180,
    showTotal: true,
    innerRadius: 0.1
  }

  return (
    // @ts-ignore
    <div className={styles.simpleWidgetPieLine}>
      <div className={styles.simpleWidgetPieLineCol}>
        <H6>{titlePie}</H6>
        <div className={styles.widgetCols}>
          <PieChart {...pieChartProps} data={dataPie} />
          <Legend items={legend} />
        </div>
      </div>
      <div className={styles.simpleWidgetPieLineCol}>
        <H6>{titleLine}</H6>
        <div style={{ height: 180 }}>
          <LineChart {...lineChartProps} data={dataLine}/>
        </div>
      </div>
    </div>
  )
}
