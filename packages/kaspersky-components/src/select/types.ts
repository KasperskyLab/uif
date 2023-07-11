import * as React from 'react'
import { LabeledValue } from 'antd/es/select'
import { ReactNode } from 'react'

import { TextSizes } from '../../design-system/tokens'
import { Theme } from '../../design-system/types'

type OptionType = unknown

declare type RawValue = string | number

interface OptionProp {
  label: ReactNode,
  disabled?: boolean,
  value: RawValue
}

declare type SelectValue = RawValue | RawValue[] | OptionProp | OptionProp[]

export type StateProps = {
  color?: string,
  background?: string,
  borderColor?: string
}

export type SelectColorConfig = {
  normal: StateProps & {
    dropdown: StateProps & {
      alignTop: number
    },
    option: StateProps,
    focusBorder: string,
    placeholder: StateProps,
    icon: StateProps
  },
  disabled: StateProps,
  error: StateProps,
  selected: StateProps & {
    option: StateProps
  },
  active: {
    option: StateProps,
    focusBorder: string
  },
  hover: {
    option: StateProps
  }
}

export type SelectSizeConfig = TextSizes & {
  input: {
    borderRadius: string
  },
  dropdown: {
    borderRadius: string
  }
}

export type SelectTagsConfig = {
  tags: TextSizes & StateProps & {
    padding: string,
    gap: string,
    borderRadius: string
  }
}

export type SelectCssConfig = SelectColorConfig & SelectSizeConfig & SelectTagsConfig

export type SelectStyleProps = {
  /** Custom theme */
  theme?: Theme
}

export type ISelectProps<ValueType = any, > = SelectStyleProps & {
  /** Test id */
  klId?: string,
  /** Footer renderer */
  renderFooter?: () => JSX.Element,
  /** Header renderer */
  renderHeader?: () => JSX.Element,
  /** Entire dropdown renderer. This prop is directly passing to Antd Select  */
  renderDropdown?: (menu: React.ReactElement) => React.ReactElement,
  /** Is selected item icon should be visible */
  isItemSelectedIconVisible?: boolean,
  /** Set mode of Select */
  mode?: 'multiple' | 'tags',
  /** Show clear button */
  allowClear?: boolean,
  /**
   * Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags
   */
  autoClearSearchValue?: boolean,
  /** Get focus by default */
  autoFocus?: boolean,
  /** Initial selected option */
  defaultValue?: string | string[]
  | number | number[]
  | LabeledValue | LabeledValue[],
  /** Whether disabled select */
  disabled?: boolean,
  /** error flag */
  error?: boolean,
  /** The className of dropdown menu */
  dropdownClassName?: string,
  /**
   * If true, filter options by input, if function,
   * filter options against it. The function will receive two arguments,
   * inputValue and option, if the function returns true, the option will be included in the filtered set;
   * Otherwise, it will be excluded. By default filtered with label and inputValue.
   */
  filterOption?: ((input: string, option: OptionProp) => boolean) | boolean,
  /**
   * Sort function for search options sorting, see Array.sort's compareFunction
   */
  filterSort?: (optionA: OptionType, optionB: OptionType) => number,
  /** Parent Node which the selector should be rendered to */
  getPopupContainer?: ((node: HTMLElement) => HTMLElement) | undefined,
  /** Indicate loading state */
  loading?: boolean,
  /** Max tag count to show. responsive will cost render performance */
  maxTagCount?: number | 'responsive',
  /** Placeholder for not showing tags */
  maxTagPlaceholder?: ReactNode,
  /** Max tag text length to show */
  maxTagTextLength?: number,
  /**
   * Specify content to show when no result matches
   */
  notFoundContent?: ReactNode,
  /**
   * Controlled open state of dropdown
  */
  open?: boolean,
  /**
   * Which prop value of option will be used for filter if filterOption is true. If options is set, it should be set to label
   */
  optionFilterProp?: string,
  /**
   * Which prop value of option will render as content of select.
   */
  optionLabelProp?: string,
  /**
   * Select options. Will get better perf than jsx definition
   */
  options?: OptionType[],
  /** Placeholder of select */
  placeholder?: ReactNode,
  /** The position where the selection box pops up */
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight',
  /**
   * The current input "search" text
   */
  searchValue?: string,
  /**
   * Whether to show the drop-down arrow
   */
  showArrow?: boolean,
  /**
   * Whether select is searchable
   */
  showSearch?: boolean,
  /**
   * Separator used to tokenize, only applies when mode="tags"
   */
  tokenSeparators?: string[],
  /**
   * Current selected option (considered as a immutable array)
   */
  value?: string | string[]
  | number | number[]
  | LabeledValue | LabeledValue[],
  /**
   * Disable virtual scroll when set to false
   */
  virtual?: boolean,
  /**
   * Called when blur
   */
  onBlur?: () => void,
  /**
   * Called when select an option or input value change
   */
  onChange?: (value: ValueType, option: OptionType | OptionType[]) => void,
  /**
   * Called when clear
   */
  onClear?: () => void,
  /**
   * Called when an option is deselected, param is the selected option's value. Only called for multiple or tags, effective in multiple or tags mode only
   */
  onDeselect?: (value: SelectValue, option: OptionProp | OptionProp[]) => void,
  /**
   * Called when dropdown open
   */
  onDropdownVisibleChange?: (open: boolean) => void,
  /**
   * Called when focus
   */
  onFocus?: () => void,
  /**
   * Called when key pressed
   */
  onInputKeyDown?: () => void,
  /**
   * Called when mouse enter
   */
  onMouseEnter?: () => void,
  /**
   * Called when mouse leave
   */
  onMouseLeave?: () => void,
  /**
   * Called when dropdown scrolls
   */
  onPopupScroll?: () => void,
  /**
   * Callback function that is fired when input changed
   */
  onSearch?: (value: string) => void,
  /**
   * Called when an option is selected, the params are option's value (or key) and option instance
   */
  onSelect?: (value: SelectValue, option: OptionProp | OptionProp[]) => void
}

export type ISelectViewProps = Omit<ISelectProps, 'children' | 'size'> & { cssConfig: SelectCssConfig }
