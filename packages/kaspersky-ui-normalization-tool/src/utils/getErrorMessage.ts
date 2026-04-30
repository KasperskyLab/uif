/**
 * Извлекает сообщение об ошибке для отображения пользователю.
 * Поддерживает Error, DOMException, AggregateError, объекты с message.
 */
export function getErrorMessage(err: unknown, fallback: string): string {
  if (err instanceof Error) return err.message
  if (typeof err === 'object' && err !== null && 'message' in err) {
    const msg = (err as { message?: unknown }).message
    if (typeof msg === 'string') return msg
  }
  if (typeof err === 'string') return err
  return fallback
}
