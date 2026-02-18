import React, { Key, useState } from 'react'
import { AddonPanel, Button, TooltipLinkList, WithTooltip } from 'storybook/internal/components'
import { addons, types, useParameter } from 'storybook/manager-api'

import { version } from '../package.json'

import { links } from './components/Links'
import theme from './kaspersky-theme'

addons.setConfig({ theme })

addons.register('kl-ui-kit/versions', () => {
  addons.add('kl-ui-kit-addon/versions', {
    title: 'KL UI Versions',
    type: types.TOOL,
    render: () => {
      return (
        <WithTooltip
          placement="auto"
          tooltip={<TooltipLinkList links={links} />}
        >
          <Button autoFocus={undefined} variant="ghost" padding="small">
            Versions
          </Button>
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
          <Button autoFocus={undefined} variant="ghost" padding="small" style={{ background: '#029CFD', color: 'white' }}>
            {version}
          </Button>
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
        <Button
          variant="ghost"
          padding="small"
          title={showDesignControls ? 'Switch to all props' : 'Switch to design props'}
          onClick={toggleToolbarAddon}
        >
          {showDesignControls ? 'Design Props' : 'All Props'}
        </Button>
      )
    }
  })
})
