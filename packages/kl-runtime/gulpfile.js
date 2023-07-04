require('dotenv').config()

const { series, src, dest } = require('gulp')
const babel = require('gulp-babel')
const del = require('del')

function buildClient () {
  return src('src/**/*.js')
    .pipe(babel())
    .pipe(dest('./lib'))
}

function buildServer () {
  return src('src/**/*.js')
    .pipe(dest('./lib/server'))
}

function clearLibFolder (cb) {
  return del([`./lib`], cb)
}

function release () {
  console.log('Deploying to', process.env.deployPath)
  return src('./lib/**/*')
    .pipe(dest(process.env.deployPath))
}

exports.default = series(buildClient, buildServer)
exports.build = series(buildClient, buildServer)
exports.clearLibFolder = clearLibFolder
exports.release = series(buildClient, buildServer, release, clearLibFolder)
