import React, { Key, useState, useEffect } from 'react'
import { addons, types, useParameter } from '@storybook/manager-api'
import { version } from '../package.json'
import theme from './kaspersky-theme'
import { WithTooltip, TooltipLinkList, IconButton, AddonPanel } from '@storybook/components'
import { LocationIcon } from '@storybook/icons'
import { links, StoryLinkWrapper } from './components/StoryLinkWrapper'

addons.setConfig({ theme })

addons.register('kl-ui-kit/toolbar', () => {
  addons.add('kl-ui-kit-addon/toolbar', {
    title: 'KL UI Toolbar',
    type: types.TOOL,
    render: () => {
      return (
        <WithTooltip
          placement="auto"
          trigger="click"
          tooltip={<TooltipLinkList links={links} LinkWrapper={StoryLinkWrapper} />}
        >
          <IconButton autoFocus={undefined}>
            <LocationIcon style={{ marginRight: '5px' }} />
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
          <IconButton autoFocus={undefined} style={{ background: '#029CFD', color: 'white' }}>
            {version}
          </IconButton>
        </WithTooltip>
      )
    }
  })
})

addons.register('kl-ui-kit/changeControlsView', () => {
  addons.add('kl-ui-kit-addon/changeControlsView', {
    title: 'Change Controls View',
    type: types.TOOL,
    render: () => {
      const [showDesignControls] = useState(() => localStorage.getItem('showDesignControls') === 'true')
    
      const toggleToolbarAddon = () => {
        localStorage.setItem('showDesignControls', JSON.stringify(!showDesignControls))
        location.reload()
      }
 
      return (
        <IconButton
          active={true}
          title={showDesignControls ? 'Switch to all props' : 'Switch to design props'}
          onClick={toggleToolbarAddon}
        >
          {showDesignControls ? 'Design Props' : 'All Props'}
        </IconButton>
      )
    }
  })
})

addons.register('kl-ui-kit-design', () => {
  addons.add('kl-ui-kit-design/panel', {
    title: 'Figma Documentation',
    type: types.PANEL,
    render: (args: any) => (
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
