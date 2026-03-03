import { arc, interpolateHsl, scaleLinear, select } from 'd3'
import throttle from 'lodash/throttle'

import { CONSTANTS } from '../constants'
import { Arc, SubArc } from '../types/Arc'
import { GaugeContext } from '../types/GaugeContext'
import { GaugeType } from '../types/GaugeProps'
import { defaultTooltipStyle, Tooltip } from '../types/Tooltip'

import * as arcHooks from './arc'
import * as utils from './utils'

const onArcMouseMove = (event: any, d: any, gauge: GaugeContext): void => {
  // event.target.style.stroke = "#ffffff5e";
  if (d.data.tooltip !== undefined) {
    const shouldChangeText = d.data.tooltip.text !== gauge.tooltip.current.text()
    if (shouldChangeText) {
      gauge.tooltip.current
        .html(d.data.tooltip.text)
        .style('position', 'absolute')
        .style('display', 'block')
        .style('opacity', 1)
      applyTooltipStyles(d.data.tooltip, d.data.color, gauge)
    }
    gauge.tooltip.current.style('left', event.pageX + 15 + 'px').style('top', event.pageY - 10 + 'px')
  }
  if (d.data.onMouseMove !== undefined) {
    d.data.onMouseMove(event)
  }
}
const applyTooltipStyles = (tooltip: Tooltip, arcColor: string, gauge: GaugeContext): void => {
  // Apply default styles
  Object.entries(defaultTooltipStyle).forEach(([key, value]) =>
    gauge.tooltip.current.style(utils.camelCaseToKebabCase(key), value)
  )
  gauge.tooltip.current.style('background-color', arcColor)
  // Apply custom styles
  if (tooltip.style !== undefined) {
    Object.entries(tooltip.style).forEach(([key, value]) =>
      gauge.tooltip.current.style(utils.camelCaseToKebabCase(key), value)
    )
  }
}
const onArcMouseLeave = (event: any, d: any, gauge: GaugeContext, mousemoveCbThrottled: any): void => {
  mousemoveCbThrottled.cancel()
  hideTooltip(gauge)
  if (d.data.onMouseLeave !== undefined) {
    d.data.onMouseLeave(event)
  }
}
export const hideTooltip = (gauge: GaugeContext): void => {
  gauge.tooltip.current.html(' ').style('display', 'none')
}
const onArcMouseOut = (event: any, d: any, gauge: GaugeContext): void => {
  event.target.style.stroke = 'none'
}
const onArcMouseClick = (event: any, d: any): void => {
  if (d.data.onMouseClick !== undefined) {
    d.data.onMouseClick(event)
  }
}

export const setArcData = (gauge: GaugeContext): void => {
  const arc = gauge.props.arc as Arc
  const minValue = gauge.props.minValue as number
  const maxValue = gauge.props.maxValue as number
  // Determine number of arcs to display
  const nbArcsToDisplay: number = arc?.nbSubArcs || arc?.subArcs?.length || 1

  const colorArray = getColors(nbArcsToDisplay, gauge)
  if (arc?.subArcs && !arc?.nbSubArcs) {
    let lastSubArcLimit = 0
    let lastSubArcLimitPercentageAcc = 0
    const subArcsLength: number[] = []
    const subArcsLimits: number[] = []
    const subArcsTooltip: Tooltip[] = []
    arc?.subArcs?.forEach((subArc, i) => {
      let subArcLength = 0
      // map limit for non defined subArcs limits
      let subArcRange = 0
      let limit = subArc.limit as number
      if (subArc.length !== undefined) {
        subArcLength = subArc.length
        limit = utils.getCurrentGaugeValueByPercentage(subArcLength + lastSubArcLimitPercentageAcc, gauge)
      } else if (subArc.limit === undefined) {
        subArcRange = lastSubArcLimit
        let remainingPercentageEquallyDivided: number | undefined
        const remainingSubArcs = arc?.subArcs?.slice(i)
        const remainingPercentage = (1 - utils.calculatePercentage(minValue, maxValue, lastSubArcLimit)) * 100
        if (!remainingPercentageEquallyDivided) {
          remainingPercentageEquallyDivided = remainingPercentage / Math.max(remainingSubArcs?.length || 1, 1) / 100
        }
        limit = lastSubArcLimit + remainingPercentageEquallyDivided * 100
        subArcLength = remainingPercentageEquallyDivided
      } else {
        subArcRange = limit - lastSubArcLimit
        // Calculate arc length based on previous arc percentage
        if (i !== 0) {
          subArcLength = utils.calculatePercentage(minValue, maxValue, limit) - lastSubArcLimitPercentageAcc
        } else {
          subArcLength = utils.calculatePercentage(minValue, maxValue, subArcRange)
        }
      }
      subArcsLength.push(subArcLength)
      subArcsLimits.push(limit)
      lastSubArcLimitPercentageAcc = subArcsLength.reduce((count, curr) => count + curr, 0)
      lastSubArcLimit = limit
      if (subArc.tooltip !== undefined) {
        subArcsTooltip.push(subArc.tooltip)
      }
    })
    const subArcs = arc.subArcs as SubArc[]
    gauge.arcData.current = subArcsLength.map((length, i) => ({
      value: length,
      // eslint-disable-next-line security/detect-object-injection
      limit: subArcsLimits[i],
      // eslint-disable-next-line security/detect-object-injection
      color: colorArray[i],
      // eslint-disable-next-line security/detect-object-injection
      showTick: subArcs[i].showTick || false,
      // eslint-disable-next-line security/detect-object-injection
      tooltip: subArcs[i].tooltip || undefined,
      // eslint-disable-next-line security/detect-object-injection
      onMouseMove: subArcs[i].onMouseMove,
      // eslint-disable-next-line security/detect-object-injection
      onMouseLeave: subArcs[i].onMouseLeave,
      // eslint-disable-next-line security/detect-object-injection
      onMouseClick: subArcs[i].onClick
    }))
  } else {
    const arcValue = maxValue / nbArcsToDisplay

    gauge.arcData.current = Array.from({ length: nbArcsToDisplay }, (_, i) => ({
      value: arcValue,
      limit: (i + 1) * arcValue,
      color: colorArray[i],
      tooltip: undefined
    }))
  }
}

const getGrafanaMainArcData = (
  gauge: GaugeContext,
  percent: number | undefined = undefined
): {
  value: number,
  color: string | number | undefined
}[] => {
  const currentPercentage =
    percent !== undefined
      ? percent
      : utils.calculatePercentage(
          gauge.props.minValue as number,
          gauge.props.maxValue as number,
          gauge.props.value as number
      )
  const curArcData = getArcDataByPercentage(currentPercentage, gauge)
  const firstSubArc = {
    value: currentPercentage,
    // White indicate that no arc was found and work as an alert for debug
    color: curArcData?.color || 'white'
    // disabled for now because onMouseOut is not working properly with the
    // high amount of renderings of this arc
    // tooltip: curArcData?.tooltip
  }
  // This is the grey arc that will be displayed when the gauge is not full
  const secondSubArc = {
    value: 1 - currentPercentage,
    color: gauge.props.arc?.emptyColor
  }
  return [firstSubArc, secondSubArc]
}
const drawGrafanaOuterArc = (gauge: GaugeContext, resize = false): void => {
  const { outerRadius } = gauge.dimensions.current
  // Grafana's outer arc will be populates as the standard arc data would
  if (gauge.props.type === GaugeType.GRAFANA && resize) {
    gauge.doughnut.current.selectAll('.outerSubArc').remove()
    const outerArc = arc()
      .outerRadius(outerRadius + 7)
      .innerRadius(outerRadius + 2)
      .cornerRadius(0)
      .padAngle(0)
    const arcPaths = gauge.doughnut.current
      .selectAll('anyString')
      .data(gauge.pieChart.current(gauge.arcData.current))
      .enter()
      .append('g')
      .attr('class', 'outerSubArc')
    const outerArcSubarcs = arcPaths.append('path').attr('d', outerArc)
    applyColors(outerArcSubarcs, gauge)
    const mousemoveCbThrottled = throttle((event: any, d: any) => onArcMouseMove(event, d, gauge), 20)
    arcPaths
      .on('mouseleave', (event: any, d: any) => onArcMouseLeave(event, d, gauge, mousemoveCbThrottled))
      .on('mouseout', (event: any, d: any) => onArcMouseOut(event, d, gauge))
      .on('mousemove', mousemoveCbThrottled)
      .on('click', (event: any, d: any) => onArcMouseClick(event, d))
  }
}
export const drawArc = (gauge: GaugeContext, percent: number | undefined = undefined): void => {
  const { padding, cornerRadius } = gauge.props.arc as Arc
  const { innerRadius, outerRadius } = gauge.dimensions.current
  // chartHooks.clearChart(gauge);
  let data = {}
  // When gradient enabled, it'll have only 1 arc
  if (gauge.props?.arc?.gradient) {
    data = [{ value: 1 }]
  } else {
    data = gauge.arcData.current
  }
  if (gauge.props.type === GaugeType.GRAFANA) {
    data = getGrafanaMainArcData(gauge, percent)
  }
  const arcPadding = gauge.props.type === GaugeType.GRAFANA ? 0 : padding
  const arcCornerRadius = gauge.props.type === GaugeType.GRAFANA ? 0 : cornerRadius
  const arcObj = arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius)
    .cornerRadius(arcCornerRadius as number)
    .padAngle(arcPadding)
  const arcPaths = gauge.doughnut.current
    .selectAll('anyString')
    .data(gauge.pieChart.current(data))
    .enter()
    .append('g')
    .attr('class', 'subArc')
  const subArcs = arcPaths.append('path').attr('d', arcObj)
  applyColors(subArcs, gauge)
  const mousemoveCbThrottled = throttle((event: any, d: any) => onArcMouseMove(event, d, gauge), 20)
  arcPaths
    .on('mouseleave', (event: any, d: any) => onArcMouseLeave(event, d, gauge, mousemoveCbThrottled))
    .on('mouseout', (event: any, d: any) => onArcMouseOut(event, d, gauge))
    .on('mousemove', mousemoveCbThrottled)
    .on('click', (event: any, d: any) => onArcMouseClick(event, d))
}
export const setupArcs = (gauge: GaugeContext, resize = false): void => {
  // Setup the arc
  setupTooltip(gauge)
  drawGrafanaOuterArc(gauge, resize)
  drawArc(gauge)
}

export const setupTooltip = (gauge: GaugeContext): void => {
  // Add tooltip
  const isTooltipInTheDom = document.getElementsByClassName(CONSTANTS.arcTooltipClassname).length !== 0
  if (!isTooltipInTheDom) {
    select('body').append('div').attr('class', CONSTANTS.arcTooltipClassname)
  }
  gauge.tooltip.current = select(`.${CONSTANTS.arcTooltipClassname}`)
  gauge.tooltip.current
    .on('mouseleave', () => arcHooks.hideTooltip(gauge))
    .on('mouseout', () => arcHooks.hideTooltip(gauge))
}

export const applyColors = (subArcsPath: any, gauge: GaugeContext): void => {
  if (gauge.props?.arc?.gradient) {
    const uniqueId = `subArc-linear-gradient-${Math.random()}`
    const gradEl = createGradientElement(gauge.doughnut.current, uniqueId)
    applyGradientColors(gradEl, gauge)
    subArcsPath.style('fill', (d: any) => `url(#${uniqueId})`)
  } else {
    subArcsPath.style('fill', (d: any) => d.data.color)
  }
}

export const getArcDataByValue = (value: number, gauge: GaugeContext): SubArc =>
  gauge.arcData.current.find((subArcData) => value <= (subArcData.limit as number)) as SubArc

export const getArcDataByPercentage = (percentage: number, gauge: GaugeContext): SubArc =>
  getArcDataByValue(utils.getCurrentGaugeValueByPercentage(percentage, gauge), gauge) as SubArc

export const applyGradientColors = (gradEl: any, gauge: GaugeContext): void => {
  gauge.arcData.current.forEach((subArcData: SubArc) => {
    const normalizedOffset = utils.normalize(
      Number(subArcData.limit),
      gauge?.props?.minValue ?? 0,
      gauge?.props?.maxValue ?? 100
    )
    gradEl
      .append('stop')
      .attr('offset', `${normalizedOffset}%`)
      .style('stop-color', subArcData.color) // end in red
      .style('stop-opacity', 1)
  })
}

// Depending on the number of levels in the chart
// This function returns the same number of colors
export const getColors = (nbArcsToDisplay: number, gauge: GaugeContext): string[] | number[] => {
  const arc = gauge.props.arc as Arc
  let colorsValue: string[] | undefined
  if (!arc.colorArray) {
    const subArcColors = arc.subArcs?.map((subArc) => subArc.color).filter((c) => !!c) as string[] | undefined
    colorsValue = subArcColors?.length ? subArcColors : CONSTANTS.defaultColors
  } else {
    colorsValue = arc.colorArray
  }
  // defaults colorsValue to white in order to avoid compilation error
  if (!colorsValue) {
    colorsValue = ['#fff']
  }
  // Check if the number of colors equals the number of levels
  // Otherwise make an interpolation
  const arcsEqualsColorsLength = nbArcsToDisplay === colorsValue?.length
  if (arcsEqualsColorsLength) {
    return colorsValue
  }
  const colorScale = scaleLinear()
    .domain([1, nbArcsToDisplay])
    .range([colorsValue[0], colorsValue[colorsValue.length - 1]] as [any, any]) // Use the first and the last color as range
    .interpolate(interpolateHsl as any)
  const colorArray = []
  for (let i = 1; i <= nbArcsToDisplay; i++) {
    colorArray.push(colorScale(i))
  }
  return colorArray
}
export const createGradientElement = (div: any, uniqueId: string): any => {
  // make defs and add the linear gradient
  const lg = div
    .append('defs')
    .append('linearGradient')
    .attr('id', uniqueId) // id of the gradient
    .attr('x1', '0%')
    .attr('x2', '100%')
    .attr('y1', '0%')
    .attr('y2', '0%')
  return lg
}

export const getCoordByValue = (
  value: number,
  gauge: GaugeContext,
  position = 'inner',
  centerToArcLengthSubtract = 0,
  radiusFactor = 1
): {
  x: number,
  y: number
} => {
  const positionCenterToArcLength: { [key: string]: () => number } = {
    outer: () => gauge.dimensions.current.outerRadius - centerToArcLengthSubtract + 2,
    inner: () => gauge.dimensions.current.innerRadius * radiusFactor - centerToArcLengthSubtract + 9,
    between: () => {
      const lengthBetweenOuterAndInner = gauge.dimensions.current.outerRadius - gauge.dimensions.current.innerRadius
      const middlePosition = gauge.dimensions.current.innerRadius + lengthBetweenOuterAndInner - 5
      return middlePosition
    }
  }
  let centerToArcLength = positionCenterToArcLength[position]()
  // This normalizes the labels when distanceFromArc = 0 to be just touching the arcs
  if (gauge.props.type === GaugeType.GRAFANA) {
    centerToArcLength += 5
  } else if (gauge.props.type === GaugeType.SEMICIRCLE) {
    centerToArcLength += -2
  }
  const percent = utils.calculatePercentage(gauge.props.minValue as number, gauge.props.maxValue as number, value)
  const gaugeTypesAngles: Record<GaugeType, { startAngle: number, endAngle: number }> = {
    [GaugeType.GRAFANA]: {
      startAngle: utils.degToRad(-23),
      endAngle: utils.degToRad(203)
    },
    [GaugeType.SEMICIRCLE]: {
      startAngle: utils.degToRad(0.9),
      endAngle: utils.degToRad(179.1)
    },
    [GaugeType.RADIAL]: {
      startAngle: utils.degToRad(-39),
      endAngle: utils.degToRad(219)
    }
  }

  const { startAngle, endAngle } = gaugeTypesAngles[gauge.props.type as GaugeType]
  const angle = startAngle + percent * (endAngle - startAngle)

  const coordsRadius = 1 * (gauge.dimensions.current.width / 500)
  const coord = [0, -coordsRadius / 2]
  const coordMinusCenter = [
    coord[0] - centerToArcLength * Math.cos(angle),
    coord[1] - centerToArcLength * Math.sin(angle)
  ]
  const centerCoords = [gauge.dimensions.current.outerRadius, gauge.dimensions.current.outerRadius]
  const x = centerCoords[0] + coordMinusCenter[0]
  const y = centerCoords[1] + coordMinusCenter[1]
  return { x, y }
}
export const redrawArcs = (gauge: GaugeContext): void => {
  clearArcs(gauge)
  setArcData(gauge)
  setupArcs(gauge)
}
export const clearArcs = (gauge: GaugeContext): void => {
  gauge.doughnut.current.selectAll('.subArc').remove()
}
export const clearOuterArcs = (gauge: GaugeContext): void => {
  gauge.doughnut.current.selectAll('.outerSubArc').remove()
}

export const validateArcs = (gauge: GaugeContext): void => {
  verifySubArcsLimits(gauge)
}
/**
 * Reorders the subArcs within the gauge's arc property based on the limit property.
 * SubArcs with undefined limits are sorted last.
 */
const reOrderSubArcs = (gauge: GaugeContext): void => {
  const subArcs = gauge.props.arc?.subArcs as SubArc[]
  subArcs.sort((a, b) => {
    if (typeof a.limit === 'undefined' && typeof b.limit === 'undefined') {
      return 0
    }
    if (typeof a.limit === 'undefined') {
      return 1
    }
    if (typeof b.limit === 'undefined') {
      return -1
    }
    return a.limit - b.limit
  })
}
const verifySubArcsLimits = (gauge: GaugeContext): void => {
  // disabled when length implemented.
  // reOrderSubArcs(gauge);
  const minValue = gauge.props.minValue as number
  const maxValue = gauge.props.maxValue as number
  const arc = gauge.props.arc as Arc
  const subArcs = arc.subArcs as SubArc[]
  let prevLimit: number | undefined
  for (const subArc of gauge.props.arc?.subArcs || []) {
    const limit = subArc.limit
    if (typeof limit !== 'undefined') {
      // Check if the limit is within the valid range
      if (limit < minValue || limit > maxValue) {
        throw new Error(
          `The limit of a subArc must be between the minValue and maxValue. The limit of the subArc is ${limit}`
        )
      }
      // Check if the limit is greater than the previous limit
      if (typeof prevLimit !== 'undefined') {
        if (limit <= prevLimit) {
          throw new Error(
            `The limit of a subArc must be greater than the limit of the previous subArc. The limit of the subArc is ${limit}. If you're trying to specify length in percent of the arc, use property "length"`
          )
        }
      }
      prevLimit = limit
    }
  }
  // If the user has defined subArcs, make sure the last subArc has a limit equal to the maxValue
  if (subArcs.length > 0) {
    const lastSubArc = subArcs[subArcs.length - 1]
    if ((lastSubArc.limit as number) < maxValue) {
      lastSubArc.limit = maxValue
    }
  }
}
