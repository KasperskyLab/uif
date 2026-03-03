import * as d3 from 'd3'
import React from 'react'

import { CONSTANTS } from '../constants'
import { Arc, SubArc } from '../types/Arc'
import { GaugeContext } from '../types/GaugeContext'
import { GaugeType } from '../types/GaugeProps'
import { Labels } from '../types/Labels'
import { defaultTickLabels, Tick } from '../types/Tick'

import { getCoordByValue } from './arc'
import * as utils from './utils'

export const setupLabels = (gauge: GaugeContext): void => {
  setupTicks(gauge)
}

export const setupTicks = (gauge: GaugeContext): void => {
  const labels = gauge.props.labels as Labels
  const minValue = gauge.props.minValue as number
  const maxValue = gauge.props.maxValue as number
  if (CONSTANTS.debugTicksRadius) {
    for (let index = 0; index < maxValue; index++) {
      const indexTick = mapTick(index, gauge)
      addTick(indexTick, gauge)
    }
  } else if (!labels.tickLabels?.hideMinMax) {
    const alreadyHaveMinValueTick = labels.tickLabels?.ticks?.some((tick: Tick) => tick.value === minValue)
    if (!alreadyHaveMinValueTick) {
      // Add min value tick
      const minValueTick = mapTick(minValue, gauge)
      addTick(minValueTick, gauge)
    }
    const alreadyHaveMaxValueTick = labels.tickLabels?.ticks?.some((tick: Tick) => tick.value === maxValue)
    if (!alreadyHaveMaxValueTick) {
      // //Add max value tick
      const maxValueTick = mapTick(maxValue, gauge)
      addTick(maxValueTick, gauge)
    }
  }
  if ((labels.tickLabels?.ticks?.length as number) > 0) {
    labels.tickLabels?.ticks?.forEach((tick: Tick) => {
      addTick(tick, gauge)
    })
  }
  addArcTicks(gauge)
}

export const addArcTicks = (gauge: GaugeContext): void => {
  gauge.arcData.current
    ?.map((subArc: SubArc) => {
      if (subArc.showTick) {
        return subArc.limit
      }
      return undefined
    })
    .forEach((tickValue: any) => {
      if (tickValue) {
        addTick(mapTick(tickValue, gauge), gauge)
      }
    })
}
export const mapTick = (value: number, gauge: GaugeContext): Tick => {
  const { tickLabels } = gauge.props.labels as Labels
  return {
    value: value,
    valueConfig: tickLabels?.defaultTickValueConfig,
    lineConfig: tickLabels?.defaultTickLineConfig
  } as Tick
}
export const addTickLine = (tick: Tick, gauge: GaugeContext): void => {
  const { labels } = gauge.props
  const { tickAnchor, angle } = calculateAnchorAndAngleByValue(tick?.value as number, gauge)
  let tickDistanceFromArc =
    tick.lineConfig?.distanceFromArc || labels?.tickLabels?.defaultTickLineConfig?.distanceFromArc || 0
  if (gauge.props.labels?.tickLabels?.type === 'outer') {
    tickDistanceFromArc = -tickDistanceFromArc
  }
  // else tickDistanceFromArc = tickDistanceFromArc - 10;
  const coords = getLabelCoordsByValue(tick?.value as number, gauge, tickDistanceFromArc)

  const tickColor =
    tick.lineConfig?.color ||
    labels?.tickLabels?.defaultTickLineConfig?.color ||
    defaultTickLabels.defaultTickLineConfig?.color
  const tickWidth =
    tick.lineConfig?.width ||
    labels?.tickLabels?.defaultTickLineConfig?.width ||
    defaultTickLabels.defaultTickLineConfig?.width
  const tickLength =
    tick.lineConfig?.length ||
    labels?.tickLabels?.defaultTickLineConfig?.length ||
    (defaultTickLabels.defaultTickLineConfig?.length as number)
  // Calculate the end coordinates based on the adjusted position
  let endX
  let endY
  // When inner should draw from outside to inside
  // When outer should draw from inside to outside
  if (labels?.tickLabels?.type === 'inner') {
    endX = coords.x + tickLength * Math.cos((angle * Math.PI) / 180)
    endY = coords.y + tickLength * Math.sin((angle * Math.PI) / 180)
  } else {
    endX = coords.x - tickLength * Math.cos((angle * Math.PI) / 180)
    endY = coords.y - tickLength * Math.sin((angle * Math.PI) / 180)
  }

  // (gauge.dimensions.current.outerRadius - gauge.dimensions.current.innerRadius)
  // Create a D3 line generator
  const lineGenerator = d3.line()

  // Define the line coordinates
  const lineCoordinates = [
    [coords.x, coords.y],
    [endX, endY]
  ]
  // Append a path element for the line
  gauge.g.current
    .append('path')
    .datum(lineCoordinates)
    .attr('class', CONSTANTS.tickLineClassname)
    .attr('d', lineGenerator)
    // .attr("transform", `translate(${0}, ${0})`)
    .attr('stroke', tickColor)
    .attr('stroke-width', tickWidth)
    .attr('fill', 'none')
  // .attr("stroke-linecap", "round")
  // .attr("stroke-linejoin", "round")
  // .attr("transform", `rotate(${angle})`);
}
export const addTickValue = (tick: Tick, gauge: GaugeContext): void => {
  const { labels } = gauge.props
  const arc = gauge.props.arc as Arc
  const arcWidth = arc.width as number
  const tickValue = tick?.value as number
  const { tickAnchor } = calculateAnchorAndAngleByValue(tickValue, gauge)
  let centerToArcLengthSubtract = 27 - arcWidth * 10
  const isInner = labels?.tickLabels?.type === 'inner'
  if (!isInner) {
    centerToArcLengthSubtract = arcWidth * 10 - 10
  } else {
    centerToArcLengthSubtract -= 10
  }
  const tickDistanceFromArc =
    tick.lineConfig?.distanceFromArc || labels?.tickLabels?.defaultTickLineConfig?.distanceFromArc || 0
  const tickLength = tick.lineConfig?.length || labels?.tickLabels?.defaultTickLineConfig?.length || 0
  const _shouldHideTickLine = shouldHideTickLine(tick, gauge)
  if (!_shouldHideTickLine) {
    if (isInner) {
      centerToArcLengthSubtract += tickDistanceFromArc
      centerToArcLengthSubtract += tickLength
    } else {
      centerToArcLengthSubtract -= tickDistanceFromArc
      centerToArcLengthSubtract -= tickLength
    }
  }
  const coords = getLabelCoordsByValue(tickValue, gauge, centerToArcLengthSubtract)
  let tickValueStyle = tick.valueConfig?.style || labels?.tickLabels?.defaultTickValueConfig?.style || {}
  tickValueStyle = { ...tickValueStyle }
  let text = ''
  const maxDecimalDigits =
    tick.valueConfig?.maxDecimalDigits || labels?.tickLabels?.defaultTickValueConfig?.maxDecimalDigits
  if (tick.valueConfig?.formatTextValue) {
    text = tick.valueConfig.formatTextValue(utils.floatingNumber(tickValue, maxDecimalDigits))
  } else if (labels?.tickLabels?.defaultTickValueConfig?.formatTextValue) {
    text = labels.tickLabels.defaultTickValueConfig.formatTextValue(utils.floatingNumber(tickValue, maxDecimalDigits))
  } else {
    text = utils.floatingNumber(tickValue, maxDecimalDigits).toString()
  }
  if (labels?.tickLabels?.type === 'inner') {
    if (tickAnchor === 'end') {
      coords.x += 10
    }
    if (tickAnchor === 'start') {
      coords.x -= 10
    }
    // if (tickAnchor === "middle") coords.y -= 0;
  } else {
    // if(tickAnchor === "end") coords.x -= 10;
    // if(tickAnchor === "start") coords.x += 10;
    if (tickAnchor === 'middle') {
      coords.y += 2
    }
  }
  if (tickAnchor === 'middle') {
    coords.y += 0
  } else {
    coords.y += 3
  }
  tickValueStyle.textAnchor = tickAnchor as any
  addText(text, coords.x, coords.y, gauge, tickValueStyle, CONSTANTS.tickValueClassname)
}
export const addTick = (tick: Tick, gauge: GaugeContext): void => {
  const { labels } = gauge.props
  // Make validation for sequence of values respecting DEFAULT -> DEFAULT FROM USER -> SPECIFIC TICK VALUE
  const _shouldHideTickLine = shouldHideTickLine(tick, gauge)
  const _shouldHideTickValue = shouldHideTickValue(tick, gauge)
  if (!_shouldHideTickLine) {
    addTickLine(tick, gauge)
  }
  if (!CONSTANTS.debugTicksRadius && !_shouldHideTickValue) {
    addTickValue(tick, gauge)
  }
}
export const getLabelCoordsByValue = (
  value: number,
  gauge: GaugeContext,
  centerToArcLengthSubtract = 0
): {
  x: number,
  y: number
} => {
  const labels = gauge.props.labels as Labels
  // let minValue = gauge.props.minValue as number;
  // let maxValue = gauge.props.maxValue as number;
  const type = labels.tickLabels?.type
  let { x, y } = getCoordByValue(value, gauge, type, centerToArcLengthSubtract, 0.93)
  // let percent = utils.calculatePercentage(minValue, maxValue, value);
  // This corrects labels in the cener being too close from the arc
  // let isValueBetweenCenter = percent > CONSTANTS.rangeBetweenCenteredTickValueLabel[0] &&
  //                               percent < CONSTANTS.rangeBetweenCenteredTickValueLabel[1];
  // if (isValueBetweenCenter){
  //   let isInner = type == "inner";
  //   y+= isInner ? 8 : -1;
  // }
  if (gauge.props.type === GaugeType.RADIAL) {
    if (type === 'inner') {
      y += 1
    } else {
      y += 3
    }
  }
  return { x, y }
}
export const addText = (
  html: any,
  x: number,
  y: number,
  gauge: GaugeContext,
  style: React.CSSProperties,
  className: string,
  rotate = 0
): void => {
  const div = gauge.g.current
    .append('g')
    .attr('class', className)
    .attr('transform', `translate(${x}, ${y})`)
    .append('text')
    .text(html) // use html() instead of text()
  applyTextStyles(div, style)
  div.attr('transform', `rotate(${rotate})`)
}

const applyTextStyles = (div: any, style: React.CSSProperties): void => {
  // Apply default styles
  Object.entries(style).forEach(([key, value]: any) => div.style(utils.camelCaseToKebabCase(key), value))
  // Apply custom styles
  if (style !== undefined) {
    Object.entries(style).forEach(([key, value]: any) => div.style(utils.camelCaseToKebabCase(key), value))
  }
}

export const clearValueLabel = (gauge: GaugeContext): void =>
  gauge.g.current.selectAll(`.${CONSTANTS.valueLabelClassname}`).remove()
export const clearTicks = (gauge: GaugeContext): void => {
  gauge.g.current.selectAll(`.${CONSTANTS.tickLineClassname}`).remove()
  gauge.g.current.selectAll(`.${CONSTANTS.tickValueClassname}`).remove()
}

export const calculateAnchorAndAngleByValue = (
  value: number,
  gauge: GaugeContext
): {
  tickAnchor: string,
  angle: number
} => {
  const { labels } = gauge.props
  const minValue = gauge.props.minValue as number
  const maxValue = gauge.props.maxValue as number
  const valuePercentage = utils.calculatePercentage(minValue, maxValue, value)
  const gaugeTypesAngles: Record<string, { startAngle: number, endAngle: number }> = {
    [GaugeType.GRAFANA]: {
      startAngle: -20,
      endAngle: 220
    },
    [GaugeType.SEMICIRCLE]: {
      startAngle: 0,
      endAngle: 180
    },
    [GaugeType.RADIAL]: {
      startAngle: -42,
      endAngle: 266
    }
  }
  const { startAngle, endAngle } = gaugeTypesAngles[gauge.props.type as string]

  const angle = startAngle + (valuePercentage * 100 * endAngle) / 100
  const isValueLessThanHalf = valuePercentage < 0.5
  // Values between 40% and 60% are aligned in the middle
  const isValueBetweenTolerance =
    valuePercentage > CONSTANTS.rangeBetweenCenteredTickValueLabel[0] &&
    valuePercentage < CONSTANTS.rangeBetweenCenteredTickValueLabel[1]
  let tickAnchor = ''
  const isInner = labels?.tickLabels?.type === 'inner'
  if (isValueBetweenTolerance) {
    tickAnchor = 'middle'
  } else if (isValueLessThanHalf) {
    tickAnchor = isInner ? 'start' : 'end'
  } else {
    tickAnchor = isInner ? 'end' : 'start'
  }
  // if(valuePercentage > 0.50) angle = angle - 180;
  return { tickAnchor, angle }
}
const shouldHideTickLine = (tick: Tick, gauge: GaugeContext): boolean => {
  const { labels } = gauge.props
  const defaultHideValue = defaultTickLabels.defaultTickLineConfig?.hide
  let shouldHide = defaultHideValue
  const defaultHideLineFromUser = labels?.tickLabels?.defaultTickLineConfig?.hide
  if (defaultHideLineFromUser !== undefined) {
    shouldHide = defaultHideLineFromUser
  }
  const specificHideValueFromUser = tick.lineConfig?.hide
  if (specificHideValueFromUser !== undefined) {
    shouldHide = specificHideValueFromUser
  }
  return !!shouldHide
}
const shouldHideTickValue = (tick: Tick, gauge: GaugeContext): boolean => {
  const { labels } = gauge.props
  const defaultHideValue = defaultTickLabels.defaultTickValueConfig?.hide
  let shouldHide = defaultHideValue
  const defaultHideValueFromUser = labels?.tickLabels?.defaultTickValueConfig?.hide
  if (defaultHideValueFromUser !== undefined) {
    shouldHide = defaultHideValueFromUser
  }
  const specificHideValueFromUser = tick.valueConfig?.hide
  if (specificHideValueFromUser !== undefined) {
    shouldHide = specificHideValueFromUser
  }
  return !!shouldHide
}
