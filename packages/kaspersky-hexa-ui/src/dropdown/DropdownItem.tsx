import { Menu } from 'antd'
import React, { FC } from 'react'

import { DropdownItemInner } from './DropdownItemInner'
import { DropdownItemProps } from './types'

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  componentsBefore,
  componentsAfter,
  description,
  tooltip,
  type,
  ...rest
}: DropdownItemProps) => {
  return (
    <Menu.Item {...rest} >
      <DropdownItemInner
        componentsBefore={componentsBefore}
        componentsAfter={componentsAfter}
        description={description}
        tooltip={tooltip}
      >
        {children}
      </DropdownItemInner>
    </Menu.Item>
  )
}
