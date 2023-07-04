# Providers in V6

## Config Provider

ConfigProvider is union of [ThemeProvider](../../theme/README.md) and LocalizationProvider.
It provides unified support for localization and theming of the component base.
Accepts `theme` and `locale` as props.

### How To Use
```
import React, { useState, useCallback, useEffect } from 'react'
import { ConfigProvider } from '@kl/components/design-system/context'
import { ThemeKey } from '@kl/components/design-system/types'
import { LangType } from '@kl/components/helpers/localization/types'

const Layout = () => {
  const [theme, setTheme] = useState<ThemeKey>(ThemeKey.Light)
  const [locale, setLocale] = useState<LangType>('en')

  const onKeyDown = useCallback((e) => {
    // custom shortcut
    if (e.keyCode === 88 && e.ctrlKey && e.shiftKey) {
      if (theme === ThemeKey.Light) {
        setTheme(ThemeKey.Dark)
        setLocale('ru')
      } else {
        setTheme(ThemeKey.Light)
        setLocale('en')
      }
    }
  }, [theme])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <ConfigProvider theme={theme} locale={locale}>
      <App />
    </ConfigProvider>
  )
}
```

## Localization Provider

LocalizationProvider provides locales for all components.
Based on [I18nextProvider](https://react.i18next.com/latest/i18nextprovider)

All components have localization, where there are elements with text.
To do this, in @kl/components/helpers/localization, you need to pass an object with new values of text fields.
The interface of each dictionary is exported from @kl/components/helpers/localization, e.g. `severity`.
```
// ru.json
{
  "ru": {
    "translation": {
      "severity": {
        "critical": "Critical",
        "low": "Low",
        "medium": "Medium",
        "high": "High",
        "info": "Info",
        "positive": "Positive"
      },
    }
  }
}

//en.json

{
  "en": {
    "translation": {
      "severity": {
        "critical": "Critical",
        "low": "Low",
        "medium": "Medium",
        "high": "High",
        "info": "Info",
        "positive": "Positive"
      },
      "select": {
        "empty": "No Data"
      }
    }
  }
}

```
In most cases it would be used with [ThemeProvider](../../theme/README.md) and ConfigProvider
Lang by default — English (USA). 

### How To Use

```
import { LocalizationProvider } from '@kl/components/design-system/context'

<LocalizationProvider locale='en'>
  <App />
</LocalizationProvider>;

```
