import { anchors as defaultAnchors, anchorsSize as defaultAnchorsSize } from '../light/anchor'
import { ComponentThemeContext } from '../config'

export const anchors = ({ colors }: ComponentThemeContext) => defaultAnchors({ colors })

export const anchorsSize = defaultAnchorsSize
