import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Space } from '@src/space'
import cn from 'classnames'
import React, { FC, useCallback } from 'react'

import { ToggleButton } from './ToggleButton'
import styles from './ToggleButton.module.scss'
import { ToggleButtonGroupProps } from './types'


export const ToggleButtonGroup: FC<ToggleButtonGroupProps> = (props) => {
  const { testAttributes } = useTestAttribute(props)
  const {
    className,
    style,
    items,
    value,
    onChange,
    loading,
    isStretch,
    disabled
  } = props

  const handleItemChange = useCallback((val: string, checked: boolean) => {
    onChange(
      checked
        ? Array.from(new Set([...value, val]))
        : value.filter(v => v !== val)
    )
  }, [value, onChange])

  return (
    <Space
      gap="dependent"
      wrap="wrap"
      align="center"
      {...testAttributes}
      style={style}
      className={cn(isStretch && styles.stretched)}
    >
      {items.map((item) => {
        return (
          <ToggleButton
            key={item.value}
            {...item}
            selected={value.includes(item.value)}
            onChange={handleItemChange}
            disabled={disabled || item.disabled}
            loading={loading || item.loading}
          />
        )
      })}
    </Space>
  )
}
