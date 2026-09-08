import { AdditionalContent } from '@helpers/components/AdditionalContent'
import { usePopupConfig } from '@helpers/components/PopupConfigProvider'
import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { FormLabel } from '@src/form-label'
import SwitchAntd from 'antd/es/switch'
import cn from 'classnames'
import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  useEffect,
  useState
} from 'react'

import styles from './Toggle.module.scss'
import { ToggleProps } from './types'

export const Toggle: FC<ToggleProps> = (rawProps: ToggleProps) => {
  const {
    onChange,
    checked,
    children,
    disabled,
    readonly,
    loading,
    theme,
    labelPosition = 'after',
    required,
    tooltip,
    testAttributes,
    description,
    dependentElement,
    className,
    ...rest
  } = useTestAttribute(rawProps)

  const [isChecked, setChecked] = useState(!!checked)

  useEffect(() => {
    if (checked === undefined || isChecked === checked) return
    setChecked(!!checked)
  }, [checked])

  const toggleValue = (check: boolean, e: MouseEvent) => {
    onChange?.(check, e)
    checked === undefined && setChecked(check)
  }

  const hasChildren = Children.count(children) > 0

  const canToggle = !(disabled || readonly || loading)

  const config = usePopupConfig()

  return (
    <div
      className={cn(
        styles.root,
        styles.toggleRoot,
        getClassNameWithTheme(className, theme)
      )}
      role="toggle"
    >
      <div className={styles.toggleWrapper}>
        <SwitchAntd
          onChange={toggleValue}
          checked={isChecked}
          disabled={disabled || readonly}
          loading={loading}
          className={cn(
            styles.toggle,
            {
              [styles.readonly]: readonly,
              [styles.labelBefore]: hasChildren && labelPosition === 'before',
              [styles.labelAfter]: hasChildren && labelPosition === 'after'
            }
          )}
          {...testAttributes}
          {...rest}
        />
        {typeof children === 'string'
          ? (
              <FormLabel
                onClick={(event) => {
                  const target = event.target as HTMLElement

                  if (target.closest('.form-label-info-icon')) return

                  event.preventDefault()

                  if (canToggle) toggleValue(!isChecked, new MouseEvent('click'))
                }}
                className={styles.toggleLabel}
                disabled={disabled}
                readOnly={readonly}
                required={required}
                tooltip={tooltip}
                getPopupContainer={
                  config.getPopupContainer ??
                  (triggerNode => config.usePortal ? document.body : triggerNode.parentElement!)
                }
              >
                {children}
              </FormLabel>
            )
          : Children
              .map(children, child =>
                isValidElement(child)
                  ? cloneElement<any>(child, {
                      onClick: () =>
                        canToggle &&
                        toggleValue(!isChecked, new MouseEvent('click'))
                    })
                  : child)
        }
      </div>
      <AdditionalContent
        description={description}
        dependentElement={dependentElement}
        _margin={36}
      />
    </div>
  )
}
