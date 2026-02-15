import type { FormaFieldRenderer } from './renderer.types'
import type { FormaRegisteredFieldType } from './field-config.types'

const REGISTRY: Partial<Record<FormaRegisteredFieldType, FormaFieldRenderer>> =
  {}

/**
 * Register a field type renderer. Call for built-in types (Forma does this)
 * and for new Hexa UI or custom types in your app.
 * Using an unregistered type in form config causes a runtime error; the type
 * must also be added to FormaFieldRegistry (module augmentation) for build-time safety.
 */
export function registerFormaFieldType<T extends FormaRegisteredFieldType>(
  type: T,
  renderer: FormaFieldRenderer
): void {
  REGISTRY[type] = renderer
}

export function getFieldRenderer(
  type: FormaRegisteredFieldType
): FormaFieldRenderer | undefined {
  return REGISTRY[type]
}
