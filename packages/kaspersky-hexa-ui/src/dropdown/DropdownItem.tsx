import Menu from 'rc-menu'
import React, { FC } from 'react'

import { DropdownItemInner } from './DropdownItemInner'
import { DropdownItemProps } from './types'
import { TextReducer } from '@helpers/index'

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  componentsBefore,
  componentsAfter,
  description,
  tooltip,
  type,
  title,
  truncateItemWidth,
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
        <TextReducer truncationWidth={truncateItemWidth}>{children}</TextReducer>
      </DropdownItemInner>
    </Menu.Item>
  )
}
