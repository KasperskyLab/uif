/**
 * antd tooltip 4.18.8
 */
import { getTransitionName } from 'antd/es/_util/motion'
import { cloneElement, isValidElement } from 'antd/es/_util/reactNode'
import getPlacements, { AdjustOverflow } from 'antd/es/tooltip/placements'
import classNames from 'classnames'
import RcTooltip from 'rc-tooltip'
import { placements as Placements } from 'rc-tooltip/lib/placements'
import { TooltipProps as RcTooltipProps } from 'rc-tooltip/lib/Tooltip'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React from 'react'

export type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

// https://github.com/react-component/tooltip
// https://github.com/yiminghe/dom-align
export interface TooltipAlignConfig {
  points?: [string, string],
  offset?: [number | string, number | string],
  targetOffset?: [number | string, number | string],
  overflow?: { adjustX: boolean, adjustY: boolean },
  useCssRight?: boolean,
  useCssBottom?: boolean,
  useCssTransform?: boolean
}

export interface AbstractTooltipProps extends Partial<Omit<RcTooltipProps, 'children'>> {
  style?: React.CSSProperties,
  className?: string,
  placement?: TooltipPlacement,
  builtinPlacements?: typeof Placements,
  openClassName?: string,
  arrowPointAtCenter?: boolean,
  autoAdjustOverflow?: boolean | AdjustOverflow,
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement,
  children?: React.ReactNode
}

type RenderFunction = () => React.ReactNode;

export interface TooltipPropsWithOverlay extends AbstractTooltipProps {
  title?: React.ReactNode | RenderFunction,
  overlay: React.ReactNode | RenderFunction
}

export interface TooltipPropsWithTitle extends AbstractTooltipProps {
  title: React.ReactNode | RenderFunction,
  overlay?: React.ReactNode | RenderFunction
}

export declare type TooltipProps = TooltipPropsWithTitle | TooltipPropsWithOverlay;

const splitObject = (obj: any, keys: string[]) => {
  const picked: any = {}
  const omitted: any = { ...obj }

  keys.forEach(key => {
    if (obj && key in obj) {
      picked[key] = obj[key]
      delete omitted[key]
    }
  })

  return { picked, omitted }
}

// Fix Tooltip won't hide at disabled button
// mouse events don't trigger at disabled button in Chrome
// https://github.com/react-component/tooltip/issues/18
function getDisabledCompatibleChildren (element: React.ReactElement<any>, prefixCls: string) {
  const elementType = element.type as any
  if (
    ((elementType.__ANT_BUTTON === true || element.type === 'button') && element.props.disabled) ||
    (elementType.__ANT_SWITCH === true && (element.props.disabled || element.props.loading))
  ) {
    // Pick some layout related style properties up to span
    // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
    const { picked, omitted } = splitObject(element.props.style, [
      'position',
      'left',
      'right',
      'top',
      'bottom',
      'float',
      'display',
      'zIndex'
    ])
    const spanStyle = {
      display: 'inline-block', // default inline-block is important
      ...picked,
      cursor: 'not-allowed',
      width: element.props.block ? '100%' : null
    }
    const buttonStyle = {
      ...omitted,
      pointerEvents: 'none'
    }
    const child = cloneElement(element, {
      style: buttonStyle,
      className: null
    })

    return (
      <span
        style={spanStyle}
        className={classNames(element.props.className, `${prefixCls}-disabled-compatible-wrapper`)}
      >
        {child}
      </span>
    )
  }

  return element
}

export const Tooltip = React.forwardRef<unknown, TooltipProps>((props, ref) => {
  const [visible, setVisible] = useMergedState(false, {
    value: props.visible,
    defaultValue: props.defaultVisible
  })

  const isNoTitle = () => {
    const { title, overlay } = props
    return !title && !overlay && title !== 0 // overlay for old version compatibility
  }

  const onVisibleChange = (vis: boolean) => {
    setVisible(isNoTitle() ? false : vis)

    if (!isNoTitle()) {
      props.onVisibleChange?.(vis)
    }
  }

  const getTooltipPlacements = () => {
    const { builtinPlacements, arrowPointAtCenter, autoAdjustOverflow } = props

    if (builtinPlacements) {
      return builtinPlacements
    }

    const placements = getPlacements({
      arrowPointAtCenter,
      autoAdjustOverflow
    })

    if (autoAdjustOverflow) {
      // trigger the overflow adjusting for rc-tooltip@6.x.x
      for (const config of Object.values(placements)) {
        config.overflow = {
          ...config.overflow,
          // @ts-ignore
          shiftX: true
        }
      }
    }

    return placements
  }

  const onPopupAlign = (domNode: HTMLElement, align: any) => {
    const placements: any = getTooltipPlacements()
    const placement = Object.keys(placements).filter(
      key =>
        placements[key].points[0] === align.points[0] &&
        placements[key].points[1] === align.points[1]
    )[0]
    if (!placement) {
      return
    }
    const rect = domNode.getBoundingClientRect()
    const transformOrigin = {
      top: '50%',
      left: '50%'
    }
    if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
      transformOrigin.top = `${rect.height - align.offset[1]}px`
    } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
      transformOrigin.top = `${-align.offset[1]}px`
    }
    if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
      transformOrigin.left = `${rect.width - align.offset[0]}px`
    } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
      transformOrigin.left = `${-align.offset[0]}px`
    }
    domNode.style.transformOrigin = `${transformOrigin.left} ${transformOrigin.top}`
  }

  const getOverlay = () => {
    const { title, overlay } = props
    if (title === 0) {
      return title
    }
    return overlay || title || ''
  }

  const { getPopupContainer, ...otherProps } = props

  const {
    prefixCls: customizePrefixCls,
    openClassName,
    getTooltipContainer,
    children
  } = props
  const prefixCls = customizePrefixCls || 'ant-tooltip'
  const rootPrefixCls = 'ant'

  let tempVisible = visible
  // Hide tooltip when there is no title
  if (!('visible' in props) && isNoTitle()) {
    tempVisible = false
  }

  const child = getDisabledCompatibleChildren(
    isValidElement(children) ? children : <span>{children}</span>,
    prefixCls
  )
  const childProps = child.props
  const childCls = classNames(childProps.className, {
    [openClassName || `${prefixCls}-open`]: true
  })

  return (
    <RcTooltip
      {...otherProps}
      prefixCls={prefixCls}
      getTooltipContainer={getPopupContainer || getTooltipContainer}
      // @ts-ignore
      ref={ref}
      builtinPlacements={getTooltipPlacements()}
      overlay={getOverlay()}
      visible={tempVisible}
      onVisibleChange={onVisibleChange}
      onPopupAlign={onPopupAlign}
      arrowContent={<span className={`${prefixCls}-arrow-content`} />}
      motion={{
        motionName: getTransitionName(rootPrefixCls, 'zoom-big-fast', props.transitionName),
        motionDeadline: 1000
      }}
    >
      {tempVisible ? cloneElement(child, { className: childCls }) : child}
    </RcTooltip>
  )
})

Tooltip.displayName = 'Tooltip'

Tooltip.defaultProps = {
  placement: 'top' as TooltipPlacement,
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
}

export default Tooltip
