import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Chip } from '@src/chip'
import { Link } from '../../../link/Link'
import {
  SPACES
} from '../../../../design-system/theme/themes/variables'

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
  
  margin: ${SPACES[8]}px 0;
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
      props.items?.map((item: FilterItemTagProps, i) => {
        return <Chip key={i} onClose={item.onClose} label={item.text} testId={item.testId} counter={item?.counter} />
      })
    }
    {
      props.items?.length && <StyledClearLink onClick={props.onClear}>
        {props.clearLinkText || t('table.columnsSettings.clear')}
      </StyledClearLink>
    }
  </StyledFilterItems>
}
