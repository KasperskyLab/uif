import { ThemeKey } from "@kaspersky/hexa-ui/design-system";
import type { Preview } from "@storybook/react";
import { withThemeProvider } from "./decorators/withThemeProvider";
import "@kaspersky/hexa-ui/design-system/global-style/styles.css";
import { withVisualData } from "./decorators/withVisualData";

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      title: 'Theme',
      items: [
        { value: ThemeKey.Light, title: '𖤓 light', type: 'reset' },
        { value: ThemeKey.Dark, title: '⏾ dark' }
      ],
      dynamicTitle: true
    }
  },
}

const preview: Preview = {
  decorators: [
    withVisualData,
    withThemeProvider,
  ],
  parameters: {
    docs: {
      codePanel: true,
      source: { language: 'tsx' }
    },
    controls: {
      exclude: /(componentType|componentId|dataTestId|klId|theme)/,
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      },
      sort: 'alpha'
    },
    options: {
      storySort: {
        method: 'alphabetical',
      }
    }
  },
  initialGlobals: {
    theme: ThemeKey.Light
  },
  tags: ['autodocs']
}

export default preview;
