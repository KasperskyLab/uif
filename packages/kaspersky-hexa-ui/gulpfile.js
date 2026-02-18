require('dotenv').config()
const del = require('del')
const { dest, src } = require('gulp')

const { utils: { removeUndesiredFontFamily } } = require('@kaspersky/dev-tools')

const fs = require('fs')
const path = require('path')

const esmPath = 'esm'

function removeUndesiredCode () {
  return removeUndesiredFontFamily(path.resolve(__dirname, esmPath))
}

function clearLibFolder (cb) {
  return del([`./${esmPath}`], cb)
}

function deploy () {
  console.log('Deploying to', process.env.deployPath)
  if (!process.env.deployPath) return

  return src([
    './esm/**/*'
  ]).pipe(dest(process.env.deployPath))
}

function renamePackage () {
  console.log('Current path: ', process.cwd())
  return new Promise((resolve, reject) => {
    fs.readFile(`./${esmPath}/package.json`, 'utf8', (err, data) => {
      if (err) {
        reject(err)
        return
      }

      try {
        const packageJsonContent = JSON.parse(data)
        packageJsonContent.name = '@kaspersky/components-v6'

        fs.writeFile(`./${esmPath}/package.json`, JSON.stringify(packageJsonContent, null, 2), (writeErr) => {
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

exports.clear = clearLibFolder
exports.deploy = deploy
exports.removeUndesiredCode = removeUndesiredCode
exports.renamePackage = renamePackage
