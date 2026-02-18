import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps, ValidationStatus } from '@helpers/typesHelpers'
import { SelectColorConfig } from '@src/select/types'
import { TreeColorConfig } from '@src/tree/types'
import { TreeSelectProps as TreeSelectPropsAntd } from 'antd'

export type TreeSelectThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type TreeSelectProps = TreeSelectPropsAntd & TestingProps & TreeSelectThemeProps & {
  /** Validation status */
  validationStatus?: ValidationStatus
}

export type TreeSelectViewProps = ToViewProps<TreeSelectProps, TreeSelectCssConfig, TreeSelectThemeProps>

export type TreeSelectColorConfig = {
  select: SelectColorConfig,
  tree: TreeColorConfig
}

export type TreeSelectCssConfig = TreeSelectColorConfig
