import { Size } from '@design-system/types'

import { BasicUploadProps } from './types'

type Defaults = Required<Pick<BasicUploadProps,
'buttons'
| 'errorButtons'
| 'height'
| 'icon'
| 'iconFile'
| 'loadingButtons'
| 'status'
| 'successButtons'
>>

export const defaults: Defaults = {
  buttons: [{ mode: 'secondary', size: Size.Large, text: 'upload.addFiles' }],
  errorButtons: [
    { mode: 'secondary', size: Size.Large, text: 'upload.selectAnotherFile' },
    { mode: 'secondary', size: Size.Large, text: 'upload.repeat' }
  ],
  height: 400,
  icon: { name: 'Download', size: Size.Large },
  iconFile: { name: 'FileText', size: Size.Large },
  loadingButtons: [{ mode: 'secondary', size: Size.Large, text: 'upload.cancel' }],
  status: 'none',
  successButtons: [
    { mode: 'secondary', size: Size.Large, text: 'upload.selectAnotherFile' },
    { mode: 'secondary', size: Size.Large, text: 'upload.repeat' }
  ]
}

export const useDefaults = (props: BasicUploadProps): BasicUploadProps & Defaults => {
  return { ...defaults, ...props }
}
