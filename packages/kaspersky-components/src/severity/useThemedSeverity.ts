import { SeverityProps, SeverityViewProps, SeverityCssConfig, SeverityThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedSeverity = (props: SeverityProps): SeverityViewProps => (
  useThemedComponent<SeverityProps, SeverityCssConfig, SeverityThemeProps>(props, {
    componentName: 'severity',
    defaultValues: { mode: 'medium' },
    propsToDrill: ['mode']
  })
)
