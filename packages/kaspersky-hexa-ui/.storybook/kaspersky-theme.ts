import { version } from '../package.json'

import '@kaspersky/hexa-ui-core/fonts'

import { createStorybookTheme } from './adapters/storybook'
import lightThemeLogo from './assets/Hexa_UI_Light.svg'

export default createStorybookTheme({
  base: 'light',
  fontBase: 'Kaspersky Sans',
  brandTitle: `${version}`,
  brandImage: lightThemeLogo.toString()
})
