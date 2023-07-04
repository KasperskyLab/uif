import React, { forwardRef } from 'react'
import { Text as TextComponent, TextProps } from './text'
import { Heading as HeadingComponent, HeadingProps } from './heading'

export const Heading: React.FC<HeadingProps> = (props) => (
  <HeadingComponent {...props} />
)
export const H1: React.FC<HeadingProps> = (props) => (
  <HeadingComponent type="H1" {...props} />
)
export const H2: React.FC<HeadingProps> = (props) => (
  <HeadingComponent type="H2" {...props} />
)
export const H3: React.FC<HeadingProps> = (props) => (
  <HeadingComponent type="H3" {...props} />
)
export const H4: React.FC<HeadingProps> = (props) => (
  <HeadingComponent type="H4" {...props} />
)

export const Text: React.FC<TextProps> = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => (
  <TextComponent {...props} ref={ref} />
))
