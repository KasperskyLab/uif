import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import cn from 'classnames'
import React, { FC } from 'react'

import styles from './TextDiff.module.scss'
import { textDiffModes, TextDiffProps } from './types'

const shouldRender = (text?: string) => text && text.length > 0

export const TextDiff: FC<TextDiffProps> = (props) => {
  const {
    testAttributes,
    theme,
    textType = 'BTR3',
    className
  } = useTestAttribute(props)

  return (
    <div
      className={cn(
        'hexa-ui-text-diff',
        getClassNameWithTheme(className, theme),
        styles.container
      )}
      {...testAttributes}
    >
      {textDiffModes.map(mode => {
        const text = props[`${mode}Text`]
        const { testAttributes: childTestAttributes } = useTestAttribute<any>(getChildTestProps(mode, testAttributes))
        return shouldRender(text) && React.createElement(
          mode === 'new' ? 'ins' : 'del',
          {
            key: mode,
            className: cn(
              styles.text,
              styles[mode],
              styles[textType.toLowerCase()]
            ),
            ...childTestAttributes
          },
          text
        )
      })}
    </div>
  )
}
