import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import i18n from '@helpers/localization/i18n'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { useGlobalComponentStyles } from '@helpers/useGlobalComponentStyles'
import { Badge } from '@src/badge'
import { Indicator } from '@src/indicator'
import { Space } from '@src/space'
import { Tooltip } from '@src/tooltip'
import { Tabs as AntdTabs } from 'antd'
import cn from 'classnames'
import React, {
  Children,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import styled from 'styled-components'

import { StatusInfoOutline } from '@kaspersky/hexa-ui-icons/16'

import { TabsContext } from './context'
import { getDropdownStyles } from './dropdownGlobalStyles'
import { useIntersection } from './hooks/useTabsIntersection'
import {
  StyledExtraContent,
  StyledTabPaneIcon,
  StyledTabPaneText,
  tabPaneHeadCss,
  tabsCss,
  tabsWrapperCss
} from './tabsCss'
import { TabsDropdown } from './TabsDropdown'
import {
  ComplexTabBarExtraContent,
  GroupTabsProps,
  GroupTabsVariants,
  StyledTabPanedHeadProps,
  TabPaneHeadProps,
  TabsCssConfig,
  TabsProps,
  TabsVariants,
  TabsViewProps
} from './types'
import { useThemedTabs } from './useThemedTabs'
import { extractChildrenFromFragment, extractTabPanes, GroupTabHeader } from './utils'

export const TABS_GAP = 4

const StyledTabs = styled(AntdTabs).withConfig<TabsViewProps & { hiddenTabsLength: number }>({
  shouldForwardProp: (prop) => !['cssConfig', 'hiddenTabsLength'].includes(prop as string)
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
  infoTooltip,
  disabledTooltip,
  iconBefore,
  iconAfter,
  number,
  indicator,
  indicatorMode,
  ...rest
}: TabPaneHeadProps) => {
  const { cssConfig, testAttributes } = useContext(TabsContext)

  const tabPaneHead = (
    <StyledTabPaneHead {...rest} gap="related" wrap="nowrap" cssConfig={cssConfig}>
      {iconBefore && <StyledTabPaneIcon>{iconBefore}</StyledTabPaneIcon>}
      <StyledTabPaneText>{text}</StyledTabPaneText>
      {iconAfter && <StyledTabPaneIcon>{iconAfter}</StyledTabPaneIcon>}
      {infoTooltip && (
        <Tooltip text={infoTooltip}>
          <StatusInfoOutline
            testId={`${testAttributes?.['data-testid'] ?? 'tabs'}-tab-info-icon`}
            klId={`${testAttributes?.['kl-id'] ?? 'tabs'}-tab-info-icon`}
          />
        </Tooltip>
      )}
      {number !== undefined && (<Badge count={number} showZero mode="neutral" />)}
      {indicator && (
        <Indicator mode={indicatorMode ?? 'critical'} testId={`${testAttributes?.['data-testid'] ?? 'tabs'}-tab-indicator`} />
      )}
    </StyledTabPaneHead>
  )

  return disabledTooltip
    ? <Tooltip text={disabledTooltip} defaultAlign>
        {tabPaneHead}
      </Tooltip>
    : tabPaneHead
}

Tabs.TabPaneHead = TabPaneHead

export const GroupTabs: FC<GroupTabsProps> & GroupTabsVariants = ({ className, ...props }) => (
  <Tabs
    {...props}
    className={cn('group-tabs', className)}
    tabPosition="left"
  />
)

GroupTabs.TabPaneHeader = GroupTabHeader

const TabView: FC<TabsViewProps> = ({
  cssConfig,
  tabPosition = 'top',
  destroyInactiveTabPane = false,
  children,
  activeKey,
  defaultActiveKey,
  onChange,
  testId,
  testAttributes,
  className,
  tabBarExtraContent,
  padding = false,
  noMargin = false,
  ...props
}: TabsViewProps) => {
  const rootHashClass = useGlobalComponentStyles(cssConfig, getDropdownStyles, TabView)

  const tabsRef = useRef<HTMLDivElement>(null)
  const extraContentRef = useRef<HTMLDivElement>(null)
  const activeTab = activeKey ?? defaultActiveKey ?? (children as ReactElement[])[0]?.key ?? ''
  const [activeTabKey, setActiveTabKey] = useState(activeTab)
  const [buttonMoreSize, setButtonMoreSize] = useState(0)
  const [recalculateIntersectionCounter, setRecalculateIntersectionCounter] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)

  const existingTabs: ReactElement[] = useMemo(
    () => {
      const result: ReactElement[] = []
      const noWrapper = extractChildrenFromFragment(children)
      Children.forEach(noWrapper, (child) => {
        if (isValidElement(child)) {
          result.push(child as ReactElement)
        }
      })
      return result
    }, [children]
  )

  let extraContentWidthWithGap = 0
  if (extraContentRef.current) {
    extraContentWidthWithGap = extraContentRef.current.clientWidth + TABS_GAP
  }

  let lastFittingItemIndex = useIntersection(tabsRef, existingTabs, buttonMoreSize, extraContentWidthWithGap, recalculateIntersectionCounter)

  if (tabsRef.current) {
    const tabs = tabsRef.current.querySelectorAll('.ant-tab > .ant-tabs-nav .ant-tabs-tab')
    const extraContentLeft = tabsRef.current.querySelector('.ant-tabs-extra-content')
    const extraContentLeftWidth = extraContentLeft ? (extraContentLeft.clientWidth + TABS_GAP) : 0
    const lastTab = tabs[tabs.length - 1]
    if (lastTab && ((lastTab as HTMLElement).offsetLeft + lastTab.clientWidth + extraContentWidthWithGap + extraContentLeftWidth < containerWidth)) {
      lastFittingItemIndex = existingTabs.length
    }
  }

  if (tabPosition === 'left') {
    lastFittingItemIndex = existingTabs.length
  }

  const shouldShowMoreButton = lastFittingItemIndex + 1 < existingTabs.length
  const isMoreButtonActive = existingTabs.findIndex(el => activeTabKey === el.key) > lastFittingItemIndex

  const dropdownItems = shouldShowMoreButton
    ? existingTabs.slice(lastFittingItemIndex + 1, existingTabs.length)
    : []

  useEffect(() => {
    setActiveTabKey(activeTab)
  }, [activeTab])

  useEffect(() => {
    setRecalculateIntersectionCounter(recalculateIntersectionCounter + 1)
  }, [existingTabs])

  const onTabChange = async (value: string) => {
    if (await onChange?.(value) === false) {
      return
    }
    setActiveTabKey(value)
  }

  const updateShowButtonWidth = () => {
    if (tabsRef.current) {
      const buttonWidth = tabsRef.current.querySelector('.kl6-tabs-more-button')?.getBoundingClientRect().width || 0
      setButtonMoreSize(buttonWidth)
    }
  }
  const handler = () => {
    setTimeout(() => {
      updateShowButtonWidth()
      if (tabsRef.current) {
        setRecalculateIntersectionCounter(recalculateIntersectionCounter + 1)
      }
    }, 0)
  }

  useLayoutEffect(updateShowButtonWidth, [])

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

  const tabBarExtraContentLeft: ComplexTabBarExtraContent = { left: undefined }
  let tabBarExtraContentRight: ReactNode
  if (tabBarExtraContent) {
    if (typeof tabBarExtraContent === 'object') {
      if ('left' in tabBarExtraContent || 'right' in tabBarExtraContent) {
        if ('left' in tabBarExtraContent) {
          tabBarExtraContentLeft.left = tabBarExtraContent.left
        }
        if ('right' in tabBarExtraContent) {
          tabBarExtraContentRight = tabBarExtraContent.right
        }
      } else {
        tabBarExtraContentRight = tabBarExtraContent
      }
    } else {
      tabBarExtraContentRight = tabBarExtraContent
    }
  }

  return (
    <TabsContext.Provider value={{ cssConfig, testAttributes }}>
      <StyledTabsWrapper
        ref={tabsRef}
        className={cn(
          className, 
          rootHashClass,
          { 'with-padding': padding },
          { 'no-margin': noMargin }
        )}
        cssConfig={cssConfig}
        selectedMoreButton={isMoreButtonActive}
        extraContentWidth={extraContentWidthWithGap}
        shouldShowMoreButton={shouldShowMoreButton}
      >
        <StyledTabs
          cssConfig={cssConfig}
          type="line"
          tabPosition={tabPosition}
          destroyInactiveTabPane={destroyInactiveTabPane}
          {...props}
          tabBarExtraContent={tabBarExtraContentLeft}
          activeKey={activeTabKey as string}
          onChange={onTabChange}
          hiddenTabsLength={existingTabs.length - (lastFittingItemIndex)}
          {...testAttributes}
        >
          {extractTabPanes(existingTabs)}
        </StyledTabs>
        <StyledExtraContent ref={extraContentRef} className="extraContent" >
          {tabBarExtraContentRight}
        </StyledExtraContent>
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
