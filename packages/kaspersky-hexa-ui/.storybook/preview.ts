import { ThemeKey } from '@design-system/types'
import { withBadges } from '@sb/decorators/withBadges'
import type { Preview } from '@storybook/react'

import { badgesConfig } from './badges'
import { withI18n } from './decorators/withI18n'
import { withThemeProvider } from './decorators/withThemeProvider'

import '../style/styles.less'

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Localization language',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en-us', title: 'English', type: 'reset' },
        { value: 'ru-ru', title: 'Русский' },
        { value: 'de-de', title: 'Deutsch' },
        { value: 'ja-jp', title: '日本語' },
        { value: 'fr-fr', title: 'Français (France)' },
        { value: 'it-it', title: 'Italiano' },
        { value: 'es-es', title: 'Español (España)' },
        { value: 'es-mx', title: 'Español (Mexico)' },
        { value: 'pt-pr', title: 'Português (Brasil)' },
        { value: 'tr-tr', title: 'Türkçe' },
        { value: 'pl-pl', title: 'Polski' },
        { value: 'ko-kr', title: '한국어' },
        { value: 'ar-ae', title: 'العربية' },
        { value: 'kk-kz', title: 'Қазақша' },
        { value: 'zh-hans', title: '中文(简体)' },
        { value: 'zh-hant', title: '中文(台灣)' },
        { value: 'hash-id', title: 'Hash ID' }
      ]
    }
  },
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
  direction: {
    name: 'Direction',
    description: 'Text direction (RTL/LTR)',
    toolbar: {
      icon: 'transfer',
      items: [
        { value: 'ltr', title: 'LTR', type: 'reset' },
        { value: 'rtl', title: 'RTL' }
      ]
    }
  }
}

const preview: Preview = {
  decorators: [
    withI18n,
    withThemeProvider,
    withBadges
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
    badgesConfig,
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Intro', 'Changelog']
      }
    }
  },
  initialGlobals: {
    theme: ThemeKey.Light,
    direction: 'ltr'
  },
  tags: ['autodocs']
}
export default preview
