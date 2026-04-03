import React from 'react'

import { HorizontalNav as HexaHorizontalNav } from '@src/horizontal-nav'
import { HorizontalNavProps } from '@src/horizontal-nav/types'

import { previewHorizontalNavItems } from '../../preview'

const HorizontalNav = ({
  activeKey = 'overview',
  items = previewHorizontalNavItems,
  ...props
}: HorizontalNavProps): JSX.Element => (
  <HexaHorizontalNav activeKey={activeKey} items={items} {...props} />
)

export default HorizontalNav
