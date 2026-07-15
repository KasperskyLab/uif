import { ThemeKey } from '@design-system/types'
import { withBadges } from '@sb/decorators/withBadges'
import { Preview } from '@storybook/react-vite'

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
        { value: ThemeKey.Light, title: '𖤓 light' },
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
        { value: 'ltr', title: 'LTR' },
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
      // @ts-expect-error Storybook does not provide contextual typing for inline storySort params here.
      storySort: (left, right) => {
        const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' })
        const topLevelOrder = ['Intro', 'Changelog', 'Design', 'Docs', 'Hexa UI Components']
        const nameOrder = ['Docs', 'Playground']

        // Storybook evals storySort as raw JS — nested helpers must stay untyped in source.
        // @ts-expect-error — see comment above
        const rank = (value, order) => {
          // @ts-expect-error — see comment above
          const i = order.findIndex(o => value.includes(o))
          return i === -1 ? order.length : i
        }

        const titleSegments = (title = '') => title.split('/')

        // @ts-expect-error — see comment above
        const compareTitles = (a, b) => {
          const aSegs = titleSegments(a)
          const bSegs = titleSegments(b)

          for (let i = 0; i < Math.max(aSegs.length, bSegs.length); i++) {
            const aSeg = aSegs[i] ?? ''
            const bSeg = bSegs[i] ?? ''

            if (aSeg === bSeg) continue

            if (i === 0) {
              const diff = rank(aSeg, topLevelOrder) - rank(bSeg, topLevelOrder)
              if (diff !== 0) return diff
            }

            if (aSeg === 'Витрина компонентов') return -1
            if (bSeg === 'Витрина компонентов') return 1

            return collator.compare(aSeg, bSeg)
          }

          return 0
        }

        return (
          compareTitles(left.title, right.title) ||
          rank(left.name ?? '', nameOrder) - rank(right.name ?? '', nameOrder)
        )
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
