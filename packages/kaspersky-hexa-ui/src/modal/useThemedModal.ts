import { useThemedComponent } from '@helpers/useThemedComponent'

import { ModalCssConfig, ModalProps, ModalThemeProps, ModalViewProps } from './types'

export const useThemedModal = (props: ModalProps): ModalViewProps => (
  useThemedComponent<ModalProps, ModalCssConfig, ModalThemeProps>(props, {
    componentName: 'modal',
    defaultValues: { mode: 'default', size: 'small' },
    propsToDrill: ['mode']
  })
)
