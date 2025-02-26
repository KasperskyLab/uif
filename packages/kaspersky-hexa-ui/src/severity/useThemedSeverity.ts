import { useThemedComponent } from '@helpers/useThemedComponent'

import { SeverityCssConfig, SeverityProps, SeverityThemeProps, SeverityViewProps } from './types'

export const useThemedSeverity = (props: SeverityProps): SeverityViewProps => (
  useThemedComponent<SeverityProps, SeverityCssConfig, SeverityThemeProps>(props, {
    componentName: 'severity',
    defaultValues: { mode: 'medium' },
    propsToDrill: ['mode']
  })
)
