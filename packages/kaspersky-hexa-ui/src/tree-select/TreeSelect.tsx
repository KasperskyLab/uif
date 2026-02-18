import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ChevronIcon, ClearIcon, EmptyData, SearchIcon } from '@src/select/helpers'
import { maxTagPlaceholder } from '@src/select/Select'
import { Tag } from '@src/tag'
import { TreeNodeCheckIcon } from '@src/tree/Tree'
import { TreeNodeProps, TreeSelect as TreeSelectAntd, TreeSelectProps as TreeSelectAntdProps } from 'antd'
import cn from 'classnames'
import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import { ArrowDownSolid } from '@kaspersky/hexa-ui-icons/8'

import { treeSelectCss } from './treeSelectCss'
import { TreeSelectProps } from './types'
import { useThemedTreeSelect } from './useThemedTreeSelect'

type TreeData = NonNullable<TreeSelectAntdProps['treeData']>

function addCustomCheckIcon (treeData: TreeData): TreeData {
  return treeData.map(x => ({
    ...x,
    children: x.children && addCustomCheckIcon(x.children),
    icon: (props: TreeNodeProps) => {
      return <TreeNodeCheckIcon {...props} multiple />
    }
  }))
}

const StyledTreeSelectView = styled(TreeSelectAntd).withConfig({
  shouldForwardProp: prop => !['cssConfig', 'validationStatus'].includes(prop)
})`${treeSelectCss}`

const TreeSelectComponent: FC<TreeSelectProps> = (props: TreeSelectProps) => {
  const {
    className,
    disabled,
    dropdownClassName,
    getPopupContainer,
    searchValue,
    testAttributes,
    treeCheckable,
    treeData,
    validationStatus = 'default',
    ...rest
  } = useTestAttribute(useThemedTreeSelect(props))

  const newTreeData = React.useMemo(
    () => treeCheckable && treeData ? addCustomCheckIcon(treeData) : treeData,
    [treeCheckable, treeData]
  )
  const [search, setSearch] = useState<string>(searchValue ?? '')

  useEffect(()=>{
    setSearch(searchValue ?? '')
  },[searchValue])

  const handleSearchChange = (query: string) =>{
    setSearch(query)
    props.onSearch?.(query)
  }

  return (
    <StyledTreeSelectView
      className={cn(className, {
        'select-show-search': props.showSearch,
        'has-non-empty-search': props.showSearch && search.length > 0
      })}
      searchValue={searchValue}
      onSearch={handleSearchChange}
      clearIcon={<ClearIcon />}
      disabled={disabled}
      virtual={false}
      dropdownClassName={cn('dropdown-custom', { 'dropdown-loading': props.loading }, dropdownClassName)}
      getPopupContainer={getPopupContainer ?? (triggerNode => triggerNode.parentElement)}
      maxTagPlaceholder={maxTagPlaceholder}
      notFoundContent={<EmptyData />}
      suffixIcon={
        props.showSearch
          ? (!search ? <SearchIcon/> : null)
          : <ChevronIcon/>
      }
      switcherIcon={<ArrowDownSolid />}
      tagRender={props => <Tag {...props} disabled={disabled} />}
      treeCheckable={treeCheckable}
      treeData={newTreeData}
      treeIcon
      validationStatus={validationStatus}
      {...testAttributes}
      {...rest}
    />
  )
}

export const TreeSelect = WithGlobalStyles(TreeSelectComponent)
