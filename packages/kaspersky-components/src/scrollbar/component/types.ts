import { ScrollbarProps as defaultScrollbarProps } from 'react-custom-scrollbars-2'
import { ScrollbarThemeProps, ScrollbarToViewProps } from '../types'

export type ScrollbarProps = defaultScrollbarProps & ScrollbarThemeProps

export type ScrollbarViewProps = ScrollbarToViewProps<ScrollbarProps>
