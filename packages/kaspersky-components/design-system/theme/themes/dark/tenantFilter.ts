import { ComponentThemeContext } from '@design-system/theme'
import { TenantFilterCssConfig } from '@src/tenantFilter/types'
import { tenantFilter as defaultTenantFilter } from '../light/tenantFilter'

export const tenantFilter = ({ colors }: ComponentThemeContext): TenantFilterCssConfig => defaultTenantFilter({ colors })
