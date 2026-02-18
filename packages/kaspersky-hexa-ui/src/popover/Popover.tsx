import { useGlobalComponentStyles } from '@helpers/useGlobalComponentStyles'
import { getRenderPropValue } from 'antd/es/_util/getRenderPropValue'
import cn from 'classnames'
import React, { FC } from 'react'

import { Tooltip as AntdTooltip } from '../tooltip/AntdTooltip'

import { ALIGNS } from './popoverCss'
import { getPopoverGlobalStyles } from './popoverGlobalStyles'
import { PopoverProps } from './types'
import { useThemedPopover } from './useThemedPopover'

export const Popover: FC<PopoverProps> = ({
  content,
  defaultVisible = false,
  placement = 'bottom',
  overlayClassName,
  shouldLimitSize = true,
  ...rawProps
}: PopoverProps) => {
  const props = useThemedPopover(rawProps)
  const [visible, setVisible] = React.useState(defaultVisible)
  const tooltipRef = React.useRef<HTMLElement>(null)

  const onGlobalTooltipsVisibleChange = React.useCallback(
    (event: CustomEvent) => {
      if (event.detail.tooltipRef === tooltipRef) return
      setVisible(false)
    },
    [tooltipRef]
  )

  React.useEffect(() => {
    document.addEventListener('kl-components-v6:tooltip-open', onGlobalTooltipsVisibleChange as EventListener)

    return () => {
      document.removeEventListener('kl-components-v6:tooltip-open', onGlobalTooltipsVisibleChange as EventListener)
    }
  }, [])

  const globalClassName = useGlobalComponentStyles(
    props.cssConfig,
    getPopoverGlobalStyles,
    Popover,
    { shouldLimitSize }
  )

  const overlay = (
    <div className="ant-popover-inner-content">
      {getRenderPropValue(content)}
    </div>
  )

  return (
    <AntdTooltip
      ref={tooltipRef}
      onVisibleChange={(visible) => {
        setVisible(visible)
        visible &&
          document.dispatchEvent(
            new CustomEvent('kl-components-v6:tooltip-open', {
              detail: { tooltipRef }
            })
          )
      }}
      overlayClassName={cn(overlayClassName, globalClassName)}
      visible={visible}
      defaultVisible={defaultVisible}
      align={ALIGNS[placement]}
      overlay={overlay}
      placement={placement}
      prefixCls="ant-popover"
      transitionName="ant-zoom-big"
      trigger="click"
      {...props}
    />
  )
}
