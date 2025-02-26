import { readFile } from 'fs/promises'
import { resolve } from 'path'

const readIndexFileContent = (pathToScan: string) => {
  const indexFilePath = resolve(pathToScan, 'index.ts')

  return readFile(indexFilePath, 'utf-8')
}

const extractAllExportedModules = (fileContent: string) => {
  const matchIterator = fileContent.matchAll(/export .+ from '\.\/(.+)'/g)

  return Array.from(matchIterator).map(([, exportedModule]) => exportedModule)
}

export const getExportedModules = async (pathToScan: string) => {
  const indexFileContent = await readIndexFileContent(pathToScan)
  const exportedModules = extractAllExportedModules(indexFileContent)

  return exportedModules
}

export const excludeModules = (modules: string[], modulesToExclude: string[]) => {
  return modules.filter((module) => !modulesToExclude.includes(module))
}
