import * as React from 'react'

import { RcFile, UploadFile } from '../types'

function getSize (files: Array<{ size: number }>) {
  return files.reduce((sum, x) => sum + x.size, 0)
}

export function validate (
  fileList: RcFile[],
  newFiles: RcFile[],
  maxFileSizeInKB?: number,
  maxCount?: number,
  maxTotalSizeInKB?: number
) {
  const failedFiles = []
  const errors: Record<string, string[]> = {}
  const filesWithCorrectSize = []

  if (maxFileSizeInKB) {
    for (const f of newFiles) {
      if (f.size > maxFileSizeInKB * 1024) {
        errors['uploader.validation.maxFileSize'] ??= []
        errors['uploader.validation.maxFileSize'].push(f.name)
        failedFiles.push(f)
      } else {
        filesWithCorrectSize.push(f)
      }
    }
  } else {
    filesWithCorrectSize.push(...newFiles)
  }

  if (maxCount && fileList.length + filesWithCorrectSize.length > maxCount) {
    errors['uploader.validation.maxCount'] = filesWithCorrectSize.map(x => x.name)
    failedFiles.push(...filesWithCorrectSize)
  }

  if (maxTotalSizeInKB && getSize(fileList) + getSize(filesWithCorrectSize) > maxTotalSizeInKB * 1024) {
    errors['uploader.validation.maxTotalSize'] = filesWithCorrectSize.map(x => x.name)
    failedFiles.push(...filesWithCorrectSize)
  }

  return {
    errors,
    failedFiles: Array.from(new Set(failedFiles))
  }
}

export function hasCriticalErrors (errors: Record<string, string[]>) {
  return Object.keys(errors).filter(error => error !== 'uploader.validation.maxFileSize').length > 0
}

export function useValidation (
  fileList: UploadFile[],
  isManualUploading: React.MutableRefObject<boolean>,
  LIST_IGNORE: string,
  manual?: boolean,
  maxFileSize?: number,
  maxCount?: number,
  maxTotalSize?: number
) {
  const [validationErrors, setValidationErrors] = React.useState<Record<string, string[]>>({})
  const validatedFiles = React.useRef<WeakMap<RcFile, true | string>>(new WeakMap())

  const beforeUploadInternal = (file: RcFile, fileListArgs: RcFile[]) => {
    if (manual && isManualUploading.current) { // all good here
      return
    }

    if (validatedFiles.current.has(file)) {
      if (validatedFiles.current.get(file) === LIST_IGNORE) {
        return LIST_IGNORE
      }

      if (manual) {
        return false
      }

      return
    }

    for (const x of fileListArgs) {
      validatedFiles.current.set(x, true)
    }

    const {
      errors,
      failedFiles
    } = validate(fileList as RcFile[], fileListArgs, maxFileSize, maxCount, maxTotalSize)

    for (const f of failedFiles) {
      validatedFiles.current.set(f, LIST_IGNORE)
    }

    setValidationErrors(errors)

    if (validatedFiles.current.get(file) === LIST_IGNORE) {
      return LIST_IGNORE
    }

    if (manual) {
      return false
    }
  }

  const beforeUpload = async (file: RcFile, fileListArgs: RcFile[]) => {
    let parsedFile: File | Blob | string = file

    const result = await beforeUploadInternal(file, fileListArgs)

    if (result === false) {
      return false
    }

    // Hack for LIST_IGNORE, we add additional info to remove from the list
    delete (file as any)[LIST_IGNORE]
    if ((result as any) === LIST_IGNORE) {
      Object.defineProperty(file, LIST_IGNORE, {
        value: true,
        configurable: true
      })

      return false
    }

    if (typeof result === 'object' && result) {
      parsedFile = result as File
    }

    return parsedFile as RcFile
  }

  return { beforeUpload, validationErrors }
}
