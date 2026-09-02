import { DividerProps } from '@src/divider'
import { TextboxTextareaProps } from '@src/input'
import { Key, ReactNode } from 'react'
import { BaseOperation, Descendant, NodeEntry } from 'slate'
import {
  RenderElementProps as BaseRenderElementProps,
  RenderLeafProps as BaseRenderLeafProps,
  RenderPlaceholderProps
} from 'slate-react'

import { BLOCK_STYLE_TYPES, LIST_TYPES } from './constants'
import { CustomEditor, CustomElementType, CustomTextKey } from './customTypes'

export type RichTextEditorTextareaProps = Pick<
  TextboxTextareaProps,
  'validationStatus' | 'disabled' | 'readOnly' | 'showCount'
>

export type RichTextEditorProps = {
  textareaMode?: boolean | RichTextEditorTextareaProps,
  plugins: Plugins,
  limitTextSize?: number,
  dividerPluginsProps?: DividerProps,
  onChange: (value: Descendant[]) => void,
  enabled?: boolean,
  autoFocus?: boolean,
  readOnly?: boolean,
  initialValue?: Descendant[],
  placeholder?: string,
  renderPlaceholder?: (props: RenderPlaceholderProps) => ReactNode,
  onFocus?: () => void,
  onBlur?: () => void,
  testId?: string
}

export type RichTextEditorContainerProps = RichTextEditorProps & {
  onHover?: (isHovered: boolean) => void
}

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

export type RenderLeafProps = BaseRenderLeafProps & Pick<TextboxTextareaProps, 'disabled' | 'readOnly'>
export type RenderElementProps = BaseRenderElementProps & Pick<TextboxTextareaProps, 'disabled' | 'readOnly'>

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
