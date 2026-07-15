import { TestingProps } from '@helpers/typesHelpers'
import { Dropdown, DropdownProps } from '@src/dropdown'
import React, { CSSProperties } from 'react'
import { createPortal } from 'react-dom'

export type ContextMenuProps = Pick<DropdownProps, 'overlay'> & TestingProps

export type ContextMenuRef = {
  open: (event: React.MouseEvent<any, MouseEvent>) => void
}

export const ContextMenu: React.FC<ContextMenuProps & React.RefAttributes<ContextMenuRef>> = React.forwardRef((props, ref) => {
  const [triggerStyle, setTriggerStyle] = React.useState<CSSProperties>()
  const triggerRef = React.useRef<HTMLElement>(null)
  const unsubscribeRef = React.useRef<() => void>()

  React.useImperativeHandle(ref, () => ({
    open: (event) => {
      const onScroll = () => triggerRef.current!.click()
      document.addEventListener('scroll', onScroll, true)
      unsubscribeRef.current = () => document.removeEventListener('scroll', onScroll, true)

      setTriggerStyle({ position: 'absolute', left: event.pageX, top: event.pageY })
      triggerRef.current!.click()
    }
  }))

  return createPortal(
    <Dropdown
      {...props}
      onVisibleChange={visible => {
        if (!visible) {
          setTriggerStyle(undefined)
          unsubscribeRef.current?.()
        }
      }}
      selectedItemsKeys={[]}
      trigger={['click']}
      usePortal
    >
      <span ref={triggerRef} style={triggerStyle} />
    </Dropdown>,
    document.body
  )
})

ContextMenu.displayName = 'ContextMenu'
