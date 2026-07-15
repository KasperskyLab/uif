import clsx from 'clsx'
import React, { useCallback, useMemo, useState } from 'react'

import { Checkbox, Space } from '@kaspersky/hexa-ui'

import { TextTruncateWithPopup } from '../../../../src/components/TextTruncateWithPopup/TextTruncateWithPopup'
import styles from '../Legend.module.scss'
import { TLegendItemRow } from '../types'

import { LegendItemColorMark } from './LegendItemColorMark'
import { LegendItemValue } from './LegendItemValue'

interface LegendItemProps<T> {
  item: TLegendItemRow<T>,
  value: number,
  valueType?: 'MTR3' | 'BTR3',
  isSelectable: boolean,
  multiselect?: boolean,
  noPadding?: boolean,
  disabled?: boolean,
  total: number,
  showPercentage?: boolean,
  precision?: number,
  maxPercentLength?: number,
  percentFontSize?: number,
  isPrevSelected?: boolean,
  isNextSelected?: boolean,
  onSelect?: (item: TLegendItemRow<T>, show: boolean) => void,
  onCheck?: (item: TLegendItemRow<T>, show: boolean) => void,
  onHover?: (item: TLegendItemRow<T>) => void,
  onLeave?: (item: TLegendItemRow<T>) => void
}

export const LegendItem = <T,>({
  item,
  value,
  valueType,
  isSelectable,
  multiselect,
  noPadding = false,
  disabled,
  total,
  showPercentage,
  precision,
  maxPercentLength,
  isPrevSelected,
  isNextSelected,
  onHover,
  onLeave,
  onCheck,
  onSelect
}: LegendItemProps<T>) => {
  const [isItemActive, setIsItemActive] = useState(false)
  const tooltip = item.tooltip ?? (typeof item.title === 'string' ? item.title : undefined)

  const prefix = useMemo(() => {
    if (multiselect) {
      return (
        <Checkbox
          className={clsx(item.color && styles.checkbox)}
          checked={item.checked}
          onChange={(e) => onCheck?.(item, e.target.checked)}
          disabled={disabled}
          onClick={(e) => e.stopPropagation()}
          style={
            {
              '--checkbox-background': item.color
            } as React.CSSProperties
          }
        />
      )
    }
    if (item.color) {
      return (
        <LegendItemColorMark color={item.color} />
      )
    }

    return null
  }, [disabled, multiselect, item, onSelect])

  const handleMouseDown = useCallback(() => setIsItemActive(true), [])
  const handleMouseUp = useCallback(() => setIsItemActive(false), [])
  const handleMouseOver = useCallback(() => onHover?.(item), [onHover, item])
  const handleMouseLeave = useCallback(() => {
    onLeave?.(item)
    setIsItemActive(false)
  }, [onLeave, item])
  const handleClick = useCallback(() => {
    if (isSelectable) {
      onSelect?.(item, !item.selected)
    }
  }, [isSelectable, onSelect, item])

  return (
    <Space
      gap={8}
      align="center"
      wrap="nowrap"
      direction="horizontal"
      className={clsx(
        styles.legendItem,
        noPadding && styles.resetPadding,
        isItemActive && styles.itemActive,
        isSelectable && styles.itemSelectable,
        item.selected && styles.itemSelected,
        item.selected && isPrevSelected && styles.prevSelected,
        item.selected && isNextSelected && styles.nextSelected,
        item.className
      )}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {prefix}
      {item.icon}
      <div className={styles.legendItemText}>
        <TextTruncateWithPopup
          customTooltipContent={tooltip}
          type={item.titleType ?? 'BTM3'}
        >
          {item.title}
        </TextTruncateWithPopup>
      </div>
      <LegendItemValue
        value={value}
        valueType={valueType}
        total={total}
        showPercentage={showPercentage && total > 0}
        precision={precision}
        maxPercentLength={maxPercentLength}
      />
    </Space>
  )
}
