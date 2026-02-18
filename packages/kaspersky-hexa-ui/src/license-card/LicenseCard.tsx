import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import useFormattedDate from '@helpers/hooks/useFormattedDate'
import { useTestAttribute } from '@helpers/index'
import { ActionButton } from '@src/action-button'
import { Divider } from '@src/divider'
import { Field } from '@src/field'
import { Status } from '@src/status'
import { Text } from '@src/typography'
import cn from 'classnames'
import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

import { Copy } from '@kaspersky/hexa-ui-icons/16'

import { copyLicenseKey, RenderDaysRemaining, shouldShowRemainingField, statusToProps } from './helpers'
import styles from './LicenseCard.module.scss'
import { LicenseCardProps } from './types'

export const LicenseCard = ({
  title,
  number: licenseNumber,
  expirationDate,
  daysRemaining,
  activationDate,
  term,
  iconBefore,
  elementAfter,
  minWidth='auto',
  actions,
  mode = 'valid',
  theme,
  children,
  className,
  leftSideClassName,
  rightSideClassName,
  style,
  compact = false,
  ...props
}: LicenseCardProps) =>{
  const { testAttributes } = useTestAttribute(props)
  const { t } = useTranslation()
  const { getFormattedDate } = useFormattedDate()
  
  const fieldConfig: {labelKey: string, control: ReactElement, show: boolean}[]= [
    {
      control: <RenderDaysRemaining mode={mode} daysRemaining={daysRemaining}/>, 
      labelKey:'licenseCard.remaining',
      show: shouldShowRemainingField(mode)
    },
    {
      control: <Text>{getFormattedDate(expirationDate)}</Text>,
      labelKey:'licenseCard.expirationDate',
      show: true
    },
    {
      control: <Text>{getFormattedDate(activationDate)}</Text>,
      labelKey:'licenseCard.activationDate',
      show: true
    },
    {
      control: <Text>{t('licenseCard.termDays', { count: term })}</Text>,
      labelKey: 'licenseCard.term',
      show: true
    }
  ]

  return (
    <div
      className={cn(
        getClassNameWithTheme(className, theme),
        styles.licenseCard,
        styles[mode]
      )}
      style={{ 
        '--license-card-min-width': minWidth ? `${minWidth}px` : '600px',
        ...style 
      }}
      {...testAttributes}
    >
      <div className={styles.licenseCardHeader}>
        <div className={styles.licenseCardHeaderBlock}>
          {iconBefore && (
            <span 
              className={cn(leftSideClassName, {
                [styles.iconExpired]: mode === 'expired',
                [styles.iconDisabled]: mode === 'finished',
                [styles.iconEnabled]: mode !== 'expired' && mode !== 'finished'
              })}
            >
              {iconBefore}
            </span>
          )}
          <Text type="H5">{title}</Text>
        </div>
        {compact && elementAfter && (<span className={rightSideClassName}>{elementAfter}</span>)}
      </div>
      <div
        className={cn(
          styles.licenseCardContent, compact && styles['licenseCardContent--compact']
        )}>
        <div className={cn(
          styles.licenseCardContentRow, compact && styles['licenseCardContentRow--compact']
        )}>
          <Field
            control={<Status {...statusToProps(mode)}/>}
            label={compact ? undefined : t('licenseCard.status')!}
            labelPosition="before"
            gridLayout={
              !compact
                ? {
                    firstCol: '4fr',
                    secondCol: '8fr'
                  }
                : undefined
            }
          />
          <Field
            control={
              <div className={styles.licenseCardFieldNumber}>
                <div className={styles.licenseCardFieldKey}>
                  {licenseNumber}
                </div>
                <ActionButton
                  icon={<Copy />}
                  size="large"
                  onClick={() => copyLicenseKey(licenseNumber)}
                />
              </div>
            }
            labelPosition="before"
            label={compact ? undefined : t('licenseCard.number')!}
            gridLayout={
              !compact
                ? {
                    firstCol: '4fr',
                    secondCol: '8fr'
                  }
                : undefined
            }
          />
        </div>
        <Divider/>
        <div className={cn(
          styles.licenseRow, compact && styles['licenseRow--compact']
        )}>
          {fieldConfig
            .filter((row) => row.show)
            .map((item) => (
              <Field
                key={item.labelKey}
                control={item.control}
                label={t(item.labelKey) ?? undefined}
                labelPosition={compact ? 'top' : 'before'}
                gridLayout={
                  !compact
                    ? {
                        firstCol: '4fr',
                        secondCol: '8fr'
                      }
                    : undefined
                }
              />
            ))}
        </div>
        {(children || actions) && <Divider/>}
        {children}
        {actions && (
          <div className={styles.licenseCardActions}>
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}
