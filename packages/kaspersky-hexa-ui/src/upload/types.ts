import { Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import {
  type RcFile,
  type UploadProps as RcUploadProps,
  type UploadRequestOption
} from 'rc-upload/lib/interface'
import { type CSSProperties, type ReactNode } from 'react'

export {
  type RcFile,
  type UploadRequestOption
}

export type UploadFile<T = any> = {
  error?: any,
  lastModified?: number,
  name: string,
  originFileObj?: RcFile,
  percent?: number,
  response?: T,
  size: number,
  status?: 'error' | 'success' | 'done' | 'uploading' | 'removed',
  uid: string,
  url?: string,
  xhr?: T
}

export type InternalUploadFile<T = any> = UploadFile<T> & {
  originFileObj: RcFile
}

export type UploadChangeParam = {
  file: UploadFile,
  fileList: UploadFile[],
  event?: {
      percent: number
  }
}

type StateColorConfig = {
  background: string,
  border: string,
  header: {
    icon: string,
    text: string
  },
  requirements: string,
  total: string
}

type FileColorConfig = {
  background: string,
  border: string,
  icon: string,
  name: string,
  size: string
}

export type UploaderCssConfig = {
  active: Omit<StateColorConfig, 'header' | 'requirements' | 'total'>,
  disabled: StateColorConfig,
  enabled: StateColorConfig,
  error: Pick<StateColorConfig, 'border'>,
  invalid: Pick<StateColorConfig, 'header'> & {
    validation: string
  },
  file: {
    active: Omit<FileColorConfig, 'size'>,
    disabled: FileColorConfig,
    enabled: FileColorConfig,
    hover: Omit<FileColorConfig, 'size'>,
    invalid: Omit<FileColorConfig, 'size'> & {
      validation: string
    },
    loading: Omit<FileColorConfig, 'icon' | 'size'>
  }
}

export type UploaderThemeProps = {
  theme?: Theme
}

export type UploaderProps = {
  className?: string,
  disabled?: boolean,
  description?: ReactNode,
  fileList?: UploadFile[],
  /**
   * Expand the drag and drop container vertically as much as possible. Only for `medium` size
   */
  fullHeight?: boolean,
  /**
   * Do not upload automatically
   */
  manual?: boolean,
  /**
   * Max number of files that can be uploaded
   */
  maxCount?: number,
  /**
   * Max size of a single file (Kilobyte)
   */
  maxFileSize?: number,
  /**
   * Max size of all files (Kilobyte)
   */
  maxTotalSize?: number,
  onChange?: (info: UploadChangeParam) => void,
  onDownload?: (file: UploadFile) => void,
  onDownloadAll?: () => void,
  onRemove?: (file: UploadFile) => void,
  /** Should show progress of uploading files */
  showProgress?: boolean,
  size?: 'small' | 'medium',
  style?: CSSProperties,
  theme?: Theme,
  /**
   * Shorten a long file name with ellipses if it doesn't fit on one line
   */
  truncateFileName?: boolean
} & Pick<RcUploadProps, 'accept' | 'action' | 'customRequest' | 'directory' | 'headers' | 'method'>
  & TestingProps
