import { withJsx } from '@mihkeleidast/storybook-addon-source'
import { Preview } from '@storybook/react'
// TODO: когда плагин начнет поддерживать восьмой сторибук, тогда и завезем обратно
import { badgesConfig } from './badges'
import { withI18n } from './decorators/withI18n'
import { themes } from '@storybook/theming'
import { withThemeProvider } from './decorators/withThemeProvider'
import { ThemeKey } from '@design-system/types'
import '../style/styles.less'
import { themeColors } from '@design-system/tokens'
import { withBadges } from '@sb/decorators/withBadges'

import lightThemeLogo from './assets/Hexa_UI_Light.svg'
import darkThemeLogo from './assets/Hexa_UI_Dark.svg'

export const globalTypes = {
  theme: {
    name: 'Theme',
    descriptions: 'Global theme for components',
    defaultValue: ThemeKey.Light
  },
  version: {
    name: 'Version',
    descriptions: 'UI Kit Versions',
    defaultValue: 'hexa-ui'
  },
  locale: {
    name: 'Locale',
    descriptions: 'Localization language',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en-us', title: 'English' },
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
        { value: 'hash-id', title: 'Hash ID' },
      ],
      showName: true,
    },
  },
}

const preview: Preview = {
  decorators: [
    withJsx,
    withI18n,
    withThemeProvider,
    withBadges
  ],
  parameters: {
    darkMode: {
      light: { ...themes.light, appBg: themeColors.bg.base.light, brandImage: lightThemeLogo.toString() },
      dark: { ...themes.dark, appBg: themeColors.bg.base.dark, brandImage: darkThemeLogo.toString() },
    },
    controls: {
      exclude: /(componentType|componentId|dataTestId|theme)/,
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    // TODO: когда плагин начнет поддерживать восьмой сторибук, тогда и завезем обратно
    badgesConfig
  },
  tags: ['autodocs']
}
export default preview
