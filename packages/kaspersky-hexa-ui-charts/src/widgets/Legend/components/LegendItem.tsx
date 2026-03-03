import clsx from 'clsx'
import React, { useMemo } from 'react'

import { Checkbox, Space, Text, Tooltip } from '@kaspersky/hexa-ui'

import styles from '../Legend.module.scss'
import { TLegendItemRow } from '../types'

import { LegendItemColorMark } from './LegendItemColorMark'
import { LegendItemValue } from './LegendItemValue'

interface LegendItemProps<T> {
  item: TLegendItemRow<T>,
  value: number,
  isSelectable: boolean,
  noPadding?: boolean,
  disabled?: boolean,
  total: number,
  showPercentage?: boolean,
  precision?: number,
  maxPercentLength?: number,
  percentFontSize?: number,
  onSelect?: (item: TLegendItemRow<T>, show: boolean) => void,
  onHover?: (item: TLegendItemRow<T>) => void,
  onLeave?: (item: TLegendItemRow<T>) => void
}

export const LegendItem = <T, >({
  item,
  value,
  isSelectable,
  noPadding = false,
  disabled,
  total,
  showPercentage,
  precision,
  maxPercentLength,
  onHover,
  onLeave,
  onSelect
}: LegendItemProps<T>) => {
  const tooltip = item.tooltip ?? (typeof item.title === 'string' ? item.title : undefined)

  const prefix = useMemo(() => {
    if (isSelectable) {
      return (
            <Checkbox
              className={clsx(item.color && styles.checkbox)}
              checked={item.selected}
              onChange={(e) => onSelect?.(item, e.target.checked)}
              disabled={disabled}
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
  }, [disabled, isSelectable, item, onSelect])

  return (
    <Space
      gap={8}
      align="center"
      wrap="nowrap"
      direction="horizontal"
      className={clsx(styles.legendItem, noPadding && styles.resetPadding)}
      onMouseOver={() => onHover?.(item)}
      onMouseLeave={() => onLeave?.(item)}
    >
      {prefix}
      {item.icon}
      <div className={styles.legendItemText}>
        <Tooltip text={tooltip}>
          <Text type="BTM3">{item.title}</Text>
        </Tooltip>
      </div>
      <LegendItemValue
        value={value}
        total={total}
        showPercentage={showPercentage && total > 0}
        precision={precision}
        maxPercentLength={maxPercentLength}
      />
    </Space>
  )
}
