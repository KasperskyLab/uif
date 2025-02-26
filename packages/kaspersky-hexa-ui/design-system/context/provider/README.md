# Providers in Hexa UI

## Config Provider

ConfigProvider является интеграцией [ThemeProvider](../../theme/README.md) и LocalizationProvider.
Он обеспечивает единую поддержку локализации и темизации компонентной базы.
В качестве props принимает `theme` и `locale` 

### How To Use
```
import React, { useState, useCallback, useEffect } from 'react'
import { ConfigProvider } from '@kaspersky/components/design-system/context'
import { ThemeKey } from '@kaspersky/components/design-system/types'
import { LangType } from '@kaspersky/components/helpers/localization/types'

const Layout = () => {
  const [theme, setTheme] = useState<ThemeKey>(ThemeKey.Light)
  const [locale, setLocale] = useState<LangType>('en-us')

  const onKeyDown = useCallback((e) => {
    // custom shortcut
    if (e.keyCode === 88 && e.ctrlKey && e.shiftKey) {
      if (theme === ThemeKey.Light) {
        setTheme(ThemeKey.Dark)
        setLocale('ru-ru')
      } else {
        setTheme(ThemeKey.Light)
        setLocale('en-us')
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

LocalizationProvider обеспечивает поддержку локализации для всей компонентной базы.
Based on [I18nextProvider](https://react.i18next.com/latest/i18nextprovider)

Локализация есть у всех компонентов, где есть элементы с текстом. 
Для этого в @kaspersky/components/helpers/localization необходимо передать объект с новыми значениями текстовых полей. 
Интерфейс каждого словаря экпортируется из @kaspersky/components/helpers/localization, например, `severity`
```
// ru.json
{
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


//en.json

{
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

```
В большинстве случаев будет использоваться совместо с [ThemeProvider](../../theme/README.md) и ConfigProvider
Языковой стандарт по умолчанию — английский (США). 

### How To Use

```
import { LocalizationProvider } from '@kaspersky/components/design-system/context'

<LocalizationProvider locale='en-us'>
  <App />
</LocalizationProvider>;

```
