import { WithGlobalComponentStyles } from '@helpers/hocs/WithGlobalComponentStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import i18n from '@helpers/localization/i18n'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { useIntersectionChildren } from '@helpers/useIntersectionChildren'
import { isNumber } from '@src/anchor-links/helpers'
import { Badge } from '@src/badge'
import { Indicator } from '@src/indicator'
import { Space } from '@src/space'
import { Tabs as AntdTabs } from 'antd'
import cn from 'classnames'
import React, {
  ReactElement,
  FC,
  isValidElement,
  useContext,
  useEffect,
  useState,
  useMemo,
  useRef
} from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import styled from 'styled-components'

import { TabsContext } from './context'
import { getDropdownStyles } from './dropdownGlobalStyles'
import {
  tabsCss,
  tabsWrapperCss,
  tabPaneHeadCss,
  StyledTabPaneIcon,
  StyledTabPaneText,
  StyledTabPaneIndicator
} from './tabsCss'
import { TabsDropdown } from './TabsDropdown'
import {
  TabPaneHeadProps,
  TabsProps,
  TabsViewProps,
  TabsCssConfig,
  GroupTabsVariants,
  TabPaneHeaderProps,
  GroupTabsProps,
  TabsVariants,
  StyledTabPanedHeadProps
} from './types'
import { useThemedTabs } from './useThemedTabs'
import { createGroupTabPane, extractTabPanes } from './utils'

const StyledTabs = styled(AntdTabs).withConfig<TabsViewProps & { hiddenTabsLength: number }>({
  shouldForwardProp: (prop) => !['cssConfig', 'hiddenTabsLength', 'containerWidth'].includes(prop as string)
})`
  ${tabsCss}
`

export const Tabs: FC<TabsProps> & TabsVariants = (rawProps: TabsProps) => {
  const themedProps = useThemedTabs(rawProps)
  const props = useTestAttribute(themedProps)
  return <TabView {...props} />
}

Tabs.TabPane = AntdTabs.TabPane

const StyledTabPaneHead = styled(Space).withConfig<StyledTabPanedHeadProps>({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop as string)
})`
  ${tabPaneHeadCss}
`

const StyledTabsWrapper = styled.div.withConfig<{ cssConfig: TabsCssConfig }>({ shouldForwardProp })`
  ${tabsWrapperCss}
`

export const TabPaneHead: FC<TabPaneHeadProps> = ({
  text,
  icon,
  iconBefore,
  iconAfter,
  number,
  indicator,
  indicatorMode
}: TabPaneHeadProps) => {
  const { cssConfig, testAttributes } = useContext(TabsContext)

  return (
    <StyledTabPaneHead size={8} wrap="nowrap" cssConfig={cssConfig}>
      {!iconBefore && icon && <StyledTabPaneIcon>{icon}</StyledTabPaneIcon>}
      {iconBefore && <StyledTabPaneIcon>{iconBefore}</StyledTabPaneIcon>}
      <StyledTabPaneText>{text}</StyledTabPaneText>
      {iconAfter && <StyledTabPaneIcon>{iconAfter}</StyledTabPaneIcon>}
      {number && <Badge count={number} mode="neutral" />}
      {indicator && (
        <StyledTabPaneIndicator>
          <Indicator mode={indicatorMode ?? 'high'} testId={`${testAttributes?.['data-testid'] ?? 'tabs'}-tab-indicator`} />
        </StyledTabPaneIndicator>
      )}
    </StyledTabPaneHead>
  )
}

Tabs.TabPaneHead = TabPaneHead

export const GroupTabs: FC<GroupTabsProps> & GroupTabsVariants = ({ className, ...props }) => (
  <Tabs
    {...props}
    className={cn('group-tabs', className)}
    tabPosition="left"
  />
)

export const GroupTabHeader: FC<TabPaneHeaderProps> = (props: TabPaneHeaderProps) => createGroupTabPane(props)

GroupTabs.TabPaneHeader = GroupTabHeader

const TabViewComponent: FC<TabsViewProps> & Omit<TabsVariants, 'TabPaneHead'> = ({
  cssConfig,
  tabPosition = 'top',
  type = 'line',
  destroyInactiveTabPane = false,
  children,
  activeKey,
  defaultActiveKey,
  onChange,
  testId,
  testAttributes,
  className,
  rootHashClass,
  ...props
}: TabsViewProps) => {
  const tabsRef = useRef<HTMLDivElement>(null)
  const activeTab = activeKey ?? defaultActiveKey ?? (children as ReactElement[])[0]?.key ?? ''
  const [activeTabKey, setActiveTabKey] = useState(activeTab)
  const [buttonMoreSize, setButtonMoreSize] = useState(0)
  const [antiCache, setAntiCache] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)

  const existingTabs: ReactElement[] = useMemo(
    () => {
      if (children) {
        return (children as [])?.filter((tab: any) => isValidElement(tab))
      }
      return []
    },
    [children]
  )

  let lastFittingItemIndex = useIntersectionChildren(tabsRef, buttonMoreSize, '.ant-tabs-nav-list', antiCache) || 100

  if (tabsRef.current) {
    const tabs = tabsRef.current.querySelectorAll('.ant-tabs-tab')
    const lastTab = tabs[tabs.length - 1]
    if ((lastTab as HTMLElement).offsetLeft + lastTab.clientWidth < containerWidth) {
      lastFittingItemIndex = 100
    }
  }

  const hasIntersection = isNumber(lastFittingItemIndex)
  const shouldShowMoreButton =
    hasIntersection && (lastFittingItemIndex + 1 < existingTabs.length)

  const isMoreButtonActive = existingTabs.findIndex(el => activeTabKey === el.key) > (lastFittingItemIndex || Infinity)

  const dropdownItems = hasIntersection
    ? existingTabs.slice(lastFittingItemIndex + 1, existingTabs.length)
    : []

  useEffect(() => {
    setActiveTabKey(activeTab)
  }, [activeTab])

  useEffect(() => {
    setAntiCache(antiCache + 1)
  }, [existingTabs])

  const onTabChange = (value: string) => {
    setActiveTabKey(value)
    onChange?.(value)
  }

  const handler = () => {
    setTimeout(() => {
      if (tabsRef.current) {
        const buttonWidth = tabsRef.current.querySelector('.kl6-tabs-more-button')?.getBoundingClientRect().width || 0
        setButtonMoreSize(buttonWidth)
        setAntiCache(antiCache + 1)
      }
    }, 0)
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (tabsRef.current) setContainerWidth(tabsRef.current.clientWidth)
    })

    if (tabsRef.current) resizeObserver.observe(tabsRef.current)

    i18n.on('languageChanged', handler)

    return () => {
      resizeObserver.disconnect()
      i18n.off('languageChanged', handler)
    }
  }, [])

  return (
    <TabsContext.Provider value={{ cssConfig, testAttributes }}>
      <StyledTabsWrapper
        ref={tabsRef}
        className={cn(className, rootHashClass)}
        cssConfig={cssConfig}
        selectedMoreButton={isMoreButtonActive}
        shouldShowMoreButton={shouldShowMoreButton}
      >
        <StyledTabs
          cssConfig={cssConfig}
          type={type}
          tabPosition={tabPosition}
          destroyInactiveTabPane={destroyInactiveTabPane}
          {...props}
          activeKey={activeTabKey as string}
          onChange={onTabChange}
          hiddenTabsLength={existingTabs.length - (lastFittingItemIndex || existingTabs.length)}
          containerWidth={containerWidth}
          {...testAttributes}
        >
          {extractTabPanes(existingTabs)}
        </StyledTabs>
        <TabsDropdown
          activeKey={activeTabKey}
          className={rootHashClass}
          tabs={dropdownItems}
          onChange={onTabChange}
        />
      </StyledTabsWrapper>
    </TabsContext.Provider>
  )
}

TabViewComponent.TabPane = AntdTabs.TabPane

const TabView = WithGlobalComponentStyles(TabViewComponent, getDropdownStyles)
