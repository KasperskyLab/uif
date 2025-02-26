import { readdir, readFile } from 'fs/promises'
import { resolve } from 'path'

const getAllFoldersInPath = async (pathToScan: string) => {
  const direntAll = await readdir(pathToScan, { withFileTypes: true })

  return direntAll
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
}

const readIndexFileContent = (pathToScan: string) => {
  const indexFilePath = resolve(pathToScan, 'index.ts')

  return readFile(indexFilePath, 'utf-8')
}

const extractAllExportedFolders = (fileContent: string) => {
  const matchIterator = fileContent.matchAll(/export .+ from '\.\/(.+)'/g)

  return Array.from(matchIterator).map(([, exportedFolder]) => exportedFolder)
}

export const getRealAndExportedFolders = async (pathToScan: string) => {
  const realFolders = await getAllFoldersInPath(pathToScan)
  const indexFileContent = await readIndexFileContent(pathToScan)
  const exportedFolders = extractAllExportedFolders(indexFileContent)

  return {
    realFolders,
    exportedFolders
  }
}

export const excludeFolders = (foldersAll: string[], foldersToExclude: string[]) => {
  return foldersAll.filter((folder) => !foldersToExclude.includes(folder))
}
