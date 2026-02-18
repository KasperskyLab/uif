import type { Preview } from '@storybook/react'
import React from 'react'
import { withColorTokens } from './withColorTokens'

window.React = React

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
      withColorTokens
  ]
}

export default preview
