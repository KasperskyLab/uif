import { ActionButton } from '@src/action-button'
import { Loader } from '@src/loader'
import { Space } from '@src/space'
import * as React from 'react'

import { CrossS, Download2, File, Reload, StatusDangerOutlineSquare } from '@kaspersky/icons/16'

import {
  FileError,
  FileName,
  FileSize,
  FileWrapper
} from './wrappers'

export type FileItemProps = {
  className?: string,
  disabled?: boolean,
  error?: any,
  name: string,
  onDownload?: () => void,
  onRemove?: () => void,
  onUpload?: () => void,
  percent?: number,
  size: number,
  status?: 'done' | 'uploading' | 'removed' | 'error' | 'success',
  truncateName?: boolean
}

export function FileItem ({
  className,
  disabled,
  name,
  onDownload,
  onRemove,
  onUpload,
  percent,
  size,
  status,
  truncateName,
  ...props
}: FileItemProps) {
  if (status === 'uploading' || status === undefined) {
    return (
      <FileWrapper $disabled={disabled} className={className}>
        <Space gap={8} wrap="nowrap" style={{ overflow: 'hidden' }}>
          {status === 'uploading' ? <Loader size="small" /> : <File className="file-icon" />}
          <FileName truncateName={truncateName}>{name}</FileName>
        </Space>
        <Space gap={8}>
          {size && <FileSize percent={percent} size={size} />}
          <ActionButton
            className="close-icon"
            disabled={disabled}
            icon={<CrossS />}
            onClick={onRemove}
            size="large"
          />
        </Space>
      </FileWrapper>
    )
  }

  if (status === 'error') {
    const error = typeof props.error === 'string'
      ? props.error
      : props.error instanceof Error
        ? props.error.message
        : String(props.error)

    return (
      <FileWrapper className={className} $disabled={disabled} $error align="flex-start">
        <Space align="flex-start" gap={8} wrap="nowrap" style={{ overflow: 'hidden' }}>
          <StatusDangerOutlineSquare className="error-icon" style={{ marginTop: 2 }} />
          <Space align="flex-start" direction="vertical" wrap="nowrap" style={{ overflow: 'hidden' }}>
            <FileName style={{ maxWidth: '100%' }} truncateName={truncateName}>{name}</FileName>
            <FileError>{error}</FileError>
          </Space>
        </Space>
        <Space gap={4}>
          <ActionButton
            disabled={disabled}
            icon={<Reload />}
            onClick={onUpload}
            size="large"
          />
          <ActionButton
            className="close-icon"
            disabled={disabled}
            icon={<CrossS />}
            onClick={onRemove}
            size="large"
          />
        </Space>
      </FileWrapper>
    )
  }

  return (
    <FileWrapper $disabled={disabled} $done className={className} onClick={disabled ? undefined : onDownload}>
      <Space gap={8} wrap="nowrap" style={{ overflow: 'hidden' }}>
        <File className="file-icon" />
        {!disabled && <Download2 className="download-icon" />}
        <FileName truncateName={truncateName}>{name}</FileName>
      </Space>
      <Space gap={8}>
        {size && <FileSize size={size} />}
        <ActionButton
          className="close-icon"
          disabled={disabled}
          icon={<CrossS />}
          onClick={event => {
            event.stopPropagation()
            onRemove?.()
          }}
          size="large"
        />
      </Space>
    </FileWrapper>
  )
}
