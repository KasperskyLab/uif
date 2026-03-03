import clsx from 'clsx'
import React, { memo } from 'react'

import { Space, Text } from '@kaspersky/hexa-ui'

import { DEFAULT_PRECISION } from '../../../constants'
import { defaultGetNumberFromData } from '../helpers/defaultGetNumberFromData'
import { getMaxPercentLength } from '../helpers/getMaxPercentLength'
import styles from '../Legend.module.scss'
import { LegendItemType, TLegendItem, TLegendItemRow } from '../types'

import { LegendDescription } from './LegendDescription'
import { LegendItem } from './LegendItem'
import { LegendItemDivider } from './LegendItemDivider'
import { LegendTotal } from './LegendTotal'

export interface ILegendProps<T = unknown> {
  className?: string,
  items: TLegendItem<T>[],
  showTotal?: boolean,
  showPercentage?: boolean,
  getNumberFromData?: (item: TLegendItem<T>) => number,
  selectable?: boolean,
  noPadding?: boolean,
  orientation?: 'horizontal' | 'vertical',
  legendTitle?: string,
  description?: string,
  totalLabel?: string,
  precision?: number,
  percentFontSize?: number,
  onSelect?: (item: TLegendItemRow<T>, show: boolean) => void,
  onHover?: (item: TLegendItemRow<T>) => void,
  onLeave?: (item: TLegendItemRow<T>) => void
}

const LegendGeneric = <T extends unknown = unknown>({
  className,
  items,
  getNumberFromData = defaultGetNumberFromData,
  showTotal,
  showPercentage,
  legendTitle,
  selectable,
  noPadding,
  orientation = 'vertical',
  description,
  precision = DEFAULT_PRECISION,
  percentFontSize,
  totalLabel,
  onSelect,
  onHover,
  onLeave
}: ILegendProps<T>): JSX.Element => {
  const isOneItemSelected = items.filter((l) => l.kind === LegendItemType.Row && l.selected).length === 1
  const total = showTotal || showPercentage ? items.reduce((sum, d) => sum + getNumberFromData(d), 0) : 0
  const isVertical = orientation === 'vertical'
  const isHorizontal = orientation === 'horizontal'
  const maxPercentLength = getMaxPercentLength(items, getNumberFromData, precision)

  return (
    <div className={clsx(
      styles.legend,
      isVertical && styles.legendVertical,
      noPadding && styles.resetPadding,
      isHorizontal && styles.legendHorizontal,
      className
    )}>
      {isVertical && legendTitle && (
        <Space className={clsx(styles.legendTitle, noPadding && styles.resetPadding)} align="center"><Text type="BTM3">{legendTitle}</Text></Space>
      )}
      <div className={clsx(styles.legendScrollContainer, noPadding && styles.resetPadding)}>
        {items.map((item, index) => {
          if (item.kind === LegendItemType.Divider) {
            return <LegendItemDivider key={index} className={clsx(styles.legendDivider, noPadding && styles.resetPadding)} />
          }

          return (
            <LegendItem
              key={index}
              item={item}
              value={getNumberFromData(item)}
              showPercentage={showPercentage}
              isSelectable={!!selectable}
              noPadding={noPadding}
              total={total}
              disabled={isOneItemSelected && item.selected}
              precision={precision}
              maxPercentLength={maxPercentLength}
              percentFontSize={percentFontSize}
              onSelect={onSelect}
              onHover={onHover}
              onLeave={onLeave}
            />
          )
        })}
      </div>
      {isVertical && (
        <Space direction="vertical" align="stretch" justify="stretch" gap={4} className={clsx(styles.legendFooter, noPadding && styles.resetPadding)}>
          {showTotal && <LegendTotal value={total} precision={precision} description={totalLabel} />}
          {description && <LegendDescription value={description} />}
        </Space>
      )}
    </div>
  )
}

export const Legend = memo(LegendGeneric) as typeof LegendGeneric
