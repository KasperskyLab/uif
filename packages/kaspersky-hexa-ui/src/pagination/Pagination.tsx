import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Select } from '@src/select'
import { Text } from '@src/typography'
import { Pagination as PaginationAntd, PaginationProps as PaginationAntdProps } from 'antd'
import { SelectValue } from 'antd/es/select'
import { TFunction } from 'i18next'
import React, { FC, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { ArrowLeft, ArrowRight } from '@kaspersky/hexa-ui-icons/16'

import { containerCss, pageContainerCss, paginationCss, selectCss } from './paginationCss'
import { TotalSummary } from './TotalSummary'
import { PaginationProps, PaginationViewProps } from './types'
import { useThemedPagination } from './useThemedPagination'

const PaginationContainer = styled.div`${containerCss}`
const PageContainer = styled.span`${pageContainerCss}`

const StyledPagination = styled(PaginationAntd).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${paginationCss}
`

const StyledSelect = styled(Select)`${selectCss}`

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

const DisabledPage = ({ pageNumber }: { pageNumber: number }) => (
  <PageContainer onClick={(e) => { e.stopPropagation() }} aria-disabled={true}>
    {pageNumber}
  </PageContainer>
)

const CURSOR_PAGINATION_MIN_PAGE_COUNT = 8

const PaginationView: FC<PaginationViewProps> = ({
  current = 1,
  pageSize = 10,
  pageSizeOptions = ['10', '20', '50', '100'],
  total = 0,
  totalRoot,
  selected = 0,
  showSelected = true,
  onChange,
  onShowSizeChange: customOnShowSizeChange,
  showSizeChanger = false,
  jumper = false,
  disabled = false,
  cssConfig,
  hideOnSinglePage = false,
  cursor = false,
  simple = false,
  testAttributes,
  ...props
}: PaginationViewProps) => {
  const _totalRoot = totalRoot || total

  if (hideOnSinglePage && _totalRoot <= pageSize) {
    return null
  }

  const { t } = useTranslation()

  useEffect(() => {
    const goToInput = document.querySelector('.ant-pagination-options-quick-jumper input') as HTMLInputElement
    goToInput && goToInput.setAttribute('type', 'number')
  }, [])

  const parsedPageSizeOptions = useMemo(() => (
    getPageSizeOptions(t, pageSizeOptions)
  ), [t, pageSizeOptions])

  const itemRender: PaginationAntdProps['itemRender'] = (pageNumber, type, originalElement) => {
    const shouldEnableCursor = (
      cursor &&
      pageNumber >= CURSOR_PAGINATION_MIN_PAGE_COUNT &&
      pageNumber === Math.ceil(_totalRoot / Number(pageSize)) &&
      (pageNumber - current > 3)
    )

    return type === 'page'
      ? (shouldEnableCursor
          ? <DisabledPage pageNumber={pageNumber} />
          : <Text>{originalElement}</Text>)
      : originalElement
  }

  const onShowSizeChange = (pageSize: SelectValue) => {
    const pageSizeNum = Number(pageSize)
    let newCurrent = current
    if ((current * pageSizeNum) > _totalRoot) {
      newCurrent = Math.ceil(_totalRoot / pageSizeNum)
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
      {!simple && <TotalSummary total={total} showSelected={showSelected} selected={selected} testId="total" klId="total" />}
      <div className="kl6-pagination-right">
        {!(hideOnSinglePage && total <= pageSize) && (
          <StyledPagination
            showQuickJumper={jumper}
            showSizeChanger={false}
            itemRender={itemRender}
            current={current}
            pageSize={pageSize}
            total={_totalRoot}
            showLessItems={true}
            disabled={disabled || (pageSize >= total)}
            onChange={onChange}
            cssConfig={cssConfig}
            locale={{ jump_to: t('pagination.goto') || 'Go to page', page: '' }}
            {...icons}
            {...props}
          />
        )}
        {showSizeChanger && (
          <StyledSelect
            testId="select"
            value={pageSize}
            options={parsedPageSizeOptions}
            onChange={onShowSizeChange}
            disabled={disabled}
            placement="topLeft"
            virtual={false}
          />
        )}
      </div>
    </PaginationContainer>
  )
}

export const Pagination: FC<PaginationProps> = (rawProps: PaginationProps) => {
  const themedProps = useThemedPagination(rawProps)
  const props = useTestAttribute(themedProps)
  return <PaginationView {...props} />
}
