import { create } from '@storybook/theming'
import { version } from '../package.json'

import '../design-system/global-style'

export default create({
  base: 'light',
  fontBase: 'Kaspersky Sans',
  brandTitle: `${version}`,
  brandImage:
    'https://www.kaspersky.ru/content/ru-ru/images/homepage/kaspersky-logo.svg'
})
