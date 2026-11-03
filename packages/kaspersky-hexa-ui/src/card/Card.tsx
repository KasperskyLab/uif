import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Dropdown } from '@src/dropdown'
import { Heading } from '@src/typography'
import cn from 'classnames'
import React, { FC } from 'react'

import { Delete, DragDrop, Menu2 } from '@kaspersky/hexa-ui-icons/16'

import styles from './Card.module.scss'
import { getMappedElement } from './getMappedElement'
import { CardProps } from './types'

const MENU_ICON_TEST_ID = 'menu-icon'
const DND_ICON_TEST_ID = 'dnd-icon'
const CLOSE_ICON_TEST_ID = 'close-icon'

export const Card: FC<CardProps> = (rawProps) => {
  const { mode = 'base', size = 'medium', theme, ...restProps } = rawProps
  const { testAttributes, ...props } = useTestAttribute(restProps)
  const {
    style,
    children,
    className,
    draggable,
    closable,
    interactive,
    onCloseButtonClick,
    title,
    actions,
    maxHeight,
    ...rest
  } = props
  const { klId, testId } = rawProps

  const cardActions = (
    <div className={styles.cardActions}>
      {actions && actions.length === 1 && <ActionButton size="large" icon={actions[0].icon} onClick={actions[0].onClick} />}
      {actions && actions.length > 1 && (
        <Dropdown
          trigger={['click']}
          overlay={actions.map((action) => ({ children: action.value, onClick: action.onClick }))}
        >
          <ActionButton
            size="large"
            icon={<Menu2 />}
            testId={testId ? `${testId}-${MENU_ICON_TEST_ID}` : `${MENU_ICON_TEST_ID}`}
            klId={klId ? `${klId}-${MENU_ICON_TEST_ID}` : `${MENU_ICON_TEST_ID}`}
            className="card-action-button"
          />
        </Dropdown>
      )}
      {closable && (
        <ActionButton
          size="large"
          icon={<Delete />}
          onClick={onCloseButtonClick}
          testId={testId ? `${testId}-${CLOSE_ICON_TEST_ID}` : `${CLOSE_ICON_TEST_ID}`}
          klId={klId ? `${klId}-${CLOSE_ICON_TEST_ID}` : `${CLOSE_ICON_TEST_ID}`}
          className="card-action-button"
        />
      )}
    </div>
  )

  const isScrollable = !!maxHeight && size !== 'small'

  return (
    <div
      className={getClassNameWithTheme(
        cn(
          className,
          'hexa-ui-card',
          styles.card,
          styles[mode],
          styles[size],
          {
            'hexa-ui-card-scrollable': isScrollable,
            [styles.scrollable]: isScrollable,
            [styles.draggable]: draggable,
            [styles.interactive]: interactive
          }
        ),
        theme
      )}
      style={{
        ...style,
        ...(isScrollable && {
          '--max-height': maxHeight
        })
      }}
      {...testAttributes}
      {...rest}
    >
      {draggable && (
        <ActionButton
          className={styles.dndActionButton}
          icon={<DragDrop />}
          testId={testId ? `${testId}-${DND_ICON_TEST_ID}` : `${DND_ICON_TEST_ID}`}
          klId={klId ? `${klId}-${DND_ICON_TEST_ID}` : `${DND_ICON_TEST_ID}`}
        />
      )}
      {title && (
        <div className={styles.cardTitleWrapper}>
          <div className={styles.cardTitle}>
            {title.elementBefore && <span className={styles.cardTitleElement}>{getMappedElement(title.elementBefore)}</span>}
            <Heading
              type={title.size === 'medium' ? 'H5' : 'H6'}
              style={{ width: '100%' }}
            >
              {title.value}
            </Heading>
            {title.elementAfter && <span className={styles.cardTitleElement}>{getMappedElement(title.elementAfter)}</span>}
          </div>
          {(actions || closable) && cardActions}
        </div>
      )}
      {!title && size === 'large' && (actions || closable) && (
        <div className={styles.cardActionsWrapper}>
          {cardActions}
        </div>
      )}
      <div
        className={cn(styles.scrollableContent, {
          [styles.scrollable]: isScrollable,
          [styles[size]]: isScrollable
        })}
      >
        {children}
      </div>
    </div>
  )
}
