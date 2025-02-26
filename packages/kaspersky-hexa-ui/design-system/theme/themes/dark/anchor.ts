import { AnchorColorConfig } from '@src/anchor-links/Anchor/types'
import { AnchorLinkColorConfig } from '@src/anchor-links/AnchorLink/types'

import { ComponentThemeContext } from '../config'
import { anchor as defaultAnchor } from '../light/anchor'

export const anchor = ({ colors, effects }: ComponentThemeContext): AnchorColorConfig & AnchorLinkColorConfig =>
  defaultAnchor({ colors, effects })
