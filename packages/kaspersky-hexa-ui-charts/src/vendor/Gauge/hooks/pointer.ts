import { easeElastic, easeExpOut, interpolateNumber } from 'd3'
import { roundCorners } from 'svg-round-corners'

import { GaugeContext } from '../types/GaugeContext'
import { GaugeType } from '../types/GaugeProps'
import { PointerContext, PointerProps, PointerType } from '../types/Pointer'

import { getCoordByValue } from './arc'
import * as arcHooks from './arc'
import * as utils from './utils'

export const drawPointer = (gauge: GaugeContext, resize = false): void => {
  gauge.pointer.current.context = setupContext(gauge)
  const { prevPercent, currentPercent, prevProgress } = gauge.pointer.current.context
  const pointer = gauge.props.pointer as PointerProps
  const isFirstTime = gauge.prevProps?.current.value === undefined
  if ((isFirstTime || resize) && gauge.props.type !== GaugeType.GRAFANA) {
    initPointer(gauge)
  }
  const shouldAnimate = (!resize || isFirstTime) && pointer.animate
  if (shouldAnimate) {
    gauge.doughnut.current
      .transition()
      .delay(pointer.animationDelay)
      .ease(pointer.elastic ? easeElastic : easeExpOut)
      .duration(pointer.animationDuration)
      .tween('progress', () => {
        const currentInterpolatedPercent = interpolateNumber(prevPercent, currentPercent)
        return function (percentOfPercent: number): void {
          const progress = currentInterpolatedPercent(percentOfPercent)
          if (isProgressValid(progress, prevProgress, gauge)) {
            if (gauge.props.type === GaugeType.GRAFANA) {
              arcHooks.clearArcs(gauge)
              arcHooks.drawArc(gauge, progress)
              // arcHooks.setupArcs(gauge);
            } else {
              updatePointer(progress, gauge)
            }
          }
          gauge.pointer.current.context.prevProgress = progress
        }
      })
  } else {
    updatePointer(currentPercent, gauge)
  }
}
const setupContext = (gauge: GaugeContext): PointerContext => {
  const { value } = gauge.props
  const pointer = gauge.props.pointer as PointerProps
  const pointerLength = pointer.length as number
  const minValue = gauge.props.minValue as number
  const maxValue = gauge.props.maxValue as number
  // const { pointerPath } = gauge.pointer.current.context;
  const pointerRadius = getPointerRadius(gauge)
  const typesWithPath = [PointerType.NEEDLE, PointerType.ARROW]
  const pointerContext: PointerContext = {
    centerPoint: [0, -pointerRadius / 2],
    pointerRadius: getPointerRadius(gauge),
    pathLength: gauge.dimensions.current.outerRadius * pointerLength,
    currentPercent: utils.calculatePercentage(minValue, maxValue, value as number),
    prevPercent: utils.calculatePercentage(minValue, maxValue, gauge.prevProps?.current.value || minValue),
    prevProgress: 0,
    pathStr: '',
    shouldDrawPath: typesWithPath.includes(pointer.type as PointerType),
    prevColor: ''
  }

  return pointerContext
}
const initPointer = (gauge: GaugeContext): void => {
  const value = gauge.props.value as number
  const pointer = gauge.props.pointer as PointerProps

  const { shouldDrawPath, centerPoint, pointerRadius, pathStr, currentPercent, prevPercent } =
    gauge.pointer.current.context
  if (shouldDrawPath) {
    gauge.pointer.current.context.pathStr = calculatePointerPath(gauge, prevPercent || currentPercent)
    gauge.pointer.current.path = gauge.pointer.current.element
      .append('path')
      .attr('d', gauge.pointer.current.context.pathStr)
      .attr('fill', pointer.color)
  }
  // Add a circle at the bottom of pointer
  if (pointer.type === PointerType.NEEDLE) {
    gauge.pointer.current.element
      .append('circle')
      .attr('cx', centerPoint[0])
      .attr('cy', centerPoint[1])
      .attr('r', pointerRadius)
      .attr('fill', pointer.color)
  } else if (pointer.type === PointerType.BLOB) {
    gauge.pointer.current.element
      .append('circle')
      .attr('cx', centerPoint[0])
      .attr('cy', centerPoint[1])
      .attr('r', pointerRadius)
      .attr('fill', pointer.baseColor)
      .attr('stroke', pointer.color)
      .attr('stroke-width', (pointer.strokeWidth! * pointerRadius) / 10)
  }
  // Translate the pointer starting point of the arc
  setPointerPosition(pointerRadius, value, gauge)
}
const updatePointer = (percentage: number, gauge: GaugeContext): void => {
  const pointer = gauge.props.pointer as PointerProps
  const { pointerRadius, shouldDrawPath, prevColor } = gauge.pointer.current.context
  setPointerPosition(pointerRadius, percentage, gauge)
  if (shouldDrawPath && gauge.props.type !== GaugeType.GRAFANA) {
    gauge.pointer.current.path.attr('d', calculatePointerPath(gauge, percentage))
  }
  if (pointer.type === PointerType.BLOB) {
    const currentColor = arcHooks.getArcDataByPercentage(percentage, gauge)?.color as string
    const shouldChangeColor = currentColor !== prevColor
    if (shouldChangeColor) {
      gauge.pointer.current.element.select('circle').attr('stroke', currentColor)
    }
    const strokeWidth = (pointer.strokeWidth! * pointerRadius) / 10
    gauge.pointer.current.element.select('circle').attr('stroke-width', strokeWidth)
    gauge.pointer.current.context.prevColor = currentColor
  }
}
const setPointerPosition = (pointerRadius: number, progress: number, gauge: GaugeContext): void => {
  const pointer = gauge.props.pointer as PointerProps
  const pointerType = pointer.type as string
  const { dimensions } = gauge
  const value = utils.getCurrentGaugeValueByPercentage(progress, gauge)
  const pointers: { [key: string]: () => void } = {
    [PointerType.NEEDLE]: () => {
      // Set needle position to center
      translatePointer(dimensions.current.outerRadius, dimensions.current.outerRadius, gauge)
    },
    [PointerType.ARROW]: () => {
      const height = gauge.props.height || 400
      let { x, y } = getCoordByValue(value, gauge, 'inner', 0, 0.26 * Math.log10(height))
      x -= 1
      y += pointerRadius - 3
      translatePointer(x, y, gauge)
    },
    [PointerType.BLOB]: () => {
      let { x, y } = getCoordByValue(value, gauge, 'between', 0, 0.75)
      x -= 1
      y += pointerRadius
      translatePointer(x, y, gauge)
    }
  }
  return pointers[pointerType]()
}

const isProgressValid = (currentPercent: number, prevPercent: number, gauge: GaugeContext): boolean => {
  // Avoid unnecessary re-rendering (when progress is too small) but allow the pointer to reach the final value
  const overFlow = currentPercent > 1 || currentPercent < 0
  const tooSmallValue = Math.abs(currentPercent - prevPercent) < 0.0001
  const sameValueAsBefore = currentPercent === prevPercent
  return !tooSmallValue && !sameValueAsBefore && !overFlow
}

const calculatePointerPath = (gauge: GaugeContext, percent: number): string => {
  const { centerPoint, pointerRadius, pathLength } = gauge.pointer.current.context
  const startAngle = utils.degToRad(gauge.props.type === GaugeType.SEMICIRCLE ? 0 : -42)
  const endAngle = utils.degToRad(gauge.props.type === GaugeType.SEMICIRCLE ? 180 : 223)
  const angle = startAngle + percent * (endAngle - startAngle)
  const topPoint = [centerPoint[0] - pathLength * Math.cos(angle), centerPoint[1] - pathLength * Math.sin(angle)]
  const thetaMinusHalfPi = angle - Math.PI / 2
  const leftPoint = [
    centerPoint[0] - pointerRadius * Math.cos(thetaMinusHalfPi),
    centerPoint[1] - pointerRadius * Math.sin(thetaMinusHalfPi)
  ]
  const thetaPlusHalfPi = angle + Math.PI / 2
  const rightPoint = [
    centerPoint[0] - pointerRadius * Math.cos(thetaPlusHalfPi),
    centerPoint[1] - pointerRadius * Math.sin(thetaPlusHalfPi)
  ]

  const pathStr = `M ${leftPoint[0]} ${leftPoint[1]} L ${topPoint[0]} ${topPoint[1]} L ${rightPoint[0]} ${rightPoint[1]} Z`
  const roundedPath = roundCorners(pathStr, Math.pow(pointerRadius, 0.3), 1)

  return roundedPath.path
}

const getPointerRadius = (gauge: GaugeContext): number => {
  const pointer = gauge.props.pointer as PointerProps
  const pointerWidth = pointer.width as number
  return pointerWidth * (gauge.dimensions.current.width / 500)
}

export const translatePointer = (x: number, y: number, gauge: GaugeContext): void =>
  gauge.pointer.current.element.attr('transform', 'translate(' + x + ', ' + y + ')')
export const addPointerElement = (gauge: GaugeContext): void =>
  (gauge.pointer.current.element = gauge.g.current.append('g').attr('class', 'pointer'))
export const clearPointerElement = (gauge: GaugeContext): void => gauge.pointer.current.element.selectAll('*').remove()
