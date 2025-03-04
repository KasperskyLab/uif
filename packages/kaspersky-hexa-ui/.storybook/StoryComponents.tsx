import { Divider } from '@src/divider'
import { FormLabel } from '@src/form-label'
import React, { FC } from 'react'
import styled from 'styled-components'

type StoryProps = {
  style?: React.CSSProperties,
  vertical?: boolean,
  horizontalWidth?: string
}

type StoryBlockProps = Omit<StoryProps, 'style'> & {
  verticalGap?: number,
  horizontalGap?: number,
  verticalWidth?: string,
  justifyContent?: React.CSSProperties['justifyContent']
}

const StoryBlock = styled.div<StoryBlockProps>`
  ${({ verticalGap, horizontalGap, verticalWidth, horizontalWidth, vertical, justifyContent }) => `
    display: flex;
    gap: ${horizontalGap}px;
    width: ${horizontalWidth};
    justify-content: ${justifyContent};

    ${vertical && `
      gap: ${verticalGap}px;
      width: ${verticalWidth};
      justify-content: start;
      align-items: flex-start;
      flex-direction: column;
    `}
  `}
`

export const StoryColumn: FC<StoryProps> = (props) => <StoryBlock vertical={true} verticalGap={16} {...props} />

export const StoryWrapper: FC<StoryProps> = (props) =>
  <StoryBlock vertical={props.vertical} horizontalGap={24} verticalGap={32} {...props} />

export const StoryComponentContainer: FC<StoryProps> = (props) =>
  <StoryBlock vertical={props.vertical} horizontalGap={24} verticalGap={16} {...props} />

export const StoryLabel: FC<StoryProps & { label: string }> = (props) => (
  <StoryBlock
    vertical={props.vertical}
    horizontalGap={16}
    verticalGap={8}
    verticalWidth="100%"
    horizontalWidth={props.horizontalWidth || "100px"}
    justifyContent="end"
  >
    <FormLabel mode="secondary" style={{ alignSelf: 'center' }}>{props.label}</FormLabel>
    <Divider direction={props?.vertical ? 'horizontal' : 'vertical'} />
  </StoryBlock>
)

export function renderVariants(variants: Array<{ label: string, content: React.ReactNode }>, vertical?: boolean) {
  if (vertical) {
    return (
      <StoryWrapper vertical horizontalWidth="100%">
        {variants.map(variant => (
          <StoryComponentContainer key={variant.label} horizontalWidth="100%">
            <StoryLabel label={variant.label} />
            {variant.content}
          </StoryComponentContainer>
        ))}
      </StoryWrapper>
    )
  }

  return (
    <StoryWrapper>
      {variants.map(variant => (
        <StoryComponentContainer key={variant.label} vertical>
          <StoryLabel label={variant.label} vertical />
          {variant.content}
        </StoryComponentContainer>
      ))}
    </StoryWrapper>
  )
}
