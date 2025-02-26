import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { ButtonProps } from '@src/button'
import { IconProps } from '@src/icon'
import { DraggerProps as AntdDraggerProps } from 'antd/es/upload/Dragger'
import { UploadProps as AntdUploadProps } from 'antd/es/upload/interface'
import { ReactNode } from 'react'

export type UploadToViewProps<T extends BasicUploadProps> = ToViewProps<T, UploadColorConfig, UploadThemeProps>

type StateProps = {
  background?: string,
  color?: string,
  border?: string,
  iconColor?: string,
  textPrimaryColor?: string,
  textSecondaryColor?: string
}

export type UploadColorConfig = Record<'normal' | 'success' | 'error' | 'disabled', StateProps>

export type UploadThemeProps = {
  theme?: Theme
}

export type BasicUploadProps = TestingProps & UploadThemeProps & {
  width?: number,
  height?: number,
  icon?: null | IconProps,
  iconFile?: null | IconProps,
  title?: ReactNode,
  buttons?: ButtonProps[],
  helpText?: ReactNode,
  disabled?: boolean,

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

export type UploadProps = BasicUploadProps & AntdDraggerProps

export type UploadViewProps = UploadToViewProps<UploadProps>

export type UploadUrlProps = Omit<AntdUploadProps & BasicUploadProps, 'onChange'> & {
  onChange?: (value: string) => void,
  value?: string
}

export type UploadUrlViewProps = UploadToViewProps<UploadUrlProps>
