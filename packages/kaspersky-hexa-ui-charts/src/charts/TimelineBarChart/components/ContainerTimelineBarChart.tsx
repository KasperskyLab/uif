import { Children, cloneElement, createElement, FC, isValidElement, useMemo } from 'react'

import { ContainerBaseProps } from '../../../types/chart'
import { Container } from '../../Container/Container'
import { getAxisLabelProps, getBarWidth, getDomainPadding, getTicksProp } from '../helpers'
import { applyPropsToChildrenByRole, RolePropsApplicator } from '../helpers/applyPropsToChildrenByRole'
import { findAxisElement } from '../helpers/findAxisElement'
import { findBarElement } from '../helpers/findBarElement'
import { getDomainFromScale } from '../helpers/getDomainFromScale'
import { getScale } from '../helpers/getScale'

export type ContainerTimelineBarChartProps = ContainerBaseProps & {
  horizontal?: boolean,
  isStack100?: boolean,
  minTickLabelXLength?: number,
  minTickLabelYLength?: number,
  timeScaleInterval?: number,
  tickLetterSize?: number,
  xTickFormat: (tick: any, index: number, ticks: any[], supposedFormat?: string) => string,
  yTickFormat: (tick: any, index?: number, ticks?: any[]) => string
};

export const ContainerTimelineBarChart: FC<ContainerTimelineBarChartProps> = ({ children, ...props }) => {
  const childrenWithAxisLabelPadding = useMemo(() => {
    const axisElement = findAxisElement(children)
    const barElement = findBarElement(children)

    if (!axisElement || !barElement) {
      return children
    }

    const { horizontal = false, width, height, scale, singleQuadrantDomainPadding = false, xTickFormat, yTickFormat } = props

    if (!scale || !width || !height) {
      return children
    }
    const { categories } = axisElement.props

    const domainPadding = getDomainPadding(props)

    const { maxLabelXLength, maxLabelYLength, paddingWithLabel } = getAxisLabelProps(props, axisElement.props)
    const scaleWithPadding = getScale({
      ...props,
      scale,
      categories,
      domainPadding,
      horizontal,
      singleQuadrantDomainPadding,
      padding: paddingWithLabel,
      width,
      height
    })
    const domain = getDomainFromScale(scaleWithPadding)
    const barWidth = getBarWidth({ ...props, scale: scaleWithPadding, axis: 'x', domain })
    const { dependantTickCount } = getTicksProp({ ...props, scale: scaleWithPadding })

    const axisProps: RolePropsApplicator = ({ props }) => {
      if (props.dependentAxis) {
        const tickLabelComponent =
          props.tickLabelComponent &&
          cloneElement(props.tickLabelComponent, {
            ...props.tickLabelComponent?.props,
            maxLength: maxLabelYLength
          })

        return {
          ...props,
          tickCount: dependantTickCount,
          tickFormat: yTickFormat,
          padding: paddingWithLabel,
          scale: scaleWithPadding,
          domain,
          tickLabelComponent
        }
      }

      const tickLabelComponent =
        props.tickLabelComponent &&
        cloneElement(props.tickLabelComponent, {
          ...props.tickLabelComponent?.props,
          maxLength: maxLabelXLength
        })

      return {
        ...props,
        tickFormat: xTickFormat,
        padding: paddingWithLabel,
        scale: scaleWithPadding,
        domain,
        tickLabelComponent
      }
    }
    const groupProps: RolePropsApplicator = ({ props }) => {
      const childrenWithBarWidth = Children.toArray(props.children).map((ch) => {
        if (isValidElement(ch)) {
          const children = Children.toArray(ch.props.children).map((ch) =>
            isValidElement(ch)
              ? cloneElement(ch, {
                  ...ch.props,
                  barWidth,
                  labelComponent: isValidElement(ch.props.labelComponent)
                    ? cloneElement(ch.props.labelComponent, { ...ch.props.labelComponent.props, barWidth })
                    : ch.props.labelComponent
                })
              : ch
          )

          return cloneElement(ch, ch.props, children)
        }

        return ch
      })

      return {
        ...props,
        padding: paddingWithLabel,
        scale: scaleWithPadding,
        range: undefined,
        domain,
        offset: barWidth,
        children: childrenWithBarWidth
      }
    }
    const otherProps: RolePropsApplicator = ({ props }) => ({
      ...props,
      padding: paddingWithLabel,
      scale: scaleWithPadding,
      domain,
      range: undefined
    })

    return applyPropsToChildrenByRole({ axis: axisProps, group: groupProps, other: otherProps }, children)
  }, [children, props])

  return createElement(
    Container,
    props,
    childrenWithAxisLabelPadding
  )
}
