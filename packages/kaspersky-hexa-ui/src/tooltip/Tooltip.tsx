import { WithGlobalComponentStyles } from '@helpers/hocs/WithGlobalComponentStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { getTooltipGlobalStyles } from '@src/tooltip/tooltipGlobalStyles'
import { Tooltip as AntdTooltip } from 'antd'
import React, { FC } from 'react'

import { ALIGNS } from './tooltipCss'
import { TooltipProps, TooltipViewProps } from './types'
import { useThemedTooltip } from './useThemedTooltip'

export const Tooltip: FC<TooltipProps> = ({
  placement = 'top',
  defaultAlign = false,
  ...rawProps
}: TooltipProps) => {
  const themedProps = useThemedTooltip(rawProps)
  const props = useTestAttribute(themedProps)
  return (
    <TooltipView
      align={defaultAlign ? undefined : ALIGNS[placement]}
      placement={placement}
      {...props}
    />
  )
}

const TooltipViewComponent: FC<TooltipViewProps> = ({
  cssConfig,
  rootHashClass,
  text,
  testAttributes,
  ...rest
}: TooltipViewProps) => {
  return (
    <>
      <AntdTooltip
        mouseEnterDelay={0.2}
        mouseLeaveDelay={0}
        overlayClassName={rootHashClass}
        title={text}
        {...testAttributes}
        {...rest}
      />
    </>
  )
}

const TooltipView = WithGlobalComponentStyles(
  TooltipViewComponent,
  getTooltipGlobalStyles
)
