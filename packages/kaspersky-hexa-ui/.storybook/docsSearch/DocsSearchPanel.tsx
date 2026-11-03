import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { StorybookManager } from '../adapters/storybook'

import { DocsSearchDocument } from './collectDocs'
import { closestDocumentationAnchor, MatchRange, snippetAround } from './plainText'
import { createDocsSearch, DocsSearch } from './searchEngine'

const { useStorybookApi, useTheme } = StorybookManager

const RESULT_LIMIT = 20

type SearchHit = {
  item: DocsSearchDocument
  text: string
  indices?: readonly MatchRange[]
  hash?: string
}

const SEARCH_INDEX_KEY = 'kl-hexa-docs-search-v2'

const longestMatchStart = (indices?: readonly MatchRange[]) => {
  if (!indices?.length) {
    return undefined
  }

  const [start] = indices.reduce((longest, range) => (
    range[1] - range[0] > longest[1] - longest[0] ? range : longest
  ))

  return start
}

const applyDocumentationHash = (hash: string) => {
  const next = hash ? `#${hash}` : ''

  if (window.location.hash === next) {
    window.dispatchEvent(new HashChangeEvent('hashchange'))
    return
  }

  if (!hash) {
    const url = new URL(window.location.href)
    url.hash = ''
    window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}`)
    window.dispatchEvent(new HashChangeEvent('hashchange'))
    return
  }

  window.location.hash = hash
}

const readCachedDocuments = (): DocsSearchDocument[] | null => {
  try {
    const cached = sessionStorage.getItem(SEARCH_INDEX_KEY)

    if (!cached) {
      return null
    }

    const documents = JSON.parse(cached) as DocsSearchDocument[]

    return Array.isArray(documents) ? documents : null
  } catch {
    return null
  }
}

export const DocsSearchPanel = () => {
  const api = useStorybookApi()
  const theme = useTheme()
  const isDark = theme.base === 'dark'
  const rootRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchHit[]>([])
  const [engine, setEngine] = useState<DocsSearch | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const hasIndex = useRef(false)
  const loadStarted = useRef(false)
  const [position, setPosition] = useState({ top: 0, left: 0, width: 600 })

  const applyDocuments = (documents: DocsSearchDocument[]) => {
    if (documents.length === 0) {
      setError('Манифест документов пуст. Проверьте, что включён componentsManifest.')
      return
    }

    hasIndex.current = true
    setError('')
    setEngine(createDocsSearch(documents))
  }

  const loadIndex = () => {
    if (loadStarted.current) {
      return
    }

    loadStarted.current = true
    const cached = readCachedDocuments()

    if (cached) {
      applyDocuments(cached)
    }

    setLoading(true)

    const load = async () => {
      const response = await fetch(new URL('manifests/search.json', window.location.href))

      if (!response.ok) {
        throw new Error(String(response.status))
      }

      const payload = await response.json() as { documents?: DocsSearchDocument[] }
      const documents = payload.documents ?? []

      applyDocuments(documents)

      try {
        sessionStorage.setItem(SEARCH_INDEX_KEY, JSON.stringify(documents))
      } catch {
        // The index can exceed the sessionStorage quota. Search still works in this tab.
      }
    }

    load().catch(() => {
      loadStarted.current = false

      if (!hasIndex.current) {
        setError('Не удалось загрузить манифест документов.')
      }
    }).finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    const trimmed = query.trim()

    if (!engine || trimmed.length < 2) {
      setResults([])
      return
    }

    setResults(engine.search(trimmed).slice(0, RESULT_LIMIT).map((result) => {
      const matchStart = longestMatchStart(result.indices)
      const anchor = matchStart === undefined
        ? undefined
        : closestDocumentationAnchor(result.item.anchors ?? [], matchStart)

      return {
        item: result.item,
        text: result.item.text,
        indices: result.indices,
        hash: anchor?.hash
      }
    }))
  }, [engine, query])

  const showResults = open && (Boolean(error) || !engine || query.trim().length >= 2)

  useEffect(() => {
    if (!showResults || !rootRef.current) {
      return undefined
    }

    const updatePosition = () => {
      const rect = rootRef.current?.getBoundingClientRect()

      if (!rect) {
        return
      }

      const width = Math.max(rect.width, 600)
      const left = Math.min(rect.left, window.innerWidth - width - 12)

      setPosition({
        top: rect.bottom + 6,
        left: Math.max(12, left),
        width
      })
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [showResults])

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const closeIfOutside = (target: EventTarget | null) => {
      if (!(target instanceof Node)) {
        setOpen(false)
        return
      }

      if (rootRef.current?.contains(target) || document.getElementById('kl-docs-search-results')?.contains(target)) {
        return
      }

      setOpen(false)
    }

    const onPointerDown = (event: Event) => {
      closeIfOutside(event.target)
    }

    const removeFrameListeners: Array<() => void> = []

    document.querySelectorAll('iframe').forEach((node) => {
      if (!(node instanceof HTMLIFrameElement)) {
        return
      }

      let frameDocument: Document | null = null

      const attach = () => {
        if (frameDocument) {
          frameDocument.removeEventListener('pointerdown', onPointerDown, true)
        }

        try {
          frameDocument = node.contentDocument
        } catch {
          frameDocument = null
        }

        frameDocument?.addEventListener('pointerdown', onPointerDown, true)
      }

      attach()
      node.addEventListener('load', attach)
      removeFrameListeners.push(() => {
        node.removeEventListener('load', attach)
        frameDocument?.removeEventListener('pointerdown', onPointerDown, true)
      })
    })

    document.addEventListener('pointerdown', onPointerDown, true)

    const onWindowBlur = () => {
      window.setTimeout(() => {
        if (document.activeElement instanceof HTMLIFrameElement) {
          setOpen(false)
        }
      }, 0)
    }

    window.addEventListener('blur', onWindowBlur)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true)
      window.removeEventListener('blur', onWindowBlur)
      removeFrameListeners.forEach((remove) => remove())
    }
  }, [open])

  const selectHit = (id: string, hash?: string) => {
    api.selectStory(id)
    const reveal = () => applyDocumentationHash(hash ?? '')
    reveal()
    window.setTimeout(reveal, 0)
    window.setTimeout(reveal, 50)
    setOpen(false)
  }

  return (
    <div ref={rootRef} style={{ display: 'flex', alignItems: 'center', margin: '0 8px' }}>
      <input
        type="search"
        aria-label="Поиск по документации"
        aria-expanded={showResults}
        aria-controls="kl-docs-search-results"
        placeholder="Поиск по документации"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setOpen(true)
          loadIndex()
        }}
        onFocus={() => {
          setOpen(true)
          loadIndex()
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpen(false)
          }
        }}
        style={{
          width: 260,
          height: 28,
          boxSizing: 'border-box',
          padding: '0 10px',
          borderRadius: theme.input.borderRadius,
          border: `1px solid ${theme.input.border}`,
          background: theme.input.background,
          color: theme.input.color,
          caretColor: theme.input.color,
          colorScheme: isDark ? 'dark' : 'light',
          font: 'inherit',
          fontSize: '12px'
        }}
      />

      {showResults && createPortal(
        <div
          id="kl-docs-search-results"
          style={{
            position: 'fixed',
            top: position.top,
            left: position.left,
            width: position.width,
            maxHeight: 'min(600px, 70vh)',
            overflow: 'auto',
            zIndex: 10000,
            padding: 12,
            boxSizing: 'border-box',
            background: theme.background.content,
            color: theme.color.defaultText,
            borderRadius: 6,
            boxShadow: isDark ? '0 8px 24px rgba(0, 0, 0, 0.45)' : '0 8px 24px rgba(0, 0, 0, 0.12)',
            fontFamily: 'Kaspersky Sans, sans-serif'
          }}
        >
          {error && (
            <p style={{ margin: 0, color: theme.color.negative }}>{error}</p>
          )}

          {!error && loading && !engine && (
            <p style={{ margin: 0, color: theme.textMutedColor }}>
              Загружаем индекс документации.
            </p>
          )}

          {engine && query.trim().length >= 2 && results.length === 0 && (
            <p style={{ margin: 0, color: theme.textMutedColor }}>Ничего не найдено</p>
          )}

          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {results.map((hit) => {
              const snippet = snippetAround(hit.text, query, hit.indices)

              return (
                <li key={`${hit.item.id}-${hit.hash ?? ''}`} style={{ marginBottom: 8 }}>
                  <button
                    type="button"
                    onClick={() => selectHit(hit.item.id, hit.hash)}
                    style={{
                      padding: 0,
                      border: 0,
                      background: 'transparent',
                      color: theme.color.secondary,
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '14px'
                    }}
                  >
                    {hit.item.title}
                  </button>
                  {hit.hash && (
                    <p style={{ margin: '2px 0 0', fontSize: 12, color: theme.color.defaultText }}>
                      #{hit.hash}
                    </p>
                  )}
                  <p style={{ margin: '4px 0 0', fontSize: 13, color: theme.textMutedColor }}>
                    {snippet.length > 0 ? snippet.map((part, index) => (
                      part.match
                        ? (
                            <mark
                              key={index}
                              style={{ background: '#ffe58f', color: '#2E3338', padding: 0 }}
                            >
                              {part.text}
                            </mark>
                          )
                        : <span key={index}>{part.text}</span>
                    )) : 'Перейти к документу'}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>,
        document.body
      )}
    </div>
  )
}
