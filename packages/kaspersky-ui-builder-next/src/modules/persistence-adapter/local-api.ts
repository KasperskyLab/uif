import path from "node:path"
import fs from "node:fs/promises"
import type { IncomingMessage, ServerResponse } from "node:http"
import type { Plugin } from "vite"
import { builderSettings } from "../../../settings.ts"

const projectRoot = path.resolve(import.meta.dirname, "../../..")

const functionExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
])

function sendJson(response: ServerResponse, status: number, data: unknown) {
  response.statusCode = status
  response.setHeader("Content-Type", "application/json")
  response.end(JSON.stringify(data))
}

function formFileName(name: unknown): string | null {
  if (typeof name !== "string" || !name.trim() || name !== name.trim())
    return null
  if (
    name === "." ||
    name === ".." ||
    /[\\/]/.test(name) ||
    [...name].some((character) => character.charCodeAt(0) < 32)
  )
    return null
  return `${name}.json`
}

async function readJson(request: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = []
  for await (const chunk of request) chunks.push(Buffer.from(chunk))
  return JSON.parse(Buffer.concat(chunks).toString("utf8"))
}

export function localBuilderApiPlugin(): Plugin {
  return {
    name: "form-builder-local-api",
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const url = new URL(request.url ?? "/", "http://localhost")
        if (url.pathname === "/api/function-files") {
          const basePath = path.resolve(projectRoot, builderSettings.basePath)
          if (
            basePath !== projectRoot &&
            !basePath.startsWith(`${projectRoot}${path.sep}`)
          ) {
            sendJson(response, 400, {
              basePath: builderSettings.basePath,
              files: [],
              error: "basePath должен находиться внутри проекта",
            })
            return
          }
          const files: string[] = []
          const walk = async (directory: string): Promise<void> => {
            const entries = await fs.readdir(directory, { withFileTypes: true })
            for (const entry of entries) {
              const absolutePath = path.join(directory, entry.name)
              if (entry.isDirectory()) await walk(absolutePath)
              else if (
                entry.isFile() &&
                functionExtensions.has(path.extname(entry.name))
              ) {
                files.push(
                  `./${path.relative(basePath, absolutePath).split(path.sep).join("/")}`
                )
              }
            }
          }
          try {
            await walk(basePath)
          } catch (error) {
            if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error
          }
          sendJson(response, 200, {
            basePath: builderSettings.basePath,
            files: files.sort(),
          })
          return
        }

        if (!url.pathname.startsWith("/api/forms")) {
          next()
          return
        }
        const formsPath = path.resolve(projectRoot, "forms")
        await fs.mkdir(formsPath, { recursive: true })
        const id = decodeURIComponent(url.pathname.slice("/api/forms/".length))
        const readFormEntries = async () => {
          const names = (await fs.readdir(formsPath)).filter((name) =>
            name.endsWith(".json")
          )
          return Promise.all(
            names.map(async (name) => ({
              name,
              form: JSON.parse(
                await fs.readFile(path.join(formsPath, name), "utf8")
              ) as { id?: unknown; name?: unknown },
            }))
          )
        }
        if (request.method === "GET" && url.pathname === "/api/forms") {
          const forms = (await readFormEntries())
            .sort((left, right) => left.name.localeCompare(right.name))
            .map((entry) => entry.form)
          sendJson(response, 200, forms)
          return
        }
        if (!/^[a-zA-Z0-9._-]+$/.test(id)) {
          sendJson(response, 400, { error: "Некорректный ID формы" })
          return
        }
        if (request.method === "PUT") {
          const form = (await readJson(request)) as {
            id?: unknown
            name?: unknown
          }
          if (typeof form.id !== "string" || !form.id) {
            sendJson(response, 400, { error: "ID формы обязателен" })
            return
          }
          const targetFileName = formFileName(form.name)
          if (!targetFileName) {
            sendJson(response, 400, {
              error:
                "Название формы не должно содержать разделители пути, управляющие символы или пробелы по краям",
            })
            return
          }
          const previousId = url.searchParams.get("previousId") ?? form.id
          const entries = await readFormEntries()
          const previous = entries.find((entry) => entry.form.id === previousId)
          const collision = entries.find(
            (entry) =>
              entry.name === targetFileName && entry.form.id !== previousId
          )
          if (collision) {
            sendJson(response, 409, {
              error: `Файл формы «${String(form.name)}» уже существует`,
            })
            return
          }
          const filePath = path.join(formsPath, targetFileName)
          await fs.writeFile(filePath, `${JSON.stringify(form, null, 2)}\n`, "utf8")
          if (previous && previous.name !== targetFileName)
            await fs.unlink(path.join(formsPath, previous.name))
          sendJson(response, 200, form)
          return
        }
        if (request.method === "DELETE") {
          const entry = (await readFormEntries()).find(
            (candidate) => candidate.form.id === id
          )
          if (entry) await fs.unlink(path.join(formsPath, entry.name))
          sendJson(response, 200, { ok: true })
          return
        }
        sendJson(response, 405, { error: "Метод не поддерживается" })
      })
    },
  }
}

