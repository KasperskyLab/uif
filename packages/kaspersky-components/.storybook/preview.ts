import { Preview } from '@storybook/react'
import { badgesConfig } from './badges'
import { withI18n } from './decorators/withI18n'
import { themes } from '@storybook/theming'
import { CustomDocsContainer } from './Docs'
import { withThemeProvider } from './decorators/withThemeProvider'
import { ThemeKey } from '@design-system/types'
import '../style/styles.less'
import { sbHideControls } from '@helpers/storybookHelpers'

export const globalTypes = {
  theme: {
    name: 'Theme',
    descriptions: 'Global theme for components',
    defaultValue: ThemeKey.Light
  },
  version: {
    name: 'Version',
    descriptions: 'UI Kit Versions',
    defaultValue: 'v6'
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

export const decorators = [
  withI18n,
  withThemeProvider
]

const preview: Preview = {
  argTypes: {
    ...sbHideControls(['componentId', 'dataTestId'])
  },
  parameters: {
    docs: {
      container: CustomDocsContainer,
    },
    darkMode: {
      light: themes.light,
      dark: themes.dark
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    badgesConfig
  }
}
export default preview
