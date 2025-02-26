import type { Preview } from '@storybook/react'
import { withColorTokens } from './withColorTokens'

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
