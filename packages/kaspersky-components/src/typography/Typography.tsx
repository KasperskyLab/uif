import React, { FC, forwardRef } from 'react'
import { Text as TextComponent, TextProps } from './text'
import { Heading as HeadingComponent, HeadingProps } from './heading'
import { textTags } from '@design-system/tokens'

export const Heading: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent {...props} />
)
export const H1: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent type={'H1'} {...props} />
)
export const H2: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent type={'H2'} {...props} />
)
export const H3: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent type={'H3'} {...props} />
)
export const H4: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent type={'H4'} {...props} />
)

export const H5: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent type={'H5'} {...props} />
)

export const H6: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent type={'H6'} {...props} />
)

export const Text: FC<TextProps> = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => (
  <TextComponent {...props} ref={ref} />
))

export const P: FC<TextProps> = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => (
  <TextComponent {...props} ref={ref} htmlTag={textTags.P}/>
))
