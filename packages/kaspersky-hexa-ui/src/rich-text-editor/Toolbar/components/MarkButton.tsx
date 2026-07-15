import { Size } from '@design-system/types'
import { ToggleButton } from '@src/toggle-button'
import React from 'react'
import { useSlate } from 'slate-react'

import { isMarkActive } from '../../helpers/isMarkActive'
import { MarkButtonProps } from '../../types'
import { toggleMark } from '../helpers'

import { ToolbarButtonWrapper } from './ToolbarButtonWrapper'

export const MarkButton = ({ format, icon }: MarkButtonProps) => {
  const editor = useSlate()
  const isSelected = isMarkActive(editor, format)

  return (
    <ToolbarButtonWrapper onClick={() => toggleMark(editor, format)}>
      <ToggleButton
        selected={isSelected}
        size={Size.ExtraSmall}
        iconBefore={icon}
        value=""
      />
    </ToolbarButtonWrapper>
  )
}
