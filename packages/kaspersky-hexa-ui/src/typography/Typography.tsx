import React, { FC, forwardRef } from 'react'

import { textTags } from '@kaspersky/hexa-ui-core/typography/js'

import { Heading as HeadingComponent, HeadingProps } from './heading'
import { Text as TextComponent, TextProps } from './text'

export const Heading: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent {...props} />
)
export const H1: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent type="H1" {...props} />
)
export const H2: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent type="H2" {...props} />
)
export const H3: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent type="H3" {...props} />
)
export const H4: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent type="H4" {...props} />
)

export const H5: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent type="H5" {...props} />
)

export const H6: FC<HeadingProps> = (props: HeadingProps) => (
  <HeadingComponent type="H6" {...props} />
)

// Re-exported directly rather than wrapped. The wrapper was a pass-through that
// forwarded every prop and the ref, which styled-components already does, so it
// only added a React element and a fiber per usage — thousands of them in a
// table, where Text sits in every cell.
export const Text = TextComponent

export const P: FC<TextProps> = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => (
  <TextComponent {...props} ref={ref} htmlTag={textTags.P} />
))
