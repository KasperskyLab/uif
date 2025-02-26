import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import cn from 'classnames'
import React, { forwardRef } from 'react'

import { textLevels, typography } from '@kaspersky/hexa-ui-core/typography/js'

import { TextProps } from './types'

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
    htmlTag || typography[textLevels[type]].htmlTag,
    {
      ref,
      className: cn(className, 'kl6-text'),
      ...testAttributes,
      ...rest
    }
  )
})
