import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'

import styles from './HorizontalNav.module.scss'
import { HorizontalNavItemProps, HorizontalNavProps } from './types'

export const HorizontalNav = ({
  className,
  items,
  borderless = false,
  activeKey,
  ...props
}: HorizontalNavProps): JSX.Element => {
  const { testAttributes, ...rest } = useTestAttribute(props)
  const [selected, setSelected] = useState(items?.filter(item => item.selected)[0]?.key)
  const navRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!activeKey) {
      const selectedItem = items?.find(item => item.selected)
      if (selectedItem) {
        setSelected(selectedItem.key)
      }
    }
  }, [items])

  return (
    <nav
      {...testAttributes}
      {...rest}
      ref={navRef}
      className={cn(
        className,
        styles['hexa-ui-horizontal-nav'],
        { [styles['borderless']]: borderless }
      )}
    >
      {
        items?.map(({ key, onClick, label, disabled, componentsAfter, testId, klId }: HorizontalNavItemProps): JSX.Element =>
          <button
            key={key}
            data-testid={testId}
            className={cn(
              styles['hexa-ui-horizontal-nav-item'],
              key === (activeKey || selected) && styles['selected']
            )}
            onClick={() => {
              if (disabled) return
              if (!activeKey) {
                setSelected(key)
              }
              onClick?.()
            }}
            disabled={disabled}
          >
            <span className={styles['hexa-ui-horizontal-nav-item-inner']}>
              {label}
              {componentsAfter?.map((Component, index) => (
                <span key={index} className={styles.additionalComponent}>{Component}</span>
              ))}
            </span>
          </button>
        )
      }
    </nav>
  )
}

