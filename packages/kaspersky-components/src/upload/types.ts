import * as React from 'react'
import { ReactNode } from 'react'
import { UploadProps as AntdUploadProps } from 'antd/es/upload/interface'
import { Upload as AntdUpload } from 'antd'
import { ButtonProps } from '@src/button/types'
import { IconProps } from '@src/icon'
import { upload } from '@design-system/theme/themes/light/upload'
import { TestingProps } from '@helpers/typesHelpers'

export type UploadProps = TestingProps & {
  width?: number,
  height?: number,
  icon?: null | IconProps,
  iconFile?: null | IconProps,
  title?: ReactNode,
  buttons?: ButtonProps[],
  helpText?: ReactNode,
  disabled?: boolean,
  config?: ReturnType<typeof upload>,

  file?: {
    name: string,
    size?: number
  },
  percent?: number,
  fileButtons?: ButtonProps[],

  errorTitle?: ReactNode,
  errorDescription?: ReactNode,
  errorButtons?: ButtonProps[],

  loadingTitle?: ReactNode,
  loadingDescription?: ReactNode,
  loadingButtons?: ButtonProps[],

  successTitle?: ReactNode,
  successDescription?: ReactNode,
  successButtons?: ButtonProps[],
  status?: 'none' | 'error' | 'pending' | 'success' | 'selected'
}

export type UploadDraggerProps = UploadProps & React.ComponentProps<typeof AntdUpload.Dragger>

export type UploadUrlProps = Omit<AntdUploadProps & UploadProps, 'onChange'> & {
  onChange?: (value: string) => void,
  value?: string
}
