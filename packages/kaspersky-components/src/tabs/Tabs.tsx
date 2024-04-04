import React, {
  ReactElement,
  ReactPortal,
  useContext,
  useEffect,
  useRef,
  useState,
  FC
} from 'react'
import styled from 'styled-components'
import { throttle } from 'lodash'
import { Tabs as AntdTabs } from 'antd'
import ResizeObserver from 'resize-observer-polyfill'
import cn from 'classnames'

import {
  tabsCss,
  tabsWrapperCss,
  tabPaneHeadCss,
  StyledTabPaneIcon,
  StyledTabPaneText,
  StyledTabPaneIndicator
} from './tabsCss'
import { useThemedTabs } from './useThemedTabs'
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
import { TabsContext } from './context'
import { TabsDropdown } from './TabsDropdown'
import { Badge } from '@src/badge'
import { Indicator } from '@src/indicator'
import { Space } from '@src/space'
import { createGroupTabPane, extractTabPanes } from './utils'
import { WithGlobalComponentStyles } from '@helpers/hocs/WithGlobalComponentStyles'
import { getDropdownStyles } from './dropdownGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { shouldForwardProp } from '@helpers/shouldForwardProp'

const TAB_MORE_BUTTON_WIDTH = 70
const TAB_MARGIN = 4

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
  number,
  indicator
}: TabPaneHeadProps) => {
  const { cssConfig } = useContext(TabsContext)

  return (
    <StyledTabPaneHead size={8} wrap="nowrap" cssConfig={cssConfig}>
      {icon && <StyledTabPaneIcon>{icon}</StyledTabPaneIcon>}
      <StyledTabPaneText>{text}</StyledTabPaneText>
      {number && <Badge count={number} mode="neutral" />}
      {indicator && (
        <StyledTabPaneIndicator>
          <Indicator mode="high" />
        </StyledTabPaneIndicator>
      )}
    </StyledTabPaneHead>
  )
}

Tabs.TabPaneHead = TabPaneHead

export const GroupTabs: FC<GroupTabsProps> & GroupTabsVariants = ({ children }) => (
  <Tabs className="group-tabs" tabPosition="left">
    {children}
  </Tabs>
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
  testAttributes,
  className,
  rootHashClass,
  ...props
}: TabsViewProps) => {
  const tabsRef = useRef<HTMLDivElement>(null)
  const [visibleTabs, setVisibleTabs] = useState<ReactElement[]>(
    children as ReactElement[]
  )
  const [hiddenTabs, setHiddenTabs] = useState<(ReactElement | ReactPortal)[]>(
    []
  )
  const [containerWidth, setContainerWidth] = useState(0)
  const activeTab =
    activeKey ?? defaultActiveKey ?? (children as ReactElement[])[0]?.key ?? ''
  const [activeTabKey, setActiveTabKey] = useState(activeTab)

  useEffect(() => {
    setActiveTabKey(activeTab)
  }, [activeTab])

  const onTabChange = (value: string) => {
    setActiveTabKey(value)
    onChange?.(value)
  }

  useEffect(() => {
    if (!tabsRef.current || tabPosition === 'left') {
      return
    }

    const domTabs = tabsRef.current.querySelectorAll('.ant-tabs-tab')
    const tabsWidth = Array.from(domTabs).map((tab) => tab.clientWidth)
    const tabsCalculation = throttle(() => {
      if (tabsRef.current) {
        let currentWidth = TAB_MORE_BUTTON_WIDTH
        const visibleTabs: ReactElement[] = []
        const hiddenTabs: ReactElement[] = []
        if (Array.isArray(children)) {
          const filteredChildren = children.filter((tab) => tab != null)
          for (let i = 0; i < filteredChildren.length; i++) {
            if (currentWidth + tabsWidth[i] < tabsRef.current.clientWidth) {
              visibleTabs.push(filteredChildren[i])
              currentWidth += tabsWidth[i] + TAB_MARGIN
            } else {
              hiddenTabs.push(filteredChildren[i])
            }
          }
        }

        setVisibleTabs(visibleTabs)
        setHiddenTabs(hiddenTabs)
        setContainerWidth(tabsRef.current.clientWidth)
      }
    }, 1000)

    const resizeObserver = new ResizeObserver(tabsCalculation)
    resizeObserver.observe(tabsRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <TabsContext.Provider value={{ cssConfig }}>
      <StyledTabsWrapper
        ref={tabsRef}
        className={cn(className, rootHashClass)}
        cssConfig={cssConfig}
        selectedMoreButton={Number(activeTabKey) > visibleTabs.length}
      >
        <StyledTabs
          cssConfig={cssConfig}
          type={type}
          tabPosition={tabPosition}
          destroyInactiveTabPane={destroyInactiveTabPane}
          {...props}
          activeKey={activeTabKey as string}
          onChange={onTabChange}
          hiddenTabsLength={hiddenTabs.length + 1}
          containerWidth={containerWidth}
          {...testAttributes}
        >
          {extractTabPanes(children)}
        </StyledTabs>
        {hiddenTabs.length > 0 && (
          <TabsDropdown
            className={rootHashClass}
            tabs={hiddenTabs}
            onChange={onTabChange}
          />
        )}
      </StyledTabsWrapper>
    </TabsContext.Provider>
  )
}

TabViewComponent.TabPane = AntdTabs.TabPane

const TabView = WithGlobalComponentStyles(TabViewComponent, getDropdownStyles)
