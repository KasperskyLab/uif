import React, { FC } from 'react'
import { Decoration } from 'react-diff-view'
import { useTranslation } from 'react-i18next'

import { ExpandAll, ExpandDown, ExpandUp } from '@kaspersky/hexa-ui-icons/16'

import { Button } from './ExpandButtonCss'

interface ExpandButtonProps {
  direction: 'up' | 'down' | 'center',
  start: number,
  lines: number,
  expandLines: number,
  onExpand: (start: number, end: number) => void
}

export const ExpandButton: FC<ExpandButtonProps> = ({ direction, start, lines, expandLines, onExpand }) => {
  const { t } = useTranslation()

  const handleClick = () => {
    if (direction === 'up' || direction === 'center') {
      const minLine = Math.max(1, start - expandLines)
      onExpand(minLine, start)
    } else {
      onExpand(start + lines, start + lines + expandLines)
    }
  }

  return (
    <Decoration>
      <Button
        onClick={handleClick}
        icon={direction === 'up' ? <ExpandUp /> : direction === 'down' ? <ExpandDown /> : <ExpandAll />}
      >
        {t('codeCompare.expandLines', { count: expandLines })}
      </Button>
    </Decoration>
  )
}
