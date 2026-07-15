import { ComponentType, ErrorInfo, PropsWithChildren, ReactNode } from 'react'

export type FallbackProps = {
  error: Error;
  resetErrorBoundary: (...args: unknown[]) => void;
};

type ErrorBoundarySharedProps = PropsWithChildren<{
  onError?: (error: Error, info: ErrorInfo) => void;
  onReset?: (
    details: { reason: 'imperative-api'; args: unknown[] } | { reason: 'keys'; prev?: unknown[]; next?: unknown[] }
  ) => void;
  resetKeys?: unknown[];
}>;

export type ErrorBoundaryPropsWithComponent = ErrorBoundarySharedProps & {
  fallback?: never;
  FallbackComponent?: ComponentType<FallbackProps>;
  fallbackRender?: never;
};

export type ErrorBoundaryPropsWithRender = ErrorBoundarySharedProps & {
  fallback?: never;
  FallbackComponent?: never;
  fallbackRender?: (props: FallbackProps) => ReactNode;
};

export type ErrorBoundaryPropsWithFallback = ErrorBoundarySharedProps & {
  fallback?: ReactNode;
  FallbackComponent?: never;
  fallbackRender?: never;
};

export type ErrorBoundaryProps =
  | ErrorBoundaryPropsWithFallback
  | ErrorBoundaryPropsWithComponent
  | ErrorBoundaryPropsWithRender;
