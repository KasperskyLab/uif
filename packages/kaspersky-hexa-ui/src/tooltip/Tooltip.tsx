import { usePopupConfig } from '@helpers/components/PopupConfigProvider'
import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import cn from 'classnames'
import React, { FC } from 'react'

import { Tooltip as AntdTooltip } from './AntdTooltip'
import styles from './Tooltip.module.scss'
import { ALIGNS } from './tooltipCss'
import { TooltipProps } from './types'

export const Tooltip: FC<TooltipProps> = ({
  placement = 'top',
  defaultAlign = false,
  ...rawProps
}: TooltipProps) => {
  const {
    getPopupContainer,
    testAttributes,
    text,
    ...rest
  } = useTestAttribute(rawProps)
  const config = usePopupConfig()

  return (
    <AntdTooltip
      align={defaultAlign ? undefined : ALIGNS[placement]}
      getPopupContainer={getPopupContainer ?? config.getPopupContainer}
      mouseEnterDelay={0.2}
      mouseLeaveDelay={0}
      overlayClassName={cn(getClassNameWithTheme(rest.overlayClassName, rest.theme), styles.tooltip)}
      placement={placement}
      title={text}
      {...testAttributes}
      {...rest}
    />
  )
}
