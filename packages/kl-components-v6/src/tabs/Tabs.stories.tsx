import React from 'react'
import Meta from './__meta__/meta.json'
import { ITabsProps } from './types'
import { Tabs } from './Tabs'

import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import { Icon } from '../icon/Icon'

export default {
  title: 'Atoms/Tabs',
  component: Tabs,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const TabsTemplate = (props: ITabsProps) => {
  return (
    <Tabs defaultActiveKey="1" {...props}>
      <Tabs.TabPane tab="Tab" key="1">
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab" key="3">
        Content of Tab Pane 3
      </Tabs.TabPane>
    </Tabs>
  )
}

export const Basic = TabsTemplate.bind({})

const CardTemplate = (props: ITabsProps) => {
  return (
    <Tabs defaultActiveKey="1" type={'card'} {...props}>
      <Tabs.TabPane tab="Tab" key="1">
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab" key="3">
        Content of Tab Pane 3
      </Tabs.TabPane>
    </Tabs>
  )
}

export const Card = CardTemplate.bind({})

const WithIconTemplate = (props: ITabsProps) => {
  return (
    <Tabs defaultActiveKey='1' {...props}>
      <Tabs.TabPane
        tab={<Tabs.TabPaneHead text='Tab' icon={<Icon name='Ok' size='extraSmall' />} />}
        key='1'
      >
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane tab='Tab' key='2'>
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane tab='Tab' key='3'>
        Content of Tab Pane 3
      </Tabs.TabPane>
    </Tabs>
  )
}

export const WithIcon = WithIconTemplate.bind({})

const WithIconAndNumberTemplate = (props: ITabsProps) => {
  return (
    <Tabs defaultActiveKey='1' {...props}>
      <Tabs.TabPane
        tab={<Tabs.TabPaneHead text='Tab' icon={<Icon name='Ok' size='extraSmall' />} number={5} />}
        key='1'
      >
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={<Tabs.TabPaneHead text='Tab' icon={<Icon name='Ok' size='extraSmall' />} number={5} />}
        key='2'
      >
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={<Tabs.TabPaneHead text='Tab' icon={<Icon name='Ok' size='extraSmall' />} number={5} />}
        key='3'
      >
        Content of Tab Pane 3
      </Tabs.TabPane>
    </Tabs>
  )
}

export const WithIconAndNumber = WithIconAndNumberTemplate.bind({})

const WithDisabledTemplate = (props: ITabsProps) => {
  return (
    <Tabs defaultActiveKey='1' {...props}>
      <Tabs.TabPane tab='Tab' key='1'>
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane tab='Tab' disabled key='2'>
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane tab='Tab' key='3'>
        Content of Tab Pane 3
      </Tabs.TabPane>
    </Tabs>
  )
}

export const WithDisabled = WithDisabledTemplate.bind({})

const CollapsedTemplate = (props: ITabsProps) => {
  return (
    <div style={{
      width: '700px'
    }}>
      <Tabs
        defaultActiveKey="1"
        style={{
          height: 220
        }}
        {...props}
      >
        {[
          ...Array.from(
            {
              length: 10
            },
            (_, i) => i
          )
        ].map((i) => (
          <Tabs.TabPane
            tab={<Tabs.TabPaneHead text='Tab' icon={<Icon name='Add' size='extraSmall' />} number={5} disabled={i === 8} />}
            key={i}
            disabled={i === 8}
          >
            Content of tab {i}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export const Collapsed = CollapsedTemplate.bind({})

const VerticalTemplate = (props: ITabsProps) => {
  return (
    <Tabs defaultActiveKey='1' tabPosition='left' {...props}>
      <Tabs.TabPane tab='Tab' key='1'>
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane tab='Tab' key='2'>
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane tab='Tab' key='3'>
        Content of Tab Pane 3
      </Tabs.TabPane>
    </Tabs>
  )
}

export const Vertical = VerticalTemplate.bind({})
