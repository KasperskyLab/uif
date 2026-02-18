import { Theme } from '@design-system/types'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useLocalization } from '@helpers/localization/useLocalization'
import { Tooltip } from '@src/tooltip'
import cn from 'classnames'
import React, { useContext } from 'react'
import styled from 'styled-components'

import { productColors } from '@kaspersky/hexa-ui-core/colors/js'
import { ITestIds, StatusNoThreatSolid, StatusOkSolid } from '@kaspersky/hexa-ui-icons/16'

import { MenuContext } from './Menu'
import { navItemCss } from './navCss'
import { MenuViewProps, NavItemProps, UserStatus } from './types'
import { useThemedMenu } from './useThemedMenu'

export const NavUserItem = (rawProps: NavItemProps): JSX.Element => {
  const { applyAppTheme } = useContext(MenuContext)
  const themedProps: MenuViewProps = useThemedMenu({ ...rawProps, applyAppTheme })
  const props = useTestAttribute(themedProps)
  return <StyledNavUserItem {...props} {...rawProps}/>
}

export const getStatusIcon = (status?: UserStatus, theme?: Theme) => {
  if (theme) {
    switch (status) {
      case 'available':
        return (args: ITestIds) => <StatusOkSolid
          {...args}
          color={productColors.icon.status.statuspositive[theme]}
        />
      case 'unavailable':
        return (args: ITestIds) => <StatusNoThreatSolid
          {...args}
          color={productColors.icon.status.statuscritical[theme]}
        />
    }
  }
}

const NavUserItemComponent = ({
  theme,
  data: { icon, state, onClick, active, userProps: { role, name, status: userStatus } = {} },
  className,
  menuState
}: NavItemProps) => {
  const { setMenuActiveItem } = useContext(MenuContext)
  const localizedUserStatus = userStatus && useLocalization(`menu.navUserItem.userProps.status.${userStatus}`)
  const StatusIcon = getStatusIcon(userStatus, theme)
  const NavItemIcon = StatusIcon || icon
  const {
    updateNavState,
    minimized,
    collapseAll
  } = menuState

  const itemClick = () => {
    updateNavState({ activateItem: state })
    setMenuActiveItem && setMenuActiveItem(state as string)
    onClick && onClick()
    minimized && collapseAll()
  }

  return (
    <div className={cn(className, 'uif-nav-item')}>
      <div className={cn(
        className,
        'uif-nav-item-entry',
        'uif-nav-item-user',
        { active }
      )} onClick={itemClick}>
        <Tooltip text={minimized && localizedUserStatus} theme={theme} placement="right">
          { icon && <div className="uif-nav-item-entry-icon">
            <NavItemIcon testId="userIconStatus" klId="userIconStatus" />
          </div> }
        </Tooltip>
        <div className="uif-nav-item-user-entry-wrapper">
          <div className="uif-nav-item-entry-title">
            <span className="title-ellipsis">{name}</span>
          </div>
          { role && <div className="uif-nav-item-entry-role">{role}</div> }
        </div>
      </div>
    </div>
  )
}

const StyledNavUserItem = styled(NavUserItemComponent).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${navItemCss};
`
