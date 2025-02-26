import { SPACES } from '@design-system/theme/themes/variables'
import { Chip } from '@src/chip'
import { Link } from '@src/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

export interface FilterItemTagProps {
  text?: string,
  counter?: number,
  onClose?: (e?: React.MouseEvent<HTMLElement>) => void,
  testId?: string
}

const StyledFilterItems = styled.div`
  display: none;
  
  &:has(.ant-tag:not(.ant-tag-hidden)) {
    display: flex;
    flex-wrap: wrap;
    gap: ${SPACES[3]}px;
    align-items: center;
  }
`

const StyledClearLink = styled(Link)`
  margin: 0 ${SPACES[2]}px;
`

export const FilterItems = (props: {
  items?: FilterItemTagProps[] | undefined,
  onClear?: () => void,
  clearLinkText?: string }
) => {
  const { t } = useTranslation()
  return <StyledFilterItems>
    {
      props.items?.map((item: FilterItemTagProps, i) => (
        <Chip key={i} {...item} />
      ))
    }
    {
      props.items?.length && <StyledClearLink onClick={props.onClear}>
        {props.clearLinkText || t('table.columnsSettings.clear')}
      </StyledClearLink>
    }
  </StyledFilterItems>
}
