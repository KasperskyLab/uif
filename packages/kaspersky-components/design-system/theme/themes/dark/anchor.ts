import { AnchorColorConfig } from '@src/anchor-links/Anchor/types'
import { AnchorLinkColorConfig } from '@src/anchor-links/AnchorLink/types'
import { anchor as defaultAnchorsCreator } from '../light/anchor'
import { ComponentThemeContext } from '../config'

export const anchor = ({ colors }: ComponentThemeContext): AnchorColorConfig & AnchorLinkColorConfig => {
  const defaultAnchors = defaultAnchorsCreator({ colors })

  return {
    ...defaultAnchors,
    boxShadow: '0px 1px 1px 0px rgba(24, 24, 34, 0.80), 0px 0px 1px 0px rgba(247, 248, 249, 0.64)'
  }
}
