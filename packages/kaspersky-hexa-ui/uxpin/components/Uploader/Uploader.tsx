import React from 'react'

import { Uploader as HexaUploader } from '@src/upload'
import { UploaderProps } from '@src/upload/types'

import { previewUploadCustomRequest } from '../../preview'

const Uploader = ({
  customRequest = previewUploadCustomRequest,
  description = 'Maximum 8 files, total size up to 320 KB',
  maxCount = 8,
  maxTotalSize = 320,
  ...props
}: UploaderProps): JSX.Element => (
  <HexaUploader
    customRequest={customRequest}
    description={description}
    maxCount={maxCount}
    maxTotalSize={maxTotalSize}
    {...props}
  />
)

export default Uploader
