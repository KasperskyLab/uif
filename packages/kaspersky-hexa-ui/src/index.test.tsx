import { resolve } from 'path'

import { excludeFolders, getRealAndExportedFolders } from '@helpers/exportHelpers'

const CURRENT_PATH = resolve(__dirname)
const FOLDERS_NOT_SUPPOSED_TO_BE_EXPORTED = ['@global-styles', '@global-tests', '@types', 'helpers']

describe('Components index.ts', () => {
  test('each component folder should be exported in index.ts', async () => {
    const { realFolders, exportedFolders } = await getRealAndExportedFolders(CURRENT_PATH)
    const realFoldersToCheck = excludeFolders(realFolders, FOLDERS_NOT_SUPPOSED_TO_BE_EXPORTED)

    expect([...realFoldersToCheck.slice().sort()]).toStrictEqual(exportedFolders.slice().sort())
  })

  test('each component folder should be exported in order of arrangement', async () => {
    const { realFolders, exportedFolders } = await getRealAndExportedFolders(CURRENT_PATH)
    const realFoldersToCheck = excludeFolders(realFolders, FOLDERS_NOT_SUPPOSED_TO_BE_EXPORTED)

    expect([...realFoldersToCheck]).toStrictEqual(exportedFolders)
  })
})
