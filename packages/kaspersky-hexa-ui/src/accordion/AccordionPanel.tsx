import { ActionButton } from '@src/action-button'
import { Dropdown } from '@src/dropdown'
import { Text } from '@src/typography'
import cn from 'classnames'
import CollapseRC from 'rc-collapse'
import React, { FC, memo } from 'react'

import { Menu2 } from '@kaspersky/hexa-ui-icons/16'

import styles from './Accordion.module.scss'
import { AccordionPanelProps } from './types'

export const AccordionPanel: FC<AccordionPanelProps> = memo(({
  title,
  tagBefore,
  indicator,
  tagAfter,
  additionalText,
  elementAfter,
  actions,
  disabled,
  shouldDisableActions = true,
  className,
  titleSize = 'small',
  ...rest
}) => {
  const actionsView = actions && (
    <Dropdown
      disabled={shouldDisableActions ? disabled : undefined}
      overlay={actions.map((action) => ({
        children: action.value,
        onClick: action.onClick,
        description: action.description,
        componentsBefore: action.componentsBefore,
        componentsAfter: action.componentsAfter
      }))}
      trigger={['click']}
    >
      <ActionButton
        className={cn(styles['accordion-header-container'], styles['accordion-header-actions'])}
        disabled={shouldDisableActions ? disabled : undefined}
        icon={<Menu2 />}
        onClick={(e) => e.stopPropagation()}
        size="large"
      />
    </Dropdown>
  )

  const headerView = (
    <div className={styles['accordion-header']}>
      <div className={cn(styles['accordion-header-block'], { [styles['accordion-header-with-actions']]: !!actions })}>
        {tagBefore && (
          React.cloneElement(tagBefore, {
            disabled,
            className: styles['accordion-header-tag']
          })
        )}
        {indicator && (
          React.cloneElement(indicator, {
            border: false,
            className: styles['accordion-header-indicator']
          })
        )}
        {title && (
          <Text className={styles['accordion-header-title']}>
            {title}
          </Text>
        )}
        {tagAfter && (
          React.cloneElement(tagAfter, {
            disabled,
            className: styles['accordion-header-tag']
          })
        )}
        {additionalText && (
          <Text
            className={styles['accordion-header-additional-text']}
            level="BodyTextRegular/3"
          >
            {additionalText}
          </Text>
        )}
      </div>
      {(elementAfter || actions) && (
        <div className={styles['accordion-header-block']}>
          <div className={styles['accordion-header-element-after']}>{elementAfter}</div>
          {actionsView}
        </div>
      )}
    </div>
  )

  return (
    <CollapseRC.Panel
      {...rest}
      className={cn(className, styles.accordionPanel, styles[`hexa-ui-accordion-title-${titleSize}`])}
      collapsible={disabled ? 'disabled' : undefined}
      header={headerView}
    />
  )
})

AccordionPanel.displayName = 'AccordionPanel'
