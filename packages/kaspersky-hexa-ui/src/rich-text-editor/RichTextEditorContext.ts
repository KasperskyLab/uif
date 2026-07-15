import React, { RefObject, useContext } from 'react'

export interface RichTextEditorContextProps {
  container: RefObject<HTMLElement | null>;
}

export const RichTextEditorContext = React.createContext<RichTextEditorContextProps | null>(null)

export const useRichTextEditorContext = (): RichTextEditorContextProps | null => {
  return useContext<RichTextEditorContextProps | null>(RichTextEditorContext)
}
