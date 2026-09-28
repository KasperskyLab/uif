import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { showDeprecationWarn } from '@helpers/showDeprecationWarn'
import cn from 'classnames'
import React, { FC } from 'react'

import styles from './Indicator.module.scss'
import { IndicatorModes, IndicatorProps } from './types'

export const Indicator: FC<IndicatorProps> = (rawProps: IndicatorProps) => {
  const { mode = 'accent', theme, ...notDeprecatedProps } = rawProps

  let notDeprecatedMode = mode
  if (!IndicatorModes.includes(mode)) {
    notDeprecatedMode = 'accent'
    showDeprecationWarn('mode', mode)
  }

  const { testAttributes, ...props } = useTestAttribute(notDeprecatedProps)
  const { border, className } = props

  return (
    <span
      {...testAttributes}
      className={getClassNameWithTheme(
        cn(
          'hexa-ui-indicator',
          styles.dot,
          styles[notDeprecatedMode],
          border && styles.border,
          className
        ),
        theme
      )}
    />
  )
}
