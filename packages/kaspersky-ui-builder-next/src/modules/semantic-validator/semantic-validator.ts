import type { ComponentRegistry, JsonSchemaNode } from "../component-registry/types.ts"
import type { Diagnostic } from "../schema-model/diagnostics.ts"
import type {
  ConditionExpression,
  ConditionSource,
  FormSchema,
  JsonValue,
  SchemaNode,
} from "../schema-model/form-schema.ts"

interface IndexedElement {
  node: SchemaNode
  path: string
  depth: number
}

function makeDiagnostic(
  code: string,
  message: string,
  options: Pick<Diagnostic, "severity" | "blocking"> & Partial<Diagnostic>,
): Diagnostic {
  return { source: "semantic-validator", code, message, ...options }
}

function valueType(value: unknown): string {
  if (value === null) return "null"
  if (Array.isArray(value)) return "array"
  return typeof value
}

function matchesType(value: unknown, expected: string | string[]): boolean {
  const types = Array.isArray(expected) ? expected : [expected]
  return types.some((type) => {
    if (type === "integer") return typeof value === "number" && Number.isInteger(value)
    if (type === "number") return typeof value === "number" && Number.isFinite(value)
    if (type === "object") return typeof value === "object" && value !== null && !Array.isArray(value)
    return valueType(value) === type
  })
}

function sameJsonValue(left: unknown, right: JsonValue): boolean {
  return JSON.stringify(left) === JSON.stringify(right)
}

function validateJsonValue(
  value: unknown,
  schema: JsonSchemaNode,
  path: string,
  errors: string[],
): void {
  if (schema.const !== undefined && !sameJsonValue(value, schema.const)) {
    errors.push(`${path}: значение должно быть равно ${JSON.stringify(schema.const)}`)
    return
  }
  if (schema.enum && !schema.enum.some((candidate) => sameJsonValue(value, candidate))) {
    errors.push(`${path}: значение отсутствует в допустимом списке`)
    return
  }
  if (schema.anyOf) {
    const matched = schema.anyOf.some((candidate) => {
      const candidateErrors: string[] = []
      validateJsonValue(value, candidate, path, candidateErrors)
      return candidateErrors.length === 0
    })
    if (!matched) errors.push(`${path}: значение не соответствует ни одному допустимому варианту`)
    return
  }
  if (schema.oneOf) {
    const matches = schema.oneOf.filter((candidate) => {
      const candidateErrors: string[] = []
      validateJsonValue(value, candidate, path, candidateErrors)
      return candidateErrors.length === 0
    }).length
    if (matches !== 1) errors.push(`${path}: значение должно соответствовать ровно одному варианту`)
    return
  }
  if (schema.type && !matchesType(value, schema.type)) {
    errors.push(`${path}: ожидался тип ${JSON.stringify(schema.type)}, получен ${valueType(value)}`)
    return
  }
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    const record = value as Record<string, unknown>
    for (const required of schema.required ?? []) {
      if (!Object.hasOwn(record, required)) errors.push(`${path}/${required}: обязательное свойство отсутствует`)
    }
    for (const [key, childValue] of Object.entries(record)) {
      const childSchema = schema.properties?.[key]
      if (childSchema) validateJsonValue(childValue, childSchema, `${path}/${key}`, errors)
      else if (schema.additionalProperties === false) errors.push(`${path}/${key}: неизвестное свойство`)
      else if (typeof schema.additionalProperties === "object") {
        validateJsonValue(childValue, schema.additionalProperties, `${path}/${key}`, errors)
      }
    }
  }
  if (Array.isArray(value) && schema.items && !Array.isArray(schema.items)) {
    value.forEach((item, index) => validateJsonValue(item, schema.items as JsonSchemaNode, `${path}/${index}`, errors))
  }
}

function indexElements(elements: SchemaNode[]): IndexedElement[] {
  const result: IndexedElement[] = []
  const visit = (nodes: SchemaNode[], parentPath: string, depth: number): void => {
    nodes.forEach((node, index) => {
      const path = `${parentPath}/${index}`
      result.push({ node, path, depth })
      if (node.children) visit(node.children, `${path}/children`, depth + 1)
    })
  }
  visit(elements, "/elements", 1)
  return result
}

function conditionSources(expression: ConditionExpression): ConditionSource[] {
  if ("conditions" in expression) return expression.conditions.flatMap(conditionSources)
  const sources = [expression.source]
  if (expression.operand?.type === "source") sources.push(expression.operand.source)
  return sources
}

function dependencyCycles(graph: Map<string, Set<string>>): Set<string> {
  const visiting = new Set<string>()
  const visited = new Set<string>()
  const stack: string[] = []
  const cyclic = new Set<string>()

  const visit = (node: string): void => {
    if (visited.has(node)) return
    if (visiting.has(node)) {
      const start = stack.indexOf(node)
      stack.slice(start).forEach((id) => cyclic.add(id))
      cyclic.add(node)
      return
    }
    visiting.add(node)
    stack.push(node)
    for (const target of graph.get(node) ?? []) visit(target)
    stack.pop()
    visiting.delete(node)
    visited.add(node)
  }

  for (const node of graph.keys()) visit(node)
  return cyclic
}

export function validateFormSemantics(form: FormSchema, registry: ComponentRegistry): Diagnostic[] {
  const diagnostics: Diagnostic[] = []
  const indexed = indexElements(form.elements)
  const elementsById = new Map<string, IndexedElement>()
  const componentsByType = new Map(registry.components.map((component) => [component.type, component]))
  const graph = new Map<string, Set<string>>()

  for (const entry of indexed) {
    const { node, path, depth } = entry
    const previous = elementsById.get(node.id)
    if (previous) {
      diagnostics.push(makeDiagnostic("DUPLICATE_ELEMENT_ID", `ID элемента '${node.id}' должен быть уникальным`, {
        severity: "error",
        blocking: true,
        path: `${path}/id`,
        elementId: node.id,
      }))
    } else {
      elementsById.set(node.id, entry)
    }
    if (depth > 10) {
      diagnostics.push(makeDiagnostic("MAX_DEPTH_EXCEEDED", `Глубина элемента ${depth} превышает максимум 10`, {
        severity: "error",
        blocking: true,
        path,
        elementId: node.id,
      }))
    }

    const component = componentsByType.get(node.type)
    if (!component) {
      diagnostics.push(makeDiagnostic("UNKNOWN_COMPONENT", `Компонент '${node.type}' отсутствует в registry`, {
        severity: "error",
        blocking: false,
        path: `${path}/type`,
        elementId: node.id,
      }))
    } else {
      if (node.children && !component.acceptsChildren) {
        diagnostics.push(makeDiagnostic("CHILDREN_NOT_ALLOWED", `Компонент '${node.type}' не допускает children`, {
          severity: "error",
          blocking: true,
          path: `${path}/children`,
          elementId: node.id,
        }))
      }
      for (const child of node.children ?? []) {
        const childComponent = componentsByType.get(child.type)
        const entity = typeof childComponent?.meta.entity === "string" ? childComponent.meta.entity : undefined
        if (entity && component.deniedChildren.includes(entity)) {
          diagnostics.push(makeDiagnostic("DENIED_CHILD", `Компонент '${node.type}' запрещает дочерний entity '${entity}'`, {
            severity: "error",
            blocking: true,
            path: `${path}/children`,
            elementId: node.id,
          }))
        }
      }
      const propErrors: string[] = []
      validateJsonValue(node.props, component.propsSchema, `${path}/props`, propErrors)
      for (const message of propErrors) {
        diagnostics.push(makeDiagnostic("INVALID_COMPONENT_PROPS", message, {
          severity: "error",
          blocking: true,
          path: `${path}/props`,
          elementId: node.id,
        }))
      }
    }

    for (const [index, rule] of (node.validation ?? []).entries()) {
      if (rule.type === "Legacy") {
        diagnostics.push(makeDiagnostic("LEGACY_VALIDATION", "Исходное правило сохранено и требует адаптера runtime", {
          severity: "warning",
          blocking: false,
          path: `${path}/validation/${index}`,
          elementId: node.id,
        }))
      }
      if (rule.name !== rule.type) {
        diagnostics.push(makeDiagnostic("VALIDATION_NAME_TYPE_MISMATCH", "ValidationRule.name должен совпадать с ValidationRule.type", {
          severity: "error",
          blocking: true,
          path: `${path}/validation/${index}`,
          elementId: node.id,
        }))
      }
      if ((rule.config?.kind === "range" || rule.config?.kind === "rangeEnum") &&
          typeof rule.config.from === "number" && typeof rule.config.to === "number" &&
          rule.config.from > rule.config.to) {
        diagnostics.push(makeDiagnostic("INVALID_VALIDATION_RANGE", "Значение «От» не должно превышать «До»", {
          severity: "error",
          blocking: true,
          path: `${path}/validation/${index}/config`,
          elementId: node.id,
        }))
      }
    }

    const targets = new Set<string>()
    for (const dependency of node.dependencies ?? []) {
      for (const source of conditionSources(dependency.condition)) {
        if (source.type === "element") targets.add(source.elementId)
      }
    }
    graph.set(node.id, targets)
  }

  for (const entry of indexed) {
    const { node, path } = entry
    for (const [field, entity] of [["lockId", "lock"], ["accordionId", "accordion"]] as const) {
      const targetId = node[field]
      if (targetId === undefined || targetId === null || targetId === "") continue
      const target = elementsById.get(targetId)
      const targetComponent = target ? componentsByType.get(target.node.type) : undefined
      if (targetId === node.id || !target || targetComponent?.meta.entity !== entity) {
        diagnostics.push(makeDiagnostic("INVALID_ELEMENT_REFERENCE", `${field} должен ссылаться на другой элемент entity '${entity}' этой формы`, {
          severity: "error",
          blocking: true,
          path: `${path}/${field}`,
          elementId: node.id,
        }))
      }
    }
    for (const targetId of graph.get(node.id) ?? []) {
      if (!elementsById.has(targetId)) {
        diagnostics.push(makeDiagnostic("DEPENDENCY_SOURCE_NOT_FOUND", `Источник зависимости '${targetId}' отсутствует`, {
          severity: "warning",
          blocking: false,
          path: `${path}/dependencies`,
          elementId: node.id,
        }))
      }
    }
  }

  for (const elementId of dependencyCycles(graph)) {
    const entry = elementsById.get(elementId)
    diagnostics.push(makeDiagnostic("CYCLIC_DEPENDENCY", `Элемент '${elementId}' входит в цикл зависимостей`, {
      severity: "error",
      blocking: false,
      path: entry ? `${entry.path}/dependencies` : undefined,
      elementId,
    }))
  }

  return diagnostics
}
