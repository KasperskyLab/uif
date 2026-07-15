import { Component, createElement, ErrorInfo, ReactNode } from 'react'

import { ErrorBoundaryProps, FallbackProps } from './types'

type ErrorBoundaryState =
  | {
    didCatch: true;
    error: Error;
  }
  | {
    didCatch: false;
    error: null;
  };

const initialState: ErrorBoundaryState = {
  didCatch: false,
  error: null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)

    this.state = initialState
  }

  static getDerivedStateFromError (error: Error): {
    didCatch: boolean;
    error: Error;
  } {
    return { didCatch: true, error }
  }

  resetErrorBoundary = (...args: unknown[]): void => {
    const { error } = this.state

    if (error !== null) {
      this.props.onReset?.({
        args,
        reason: 'imperative-api'
      })

      this.setState(initialState)
    }
  }

  componentDidCatch (error: Error, info: ErrorInfo): void {
    this.props.onError?.(error, info)
  }

  componentDidUpdate (prevProps: ErrorBoundaryProps, prevState: ErrorBoundaryState): void {
    const { didCatch } = this.state
    const { resetKeys } = this.props

    // There's an edge case where if the thing that triggered the error happens to *also* be in the resetKeys array,
    // we'd end up resetting the error boundary immediately.
    // This would likely trigger a second error to be thrown.
    // So we make sure that we don't check the resetKeys on the first call of cDU after the error is set.

    if (didCatch && prevState.error !== null && hasArrayChanged(prevProps.resetKeys, resetKeys)) {
      this.props.onReset?.({
        next: resetKeys,
        prev: prevProps.resetKeys,
        reason: 'keys'
      })

      this.setState(initialState)
    }
  }

  render (): ReactNode {
    const { children, fallbackRender, FallbackComponent, fallback } = this.props
    const { didCatch, error } = this.state

    let childToRender = children

    if (didCatch) {
      const props: FallbackProps = {
        error,
        resetErrorBoundary: this.resetErrorBoundary
      }

      if (typeof fallbackRender === 'function') {
        childToRender = fallbackRender(props)
      } else if (FallbackComponent) {
        childToRender = createElement(FallbackComponent, props)
      } else if (fallback !== undefined) {
        childToRender = fallback
      } else {
        childToRender = null
      }
    }

    return childToRender
  }
}

function hasArrayChanged (a: unknown[] = [], b: unknown[] = []): boolean {
  return a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]))
}
