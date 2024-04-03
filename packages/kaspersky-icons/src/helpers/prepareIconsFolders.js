/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('fs')
const path = require('path')
const { toPascalCase } = require('./formatters/toPascalCase')
const SVG_ORIGINALS_FOLDER = 'iconsSources'
const SVG_PREPARED_NAMES_FOLDER = 'iconsSVGs'

const directoryPath = path.join(__dirname, '../' + SVG_ORIGINALS_FOLDER)
const outputPath = path.join(__dirname, '../' + SVG_PREPARED_NAMES_FOLDER)

const folderSizes = ['8', '12', '16', '24', '32', '40', '48']

const removeIncorrectFolders = () => {
  const folders = fs.readdirSync(directoryPath)

  folders.forEach((size) => {
    if (!folderSizes.includes(size)) {
      // remove all incorrect size folders
      remove(`${directoryPath}/${size}`)
    } else {
      const resultDir = directoryPath.replace(SVG_ORIGINALS_FOLDER, SVG_PREPARED_NAMES_FOLDER)
      if (fs.existsSync(`${outputPath}/${size}`)) return
      fs.mkdirSync(`${resultDir}/${size}`)
    }
  })
}

const removeEmptyFolders = (dir) => {
  const folders = fs.readdirSync(dir)

  if (!folders?.length) {
    remove(dir)
  }

  folders.forEach((folder) => {
    const folderPath = path.join(dir, folder)
    const isDirectory = fs.statSync(folderPath).isDirectory()

    if (!isDirectory) return

    removeEmptyFolders(folderPath)
  })
}

const flatFolders = () => {
  const folders = fs.readdirSync(directoryPath)

  const iconsPathMap = folders.reduce((acc, size) => {
    const rootPath = path.join(directoryPath, size)
    const paths = getAllFilePaths(rootPath) ?? []
    acc[`${rootPath}`] = paths
    return acc
  }, {}) // {"path to 16 folder": [....paths], "path to 24 folder": [...paths]}

  Object.entries(iconsPathMap)
    .forEach(([pathToSizeFolder, iconPaths]) => {
      iconPaths.forEach((pathToIcon) => {
        const { oldPath, newPath } = normalizePath(pathToSizeFolder, pathToIcon)
        fs.copyFile(oldPath, newPath, (err) => {
          if (err) throw err
        })
      })
    })
}

// eslint-disable-next-line prefer-regex-literals
const fileExtReg = new RegExp('(.*)(\\.\\w*)$')

const normalizePath = (dir, pathToIcon) => { // flat path and convert name to PascaleCase
  const relativePath = pathToIcon.replace(dir, '')
  const resultDir = dir.replace(SVG_ORIGINALS_FOLDER, SVG_PREPARED_NAMES_FOLDER)
  // eslint-disable-next-line no-unused-vars
  const [_, name, ext] = relativePath.replaceAll('\\', '-').match(fileExtReg)
  const res = toPascalCase(name) + ext

  return { oldPath: pathToIcon, newPath: path.join(resultDir, res) }
}

const remove = (dir) => {
  const isDirectory = fs.statSync(dir).isDirectory()

  if (isDirectory) {
    fs.rmdirSync(dir, {
      recursive: true,
      force: true
    })
  } else {
    fs.rmSync(dir, {
      force: true
    })
  }
}

const getAllFilePaths = (dir) => {
  const files = fs.readdirSync(dir)

  return files.reduce((res, file) => {
    const filePath = path.join(dir, file)
    const isDirectory = fs.statSync(filePath).isDirectory()

    if (isDirectory) {
      res.push(...getAllFilePaths(filePath))
    } else {
      res.push(filePath)
    }

    return res
  }, [])
}

const getSizeReg = /width="(\d+)"\sheight="(\d+)"\s/gm
const sizeConfigReg = /width="\d+"\sheight="\d+"\sviewBox="[\d\s]+"/gm

const fixSize = (pathToFile) => {
  const content = fs.readFileSync(pathToFile, { encoding: 'utf-8' })
  getSizeReg.lastIndex = 0
  // eslint-disable-next-line no-unused-vars
  const [_, width, height] = getSizeReg.exec(content) ?? [] // ex. 16, 17
  if (!width || !height || width === height) return
  const rightSize = folderSizes.find((s) => s === width || s === height) // 16
  const rightSizeConf = `width="${rightSize}" height="${rightSize}" viewBox="0 0 ${rightSize} ${rightSize}"`
  const newContent = content.replace(sizeConfigReg, rightSizeConf)
  fs.writeFileSync(pathToFile, newContent)
}

const fixIconSizes = () => {
  const folders = fs.readdirSync(outputPath)
  const iconPaths = folders.reduce((acc, curFolder) => {
    if (folderSizes.includes(curFolder)) {
      const folderPath = path.join(outputPath, curFolder)
      acc.push(...getAllFilePaths(folderPath))
    }
    return acc
  }, [])

  iconPaths.forEach(fixSize)
}

removeIncorrectFolders()
flatFolders()
removeEmptyFolders(directoryPath)
fixIconSizes()
