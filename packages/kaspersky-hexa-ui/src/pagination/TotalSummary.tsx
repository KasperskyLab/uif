import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { TestingProps } from '@helpers/typesHelpers'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { Text } from '../typography'

const StyledTotal = styled(Text)`
  white-space: nowrap;
`

type TotalSummaryProps = {
  total: number,
  selected?: number,
  showSelected?: boolean
} & TestingProps

export const TotalSummary: FC<TotalSummaryProps> = (props) => {
  const { total, selected, showSelected, testAttributes } = useTestAttribute(props)
  const { t } = useTranslation()

  const totalText = `${t('pagination.total', { count: total })}`
  return (
    <StyledTotal {...testAttributes}>
      {!showSelected ? totalText : `${totalText} / ${t('pagination.selected', { count: selected })}`}
    </StyledTotal>
  )
}
