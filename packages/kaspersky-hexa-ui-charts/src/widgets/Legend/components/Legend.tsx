import clsx from 'clsx'
import React, { memo, ReactNode } from 'react'

import { Space } from '@kaspersky/hexa-ui'

import { TextTruncateWithPopup } from '../../../components/TextTruncateWithPopup/TextTruncateWithPopup'
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
  multiselect?: boolean,
  noPadding?: boolean,
  orientation?: 'horizontal' | 'vertical',
  legendTitle?: string | ReactNode,
  description?: string,
  totalLabel?: string,
  precision?: number,
  percentFontSize?: number,
  widthMode?: 'medium' | 'flex',
  maxHeightScrollContainer?: number,
  onCheck?: (item: TLegendItemRow<T>, show: boolean) => void,
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
  multiselect,
  noPadding,
  orientation = 'vertical',
  description,
  precision = DEFAULT_PRECISION,
  percentFontSize,
  widthMode = 'medium',
  maxHeightScrollContainer = 192,
  totalLabel,
  onCheck,
  onSelect,
  onHover,
  onLeave
}: ILegendProps<T>): JSX.Element => {
  const isOneItemChecked = items.filter((l) => l.kind === LegendItemType.Row && l.checked).length === 1
  const total = showTotal || showPercentage ? items.reduce((sum, d) => sum + getNumberFromData(d), 0) : 0
  const isVertical = orientation === 'vertical'
  const maxPercentLength = getMaxPercentLength(items, getNumberFromData, precision)

  return (
    <div className={clsx(
      styles.legend,
      widthMode === 'medium' && styles.mediumWidth,
      isVertical ? styles.legendVertical : styles.legendHorizontal,
      isVertical && (legendTitle ? styles.withTitle : styles.noTitle),
      noPadding && styles.resetPadding,
      className
    )}>
      {isVertical && legendTitle && (
        <Space className={clsx(styles.legendTitle, noPadding && styles.resetPadding)} align="center">
          {typeof legendTitle === 'string' ? (
            <TextTruncateWithPopup type="BTM3">
              {legendTitle}
            </TextTruncateWithPopup>
          ) : (
            legendTitle
          )}
        </Space>
      )}
      <div
        className={clsx(styles.legendScrollContainer, noPadding && styles.resetPadding)}
        style={{ maxHeight: `${maxHeightScrollContainer}px`}}
      >
        {items.map((item, index) => {
          if (item.kind === LegendItemType.Divider) {
            return <LegendItemDivider key={index} className={clsx(styles.legendDivider, noPadding && styles.resetPadding)} />
          }

          const prevItem = index > 0 ? items[index - 1] : null
          const nextItem = index < items.length - 1 ? items[index + 1] : null

          const isPrevSelected = prevItem?.kind === LegendItemType.Row && prevItem.selected
          const isNextSelected = nextItem?.kind === LegendItemType.Row && nextItem.selected

          return (
            <LegendItem
              key={index}
              item={item}
              value={getNumberFromData(item)}
              valueType={item.valueType}
              showPercentage={showPercentage}
              isSelectable={!!selectable}
              multiselect={multiselect}
              noPadding={noPadding}
              total={total}
              disabled={isOneItemChecked && item.checked}
              precision={precision}
              maxPercentLength={maxPercentLength}
              percentFontSize={percentFontSize}
              isPrevSelected={isPrevSelected}
              isNextSelected={isNextSelected}
              onSelect={onSelect}
              onCheck={onCheck}
              onHover={onHover}
              onLeave={onLeave}
            />
          )
        })}
      </div>
      {isVertical && (
        <Space
          wrap="nowrap"
          direction="vertical"
          align="stretch"
          justify="stretch"
          gap={4}
          className={clsx(styles.legendFooter, noPadding && styles.resetPadding)}
        >
          {showTotal && <LegendTotal value={total} precision={precision} description={totalLabel} />}
          {description && <LegendDescription value={description} />}
        </Space>
      )}
    </div>
  )
}

export const Legend = memo(LegendGeneric) as typeof LegendGeneric
