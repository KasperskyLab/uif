import { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const SIDEBAR_ROOT_CLASS = 'hexa-ui-sidebar-root'

export const SidebarPortal: React.FC = ({ children }) => {
  const [container] = useState(() => {
    const element = document.createElement('div')
    element.className = SIDEBAR_ROOT_CLASS
    return element
  })

  useLayoutEffect(() => {
    document.body.append(container)
    return () => container.remove()
  }, [container])

  return createPortal(children, container)
}