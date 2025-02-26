import { TestingProps } from '@helpers/typesHelpers'
import React from 'react'

export const enum FormTriggerType {
  Link = 'link',
  Button = 'button'
}

export type FormTriggerProps = TestingProps & {
  /** Button text */
  actionText?: React.ReactNode,
  /** Description */
  description?: React.ReactNode,
  /** Called after clicking */
  onClick: React.MouseEventHandler<HTMLElement>,
  /** Title */
  title: React.ReactNode,
  /** Link or Button type */
  type: FormTriggerType,
  /** HTML role */
  role?: string,
  /** Disable component */
  disabled?: boolean
}
