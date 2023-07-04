import React, { FC, useState, useMemo, useEffect, useCallback } from 'react'
import { Label } from '../label'
import { Text } from '../typography'
import { Search } from '../search'
import { Tree } from '../tree'
import { Button } from '../button'
import { Loader } from '../loader'
import { useThemedTenantFilter } from './useThemedTenantFilter'
import styled from 'styled-components'

import {
  ITenantFilterProps,
  TenantFilterTreeDataItem,
  TenantFilterTreeDataMapItem,
  TenantFilterCssConfig
} from './types'

import { TreeCheckEvent } from '../tree/types'

import {
  tenantFilterTreeCss,
  FilterPanel,
  Header,
  Footer,
  TitleBox,
  CounterIconBox,
  CounterBox,
  SearchBox,
  TreeBox,
  SearchedString
} from './tenantFilterCss'
import { debounce } from 'lodash'
import { getSelectedTenantsIds, saveTenantsFilterDataInCookie } from './handlers/cookie-handlers'

const StyledTenantFilterTreeView = styled(Tree).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${tenantFilterTreeCss}`

export const TenantFilterView: FC<ITenantFilterProps & { cssConfig: TenantFilterCssConfig }> = ({
  titleText = '',
  counterText = '',
  buttonText = '',
  withButton = false,
  withSearch = true,
  withIcon = false,
  fetchTreeDataHandler,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyHandler = (keys: string[]) => undefined
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [tenantTreeData, setTenantTreeData] = useState<TenantFilterTreeDataItem[]>([])

  useEffect(() => {
    if (fetchTreeDataHandler) {
      const fetchTenantTreeData = async (): Promise<void> => {
        setIsLoading(true)
        const tenantTreeData = await fetchTreeDataHandler()
        setTenantTreeData(tenantTreeData)
        setIsLoading(false)
      }
      fetchTenantTreeData()
    }
  }, [fetchTreeDataHandler])

  // View of input data as a flat list
  const treeDataMap = useMemo(() => {
    const map = new Map()
    const loop = (parentKey: string, dataElements: TenantFilterTreeDataItem[]) => {
      for (const dataElement of dataElements) {
        const childrenKeys = dataElement.children?.map((child: TenantFilterTreeDataItem) => child.key)
        map.set(dataElement.key, {
          children: childrenKeys,
          parent: parentKey,
          title: dataElement.title
        })
        if (dataElement.children && dataElement.children.length > 0) {
          loop(dataElement.key, dataElement.children)
        }
      }
    }
    loop('', tenantTreeData)
    return map
  }, [tenantTreeData])

  const [treeCheckedKeys, setTreeCheckedKeys] = useState<string[]>([])
  const [expandedKeys, setExpandedKeys] = useState<string[]>([])

  const getAllKeys = useCallback((): string[] => Array.from(treeDataMap.keys()), [treeDataMap])

  useEffect(() => {
    const selectedTenantsIds = getSelectedTenantsIds()
    const allKeys = getAllKeys()
    const existingSelectedTenants = selectedTenantsIds.filter(
      (selectedTenantId) => allKeys.some(
        (tenantsId) => tenantsId === selectedTenantId
      )
    )
    if (existingSelectedTenants.length > 0) {
      setTreeCheckedKeys(existingSelectedTenants)
      setExpandedKeys(existingSelectedTenants)
      return
    }
    setTreeCheckedKeys(allKeys)
    setExpandedKeys(allKeys)
  }, [getAllKeys])

  const [searchValue, setSearchValue] = useState('')
  const [autoExpandParent, setAutoExpandParent] = useState(true)

  const checkChildren = (keys: string[], checkedKeys: Set<string>) => {
    keys.forEach((key) => {
      checkedKeys.add(key)
      const children = treeDataMap.get(key).children
      if (children?.length > 0) {
        checkChildren(children, checkedKeys)
      }
    })
  }

  const preparedApplyHandler = useCallback((updatedTreeCheckedKeys: string[]) => {
    applyHandler(updatedTreeCheckedKeys)
    saveTenantsFilterDataInCookie(updatedTreeCheckedKeys)
  }, [applyHandler])

  const debouncedApplyHandler = useMemo(() => debounce(preparedApplyHandler, 2000), [preparedApplyHandler])

  /* Specific check logic in the tree of this component:
   * when choosing a parent element - children are selected automatically
   * when deselecting a parent element, the children remain selected */
  const onCheckTree = (checkedInfo: [], event: TreeCheckEvent) => {
    const checkedKeys = new Set(treeCheckedKeys)
    const checkedNode = event.node
    if (!checkedNode.checked) {
      checkedKeys.add(checkedNode.key)
      const nodeChildren = treeDataMap.get(checkedNode.key).children
      if (nodeChildren?.length > 0) {
        checkChildren(nodeChildren, checkedKeys)
      }
    } else {
      if (treeCheckedKeys.length > 1) checkedKeys.delete(checkedNode.key)
    }
    const updatedTreeCheckedKeys = Array.from(checkedKeys.keys())
    setTreeCheckedKeys(updatedTreeCheckedKeys)
    debouncedApplyHandler(updatedTreeCheckedKeys)
  }

  // Required to expand the tree to the desired nested element
  const addParentKeys = (item: TenantFilterTreeDataMapItem, parentKeys: Set<string>) => {
    const parentKey = item.parent
    if (parentKey) {
      parentKeys.add(parentKey)
      const parent = treeDataMap.get(parentKey)
      addParentKeys(parent, parentKeys)
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

  // Additional data processing for search highlighting
  const processedTreeData = useMemo(() => {
    const loop = (data: TenantFilterTreeDataItem[]): Record<string, unknown>[] =>
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

    return loop(tenantTreeData)
  }, [searchValue, tenantTreeData])

  const renderTitle = () => {
    return (
      <TitleBox>
        <Label>
          <Text themedColor='primary-invert' type='BTM2'>{titleText}</Text>
        </Label>
      </TitleBox>
    )
  }

  const renderCounter = () => {
    return (
      <Label>
        <Text themedColor='primary-invert' type='BTR3'>{counterText}: {treeCheckedKeys.length}</Text>
      </Label>
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
          showLine={{ showLeafIcon: false }}
          treeData={processedTreeData}
          checkStrictly={true}
          onCheck={onCheckTree}
          checkedKeys={treeCheckedKeys}
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
        />
      </TreeBox>
    )
  }

  const renderButton = () => {
    return (
      <Footer>
        <Button text={buttonText} onClick={() => applyHandler(treeCheckedKeys)}/>
      </Footer>
    )
  }

  return (
  <FilterPanel>
    {renderHeader()}
    {
      isLoading
        ? <Loader centered={true}/>
        : <>
            {withSearch && renderSearch()}
            {renderTree()}
            {withButton && renderButton()}
          </>
    }
  </FilterPanel>
  )
}

export const TenantFilter = (rawProps: ITenantFilterProps): JSX.Element => {
  const props = useThemedTenantFilter(rawProps)
  return <TenantFilterView {...props} />
}
