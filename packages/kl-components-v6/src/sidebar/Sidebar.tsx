import React, { FC, PropsWithChildren } from 'react'
import { Drawer } from 'antd'

import styled from 'styled-components'

import { ISidebarProps } from './types'
import { useThemedSidebar } from './useThemedSidebar'
import { sidebarCss } from './sidebarCss'

import { Icon } from '../icon'
import { Heading } from '../typography'

const StyledSidebar = styled(Drawer).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${sidebarCss}`

export const Sidebar: FC<PropsWithChildren<ISidebarProps>> = (rawProps) => {
  const props = useThemedSidebar(rawProps)
  return <SidebarView {...props} />
}

export const SidebarView: FC<ReturnType<typeof useThemedSidebar>> = ({
  closeIcon,
  title,
  cssConfig,
  klId,
  closable = true,
  keyboard = true,
  mask = true,
  maskClosable = true,
  visible = false,
  zIndex = 1000,
  ...rest
}) => {
  const defaultCloseIcon = <Icon size='small' name='Clear' color={cssConfig.normal.icon.color} klId='close-icon' />

  return (
    <StyledSidebar
      maskStyle={{ backgroundColor: cssConfig.normal.mask.background }}
      drawerStyle={{ backgroundColor: cssConfig.normal.drawer.background }}
      title={typeof title === 'string' ? <Heading type='H3' klId='title'>{title}</Heading> : title}
      closeIcon={closeIcon || defaultCloseIcon}
      width={cssConfig.width}
      cssConfig={cssConfig}
      kl-id={klId}
      closable={closable}
      keyboard={keyboard}
      mask={mask}
      maskClosable={maskClosable}
      placement='right'
      visible={visible}
      zIndex={zIndex}
      {...rest}
    />
  )
}
