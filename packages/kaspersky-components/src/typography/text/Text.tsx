import React, { forwardRef } from 'react'
import cn from 'classnames'
import { textLevels, textStyle } from '@design-system/tokens'
import { TextProps } from './types'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

export const TextTag = forwardRef<HTMLParagraphElement, TextProps>(({
  type = 'BTR3',
  themedColor,
  color,
  htmlTag,
  className,
  ...props
}, ref): JSX.Element => {
  const { testAttributes, ...rest } = useTestAttribute<TextProps>(props)

  return React.createElement(
    htmlTag || textStyle[textLevels[type]].htmlTag,
    {
      ref,
      className: cn(className, 'kl6-text'),
      ...testAttributes,
      ...rest
    }
  )
})
