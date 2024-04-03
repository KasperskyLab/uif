import { ModalProps, ModalCssConfig, ModalViewProps, ModalThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedModal = (props: ModalProps): ModalViewProps => (
  useThemedComponent<ModalProps, ModalCssConfig, ModalThemeProps>(props, {
    componentName: 'modal',
    defaultValues: { mode: 'default', size: 'small' },
    propsToDrill: ['mode']
  })
)
