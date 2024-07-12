import React from 'react'
import styled from 'styled-components'
import { Layout, SiderProps as AntSiderProps } from 'antd'
import { menuCss } from './menuCss'
import { HamburgerProps, MenuViewProps } from './types'
import { Menu as HamburgerIcon } from '@kaspersky/icons/16'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useThemedMenu } from './useThemedMenu'

export const Hamburger = (props:HamburgerProps): React.ReactElement => (
  <HamburgerIcon {...props}/>
)

const StyledAntSider = styled(Layout.Sider).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${menuCss}
`

export const Menu = (rawProps: AntSiderProps): JSX.Element => {
  const themedProps: MenuViewProps = useThemedMenu(rawProps)
  const { testAttributes, ...rest } = useTestAttribute(themedProps)
  return <StyledAntSider {...testAttributes} {...rest}/>
}
