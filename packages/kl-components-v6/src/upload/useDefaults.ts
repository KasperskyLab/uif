import { Size } from '../../design-system/types'
import { UploadProps } from './types'

type Defaults = Required<Pick<UploadProps,
'icon'
| 'iconFile'
| 'buttons'
| 'loadingButtons'
| 'errorButtons'
| 'successButtons'
>>
const defaults: Defaults = {
  icon: { size: 'large', name: 'Download' },
  iconFile: { size: 'large', name: 'FileText' },
  buttons: [{ size: Size.Large, text: 'upload.addFiles', mode: 'secondary' }],
  loadingButtons: [{ size: Size.Large, text: 'upload.cancel', mode: 'secondary' }],
  errorButtons: [{ size: Size.Large, text: 'upload.selectAnotherFile', mode: 'secondary' }, { size: Size.Large, text: 'upload.repeat', mode: 'secondary' }],
  successButtons: [{ size: Size.Large, text: 'upload.selectAnotherFile', mode: 'secondary' }, { size: Size.Large, text: 'upload.repeat', mode: 'secondary' }]
}

export const useDefaults = (props: UploadProps): UploadProps & Defaults => {
  return { ...defaults, ...props }
}
