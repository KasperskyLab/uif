import React, { useState } from 'react'
import { FolderIcon } from '@storybook/icons'
import { CURRENT_STORY_WAS_SET, STORY_CHANGED } from 'storybook/internal/core-events'

import { version } from '../package.json'

import { StorybookManager, StorybookManagerUI } from './adapters/storybook'
import { links } from './components/Links'
import theme from './kaspersky-theme'

const { addons, types } = StorybookManager
const { Button, TooltipLinkList, WithTooltip } = StorybookManagerUI

const PLAYGROUND_CONTROLS_BODY_CLASS = 'kl-ui-kit-playground-controls'

const playgroundControlsColumnStyles = `
  body.${PLAYGROUND_CONTROLS_BODY_CLASS} .docblock-argstable thead th:nth-of-type(3),
  body.${PLAYGROUND_CONTROLS_BODY_CLASS} .docblock-argstable tbody td:nth-of-type(3) {
    display: none;
  }

  body.${PLAYGROUND_CONTROLS_BODY_CLASS} .docblock-argstable tbody td:nth-of-type(2) > div:nth-of-type(2) {
    display: none;
  }

  body.${PLAYGROUND_CONTROLS_BODY_CLASS} .docblock-argstable thead th:first-of-type,
  body.${PLAYGROUND_CONTROLS_BODY_CLASS} .docblock-argstable tbody td:first-of-type {
    width: 24%;
  }

  body.${PLAYGROUND_CONTROLS_BODY_CLASS} .docblock-argstable thead th:nth-of-type(2),
  body.${PLAYGROUND_CONTROLS_BODY_CLASS} .docblock-argstable tbody td:nth-of-type(2) {
    width: 36%;
  }

  body.${PLAYGROUND_CONTROLS_BODY_CLASS} .docblock-argstable thead th:last-of-type,
  body.${PLAYGROUND_CONTROLS_BODY_CLASS} .docblock-argstable tbody td:last-of-type {
    width: 40%;
  }
`

const isPlaygroundStory = (storyId?: string) =>
  storyId?.toLowerCase().endsWith('--playground') ?? false

const syncPlaygroundControlsColumns = (storyId?: string) => {
  if (typeof document === 'undefined') {
    return
  }

  document.body.classList.toggle(PLAYGROUND_CONTROLS_BODY_CLASS, isPlaygroundStory(storyId))
}

if (typeof document !== 'undefined') {
  const styleId = 'kl-ui-kit-hide-controls-default-column'
  const existingStyle = document.getElementById(styleId)
  const style = existingStyle || document.createElement('style')

  style.id = styleId
  style.textContent = playgroundControlsColumnStyles

  if (!existingStyle) {
    document.head.appendChild(style)
  }
}

const isDocumentationStory = (id?: string) =>
  id?.toLowerCase().endsWith('--documentation') ?? false

const isStoriesGroup = (id?: string) =>
  id?.endsWith('-stories') && !id.includes('-stories-')

addons.register('kl-ui-kit/playgroundControlsColumns', () => {
  const channel = addons.getChannel()

  channel.on(STORY_CHANGED, syncPlaygroundControlsColumns)
  channel.on(CURRENT_STORY_WAS_SET, ({ storyId }: { storyId: string }) => {
    syncPlaygroundControlsColumns(storyId)
  })
})

addons.setConfig({
  theme,
  layoutCustomisations: {
    showPanel: (state, defaultShowPanel) =>
      isDocumentationStory(state.storyId) ? false : defaultShowPanel
  },
  sidebar: {
    renderLabel: (item) => {
      if (item.type === 'component' && isStoriesGroup(item.id)) {
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <FolderIcon />
            <span>{item.name}</span>
          </span>
        )
      }

      return item.name
    }
  }
})

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
