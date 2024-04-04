import React, { useState, useEffect, useMemo, FC } from 'react'
import styled from 'styled-components'
import { InformationCardProps, InformationCardViewProps } from './types'
import {
  informationCardCss,
  FlexContainer,
  LeftSide,
  RightCorner,
  Header,
  ChildrenContent,
  Title,
  Content,
  Description,
  Footer
} from './informationCardCss'
import { useThemedInformationCard } from './useThemedInformationCard'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledInformationCard = styled(FlexContainer).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`${informationCardCss}`

export const InformationCard: FC<InformationCardProps> = (rawProps: InformationCardProps) => {
  const themedProps = useThemedInformationCard(rawProps)
  const props = useTestAttribute(themedProps)
  return <InformationCardView {...props} />
}

const InformationCardView: FC<InformationCardViewProps> = ({
  type = 'vertical',
  selected = false,
  disabled = false,
  interactive = false,
  width,
  style,
  leftSide,
  title,
  description,
  rightCorner,
  children,
  footer,
  className,
  leftSideClassName,
  rightCornerClassName,
  titleClassName,
  descriptionClassName,
  contentClassName,
  footerClassName,
  cssConfig,
  testAttributes,
  ...rest
}: InformationCardViewProps) => {
  const [selectedState, setSelectedState] = useState(selected)

  useEffect(() => {
    setSelectedState(selected)
  }, [selected])

  const newCssConfig = useMemo(() => {
    const { selected: cssConfigSelected, unSelected: cssConfigUnSelected, ...cssConfigSizes } = cssConfig

    return selectedState
      ? { ...cssConfigSizes, ...cssConfig.selected }
      : { ...cssConfigSizes, ...cssConfig.unSelected }
  }, [cssConfig, selectedState])

  const renderLeftSide = () => {
    if (!leftSide) return null

    return (
      <LeftSide className={leftSideClassName}>
        {leftSide}
      </LeftSide>
    )
  }

  const renderRightCorner = () => {
    return rightCorner && (
      <RightCorner className={rightCornerClassName}>
        {rightCorner}
      </RightCorner>
    )
  }

  const renderContent = () => {
    return (
      <Content type={type} definedTypes={['vertical', 'center']}>
        <Header type={type} definedTypes={['vertical', 'center']}>
          {title && (
            <Title type={type} cssConfig={newCssConfig} className={titleClassName}>
              {title}
              {renderRightCorner()}
            </Title>
          )}
          {description && (
            <Description type={type} cssConfig={newCssConfig} className={descriptionClassName} disabled={disabled}>
              {description}
            </Description>
          )}
        </Header>
        {children && <ChildrenContent className={contentClassName}>
          {children}
        </ChildrenContent>}
        {footer && <Footer className={footerClassName}>
          {footer}
        </Footer>}
      </Content>
    )
  }

  return (
    <StyledInformationCard
      type={type}
      definedTypes={['vertical', 'center', 'horizontal']}
      className={className}
      style={style}
      selected={selectedState}
      disabled={disabled}
      interactive={interactive}
      width={width}
      cssConfig={newCssConfig}
      tabIndex={interactive ? 0 : undefined}
      {...testAttributes}
      {...rest}
    >
      {renderLeftSide()}
      {renderContent()}
    </StyledInformationCard>
  )
}
