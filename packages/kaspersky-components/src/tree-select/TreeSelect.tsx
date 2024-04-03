import React, { FC } from 'react'
import { TreeSelectProps } from './types'
import { TreeSelect as TreeSelectAntd, TreeSelectProps as TreeSelectAntdProps, TreeNodeProps } from 'antd'
import styled from 'styled-components'
import { ArrowDownSolid } from '@kaspersky/icons/8'
import { treeSelectCss } from './treeSelectCss'
import { useThemedTreeSelect } from './useThemedTreeSelect'
import cn from 'classnames'
import { ChevronIcon, ClearIcon, EmptyData, SearchIcon, maxTagPlaceholder } from '@src/select/Select'
import { TreeNodeCheckIcon } from '@src/tree/Tree'
import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Tag } from '@src/tag'

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
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${treeSelectCss}`

export const TreeSelectComponent: FC<TreeSelectProps> = ({
  disabled,
  dropdownClassName,
  getPopupContainer,
  treeCheckable,
  treeData,
  ...rest
}: TreeSelectProps) => {
  const themedProps = useThemedTreeSelect(rest)
  const { testAttributes, ...props } = useTestAttribute(themedProps)

  const newTreeData = React.useMemo(
    () => treeCheckable && treeData ? addCustomCheckIcon(treeData) : treeData,
    [treeCheckable, treeData]
  )

  return (
    <StyledTreeSelectView
      clearIcon={<ClearIcon />}
      disabled={disabled}
      dropdownClassName={cn('dropdown-custom', { 'dropdown-loading': props.loading }, dropdownClassName)}
      getPopupContainer={getPopupContainer ?? (triggerNode => triggerNode.parentElement)}
      maxTagPlaceholder={maxTagPlaceholder}
      notFoundContent={<EmptyData />}
      suffixIcon={props.showSearch ? <SearchIcon /> : <ChevronIcon />}
      switcherIcon={<ArrowDownSolid />}
      tagRender={props => <Tag {...props} disabled={disabled} />}
      treeCheckable={treeCheckable}
      treeData={newTreeData}
      treeIcon
      {...testAttributes}
      {...props}
    />
  )
}

export const TreeSelect = WithGlobalStyles(TreeSelectComponent)
