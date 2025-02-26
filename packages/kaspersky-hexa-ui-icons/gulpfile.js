const fs = require('fs')

function renamePackage () {
  return new Promise((resolve, reject) => {
    fs.readFile('./package.json', 'utf8', (err, data) => {
      if (err) {
        reject(err)
        return
      }

      try {
        const packageJsonContent = JSON.parse(data)
        packageJsonContent.name = '@kaspersky/icons'
        packageJsonContent.scripts.prepublishOnly = ''
        packageJsonContent.scripts.postpublish = ''

        fs.writeFile('./package.json', JSON.stringify(packageJsonContent, null, 2), (writeErr) => {
          if (writeErr) {
            reject(writeErr)
            return
          }
          resolve('File package.json updated successfully')
        })
      } catch (parseError) {
        reject(parseError)
      }
    })
  })
}

exports.renamePackage = renamePackage
