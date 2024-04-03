import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
import { siderCss } from './siderCss'
import { Menu as HamburgerIcon } from '@kaspersky/icons/16'

export const Hamburger = (props: any) => (
  <HamburgerIcon {...props}/>
)

export const Sider = styled(Layout.Sider)`
  ${siderCss}
`
