import { FC, MouseEventHandler, ReactNode } from 'react'
import { TextboxProps } from '../input/types'
import { DropdownOverlayProp } from '@src/dropdown/types'
import { TestingProps } from '@helpers/typesHelpers'

type OmittedTextboxProps = Omit<TextboxProps, 'valid' | 'positive' | 'readOnly' | 'theme'>

export type SearchProps = OmittedTextboxProps & {
  /** @deprecated Isn't used in Search */
  tags?: string[],
  /** Clear icon click handler */
  onClearClick?: () => void,
  dropdownOverlay?: DropdownOverlayProp
}

export type SearchVariantsProps = {
  /** @deprecated Not present in design system */
  WithButton: FC<SearchWithButtonProps>,
  /** @deprecated Use 'prefix' prop instead */
  WithIconLeft: FC<SearchWithIconProps>,
  /** @deprecated Use 'suffix' prop instead */
  WithIconRight: FC<SearchWithIconProps>,
  /** @deprecated Not used in design system */
  WithConfiguration: FC<SearchWithButtonProps>,
  /** @deprecated Not used in design system */
  WithDropdown: FC<SearchWithDropdownProps>
}

export type SearchIconProps = TestingProps & {
  [key: string]: any,
  color?: string,
  indicator?: boolean
}

/** @deprecated Not present in design system */
export type SearchWithButtonProps = SearchProps & {
  onClick?: MouseEventHandler<HTMLElement>,
  btnText?: ReactNode
}

/** @deprecated Not present in design system */
export type SearchWithIconProps = SearchProps & {
  icon?: ReactNode
}

/** @deprecated Not present in design system */
export type SearchWithDropdownProps = SearchProps & {
  btnText?: string,
  overlay?: DropdownOverlayProp
}
/** @deprecated Use SearchProps instead */
export type ISearchProps = SearchProps
