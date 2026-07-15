import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode
} from 'react'
import { themes } from 'prism-react-renderer'
import {
  generateElement,
  LiveContext,
  renderElementAsync,
  type LiveProviderProps
} from 'react-live'

type LiveProviderState = {
  error?: string
  element?: ReactNode
}

/**
 * react-live LiveProvider calls setState after async transpile/eval.
 * With destroyInactiveTabPane, tab switches unmount editors before that finishes.
 */
export const SafeLiveProvider: React.FC<LiveProviderProps> = ({
  children,
  code = '',
  language = 'jsx',
  theme,
  disabled,
  scope,
  transformCode,
  noInline = false
}) => {
  const isMountedRef = useRef(true)
  const [state, setState] = useState<LiveProviderState>({
    error: undefined,
    element: undefined
  })

  const setStateIfMounted = useCallback((next: LiveProviderState) => {
    if (isMountedRef.current) {
      setState(next)
    }
  }, [])

  const transpileAsync = useCallback((newCode: string) => {
    const errorCallback = (error: unknown) => {
      setStateIfMounted({
        error: error instanceof Error ? error.toString() : String(error),
        element: undefined
      })
    }

    try {
      const transformResult = transformCode ? transformCode(newCode) : newCode

      return Promise.resolve(transformResult)
        .then((transformedCode) => {
          const renderElement = (element: ReactNode) => {
            setStateIfMounted({ error: undefined, element })
          }

          const input = {
            code: transformedCode,
            scope
          }

          if (noInline) {
            setStateIfMounted({ error: undefined, element: null })
            renderElementAsync(input, renderElement, errorCallback)
          } else {
            renderElement(generateElement(input, errorCallback))
          }
        })
        .catch(errorCallback)
    } catch (error) {
      errorCallback(error)
      return Promise.resolve()
    }
  }, [noInline, scope, setStateIfMounted, transformCode])

  const onError = useCallback((error: Error) => {
    setStateIfMounted({ error: error.toString() })
  }, [setStateIfMounted])

  useEffect(() => {
    isMountedRef.current = true
    transpileAsync(code).catch(onError)

    return () => {
      isMountedRef.current = false
    }
  }, [code, noInline, scope, transformCode])

  const onChange = useCallback((newCode: string) => {
    if (!isMountedRef.current) {
      return
    }

    transpileAsync(newCode).catch(onError)
  }, [onError, transpileAsync])

  return (
    <LiveContext.Provider
      value={{
        ...state,
        code,
        language,
        theme: theme ?? themes.github,
        disabled,
        onError,
        onChange
      }}
    >
      {children}
    </LiveContext.Provider>
  )
}
