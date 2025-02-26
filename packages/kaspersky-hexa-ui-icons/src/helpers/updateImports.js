/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('fs')
const path = require('path')

const rawDirectoryPath = path.join(__dirname, '../iconsSVGs')
const typeFilePath = path.join(__dirname, '../index.ts')
const srcDirectoryPath = path.join(__dirname, '..')
const typeFilePathTypes = path.join(__dirname, '../types/index.ts')

const indexTemplate = (icon) => ({
  import: `import * as Icons${icon} from './${icon}'\n`,
  export: `export * as Icons${icon} from './${icon}'`,
  type: `export type TypeIcons${icon} = Exclude<keyof typeof Icons${icon}, 'default'>\n`
})

const createMainIndex = () => {
  const folders = fs.readdirSync(rawDirectoryPath)

  const imports = folders.reduce((acc, icon) =>
    acc + indexTemplate(icon).import, ''
  )

  const exports = folders.reduce((acc, icon) =>
    acc + indexTemplate(icon).export + '\n' + indexTemplate(icon).type, ''
  )

  fs.writeFileSync(typeFilePath, imports + '\n' + exports)
}

// eslint-disable-next-line prefer-regex-literals
const fileExtReg = new RegExp('(.*)(\\.\\w*)$')

const createFolderIndex = () => {
  const folders = fs.readdirSync(rawDirectoryPath)
  let typesAcc = ''

  folders.forEach((sizeFolder) => {
    const srcFolderPath = path.join(srcDirectoryPath, sizeFolder)
    const indexPath = path.join(srcFolderPath, 'index.ts')
    const icons = fs.readdirSync(srcFolderPath)
    let importsAcc = ''
    let exportAcc = ''
    let objectAcc = ''
    icons.forEach((icon) => {
      const name = icon.match(fileExtReg)?.[1]
      if (name !== 'index') {
        typesAcc += `  '${sizeFolder}/${name}',\n`
        importsAcc += `import ${name} from './${name}'\n`
        exportAcc += `export { default as ${name} } from './${name}'\n`
        objectAcc += `  ${name},\n`
      }
    })
    const indexText = `${importsAcc}
${exportAcc}
const Icons${sizeFolder} = {
${objectAcc.slice(0, -2)}
}
export default Icons${sizeFolder}

export interface ITestIds {
  testId?: string,
  klId?: string
}
`
    fs.writeFileSync(indexPath, indexText)
  })
  fs.appendFileSync(typeFilePathTypes, ('export const Icons = [\n' + typesAcc.slice(0, -2) + '\n] as const\n'))
}

createMainIndex()
createFolderIndex()
