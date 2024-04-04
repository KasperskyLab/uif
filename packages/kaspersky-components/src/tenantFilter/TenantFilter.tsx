import React, { FC, useState, useMemo, useCallback, useEffect } from 'react'
import { Label } from '../label'
import { Text } from '../typography'
import { Search } from '../search'
import { Tree } from '../tree'
import { Button } from '../button'
import { useThemedTenantFilter } from './useThemedTenantFilter'
import styled from 'styled-components'
import { TenantFilterProps, TenantFilterViewProps, TenantFilterTreeDataItem, TenantFilterTreeDataMapItem, ProcessedTreeDataItem } from './types'
import { Key, TreeCheckEvent } from '@src/tree'
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
import { debounce, isEmpty } from 'lodash'
import { getSelectedTenantsIds, getTreeDataMap, saveTenantsFilterDataInCookie } from './handlers/cookie-handlers'
import { ThemeProvider } from '@design-system/theme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledTenantFilterTreeView = styled(Tree).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${tenantFilterTreeCss}`

export const TenantFilterView: FC<TenantFilterViewProps> = ({
  className,
  cssConfig,
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
  testId,
  testAttributes
}: TenantFilterViewProps) => {
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

  const checkChildren = (keys: string[], checkedKeys: Set<string>) => {
    keys.forEach((key) => {
      checkedKeys.add(key)
      const children = treeDataMap.get(key)?.children
      if (children && children.length > 0) {
        checkChildren(children, checkedKeys)
      }
    })
  }

  const applyTenantsFilter = useCallback((updatedTreeCheckedKeys: string[]) => {
    saveTenantsFilterDataInCookie(updatedTreeCheckedKeys)
    applyHandler(updatedTreeCheckedKeys)
  }, [applyHandler])

  const debouncedApplyHandler = useMemo(() => debounce(applyTenantsFilter, 2000), [applyTenantsFilter])

  /* Специфичная логика чека в дереве данного компонента:
  * при выборе родительского элемента - дочерние выбираются автоматически
  * при снятии выбора родительского элемента - дочерние остаются выбранными */
  const onCheckTree = (checkedInfo: Key[], event: TreeCheckEvent) => {
    const checkedKeys = new Set(treeCheckedKeys)
    const checkedNode = event.node
    if (!checkedNode.checked) {
      checkedKeys.add(checkedNode.key)
      const nodeChildren = treeDataMap.get(checkedNode.key)?.children
      if (nodeChildren && nodeChildren?.length > 0) {
        checkChildren(nodeChildren, checkedKeys)
      }
    } else {
      if (treeCheckedKeys.length > 1) checkedKeys.delete(checkedNode.key)
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
                <SearchedString cssConfig={cssConfig}>{searchStr}</SearchedString>
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
  }, [searchValue, data, cssConfig])

  const renderTitle = () => {
    return (
      <TitleBox>
        <Label>
          <Text themedColor='primary' type='BTM2'>{titleText}</Text>
        </Label>
      </TitleBox>
    )
  }

  const renderCounter = () => {
    return (
      <Label testId={`${testId}-counter`}>
        <Text themedColor='primary' type='BTR3'>{counterText}: {treeCheckedKeys.length}</Text>
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
          showLine={{ showLeafIcon: false }}
          treeData={processedTreeData}
          checkStrictly={true}
          onCheck={onCheckTree}
          checkedKeys={treeCheckedKeys}
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          testId={`${testId}-tree`}
        />
      </TreeBox>
    )
  }

  const renderButton = () => {
    return (
      <Footer>
        <Button
          onClick={() => applyTenantsFilter(treeCheckedKeys)}
          testId={`${testId}-apply-filter`}
          text={buttonText}
        />
      </Footer>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <FilterPanel className={className} {...testAttributes}>
        {renderHeader()}
        {withSearch && renderSearch()}
        {data && renderTree()}
        {withButton && renderButton()}
      </FilterPanel>
    </ThemeProvider>
  )
}

export const TenantFilter: FC<TenantFilterProps> = (rawProps: TenantFilterProps) => {
  const props = useThemedTenantFilter(rawProps)
  const { testAttributes } = useTestAttribute(props)
  return <TenantFilterView testAttributes={testAttributes} {...props} />
}
