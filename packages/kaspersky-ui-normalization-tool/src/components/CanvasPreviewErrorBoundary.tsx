import React from 'react'
import { Text } from '@kaspersky/hexa-ui'

interface Props {
  children: React.ReactNode
  fallback?: React.ReactNode
  componentLabel?: string
}

interface State {
  hasError: boolean
}

/**
 * Ловит ошибки рендера превью контрола на холсте, чтобы блок .control-wrap оставался в DOM
 * (например для e2e и чтобы не ломать весь холст при падении одного компонента).
 */
export class CanvasPreviewErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.warn('[CanvasPreviewErrorBoundary]', error?.message, info?.componentStack)
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <Text type="BTR3" style={{ color: 'var(--text--secondary, #666)' }}>
          {this.props.componentLabel ? `Компонент «${this.props.componentLabel}»` : 'Компонент не удалось отобразить'}
        </Text>
      )
    }
    return this.props.children
  }
}
