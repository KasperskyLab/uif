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
   * Attached while rendering, because React runs a parent's layout effect *after* its children's, so a container attached from here
   * in an effect is still detached while everything inside the sidebar mounts.
   */
  if (!container.isConnected) document.body.append(container)

  useLayoutEffect(() => () => container.remove(), [container])

  return createPortal(children, container)
}