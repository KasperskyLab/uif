import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import React, { FC, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import {
  Content,
  Description,
  Footer,
  Header,
  informationCardCss,
  RightCorner,
  Title
} from './informationCardCss'
import { InformationCardProps, InformationCardViewProps } from './types'
import { useThemedInformationCard } from './useThemedInformationCard'

const StyledInformationCard = styled.div.withConfig({
  shouldForwardProp: prop => !['type', 'cssConfig'].includes(prop)
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
  width = 'auto',
  style,
  leftSide,
  title,
  description,
  rightCorner,
  children,
  footer,
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
    const { selected: cssConfigSelected, unselected: cssConfigUnselected, ...cssConfigSizes } = cssConfig

    return selectedState
      ? { ...cssConfigSizes, ...cssConfig.selected }
      : { ...cssConfigSizes, ...cssConfig.unselected }
  }, [cssConfig, selectedState])

  const renderLeftSide = () => {
    if (!leftSide) return null

    return (
      <div className={leftSideClassName}>
        {leftSide}
      </div>
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
      <Content type={type}>
        <Header type={type}>
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
        {children && <div className={contentClassName}>
          {children}
        </div>}
        {footer && <Footer className={footerClassName}>
          {footer}
        </Footer>}
      </Content>
    )
  }

  return (
    <StyledInformationCard
      type={type}
      style={style}
      selected={selectedState}
      disabled={disabled}
      $interactive={interactive}
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
