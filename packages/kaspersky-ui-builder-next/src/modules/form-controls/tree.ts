import type { ComponentRegistry } from "../component-registry/types.ts"
import type { SchemaNode } from "../schema-model/form-schema.ts"

export interface ElementLocation {
  node: SchemaNode
  parentId: string | null
  index: number
  depth: number
}

export interface TreeOperationResult {
  elements: SchemaNode[]
  removed?: SchemaNode
}

export function findElement(elements: SchemaNode[], elementId: string): ElementLocation | undefined {
  const visit = (nodes: SchemaNode[], parentId: string | null, depth: number): ElementLocation | undefined => {
    for (let index = 0; index < nodes.length; index += 1) {
      const node = nodes[index]
      if (node.id === elementId) return { node, parentId, index, depth }
      const nested = node.children ? visit(node.children, node.id, depth + 1) : undefined
      if (nested) return nested
    }
    return undefined
  }
  return visit(elements, null, 1)
}

export function collectElementIds(elements: SchemaNode[]): Set<string> {
  const result = new Set<string>()
  const visit = (nodes: SchemaNode[]): void => {
    for (const node of nodes) {
      result.add(node.id)
      if (node.children) visit(node.children)
    }
  }
  visit(elements)
  return result
}

export function subtreeHeight(node: SchemaNode): number {
  if (!node.children?.length) return 1
  return 1 + Math.max(...node.children.map(subtreeHeight))
}

export function containsElement(node: SchemaNode, elementId: string): boolean {
  return node.id === elementId || Boolean(node.children?.some((child) => containsElement(child, elementId)))
}

export function insertElement(
  elements: SchemaNode[],
  node: SchemaNode,
  parentId: string | null,
  requestedIndex?: number,
): SchemaNode[] {
  if (parentId === null) {
    const index = Math.max(0, Math.min(requestedIndex ?? elements.length, elements.length))
    return [...elements.slice(0, index), node, ...elements.slice(index)]
  }
  let inserted = false
  const visit = (nodes: SchemaNode[]): SchemaNode[] => nodes.map((current) => {
    if (current.id === parentId) {
      const children = current.children ?? []
      const index = Math.max(0, Math.min(requestedIndex ?? children.length, children.length))
      inserted = true
      return { ...current, children: [...children.slice(0, index), node, ...children.slice(index)] }
    }
    if (!current.children) return current
    const children = visit(current.children)
    return children === current.children ? current : { ...current, children }
  })
  const result = visit(elements)
  if (!inserted) throw new Error(`Parent element '${parentId}' was not found`)
  return result
}

export function removeElement(elements: SchemaNode[], elementId: string): TreeOperationResult {
  let removed: SchemaNode | undefined
  const visit = (nodes: SchemaNode[]): SchemaNode[] => {
    const next: SchemaNode[] = []
    for (const current of nodes) {
      if (current.id === elementId) {
        removed = current
        continue
      }
      if (current.children) {
        const children = visit(current.children)
        next.push(children === current.children ? current : { ...current, ...(children.length ? { children } : { children: undefined }) })
      } else {
        next.push(current)
      }
    }
    return removed ? next : nodes
  }
  const result = visit(elements)
  return { elements: result, removed }
}

export function updateElement(
  elements: SchemaNode[],
  elementId: string,
  updater: (node: SchemaNode) => SchemaNode,
): SchemaNode[] {
  let updated = false
  const visit = (nodes: SchemaNode[]): SchemaNode[] => nodes.map((current) => {
    if (current.id === elementId) {
      updated = true
      return updater(current)
    }
    if (!current.children) return current
    const children = visit(current.children)
    return children === current.children ? current : { ...current, children }
  })
  const result = visit(elements)
  if (!updated) throw new Error(`Element '${elementId}' was not found`)
  return result
}

export function placementError(
  elements: SchemaNode[],
  node: SchemaNode,
  parentId: string | null,
  registry: ComponentRegistry,
): string | undefined {
  const components = new Map(registry.components.map((component) => [component.type, component]))
  const childComponent = components.get(node.type)
  const parent = parentId === null ? undefined : findElement(elements, parentId)
  if (parentId !== null && !parent) return `Parent element '${parentId}' was not found`
  if (parent && containsElement(node, parent.node.id)) return "Нельзя переместить элемент внутрь собственного поддерева"

  const targetDepth = parent ? parent.depth + 1 : 1
  if (targetDepth + subtreeHeight(node) - 1 > 10) return "Результирующая глубина дерева превышает 10 уровней"
  if (!parent) return undefined

  const parentComponent = components.get(parent.node.type)
  if (!parentComponent) return `Parent component '${parent.node.type}' is absent from registry`
  if (!parentComponent.acceptsChildren) return `Component '${parent.node.type}' does not accept children`
  const entity = typeof childComponent?.meta.entity === "string" ? childComponent.meta.entity : undefined
  if (entity && parentComponent.deniedChildren.includes(entity)) {
    return `Component '${parent.node.type}' denies child entity '${entity}'`
  }
  return undefined
}
