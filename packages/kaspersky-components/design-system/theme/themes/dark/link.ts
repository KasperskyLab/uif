import { ComponentThemeContext } from '../config'
import { link as defaultLink, linkSize as defaultLinkSize } from '../light/link'

export const link = ({ colors }: ComponentThemeContext) => defaultLink({ colors })

export const linkSize = defaultLinkSize
