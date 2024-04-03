import React, { Key } from 'react'
import { addons, types } from '@storybook/manager-api'
import { useParameter } from '@storybook/api'
import { version } from '../package.json'
import theme from './kaspersky-theme'
import {
  WithTooltip,
  TooltipLinkList,
  IconButton,
  Icons,
  AddonPanel
} from '@storybook/components'
import { links, StoryLinkWrapper } from './components/StoryLinkWrapper'

addons.setConfig({
  theme
})

addons.register('kl-ui-kit/toolbar', () => {
  addons.add('kl-ui-kit-addon/toolbar', {
    title: 'KL UI Toolbar',
    type: types.TOOL,
    render: () => {
      return (
        <WithTooltip
          placement="auto"
          trigger="click"
          tooltip={
            <TooltipLinkList links={links} LinkWrapper={StoryLinkWrapper} />
          }
        >
          <IconButton content={undefined} autoFocus={undefined} nonce={undefined} rel={undefined} rev={undefined}>
            <Icons icon="location" style={{ marginRight: '5px' }} />
            <p>Versions</p>
          </IconButton>
        </WithTooltip>
      )
    }
  })
})

addons.register('kl-ui-kit/buildInfo', () => {
  addons.add('kl-ui-kit-addon/buildInfo', {
    title: 'KL UI Build Info',
    type: types.TOOL,
    render: () => {
      return (
        <WithTooltip
          placement="bottom"
          trigger="double-click"
          // Place for build time
          tooltip={<p>version is: {version}</p>}
        >
          <IconButton content={undefined} autoFocus={undefined} nonce={undefined} rel={undefined} rev={undefined} style={{background: '#029CFD', color: 'white'}}>
            {version}
          </IconButton>
        </WithTooltip>
      )
    }
  })
})

addons.register('kl-ui-kit-design', () => {
  addons.add('kl-ui-kit-design/panel', {
    title: 'Design',
    type: types.PANEL,
    render: (args) => (
      <AddonPanel active={args.active as boolean} key={args.key as Key}>
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width='100%'
          height='450'
          src={useParameter('design') as string}
          allowFullScreen
        />
      </AddonPanel>
    )
  })
})
