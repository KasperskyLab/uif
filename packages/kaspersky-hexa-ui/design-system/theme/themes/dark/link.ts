import { LinkColorConfig } from '@src/link/types'

import { ComponentThemeContext } from '../config'
import { link as defaultLink, linkSize as defaultLinkSize } from '../light/link'

export const link = ({ colors, effects }: ComponentThemeContext): LinkColorConfig =>
  defaultLink({ colors, effects })

export const linkSize = defaultLinkSize
