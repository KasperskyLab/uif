import React, { PropsWithChildren, ReactElement, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { Select as AntdSelect, Empty } from 'antd'
import { useTranslation } from 'react-i18next'
import { useThemedSelect } from './useThemedSelect'
import { selectCss } from './selectCss'
import { ISelectProps, ISelectViewProps } from './types'

import AntdSelectRef from 'antd/lib/select'

import { Loader } from '../loader'
import { Icon } from '../icon'
import { Divider } from '../divider'
import { Tag } from '../tag'
import { Text } from '../typography'
import { TagProps } from '../tag/types'

type SelectRef = typeof AntdSelectRef;

const StyledSelect = styled(AntdSelect).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${selectCss}`

const EmptyData = () => {
  const { t } = useTranslation()
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<Text type='BTR3'>{t('select.empty')}</Text>}
      className='ant-empty-small'
      kl-id='empty-data'
    />
  )
}

export const SelectView = React.forwardRef<SelectRef, ISelectViewProps>((props, ref: any) => {
  const {
    loading = false,
    showArrow = true,
    cssConfig,
    disabled = false,
    error = false,
    klId,
    getPopupContainer,
    renderFooter,
    renderHeader,
    renderDropdown,
    dropdownClassName,
    placement = 'bottomLeft',
    isItemSelectedIconVisible = true,
    showSearch = false,
    allowClear = false,
    autoClearSearchValue = true,
    autoFocus = false,
    virtual = true,
    optionFilterProp = 'label',
    placeholder,
    ...rest
  } = props

  const renderDropdownMenu = useCallback((menu: ReactElement) => {
    if (loading) {
      return (
        <div kl-id='dropdown-menu'>
          <Loader centered klId='loader' />
        </div>
      )
    }

    return (
      <div kl-id='dropdown-menu'>
        {renderHeader && (
          <>
            {renderHeader()}
            <Divider margin={0} mode='light' />
          </>
        )}
        {menu}
        {renderFooter && (
          <>
            <Divider margin={0} mode='light' />
            {renderFooter()}
          </>
        )}
      </div>
    )
  }, [renderFooter, renderHeader, loading])

  const dropdownAlignTop = useMemo(() => {
    const alignTop = cssConfig.normal.dropdown.alignTop

    if (placement?.includes('top')) {
      return -alignTop
    }

    return alignTop
  }, [placement, cssConfig])

  return (
    // broken type infer because of styled components
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <StyledSelect
      className={cn({
        'ant-select-error': error && !disabled
      })}
      kl-id={klId}
      ref={ref}
      dropdownClassName={cn('dropdown-custom', { 'dropdown-loading': loading }, dropdownClassName)}
      getPopupContainer={getPopupContainer ?? (triggerNode => triggerNode.parentElement)}
      dropdownRender={renderDropdown || renderDropdownMenu}
      notFoundContent={<EmptyData />}
      clearIcon={<Icon name='ClearText' size='small' klId='clear-icon' color={cssConfig.normal.icon.color} />}
      suffixIcon={
        <Icon
          name='Down'
          size='small'
          color={disabled ? cssConfig.disabled.color : cssConfig.normal.icon.color}
          klId='down-icon'
        />
      }
      showArrow={showArrow}
      disabled={disabled}
      aria-disabled={disabled}
      menuItemSelectedIcon={isItemSelectedIconVisible &&
        <Icon name='Check' size='small' klId='item-selected-icon' color={cssConfig.normal.icon.color} />
      }
      cssConfig={cssConfig}
      dropdownAlign={{
        offset: [0, dropdownAlignTop]
      }}
      // @ts-ignore
      placement={placement}
      showSearch={showSearch}
      tagRender={props => <Tag {...props as TagProps} disabled={disabled} />}
      allowClear={allowClear}
      autoClearSearchValue={autoClearSearchValue}
      autoFocus={autoFocus}
      loading={loading}
      virtual={virtual}
      optionFilterProp={optionFilterProp}
      placeholder={placeholder}
      {...rest}
    />
  )
})

export interface CompoundedSelectComponent extends React.ForwardRefExoticComponent<PropsWithChildren<ISelectProps> & React.RefAttributes<HTMLSelectElement>> {
  Option?: typeof AntdSelect.Option,
  OptGroup?: typeof AntdSelect.OptGroup
}

export const Select = React.forwardRef<SelectRef, PropsWithChildren<ISelectProps>>((props, ref) => {
  const behavior = useThemedSelect(props)
  return <SelectView {...behavior} ref={ref} />
}) as CompoundedSelectComponent

Select.Option = AntdSelect.Option
Select.OptGroup = AntdSelect.OptGroup
