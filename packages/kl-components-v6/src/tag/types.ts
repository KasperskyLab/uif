import { ReactNode, MouseEvent, HTMLAttributes } from 'react'
import { IconProps } from '../icon'
import { SizingType, Theme } from '../../design-system/types'
import { TextSizes, themeColors } from '../../design-system/tokens'

export type TagSize = Extract<SizingType, 'small' | 'medium'>

export type TagSizeConfig = TextSizes & {
  padding: string,
  gap: string,
  borderRadius: string
}

export type TagColorConfig = {
  iconColor: string,
  closableIconColor: string,
  backgroundColor:string,
  color: string,
  disabled: {
    backgroundColor: string,
    color: string
  }
}

export type TagCssConfig = TagColorConfig & TagSizeConfig

export type TextColor = keyof typeof themeColors['text-icons-elements'];
export type BackgroundColor = keyof typeof themeColors['tags']
export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  /**
    * content
    */
  children?: ReactNode,
  /**
     *  component unique id
     */
  klId?: string,
  /**
     *  size
     */
  size?: TagSize,
  /**
     *  text color
     */

  icon?: IconProps['name'],
  /**
     *  theme
     */
  theme?: Theme,
  /**
     *  background color
     */
  backgroundColor?: BackgroundColor,
  /**
     *  is it closable?
     */
  closable?: boolean,

  /**
   *  custom style
   */
  overrides?: {
  /**
     *  custom text color
     */
    textColor?: string,
    /**
     *  custom background color
     */
    backgroundColor?: string,
    /**
     *  custom icon color
     */
    iconColor?: string,
    /**
     *  custom closable icon color
     */
    closableIconColor?: string,
    /**
     *  custom text color in disabled state
     */
    disabledTextColor?: string,
    /**
     *  custom background color in disabled state
     */
    disabledBackgroundColor?: string
  },

  /**
   *  label
   */
  label?: ReactNode,

  /**
   *  is disabled
   */
  disabled?: boolean,

  /**
   *  onClose event if closable
   */
  onClose?: (event?: MouseEvent<HTMLElement, MouseEvent>) => void
}
