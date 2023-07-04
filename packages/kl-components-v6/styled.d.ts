import 'styled-components'
import { ThemeConfig } from './design-system/types'
declare module 'styled-components' {
  export type DefaultTheme = ThemeConfig
}
