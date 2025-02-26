import { TestingProps } from '@helpers/typesHelpers'
import { SegmentedButtonProps } from '@src/segmented-button/types'
import { SelectProps } from '@src/select/types'
import { ToggleProps } from '@src/toggle/types'

type QuickFilterLabelConfig = { label: string }

export type QuickFilterItem =
  ({ component: 'select', width?: string } & SelectProps & QuickFilterLabelConfig)
  | ({ component: 'segmented-button' } & SegmentedButtonProps & QuickFilterLabelConfig)
  | ({ component: 'toggle' } & ToggleProps)

export type QuickFilterProps = {
  /** Filters array */
  filters: QuickFilterItem[],
  /** Label position */
  labelPosition?: 'before' | 'top',
  /** Disabled state */
  disabled?: boolean
} & TestingProps
