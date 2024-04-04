import { TextboxClassNamedProps } from './types'
import classnames from 'classnames'

export const useClassNamedTextbox = <T extends TextboxClassNamedProps>({
  className,
  disabled,
  readOnly,
  invalid,
  valid,
  /** @deprecated */
  error, positive,
  ...rest
}: T) => {
  const newClassName: string = classnames(className, {
    invalid: (error || invalid) && !disabled,
    valid: (positive || valid) && !disabled,
    'kl6-textbox-disabled': disabled,
    'kl6-textbox-readonly': readOnly
  })
  return { ...rest, disabled, readOnly, className: newClassName }
}
