import cn from 'classnames'
import React from 'react'

import styles from './RangeSeparator.module.scss'

export const RangeSeparator = () => {
  return <div className={cn(styles.separator, 'hexa-ui-range-separator')}/>
}
