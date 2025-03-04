import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Layout } from 'antd'
import cn from 'classnames'
import React, { createContext } from 'react'
import styled from 'styled-components'

import { Menu as HamburgerIcon } from '@kaspersky/hexa-ui-icons/16'

import { menuCss } from './menuCss'
import { HamburgerProps, MenuProps, MenuViewProps } from './types'
import { useThemedMenu } from './useThemedMenu'

export const Hamburger = (props:HamburgerProps): React.ReactElement => (
  <HamburgerIcon {...props}/>
)

const StyledAntSider = styled(Layout.Sider).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${menuCss}
`

export const AppThemeContext = createContext(false)

export const Menu = (rawProps: MenuProps): JSX.Element => {
  const { applyAppTheme = false } = rawProps
  const themedProps: MenuViewProps = useThemedMenu(rawProps)
  const { testAttributes, ...rest } = useTestAttribute(themedProps)
  return <AppThemeContext.Provider value={applyAppTheme}>
    <StyledAntSider
    {...themedProps}
    {...testAttributes}
    {...rest}
    className={cn(!applyAppTheme && 'theme-dark')}/>
  </AppThemeContext.Provider>
}
