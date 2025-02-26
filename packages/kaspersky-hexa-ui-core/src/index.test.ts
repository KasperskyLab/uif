import { resolve } from 'path'

import { COMPONENTS } from './colors/constants'
import { excludeModules, getExportedModules } from './helpers/exportHelpers'

const CURRENT_PATH = resolve(__dirname)
const NON_COMPONENT_EXPORTS = ['fonts', 'typography/js', 'typography/css', 'colors/js', 'colors/css']

describe('Components index.ts', () => {
  test('each component should be exported in index.ts', async () => {
    const exportedModules = await getExportedModules(CURRENT_PATH)
    const realModulesToCheck =
      excludeModules(exportedModules, NON_COMPONENT_EXPORTS)
        .map((moduleName) => moduleName.replace('colors/css/', ''))

    expect([...realModulesToCheck.slice().sort()]).toStrictEqual(COMPONENTS.slice().sort())
  })

  test('each component should be exported in order of arrangement', async () => {
    const exportedModules = await getExportedModules(CURRENT_PATH)
    const realModulesToCheck =
      excludeModules(exportedModules, NON_COMPONENT_EXPORTS)
        .map((moduleName) => moduleName.replace('colors/css/', ''))

    expect([...realModulesToCheck]).toStrictEqual(COMPONENTS)
  })
})
