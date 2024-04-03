import * as React from 'react'
import { LabeledValue, SelectProps as AntdSelectProps } from 'antd/es/select'
import { ReactNode } from 'react'
import { Theme } from '@design-system/types'
import { CustomTagProps } from 'rc-select/lib/BaseSelect'
import AntdSelectRef from 'antd/lib/select'
import { Focus } from '@design-system/tokens/focus'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

type OptionType = unknown

declare type RawValue = string | number

type OptionProp = {
  label: ReactNode,
  disabled?: boolean,
  value: RawValue
}

declare type SelectValue = RawValue | RawValue[] | OptionProp | OptionProp[]

export type StateProps = {
  color?: string,
  background?: string,
  borderColor?: string,
  boxShadow?: string
}

export type SelectColorConfig = Focus & {
  normal: StateProps & {
    dropdown: StateProps,
    option: StateProps,
    placeholder: StateProps,
    addButton: StateProps
  },
  disabled: StateProps & {
    placeholder?: StateProps,
    option: StateProps
  },
  error: StateProps,
  selected: StateProps & {
    option: StateProps
  },
  hover: StateProps & {
    option: StateProps
  }
}

export type SelectCssConfig = SelectColorConfig

export type SelectThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type SelectRef = typeof AntdSelectRef

export type LabelValue = string | number | LabeledValue

export type SelectProps<ValueType = any, > = SelectThemeProps & {
  /** Footer renderer */
  renderFooter?: () => JSX.Element,
  /** Header renderer */
  renderHeader?: () => JSX.Element,
  /** Entire dropdown renderer. This prop is directly passing to Antd Select */
  renderDropdown?: (menu: React.ReactElement) => React.ReactElement,
  id?: string,
  /** If selected item icon should be visible */
  isItemSelectedIconVisible?: boolean,
  /** Set mode of Select */
  mode?: 'multiple' | 'tags',
  /** Show clear button */
  allowClear?: boolean,
  /** Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags */
  autoClearSearchValue?: boolean,
  /** Get focus by default */
  autoFocus?: boolean,
  /** Initial selected option */
  defaultValue?: LabelValue | LabelValue[],
  /** Whether disabled select */
  disabled?: boolean,
  /** Error flag */
  error?: boolean,
  /** The class name of dropdown menu */
  dropdownClassName?: string,
  /**
   * If true, filter options by input, if function,
   * filter options against it. The function will receive two arguments,
   * inputValue and option, if the function returns true, the option will be included in the filtered set;
   * Otherwise, it will be excluded. By default filtered with label and inputValue.
   */
  filterOption?: ((input: string, option: OptionProp) => boolean) | boolean,
  /** Sort function for search options sorting, see Array.sort's compareFunction */
  filterSort?: (optionA: OptionType, optionB: OptionType) => number,
  /** Parent Node which the selector should be rendered to */
  getPopupContainer?: ((node: HTMLElement) => HTMLElement) | undefined,
  /** If set to true, the select container will close when the parent scrollable element is scrolled */
  closeOnParentScroll?: boolean,
  /** Indicate loading state */
  loading?: boolean,
  /** Max tag count to show. responsive will cost render performance */
  maxTagCount?: number | 'responsive',
  /** Placeholder for not showing tags */
  maxTagPlaceholder?: AntdSelectProps['maxTagPlaceholder'],
  /** Max tag text length to show */
  maxTagTextLength?: number,
  /** Specify content to show when no result matches */
  notFoundContent?: ReactNode,
  /** Controlled open state of dropdown */
  open?: boolean,
  /** Which prop value of option will be used for filter if filterOption is true. If options is set, it should be set to label */
  optionFilterProp?: string,
  /** Which prop value of option will render as content of select */
  optionLabelProp?: string,
  /** Select options. Will get better perf than jsx definition */
  options?: OptionType[],
  /** Placeholder of select */
  placeholder?: ReactNode,
  /** The position where the selection box pops up */
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight',
  /** The current input "search" text */
  searchValue?: string,
  /** Whether to show the drop-down arrow */
  showArrow?: boolean,
  /** Whether select is searchable */
  showSearch?: boolean,
  /** Separator used to tokenize, only applies when mode="tags" */
  tokenSeparators?: string[],
  /**
   * Allowed add non unique values in tag mode. In this mode the original value lies in title field.
   * Value of any element have LabeledValue type even if you give it a set of rings
   * ['aa', 'aa'] => [{label: 'aa', value: {uniqueId}, {label: 'aa', value: {uniqueId2}}]
   */
  allowNonUniqueValues?: boolean,
  /** Current selected option (considered as a immutable array) */
  value?: LabelValue | LabelValue[],
  /** Disable virtual scroll when set to false */
  virtual?: boolean,
  /** Called when blur */
  onBlur?: () => void,
  /** Called when select an option or input value change */
  onChange?: (value: ValueType, option: OptionType | OptionType[]) => void,
  /** Called when clear */
  onClear?: () => void,
  /**
   * Called when an option is deselected, param is the selected option's value.
   * Only called for multiple or tags, effective in multiple or tags mode only
   */
  onDeselect?: (value: SelectValue, option: OptionProp | OptionProp[]) => void,
  /** Called when dropdown opens */
  onDropdownVisibleChange?: (open: boolean) => void,
  /** Called when focused */
  onFocus?: () => void,
  /** Called when key is pressed */
  onInputKeyDown?: () => void,
  /** Called when mouse enter */
  onMouseEnter?: () => void,
  /** Called when mouse leaves */
  onMouseLeave?: () => void,
  /** Called when dropdown scrolls */
  onPopupScroll?: () => void,
  /** Callback function that is fired when input changed */
  onSearch?: (value: string) => void,
  /** Called when an option is selected, the params are option's value (or key) and option instance */
  onSelect?: (value: SelectValue, option: OptionProp | OptionProp[]) => void,
  /** Whether to embed label in value, turn the format of value from string to { value: string, label: ReactNode } */
  labelInValue?: boolean,
  /** Custom class name */
  className?: string,
  /** Customize tag render, only applies when mode is set to multiple or tags */
  tagRender?: (props: CustomTagProps) => React.ReactElement,
  /** The style of dropdown menu */
  dropdownStyle?: React.CSSProperties,
  /** Shorthand getPopupContainer={() => document.body} */
  usePortal?: boolean
} & TestingProps

export type SelectViewProps = ToViewProps<SelectProps, SelectCssConfig, SelectThemeProps> & { rootHashClass?: string }

/** @deprecated Use SelectProps instead */
export type ISelectProps = SelectProps
/** @deprecated Use SelectViewProps instead */
export type ISelectViewProps = SelectViewProps
/** @deprecated Use SelectThemeProps instead */
export type SelectStyleProps = SelectThemeProps
