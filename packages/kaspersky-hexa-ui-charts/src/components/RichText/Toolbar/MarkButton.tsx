import React, { FC } from 'react'
import { useSlate } from 'slate-react'

import { Button } from '@kaspersky/hexa-ui'
import { Size } from '@kaspersky/hexa-ui/design-system'

import { isMarkActive } from '../helpers'
import { MarkButtonProps } from '../types'

import { toggleMark } from './helpers'

export const MarkButton: FC<MarkButtonProps> = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      isPressed={isMarkActive(editor, format)}
      onClick={() => toggleMark(editor, format)}
      size={Size.Small}
      mode="tertiary"
      iconBefore={icon}
    />
  )
}
