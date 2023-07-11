import React from 'react'
import { textLevels, textStyle } from '../../../design-system/tokens'
import { StyledHeading } from './Heading.styled'
import { HeadingProps } from './types'

export const HTag: React.FC<HeadingProps> = (
  props: HeadingProps
): JSX.Element => {
  const { type = 'H1', themedColor, klId, color, ...attr } = props

  const element = React.createElement(
    textStyle[textLevels[type || 'H1']].htmlTag,
    {
      ...attr,
      'kl-id': klId
    }
  )

  return element
}

export { StyledHeading as Heading }
