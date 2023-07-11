import { HTMLAttributes } from 'react'
import { icons, themeColorsType, themeColors } from '@design-system/tokens'
import { SizingType } from '@design-system/types'

export type IconSizes = Exclude<SizingType, 'extraLarge' >

export type IconCssConfig = {
  color?: string
}

export type IconProps = HTMLAttributes<HTMLSpanElement> & {
  [key: string]: any,
  /**
   * Hard set color of icon,
   */
  color?: string,
  /**
   * Size of icon 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'
   */
  size: IconSizes,
  /**
   * Name of Icon
   */
  name: typeof icons[IconProps['size']][number],
  // name: typeof icons[keyof typeof icons][number],
  /**
   * Themed Color
   */
  themedColor?: keyof typeof themeColors['text-icons-elements'],
  /**
   * Test id
   */
  klId?: string
}

export type IconColorConfig = {
  color?: themeColorsType
}
