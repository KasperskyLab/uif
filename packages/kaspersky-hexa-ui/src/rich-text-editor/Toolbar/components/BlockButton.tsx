import { Size } from '@design-system/types'
import { ToggleButton } from '@src/toggle-button'
import React from 'react'
import { useSlate } from 'slate-react'

import { isBlockStyleType } from '../../helpers/typeGuards'
import { BlockButtonProps } from '../../types'
import { isBlockActive, toggleBlockWithRelatedLeafs } from '../helpers'

import { ToolbarButtonWrapper } from './ToolbarButtonWrapper'

export const BlockButton = ({ format, icon, flatPlugins }: BlockButtonProps) => {
  const editor = useSlate()
  const isSelected = isBlockActive(editor, format, isBlockStyleType(format) ? 'style' : 'type')

  const handleClick = () => {
    toggleBlockWithRelatedLeafs(editor, format, flatPlugins || [])
  }

  return (
    <ToolbarButtonWrapper onClick={handleClick}>
      <ToggleButton
        selected={isSelected}
        size={Size.ExtraSmall}
        iconBefore={icon}
        value=""
      />
    </ToolbarButtonWrapper>
  )
}
