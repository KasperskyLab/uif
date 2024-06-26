import React, { FC, useCallback, useMemo } from 'react'
import { Pagination as PaginationAntd } from 'antd'
import { SelectValue } from 'antd/es/select'
import styled from 'styled-components'
import { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'
import { containerCss, paginationCss } from './paginationCss'
import { PaginationProps, PaginationViewProps } from './types'
import { useThemedPagination } from './useThemedPagination'
import { Text } from '../typography'
import { ArrowLeft, ArrowRight } from '@kaspersky/icons/16'
import { Select } from '@src/select'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const PaginationContainer = styled.div`${containerCss}`

const StyledPagination = styled(PaginationAntd).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${paginationCss}
`

const StyledTotal = styled(Text)`
  white-space: nowrap;
`

const icons = {
  nextIcon: <ArrowRight/>,
  prevIcon: <ArrowLeft/>,
  jumpNextIcon: <>...</>,
  jumpPrevIcon: <>...</>
}

export const getPageSizeOptions = (t: TFunction<'translation', undefined>, pageSizeOptions: string[]) => pageSizeOptions.map((v) => ({
  label: `${v} / ${t('pagination.page')}`,
  value: parseInt(v)
}))

export const PaginationView: FC<PaginationViewProps> = ({
  current = 1,
  pageSize = 10,
  pageSizeOptions = ['10', '20', '50', '100'],
  total = 0,
  selected = 0,
  showSelected = true,
  onChange,
  onShowSizeChange: customOnShowSizeChange,
  showSizeChanger = false,
  disabled = false,
  cssConfig,
  hideOnSinglePage = false,
  simple = false,
  testAttributes,
  ...props
}: PaginationViewProps) => {
  if (hideOnSinglePage && total <= pageSize) {
    return null
  }

  const { t } = useTranslation()

  const getSummaryText = () => {
    const totalText = `${t('pagination.total', { count: total })}`
    if (!showSelected) return totalText

    const selectedText = `${t('pagination.selected', { count: selected })}`
    return `${totalText} / ${selectedText}`
  }

  const parsedPageSizeOptions = useMemo(() => (
    getPageSizeOptions(t, pageSizeOptions)
  ), [t, pageSizeOptions])

  const itemRender = useCallback((_, type, originalElement) => (
    type === 'page' ? <Text>{originalElement}</Text> : originalElement
  ), [])

  const onShowSizeChange = (pageSize: SelectValue) => {
    const pageSizeNum = Number(pageSize)
    let newCurrent = current
    if ((current * pageSizeNum) > total) {
      newCurrent = Math.ceil(total / pageSizeNum)
      onChange?.(newCurrent, pageSizeNum)
    }

    if (customOnShowSizeChange) {
      customOnShowSizeChange(newCurrent, pageSizeNum)
    }
  }

  return (
    <PaginationContainer
      aria-disabled={disabled}
      {...testAttributes}
    >
      {!simple && <StyledTotal testId='total'>
        {getSummaryText()}
      </StyledTotal>}
      {(
        <div className='kl6-pagination-right'>
          <StyledPagination
            showQuickJumper={false}
            showSizeChanger={false}
            itemRender={itemRender}
            current={current}
            pageSize={pageSize}
            total={total}
            showLessItems={true}
            disabled={disabled || (pageSize >= total)}
            onChange={onChange}
            cssConfig={cssConfig}
            {...icons}
            {...props}
          />
          {showSizeChanger && (
            <Select
              testId='select'
              value={pageSize}
              options={parsedPageSizeOptions}
              onChange={onShowSizeChange}
              disabled={disabled}
              placement='topLeft'
              virtual={false}
            />
          )}
        </div>
      )}
    </PaginationContainer>
  )
}

export const Pagination: FC<PaginationProps> = (rawProps: PaginationProps) => {
  const themedProps = useThemedPagination(rawProps)
  const props = useTestAttribute(themedProps)
  return <PaginationView {...props} />
}
