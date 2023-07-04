import { useMemo, createContext, useContext } from 'react'
import * as React from 'react'
import styled from 'styled-components'

import {
  DividerProps,
  Dropdown as AntDropdown,
  Menu,
  MenuItemProps,
  MenuProps,
  SubMenuProps
} from 'antd'

import { selectDropdownCss, itemStylesCss } from './selectDropdownCss'
import { useThemedDropdown } from './useThemedDropdown'
import { DropdownCssConfig, IDropdownProps } from './types'

const StyledMenu = styled(Menu as any).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop as string)
})`
  ${selectDropdownCss}
`

const StyledItem = styled(Menu.Item as any).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop as string)
})`
  ${itemStylesCss}
`

const StyledSubMenu = styled(Menu.SubMenu).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${itemStylesCss}
`

const DropdownContext = createContext<{ cssConfig: DropdownCssConfig | null }>({
  cssConfig: null
})

const Container = styled.div`
  position: relative;
`

export const Dropdown = ({
  overlay,
  klId,
  shouldUsePortal = true,
  ...rest
}: IDropdownProps) => {
  const { cssConfig, ...restThemedProps } = useThemedDropdown({ ...rest })

  const content = useMemo(
    () =>
      !Array.isArray(overlay) ? (
        overlay
      ) : (
        <StyledMenu cssConfig={cssConfig} kl-id={klId}>
          {overlay.map((itemProps, pos) => (
            <Menu.Item key={pos} {...itemProps} />
          ))}
        </StyledMenu>
      ),
    [overlay, cssConfig]
  )

  return (
    <DropdownContext.Provider value={{ cssConfig }}>
      <Container>
        <AntDropdown
          overlay={content}
          getPopupContainer={shouldUsePortal ? undefined : (triggerNode) => triggerNode.parentNode as HTMLElement}
          {...restThemedProps}
        />
      </Container>
    </DropdownContext.Provider>
  )
}

Dropdown.Menu = (props: MenuProps) => {
  const { cssConfig } = useContext(DropdownContext)
  if (!cssConfig) return null
  return <StyledMenu {...props} cssConfig={cssConfig} />
}
Dropdown.SubMenu = (props: SubMenuProps) => {
  const { cssConfig } = useContext(DropdownContext)
  if (!cssConfig) return null
  return <StyledSubMenu {...props} cssConfig={cssConfig} />
}
Dropdown.MenuItem = (props: MenuItemProps) => {
  const { cssConfig } = useContext(DropdownContext)
  if (!cssConfig) return null
  return <StyledItem {...props} cssConfig={cssConfig} />
}
Dropdown.MenuDivider = StyledMenu.Divider as React.FC<DividerProps>
