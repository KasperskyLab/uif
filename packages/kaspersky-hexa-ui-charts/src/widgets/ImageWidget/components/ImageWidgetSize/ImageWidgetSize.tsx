import React, { FC } from 'react'

import { Text } from '@kaspersky/hexa-ui'

import styles from './ImageWidgetSize.module.scss'

interface ImageWidgetSizeProps {
  size: {
    width: number,
    height: number
  }
}

export const ImageWidgetSize: FC<ImageWidgetSizeProps> = ({ size }) => {
  return (
    <div className={styles.imageWidgetSize}>
      <Text type="BTR4" color="disabled">
        {size.width}x{size.height}
      </Text>
    </div>
  )
}
