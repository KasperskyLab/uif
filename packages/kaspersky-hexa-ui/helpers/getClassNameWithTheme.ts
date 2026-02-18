/* eslint-disable no-redeclare */
import { Theme } from '@design-system/types'
import cn from 'classnames'

export function getClassNameWithTheme(props: { className?: string, theme?: Theme }): string
export function getClassNameWithTheme(className?: string, theme?: Theme): string
export function getClassNameWithTheme (arg1: any, arg2?: any): string {
  let className: string | undefined
  let theme: Theme | undefined

  if (typeof arg1 === 'object') {
    className = arg1.className
    theme = arg1.theme
  } else {
    className = arg1
    theme = arg2
  }

  const themeClassName = theme ? `theme-${theme}` : ''

  return cn(className, themeClassName)
}
