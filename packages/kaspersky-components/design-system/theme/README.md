## Theme Provider

Based on `styled-components`

ThemeProvider — wrapper for styling components based on design tokens
This component provides a theme for all components via a context API.

For more information on existing themes, see [here]('../theme)
You can learn more about design tokens [here]('../tokens)

### How To Use
```
import React, { useState, useCallback, useEffect } from 'react'
import { ThemeProvider } from '@kaspersky/components/design-system/theme'
import { ThemeKey } from '@kaspersky/components/design-system/types'

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

In the render tree, all styled components will have access to the provided theme, even if they are multiple levels deep.

This is provided using the theme configurator [THEME_CONFIG](../../design-system/theme/themes/config.ts)
and hook [useTheme](../../design-system/theme/hooks'), providing access to component tokens.
