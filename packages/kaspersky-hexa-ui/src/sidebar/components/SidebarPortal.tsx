import { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const SIDEBAR_ROOT_CLASS = 'hexa-ui-sidebar-root'

export const SidebarPortal: React.FC = ({ children }) => {
  const [container] = useState(() => {
    const element = document.createElement('div')
    element.className = SIDEBAR_ROOT_CLASS
    return element
  })

  /**
   * Attached while rendering, not from an effect.
   *
   * React runs a parent's layout effect *after* its children's, so a container attached from here
   * in an effect is still detached while everything inside the sidebar mounts. Anything in there
   * that looks itself up in the document on mount then misses: the column selector asks
   * `document.querySelector('.table-settings-sidebar .ant-drawer-body')` from `componentDidMount`
   * to find what scrolls, gets nothing, falls back to `document.body`, and hangs its drag listeners
   * and its auto-scroller on the page instead of on the sidebar — so dragging a column stopped
   * working the moment the sidebar itself was scrolled.
   *
   * Guarded by `isConnected` rather than done once: it has to survive a remount, and it must not
   * append a second time on a re-render.
   */
  if (!container.isConnected) document.body.append(container)

  useLayoutEffect(() => () => container.remove(), [container])

  return createPortal(children, container)
}