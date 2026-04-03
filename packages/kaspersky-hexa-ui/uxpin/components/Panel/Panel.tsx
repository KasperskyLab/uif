import React from 'react'

import { Panel as HexaPanel } from '@src/panel'
import { PanelProps } from '@src/panel/types'

const Panel = ({
  children = 'Panel content',
  open = true,
  title = 'Panel title',
  ...props
}: PanelProps): JSX.Element => (
  <HexaPanel open={open} title={title} {...props}>
    {children}
  </HexaPanel>
)

export default Panel
