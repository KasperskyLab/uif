import React, { FC } from 'react'
import { Drawer } from 'antd'
import styled from 'styled-components'
import { SidebarProps, SidebarViewProps } from './types'
import { useThemedSidebar } from './useThemedSidebar'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { sidebarCss } from './sidebarCss'
import SidebarHeader from './components/SidebarHeader'

const StyledSidebar = styled(Drawer).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${sidebarCss}
`

export const Sidebar: FC<SidebarProps> = (rawProps: SidebarProps) => {
  const themedProps = useThemedSidebar(rawProps)
  const props = useTestAttribute(themedProps)
  return <SidebarView {...props} />
}

export const SidebarView: FC<SidebarViewProps> = ({
  title,
  cssConfig,
  keyboard,
  mask = true,
  maskClosable,
  visible = false,
  zIndex = 1000,
  flex = false,
  onClose,
  headerActions = null,
  subtitle,
  titlePrefix,
  titlePostfix,
  children,
  testAttributes,
  subHeader,
  ...rest
}: SidebarViewProps) => {
  const contentRef = React.createRef<HTMLDivElement>()

  React.useEffect(() => {
    if (visible) {
      document
        .querySelectorAll('.antd-sidebar-wrapper_last')
        .forEach((drawer) => {
          drawer.classList.remove('antd-sidebar-wrapper_last')
        })
    }

    if (!contentRef.current) return
    const wrapper = contentRef.current?.closest('.ant-drawer')
      ?.parentNode as HTMLDivElement
    wrapper.classList.add('antd-sidebar-wrapper_last')
  }, [visible, contentRef])

  const handleVisibleChange = React.useCallback(
    (visible: boolean) => {
      const wrapper = contentRef.current?.closest('.ant-drawer')
        ?.parentNode as HTMLDivElement
      if (visible) {
        wrapper.classList.add('antd-sidebar-wrapper')
      }

      document
        .querySelectorAll('.antd-sidebar-wrapper .ant-drawer-open')
        .forEach((drawer, index, drawers) => {
          const wrapper = drawer?.parentNode as HTMLDivElement
          wrapper.classList[index === drawers.length - 1 ? 'add' : 'remove'](
            'antd-sidebar-wrapper_last'
          )
        })
    },
    [contentRef]
  )

  const sidebarWidth = flex ? `calc(100% - ${cssConfig.flexMarginLeft}px)` : cssConfig.width

  return (
    <StyledSidebar
      maskStyle={{
        backgroundColor: cssConfig.normal.mask.background,
        animation: 'none',
        transition: 'none'
      }}
      drawerStyle={{ backgroundColor: cssConfig.normal.drawer.background }}
      afterVisibleChange={handleVisibleChange}
      title={
        <SidebarHeader
          title={title}
          subtitle={subtitle}
          prefix={titlePrefix}
          postfix={titlePostfix}
          headerActions={headerActions}
          onClose={onClose}
          subHeader={subHeader}
        />
      }
      closeIcon={null}
      width={sidebarWidth}
      onClose={onClose}
      cssConfig={cssConfig}
      closable={false}
      keyboard={true}
      mask={mask}
      maskClosable={true}
      placement="right"
      visible={visible}
      zIndex={zIndex}
      {...testAttributes}
      {...rest}
    >
      <div className="antd-sidebar-content" ref={contentRef}>
        {children}
      </div>
    </StyledSidebar>
  )
}
