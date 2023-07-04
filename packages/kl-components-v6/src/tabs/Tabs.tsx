import React, { PropsWithChildren, ReactElement, useContext } from 'react'
import { Tabs as TabsAntd } from 'antd'
import styled from 'styled-components'
import cn from 'classnames'
import { tabsCss, tabPaneHeadCss, DropdownStyle } from './tabsCss'
import { useThemedTabs } from './useThemedTabs'
import { ITabPaneHeadProps, ITabsProps, ITabsViewProps, TabsCssConfig } from './types'
import { Space, SpaceProps } from '../space'
import { Icon } from '../icon'
import { TabsContext } from './context'

const { TabPane: TabPaneAntd } = TabsAntd

const StyledTabs = styled(TabsAntd).withConfig<ITabsViewProps>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop as string)
})`
  ${tabsCss}
`

export const Tabs = (rawProps: PropsWithChildren<ITabsProps>): ReactElement<ITabsProps> => {
  const props = useThemedTabs(rawProps)
  return (
    <TabView
      {...props}
    />
  )
}

Tabs.TabPane = TabPaneAntd

export type StyledTabPanedHeadProps = SpaceProps & { cssConfig: TabsCssConfig }

const StyledTabPaneHead = styled(Space).withConfig<StyledTabPanedHeadProps>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop as string)
})`
  ${tabPaneHeadCss}
`

Tabs.TabPaneHead = ({ text, icon, number, disabled }: ITabPaneHeadProps) => {
  const { cssConfig } = useContext(TabsContext)

  return (
    <StyledTabPaneHead size={8} wrap='nowrap' cssConfig={cssConfig!}>
      <div className={cn('kl-tabs-pane', disabled && 'kl-tabs-pane_disabled')}>
        <div className='kl-tabs-pane-icon'>{icon}</div>
        <div className='kl-tabs-pane-text'>{text}</div>
        <div className='kl-tabs-pane-number'>{number}</div>
      </div>
    </StyledTabPaneHead>
  )
}

export const TabView = ({
  cssConfig,
  tabPosition = 'top',
  destroyInactiveTabPane = false,
  klId,
  ...props
}: ITabsViewProps): ReactElement<ITabsProps> => {
  return (
    <TabsContext.Provider value={{ cssConfig }}>
      <StyledTabs
        moreIcon={
          <Space size={10} wrap='nowrap'>
            More
            <Icon size='small' name='Down' />
          </Space>
        }
        cssConfig={cssConfig}
        tabPosition={tabPosition}
        destroyInactiveTabPane={destroyInactiveTabPane}
        kl-id={klId}
        {...props}
      />
      <DropdownStyle cssConfig={cssConfig} />
    </TabsContext.Provider>
  )
}

TabView.TabPane = TabPaneAntd
