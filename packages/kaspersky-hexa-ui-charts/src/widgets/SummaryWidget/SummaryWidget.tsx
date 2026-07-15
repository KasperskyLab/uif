import React from 'react'

import { H6, Link } from '@kaspersky/hexa-ui'

import { LineChart, LineChartProps } from '../../charts/LineChart'
import { PieChart, PieChartProps } from '../../charts/PieChart'
import { ILegendProps, Legend } from '../Legend/components/Legend'

import styles from './SummaryWidget.module.scss'

export interface SummaryWidgetProps<LC, PC, L> {
  titlePie: string,
  titleLine: string,
  lineChartProps: LineChartProps<LC>,
  pieChartProps: PieChartProps<PC>,
  legendProps: ILegendProps<L>,
  pieWidgetLink?: { clickHandler?: React.MouseEventHandler<HTMLAnchorElement>, text: string },
  lineWidgetLink?: { clickHandler?: React.MouseEventHandler<HTMLAnchorElement>, text: string },
}

const defaultLineChartProps = {
  lineWidth: 2,
  pointSize: 0,
  xMin: 10,
  xMax: 50,
  yMin: 0,
  yMax: 0,
  gradient: true,
  height: 180
}

const defaultPieChartProps = {
  width: 180,
  height: 180,
  showTotal: true,
  innerRadius: 0.1
}

export const SummaryWidget = <LC, PC, L>({ pieChartProps, pieWidgetLink, lineWidgetLink, lineChartProps, legendProps, titlePie, titleLine }: SummaryWidgetProps<LC, PC, L>) => {

  return (
    <div className={styles.simpleWidgetPieLine}>
      <div className={styles.simpleWidgetPieLineCol}>
        <H6>{titlePie}</H6>
        {pieWidgetLink ? <Link onClick={pieWidgetLink.clickHandler}>{pieWidgetLink.text}</Link> : null}
        <div className={styles.widgetCols}>
          <PieChart {...defaultPieChartProps} {...pieChartProps} />
          <Legend {...legendProps} />
        </div>
      </div>
      <div className={styles.simpleWidgetPieLineCol}>
        <H6>{titleLine}</H6>
        {lineWidgetLink ? <Link onClick={lineWidgetLink.clickHandler}>{lineWidgetLink.text}</Link> : null}
        <div style={{ height: 180 }}>
          <LineChart {...defaultLineChartProps} {...lineChartProps} />
        </div>
      </div>
    </div>
  )
}
