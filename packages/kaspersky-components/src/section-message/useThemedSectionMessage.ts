import { SectionMessageProps, SectionMessageViewProps, SectionMessageCssConfig, SectionMessageThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedSectionMessage = (props: SectionMessageProps): SectionMessageViewProps => (
  useThemedComponent<SectionMessageProps, SectionMessageCssConfig, SectionMessageThemeProps>(props, {
    componentName: 'sectionMessage',
    defaultValues: { mode: 'info' },
    propsToDrill: ['mode']
  })
)
