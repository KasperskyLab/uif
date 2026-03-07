import cn from 'classnames'
import React from 'react'

import { ActionButton, Text } from '@kaspersky/hexa-ui'

import styles from './Footer.module.scss'

type FooterProps = {
  isMain?: boolean
  className?: string
}

function Footer ({ isMain, className }: FooterProps) {
  return (
    <div className={cn(
      styles.wrapper,
      isMain && styles.isMain,
      className
    )}>
      <Text color="disabled" type="BTR3" className={styles.nowrap}>
        © 2025 АО «Лаборатория Касперского»
      </Text>

      <ActionButton noIcon size="large">
        Контакты
      </ActionButton>

      <Text color="disabled" type="BTR3" className={styles.nowrap}>
        Версия 3.2  ·  Обновлено 21 октября 2025 г.
      </Text>
    </div>
  )
}

export default Footer
