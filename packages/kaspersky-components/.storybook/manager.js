import React from 'react'
import { addons, types } from '@storybook/addons'
import theme from './kaspersky-theme'
import {
  WithTooltip,
  TooltipLinkList,
  IconButton,
  Icons
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
          <IconButton>
            <Icons icon="location" style={{ marginRight: '5px' }} />
            <p>Versions</p>
          </IconButton>
        </WithTooltip>
      )
    }
  })
})
