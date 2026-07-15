import { Text } from '@src/typography'
import React, { useRef } from 'react'
import { RenderPlaceholderProps } from 'slate-react'

import { useDynamicPlaceholderHeight } from '../hooks/useDynamicPlaceholderHeight'

interface CustomPlaceholderProps extends RenderPlaceholderProps {
  placeholder?: string;
  renderPlaceholder?: (props: RenderPlaceholderProps) => React.ReactNode;
}

export const CustomPlaceholder = ({
  children,
  attributes,
  renderPlaceholder,
  placeholder
}: CustomPlaceholderProps) => {
  const placeholderRef = useRef<HTMLSpanElement>(null)

  useDynamicPlaceholderHeight(placeholderRef)

  const placeholderText =
    renderPlaceholder?.({ attributes, children }) || placeholder
  const styledAttributes = {
    ...attributes,
    'data-slate-custom-placeholder': true,
    style: {
      ...attributes.style,
      width: 'auto',
      top: 8
    }
  }
  return (
    <Text
      {...styledAttributes}
      color="secondary"
      type="BTR3"
      ref={placeholderRef}
    >
      {placeholderText}
    </Text>
  )
}
