import { Ref } from 'react'
import { ScrollbarProps as defaultScrollbarProps, Scrollbars } from 'react-custom-scrollbars-2'

import { ScrollbarThemeProps, ScrollbarToViewProps } from '../types'

export type ScrollbarProps = defaultScrollbarProps & ScrollbarThemeProps & { ref?: Ref<Scrollbars> }

export type ScrollbarViewProps = ScrollbarToViewProps<ScrollbarProps>
