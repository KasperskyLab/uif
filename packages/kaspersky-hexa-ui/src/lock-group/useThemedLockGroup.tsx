import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'
import { ThemeProps } from '@helpers/typesHelpers'

import { LockGroupDesignTokens, LockGroupProps, LockGroupViewProps } from './types'

export const useThemedLockGroup = (props: LockGroupProps): LockGroupViewProps => (
  useComponentCssConfig<LockGroupProps, LockGroupDesignTokens, ThemeProps>(props, {
    componentName: 'lockGroup',
    defaultValues: {}
  })
)
