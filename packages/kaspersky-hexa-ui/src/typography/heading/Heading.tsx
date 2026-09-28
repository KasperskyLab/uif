import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import React, { FC } from 'react'

import { textLevels, typography } from '@kaspersky/hexa-ui-core/typography/js'

import { HeadingProps } from './types'

export const HTag: FC<HeadingProps> = ({
  type = 'H1',
  themedColor,
  color,
  ...props
}) => {
  const { testAttributes, ...rest } = useTestAttribute(props)

  return React.createElement(
    typography[textLevels[type || 'H1']].htmlTag,
    {
      ...testAttributes,
      ...rest
    }
  )
}
