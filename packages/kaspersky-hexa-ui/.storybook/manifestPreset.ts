import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'

import { DocsSearchDocument, searchDocumentsFromManifests } from './docsSearch/collectDocs.ts'
import {
  readSearchCache,
  searchCachePayload,
  toSearchResponse,
  withSearchManifest
} from './docsSearch/searchIndex.ts'
import { ComponentMeta, enrichManifests } from './manifest/enrichManifest.ts'

const MANIFESTS_KEY = '__klHexaUiManifests'
const SOURCE_ROOTS = ['src', 'docs', '.storybook']
const SEARCH_CACHE = path.resolve(process.cwd(), 'node_modules/.cache/kl-hexa-ui/search.json')
const MANIFEST_WAIT_MS = 3 * 60 * 1000

type DevServer = {
  use: (
    path: string,
    handler: (req: DevRequest, res: DevResponse) => void
  ) => void
}

type DevRequest = {
  headers: { host?: string }
}

type DevResponse = {
  statusCode: number
  setHeader: (name: string, value: string) => void
  end: (body?: string) => void
}

type CachedIndex = {
  signature: string
  body: string
}

let cachedIndex: CachedIndex | null = null
let readyBody: string | null = null
let pendingIndex: Promise<string> | null = null

const isIndexedFile = (filePath: string) => {
  const base = path.basename(filePath)

  return base.endsWith('.mdx') ||
    base === 'meta.json' ||
    filePath.includes(`${path.sep}.storybook${path.sep}`)
}

const manifestSignature = async () => {
  let maxMtime = 0
  let count = 0

  const walk = async (dir: string) => {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true }).catch(() => [])

    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name === 'storybook-static') {
        continue
      }

      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        await walk(fullPath)
        continue
      }

      if (!isIndexedFile(fullPath)) {
        continue
      }

      const stat = await fs.promises.stat(fullPath).catch(() => null)

      if (!stat) {
        continue
      }

      maxMtime = Math.max(maxMtime, stat.mtimeMs)
      count += 1
    }
  }

  await Promise.all(SOURCE_ROOTS.map((root) => walk(path.resolve(process.cwd(), root))))

  return `${count}:${maxMtime}`
}

const triggerComponentManifest = (host: string) => new Promise<void>((resolve, reject) => {
  const request = http.get(`http://${host}/manifests/components.json`, (response) => {
    response.resume()
    response.on('end', () => {
      if ((response.statusCode ?? 500) >= 400) {
        reject(new Error(`Manifest request failed with ${response.statusCode}`))
        return
      }

      resolve()
    })
  })

  request.on('error', reject)
})

const devServerHost = () => {
  const args = process.argv

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index]

    if ((arg === '-p' || arg === '--port') && args[index + 1]) {
      return `127.0.0.1:${args[index + 1]}`
    }

    if (arg.startsWith('--port=')) {
      return `127.0.0.1:${arg.slice('--port='.length)}`
    }
  }

  return '127.0.0.1:6006'
}

const delay = (ms: number) => new Promise((resolve) => {
  setTimeout(resolve, ms)
})

const readReadySearchBody = async () => {
  if (readyBody) {
    return readyBody
  }

  const raw = await fs.promises.readFile(SEARCH_CACHE, 'utf8').catch(() => null)

  if (!raw) {
    return null
  }

  try {
    const parsed = JSON.parse(raw) as { documents?: unknown }

    if (!Array.isArray(parsed.documents)) {
      return null
    }

    const body = toSearchResponse(parsed.documents as DocsSearchDocument[])

    if (!readyBody) {
      readyBody = body
    }

    return readyBody
  } catch {
    return null
  }
}

const readFreshSearchBody = async (signature: string) => {
  const raw = await fs.promises.readFile(SEARCH_CACHE, 'utf8').catch(() => null)

  if (!raw) {
    return null
  }

  return readSearchCache(raw, signature)
}

const writeSearchCache = async (signature: string, documents: unknown) => {
  if (!Array.isArray(documents)) {
    return
  }

  await fs.promises.mkdir(path.dirname(SEARCH_CACHE), { recursive: true })
  await fs.promises.writeFile(SEARCH_CACHE, searchCachePayload(signature, documents))
}

const waitForServerManifest = async (host: string) => {
  const started = Date.now()
  let lastError: unknown

  while (Date.now() - started < MANIFEST_WAIT_MS) {
    try {
      await triggerComponentManifest(host)
      return
    } catch (error) {
      lastError = error
      await delay(1000)
    }
  }

  throw lastError instanceof Error ? lastError : new Error('Search index manifest was not ready')
}

const buildSearchIndex = (host: string) => {
  if (pendingIndex) {
    return pendingIndex
  }

  pendingIndex = (async () => {
    const signature = await manifestSignature()

    if (cachedIndex?.signature === signature) {
      readyBody = cachedIndex.body
      return cachedIndex.body
    }

    const fromDisk = await readFreshSearchBody(signature)

    if (fromDisk) {
      cachedIndex = { signature, body: fromDisk }
      readyBody = fromDisk
      return fromDisk
    }

    Reflect.set(globalThis, MANIFESTS_KEY, null)
    await waitForServerManifest(host)
    const refreshed = await readFreshSearchBody(await manifestSignature())
    const body = refreshed || toSearchResponse(
      searchDocumentsFromManifests(Reflect.get(globalThis, MANIFESTS_KEY))
    )

    cachedIndex = { signature: await manifestSignature(), body }
    readyBody = body

    return body
  })().finally(() => {
    pendingIndex = null
  })

  return pendingIndex
}

const readMeta = (storyPath: string): ComponentMeta | null => {
  const absolute = path.isAbsolute(storyPath) ? storyPath : path.resolve(process.cwd(), storyPath)
  let dir = path.dirname(absolute)

  for (let depth = 0; depth < 5; depth += 1) {
    const candidate = path.join(dir, '__meta__', 'meta.json')

    if (fs.existsSync(candidate)) {
      try {
        return JSON.parse(fs.readFileSync(candidate, 'utf8')) as ComponentMeta
      } catch {
        return null
      }
    }

    const parent = path.dirname(dir)

    if (parent === dir) {
      break
    }

    dir = parent
  }

  return null
}

export const experimental_manifests = async (existingManifests: unknown) => {
  const manifests = withSearchManifest(enrichManifests(existingManifests, readMeta))
  const search = manifests.search

  Reflect.set(globalThis, MANIFESTS_KEY, manifests)
  await writeSearchCache(await manifestSignature(), search.documents).catch(() => undefined)

  return manifests
}

export const experimental_devServer = async (app: DevServer) => {
  const host = devServerHost()

  // The file is prepared while Storybook starts. Opening the page only reads it.
  void buildSearchIndex(host).catch(() => undefined)

  app.use('/manifests/search.json', (req, res) => {
    const send = (body: string) => {
      res.setHeader('Content-Type', 'application/json')
      res.setHeader('Cache-Control', 'no-store')
      res.end(body)
    }

    readReadySearchBody().then((body) => {
      if (body) {
        send(body)
        return undefined
      }

      return buildSearchIndex(req.headers.host || host).then(send)
    }).catch((error: unknown) => {
      res.statusCode = 500
      res.end(error instanceof Error ? error.message : 'Failed to build the search index')
    })
  })

  return app
}
