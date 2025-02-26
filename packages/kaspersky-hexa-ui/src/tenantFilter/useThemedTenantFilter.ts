import { useThemedComponent } from '@helpers/useThemedComponent'

import { TenantFilterCssConfig, TenantFilterProps, TenantFilterThemeProps, TenantFilterViewProps } from './types'

export const useThemedTenantFilter = (props: TenantFilterProps): TenantFilterViewProps => (
  useThemedComponent<TenantFilterProps, TenantFilterCssConfig, TenantFilterThemeProps>(props, {
    componentName: 'tenantFilter',
    defaultValues: {},
    propsToDrill: ['theme']
  })
)
