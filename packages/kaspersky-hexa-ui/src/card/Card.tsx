import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Dropdown } from '@src/dropdown'
import { H6 } from '@src/typography'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Delete, DragDrop, Menu2 } from '@kaspersky/icons/16'

import {
  CardActions,
  CardActionsWrapper,
  cardCss,
  CardTitle,
  CardTitleElement,
  CardTitleWrapper,
  CloseActionButton,
  DnDActionButton
} from './cardCss'
import { getMappedElement } from './getMappedElement'
import { CardProps, CardViewProps } from './types'
import { useThemedCard } from './useThemedCard'

const MENU_ICON_TEST_ID = 'menu-icon'
const DND_ICON_TEST_ID = 'dnd-icon'
const CLOSE_ICON_TEST_ID = 'close-icon'

const StyledCard = styled.div.withConfig({
  shouldForwardProp: (prop) => !['cssConfig', 'draggable', 'interactive'].includes(prop)
})`${cardCss}`

export const Card: FC<CardProps> = (rawProps) => {
  const themedProps = useThemedCard(rawProps)
  const props = useTestAttribute(themedProps)
  return <CardView {...props} testId={themedProps.testId} klId={themedProps.klId} />
}

const CardView: FC<CardViewProps> = ({
  style,
  children,
  className,
  draggable,
  closable,
  onCloseButtonClick,
  size,
  title,
  actions,
  testAttributes,
  klId,
  testId,
  ...rest
}) => {
  const cardActions = (
    <CardActions>
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
          />
        </Dropdown>
      )}
      {closable && (
        <CloseActionButton
          size="large"
          icon={<Delete />}
          onClick={onCloseButtonClick}
          testId={testId ? `${testId}-${CLOSE_ICON_TEST_ID}` : `${CLOSE_ICON_TEST_ID}`}
          klId={klId ? `${klId}-${CLOSE_ICON_TEST_ID}` : `${CLOSE_ICON_TEST_ID}`}
        />
      )}
    </CardActions>
  )

  return (
    <StyledCard
      className={className}
      style={style}
      draggable={draggable}
      {...testAttributes}
      {...rest}
    >
      {draggable && (
        <DnDActionButton
          icon={<DragDrop />}
          testId={testId ? `${testId}-${DND_ICON_TEST_ID}` : `${DND_ICON_TEST_ID}`}
          klId={klId ? `${klId}-${DND_ICON_TEST_ID}` : `${DND_ICON_TEST_ID}`}
        />
      )}
      {title && (
        <CardTitleWrapper>
          <CardTitle>
            {title.elementBefore && <CardTitleElement>{getMappedElement(title.elementBefore)}</CardTitleElement>}
            <H6 style={{ width: '100%' }}>{title.value}</H6>
            {title.elementAfter && <CardTitleElement>{getMappedElement(title.elementAfter)}</CardTitleElement>}
          </CardTitle>
          {(actions || closable) && cardActions}
        </CardTitleWrapper>
      )}
      {!title && size === 'large' && (actions || closable) && (
        <CardActionsWrapper>
          {cardActions}
        </CardActionsWrapper>
      )}
      {children}
    </StyledCard>
  )
}
