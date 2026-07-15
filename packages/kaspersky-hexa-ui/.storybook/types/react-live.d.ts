import type { ReactNode } from 'react'

declare module 'react-live' {
  interface ContextProps {
    element?: ReactNode
    onError?: (error: Error) => void
    onChange?: (code: string) => void
  }

  type TranspileInput = {
    code?: string
    scope?: Record<string, unknown>
  }

  type TranspileErrorCallback = (error: unknown) => void

  export function generateElement (
    input: TranspileInput,
    errorCallback: TranspileErrorCallback
  ): ReactNode

  export function renderElementAsync (
    input: TranspileInput,
    resultCallback: (element: ReactNode) => void,
    errorCallback: TranspileErrorCallback
  ): void
}
