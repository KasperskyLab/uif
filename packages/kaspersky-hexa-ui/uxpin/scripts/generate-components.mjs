import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(process.cwd())
const srcIndexPath = path.join(root, 'src/index.ts')
const uxpinComponentsRoot = path.join(root, 'uxpin/components')
const forceOverwrite = process.argv.includes('--force')

const srcIndex = fs.readFileSync(srcIndexPath, 'utf8')
const exportMatches = [...srcIndex.matchAll(/export (?:\*|\{[^}]+\}) from '\.\/([^']+)'/g)]
const excludedComponents = new Set(['KeyValue', 'Locale', 'Markdown', 'Repeater'])

const componentOverrides = {
  Calendar: {
    generatedName: 'DatePicker',
    importName: 'Calendar',
    propsTypeName: 'CalendarProps',
    propsTypeImportPath: '@src/datepicker/types'
  },
  Input: {
    importName: 'Textbox',
    propsTypeName: 'TextboxProps',
    propsTypeImportPath: '@src/input/types'
  },
  Typography: {
    importName: 'Text',
    propsTypeName: 'TextProps',
    propsTypeImportPath: '@src/typography/text'
  }
}

const folders = exportMatches
  .map((match) => match[1])
  .filter((folder) => !folder.startsWith('@'))

const generated = []

for (const folder of folders) {
  const folderIndexPath = path.join(root, 'src', folder, 'index.ts')

  if (!fs.existsSync(folderIndexPath)) {
    continue
  }

  const folderIndex = fs.readFileSync(folderIndexPath, 'utf8')
  const componentMatch = folderIndex.match(/export (?:\*|\{[^}]+\}) from '\.\/([^'\/]+)'/)

  if (!componentMatch) {
    continue
  }

  const componentName = componentMatch[1]
  const componentOverride = componentOverrides[componentName]
  const generatedName = componentOverride?.generatedName || componentName

  if (!/^[A-Za-z_$][\w$]*$/.test(componentName) || !/^[A-Za-z_$][\w$]*$/.test(generatedName)) {
    continue
  }

  if (excludedComponents.has(componentName)) {
    continue
  }

  const componentDir = path.join(uxpinComponentsRoot, generatedName)
  const componentFilePath = path.join(componentDir, `${generatedName}.tsx`)
  const hexaImportName = componentOverride?.importName || componentName
  const hexaComponentAlias = `Hexa${generatedName}`
  const propsTypeName = `${generatedName}Props`
  const propsTypeImportLine = componentOverride?.propsTypeImportPath
    ? `import { ${componentOverride.propsTypeName} } from '${componentOverride.propsTypeImportPath}'\n\n`
    : ''

  fs.mkdirSync(componentDir, { recursive: true })

  if (fs.existsSync(componentFilePath) && !forceOverwrite) {
    generated.push(`uxpin/components/${generatedName}/${generatedName}.tsx (preserved)`)
    continue
  }

  const content = `import React from 'react'\n\nimport { ${hexaImportName} as ${hexaComponentAlias} } from '@src/${folder}'\n${propsTypeImportLine}${componentOverride ? `type ${propsTypeName} = ${componentOverride.propsTypeName}\n\n` : `type ${propsTypeName} = React.ComponentProps<typeof ${hexaComponentAlias}>\n\n`}const ${generatedName} = (props: ${propsTypeName}): JSX.Element => <${hexaComponentAlias} {...props} />\n\nexport default ${generatedName}\n`

  fs.writeFileSync(componentFilePath, content)
  generated.push(`uxpin/components/${generatedName}/${generatedName}.tsx`)
}

const uniqueSorted = [...new Set(generated)].sort((a, b) => a.localeCompare(b))
console.log(`Generated ${uniqueSorted.length} components`) 
console.log(uniqueSorted.join('\n'))
