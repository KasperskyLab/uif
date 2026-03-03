import React, { FC } from 'react'
import { useSlate } from 'slate-react'

import { Button } from '@kaspersky/hexa-ui'
import { Size } from '@kaspersky/hexa-ui/design-system'

import { isBlockStyleType } from '../helpers'
import { BlockButtonProps } from '../types'

import { isBlockActive, toggleBlock } from './helpers'

export const BlockButton: FC<BlockButtonProps> = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      isPressed={isBlockActive(editor, format, isBlockStyleType(format) ? 'style' : 'type')}
      onClick={() => toggleBlock(editor, format)}
      size={Size.Small}
      mode="tertiary"
      iconBefore={icon}
    />
  )
}
