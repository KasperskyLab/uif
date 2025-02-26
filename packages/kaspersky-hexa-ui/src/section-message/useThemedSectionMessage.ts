import { useThemedComponent } from '@helpers/useThemedComponent'

import { SectionMessageCssConfig, SectionMessageProps, SectionMessageThemeProps, SectionMessageViewProps } from './types'

export const useThemedSectionMessage = (props: SectionMessageProps): SectionMessageViewProps => (
  useThemedComponent<SectionMessageProps, SectionMessageCssConfig, SectionMessageThemeProps>(props, {
    componentName: 'sectionMessage',
    defaultValues: { mode: 'info' },
    propsToDrill: ['mode']
  })
)
