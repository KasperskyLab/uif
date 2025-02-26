import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Button } from '@src/button'
import { Space } from '@src/space'
import cn from 'classnames'
import RcUpload, { UploadProps as RcUploadProps } from 'rc-upload'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { Upload } from '@kaspersky/icons/16'

import { Total } from './Total'
import { RcFile, UploadChangeParam, UploaderProps, UploadFile } from './types'
import { UploadList } from './UploadList/UploadList'
import { useThemedUploader } from './useThemedUploader'
import { useUploadHandlers } from './utils/useUploadHandlers'
import { hasCriticalErrors, useValidation } from './utils/useValidation'
import {
  DragAndDropMessage,
  DragContainerWrapper,
  SelectContainerWrapper,
  UploadIcon,
  UploadRequirements,
  ValidationMessage
} from './wrappers'

type RcUploadApi = {
  openFileDialog: () => void,
  post: (info: { action: string, data: Record<string, unknown>, origin: RcFile, parsedFile: RcFile }) => void,
  processFile: (file: RcFile, fileList: RcFile[]) => Promise<{ action: string, data: Record<string, unknown>, origin: RcFile, parsedFile: RcFile }>
}

export const Uploader: React.FC<UploaderProps & React.RefAttributes<{ upload: () => void }>> = React.forwardRef(({ size, ...props }: UploaderProps, ref) => {
  const { t } = useTranslation()
  const {
    className,
    description,
    disabled,
    fullHeight,
    manual,
    maxCount,
    maxFileSize,
    maxTotalSize,
    onChange,
    onDownload,
    onDownloadAll,
    onRemove,
    style,
    testAttributes,
    truncateFileName
  } = useTestAttribute(useThemedUploader(props))

  const [fileList, setFileList] = React.useState<UploadFile[]>([])
  const [dragState, setDragState] = React.useState<string>('drop')

  const isManualUploadingRef = React.useRef(false)
  const uploadRef = React.useRef<any>()

  const maxCountReached = !!maxCount && fileList.length >= maxCount

  function getRcUploaderApi (): RcUploadApi {
    return {
      ...uploadRef.current.uploader,
      openFileDialog: () => uploadRef.current.uploader.fileInput.click(),
      post: file => uploadRef.current.uploader.post(file)
    }
  }

  async function uploadFile (file: UploadFile) {
    isManualUploadingRef.current = true

    const api = getRcUploaderApi()
    const originFileObj = file.originFileObj!

    const info = await api.processFile(originFileObj, [originFileObj])
    api.post(info)

    isManualUploadingRef.current = false
  }

  React.useImperativeHandle(ref, () => ({
    upload: () => {
      fileList
        .filter(x => x.status !== 'error' && x.status !== 'uploading' && x.status !== 'done')
        .forEach(uploadFile)
    }
  }))

  const { validationErrors, beforeUpload } = useValidation(
    fileList,
    isManualUploadingRef,
    LIST_IGNORE,
    manual,
    maxFileSize,
    maxCount,
    maxTotalSize
  )

  const onInternalChange = (
    file: UploadFile,
    changedFileList: UploadFile[],
    event?: { percent: number }
  ) => {
    let cloneList = [...changedFileList]

    // Cut to match count
    if (maxCount === 1) {
      cloneList = cloneList.slice(-1)
    } else if (maxCount) {
      cloneList = cloneList.slice(0, maxCount)
    }

    setFileList(cloneList)

    const changeInfo: UploadChangeParam = {
      file,
      fileList: cloneList
    }

    if (event) {
      changeInfo.event = event
    }

    onChange?.(changeInfo)
  }

  const {
    handleRemove,
    onBatchStart,
    onError,
    onProgress,
    onSuccess
  } = useUploadHandlers(
    fileList,
    onInternalChange,
    LIST_IGNORE,
    file => uploadRef.current?.abort(file),
    onRemove
  )

  const onFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    if (maxCountReached) {
      event.dataTransfer.dropEffect = 'none'
      event.preventDefault()
      return
    }

    setDragState(event.type)
  }

  function renderContent () {
    const hasErrors = Object.keys(validationErrors).length > 0

    const validation = hasErrors && <ValidationMessage disabled={disabled} errors={validationErrors} />
    const total = fileList.length > 0 && (
      <Total
        disabled={disabled}
        fileList={fileList}
        maxCount={maxCount}
        maxTotalSize={maxTotalSize}
        onDeleteAll={() => handleRemove(fileList)}
        onDeleteErrors={() => handleRemove(fileList.filter(x => !!x.error))}
        onDownloadAll={onDownloadAll}
        onReloadErrors={() => {
          fileList.filter(x => !!x.error).forEach(uploadFile)
        }}
      />
    )
    const list = fileList.length > 0 && (
      <UploadList
        disabled={disabled}
        items={fileList}
        onDownload={onDownload}
        onRemove={file => handleRemove(file)}
        onUpload={uploadFile}
        truncateFileName={truncateFileName}
      />
    )
    const requirements = description && <UploadRequirements>{description}</UploadRequirements>

    if (size === 'medium') {
      return (
        <>
          <Space align="normal" direction="vertical" gap={16} justify="start">
            <Space gap={10} justify="start" wrap="nowrap">
              <UploadIcon invalid={hasCriticalErrors(validationErrors)} />
              <div>
                <DragAndDropMessage
                  disabled={disabled}
                  fileList={fileList}
                  maxCount={maxCount}
                  onOpenFileDialog={() => getRcUploaderApi().openFileDialog()}
                />
                {validation}
              </div>
            </Space>
          </Space>
          {total}
          {list}
          {requirements}
        </>
      )
    }

    if (maxCount === 1 && fileList.length > 0) {
      return (
        <>
          {list}
          {requirements}
        </>
      )
    }

    return (
      <>
        <Space gap={8} justify="space-between">
          <Button
            disabled={disabled || (!!maxCount && fileList.length >= maxCount)}
            iconBefore={<Upload key="upload-icon" />}
            mode="secondary"
            onClick={() => getRcUploaderApi().openFileDialog()}
          >
            {t('uploader.actions.upload')}
          </Button>
          {total}
        </Space>
        {validation}
        {list}
        {requirements}
      </>
    )
  }

  const rcUploadProps = {
    ...(props as RcUploadProps),
    beforeUpload,
    hasControlInside: true,
    multiple: maxCount === undefined || maxCount > 1,
    onBatchStart,
    onChange: undefined,
    onError,
    onProgress,
    onSuccess,
    openFileDialogOnClick: false,
    prefixCls: 'hexa-upload'
  }

  if (size === 'medium') {
    return (
      <DragContainerWrapper
        {...testAttributes}
        $dragOver={dragState === 'dragover'}
        $invalid={hasCriticalErrors(validationErrors)}
        $fullHeight={fullHeight}
        $maxCountReached={maxCountReached}
        $size={size}
        className={cn(className, 'hexa-upload hexa-upload-drag')}
        disabled={disabled}
        onDrop={onFileDrop}
        onDragOver={onFileDrop}
        onDragLeave={onFileDrop}
        style={style}
      >
        <RcUpload {...rcUploadProps as any} ref={uploadRef}>
          <div className="hexa-upload-drag-container">
            {renderContent()}
          </div>
        </RcUpload>
      </DragContainerWrapper>
    )
  }

  return (
    <SelectContainerWrapper
      {...testAttributes}
      className={cn(className, 'hexa-upload hexa-upload-select')}
      disabled={disabled}
      style={style}
    >
      <RcUpload {...rcUploadProps as any} ref={uploadRef}>
        <div className="hexa-upload-select-container">
          {renderContent()}
        </div>
      </RcUpload>
    </SelectContainerWrapper>
  )
})

Uploader.defaultProps = {
  size: 'medium',
  truncateFileName: true
}

Uploader.displayName = 'Uploader'

const LIST_IGNORE = `__LIST_IGNORE_${Date.now()}__`
