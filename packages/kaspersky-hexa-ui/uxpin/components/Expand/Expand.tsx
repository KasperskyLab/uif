import React from 'react'

import { Expand as HexaExpand } from '@src/expand'
import { ExpandProps } from '@src/expand/types'

import { previewLongText } from '../../preview'

const Expand = ({
  children = previewLongText,
  textToCollapse = 'Show less',
  textToExpand = 'Show more',
  ...props
}: ExpandProps): JSX.Element => (
  <HexaExpand
    textToCollapse={textToCollapse}
    textToExpand={textToExpand}
    {...props}
  >
    {children}
  </HexaExpand>
)

export default Expand
