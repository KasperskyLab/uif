import { Theme } from '@design-system/types'
import { SelectColorConfig } from '@src/select/types'
import { TreeColorConfig } from '@src/tree/types'
import { TreeSelectProps as TreeSelectPropsAntd } from 'antd'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type TreeSelectThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type TreeSelectProps = TreeSelectPropsAntd & TestingProps & TreeSelectThemeProps

export type TreeSelectViewProps = ToViewProps<TreeSelectProps, TreeSelectCssConfig, TreeSelectThemeProps>

export type TreeSelectColorConfig = {
  select: SelectColorConfig,
  tree: TreeColorConfig
}

export type TreeSelectCssConfig = TreeSelectColorConfig
