import React, { FC } from 'react'
import { Popover as AntdPopover } from 'antd'
import cn from 'classnames'
import { useGlobalComponentStyles } from '@helpers/useGlobalComponentStyles'
import { useThemedPopover } from './useThemedPopover'
import { PopoverProps } from './types'
import { getPopoverGlobalStyles } from './popoverGlobalStyles'
import { ALIGNS } from './popoverCss'

export const Popover: FC<PopoverProps> = ({
  defaultVisible = false,
  placement = 'bottom',
  overlayClassName,
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
    Popover
  )

  return (
    <AntdPopover
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
      placement={placement}
      trigger="click"
      {...props}
    />
  )
}
