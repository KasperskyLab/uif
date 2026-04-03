import React from 'react'

import { Tooltip as HexaTooltip } from '@src/tooltip'
import { TooltipProps } from '@src/tooltip/types'

import { PreviewSurface } from '../../preview'

const Tooltip = ({
  children,
  text = 'Tooltip content',
  visible = true,
  ...props
}: TooltipProps): JSX.Element => (
  <PreviewSurface minHeight={140}>
    <HexaTooltip text={text} visible={visible} {...props}>
      {children ?? <button type="button">Tooltip trigger</button>}
    </HexaTooltip>
  </PreviewSurface>
)

export default Tooltip
