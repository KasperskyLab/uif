import { TestingProps } from '@helpers/typesHelpers'
import { DropdownOverlayProp } from '@src/dropdown/types'
import { IndicatorMode } from '@src/indicator/types'
import { TextboxProps } from '@src/input'

type OmittedTextboxProps = Omit<TextboxProps, 'readOnly' | 'theme'>

export type SearchProps = OmittedTextboxProps & {
  searchIconTestId?: string,
  dropdownOverlay?: DropdownOverlayProp
}

export type SearchIconProps = TestingProps & {
  [key: string]: any,
  color?: string,
  indicator?: boolean,
  modeIndicator?: IndicatorMode
}
