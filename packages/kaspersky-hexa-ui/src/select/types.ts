import { Focus } from '@design-system/tokens/focus'
import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps, ValidationStatus } from '@helpers/typesHelpers'
import { SelectProps as RcSelectProps } from 'rc-select'
import { CustomTagProps } from 'rc-select/es/BaseSelect'
import { OptionProps as RcOptionProps } from 'rc-select/es/Option'
import { BaseOptionType as RcBaseOptionType, DefaultOptionType as RcDefaultOptionType } from 'rc-select/es/Select'
import React, { FocusEventHandler, PropsWithChildren, ReactNode } from 'react'

export type OptionType = Omit<RcOptionProps, 'isSelectOption'> & { options?: OptionType[], description?: string}

type OptionProp = RcBaseOptionType | RcDefaultOptionType

type RawValue = string | number

type LabeledValue = {
  key?: string,
  value: RawValue,
  label: React.ReactNode
}

declare type SelectValue = RawValue | RawValue[] | OptionProp | OptionProp[]

export type StateProps = {
  color?: string,
  background?: string,
  border?: string,
  boxShadow?: string
}

export type SelectColorConfig = Focus & {
  enabled: StateProps & {
    dropdown: StateProps,
    option: StateProps & {
      description: string
    },
    placeholder: StateProps,
    loadingError: StateProps
  },
  disabled: StateProps & {
    placeholder?: StateProps,
    option: StateProps
  },
  selected: StateProps & {
    option: StateProps
  },
  hover: StateProps & {
    option: StateProps
  },
  readonly?: StateProps
} & Partial<Record<ValidationStatus, StateProps>>

export type SelectCssConfig = SelectColorConfig

export type SelectThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type LabelValue = string | number | LabeledValue

export type SelectProps<ValueType = any, > = SelectThemeProps & PropsWithChildren<{
  /** Footer renderer */
  renderFooter?: () => JSX.Element,
  /** Header renderer */
  renderHeader?: () => JSX.Element,
  /** Entire dropdown renderer. This prop is directly passing to Antd Select */
  renderDropdown?: (menu: React.ReactElement) => React.ReactElement,
  id?: string,
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
  /** Is readonly */
  readOnly?: boolean,
  /** Validation status */
  validationStatus?: ValidationStatus,
  /** The class name of dropdown menu */
  dropdownClassName?: string,
  dropdownMaxHeight?: number,
  /**
   * If true, filter options by input, if function,
   * filter options against it. The function will receive two arguments,
   * inputValue and option, if the function returns true, the option will be included in the filtered set;
   * Otherwise, it will be excluded. By default filtered with label and inputValue.
   */
  filterOption?: ((input: string, option: OptionProp) => boolean) | boolean,
  /** Sort function for search options sorting, see Array.sort's compareFunction */
  filterSort?: (optionA: OptionProp, optionB: OptionProp) => number,
  /** Parent Node which the selector should be rendered to */
  getPopupContainer?: ((node: HTMLElement) => HTMLElement) | undefined,
  /** If set to true, the select container will close when the parent scrollable element is scrolled */
  closeOnParentScroll?: boolean,
  /** Indicate loading state */
  loading?: boolean,
  /** Loading error content showing in the dropdown. Overrides notFoundContent, options and notFoundContent props  */
  loadingError?: React.ReactElement | string,
  /** Max tag count to show. responsive will cost render performance */
  maxTagCount?: number | 'responsive',
  /** Placeholder for not showing tags */
  maxTagPlaceholder?: RcSelectProps['maxTagPlaceholder'],
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
  /** Show spinner at the end of options */
  hasMore?: boolean,
  /**
   * Called when the user scrolls to the end of options. Using with *hasMore* prop
   * Note: Does not work if the *virtual* prop is false
   * Note 2: Trigger the function only once. Make sure it properly cached with useCallback
   */
  onLoadMore?(): void,
  /** Called when blur */
  onBlur?: FocusEventHandler,
  /** Called when select an option or input value change */
  onChange?: (value: ValueType, option: OptionProp | OptionProp[]) => void,
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
  onFocus?: FocusEventHandler,
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
  style?: React.CSSProperties,
  /** Customize tag render, only applies when mode is set to multiple or tags */
  tagRender?: (props: CustomTagProps) => React.ReactElement,
  /** The style of dropdown menu */
  dropdownStyle?: React.CSSProperties,
  /** Shorthand getPopupContainer={() => document.body} */
  usePortal?: boolean
}> & TestingProps

export type SelectViewProps = ToViewProps<SelectProps, SelectCssConfig, SelectThemeProps> & {
  setSelectOffsetWidth?: (width: number) => void
}
