import React, { FC } from 'react'
import { Menu } from 'antd'
import { DropdownItemProps } from './types'
import { DropdownItemInner } from './DropdownItemInner'

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  componentsBefore,
  componentsAfter,
  type,
  ...rest
}: DropdownItemProps) => {
  return (
    <Menu.Item {...rest} >
      <DropdownItemInner
        componentsBefore={componentsBefore}
        componentsAfter={componentsAfter}
      >
        {children}
      </DropdownItemInner>
    </Menu.Item>
  )
}
