import { ReactNode } from 'react'
import { RenderElementProps, RenderLeafProps } from 'slate-react'

import { BLOCK_STYLE_TYPES, LIST_TYPES } from './constants'
import { CustomElementType, CustomTextKey } from './customTypes'

export type BlockStyleType = (typeof BLOCK_STYLE_TYPES)[number];
export type ListType = (typeof LIST_TYPES)[number];
export type CustomElementFormat = CustomElementType | BlockStyleType | ListType;

export interface BlockButtonProps {
  format: CustomElementFormat,
  icon: ReactNode
}

export interface MarkButtonProps {
  format: CustomTextKey,
  icon: ReactNode
}

export type LeafPluginType = {
  leafType: CustomTextKey,
  hotKey?: string,
  icon: ReactNode,
  render: (props: RenderLeafProps) => ReactNode
};

export type ElementPluginType = {
  elementType: CustomElementType | ListType,
  hotKey?: string,
  icon: ReactNode,
  render: (props: RenderElementProps) => ReactNode
};
export type BlockStylePluginType = {
  blockStyleType: BlockStyleType,
  hotKey?: string,
  icon: ReactNode,
  render: (props: RenderElementProps) => ReactNode
};

export type PluginType = LeafPluginType | ElementPluginType | BlockStylePluginType;
