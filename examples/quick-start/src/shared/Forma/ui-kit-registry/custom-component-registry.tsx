import type { FormaCustomComponentRegistry } from './renderer.types'
import { DemoCustomField } from '../../../app/form-showcase/forms/Login/components/DemoCustomField'

/**
 * Registry of custom components. Only components listed here can be used as
 * type: 'custom'. Components are defined at the entity of usage and imported
 * here so Forma can render them.
 */
export const CUSTOM_COMPONENT_REGISTRY: FormaCustomComponentRegistry = {
  DemoCustomField
}
