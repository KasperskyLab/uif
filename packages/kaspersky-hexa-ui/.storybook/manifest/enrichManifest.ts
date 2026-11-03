import { toPlainText } from '../docsSearch/plainText.ts'

const PUBLIC_PACKAGE = '@kaspersky/hexa-ui'
const SUMMARY_LIMIT = 400

export type ComponentMeta = {
  component?: string
  description?: string
  usage?: string
}

type DocEntry = {
  content?: string
  text?: string
}

type ComponentEntry = {
  name?: string
  path?: string
  description?: string
  import?: string
  error?: { message?: string }
  reactDocgenTypescript?: { exportName?: string }
  docs?: Record<string, DocEntry>
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const isComponentName = (value?: string): value is string =>
  !!value && /^[A-Z][A-Za-z0-9]*$/.test(value)

const clean = (value?: string) => value?.replace(/\s+/g, ' ').trim() || ''

export const leadText = (text: string, limit = SUMMARY_LIMIT): string => {
  const normalized = clean(text)

  if (!normalized || normalized.length <= limit) {
    return normalized
  }

  const cut = normalized.slice(0, limit)
  const space = cut.lastIndexOf(' ')
  const head = space > 80 ? cut.slice(0, space) : cut

  return `${head.trim()}…`
}

export const resolveExportName = (
  component: ComponentEntry,
  meta: ComponentMeta | null
): string | undefined => {
  const fromDocgen = component.reactDocgenTypescript?.exportName

  if (isComponentName(fromDocgen)) {
    return fromDocgen
  }

  if (isComponentName(meta?.component)) {
    return meta.component
  }

  const fromName = component.name?.replace(/Component$/, '')

  return isComponentName(fromName) ? fromName : undefined
}

export const publicComponentImport = (exportName: string) =>
  `import { ${exportName} } from '${PUBLIC_PACKAGE}'`

export const componentDescription = (
  meta: ComponentMeta | null,
  docsText: string
): string => {
  const usage = clean(meta?.usage)

  if (usage) {
    return usage
  }

  const fromDocs = leadText(docsText)

  if (fromDocs) {
    return fromDocs
  }

  return clean(meta?.description)
}

export const enrichDocEntry = <T extends DocEntry>(entry: T): T & { text?: string } => {
  if (typeof entry.content !== 'string' || !entry.content) {
    return entry
  }

  const text = toPlainText(entry.content)

  if (!text) {
    return entry
  }

  return {
    ...entry,
    text
  }
}

const docsPlainText = (docs?: Record<string, DocEntry>) =>
  Object.values(docs ?? {})
    .map((entry) => entry.text || (entry.content ? toPlainText(entry.content) : ''))
    .find((text) => text.length > 0) ?? ''

const shouldRewriteImport = (component: ComponentEntry) =>
  !component.error?.message?.includes('node_modules')

export const enrichComponentEntry = (
  component: ComponentEntry,
  meta: ComponentMeta | null
): ComponentEntry => {
  const docs = component.docs
    ? Object.fromEntries(Object.entries(component.docs).map(([id, entry]) => [id, enrichDocEntry(entry)]))
    : component.docs
  const description = component.description?.trim() || componentDescription(meta, docsPlainText(docs))
  const exportName = resolveExportName(component, meta)

  return {
    ...component,
    ...docs ? { docs } : {},
    ...description ? { description } : {},
    ...exportName && shouldRewriteImport(component) ? { import: publicComponentImport(exportName) } : {}
  }
}

const enrichDocMap = (docs: Record<string, unknown>) =>
  Object.fromEntries(Object.entries(docs).map(([id, entry]) => [
    id,
    isRecord(entry) ? enrichDocEntry(entry as DocEntry) : entry
  ]))

export const enrichManifests = (
  manifests: unknown,
  readMeta: (storyPath: string) => ComponentMeta | null
): unknown => {
  if (!isRecord(manifests)) {
    return manifests
  }

  const next = { ...manifests }
  const componentsFile = manifests.components

  if (isRecord(componentsFile) && isRecord(componentsFile.components)) {
    next.components = {
      ...componentsFile,
      components: Object.fromEntries(Object.entries(componentsFile.components).map(([id, entry]) => {
        if (!isRecord(entry)) {
          return [id, entry]
        }

        const component = entry as ComponentEntry
        const meta = component.path ? readMeta(component.path) : null

        return [id, enrichComponentEntry(component, meta)]
      }))
    }
  }

  const docsFile = manifests.docs

  if (isRecord(docsFile) && isRecord(docsFile.docs)) {
    next.docs = {
      ...docsFile,
      docs: enrichDocMap(docsFile.docs)
    }
  }

  return next
}
