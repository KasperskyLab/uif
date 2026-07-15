import React, { FC } from 'react'

import { ErrorBoundary } from '../ErrorBoundary'

import { WidgetErrorType } from './components/WidgetError'

interface WidgetErrorBoundaryProps {
  resetKeys?: unknown;
  onError: (error: WidgetErrorType) => void;
}

const error = { reason: 'internalError' }

export const WidgetErrorBoundary: FC<WidgetErrorBoundaryProps> = ({ children, resetKeys, onError }) => {
  return (
    <ErrorBoundary onError={() => onError(error)} resetKeys={[resetKeys]}>
      {children}
    </ErrorBoundary>
  )
}
