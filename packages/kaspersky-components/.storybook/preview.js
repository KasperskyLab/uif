import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { badges } from './badges'
import { withI18n } from 'storybook-addon-i18n'
import theme from './kaspersky-theme'
import { CustomDocsContainer } from './Docs'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeKey } from '../design-system/types'
import { LocalizationProvider } from '../design-system/context/provider'
import { createI18n } from '../helpers/localization/i18n'
import { ThemeProvider } from '../design-system/theme'
import { localization } from '../helpers/localization'
import '../style/styles.less'

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
  }
}

export const withThemeProvider = (Story, context) => {
  const themeKey = useDarkMode() ? ThemeKey.Dark : ThemeKey.Light
  document.documentElement.setAttribute('data-theme', themeKey)
  return (
    <ThemeProvider theme={themeKey}>
      <Story {...context} theme={themeKey} />
    </ThemeProvider>
  )
}
addDecorator(withI18n)
addDecorator(withThemeProvider)

export const parameters = {
  docs: {
    container: ({ children, context }) => (
      <CustomDocsContainer context={context}>{children}</CustomDocsContainer>
    )
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

addParameters({
  options: {
    theme
  },
  i18n: {
    provider: LocalizationProvider,
    providerProps: {
      i18n: createI18n('en')
    },
    supportedLocales: Object.keys(localization),
    providerLocaleKey: 'locale'
  },
  badgesConfig: {
    [badges.beta]: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#944144ff',
        color: '#944144ff'
      },
      title: 'Beta',
      tooltip: {
        title: 'Beta component',
        desc: "For experimenting, testing. Not used in projects while it's beta"
      }
    },
    [badges.stable]: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#ee6c64ff',
        color: '#ee6c64ff'
      },
      title: 'Stable',
      tooltip: {
        title: 'Stable component',
        desc: 'Used is real projects, no major known issues known, ready to use'
      }
    },
    [badges.obsolete]: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#f5c66bff',
        color: '#f5c66bff'
      },
      title: 'Obsolete',
      tooltip: {
        title: 'Obsolete component',
        desc: 'Component became obsolete. This means masssive refactoring or redesign will happen or this component will be replaced with a new one'
      }
    },
    [badges.deprecated]: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#b2b0bbff',
        color: '#b2b0bbff'
      },
      title: 'Deprecated',
      tooltip: {
        title: 'Deprecated component',
        desc: 'No more new feature, bug fix and it wont even be replaced with a new one. Do not use this.'
      }
    },
    [badges.missingDoc]: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#ab95eaff',
        color: '#ab95eaff'
      },
      title: 'Missing doc',
      tooltip: {
        title: 'Missing documentation'
      }
    },
    [badges.missingDesign]: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#1da189ff',
        color: '#1da189ff'
      },
      title: 'Missing design',
      tooltip: {
        title: 'Missing design',
        desc: 'Component was implemented without any design in Design Sytem.'
      }
    },
    [badges.reviewedByDesign]: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#ff9a5e',
        color: '#ff9a5e'
      },
      title: 'Reviewed Design',
      tooltip: {
        title: 'Reviewed by design team',
        desc: 'Reviwed by design team and no further actions required, all good'
      }
    },
    [badges.needsDesignReview]: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#67cbebff',
        color: '#67cbebff'
      },
      title: 'Needs Design Review ',
      tooltip: {
        title: 'Needs to be reviewed by design team',
        desc: 'Component wa implemented, added new features, fixed old design review - it needs to be reviewed by design team'
      }
    },
    [badges.needSyncWithDesign]: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#794070ff',
        color: '#794070ff'
      },
      title: 'Needs Design Sync ',
      tooltip: {
        title: 'Needs to be synced with design',
        desc: 'Something changed in design or added new feature - needs to be done in UIF too.'
      }
    },
    [badges.dev]: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#374dc1ff',
        color: '#374dc1ff'
      },
      title: 'dev',
      tooltip: {
        title: 'Dev story',
        desc: 'Story to demonstrate some dev features, no need in design sync, etc'
      }
    },
    [badges.lightThemeOnly]: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: 'red',
        color: 'red'
      },
      title: 'Light theme only',
      tooltip: {
        title: 'Needs to add dark theme',
        desc: 'Component without theming, is supports only light theme'
      }
    }
  }
})
