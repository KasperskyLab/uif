import Menu from 'rc-menu'
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
  title,
  icon,
  ...rest
}: DropdownItemProps) => {
  return (
    <Menu.Item {...rest} title={typeof title === 'string' ? title : undefined}>
      <DropdownItemInner
        componentsBefore={componentsBefore}
        componentsAfter={componentsAfter}
        description={description}
        tooltip={tooltip}
        icon={icon}
      >
        {children}
      </DropdownItemInner>
    </Menu.Item>
  )
}
