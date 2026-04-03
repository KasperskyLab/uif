import React from 'react'

import { Sidebar as HexaSidebar } from '@src/sidebar'
import { SidebarProps } from '@src/sidebar/types'

const Sidebar = ({
  children = 'Sidebar content',
  onClose = () => undefined,
  title = 'Sidebar',
  visible = true,
  ...props
}: SidebarProps): JSX.Element => (
  <HexaSidebar onClose={onClose} title={title} visible={visible} {...props}>
    {children}
  </HexaSidebar>
)

export default Sidebar
