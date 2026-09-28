import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
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
  truncateItemWidth,
  icon,
  ...props
}: DropdownItemProps) => {
  const { testAttributes, ...rest } = useTestAttribute(props)

  return (
    <Menu.Item {...testAttributes} {...rest} title={typeof title === 'string' ? title : undefined}>
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
