import cn from 'classnames'

import { TextboxClassNamedProps } from './types'

export const useClassNamedTextbox = <T extends TextboxClassNamedProps>({
  className,
  disabled,
  readOnly,
  validationStatus = 'default',
  ...rest
}: T) => {
  const newClassName: string = cn(
    className,
    validationStatus,
    {
      'kl6-textbox-disabled': disabled,
      'kl6-textbox-readonly': readOnly
    }
  )
  return { ...rest, disabled, readOnly, className: newClassName }
}
