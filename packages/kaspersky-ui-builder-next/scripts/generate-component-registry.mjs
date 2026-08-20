import fs from "node:fs"
import path from "node:path"
import process from "node:process"
import ts from "typescript"
import Ajv2020 from "ajv/dist/2020.js"

const projectRoot = process.cwd()
const palettePath = path.join(projectRoot, "palette.json")
const paletteSchemaPath = path.join(projectRoot, "schemas", "palette.schema.json")
const outputPath = path.join(projectRoot, "src/generated/component-registry.json")
const palette = JSON.parse(fs.readFileSync(palettePath, "utf8"))
const paletteSchema = JSON.parse(fs.readFileSync(paletteSchemaPath, "utf8"))
const packageRoot = path.join(projectRoot, "node_modules", ...palette.package.name.split("/"))
const packageJsonPath = path.join(packageRoot, "package.json")
const iconPackageName = "@kaspersky/hexa-ui-icons"
const iconPackageRoot = path.join(projectRoot, "node_modules", ...iconPackageName.split("/"))
const iconPackageJsonPath = path.join(iconPackageRoot, "package.json")
const iconDeclarationsPath = path.join(iconPackageRoot, "16", "index.d.ts")

const diagnostics = []

function diagnostic(severity, code, message, options = {}) {
  diagnostics.push({
    severity,
    source: "component-registry",
    code,
    message,
    blocking: severity === "error",
    ...options,
  })
}

function fail(message) {
  throw new Error(message)
}

function assertPaletteShape(manifest) {
  if (manifest?.schemaVersion !== 1) fail("palette.schemaVersion must be 1")
  if (typeof manifest.paletteVersion !== "string" || !manifest.paletteVersion) {
    fail("palette.paletteVersion must be a non-empty string")
  }
  if (!manifest.package || typeof manifest.package.name !== "string") {
    fail("palette.package.name is required")
  }
  if (typeof manifest.package.versionRange !== "string") {
    fail("palette.package.versionRange is required")
  }
  if (!Array.isArray(manifest.components)) fail("palette.components must be an array")

  const types = new Set()
  for (const [index, component] of manifest.components.entries()) {
    const prefix = `palette.components[${index}]`
    for (const key of ["type", "exportName", "propsType", "title"]) {
      if (typeof component[key] !== "string" || !component[key]) fail(`${prefix}.${key} is required`)
    }
    if (typeof component.acceptsChildren !== "boolean") fail(`${prefix}.acceptsChildren must be boolean`)
    if (types.has(component.type)) fail(`Duplicate component type: ${component.type}`)
    types.add(component.type)
  }
}

function parseVersion(value) {
  const match = String(value).match(/^(\d+)\.(\d+)\.(\d+)/)
  return match ? match.slice(1).map(Number) : null
}

function compareVersions(left, right) {
  for (let index = 0; index < 3; index += 1) {
    if (left[index] !== right[index]) return left[index] - right[index]
  }
  return 0
}

function satisfiesSimpleRange(version, range) {
  const actual = parseVersion(version)
  if (!actual) return false
  const trimmed = range.trim()
  const expected = parseVersion(trimmed.replace(/^[~^]/, ""))
  if (!expected) return true
  if (trimmed.startsWith("^")) {
    const upper = expected[0] > 0 ? [expected[0] + 1, 0, 0] : [0, expected[1] + 1, 0]
    return compareVersions(actual, expected) >= 0 && compareVersions(actual, upper) < 0
  }
  if (trimmed.startsWith("~")) {
    return compareVersions(actual, expected) >= 0 && compareVersions(actual, [expected[0], expected[1] + 1, 0]) < 0
  }
  return compareVersions(actual, expected) === 0
}

function declarationEntry(subpath) {
  const candidates = subpath
    ? [path.join(packageRoot, "src", subpath, "index.d.ts"), path.join(packageRoot, subpath, "index.d.ts")]
    : [path.join(packageRoot, "src/index.d.ts"), path.join(packageRoot, "index.d.ts")]
  const found = candidates.find((candidate) => fs.existsSync(candidate))
  if (!found) fail(`Cannot resolve declaration entry for ${palette.package.name}/${subpath ?? ""}`)
  return found
}

function exportedSymbol(checker, sourceFile, name) {
  const moduleSymbol = checker.getSymbolAtLocation(sourceFile)
  if (!moduleSymbol) return undefined
  const symbol = checker.getExportsOfModule(moduleSymbol).find((candidate) => candidate.name === name)
  if (!symbol) return undefined
  return symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol
}

function collectTypeNodeProperties(typeNode, result = new Map()) {
  if (!typeNode) return result
  if (ts.isParenthesizedTypeNode(typeNode)) return collectTypeNodeProperties(typeNode.type, result)
  if (ts.isIntersectionTypeNode(typeNode) || ts.isUnionTypeNode(typeNode)) {
    for (const member of typeNode.types) collectTypeNodeProperties(member, result)
    return result
  }
  if (ts.isTypeReferenceNode(typeNode)) {
    for (const argument of typeNode.typeArguments ?? []) collectTypeNodeProperties(argument, result)
    return result
  }
  if (!ts.isTypeLiteralNode(typeNode)) return result
  for (const member of typeNode.members) {
    if (!ts.isPropertySignature(member) || !member.type || !member.name) continue
    const name = member.name.getText().replace(/^['"]|['"]$/g, "")
    result.set(name, { name, declaration: member, optional: Boolean(member.questionToken) })
  }
  return result
}

function propsForType(checker, symbol, type) {
  const semantic = checker.getPropertiesOfType(type)
  if (semantic.length) {
    return semantic.map((property) => ({
      name: property.name,
      declaration: property.valueDeclaration ?? property.declarations?.[0] ?? symbol.declarations?.[0],
      optional: Boolean(property.flags & ts.SymbolFlags.Optional),
      symbol: property,
    }))
  }
  const declaration = symbol.declarations?.find(ts.isTypeAliasDeclaration)
  return declaration ? [...collectTypeNodeProperties(declaration.type).values()] : []
}

function symbolDescription(symbol, checker) {
  return ts.displayPartsToString(symbol.getDocumentationComment(checker)) || undefined
}

function typeText(checker, type, node) {
  return checker.typeToString(type, node, ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope)
}

function literalValue(type) {
  if (type.flags & ts.TypeFlags.StringLiteral) return type.value
  if (type.flags & ts.TypeFlags.NumberLiteral) return type.value
  if (type.flags & ts.TypeFlags.BooleanLiteral) return type.intrinsicName === "true"
  if (type.flags & ts.TypeFlags.Null) return null
  return undefined
}

function schemaForType(checker, type, node, seen = new Set(), depth = 0) {
  const text = typeText(checker, type, node)
  if (depth > 6) return { schema: {}, unsupported: `Maximum type depth exceeded: ${text}` }
  if (/\b(ReactNode|ReactElement|JSX\.Element|CSSProperties|RefObject|RefAttributes)\b/.test(text)) {
    return { schema: {}, unsupported: `React-specific type requires an explicit override: ${text}` }
  }
  if (type.getCallSignatures().length > 0) return { schema: { "x-function": true }, functionType: true }
  if (type.flags & ts.TypeFlags.Any) return { schema: {}, anyLike: true }
  if (type.flags & ts.TypeFlags.Unknown) return { schema: {}, anyLike: true }
  if (type.flags & ts.TypeFlags.String) return { schema: { type: "string" } }
  if (type.flags & ts.TypeFlags.Number) return { schema: { type: "number" } }
  if (type.flags & ts.TypeFlags.Boolean) return { schema: { type: "boolean" } }
  if (type.flags & ts.TypeFlags.Null) return { schema: { type: "null" } }
  if (type.flags & ts.TypeFlags.Undefined) return { schema: {}, undefinedType: true }

  const literal = literalValue(type)
  if (literal !== undefined || type.flags & ts.TypeFlags.Null) return { schema: { const: literal } }

  if (type.isUnion()) {
    const members = type.types.filter((member) => !(member.flags & ts.TypeFlags.Undefined))
    if (members.length === 1) {
      return schemaForType(checker, members[0], node, seen, depth + 1)
    }
    const values = members.map(literalValue)
    if (members.length > 0 && values.every((value, index) => value !== undefined || members[index].flags & ts.TypeFlags.Null)) {
      return { schema: { enum: values } }
    }
    const converted = members.map((member) => schemaForType(checker, member, node, seen, depth + 1))
    return {
      schema: { anyOf: converted.map((entry) => entry.schema) },
      unsupported: converted.find((entry) => entry.unsupported)?.unsupported,
    }
  }

  if (type.isIntersection()) {
    const primitiveMember = type.types.find((member) =>
      member.flags & (ts.TypeFlags.String | ts.TypeFlags.Number | ts.TypeFlags.Boolean),
    )
    if (primitiveMember) return schemaForType(checker, primitiveMember, node, seen, depth + 1)
  }

  if (checker.isTupleType(type)) {
    const argumentsList = checker.getTypeArguments(type)
    return {
      schema: {
        type: "array",
        prefixItems: argumentsList.map((item) => schemaForType(checker, item, node, seen, depth + 1).schema),
        minItems: argumentsList.length,
        maxItems: argumentsList.length,
      },
    }
  }

  if (checker.isArrayType(type)) {
    const item = checker.getElementTypeOfArrayType(type)
    return { schema: { type: "array", items: item ? schemaForType(checker, item, node, seen, depth + 1).schema : {} } }
  }

  if (text === "Date") return { schema: { type: "string", format: "date-time" }, dateType: true }

  if (type.flags & ts.TypeFlags.Object) {
    const identity = type.id
    if (seen.has(identity)) return { schema: {}, unsupported: `Recursive type requires JSON editor: ${text}` }
    const nextSeen = new Set(seen).add(identity)
    const properties = {}
    const required = []
    for (const property of checker.getPropertiesOfType(type)) {
      const declaration = property.valueDeclaration ?? property.declarations?.[0] ?? node
      const propertyType = checker.getTypeOfSymbolAtLocation(property, declaration)
      properties[property.name] = schemaForType(checker, propertyType, declaration, nextSeen, depth + 1).schema
      const description = symbolDescription(property, checker)
      if (description) properties[property.name].description = description
      if (!(property.flags & ts.SymbolFlags.Optional)) required.push(property.name)
    }
    const schema = { type: "object", properties, additionalProperties: false }
    if (required.length) schema.required = required
    return { schema }
  }

  return { schema: {}, unsupported: `Unsupported type: ${text}` }
}

function isSystemExcluded(name, typeString) {
  if (["children", "ref", "key", "disabled", "readOnly", "readonly", "loading", "className", "style"].includes(name)) return true
  if (/^on[A-Z]/.test(name)) return true
  if (/^(testId|dataTestId|klId|componentId)$/i.test(name)) return true
  return /\b(ReactNode|ReactElement|JSX\.Element|RefObject|RefAttributes)\b/.test(typeString)
}

function inferEditor(schema, conversion) {
  if (conversion.functionType) return "function"
  if (conversion.anyLike) return "json"
  if (conversion.dateType || schema.format === "date-time") return "text"
  if (Array.isArray(schema.enum)) return schema.enum.length > 0 ? "select" : "json"
  if (schema.type === "string") return "text"
  if (schema.type === "number" || schema.type === "integer") return "number"
  if (schema.type === "boolean") return "checkbox"
  if (schema.type === "array") {
    if (Array.isArray(schema.items?.enum)) return "multiselect"
    return "json"
  }
  return "json"
}

function editorCompatible(editor, schema) {
  if (["json", "hidden", "function", "iconSelect"].includes(editor)) return true
  if (editor === "text") return schema.type === "string" || schema.type === undefined
  if (editor === "number") return schema.type === "number" || schema.type === "integer"
  if (editor === "checkbox") return schema.type === "boolean"
  if (editor === "select") return Array.isArray(schema.enum) || Array.isArray(schema.anyOf)
  if (editor === "multiselect") return schema.type === "array"
  return true
}

const validatePalette = new Ajv2020({ allErrors: true, strict: false }).compile(paletteSchema)
if (!validatePalette(palette)) fail(`palette.json does not match palette.schema.json: ${JSON.stringify(validatePalette.errors)}`)
assertPaletteShape(palette)
if (!fs.existsSync(packageJsonPath)) fail(`Package is not installed: ${palette.package.name}`)
if (!fs.existsSync(iconPackageJsonPath) || !fs.existsSync(iconDeclarationsPath)) fail(`Package is not installed: ${iconPackageName}`)
const targetPackage = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))
const iconPackage = JSON.parse(fs.readFileSync(iconPackageJsonPath, "utf8"))
const iconExports = new Set([...fs.readFileSync(iconDeclarationsPath, "utf8").matchAll(/export \{ default as ([A-Za-z0-9_]+) \}/g)].map((match) => match[1]))
if (!satisfiesSimpleRange(targetPackage.version, palette.package.versionRange)) {
  fail(`${palette.package.name}@${targetPackage.version} does not satisfy ${palette.package.versionRange}`)
}

const declarationFiles = [...new Set(palette.components.map((component) => declarationEntry(component.propsTypePath ?? component.exportPath)))]
const program = ts.createProgram({
  rootNames: declarationFiles,
  options: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    skipLibCheck: true,
    strictNullChecks: true,
    types: ["react"],
  },
})
const checker = program.getTypeChecker()
const components = []

for (const component of palette.components) {
  const declarationFile = declarationEntry(component.propsTypePath ?? component.exportPath)
  const sourceFile = program.getSourceFile(declarationFile)
  if (!sourceFile) {
    diagnostic("error", "PROPS_DECLARATION_NOT_FOUND", `Declaration file is unavailable: ${declarationFile}`, { componentType: component.type })
    continue
  }
  const propsSymbol = exportedSymbol(checker, sourceFile, component.propsType)
  if (!propsSymbol) {
    diagnostic("error", "PROPS_TYPE_NOT_FOUND", `Exported props type '${component.propsType}' was not found`, { componentType: component.type })
    continue
  }
  if (!exportedSymbol(checker, sourceFile, component.exportName)) {
    diagnostic("error", "COMPONENT_EXPORT_NOT_FOUND", `Exported component '${component.exportName}' was not found`, { componentType: component.type })
    continue
  }
  if (component.icon && !iconExports.has(component.icon)) {
    diagnostic("warning", "ICON_EXPORT_NOT_FOUND", `Icon '${component.icon}' was not found in ${iconPackageName}/16`, { componentType: component.type })
  }

  const declaration = propsSymbol.declarations?.[0] ?? sourceFile
  const propsType = checker.getDeclaredTypeOfSymbol(propsSymbol)
  const availableProps = propsForType(checker, propsSymbol, propsType)
  const include = component.props?.include ? new Set(component.props.include) : null
  const exclude = new Set(component.props?.exclude ?? [])
  const overrides = component.props?.overrides ?? {}
  const propDefinitions = []
  const schemaProperties = {}
  const required = []

  for (const property of availableProps) {
    const name = property.name
    const propertyDeclaration = property.declaration ?? declaration
    const propertyType = property.symbol
      ? checker.getTypeOfSymbolAtLocation(property.symbol, propertyDeclaration)
      : checker.getTypeAtLocation(propertyDeclaration.type)
    const propertyTypeText = typeText(checker, propertyType, propertyDeclaration)
    const override = overrides[name]

    if (include && !include.has(name) && !override) continue
    if (exclude.has(name) && !override) continue
    if (isSystemExcluded(name, propertyTypeText) && !override) continue
    if (override?.editor === "hidden") continue

    const conversion = schemaForType(checker, propertyType, propertyDeclaration)
    if (conversion.unsupported && !override) {
      diagnostic("warning", "UNSUPPORTED_PROP_TYPE", `${name}: ${conversion.unsupported}`, {
        componentType: component.type,
        path: `components.${component.type}.props.${name}`,
      })
      continue
    }

    const editor = override?.editor ?? inferEditor(conversion.schema, conversion)
    if (!editorCompatible(editor, conversion.schema)) {
      diagnostic("error", "INCOMPATIBLE_PROP_OVERRIDE", `Editor '${editor}' is incompatible with ${name}: ${propertyTypeText}`, {
        componentType: component.type,
        path: `components.${component.type}.props.${name}`,
      })
      continue
    }

    const description = override?.description ?? (property.symbol ? symbolDescription(property.symbol, checker) : undefined)
    const title = override?.title ?? name
    const options = override?.options ?? (Array.isArray(conversion.schema.enum)
      ? conversion.schema.enum
          .filter((value) => ["string", "number", "boolean"].includes(typeof value))
          .map((value) => ({ value, label: String(value) }))
      : undefined)
    const isRequired = !property.optional && !(propertyType.flags & ts.TypeFlags.Undefined)

    schemaProperties[name] = conversion.schema
    if (description) schemaProperties[name].description = description
    if (Object.hasOwn(component.defaultProps ?? {}, name)) schemaProperties[name].default = component.defaultProps[name]
    if (isRequired) required.push(name)
    propDefinitions.push({
      name,
      required: isRequired,
      typeText: propertyTypeText,
      editor,
      title,
      ...(description ? { description } : {}),
      ...(options?.length ? { options } : {}),
      schema: schemaProperties[name],
    })
  }

  for (const overrideName of Object.keys(overrides)) {
    if (!availableProps.some((property) => property.name === overrideName)) {
      diagnostic("warning", "UNKNOWN_PROP_OVERRIDE", `Override references unknown prop '${overrideName}'`, {
        componentType: component.type,
        path: `components.${component.type}.props.overrides.${overrideName}`,
      })
    }
  }

  const propsSchema = {
    type: "object",
    additionalProperties: false,
    properties: schemaProperties,
    ...(required.length ? { required } : {}),
  }

  components.push({
    type: component.type,
    packageName: palette.package.name,
    packageVersion: targetPackage.version,
    exportName: component.exportName,
    exportPath: component.exportPath ?? "",
    propsType: component.propsType,
    propsTypePath: component.propsTypePath ?? component.exportPath ?? "",
    title: component.title,
    ...(component.description ? { description: component.description } : {}),
    keywords: component.keywords ?? [],
    ...(component.category !== undefined ? { category: component.category } : {}),
    ...(component.order !== undefined ? { order: component.order } : {}),
    ...(component.icon ? { icon: component.icon } : {}),
    status: component.status ?? "stable",
    ...(component.deprecatedMessage ? { deprecatedMessage: component.deprecatedMessage } : {}),
    acceptsChildren: component.acceptsChildren,
    deniedChildren: component.deniedChildren ?? [],
    meta: component.meta ?? {},
    defaultMeta: component.defaultMeta ?? { buildType: "any" },
    ...(component.preview ? { preview: component.preview } : {}),
    propsSchema,
    props: propDefinitions,
    defaultProps: component.defaultProps ?? {},
  })
}

const registry = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  paletteVersion: palette.paletteVersion,
  package: { name: palette.package.name, version: targetPackage.version },
  iconPackage: { name: iconPackageName, version: iconPackage.version },
  categoryOrder: palette.categoryOrder ?? [],
  components,
  diagnostics,
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, `${JSON.stringify(registry, null, 2)}\n`)

const errors = diagnostics.filter((entry) => entry.severity === "error")
console.log(`Generated ${components.length} components at ${path.relative(projectRoot, outputPath)}`)
console.log(`Diagnostics: ${errors.length} errors, ${diagnostics.length - errors.length} warnings`)
if (errors.length) process.exitCode = 1
