import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Drawer } from 'antd'
import React, { FC } from 'react'
import styled from 'styled-components'

import SidebarHeader from './components/SidebarHeader'
import { sidebarCss } from './sidebarCss'
import { SidebarProps, SidebarViewProps } from './types'
import { useThemedSidebar } from './useThemedSidebar'

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

const SidebarView: FC<SidebarViewProps> = ({
  title,
  cssConfig,
  mask = true,
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
  const contentRef = React.useRef<HTMLDivElement>(null)

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
  }, [visible])

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
    []
  )

  const sidebarWidth = flex ? `calc(100% - ${cssConfig.flexMarginLeft}px)` : cssConfig.width

  return (
    <StyledSidebar
      maskStyle={{
        backgroundColor: cssConfig.mask.background,
        animation: 'none',
        transition: 'none'
      }}
      drawerStyle={{ backgroundColor: cssConfig.drawer.background }}
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
      push={false}
      {...testAttributes}
      {...rest}
    >
      <div className="antd-sidebar-content" ref={contentRef}>
        {children}
      </div>
    </StyledSidebar>
  )
}
