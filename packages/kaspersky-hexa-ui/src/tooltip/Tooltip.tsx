import { mirrorPlacement, useBodyDirection } from '@helpers/bodyDirection'
import { usePopupConfig } from '@helpers/components/PopupConfigProvider'
import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import cn from 'classnames'
import React, { FC } from 'react'

import { Tooltip as AntdTooltip } from './AntdTooltip'
import styles from './Tooltip.module.scss'
import { ALIGNS } from './tooltipCss'
import { TooltipPlacement, TooltipProps } from './types'

export const Tooltip: FC<TooltipProps> = ({
  placement: rawPlacement = 'top',
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

  const { direction } = useBodyDirection()

  const placement = mirrorPlacement(rawPlacement, direction) as TooltipPlacement

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
