import { TextReducer } from '@helpers/components/TextReducer'
import { TextWithTruncation } from '@helpers/components/TextWithTruncation'
import { TestingAttributes } from '@helpers/typesHelpers'
import { ActionButton } from '@src/action-button'
import { Badge } from '@src/badge'
import { Divider } from '@src/divider'
import { Indicator } from '@src/indicator'
import { Text, TextProps } from '@src/typography/text'
import cn from 'classnames'
import React, { FC } from 'react'

import { ArrowDownSolid, ArrowRightSolid } from '@kaspersky/hexa-ui-icons/8'

import styles from './Submenu.module.scss'
import { DividerProps, RowViewProps, TitleProps } from './types'

export const StyledRowBlock: FC<React.HTMLAttributes<HTMLSpanElement>> = props =>
  <span {...props} className={cn(props.className, styles.rowBlock)} />

export const HoverRowBlock: FC<React.HTMLAttributes<HTMLSpanElement>> = props =>
  <span {...props} className={cn(props.className, styles.hoverRowBlock)} />

export const StyledRow: FC<React.HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean,
  leftOffset: number,
  selected?: boolean,
  truncateText?: boolean
}> = ({
  disabled,
  leftOffset,
  selected,
  truncateText,
  ...props
}) =>
  <div 
    {...props} 
    className={cn(
      props.className,
      styles.row,
      {
        [styles.disabled]: disabled,
        [styles.selected]: selected,
        [styles.truncateText]: truncateText
      }
    )}
    style={{ ...props.style, '--left-offset': leftOffset }}
  />

export const StyledRowText: FC<TextProps> = props =>
  <Text {...props} className={styles.rowText} />

export const StyledRowTextCol: FC<React.HTMLAttributes<HTMLDivElement>> = props =>
  <div {...props} className={styles.rowTextCol} />

export const SubmenuRow: FC<RowViewProps> = ({
  row,
  truncateText,
  selected,
  collapsible,
  onCollapsibleClick,
  onClick
}) => {
  const handleClick = row?.disabled ? undefined : onClick
  
  return (
    <StyledRow
      className="hexa-ui-submenu-row"
      disabled={row?.disabled}
      leftOffset={8 + (row?.level || 0) * 20 + (row?.extraLeftPadding || 0)}
      onClick={handleClick}
      onKeyDown={e => e.key === 'Enter' ? handleClick?.() : undefined}
      selected={selected}
      tabIndex={0}
      truncateText={truncateText}
      {...row.testAttributes}
    >
      {collapsible && (
        <ActionButton
          className={styles.arrowButton}
          interactive={false}
          onClick={onCollapsibleClick}
          icon={row.opened ? <ArrowDownSolid /> : <ArrowRightSolid />}
          size="small"
        />
      )}
      {row.iconBefore && <StyledRowBlock>{row.iconBefore}</StyledRowBlock>}
      <StyledRowTextCol>
        <StyledRowText>
          <TextWithTruncation truncate={truncateText} text={row.text} />
        </StyledRowText>
        {row.description && (
          <Text
            className={cn(styles.description, row.disabled && styles.disabled)}
            type="BTR4"
          >
            <TextWithTruncation truncate={truncateText} text={row.description} />
          </Text>
        )}
      </StyledRowTextCol>
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
      {row.hoverElementAfter && (
        <HoverRowBlock onClick={e => e.stopPropagation()}>
          {row.hoverElementAfter}
        </HoverRowBlock>
      )}
    </StyledRow>
  )
}

export const SubmenuTitle: FC<TitleProps & { testAttributes: TestingAttributes }> = (props) => (
  <div className={styles.title} {...props.testAttributes}>
    <Text className={styles.titleText} type="BTR4">
      <TextReducer>{props.text}</TextReducer>
    </Text>
    {props.action && <ActionButton icon={props.action?.icon} onClick={props.action?.onClick} />}
  </div>
)

export const SubmenuDivider: FC<DividerProps> = () => (
  <Divider className={styles.divider} mode="light" />
)
