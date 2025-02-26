import React, { FC, useState } from 'react'

import { SubmenuDivider, SubmenuRow, SubmenuTitle } from './SubComponents'
import { CommonSubComponentProps, LeveledRowProps, LeveledSubmenuItemProps } from './types'

export const SubmenuItems: FC<CommonSubComponentProps & { items: LeveledSubmenuItemProps[] }> = ({ items, ...props }) => (
  <>
    {items.map((item, index) => {
      switch (item.type) {
        case 'row':
          return <Row {...props} row={item} key={item.key} />
        case 'title':
          return <SubmenuTitle {...item} key={item.key} cssConfig={props.cssConfig} />
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

  const handleRowClick = () => {
    props.handleActiveRowChange(row)
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
