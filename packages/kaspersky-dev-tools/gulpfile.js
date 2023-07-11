require('dotenv').config()
const { src, dest } = require('gulp')

function release () {
  console.log('Deploying to', process.env.deployPath)
  return src('./src/**/*')
    .pipe(dest(process.env.deployPath))
}

exports.release = release
