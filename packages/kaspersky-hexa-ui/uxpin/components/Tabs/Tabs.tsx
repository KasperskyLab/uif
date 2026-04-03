import React from 'react'

import { Tabs as HexaTabs } from '@src/tabs'
import { TabsProps } from '@src/tabs/types'

const Tabs = ({
  children,
  defaultActiveKey,
  ...props
}: TabsProps): JSX.Element => {
  const resolvedDefaultActiveKey = props.activeKey === undefined && defaultActiveKey === undefined
    ? '1'
    : defaultActiveKey

  return (
    <HexaTabs defaultActiveKey={resolvedDefaultActiveKey} {...props}>
      {children ?? (
        <>
          <HexaTabs.TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </HexaTabs.TabPane>
          <HexaTabs.TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </HexaTabs.TabPane>
        </>
      )}
    </HexaTabs>
  )
}

export default Tabs
