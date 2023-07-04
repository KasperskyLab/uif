import { useTheme } from 'styled-components'

export const useThemeSafe = () => {
  const theme = useTheme()

  if (!theme) {
    throw new Error(
      'Could not find theme in context. You likely forgot to wrap React Tree with ThemeProvider.'
    )
  }
}
