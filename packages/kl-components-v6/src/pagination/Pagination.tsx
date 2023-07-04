import React, { FC, KeyboardEventHandler, useState } from 'react'

import { Pagination as PaginationAntd } from 'antd'
import { SelectValue } from 'antd/es/select'
import styled from 'styled-components'
import { TFunction, useTranslation } from 'react-i18next'
import { containerCss, jumperCss, jumperTextCss, paginationCss, selectCss, textBoxCss, totalCss } from './paginationCss'
import { IPaginationProps, IPaginationViewProps } from './types'
import { useThemedPagination } from './useThemedPagination'
import { Text } from '../typography'
import { Link } from '../link'
import { Icon } from '../icon'
import { Select } from '../select'
import { Textbox } from '../input'
import { ITextboxProps } from '../input/types'

const PaginationContainer = styled.div`
  ${containerCss}
`

const StyledPagination = styled(PaginationAntd).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${paginationCss}
`

const StyledTotal = styled(Text)`
  ${totalCss}
`

const StyledSelect = styled(Select).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop as any)
})`
  ${selectCss}
`

const StyledTextbox = styled(Textbox)`
  ${textBoxCss}
`

const StyledJumper = styled.div`
  ${jumperCss}
`

const StyledJumperText = styled(Text)`
  ${jumperTextCss}
`

const renderTotal = (t: TFunction<'translation', undefined>) => (
  total = 0
) => {
  return (
    <StyledTotal
      data-component-id='total'
    >
      {t('pagination.total', { count: total })}
    </StyledTotal>
  )
}

const icons = {
  nextIcon: () => (
    <Link klId="next-page" >
      <Icon size='small' name='Right' />
    </Link>
  ),
  prevIcon: () => (
    <Link klId="previous-page">
      <Icon size='small' name='Left' />
    </Link>
  ),
  jumpNextIcon: () => (
    <Link klId="jump-next">
      <Text>…</Text>
    </Link>
  ),
  jumpPrevIcon: () => (
    <Link klId="jump-prev">
      <Text>…</Text>
    </Link>
  )
}

export const getPageSizeOptions = (t: TFunction<'translation', undefined>, pageSizeOptions: string[]) => pageSizeOptions.map((v) => ({
  label: `${v} / ${t('pagination.page')}`,
  value: parseInt(v)
}))

export const PaginationView: FC<IPaginationViewProps> = ({
  current = 1,
  pageSize = 10,
  pageSizeOptions = ['10', '20', '50', '100'],
  total = 0,
  onChange,
  onShowSizeChange: customOnShowSizeChange,
  showTotal,
  showSizeChanger,
  showQuickJumper,
  disabled,
  cssConfig,
  klId,
  hideOnSinglePage,
  simple,
  ...props
}) => {
  const { t } = useTranslation()
  const parsedPageSizeOptions = getPageSizeOptions(t, pageSizeOptions)
  const [jumperValue, setJumperValue] = useState<string>()

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

  const getValidValue = () => {
    const maxPage = Math.ceil(total / pageSize)
    return !jumperValue || Number.isNaN(jumperValue) || Number(jumperValue) <= 0
      ? 1
      : Math.min(Number(jumperValue), maxPage)
  }

  const handleQuickJumperChange = (value: string) => {
    setJumperValue(value)
  }

  const handleQuickJumperBlur = () => {
    if (jumperValue === '') {
      return
    }

    onChange?.(getValidValue(), pageSize)
  }

  const handleQuickJumperKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (jumperValue === '') {
      return
    }

    if (event.code === 'Enter' || event.type === 'click') {
      onChange?.(getValidValue(), pageSize)
    }
  }

  if (hideOnSinglePage && total <= pageSize) {
    return null
  }

  return (
    <PaginationContainer
      data-component-id={klId}
      cssConfig={cssConfig}
      aria-disabled={disabled}
    >
      <StyledPagination
        showTotal={showTotal || !simple ? renderTotal(t) : undefined}
        showQuickJumper={false}
        showSizeChanger={false}
        current={current}
        pageSize={pageSize}
        total={total}
        disabled={disabled}
        onChange={onChange}
        cssConfig={cssConfig}
        {...icons}
        {...props}
      />
      {(showSizeChanger || !simple) && (
        <StyledSelect
          data-component-id='select'
          value={pageSize}
          options={parsedPageSizeOptions}
          onChange={onShowSizeChange}
          disabled={disabled}
          isItemSelectedIconVisible={false}
          placement='topLeft'
          cssConfig={cssConfig}
          virtual={false}
        />
      )}
      {(showQuickJumper || !simple) && (
        <StyledJumper data-component-id='jumper'>
          <StyledJumperText type='BTR3'>{t('pagination.goto')}</StyledJumperText>
          <StyledTextbox
            placeholder='0'
            maskOptions={{
              mask: Number,
              lazy: false,
              overwrite: true,
              autofix: true
            }}
            disabled={disabled}
            value={jumperValue}
            onChange={handleQuickJumperChange as ITextboxProps['onChange']}
            onBlur={handleQuickJumperBlur}
            onKeyUp={handleQuickJumperKeyUp}
            cssConfig={cssConfig}
          />
        </StyledJumper>
      )}
    </PaginationContainer>
  )
}

export const Pagination: FC<IPaginationProps> = (props) => {
  const propsWithCssConfig = useThemedPagination(props)
  return <PaginationView {...propsWithCssConfig}/>
}
