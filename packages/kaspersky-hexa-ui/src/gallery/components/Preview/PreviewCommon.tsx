import { useThemedColors } from '@design-system/theme'
import { Icon } from '@src/icon'
import { Loader } from '@src/loader'
import React, { forwardRef, memo } from 'react'
import styled from 'styled-components'

import { colors } from '@kaspersky/hexa-ui-core/colors/js'

type PreviewButtonHoveredParams = {
  backgroundColor: string
}

const PreviewButtonHovered = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: ${(params: PreviewButtonHoveredParams) => params.backgroundColor};
`

type PreviewButtonParams = {
  isSelected?: boolean
}

const PreviewButtonStyled = styled.button`
  background: transparent;
  padding: 12px;
  border: 1px solid ${colors.cg200};
  border-radius: 4px;
  cursor: pointer;
  width: 185px;
  height: 130px;
  position: relative;
  box-shadow: none;
  transition: box-shadow .4s ease-in-out;

  outline: ${(params: PreviewButtonParams) => params.isSelected
    ? `${colors.marina400} solid 4px`
    : 'none'};

  &:focus,
  &:active {
    outline: ${(params: PreviewButtonParams) => params.isSelected
    ? `${colors.marina400} solid 4px`
    : 'none'};
  }

  &:focus {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  &:hover ${PreviewButtonHovered} {
    display: flex;
  }
`

export const PreviewButton = forwardRef<HTMLElement, React.ComponentProps<typeof PreviewButtonStyled>>((props, ref) => {
  const themedColors = useThemedColors()
  const hoverBackgroundColor = themedColors['text-icons-elements'].secondary2
  const hoverIconColor = themedColors['text-icons-elements']['primary-invert']

  return (
    <PreviewButtonStyled
      {...props}
      ref={ref}
    >
      {props.children}
      <PreviewButtonHovered backgroundColor={hoverBackgroundColor}>
        <Icon size="medium" name="SearchSimplified" color={hoverIconColor}/>
      </PreviewButtonHovered>
    </PreviewButtonStyled>
  )
})

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PreviewLoading = memo(() => {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  )
})

export const PreviewFailure = memo(() => {
  return (
    <LoaderContainer>
      <Icon size="medium" name="FileSad" color={colors.cg200} />
    </LoaderContainer>
  )
})

export const Image = styled.img`
  border-radius: 4px;
  max-width: 100%;
  max-height: 100%;
`
