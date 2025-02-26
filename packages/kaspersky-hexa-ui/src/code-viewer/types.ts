import type { Diagnostic } from '@codemirror/lint'
import type { EditorState, Extension } from '@codemirror/state'
import type { EditorView } from '@codemirror/view'
import { Focus } from '@design-system/tokens/focus'
import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps, ValidationStatus } from '@helpers/typesHelpers'
import type { Axis } from 'react-resizable'

export type CodeViewerToViewProps<T> = ToViewProps<T, CodeViewerCssConfig, CodeViewerThemeProps>

export type StateProps = {
  background?: string,
  border?: string,
  color?: string,
  icon?: string
}

export type HighlightingStyle = {
  tagColors: {
    mainTagColor: string,
    tagColor1: string,
    tagColor2: string,
    tagColor3: string,
    tagColor4: string
  }
}

export type CodeViewerColorConfig = Focus & HighlightingStyle & {
  enabled?: StateProps,
  hover?: StateProps,
  readonly?: StateProps,
  activeLine?: StateProps,
  warningIconColor?: string,
  errorIconColor?: string,
  tooltipBoxShadow?: string
} & Partial<Record<ValidationStatus, StateProps>>

export type CodeViewerCssConfig = CodeViewerColorConfig

export type CodeViewerRef = undefined | null | {
  editorState: EditorState,
  editorView: EditorView
}

export type CustomLanguages = { [language: string]: Extension } | undefined

export type CodeViewerThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type LintSource = (view: EditorView) => readonly Diagnostic[] | Promise<readonly Diagnostic[]>

export type CodeViewerProps<T extends CustomLanguages> = CodeViewerThemeProps & {
  /** Custom class name */
  className?: string,
  /** Wrapper class name */
  wrapperClassName?: string,
  /** Initial code */
  initialValue?: string | null,
  /** On change handler */
  onChange?: (text: string) => unknown,
  /** Readonly state */
  readonly?: boolean,
  /** Validation status */
  validationStatus?: ValidationStatus,
  /** Resizable view */
  resizable?: boolean,
  /** Resize axis */
  resizeAxis?: Axis,
  /** Language */
  language: keyof T,
  /** Linter source */
  linter?: LintSource,
  /** Custom languages */
  customLanguages?: T,
  /** Width */
  width?: number,
  /** Height */
  height?: number,
  /** Minimal size constraints */
  minConstraints?: [number, number],
  /** Maximal size constraints */
  maxConstraints?: [number, number]
} & TestingProps

export type CodeViewerViewProps<T extends CustomLanguages> = CodeViewerToViewProps<CodeViewerProps<T>>
