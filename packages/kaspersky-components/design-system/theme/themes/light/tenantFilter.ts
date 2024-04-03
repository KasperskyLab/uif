import { ComponentThemeContext } from '@design-system/theme'
import { TenantFilterCssConfig } from '@src/tenantFilter/types'

export const tenantFilter = ({ colors }: ComponentThemeContext): TenantFilterCssConfig => ({
  highlight: colors.elements.highlight
})
