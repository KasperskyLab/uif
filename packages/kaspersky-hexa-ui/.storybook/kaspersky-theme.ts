import { create } from 'storybook/theming'

import { version } from '../package.json'

import '@kaspersky/hexa-ui-core/fonts'

import lightThemeLogo from './assets/Hexa_UI_Light.svg'

export default create({
  base: 'light',
  fontBase: 'Kaspersky Sans',
  brandTitle: `${version}`,
  brandImage: lightThemeLogo.toString()
})
