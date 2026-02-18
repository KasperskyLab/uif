import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import React, { FC, useState } from 'react'

import { SubmenuDivider, SubmenuRow, SubmenuTitle } from './SubComponents'
import { CommonSubComponentProps, LeveledRowProps, LeveledSubmenuItemProps } from './types'

export const SubmenuItems: FC<CommonSubComponentProps & { items: LeveledSubmenuItemProps[] }> = ({ items, ...props }) => (
  <>
    {items.map((rawItem, index) => {
      const item = useTestAttribute(rawItem)
      switch (item.type) {
        case 'row':
          return <Row {...props} row={item} key={item.key} />
        case 'title':
          return <SubmenuTitle {...item} key={item.key} />
        case 'divider':
          return <SubmenuDivider {...item} key={index} />
        default:
          return null
      }
    })}
  </>
)

const Row: FC<CommonSubComponentProps & { row: LeveledRowProps }> = ({ row, ...props }) => {
  const { children } = row

  const [showChildren, setShowChildren] = useState(row.opened)

  const handleRowClick = async () => {
    if ((await row.onClick?.(row.key, row)) !== false) {
      props.handleActiveRowChange(row)
    }
    props.collapseOnTextClick && handleCollapsibleRowClick()
  }

  const handleCollapsibleRowClick = () => {
    children && setShowChildren(!showChildren)
  }

  return <>
    <SubmenuRow
      {...props}
      row={{ ...row, opened: showChildren }}
      selected={props.activeRowKey === row.key}
      collapsible={!!children}
      onCollapsibleClick={handleCollapsibleRowClick}
      onClick={handleRowClick}
    />
    {children && showChildren && <SubmenuItems {...props} items={children} />}
  </>
}
