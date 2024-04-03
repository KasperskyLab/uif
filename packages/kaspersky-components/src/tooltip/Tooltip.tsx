import React, { FC } from 'react'
import { Tooltip as AntdTooltip } from 'antd'
import { useThemedTooltip } from './useThemedTooltip'
import { TooltipProps, TooltipViewProps } from './types'
import { ALIGNS } from './tooltipCss'
import { WithGlobalComponentStyles } from '@helpers/hocs/WithGlobalComponentStyles'
import { getTooltipGlobalStyles } from '@src/tooltip/tooltipGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

export const Tooltip: FC<TooltipProps> = ({
  placement = 'top',
  ...rawProps
}: TooltipProps) => {
  const themedProps = useThemedTooltip(rawProps)
  const props = useTestAttribute(themedProps)
  return (
    <TooltipView
      align={ALIGNS[placement]}
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
