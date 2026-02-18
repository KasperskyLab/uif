import { THEME_CONFIG } from '@design-system/theme'
import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Key, TreeCheckEvent } from '@src/tree'
import debounce from 'lodash/debounce'
import isEmpty from 'lodash/isEmpty'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import { Button } from '../button'
import { Search } from '../search'
import { Tree } from '../tree'
import { Text } from '../typography'

import { getSelectedTenantsIds, getTreeDataMap, saveTenantsFilterDataInCookie } from './handlers/cookie-handlers'
import {
  CounterBox,
  CounterIconBox,
  FilterPanel,
  Footer,
  Header,
  SearchBox,
  SearchedString,
  tenantFilterTreeCss,
  TitleBox,
  TreeBox
} from './tenantFilterCss'
import { ProcessedTreeDataItem, TenantFilterProps, TenantFilterTreeDataItem, TenantFilterTreeDataMapItem } from './types'

const StyledTenantFilterTreeView = styled(Tree)`${tenantFilterTreeCss}`

export const TenantFilter: FC<TenantFilterProps> = ({
  className,
  theme,
  titleText = '',
  counterText = '',
  buttonText = '',
  withButton = false,
  withSearch = true,
  withIcon = false,
  data = [],
  defaultSelectedKeys,
  allTenantsKeys,
  applyHandler = () => undefined,
  ...props
}) => {
  const { testAttributes } = useTestAttribute(props)

  const treeDataMap = useMemo(() => getTreeDataMap(data), [data])
  const defaultExpandedKeys = useMemo(() => {
    return isEmpty(defaultSelectedKeys) ? allTenantsKeys : defaultSelectedKeys
  }, [defaultSelectedKeys, allTenantsKeys])

  const [treeCheckedKeys, setTreeCheckedKeys] = useState<string[]>(defaultSelectedKeys)
  const [expandedKeys, setExpandedKeys] = useState<string[]>(defaultExpandedKeys)
  const [searchValue, setSearchValue] = useState('')
  const [autoExpandParent, setAutoExpandParent] = useState(true)

  useEffect(() => {
    const onFocusHandler = (): void => {
      const selectedTenantsIds = getSelectedTenantsIds()

      setTreeCheckedKeys(selectedTenantsIds)
      applyHandler(selectedTenantsIds)
    }

    window.addEventListener('focus', onFocusHandler)

    return () => window.removeEventListener('focus', onFocusHandler)
  }, [applyHandler])

  const processChildren = (keys: string[], checkedKeys: Set<string>, action: 'add' | 'delete') => {
    keys.forEach((key) => {
      checkedKeys[action](key)
      const children = treeDataMap.get(key)?.children

      if (children && children.length > 0) {
        processChildren(children, checkedKeys, action)
      }
    })
  }

  const applyTenantsFilter = useCallback((updatedTreeCheckedKeys: string[]) => {
    saveTenantsFilterDataInCookie(updatedTreeCheckedKeys)
    applyHandler(updatedTreeCheckedKeys)
  }, [applyHandler])

  const debouncedApplyHandler = useMemo(() => debounce(applyTenantsFilter, 2000), [applyTenantsFilter])

  const onCheckTree = (_: Key[], event: TreeCheckEvent) => {
    const checkedKeys = new Set(treeCheckedKeys)
    const checkedNode = event.node
    const nodeChildren = treeDataMap.get(checkedNode.key)?.children
    const action = checkedNode.checked ? 'delete' : 'add'

    checkedKeys[action](checkedNode.key)

    if (nodeChildren && nodeChildren?.length > 0) {
      processChildren(nodeChildren, checkedKeys, action)
    }

    const updatedTreeCheckedKeys = Array.from(checkedKeys.keys())
    setTreeCheckedKeys(updatedTreeCheckedKeys)

    if (!withButton) {
      debouncedApplyHandler(updatedTreeCheckedKeys)
    }
  }

  // Необходимо для раскрытия дерева до искомого вложенного элемента
  const addParentKeys = (item: TenantFilterTreeDataMapItem, parentKeys: Set<string>) => {
    const parentKey = item.parent
    if (parentKey) {
      parentKeys.add(parentKey)
      const parent = treeDataMap.get(parentKey)
      addParentKeys(parent!, parentKeys)
    }
  }

  const onChangeSearch = (value: string) => {
    const parentKeys = new Set() as Set<string>
    const items = treeDataMap.values()
    for (const item of items) {
      if (item.title.toLowerCase().includes(value.toLowerCase())) {
        addParentKeys(item, parentKeys)
      }
    }

    setSearchValue(value)
    if (value) {
      setExpandedKeys(Array.from(parentKeys))
      setAutoExpandParent(true)
    }
  }

  const onExpand = (newExpandedKeys: string[]) => {
    setExpandedKeys(newExpandedKeys)
    setAutoExpandParent(false)
  }

  // Дополнительная обработка данных для подсветки поиском
  const processedTreeData = useMemo(() => {
    const loop = (data: TenantFilterTreeDataItem[]): ProcessedTreeDataItem[] =>
      data.map((item) => {
        const strTitle = item.title
        const index = strTitle.toLowerCase().indexOf(searchValue.toLowerCase())
        const beforeStr = strTitle.substring(0, index)
        const afterStr = strTitle.slice(index + searchValue.length)
        const searchStr = strTitle.substring(index, index + searchValue.length)
        const title = index > -1
          ? (
              <span>
                {beforeStr}
                <SearchedString>{searchStr}</SearchedString>
                {afterStr}
              </span>
            )
          : (
              <span>
                {item.title}
              </span>
            )

        if (item.children) {
          return {
            ...item,
            title,
            key: item.key,
            children: loop(item.children)
          }
        }

        return {
          ...item,
          title,
          key: item.key
        }
      })

    return loop(data)
  }, [searchValue, data])

  const renderTitle = () => {
    return (
      <TitleBox>
        <Text
          color="primary"
          type="BTM2"
          theme={theme ? THEME_CONFIG[theme] : undefined}
        >
          {titleText}
        </Text>
      </TitleBox>
    )
  }

  const renderCounter = () => {
    return (
      <Text
        testId={`${props.testId}-counter`}
        color="primary"
        type="BTR3"
        theme={theme ? THEME_CONFIG[theme] : undefined}
      >
        {counterText}: {treeCheckedKeys.length}
      </Text>
    )
  }

  const renderHeader = () => {
    return (
      <Header>
        {titleText && renderTitle()}
        {counterText && withIcon && <CounterIconBox>{renderCounter()}</CounterIconBox>}
        {counterText && !withIcon && <CounterBox>{renderCounter()}</CounterBox>}
      </Header>
    )
  }

  const renderSearch = () => {
    return (
      <SearchBox>
        <Search
          testId="tenant-filter-search"
          klId="kl-tenant-filter-search"
          value={searchValue}
          // @ts-ignore
          onChange={onChangeSearch}
          onClearClick={() => onChangeSearch('')}
        />
      </SearchBox>
    )
  }

  const renderTree = () => {
    return (
      <TreeBox>
        <StyledTenantFilterTreeView
          checkable={true}
          treeData={processedTreeData}
          onCheck={onCheckTree}
          checkedKeys={treeCheckedKeys}
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          testId={`${props.testId}-tree`}
          checkStrictly={true}
        />
      </TreeBox>
    )
  }

  const renderButton = () => {
    return (
      <Footer>
        <Button
          onClick={() => applyTenantsFilter(treeCheckedKeys)}
          testId={`${props.testId}-apply-filter`}
          text={buttonText}
        />
      </Footer>
    )
  }

  return (
    <FilterPanel
      className={getClassNameWithTheme(className, theme)}
      {...testAttributes}
    >
      {renderHeader()}
      {withSearch && renderSearch()}
      {data && renderTree()}
      {withButton && renderButton()}
    </FilterPanel>
  )
}
