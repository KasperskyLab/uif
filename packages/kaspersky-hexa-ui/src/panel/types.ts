import { TestingProps } from '@helpers/typesHelpers'
import * as React from 'react'

export const panelTitleSize = ['small', 'medium', 'large'] as const
export type PanelTitleSize = typeof panelTitleSize[number]

export type PanelProps = {
  /** Panel body content */
  children?: React.ReactNode,
  /** Css class */
  className?: string,
  /** Resize control position */
  resizeHandle?: 'top' | 'left' | 'right' | 'bottom',
  /** Panel is resizable  **/
  resizable?: boolean,
  /** Panel is closable  **/
  closable?: boolean,
  /** Callback on close */
  onClose?: () => void,
  /** Panel is open  **/
  open?: boolean,
  /** Panel title text */
  title?: string,
  /** Panel title size */
  titleSize?: PanelTitleSize,
  /** Panel section bottom with ReactNode */
  sectionBottom?: React.ReactNode,
  /** Panel element after title with ReactNode */
  elementAfter?: React.ReactNode,
  /** Initial panel size */
  initialSize?: number
  /** Initial padding size */
  padding?: 'large' | 'medium',
  /** Panel layout for children panels */
  parentLayout?: boolean
} & TestingProps

export type PanelTitleProps = {
  text?: string,
  size?: PanelTitleSize
}
