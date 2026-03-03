import React, { FC, ReactNode } from 'react'
import { RenderPlaceholderProps } from 'slate-react'

import { Overlay } from '../../components/Overlay/Overlay'
import { allPlugins, Descendant, RichTextEditor } from '../../components/RichText'

export interface TextWidgetProps {
    initialValue?: Descendant[],
    readonly: boolean,
    showOverlay: boolean,
    editTrigger?: ReactNode,
    placeholder?: string,
    renderPlaceholder?: (props: RenderPlaceholderProps) => ReactNode,
    onChange: (text: Descendant[]) => void,
    onHover?: (isHovered: boolean) => void,
    onFocus?: () => void,
    onBlur?: () => void,
    onOverlayClick: () => void,
    width?: number,
    height?: number,
    limit?: number
}

export const TextWidget: FC<TextWidgetProps> = ({ editTrigger, initialValue, readonly, showOverlay, onOverlayClick, onChange, onBlur, onFocus, onHover, width, height, placeholder, renderPlaceholder, limit }) => {
  return (
    <Overlay editTrigger={editTrigger} onClick={onOverlayClick} show={showOverlay} width={width} height={height}>
        <RichTextEditor
          initialValue={initialValue}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          readOnly={readonly || showOverlay}
          plugins={allPlugins}
          placeholder={placeholder}
          renderPlaceholder={renderPlaceholder}
          limitTextSize={limit}
        />
    </Overlay>
  )
}
