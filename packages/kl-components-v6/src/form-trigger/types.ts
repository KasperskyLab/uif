import React from 'react'

export const enum FormTriggerType {
  Link = 'link',
  Button = 'button'
}

export interface IFormTriggerProps {
  actionText?: React.ReactNode,
  description?: React.ReactNode,
  onClick: React.MouseEventHandler<HTMLElement>,
  title: React.ReactNode,
  type: FormTriggerType,
  componentId?: string,
  role?: string
}

export type TFormTriggerVariantProps = Omit<IFormTriggerProps, 'type'>
