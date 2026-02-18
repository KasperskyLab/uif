const fs = require('fs').promises
const path = require('path')

module.exports = async function removeUndesiredFontFamily (pathToFolder) {
  try {
    const filenames = await fs.readdir(pathToFolder)
    for (const file of filenames) {
      const filePath = path.join(pathToFolder, file)
      const stats = await fs.stat(filePath)
      if (stats.isDirectory()) {
        await removeUndesiredFontFamily(filePath)
      } else {
        try {
          const fileContent = await fs.readFile(filePath, 'utf8')
          if (fileContent.includes('SimSun')) {
            await fs.writeFile(filePath, fileContent.replace(/SimSun/g, 'Arial'))
          }
        } catch (error) {
          console.error(`Error processing file ${filePath}: ${error}`)
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${pathToFolder}: ${error}`)
  }
}
