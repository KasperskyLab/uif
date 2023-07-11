import React, { forwardRef } from 'react'
import { textLevels, textStyle } from '../../../design-system/tokens'
import { TextProps } from './types'

export const TextTag = forwardRef<HTMLParagraphElement, TextProps>((props, ref): JSX.Element => {
  const { type = 'BTM1', themedColor, klId, color, ...attr } = props

  const element = React.createElement(
    textStyle[textLevels[type || 'BTM1']].htmlTag,
    {
      ...attr,
      ref,
      'kl-id': klId
    }
  )

  return element
})
