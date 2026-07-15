import { Key, ReactNode } from 'react'
import { BaseOperation, NodeEntry } from 'slate'
import { RenderElementProps, RenderLeafProps } from 'slate-react'

import { BLOCK_STYLE_TYPES, LIST_TYPES } from './constants'
import { CustomEditor, CustomElementType, CustomTextKey } from './customTypes'

export type BlockStyleType = (typeof BLOCK_STYLE_TYPES)[number]
export type ListType = (typeof LIST_TYPES)[number]
export type CustomElementFormat = CustomElementType | BlockStyleType | ListType

export type CustomPluginActionProps = {
  editor: CustomEditor;
  format: CustomElementFormat;
  isActive?: boolean;
  key?: Key | null;
  icon?: ReactNode;
}

export type CustomPluginAction = (
  props: CustomPluginActionProps
) => ReactNode | undefined

export interface BlockButtonProps {
  format: CustomElementFormat;
  icon: ReactNode;
  flatPlugins: PluginsFlat
}

export interface ActButtonProps {
  format: CustomElementFormat;
  icon: ReactNode;
  isCustomAction?: boolean;
}

export interface MarkButtonProps {
  format: CustomTextKey;
  icon: ReactNode;
}

export type PluginBehaviorProps<TArgs = void> = {
  editor: CustomEditor;
  next: () => void;
  args?: TArgs;
  entry?: NodeEntry;
  operation?: BaseOperation;
}

export type PluginBehavior = {
  onInsertText?: (props: PluginBehaviorProps<string>) => void;
  onBreak?: (props: PluginBehaviorProps) => void;
  onDeleteBackward?: (props: PluginBehaviorProps<string | undefined>) => void;
  onNormalizeNode?: (props: PluginBehaviorProps<NodeEntry>) => void;
}

export type LeafPluginType = {
  leafType: CustomTextKey;
  icon: ReactNode;
  render: (props: RenderLeafProps) => ReactNode;
  hotKey?: string;
  behavior?: PluginBehavior;
}

export type ElementPluginType = {
  elementType: CustomElementType | ListType;
  leafFormatsWithin?: CustomTextKey[];
  icon?: ReactNode;
  render: (props: RenderElementProps) => ReactNode;
  customAction?: CustomPluginAction;
  hotKey?: string;
  inline?: boolean;
  behavior?: PluginBehavior;
}

export type BlockStylePluginType = {
  blockStyleType: BlockStyleType;
  icon: ReactNode;
  render: (props: RenderElementProps) => ReactNode;
  hotKey?: string;
  behavior?: PluginBehavior;
}

export type PluginType =
  LeafPluginType |
  ElementPluginType |
  BlockStylePluginType

export type PluginsFlat = PluginType[]
export type PluginsGrouped = PluginsFlat[]
export type Plugins = PluginsGrouped | PluginsFlat
