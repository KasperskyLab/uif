const path = require('path')
const fs = require('fs')

const size = process.argv[2]
const directoryPath = path.join(__dirname, size)

fs.writeFileSync(`./${size}.js`, '')
fs.writeFileSync(`./names${size}.ts`, '')
fs.writeFileSync(`./${size}.d.ts`, '')

fs.appendFileSync(`./${size}.d.ts`, 'import { ComponentType } from \'react\'\n\n')

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err)
  }
  fs.appendFileSync(`./names${size}.ts`, `export const iconTypes${size} = [\n`)

  files.forEach(function (file) {
    const filePath = path.join(directoryPath, file)

    const newFileName = file
      .replace(' ', '')
      .replace('&', '')
      .replace('-', '')
      .replace('_', '')

    const newFilePath = path.join(directoryPath, newFileName)

    replaceColor(newFilePath)

    fs.renameSync(filePath, newFilePath)
    fs.appendFileSync(`./${size}.js`, `export { default as ${newFileName.split('.')[0]} } from './${size}/${newFileName}'\n`)
    fs.appendFileSync(`./names${size}.ts`, `  '${newFileName.split('.')[0]}',\n`)
    fs.appendFileSync(`./${size}.d.ts`, `export const ${newFileName.split('.')[0]}: ComponentType<any>\n`)
  })
  fs.appendFileSync(`./names${size}.ts`, '] as const')
})

const replaceColor = (fileName) => {
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) return console.log(err)

    const result = data.replace(/fill="#(1D1D1B|323232)"/gi, "fill='currentColor'")

    fs.writeFile(fileName, result, 'utf8', function (err) {
      if (err) return console.log(err)
    })
  })
}
