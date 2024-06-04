import { Ref } from 'react'
import Scrollbars, { ScrollbarProps as defaultScrollbarProps } from 'react-custom-scrollbars-2'
import { ScrollbarThemeProps, ScrollbarToViewProps } from '../types'

export type ScrollbarProps = defaultScrollbarProps & ScrollbarThemeProps & { ref?: Ref<Scrollbars> }

export type ScrollbarViewProps = ScrollbarToViewProps<ScrollbarProps>
