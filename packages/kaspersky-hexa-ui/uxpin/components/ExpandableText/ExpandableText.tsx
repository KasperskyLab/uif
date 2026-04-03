import React from 'react'

import { ExpandableText as HexaExpandableText } from '@src/expandable-text'
import { ExpandableTextProps } from '@src/expandable-text/types'

import { previewLongText } from '../../preview'

const ExpandableText = ({
  children = previewLongText,
  altText = 'Toggle text visibility',
  ...props
}: ExpandableTextProps): JSX.Element => (
  <HexaExpandableText altText={altText} {...props}>
    {children}
  </HexaExpandableText>
)

export default ExpandableText
