import { Tooltip } from '@src/tooltip'
import React, { FC, useMemo } from 'react'

import styles from './styles/Dropdown.module.scss'
import { DropdownItemInnerProps } from './types'

export const DropdownItemInner: FC<DropdownItemInnerProps> = ({
  children,
  icon,
  type,
  tooltip,
  description,
  componentsBefore,
  componentsAfter
}: DropdownItemInnerProps) => {
  const dropdownItemInner = useMemo(() =>
    <div className={styles.dropdownItemInner}>
      <div className={styles.block}>
        {icon && <div className={styles.additionalComponents}>
          {icon}
        </div>}
        {
          componentsBefore?.map((Component, index) => (
            <div key={index} className={styles.additionalComponents}>
              {Component}
            </div>
          ))
        }
        <div className={styles.textWrapper}>
          <div className={styles.text}>{children}</div>
          {description && <div className={styles.description}>{description}</div>}
        </div>
      </div>
      {
        componentsAfter?.map((Component, index) => (
          <div key={index} className={styles.additionalComponents}>
            {Component}
          </div>
        ))
      }
    </div>
  , [children, componentsAfter, componentsBefore, description, type])

  return tooltip
    ? <Tooltip text={tooltip}>
        {dropdownItemInner}
      </Tooltip>
    : dropdownItemInner
}
