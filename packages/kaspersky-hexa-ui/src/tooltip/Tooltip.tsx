import { usePopupConfig } from '@helpers/components/PopupConfigProvider'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useGlobalComponentStyles } from '@helpers/useGlobalComponentStyles'
import { getTooltipGlobalStyles } from '@src/tooltip/tooltipGlobalStyles'
import React, { FC } from 'react'

import { Tooltip as AntdTooltip } from './AntdTooltip'
import { ALIGNS } from './tooltipCss'
import { TooltipProps } from './types'
import { useThemedTooltip } from './useThemedTooltip'

export const Tooltip: FC<TooltipProps> = ({
  placement = 'top',
  defaultAlign = false,
  ...rawProps
}: TooltipProps) => {
  const {
    cssConfig,
    getPopupContainer,
    testAttributes,
    text,
    ...rest
  } = useTestAttribute(useThemedTooltip(rawProps))
  const config = usePopupConfig()

  const globalClassName = useGlobalComponentStyles(
    cssConfig,
    getTooltipGlobalStyles,
    Tooltip
  )

  return (
    <AntdTooltip
      align={defaultAlign ? undefined : ALIGNS[placement]}
      getPopupContainer={getPopupContainer ?? config.getPopupContainer}
      mouseEnterDelay={0.2}
      mouseLeaveDelay={0}
      overlayClassName={globalClassName}
      placement={placement}
      title={text}
      {...testAttributes}
      {...rest}
    />
  )
}
