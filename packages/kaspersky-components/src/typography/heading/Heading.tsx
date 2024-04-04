import React, { FC } from 'react'
import { textLevels, textStyle } from '@design-system/tokens'
import { StyledHeading } from './Heading.styled'
import { HeadingProps } from './types'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

export const HTag: FC<HeadingProps> = ({
  type = 'H1',
  themedColor,
  color,
  ...props
}) => {
  const { testAttributes, ...rest } = useTestAttribute(props)

  return React.createElement(
    textStyle[textLevels[type || 'H1']].htmlTag,
    {
      ...testAttributes,
      ...rest
    }
  )
}

export { StyledHeading as Heading }
