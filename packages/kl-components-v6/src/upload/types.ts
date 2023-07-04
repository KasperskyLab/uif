import * as React from 'react'
import { IconProps } from '../icon'
import { ReactNode } from 'react'
import { UploadProps as AntdUploadProps } from 'antd/es/upload/interface'
import { Upload as AntdUpload } from 'antd'
import { IButtonProps } from '../button/types'
import { upload } from '../../design-system/theme/themes/light/upload'

export interface UploadProps {
  width?: number,
  componentId?: string,
  height?: number,
  icon?: null | IconProps,
  iconFile?: null | IconProps,
  title?: ReactNode,
  buttons?: IButtonProps[],
  helpText?: ReactNode,
  disabled?: boolean,
  config?: ReturnType<typeof upload>,

  file?: {
    name: string,
    size?: number
  },
  percent?: number,
  fileButtons?: IButtonProps[],

  errorTitle?: ReactNode,
  errorDescription?: ReactNode,
  errorButtons?: IButtonProps[],

  loadingTitle?: ReactNode,
  loadingDescription?: ReactNode,
  loadingButtons?: IButtonProps[],

  successTitle?: ReactNode,
  successDescription?: ReactNode,
  successButtons?: IButtonProps[],
  status?: 'none' | 'error' | 'pending' | 'success' | 'selected'
}

export interface UploadDraggerProps extends UploadProps, React.ComponentProps<typeof AntdUpload.Dragger> {}
export interface UploadUrlProps extends Omit<AntdUploadProps & UploadProps, 'onChange'> {
  onChange?: (value: string) => void,
  value?: string
}
