import { ComponentThemeContext } from '../config'
import { LinkColorConfig } from '@src/link/types'
import { link as defaultLink, linkSize as defaultLinkSize } from '../light/link'

export const link = ({ colors }: ComponentThemeContext): LinkColorConfig =>
  defaultLink({ colors })

export const linkSize = defaultLinkSize
