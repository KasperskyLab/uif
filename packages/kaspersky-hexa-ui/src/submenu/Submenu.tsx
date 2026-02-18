import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import cn from 'classnames'
import React, { FC, useMemo, useState } from 'react'

import styles from './Submenu.module.scss'
import { SubmenuItems } from './SubmenuItems'
import {
  LeveledRowProps,
  LeveledSubmenuItemProps,
  RowProps,
  SubmenuItemProps,
  SubmenuProps
} from './types'

export const Submenu: FC<SubmenuProps> = (rawProps) => {
  const {
    activeKey,
    collapseOnTextClick = true,
    defaultActiveKey,
    elementAfter,
    elementBefore,
    items,
    onChange,
    testAttributes,
    truncateText = true,
    ...rest
  } = useTestAttribute(rawProps)

  const pathToActiveRowFromProps = useMemo(() => findPathToActiveRow(items, activeKey || defaultActiveKey), [items, activeKey, defaultActiveKey])
  const activeRowFromProps = pathToActiveRowFromProps?.[pathToActiveRowFromProps.length - 1]

  const itemsWithLevels = useMemo(() =>
    addLevelsToRows(items, pathToActiveRowFromProps?.map((item) => item.key).slice(0, -1))
  , [pathToActiveRowFromProps])

  const [activeRow, setActiveRow] = useState(pathToActiveRowFromProps ? activeRowFromProps : findFirstRow(itemsWithLevels))

  const handleActiveRowChange = (row: LeveledRowProps) => {
    if (!activeKey) {
      setActiveRow(row)
    }
    onChange?.(row.key)
  }

  const activeRowToRender = activeKey ? activeRowFromProps : activeRow

  return (
    <div className={styles.wrapper}>
      <div 
        {...rest}
        {...testAttributes}
        className={cn(styles.submenu, getClassNameWithTheme(rawProps))}
      >
        {elementBefore && <div className={styles.elementBefore}>{elementBefore}</div>}
        <div className={styles.itemsStack}>
          <SubmenuItems
            handleActiveRowChange={handleActiveRowChange}
            truncateText={truncateText}
            collapseOnTextClick={collapseOnTextClick}
            items={itemsWithLevels}
            activeRowKey={activeKey || activeRow?.key}
          />
        </div>
        {elementAfter && <div className={styles.elementAfter}>{elementAfter}</div>}
      </div>
      {activeRowToRender?.content && (
        <div className={cn(styles.content, activeRowToRender.contentClassName)}>
          {activeRowToRender.content}
        </div>
      )}
    </div>
  )
}

const findFirstRow = (items: LeveledSubmenuItemProps[]) => (
  items.find((item) => item.type === 'row') as LeveledRowProps | undefined
)

const findPathToActiveRow = (items: SubmenuItemProps[], activeKey?: string): RowProps[] | undefined => {
  for (const item of items) {
    if (item.type === 'row') {
      if (item.key === activeKey) {
        return [item]
      }
      if (item?.children) {
        const path = findPathToActiveRow(item.children, activeKey)
        if (path) {
          return [item, ...path]
        }
      }
    }
  }
}

const addLevelsToRows = <T extends SubmenuItemProps>(items: T[], openedRowsKeys: string[] = [], level = 0): T[] =>
  items.map((item) => {
    if (item.type === 'row') {
      return {
        ...item,
        level,
        opened: openedRowsKeys.includes(item.key),
        extraLeftPadding: !item.children ? 20 : 0,
        children: item.children && addLevelsToRows(item.children, openedRowsKeys, level + 1)
      }
    }

    return item
  })
