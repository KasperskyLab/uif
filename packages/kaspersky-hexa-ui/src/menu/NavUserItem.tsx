import { Theme } from '@design-system/types'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useLocalization } from '@helpers/localization/useLocalization'
import { Tooltip } from '@src/tooltip'
import cn from 'classnames'
import React, { useContext } from 'react'
import styled from 'styled-components'

import { productColors } from '@kaspersky/hexa-ui-core/colors/js'
import { StatusNoThreatSolid, StatusOkSolid, ITestIds } from '@kaspersky/hexa-ui-icons/16'

import { AppThemeContext } from './Menu'
import { navItemCss } from './navCss'
import { MenuViewProps, NavItemProps, UserStatus } from './types'
import { useThemedMenu } from './useThemedMenu'

export const NavUserItem = (rawProps: NavItemProps): JSX.Element => {
  const applyAppTheme = useContext(AppThemeContext)
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
  const localizedUserStatus = userStatus && useLocalization(`menu.navUserItem.userProps.status.${userStatus}`)
  const StatusIcon = getStatusIcon(userStatus, theme)

  const NavItemIcon = StatusIcon || icon

  const itemClick = () => {
    menuState.updateNavState({ activateItem: state })
    menuState.setActive(state)
    onClick && onClick()
    menuState.minimized && menuState.collapseAll()
  }

  return (
    <div className={cn(className, 'uif-nav-item')}>
      <div className={cn(className, 'uif-nav-item-entry', 'uif-nav-item-user', active && 'active')} onClick={itemClick}>
        <Tooltip text={!menuState.minimized && localizedUserStatus} theme={theme}>
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
