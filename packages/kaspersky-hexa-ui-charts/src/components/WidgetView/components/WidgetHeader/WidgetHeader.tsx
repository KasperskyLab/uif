import React, { MouseEventHandler, ReactNode, useMemo } from 'react'

import {
  DropdownOverlayProp,
  H5,
  H6,
  Link,
  Space,
  Text,
  Tooltip
} from '@kaspersky/hexa-ui'

import styles from './WidgetHeader.module.scss'
import { WidgetHeaderActions } from './WidgetHeaderActions'

export type WidgetHeaderTitleSize = 'small' | 'medium';

export interface WidgetHeaderProps {
  title?: ReactNode;
  description?: ReactNode;
  size?: WidgetHeaderTitleSize;
  interactive?: boolean;
  onTitleClick?: MouseEventHandler<HTMLElement>;
  elementAfter?: ReactNode;
  headerActions?: DropdownOverlayProp;
  titleTooltip?: ReactNode;
}

export const WidgetHeader: React.FC<WidgetHeaderProps> = ({
  title,
  description,
  size = 'small',
  interactive = false,
  onTitleClick,
  elementAfter,
  headerActions,
  titleTooltip
}) => {
  const tooltipText =
    titleTooltip || (typeof title === 'string' ? title : undefined)

  const titleNode = useMemo(() => {
    const TitleComponent = size === 'small' ? H6 : H5
    return interactive ? (
      <TitleComponent className={styles.title}>
        <Link onClick={onTitleClick}>{title}</Link>
      </TitleComponent>
    ) : (
      <TitleComponent className={styles.title}>{title}</TitleComponent>
    )
  }, [interactive, title, size])

  return (
    <Space gap="dependent">
      <Space gap="section" wrap="nowrap">
        {title && <Tooltip text={tooltipText}>{titleNode}</Tooltip>}

        <Space
          width="auto"
          align="center"
          gap="grouped"
          direction="horizontal"
          wrap="nowrap"
        >
          {elementAfter && elementAfter}
          {headerActions && (
            <WidgetHeaderActions headerActions={headerActions} />
          )}
        </Space>
      </Space>
      {description &&
        (React.isValidElement(description) ? (
          description
        ) : (
          <Tooltip text={titleTooltip}>
            <Text type="BTR4" color="secondary" className={styles.description}>
              {description}
            </Text>
          </Tooltip>
        ))}
    </Space>
  )
}
