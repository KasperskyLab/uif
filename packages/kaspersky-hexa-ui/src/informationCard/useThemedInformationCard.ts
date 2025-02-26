import { useThemedComponent } from '@helpers/useThemedComponent'

import { InformationCardCssConfig, InformationCardProps, InformationCardStyleProps, InformationCardViewProps } from './types'

export const useThemedInformationCard = (props: InformationCardProps): InformationCardViewProps => (
  useThemedComponent<InformationCardProps, InformationCardCssConfig, InformationCardStyleProps>(props, {
    componentName: 'informationCard',
    defaultValues: { size: 'medium' }
  })
)
