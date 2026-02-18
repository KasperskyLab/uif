import { ActionButton } from '@src/action-button'
import { Checkbox } from '@src/checkbox'
import { Loader } from '@src/loader'
import { Text } from '@src/typography'
import { Empty } from 'antd'
import cn from 'classnames'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { v1 as uuidV1 } from 'uuid'

import { ArrowDown1, StatusDangerOutline1 } from '@kaspersky/hexa-ui-icons/16'

import { IconSearch } from '../search/IconSearch'

import { StyledErrorWrapper } from './selectCss'
import { LabelValue, SelectCssConfig, SelectProps } from './types'

export const createUniqueSelectElementFromLabel = (label?: LabelValue): Exclude<LabelValue, string> => {
  if (typeof label !== 'object' && typeof label !== 'number') {
    return {
      label: label,
      value: uuidV1(),
      key: uuidV1()
    }
  }
  return label
}

export const prepareValues = (value: SelectProps['value'], allowNonUniqueValues?: boolean, mode?: SelectProps['mode']): SelectProps['value'] => {
  if (value == null || !allowNonUniqueValues || mode !== 'tags') {
    return value
  }

  if (Array.isArray(value)) {
    return value.map(createUniqueSelectElementFromLabel)
  }

  return [createUniqueSelectElementFromLabel(value)]
}

export const addNewValue = (currenValue: LabelValue[], newValue: unknown) => {
  if (Array.isArray(newValue)) {
    let addedElement: LabelValue = newValue[newValue.length - 1]
    if (typeof addedElement !== 'object' && typeof addedElement !== 'number') {
      addedElement = {
        label: addedElement,
        value: uuidV1(),
        key: uuidV1()
      }
    }
    return [...currenValue, addedElement]
  }
  return newValue
}

export const removeValue = (currenValue: SelectProps['value'], newValue: unknown) => {
  if (Array.isArray(newValue) && Array.isArray(currenValue)) {
    const localCurrentValue = [...currenValue]
    if (newValue.length === 0) {
      return []
    }
    const removedIndex = localCurrentValue.findIndex((el, i) => {
      if (typeof el === 'object') return newValue[i] !== el?.value
      return newValue[i] !== el
    })
    localCurrentValue.splice(removedIndex, 1)
    return localCurrentValue
  }
  return newValue
}

export const findScrollableParent = (node: ParentNode | Element | null): Element | null => {
  while (node) {
    if (
      node instanceof Element &&
      (window.getComputedStyle(node).overflow === 'auto' ||
        window.getComputedStyle(node).overflow === 'scroll')
    ) {
      return node
    }
    node = (node as Node).parentNode
  }
  return null
}

export const EmptyData = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<Text type="BTR3">{t('select.empty')}</Text>}
      className="ant-empty-small"
      data-testid="select-no-data"
      kl-id="empty-data"
    />
  )
}

export const ChevronIcon = (): JSX.Element => (
  <ArrowDown1
    testId="select-chevron-icon"
    klId="down-icon"
  />
)

export const SearchIcon = (): JSX.Element => (
  <IconSearch
    testId="select-search-icon"
    klId="search-icon"
  />
)

export const ClearIcon = (): JSX.Element => (
  <ActionButton
    mode="filled"
    testId="select-clear-search-icon"
    klId="clear-icon"
  />
)

interface LoadingTriggerProps {
  onLoad(): void
}

export function LoadingTrigger ({ onLoad }: LoadingTriggerProps): JSX.Element {
  useEffect(() => {
    onLoad()
  }, [onLoad])

  return <Loader centered testId="select-option-loading-more" />
}

interface LoadingErrorContentProps {
  cssConfig: SelectCssConfig,
  children: React.ReactNode
}

export function LoadingErrorContent ({ cssConfig, children }: LoadingErrorContentProps): JSX.Element {
  return (
    <StyledErrorWrapper cssConfig={cssConfig}>
      <StatusDangerOutline1/>
      <div>{children}</div>
    </StyledErrorWrapper>
  )
}

export const MultiSelectCheckBox = styled(({ className }) => (
  <div className={cn('dropdown-v6-multi-checkbox', className)}>
    <Checkbox
      className="dropdown-v6-multi-checkbox-unchecked"
      checked={false}
    />
    <Checkbox className="dropdown-v6-multi-checkbox-checked" checked />
  </div>
))`
  width: 18px;
  height: 22px;
  display: inline-flex;

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }

  .ant-checkbox {
    top: 4px;
  }

  .ant-select-item-option.ant-select-item-option-selected & .dropdown-v6-multi-checkbox-unchecked,
  .ant-select-item-option:not(.ant-select-item-option-selected) & .dropdown-v6-multi-checkbox-checked {
    display: none;
  }
`
