import { ThemeProvider, useTheme } from '@design-system/theme'
import { themeColors } from '@design-system/tokens'
import { ThemeKey } from '@design-system/types'
import { AnchorNavigation } from '@src/anchor-navigation'
import type { AnchorItem } from '@src/anchor-navigation/types'
import React, {
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { collectDocumentationTocEntries, TocEntry } from './DocumentationTableOfContents'
import { useDocumentationHeadingAnchors } from './useDocumentationHeadingAnchors'
import { useDocumentationStoryLinks } from './useDocumentationStoryLinks'
import { useStorybookThemeKey } from './useStorybookGlobals'
import { useStorybookTextDirection } from './useStorybookTextDirection'

const TOC_COLLECT_DEBOUNCE_MS = 100

/** Storybook Docs: default wrapper padding + built-in TOC. */
const DocsPageOverrides = createGlobalStyle<{
  $background: string
  $color: string
  $surface: string
  $surfaceAlt: string
  $border: string
  $mutedColor: string
  $codeBg: string
}>`
  html:has(.hexa-docs-content),
  body:has(.hexa-docs-content) {
    background: ${({ $background }) => $background} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) {
    padding: 0 !important;
    background: ${({ $background }) => $background} !important;
    color: ${({ $color }) => $color} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) > aside.sbdocs-toc--custom {
    display: none !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content),
  .sbdocs-wrapper:has(.hexa-docs-content) .sbdocs,
  .sbdocs-wrapper:has(.hexa-docs-content) .sbdocs.sbdocs-content {
    background: ${({ $background }) => $background} !important;
    color: ${({ $color }) => $color} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) .sbdocs.sbdocs-content {
    max-width: 1200px !important;
  }

  .hexa-docs-page {
    background: ${({ $background }) => $background};
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) {
    color: ${({ $color }) => $color} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) thead th {
    color: ${({ $mutedColor }) => $mutedColor} !important;
    border-bottom-color: ${({ $border }) => $border} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) tbody tr {
    border-top-color: ${({ $border }) => $border} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) tbody td {
    background: ${({ $surface }) => $surface} !important;
    color: ${({ $color }) => $color} !important;
    border-bottom-color: ${({ $border }) => $border} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) tbody td:first-child {
    font-weight: 600;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) code {
    background: ${({ $codeBg }) => $codeBg} !important;
    color: ${({ $color }) => $color} !important;
    border-color: ${({ $border }) => $border} !important;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) .hexa-docs-content p code {
    background: ${({ $codeBg }) => $codeBg} !important;
    color: ${({ $color }) => $color} !important;
    border: 0.5px solid ${({ $border }) => $border} !important;
    border-radius: 4px;
    padding: 0px 4px;
    font-family: inherit;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    margin: 0px 1px;
  }

  .sbdocs-wrapper:has(.hexa-docs-content) :is(.docblock-argstable, .sb-argstableBlock) a {
    color: ${themeColors.elements['accent-link'].dark} !important;
  }

  /* 28px кнопка + 8px зазор: padding расширяет hover-зону, margin компенсирует выравнивание текста */
  .hexa-docs-content .hexa-docs-heading-anchor {
    position: relative;
    padding-left: 36px;
    margin-left: -36px;
  }

  .hexa-docs-content .hexa-docs-heading-anchor > :is(h2, h3, h4, h5, h6) {
    margin: 0;
    scroll-margin-top: 80px;
  }

  .hexa-docs-content .hexa-docs-heading-link {
    position: absolute;
    top: 50%;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: ${({ $mutedColor }) => $mutedColor};
    cursor: pointer;
    opacity: 0;
    pointer-events: auto;
    transform: translateY(-50%);
    transition: opacity 0.15s ease, background-color 0.15s ease, color 0.15s ease;
  }

  .hexa-docs-content .hexa-docs-heading-anchor:hover .hexa-docs-heading-link,
  .hexa-docs-content .hexa-docs-heading-link:hover,
  .hexa-docs-content .hexa-docs-heading-link:focus-visible,
  .hexa-docs-content .hexa-docs-heading-link--copied {
    opacity: 1;
  }

  .hexa-docs-content .hexa-docs-heading-link:hover {
    background: ${({ $surfaceAlt }) => $surfaceAlt};
    color: ${({ $color }) => $color};
  }

  .hexa-docs-content .hexa-docs-heading-link--copied {
    color: ${themeColors.elements['accent-link'].dark};
  }
`

const StyledAnchorNavigation = styled(AnchorNavigation)`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  min-height: 100vh;
  box-sizing: border-box;

  /* Storybook docs may set font-size on inner div wrappers; keep AnchorNavigation text on its own token size. */
  > nav [class*='rowText'] div,
  > nav [class*='rowText'] span {
    font-family: inherit;
    font-size: 12px; // костыльно, но работает без него тянет не те стили, нужно разобраться
    line-height: 16px;
  }

  > div:first-child {
    min-width: 0;
    max-width: 1200px;
  }

  > nav {
    margin-inline-start: 48px;
  }

  @media (max-width: 768px) {
    display: block;

    > div:first-child {
      padding-right: 0;
    }

    > nav {
      display: none;
    }
  }
`

const Content = styled.div``

export type DocPageLayoutProps = PropsWithChildren<{
  title?: string
}>

export const getActiveTocRoot = (root: HTMLElement): HTMLElement => (
  Array.from(root.querySelectorAll<HTMLElement>('.ant-tabs-tabpane-active'))
    .find((pane) => !pane.parentElement?.closest('.ant-tabs-tabpane')) ?? root
)

/** Canvas documentation layout with TOC on the right. */
export const DocPageLayout: React.FC<DocPageLayoutProps> = ({
  children,
  title
}) => {
  const theme = useTheme()
  const docsThemeKey = useStorybookThemeKey(theme.key)
  const textDirection = useStorybookTextDirection()

  const contentRef = useRef<HTMLDivElement>(null)
  const [entries, setEntries] = useState<TocEntry[]>([])

  useDocumentationHeadingAnchors(contentRef)
  useDocumentationStoryLinks(contentRef)

  useEffect(() => {
    document.body.setAttribute('dir', textDirection)
    return () => { document.body.removeAttribute('dir') }
  }, [textDirection])

  useEffect(() => {
    const root = contentRef.current

    if (!root) {
      setEntries([])
      return
    }

    let debounceId: ReturnType<typeof setTimeout> | undefined

    const collectEntries = () => {
      const tocRoot = getActiveTocRoot(root)
      setEntries(collectDocumentationTocEntries(tocRoot))
    }

    const scheduleCollectEntries = () => {
      if (debounceId !== undefined) {
        clearTimeout(debounceId)
      }

      debounceId = setTimeout(collectEntries, TOC_COLLECT_DEBOUNCE_MS)
    }

    collectEntries()

    const observer = new MutationObserver(scheduleCollectEntries)
    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['class', 'id']
    })

    return () => {
      observer.disconnect()

      if (debounceId !== undefined) {
        clearTimeout(debounceId)
      }
    }
  }, [])

  const items = useMemo<AnchorItem[]>(() => {
    const rootItems: AnchorItem[] = []
    const stack: Array<AnchorItem & { depth: number }> = []

    entries.forEach(({ id, text, depth }) => {
      const item: AnchorItem & { depth: number } = {
        id,
        label: text,
        depth
      }

      while (stack.length > 0 && stack[stack.length - 1].depth >= depth) {
        stack.pop()
      }

      const parent = stack[stack.length - 1]

      if (parent) {
        parent.children = [...(parent.children || []), item]
      } else {
        rootItems.push(item)
      }

      stack.push(item)
    })

    return rootItems
  }, [entries])

  return (
    <ThemeProvider theme={docsThemeKey}>
      <StyledAnchorNavigation
        className={`hexa-docs-page ${docsThemeKey === ThemeKey.Dark ? 'theme-dark' : 'theme-light'}`}
        items={items}
        title={title}>
        <DocsPageOverrides
          $background="var(--bg--neutral--level_0)"
          $color="var(--fg--neutral--primary)"
          $surface={themeColors.bg.alternative[docsThemeKey]}
          $surfaceAlt={themeColors.bg.alternative2[docsThemeKey]}
          $border={themeColors.elements['separator-bold-solid'][docsThemeKey]}
          $mutedColor="var(--fg--neutral--secondary)"
          $codeBg="var(--bg--neutral--level_2)"
        />
        <Content ref={contentRef} className="hexa-docs-content sb-unstyled">
          {children}
        </Content>
      </StyledAnchorNavigation>
    </ThemeProvider>
  )
}
