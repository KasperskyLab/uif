import useEscapeToClose from '@helpers/hooks/useCloseOnEscape'
import { getChildTestAttr, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import Drawer from 'antd/es/drawer'
import cn from 'classnames'
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
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

export interface SidebarHandle {
  reassignTopmostSidebar: () => void
}

export const Sidebar = forwardRef<SidebarHandle, SidebarProps>((rawProps, ref) => {
  const themedProps = useThemedSidebar(rawProps)
  const props = useTestAttribute(themedProps)

  const {
    title,
    className,
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
    destroyOnClose,
    truncateTitle,
    footerLeft,
    footerRight,
    noPaddingContent,
    titleLineClamp,
    closeTestId,
    afterVisibleChange,
    ...rest
  }: SidebarViewProps = props

  const contentRef = React.useRef<HTMLDivElement>(null)
  const [key, setKey] = useState(Math.random())
  const [open, setOpen] = useState(false)

  const isTopmost = React.useCallback(() => {
    const wrapper = contentRef.current?.closest('.ant-drawer')?.parentElement
    return !!wrapper && wrapper.classList.contains('antd-sidebar-wrapper_last')
  }, [])

  const reassignTopmostSidebar = React.useCallback(
    () => {
      if (!visible) return

      const openDrawers = Array.from(document.querySelectorAll('.antd-sidebar-wrapper .ant-drawer-open'))
      if (openDrawers.length <= 1) return

      document
        .querySelectorAll('.antd-sidebar-wrapper_last')
        .forEach((el) => el.classList.remove('antd-sidebar-wrapper_last'))

      // предпоследний сайдбар (который станет последним после закрытия текущего)
      // получает класс _last для правильного отображения подложки
      const previousDrawer = openDrawers[openDrawers.length - 2]
      previousDrawer?.parentElement?.classList.add('antd-sidebar-wrapper_last')
    },
    [visible]
  )

  useImperativeHandle(ref, () => ({ reassignTopmostSidebar }))

  const handleClose = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
      reassignTopmostSidebar()
      onClose?.(e)
    },
    [reassignTopmostSidebar, onClose]
  )

  useEscapeToClose({
    visible,
    onClose: handleClose,
    isTopmost
  })

  useEffect(() => {
    if (visible) {
      document
        .querySelectorAll('.antd-sidebar-wrapper_last')
        .forEach((drawer) => {
          drawer.classList.remove('antd-sidebar-wrapper_last')
        })

      if (!contentRef.current) return
      const wrapper = contentRef.current?.closest('.ant-drawer')
        ?.parentNode as HTMLDivElement
      wrapper.classList.add('antd-sidebar-wrapper_last')
    }
  }, [visible])

  const handleVisibleChange = React.useCallback(
    (visible: boolean) => {
      const wrapper = contentRef.current?.closest('.ant-drawer')
        ?.parentNode as HTMLDivElement
      if (visible) {
        wrapper.classList.add('antd-sidebar-wrapper')
      }

      setOpen(visible)
    },
    []
  )

  useEffect(() => {
    if (destroyOnClose && !visible && !open) {
      setKey(Math.random())
    }
  }, [destroyOnClose, open, visible])

  const sidebarWidth = flex ? `calc(100% - ${cssConfig.flexMarginLeft}px)` : cssConfig.width

  return (
    <StyledSidebar
      className={cn(className, 'hexa-ui-sidebar', { 'no-padding': noPaddingContent })}
      key={key}
      maskStyle={{
        backgroundColor: cssConfig.mask.background,
        animation: 'none',
        transition: 'none'
      }}
      drawerStyle={{ backgroundColor: cssConfig.drawer.background }}
      afterVisibleChange={(visible) => {
        handleVisibleChange(visible)
        afterVisibleChange?.(visible)
      }}
      title={(
        <SidebarHeader
          title={title}
          subtitle={subtitle}
          prefix={titlePrefix}
          postfix={titlePostfix}
          headerActions={headerActions}
          onClose={handleClose}
          subHeader={subHeader}
          truncateTitle={truncateTitle}
          lineClamp={titleLineClamp}
          closeTestId={closeTestId}
        />
      )}
      closeIcon={null}
      width={sidebarWidth}
      onClose={handleClose}
      cssConfig={cssConfig}
      closable={false}
      keyboard={true}
      mask={mask}
      maskClosable={true}
      placement="right"
      visible={visible}
      zIndex={zIndex}
      push={false}
      footer={
        (footerLeft || footerRight)
          ? (
              <div>
                {footerLeft && (
                  <div className="antd-sidebar-footer-left">
                    {footerLeft}
                  </div>
                )}
                {footerRight && (
                  <div className="antd-sidebar-footer-right">
                    {footerRight}
                  </div>
                )}
              </div>
            )
          : undefined
      }
      {...testAttributes}
      {...rest}
    >
      <div className="antd-sidebar-content" ref={contentRef} {...getChildTestAttr('sidebar-content', testAttributes)}>
        {children}
      </div>
    </StyledSidebar>
  )
})
