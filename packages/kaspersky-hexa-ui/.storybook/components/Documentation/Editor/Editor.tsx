import { getTextCssSizes } from '@design-system/tokens'
import { useTheme } from '@design-system/theme'
import { ThemeKey } from '@design-system/types'
import { MonoTextTypes } from '@kaspersky/hexa-ui-core/typography/js'
import { Link } from '@src/link'
import React, {
  FC,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { themes } from 'prism-react-renderer'
import { LiveEditor, LivePreview } from 'react-live'

import { SafeLiveProvider } from './SafeLiveProvider'

import {
  CodeEditor,
  CodeEditorWrapper,
  CodeToggleBar,
  ContentArea,
  EditorContainer,
  EditorPane,
  EditorRoot,
  LineNumbers,
  PreviewContent,
  PreviewPane,
  StyledLiveError
} from './editorCss'
import { getMaxHeightForCodeLines } from './editorCodeMetrics'
import { unwrapDisplayCode } from './liveCodeWrap'
import { transformCode } from './transformCode'
import { TextDirection, useStorybookTextDirection } from './useStorybookTextDirection'

const MemoizedLivePreview = memo(LivePreview)

const liveEditorTypography = getTextCssSizes(MonoTextTypes.MTR3)

export type PreviewLayout = {
  direction?: 'horizontal' | 'vertical'
  gap?: number
}

type PreviewWrapperProps = PreviewLayout & {
  children?: ReactNode
  dir?: TextDirection
  minHeight?: number
  maxHeight?: number
}

const PreviewWrapper: FC<PreviewWrapperProps> = ({
  children,
  direction,
  gap,
  dir,
  minHeight,
  maxHeight
}) => (
  <PreviewContent
    $direction={direction}
    $gap={gap}
    $minHeight={minHeight}
    $maxHeight={maxHeight}
    dir={dir}
  >
    {children}
  </PreviewContent>
)

export type CodeBlockMode = 'visible' | 'hidden' | 'collapsed'

export type EditorExampleMode = 'dont'

export type EditorProps = {
  code: string
  /** Служебный код для react-live: выполняется в preview, но не показывается в редакторе */
  setupCode?: string
  /** Минимальная высота preview, px */
  minHeight?: number
  /** Максимальная высота preview, px */
  maxHeight?: number
  /** Максимум видимых строк кода; при большем объёме — прокрутка */
  maxCodeLines?: number
  /** Идентификаторы, доступные в react-live (компоненты, хуки, данные примеров). */
  scope: Record<string, unknown>
  previewDirection?: PreviewLayout['direction']
  previewGap?: PreviewLayout['gap']
  /**
   * collapsed (по умолчанию) — превью; ссылка Show/Hide code под блоком;
   * visible — превью и кодовый блок;
   * hidden — только превью.
   */
  codeBlock?: CodeBlockMode
  /** dont — фон preview: semantic token danger_subtle--enabled */
  mode?: EditorExampleMode
}

export const Editor: FC<EditorProps> = ({
  code,
  setupCode,
  minHeight,
  maxHeight,
  maxCodeLines,
  scope,
  previewDirection = 'horizontal',
  previewGap = 16,
  codeBlock = 'collapsed',
  mode
}) => {
  const themeConfig = useTheme()
  const isDark = themeConfig.key === ThemeKey.Dark
  const textDirection = useStorybookTextDirection()

  const isMountedRef = useRef(true)
  const [displayCode, setDisplayCode] = useState(() => unwrapDisplayCode(code))
  const [isCodeExpanded, setIsCodeExpanded] = useState(false)

  const setDisplayCodeIfMounted = useCallback((nextCode: string) => {
    if (isMountedRef.current) {
      setDisplayCode(nextCode)
    }
  }, [])

  useEffect(() => {
    isMountedRef.current = true

    return () => {
      isMountedRef.current = false
    }
  }, [])

  useEffect(() => {
    setDisplayCodeIfMounted(unwrapDisplayCode(code))
  }, [code, setDisplayCodeIfMounted])

  useEffect(() => {
    if (isMountedRef.current) {
      setIsCodeExpanded(false)
    }
  }, [code, codeBlock])

  const liveTransformCode = useCallback(
    (editorCode: string) => transformCode(editorCode, setupCode),
    [setupCode]
  )

  const lineCount = displayCode.split('\n').length
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1).join('\n')
  const codePaneMaxHeight =
    maxCodeLines !== undefined ? getMaxHeightForCodeLines(maxCodeLines) : undefined

  const showCodePane =
    codeBlock === 'visible' || (codeBlock === 'collapsed' && isCodeExpanded)
  const showCodeToggle = codeBlock === 'collapsed'

  const toggleCodeVisibility = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setIsCodeExpanded((expanded) => !expanded)
  }, [])

  return (
    <EditorRoot>
      <SafeLiveProvider
        code={displayCode}
        language="jsx"
        transformCode={liveTransformCode}
        scope={scope}
        noInline
        theme={isDark ? themes.vsDark : themes.github}
      >
        <EditorContainer $mode={mode}>
          <ContentArea>
            <PreviewPane
              $mode={mode}
              $minHeight={minHeight}
              $maxHeight={maxHeight}
            >
              <StyledLiveError />
              <PreviewWrapper
                direction={previewDirection}
                gap={previewGap}
                dir={textDirection}
                minHeight={minHeight}
                maxHeight={maxHeight}
              >
                <MemoizedLivePreview />
              </PreviewWrapper>
            </PreviewPane>

            {showCodePane && (
              <EditorPane
                $isDark={isDark}
                $maxHeight={codePaneMaxHeight}
              >
                <LineNumbers $isDark={isDark}>{lineNumbers}</LineNumbers>
                <CodeEditorWrapper>
                  <CodeEditor>
                    <LiveEditor
                      onChange={setDisplayCodeIfMounted}
                      style={{
                        ...liveEditorTypography,
                        minHeight: '100%',
                        backgroundColor: 'transparent',
                        outline: 'none'
                      }}
                    />
                  </CodeEditor>
                </CodeEditorWrapper>
              </EditorPane>
            )}
          </ContentArea>
        </EditorContainer>
      </SafeLiveProvider>

      {showCodeToggle && (
        <CodeToggleBar>
          <Link onClick={toggleCodeVisibility}>
            {isCodeExpanded ? 'Скрыть код' : 'Показать код'}
          </Link>
        </CodeToggleBar>
      )}
    </EditorRoot>
  )
}
