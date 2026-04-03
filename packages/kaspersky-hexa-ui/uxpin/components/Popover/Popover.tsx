import React from 'react'

import { Popover as HexaPopover } from '@src/popover'
import { PopoverProps } from '@src/popover/types'

import { PreviewSurface } from '../../preview'

const Popover = ({
  children,
  content = 'Popover content',
  visible = true,
  ...props
}: PopoverProps): JSX.Element => (
  <PreviewSurface minHeight={140}>
    <HexaPopover content={content} visible={visible} {...props}>
      {children ?? <button type="button">Popover trigger</button>}
    </HexaPopover>
  </PreviewSurface>
)

export default Popover
