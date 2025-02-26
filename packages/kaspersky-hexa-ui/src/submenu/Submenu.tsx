import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import React, { FC, useMemo, useState } from 'react'
import styled from 'styled-components'

import {
  SubmenuContent,
  submenuCss,
  SubmenuElementWrapper,
  SubmenuItemsStack,
  SubmenuWrapper
} from './submenuCss'
import { SubmenuItems } from './SubmenuItems'
import {
  LeveledRowProps,
  LeveledSubmenuItemProps,
  RowProps,
  SubmenuItemProps,
  SubmenuProps,
  SubmenuViewProps
} from './types'
import { useThemedSubmenu } from './useThemedSubmenu'

const StyledSubmenu = styled.div.withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`${submenuCss}`

export const Submenu: FC<SubmenuProps> = (rawProps) => {
  const themedProps = useThemedSubmenu(rawProps)
  const props = useTestAttribute(themedProps)
  return <SubmenuView {...props} />
}

const SubmenuView: FC<SubmenuViewProps> = ({
  items,
  elementBefore,
  elementAfter,
  truncateText = true,
  collapseOnTextClick = true,
  testAttributes,
  cssConfig,
  activeKey,
  onChange,
  ...rest
}) => {
  const pathToActiveRow = useMemo(() => findPathToActiveRow(items, activeKey), [items, activeKey])

  const itemsWithLevels = useMemo(() =>
    addLevelsToRows(items, pathToActiveRow?.map((item) => item.key).slice(0, -1))
  , [pathToActiveRow])

  const [activeRow, setActiveRow] = useState(pathToActiveRow ? pathToActiveRow[pathToActiveRow.length - 1] : findFirstRow(itemsWithLevels))

  const handleActiveRowChange = (row: LeveledRowProps) => {
    setActiveRow(row)
    onChange?.(row.key)
  }

  return (
    <SubmenuWrapper>
      <StyledSubmenu cssConfig={cssConfig} {...rest} {...testAttributes}>
        {elementBefore && <SubmenuElementWrapper>{elementBefore}</SubmenuElementWrapper>}
        <SubmenuItemsStack>
          <SubmenuItems
            handleActiveRowChange={handleActiveRowChange}
            cssConfig={cssConfig}
            truncateText={truncateText}
            collapseOnTextClick={collapseOnTextClick}
            items={itemsWithLevels}
            activeRowKey={activeRow?.key}
          />
        </SubmenuItemsStack>
        {elementAfter && <SubmenuElementWrapper fixToBottom>{elementAfter}</SubmenuElementWrapper>}
      </StyledSubmenu>
      <SubmenuContent className={activeRow?.contentClassName}>{activeRow?.content}</SubmenuContent>
    </SubmenuWrapper>
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

const addLevelsToRows = <T extends SubmenuItemProps>(items: T[], openedRowsKeys: string[] = [], level = 0): T[] => {
  const hasChildrenAtLevel = items.some((item) => item.type === 'row' && item.children)

  return items.map((item) => {
    if (item.type === 'row') {
      return {
        ...item,
        level,
        opened: openedRowsKeys.includes(item.key),
        extraLeftPadding: !item.children && hasChildrenAtLevel ? 20 : 0,
        children: item.children && addLevelsToRows(item.children, openedRowsKeys, level + 1)
      }
    }

    return item
  })
}
