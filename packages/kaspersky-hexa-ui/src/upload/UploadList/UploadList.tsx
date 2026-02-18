import * as React from 'react'

import { UploadFile } from '../types'

import { FileItem } from './FileItem'
import { UploadListWrapper } from './wrappers'

type UploadListProps = {
  disabled?: boolean,
  items: Array<UploadFile>,
  onDownload?: (file: UploadFile) => void,
  onRemove?: (file: UploadFile) => void,
  onUpload?: (file: UploadFile) => void,
  showProgress: boolean,
  truncateFileName?: boolean
}

export function UploadList ({
  disabled,
  items = [],
  onDownload,
  onRemove,
  onUpload,
  showProgress,
  truncateFileName
}: UploadListProps) {
  const onInternalDownload = (file: UploadFile) => {
    if (typeof onDownload === 'function') {
      onDownload(file)
    } else if (file.url) {
      window.open(file.url)
    }
  }

  return (
    <UploadListWrapper>
      {items.map(file => (
        <FileItem
          {...file}
          key={file.uid}
          disabled={disabled}
          onDownload={() => onInternalDownload(file)}
          onRemove={() => onRemove?.(file)}
          onUpload={() => onUpload?.(file)}
          percent={showProgress ? file.percent : undefined}
          truncateName={truncateFileName}
        />
      ))}
    </UploadListWrapper>
  )
}
