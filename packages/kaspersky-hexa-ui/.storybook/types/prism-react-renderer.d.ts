import type { PrismTheme } from 'prism-react-renderer'

declare module 'prism-react-renderer' {
  export const themes: {
    github: PrismTheme
    vsDark: PrismTheme
  }
}
