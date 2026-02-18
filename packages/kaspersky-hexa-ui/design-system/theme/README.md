## Theme Provider

Based on `styled-components`

ThemeProvider - компонент wrapper для стилизации компонентов на основе дизайн-токентов
Этот компонент предоставляет тему для всех компонентов через контекстный API.

Более подробно ознакомиться с существующими темами можно [здесь]('../theme)
Более подробно ознакомиться с дизайн-токенами можно [здесь]('../tokens)

### How To Use
```
import React, { useState, useCallback, useEffect } from 'react'
import { ThemeProvider } from '@kaspersky/hexa-ui/design-system/theme'
import { ThemeKey } from '@kaspersky/hexa-ui/design-system/types'

const Layout = () => {
  const [theme, setTheme] = useState<ThemeKey>(ThemeKey.Light)

  const onKeyDown = useCallback((e) => {
    // custom shortcut
    if (e.keyCode === 88 && e.ctrlKey && e.shiftKey) {
      if (theme === ThemeKey.Light) {
        setTheme(ThemeKey.Dark)
      } else {
        setTheme(ThemeKey.Light)
      }
    }
  }, [theme])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}
```

В дереве рендеринга все стилизованные компоненты будут иметь доступ к предоставленной теме, даже если они имеют несколько уровней глубины.
Обеспечивается это благодаря конфигуратору тем [THEME_CONFIG](../../design-system/theme/themes/config.ts)
а так же хуку [useTheme](../../design-system/theme/hooks'), предоставляющим доступ к наборам токенов каждого компонента.
