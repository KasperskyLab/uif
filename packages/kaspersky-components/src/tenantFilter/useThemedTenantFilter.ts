import { TenantFilterProps, TenantFilterViewProps, TenantFilterCssConfig, TenantFilterThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedTenantFilter = (props: TenantFilterProps): TenantFilterViewProps => (
  useThemedComponent<TenantFilterProps, TenantFilterCssConfig, TenantFilterThemeProps>(props, {
    componentName: 'tenantFilter',
    defaultValues: {},
    propsToDrill: ['theme']
  })
)
