import { InformationCardProps, InformationCardViewProps, InformationCardCssConfig, InformationCardStyleProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedInformationCard = (props: InformationCardProps): InformationCardViewProps => (
  useThemedComponent<InformationCardProps, InformationCardCssConfig, InformationCardStyleProps>(props, {
    componentName: 'informationCard',
    defaultValues: { size: 'medium' }
  })
)
