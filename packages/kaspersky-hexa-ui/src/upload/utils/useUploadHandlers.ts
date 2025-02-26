import { UploadProps as RcUploadProps } from 'rc-upload'

import { InternalUploadFile, RcFile, UploadFile } from '../types'

function file2Obj (file: RcFile, patch?: Partial<InternalUploadFile>): InternalUploadFile {
  return {
    ...file,
    lastModified: file.lastModified,
    name: file.name,
    originFileObj: file,
    percent: 0,
    size: file.size,
    uid: file.uid,
    ...patch
  }
}

function updateFileList (file: UploadFile<any>, fileList: UploadFile<any>[]) {
  const nextFileList = [...fileList]
  const fileIndex = nextFileList.findIndex(({ uid }: UploadFile) => uid === file.uid)
  if (fileIndex === -1) {
    nextFileList.push(file)
  } else {
    nextFileList[fileIndex] = file
  }
  return nextFileList
}

function getFileItem (file: RcFile, fileList: UploadFile[]) {
  const matchKey = file.uid !== undefined ? 'uid' : 'name'
  return fileList.filter(item => item[matchKey] === file[matchKey])[0]
}

function removeFileItem (file: UploadFile, fileList: UploadFile[]) {
  const matchKey = file.uid !== undefined ? 'uid' : 'name'
  const removed = fileList.filter(item => item[matchKey] !== file[matchKey])
  if (removed.length === fileList.length) {
    return null
  }
  return removed
}

function sortFileList<T extends UploadFile> (files: T[]): T[] {
  files.sort((a, b) => {
    if (a.status === 'error' && b.status !== 'error') {
      return -1
    }

    if (a.status !== 'error' && b.status === 'error') {
      return 1
    }

    return 0
  })

  return files
}

export function useUploadHandlers (
  mergedFileList: UploadFile[],
  onInternalChange: (file: UploadFile, changedFileList: UploadFile[], event?: { percent: number }) => void,
  LIST_IGNORE: string,
  abortUploading: (file: UploadFile) => void,
  onRemove?: (file: UploadFile) => any
) {
  const onBatchStart: RcUploadProps['onBatchStart'] = batchFileInfoList => {
    // Skip file which marked as `LIST_IGNORE`, these file will not add to file list
    const filteredFileInfoList = batchFileInfoList.filter(info => !(info.file as any)[LIST_IGNORE])

    // Nothing to do since no file need upload
    if (!filteredFileInfoList.length) {
      return
    }

    const objectFileList = filteredFileInfoList.map(info => file2Obj(info.file as RcFile))

    // Concat new files with prev files
    let newFileList = [...mergedFileList]

    objectFileList.forEach(fileObj => {
      // Replace file if exist
      newFileList = updateFileList(fileObj, newFileList)
    })

    objectFileList.forEach((fileObj, index) => {
      // Repeat trigger `onChange` event for compatible
      let triggerFileObj: UploadFile = fileObj

      if (!filteredFileInfoList[index].parsedFile) {
        // `beforeUpload` return false
        const { originFileObj } = fileObj
        let clone

        try {
          clone = new File([originFileObj], originFileObj.name, {
            type: originFileObj.type
          }) as any as UploadFile
        } catch (e) {
          clone = new Blob([originFileObj], {
            type: originFileObj.type
          }) as any as UploadFile
          clone.name = originFileObj.name
          clone.lastModified = new Date().getTime()
        }

        clone.uid = fileObj.uid
        triggerFileObj = clone
      } else {
        // Inject `uploading` status
        fileObj.status = 'uploading'
      }

      onInternalChange(triggerFileObj, newFileList)
    })
  }

  const onSuccess = (response: any, file: RcFile, xhr: any) => {
    if (!getFileItem(file, mergedFileList)) {
      return
    }

    try {
      if (typeof response === 'string') {
        response = JSON.parse(response)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }

    const targetItem = file2Obj(file, {
      percent: 100,
      response,
      status: 'done',
      xhr
    })

    onInternalChange(targetItem, updateFileList(targetItem, mergedFileList))
  }

  const onProgress = (event: { percent: number }, file: RcFile) => {
    if (!getFileItem(file, mergedFileList)) {
      return
    }

    const targetItem = file2Obj(file, {
      percent: event.percent,
      status: 'uploading'
    })

    onInternalChange(targetItem, updateFileList(targetItem, mergedFileList), event)
  }

  const onError = (error: Error, response: any, file: RcFile) => {
    if (!getFileItem(file, mergedFileList)) {
      return
    }

    const targetItem = file2Obj(file, {
      error,
      response,
      status: 'error'
    })

    onInternalChange(targetItem, sortFileList(updateFileList(targetItem, mergedFileList)))
  }

  const handleRemove = async (data: UploadFile | UploadFile[]) => {
    const files = Array.isArray(data) ? data : [data]
    const res = await Promise.allSettled(files.map(async file => {
      return { file, res: await onRemove?.(file) }
    }))

    let currentFile: UploadFile
    let newFileList: UploadFile[] = mergedFileList

    for (const x of res) {
      if (x.status === 'rejected' || x.value.res === false) {
        continue
      }

      const file = x.value.file
      const removedFileList = removeFileItem(file, newFileList)

      if (removedFileList) {
        newFileList = removedFileList
        currentFile = { ...file, status: 'removed' }
        mergedFileList?.forEach(item => {
          const matchKey = currentFile.uid !== undefined ? 'uid' : 'name'
          if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
            item.status = 'removed'
          }
        })
        abortUploading(currentFile)
      }
    }

    // @ts-ignore
    if (currentFile) {
      onInternalChange(currentFile, newFileList)
    }
  }

  return {
    handleRemove,
    onBatchStart,
    onError,
    onProgress,
    onSuccess
  }
}
