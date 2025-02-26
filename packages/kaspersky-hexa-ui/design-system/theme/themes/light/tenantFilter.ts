import { ComponentThemeContext } from '@design-system/theme'
import { TenantFilterCssConfig } from '@src/tenantFilter/types'

export const tenantFilter = ({ colors }: ComponentThemeContext): TenantFilterCssConfig => ({
  highlight: colors.input_code_viewer.bg.highlight
})
