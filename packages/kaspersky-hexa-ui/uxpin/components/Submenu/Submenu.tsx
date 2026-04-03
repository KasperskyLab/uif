import React from 'react'

import { Submenu as HexaSubmenu } from '@src/submenu'
import { SubmenuProps } from '@src/submenu/types'

import { previewSubmenuItems } from '../../preview'

const Submenu = ({
  defaultActiveKey = 'overview',
  items = previewSubmenuItems,
  ...props
}: SubmenuProps): JSX.Element => (
  <HexaSubmenu defaultActiveKey={defaultActiveKey} items={items} {...props} />
)

export default Submenu
