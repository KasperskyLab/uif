import type { SchemaNode } from "../schema-model/form-schema.ts"
import { registry } from "../component-registry/registry.ts"
import { defaultElementState, defaultElementStyle } from "./serialization.ts"

let elementSequence = 1

export function createElement(componentType: string): SchemaNode {
  const component = registry.components.find(
    (candidate) => candidate.type === componentType
  )
  if (!component)
    throw new Error(`Component '${componentType}' is absent from registry`)
  const idBase = componentType.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  return {
    id: `${idBase}-${elementSequence++}`,
    type: component.type,
    props: structuredClone(component.defaultProps),
    meta: structuredClone(component.defaultMeta),
    state: { ...defaultElementState },
    style: { ...defaultElementStyle },
  }
}
