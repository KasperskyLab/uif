import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Divider, DividerProps } from '@src/divider'
import { Space } from '@src/space'
import { Toggle, ToggleProps } from '@src/toggle'
import { Tooltip } from '@src/tooltip'
import cn from 'classnames'
import Menu, { MenuItemProps, MenuProps, SubMenuProps } from 'rc-menu'
import React, { FC, useEffect, useState } from 'react'

import { ArrowRight } from '@kaspersky/hexa-ui-icons/16'

import styles from './styles/Dropdown.module.scss'
import { DropdownItemActionsProps } from './types'

type EventWarnKey = Pick<MenuItemProps, 'eventKey' | 'warnKey'>

export const DropdownMenu: FC<MenuProps> = (props) => <Menu {...props} prefixCls="ant-dropdown-menu" />

export const DropdownSubmenu: FC<SubMenuProps> = ({ popupClassName, ref, ...props }) => (
  <Menu.SubMenu
    ref={ref as React.Ref<HTMLLIElement> | undefined}
    expandIcon={<ArrowRight />}
    popupClassName={cn(popupClassName, styles.dropdownOverlay)}
    popupOffset={[16, -10]}
    {...props}
  />
)

export const DropdownGroup: FC<EventWarnKey> = ({ eventKey, warnKey, ...props }) => <li {...props} className={styles.dropdownGroupTitle} />

export const DropdownDivider: FC<DividerProps & EventWarnKey> = ({
  className,
  eventKey,
  warnKey,
  ...props
}) => <Divider className={cn(className, styles.dropdownDivider)} mode="light" {...props} />

export const DropdownInnerActions: FC<DropdownItemActionsProps & EventWarnKey> = ({
  className,
  eventKey,
  warnKey,
  ...props
}) => <div className={cn(className, styles.dropdownInnerActions)} {...props} />

export const DropdownToggle: FC<ToggleProps> = ({
  children,
  labelPosition,
  className,
  onChange,
  checked,
  tooltip,
  ...rest
}) => {
  const { testAttributes, ...props } = useTestAttribute(rest)

  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleToggleChange = (checked: boolean, e: React.MouseEvent<HTMLElement>) => {
    if (onChange) {
      onChange(checked, e.nativeEvent)
    }
    setIsChecked(checked)
  }

  const handleWrapperClick = (e: React.MouseEvent<HTMLElement>) => {
    if (props.disabled || props.loading) return
    e.stopPropagation()

    handleToggleChange(!isChecked, e)
  }

  return (
    <li
      onClick={handleWrapperClick}
      className={cn(
        styles.dropdownToggle,
        (props.disabled || props.loading) && styles.itemDisabled,
        className
      )}
      {...testAttributes}
    >
      <Tooltip text={tooltip}>
        <Space width="100%" gap="dependent" justify="space-between" wrap="inherit">
          {children}
          <Toggle
            {...props}
            checked={isChecked}
            labelPosition="before"
          />
        </Space>
      </Tooltip>
    </li>
  )
}
