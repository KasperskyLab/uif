import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { LazyMarkdown } from '@src/markdown/LazyMarkdown'
import { Popover } from '@src/popover'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { Text } from '@src/typography'
import cn from 'classnames'
import React, { FC } from 'react'

import { StatusInfoOutline } from '@kaspersky/hexa-ui-icons/16'

import styles from './FormLabel.module.scss'
import { FormLabelProps } from './types'

export const FormLabel: FC<FormLabelProps> = (rawProps: FormLabelProps) => {
  const {
    mode = 'primary',
    children,
    className,
    disabled,
    readOnly,
    required,
    tooltip,
    tagsAfter = [],
    testAttributes,
    getPopupContainer,
    popoverPlacement,
    popoverWidth,
    theme,
    ...props
  } = useTestAttribute(rawProps)
  const getParentNode = (trigger: HTMLElement) => trigger.parentElement as HTMLElement
  const hasTags = tagsAfter.some(Boolean)
  // @ts-expect-error for backward compatibility
  const isDisabledOrReadonly = disabled || mode === 'disabled' || readOnly

  return (
    <label
      {...props}
      {...testAttributes}
      className={cn(
        'form-label',
        styles.formLabel,
        getClassNameWithTheme(className, theme),
        {
          [styles.primary]: mode === 'primary' && !isDisabledOrReadonly,
          [styles.secondary]: mode === 'secondary' && !isDisabledOrReadonly,
          // @ts-expect-error for backward compatibility
          [styles.disabled]: disabled ?? mode === 'disabled',
          [styles.readOnly]: readOnly
        }
      )}
    >
      <span className={styles.textContainer}>
        <Text type="BTR3" className="form-label-text">
          {children}
        </Text>
        {required && (
          <Text type="BTR3" className="form-label-asterisk">
            *
          </Text>
        )}
        {tooltip && (
          <Popover
            content={typeof tooltip === 'string' ? <LazyMarkdown withoutTextStyle={true} value={tooltip} /> : tooltip}
            getPopupContainer={getPopupContainer || getParentNode}
            placement={popoverPlacement}
            width={popoverWidth}
          >
            <ActionButton
              mode="ghost"
              size="large"
              interactive={false}
              icon={<StatusInfoOutline />}
              className="form-label-info-icon"
            />
          </Popover>
        )}
      </span>
      {hasTags && (
        <Tag.Group
          items={tagsAfter.filter(Boolean).map(label => ({
            label,
            // @ts-expect-error for backward compatibility
            outlined: !(disabled || mode === 'disabled')
          }))}
        />
      )}
    </label>
  )
}
