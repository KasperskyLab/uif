
import { ReactNode } from 'react'
import { RenderPlaceholderProps } from 'slate-react'

import { type Descendant, type LinkPopupProps } from '@kaspersky/hexa-ui'

import { ActionType, TextWidgetEditorState } from './constants'

export type State = {
  editorState: TextWidgetEditorState;
  showOverlay: boolean;
};

export type TextWidgetAction =
  | { type: ActionType.HOVER }
  | { type: ActionType.MOUSE_LEAVE }
  | { type: ActionType.FOCUS }
  | { type: ActionType.BLUR }
  | { type: ActionType.OVERLAY_CLICK }
  | { type: ActionType.SET_READONLY };
  
export interface TextWidgetProps {
    initialValue?: Descendant[];
    readonly: boolean;
    editTrigger?: ReactNode;
    placeholder?: string;
    renderPlaceholder?: (props: RenderPlaceholderProps) => ReactNode;
    onChange: (text: Descendant[]) => void;
    onHover?: (isHovered: boolean) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onOverlayClick?: () => void;
    width?: string;
    height?: string;
    limit?: number;
    linkPopupText?: Pick<LinkPopupProps, 'label' | 'buttonText'>;
  }
