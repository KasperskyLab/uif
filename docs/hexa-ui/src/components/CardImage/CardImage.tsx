import cn from 'classnames'
import React from 'react'

import { Text } from '@kaspersky/hexa-ui'

import styles from './CardImage.module.scss'
import { CardImageProps, CSSVars } from './types'

export function CardImage (props: CardImageProps) {
  const {
    children,
    title,
    mode = 'grey',
    text,
    colorTitle,
    subTitle,
    titlePaddingTop = true,
    idTitle,
    widthImage,
    heightImage,
    className
  } = props

  const hasText = Boolean(text)

  const cssVars: CSSVars = {
    ...(widthImage != null ? { ['--card-image-w']: `${widthImage}px` } : null),
    ...(heightImage != null ? { ['--card-image-h']: `${heightImage}px` } : null)
  }

  return (
    <div className={cn(styles.wrapper, className)}>
      {title && (
        <div
          id={idTitle}
          className={cn(
            styles.titleWrapper,
            titlePaddingTop && styles.titlePaddingTop
          )}
        >
          <Text type="H3">{title}</Text>
        </div>
      )}

      {subTitle && (
        <div
          className={cn(
            styles.subTitleWrapper,
            colorTitle === 'secondary' ? styles.subTitleSecondary : styles.subTitlePrimary
          )}
        >
          <Text type={colorTitle === 'secondary' ? 'BTR4' : 'BTR3'} color={colorTitle}>
            {subTitle}
          </Text>
        </div>
      )}

      <div className={styles.contentRow}>
        <div
          className={cn(
            styles.imageWrapper,
            styles[mode],
            !hasText && styles.noText
          )}
          style={cssVars}
        >
          {children}
        </div>

        {text && (
          <div className={styles.rightGapWrapper}>
            <Text>{text}</Text>
          </div>
        )}
      </div>
    </div>
  )
}
