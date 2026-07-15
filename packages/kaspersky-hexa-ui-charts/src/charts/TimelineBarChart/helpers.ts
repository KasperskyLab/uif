import { IStackedChartData } from '@src/types/chartData'
import { get, isFunction, isNumber } from 'lodash'
import { BlockProps, DomainTuple } from 'victory'

import {
  DEFAULT_BAR_WIDTH,
  DEFAULT_BOTTOM_OFFSET,
  DEFAULT_INTERVAL_RATIO,
  DEFAULT_LEFT_TEXT_OFFSET,
  DEFAULT_LETTER_SIZE,
  DEFAULT_RIGHT_TEXT_OFFSET,
  DEFAULT_TIMELINE_DOMAIN_RATIO,
  DEFAULT_TOP_TEXT_OFFSET,
  MIN_TICK_TOTAL,
  TICK_COUNT_RATIO
} from '../../constants'
import { ContainerBaseProps, VictoryAxisElementProps } from '../../types/chart'
import { TIMELINE_BAR_MIN_WIDTH } from '../BarChart/constants'
import { getTimelineBarSizeConfigByAvailableWidth } from '../BarChart/helpers'

import { ContainerTimelineBarChartProps } from './components/ContainerTimelineBarChart'

type DomainPaddingX = number | [number, number]

export function getBarWidth ({
  domain,
  scale,
  timeScaleInterval = 0,
  axis = 'x',
  horizontal = false
}: {
  domain?: ContainerBaseProps['domain']
  timeScaleInterval?: number
  scale: ContainerBaseProps['scale']
  axis?: 'x' | 'y'
  horizontal?: boolean
}): number {
  const scaleAxis = scale?.[axis]
  const domainX = get(domain, 'x') as unknown as DomainTuple

  if (!isFunction(scaleAxis) || !domainX) {
    console.error('wrong scale', scale)
    return DEFAULT_BAR_WIDTH
  }

  let width =
    scaleAxis(typeof domainX[0] === 'number' ? domainX[0] : domainX[0].getTime() + timeScaleInterval) -
    scaleAxis(domainX[0])

  width = horizontal ? -width : width

  const maxBarWidth = Math.max(Math.ceil(width), TIMELINE_BAR_MIN_WIDTH)
  const gap = getTimelineBarSizeConfigByAvailableWidth(maxBarWidth).gap

  return Math.max(maxBarWidth - gap, TIMELINE_BAR_MIN_WIDTH)
}

export function getAxisLabelProps (
  {
    minTickLabelXLength = 0,
    minTickLabelYLength = 0,
    scale,
    xTickFormat,
    yTickFormat,
    tickLetterSize = DEFAULT_LETTER_SIZE,
    xTickHide,
    yTickHide
  }: ContainerTimelineBarChartProps,
  { horizontal, padding: paddingProps = {} }: VictoryAxisElementProps
): Pick<VictoryAxisElementProps, 'tickFormat' | 'tickCount'> & {
  maxLabelXLength: number
  maxLabelYLength: number
  paddingWithLabel: BlockProps
} {
  const padding = isNumber(paddingProps)
    ? { top: paddingProps, right: paddingProps, bottom: paddingProps, left: paddingProps }
    : paddingProps

  if (horizontal) {
    const maxLabelTicksYLength = Math.max(
      ...(scale?.x
        ?.ticks()
        .map(xTickFormat)
        .map((t) => t.toString().length) || [])
    )
    const maxLabelYLength = Math.max(maxLabelTicksYLength, minTickLabelYLength)
    const left = Math.max(maxLabelYLength * tickLetterSize, DEFAULT_LEFT_TEXT_OFFSET)
    
    return {
      maxLabelXLength: minTickLabelXLength,
      maxLabelYLength: minTickLabelYLength,
      paddingWithLabel: {
        ...padding,
        left: (padding.left ?? 0) + (yTickHide ? 0 : left),
        bottom: (padding.bottom ?? 0) + (xTickHide ? 0 : DEFAULT_BOTTOM_OFFSET),
        right: Math.max(padding.right ?? 0, DEFAULT_RIGHT_TEXT_OFFSET)
      }
    }
  }

  const maxLabelTicksYLength = Math.max(
    ...(scale?.y
      ?.ticks()
      .map(yTickFormat)
      .map((t) => t.toString().length) || [])
  )
  const maxLabelYLength = Math.max(maxLabelTicksYLength, minTickLabelYLength)
  const left = Math.max(maxLabelYLength * tickLetterSize, DEFAULT_LEFT_TEXT_OFFSET) + DEFAULT_LEFT_TEXT_OFFSET

  return {
    maxLabelXLength: minTickLabelXLength,
    maxLabelYLength: minTickLabelYLength,
    paddingWithLabel: {
      ...padding,
      top: Math.max(padding.top ?? 0, DEFAULT_TOP_TEXT_OFFSET),
      bottom: (padding.bottom ?? 0) + (xTickHide ? 0 : DEFAULT_BOTTOM_OFFSET),
      left: (padding.left ?? 0) + (yTickHide ? 0 : left),
      right: Math.max(padding.right ?? 0, DEFAULT_RIGHT_TEXT_OFFSET)
    }
  }
}

/**
 * Считает примерный лимит тиков для timeline-осей после того, как шкала уже
 * измерена с финальными отступами.
 *
 * `tickCount` используется для временной оси X, чтобы подписи дат не становились
 * слишком плотными в узких виджетах. Это мягкое ограничение: Victory/D3 всё ещё
 * выбирает "красивые" даты внутри этого лимита.
 *
 * `dependantTickCount` используется для оси значений и зависит от доступной
 * визуальной длины, чтобы горизонтальные и вертикальные графики имели похожую
 * плотность сетки.
 *
 * @example
 * ```ts
 * // Виджет отображает неделю с ежедневными подписями:
 * // 22.июн. 23.июн. 24.июн. 25.июн. 26.июн. 27.июн. 28.июн.
 * // функция считает доступную ширину и отдает лимит 4
 * // Victory/D3 получает лимит и может оставить более редкую шкалу:
 * // 22.июн. 24.июн. 26.июн. 28.июн.
 * ```
 *
 * @param props Параметры контейнера timeline-графика и уже рассчитанная шкала.
 * @returns Объект с лимитом тиков для X-оси и зависимой оси значений.
 */
export function getTicksProp ({
  horizontal,
  width = 0,
  height = 0,
  scale,
  xTickFormat
}: ContainerTimelineBarChartProps): {
  tickCount: number
  dependantTickCount: number
} {
  const dependantTickCount = Math.ceil(((horizontal ? width : height) || 0) / 75)
  const ticks = scale?.x?.ticks(1)

  if (!ticks || ticks.length === 0) {
    return { tickCount: 0, dependantTickCount: 0 }
  }

  const label = xTickFormat(ticks[0], 0, scale?.x?.ticks() || [])
  const tickCount = Math.max(Math.ceil(width / (TICK_COUNT_RATIO + label.length)), MIN_TICK_TOTAL)

  return { tickCount, dependantTickCount }
}

/**
 * Считает дополнительный отступ для баров, ширина которых вычисляется
 * из длителности одного временного блока - `timeScaleInterval`.
 *
 * Timeline-бары рисуются от временной точки вправо (т.е. стартует от точки даты), а
 * сгруппированные серии дополнительно смещаются через `VictoryGroup offset`.
 *
 * Если передан явный диапазон дат для оси Х(domain), добавляем отступ только с той
 * стороны, где видимый сгруппированный бар касается края domain. Для
 * сгруппированных графиков без явного domain отступ не добавляем: Victory
 * сам подбирает временной диапазон, а дополнительный отступ может создать
 * лишнюю пустоту слева.
 * 
 * Например, если на одну дату приходится несколько серий, то Victory разводит их рядом,
 * чтобы бары не накладывались друг на друга. Из-за этого крайний бар у начала или 
 * конца графика может выйти за границу.
 * @example
 * ```ts
 * // Данные начинаются 22 июня, bar рисуется от этой даты вправо.
 * // Если график сгруппирован как current/previous, VictoryGroup дополнительно
 * // сдвигает один из баров влево. Дополнительный отступ дает этому бару место внутри графика.
 * // Схематично:
 *          22 июн
 *            |
 *            |
 *     [prev] [curr]
 * ```
 *
 * @param props Параметры контейнера timeline-графика: domain, размеры, ориентация,
 * интервал времени и число групп.
 * @returns X-padding домена для Victory: число для симметричного padding или
 * пара `[left, right]` для раздельных отступов.
 */
export function getDomainPadding ({
  domain,
  groupCount = 1,
  hasExplicitDomain,
  horizontal,
  width = 0,
  height = 0,
  timeScaleInterval = 0,
  visibleDataDomain
}: ContainerTimelineBarChartProps): {
  x: DomainPaddingX
} {
  const groupOffsetPadding =
    (timeScaleInterval / DEFAULT_INTERVAL_RATIO +
      Math.pow((horizontal ? height : width) || 0, 2) * DEFAULT_TIMELINE_DOMAIN_RATIO) *
    Math.max(groupCount - 1, 1)

  if (hasExplicitDomain) {
    return { x: getExplicitDomainPadding({ domain, groupCount, groupOffsetPadding, timeScaleInterval, visibleDataDomain }) }
  }

  if (groupCount > 1) {
    return { x: 0 }
  }

  return {
    x: groupOffsetPadding
  }
}
/**
 * Вычисляет отступ для явно заданного domain.
 *
 * Отступ добавляется только когда сгруппированные видимые бары касаются начала
 * или конца domain. Это защищает крайние-бары от обрезания, но не добавляет пустое
 * место там, где первый/последний видимый бар отстоит от границы.
 *
 * @param props явный domain, число групп, рассчитанный размер отступа,
 * временной интервал бара и диапазон видимых баров.
 * @returns `0`, если отступ не нужен, или `[left, right]` для сторон, где
 * видимый сгруппирированный бар касается края domain.
 */
function getExplicitDomainPadding ({
  domain,
  groupCount = 1,
  groupOffsetPadding,
  timeScaleInterval = 0,
  visibleDataDomain
}: Pick<ContainerTimelineBarChartProps, 'domain' | 'groupCount' | 'timeScaleInterval' | 'visibleDataDomain'> & {
  groupOffsetPadding: number
}): DomainPaddingX {
  if (groupCount <= 1 || !visibleDataDomain) {
    return 0
  }

  const domainX = (Array.isArray(domain) ? domain : get(domain, 'x')) as [number | Date, number | Date] | undefined

  if (!domainX) {
    return 0
  }

  const domainStart = getDomainTimestamp(domainX[0])
  const domainEnd = getDomainTimestamp(domainX[1])

  if (!Number.isFinite(domainStart) || !Number.isFinite(domainEnd)) {
    return 0
  }

  const [visibleStart, visibleEnd] = visibleDataDomain
  const leftPadding = visibleStart <= domainStart ? groupOffsetPadding : 0
  const rightPadding = visibleEnd + timeScaleInterval >= domainEnd ? groupOffsetPadding : 0

  return leftPadding || rightPadding ? [leftPadding, rightPadding] : 0
}

/**
 * Приводит значение границы domain к timestamp.
 *
 * В timeline-графиках domain может прийти как Date или number, а для сравнения
 * с `visibleDataDomain` обе границы должны быть в одной числовой шкале.
 */
function getDomainTimestamp (value: number | Date): number {
  return value instanceof Date ? value.getTime() : value
}

/**
 * Находит диапазон дат, где у графика реально есть видимые бары.
 *
 * Нулевые значения пропускаются: точка с `value: 0` может входить в данные и
 * влиять на общий domain, но визуального бара в этом месте нет, значит ей не
 * нужен отступ от обрезания.
 *
 * @example
 * ```ts
 * // 22 июня: value = 1, 25 июня: value = 0, 28 июня: value = 2
 * // Вернет диапазон только по видимым барам: [22 июня, 28 июня].
 * ```
 *
 * @param data Серии timeline-графика.
 * @returns `[minTimestamp, maxTimestamp]` по точкам с ненулевым value или
 * undefined`, если видимых баров нет.
 */
export function getVisibleDataDomain<T> (data: IStackedChartData<T>): [number, number] | undefined {
  const timestamps = data
    .flatMap((series) => series.data
    )
    .filter((point) => point.value !== 0)
    .map((point) => getMetricTimestamp(point.metric))
    .filter((timestamp): timestamp is number => Number.isFinite(timestamp))

  if (!timestamps.length) {
    return undefined
  }

  return [Math.min(...timestamps), Math.max(...timestamps)]
}

/**
 * Приводит значение X-метрики к timestamp, чтобы даты, числа и строковые даты
 * можно было сравнивать в одной шкале.
 */
function getMetricTimestamp (metric: number | string | Date): number {
  if (metric instanceof Date) {
    return metric.getTime()
  }

  if (typeof metric === 'number') {
    return metric
  }

  return new Date(metric).getTime()
}
