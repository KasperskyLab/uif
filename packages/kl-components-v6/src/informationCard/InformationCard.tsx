import React, { ReactNode, CSSProperties, memo } from 'react'

import styled from 'styled-components'
import { useThemedColors, useTheme } from '../../design-system/theme/hooks'

import { Theme } from '../../design-system/types'
import { Text } from '../typography'
import { TextType } from '@src/typography/text'

type BorderedCardProps = {
  width?: number | string,
  borderColor: string,
  backgroundColor: string
}

const BorderedCard = styled.div<BorderedCardProps>`
  display: grid;
  grid-template-areas:
    "leftSide header rightCorner"
    "leftSide content rightCorner"
    "leftSide footer rightCorner";
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  padding: 18px;
  ${(props) => {
    if (typeof props.width === 'number') {
      return `width: ${props.width}px;`
    }

    if (typeof props.width === 'string') {
      return `width: ${props.width};`
    }

    return null
  }}
`

const LeftSide = styled.div`
  grid-area: leftSide;
  padding-top: 4px;
  padding-right: 18px;
`

const RightCorner = styled.div`
  grid-area: rightCorner;
  padding-top: 4px;
  padding-left: 18px;
`

const Title = styled.div`
  grid-area: header;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const TitleRightCorner = styled.div`
`

const Content = styled.div`
  grid-area: content;
`

const Footer = styled.div`
  grid-area: footer;
  margin-top: 16px;
`

export type InformationCardProps = {
  theme?: Theme,
  style?: CSSProperties,
  width?: number | string,
  leftSide?: ReactNode,
  title?: ReactNode,
  titleLevel?: TextType,
  titleIcon?: ReactNode,
  rightCorner?: ReactNode,
  children?: ReactNode,
  contentLevel?: TextType,
  footer?: ReactNode,
  className?: string,
  leftSideClassName?: string,
  rightCornerClassName?: string,
  titleClassName?: string,
  contentClassName?: string,
  footerClassName?: string,
  dataTestId?: string
}

export const InformationCard = memo(({
  theme,
  style,
  width,
  leftSide,
  title,
  titleLevel = 'H4',
  titleIcon,
  rightCorner,
  children,
  contentLevel = 'BTR3',
  footer,
  className,
  leftSideClassName,
  rightCornerClassName,
  titleClassName,
  contentClassName,
  footerClassName,
  dataTestId
}: InformationCardProps) => {
  const selectedTheme = useTheme({ theme })
  const colors = useThemedColors(selectedTheme.key)

  const renderLeftSide = () => {
    if (!leftSide) return null

    return (
      <LeftSide className={leftSideClassName}>
        {leftSide}
      </LeftSide>
    )
  }

  const renderHeader = () => {
    if (!title && !titleIcon) return null

    return (
      <Title className={titleClassName}>
        <TitleContent>
          {titleIcon}
          {typeof title === 'string' || typeof title === 'number'
            ? <Text type={titleLevel} theme={selectedTheme}>{title}</Text>
            : title}
        </TitleContent>
        {rightCorner && (
          <TitleRightCorner className={rightCornerClassName}>
            {rightCorner}
          </TitleRightCorner>
        )}
      </Title>
    )
  }

  const renderRightSideWhenNoHeader = () => {
    if (title || titleIcon || !rightCorner) return null

    return (
      <RightCorner className={rightCornerClassName}>
        {rightCorner}
      </RightCorner>
    )
  }

  const renderContent = () => {
    return (
      <Content className={contentClassName}>
        {typeof children === 'string' || typeof children === 'number'
          ? <Text type={contentLevel} theme={selectedTheme}>{children}</Text>
          : children}
      </Content>
    )
  }

  const renderFooter = () => {
    if (!footer) return null

    return (
      <Footer className={footerClassName}>
        {footer}
      </Footer>
    )
  }

  return (
    <BorderedCard
      borderColor={colors.elements.line}
      backgroundColor={colors.bg.base}
      className={className}
      style={style}
      width={width}
      data-test-id={dataTestId}
    >
      {renderLeftSide()}
      {renderHeader()}
      {renderRightSideWhenNoHeader()}
      {renderContent()}
      {renderFooter()}
    </BorderedCard>
  )
})
