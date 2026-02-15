import { setupWorker } from 'msw/browser'
import type { RequestHandler } from 'msw'

/**
 * Init hook: start MSW worker with the given handlers. Must be called before
 * using Forma when running with mocks (e.g. in dev). Forma does not import
 * app-specific mocks; the app passes handlers from its own aggregation
 * (e.g. app/mocks/handlers.ts).
 */
export function initFormaMocks(handlers: RequestHandler[]) {
  const worker = setupWorker(...handlers)
  return worker.start({
    onUnhandledRequest: 'bypass',
    quiet: true
  })
}
