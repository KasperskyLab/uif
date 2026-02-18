import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { TextReducer } from '@helpers/index'
import { Tooltip } from '@src/tooltip'
import { Text } from '@src/typography'
import cn from 'classnames'
import { FC, useMemo } from 'react'
import React from 'react'
import { v4 as uuid } from 'uuid'

import styles from './ToggleButton.module.scss'
import { ToggleButtonProps } from './types'

export const ToggleButton: FC<ToggleButtonProps> = (props) => {
  const {
    disabled,
    loading,
    onChange,
    className,
    size = 'medium',
    style,
    iconBefore,
    elementAfter,
    text,
    mode = 'marina',
    tooltip,
    testId,
    value,
    selected
  } = props


  const { testAttributes } = useTestAttribute(props)
  const inputId = useMemo(() => uuid(), [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return
    onChange(value, e.currentTarget.checked)
  }

  const isIconOnly = text == null || text === ''
  const textType = size === 'medium' ? 'BTM3' : 'BTM4'

  const textElement = !isIconOnly ? (
    <TextReducer tooltip={text} placement="left" className={styles.reducer}>
      <Text type={textType} className={styles.text}>
        {text}
      </Text>
    </TextReducer>
  ) : null

  const content = (
    <span className={styles.content}>
      {iconBefore && <span className={styles.iconBefore}>{iconBefore}</span>}
      {textElement}
      {elementAfter && <span className={styles.elementAfter}>{elementAfter}</span>}
    </span>
  )

  return (
    <div
      className={cn(
        styles.container,
        styles[size],
        styles[mode],
        className
      )}
      style={style}
      data-checked={selected}
      data-value={value}
      {...testAttributes}
    >
      <input
        id={inputId}
        type="checkbox"
        className={styles.input}
        disabled={disabled || loading}
        onChange={handleChange}
        checked={selected}
        data-testid={testId ? `${testId}-input` : undefined}
      />
      <label
        htmlFor={inputId}
        className={cn(
          styles.toggleBtn,
          isIconOnly && styles.iconOnly,
          loading && styles.toggleBtnLoading,
          className
        )}
        data-testid={testId ? `${testId}-label` : undefined}
      >
        {tooltip 
          ? <Tooltip text={tooltip}>
              {content}
            </Tooltip> 
          : content}
      </label>
    </div>
  )
}
