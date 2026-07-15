require('dotenv').config()
const del = require('del')
const { dest, src } = require('gulp')

const { utils: { removeUndesiredFontFamily } } = require('@kaspersky/dev-tools')

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

exports.clear = clearLibFolder
exports.deploy = deploy
exports.removeUndesiredCode = removeUndesiredCode
