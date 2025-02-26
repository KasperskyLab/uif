import { TextReducer } from '@helpers/components/TextReducer'
import { ActionButton } from '@src/action-button'
import { Badge } from '@src/badge'
import { Indicator } from '@src/indicator'
import React, { FC } from 'react'

import { ArrowDownSolid, ArrowRightSolid } from '@kaspersky/icons/8'

import {
  StyledActionButton,
  StyledDivider,
  StyledRow,
  StyledRowBlock,
  StyledRowText,
  StyledTitle,
  StyledTitleText
} from './submenuCss'
import { DividerProps, RowViewProps, SubmenuCssConfig, TitleProps } from './types'

export const SubmenuRow: FC<RowViewProps> = ({
  row,
  truncateText,
  collapseOnTextClick,
  selected,
  collapsible,
  onCollapsibleClick,
  onClick,
  cssConfig
}) => {
  const handleClick = row?.disabled ? undefined : onClick
  return (
    <StyledRow
      selected={selected}
      disabled={row?.disabled}
      leftOffset={8 + (row?.level || 0) * 20 + (row?.extraLeftPadding || 0)}
      truncateText={truncateText}
      onClick={handleClick}
      onKeyDown={e => e.key === 'Enter' ? handleClick?.() : undefined}
      cssConfig={cssConfig}
      tabIndex={0}
    >
      {collapsible && (
        <StyledActionButton
          interactive={false}
          onClick={onCollapsibleClick}
          icon={row.opened ? <ArrowDownSolid /> : <ArrowRightSolid />}
          size="small"
        />
      )}
      {row.iconBefore && <StyledRowBlock>{row.iconBefore}</StyledRowBlock>}
      <StyledRowText>
        {truncateText
          ? <TextReducer>
              <span onClick={collapseOnTextClick ? onCollapsibleClick : undefined}>{row.text}</span>
            </TextReducer>
          : <span onClick={collapseOnTextClick ? onCollapsibleClick : undefined}>{row.text}</span>
        }
      </StyledRowText>
      {row.elementAfter && <StyledRowBlock>{row.elementAfter}</StyledRowBlock>}
      {row.notification && (
        row.notification.type === 'badge'
          ? <StyledRowBlock><Badge {...row.notification} /></StyledRowBlock>
          : <StyledRowBlock><Indicator {...row.notification} /></StyledRowBlock>
      )}
      {row.action &&
        <StyledRowBlock>
          <ActionButton onClick={row.action?.onClick} icon={row.action?.icon} />
        </StyledRowBlock>
      }
    </StyledRow>
  )
}

export const SubmenuTitle: FC<TitleProps & { cssConfig: SubmenuCssConfig }> = (props) => (
  <StyledTitle>
    <StyledTitleText type="BTR4" cssConfig={props.cssConfig}>
      <TextReducer>{props.text}</TextReducer>
    </StyledTitleText>
    {props.action && <ActionButton icon={props.action?.icon} onClick={props.action?.onClick} />}
  </StyledTitle>
)

export const SubmenuDivider: FC<DividerProps> = () => (
  <StyledDivider mode="light" />
)
