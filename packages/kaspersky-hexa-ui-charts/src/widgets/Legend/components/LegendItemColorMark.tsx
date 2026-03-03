import React, { FC } from 'react'

import styles from '../Legend.module.scss'

interface ILegendItemColorMark {
  color?: string
}
export const LegendItemColorMark: FC<ILegendItemColorMark> = ({ color }) => (
  <div className={styles.colorMark} style={{ backgroundColor: color }} />
)
