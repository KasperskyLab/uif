require('dotenv').config()
const { src, task, dest, series } = require('gulp')
const include = require('gulp-include')
const del = require('del')
const copy = require('gulp-copy')
const less = require('gulp-less')
const shell = require('gulp-shell')
const gulpCopy = require('gulp-copy')
const htmlmin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const path = require('path')

const assetsMap = [
  '*.ico',
  '*.png',
  '*.gif',
  '*.svg',
  '*.svg',
  '*.eot',
  '*.woff',
  '*.woff2',
  '*.ttf',
  '*.otf',
  '*.htc'
]

function compileLess () {
  return src('./src/client/css/styles.less')
    .pipe(include())
    .pipe(less())
    .pipe(dest('./lib/client/css'))
}

function copyCssAssets () {
  return src(assetsMap.map(src => `./src/client/css/**/${src}`))
    .pipe(copy('./lib/client/css', { prefix: 10 }))
}

function compileLessSemantic () {
  return src('./lib/client/css/semantic/semantic-ui-builder.less')
    .pipe(include())
    .pipe(less())
    .pipe(cleanCSS({
      level: 2,
      inline: false
    }))
    .pipe(rename(function (path) {
      path.basename = 'styles-ui-builder'
      path.extname = '.css'
      return path
    }))
    .pipe(dest('./lib/client/css'))
}

task('copy-codemirror', () =>
  src([
    './node_modules/codemirror/lib/codemirror.css',
    './node_modules/codemirror/theme/elegant.css'
  ])
    .pipe(gulpCopy('./lib/client/css', { prefix: 10 })))

task('copy-mdstyles', () =>
  src(['./node_modules/github-markdown-css/github-markdown.css'])
    .pipe(gulpCopy('./lib/client/css', { prefix: 10 })))

task('copy-favicon', () =>
  src(['./src/server/favicon.ico']).pipe(dest('./lib/server')))

task(
  'copy-resources',
  series(
    'copy-codemirror',
    'copy-mdstyles',
    'copy-favicon'
  )
)

task('copy-css-assets:client', () => copyCssAssets('client', 'css'))

task('copy-css-assets:integration:client', () => copyCssAssets('client', 'integration'))

task('less:client', series('copy-css-assets:client', function callCompileLess () {
  return compileLess('styles-ui-builder')
}))

task('build-css:client', series('less:client'))

task('copy:semantic-sources', function () {
  return src([
    './node_modules/semantic-ui-less/themes/default/**/*',
    './node_modules/semantic-ui-less/definitions/**/*',
    './node_modules/semantic-ui-less/theme.less'
  ])
    .pipe(copy('./lib/client/css/semantic', { prefix: 2 }))
})

task('copy:semantic-theme', function () {
  return src([
    './src/client/css/semantic-ui/**/*',
    '!./client/css/semantic-ui/theme.config',
    '!./client/css/semantic-ui/semantic-ui-builder.less'
  ])
    .pipe(copy('./lib/client/css/semantic/themes/ui-builder', { prefix: 4 }))
})

task('copy:semantic-theme-assets', function () {
  return src('./src/client/css/semantic-ui/_custom/assets/**/*')
    .pipe(copy('./lib/client/css', { prefix: 6 }))
})

task('copy:semantic-theme-less', function () {
  return src(['./src/client/css/semantic-ui/semantic-ui-builder.less'])
    .pipe(copy('./lib/client/css/semantic', { prefix: 4 }))
})

task('copy:semantic-theme-config', function () {
  return src(['./src/client/css/semantic-ui/theme.config'])
    .pipe(copy('./lib/client/css/semantic', { prefix: 4 }))
})

task('clear-files:semantic', function () {
  return del('./lib/client/css/semantic/')
})

task('compile:semantic', function () {
  return compileLessSemantic()
})

task('less:semantic',
  series(
    'copy:semantic-sources',
    'copy:semantic-theme',
    'copy:semantic-theme-config',
    'copy:semantic-theme-assets',
    'copy:semantic-theme-less',
    'compile:semantic'
  )
)

task('build-css', series('build-css:client'))

task('webpack', shell.task(['webpack']))

task('webpack-server', shell.task(['webpack --config server.webpack.config.js']))

task('delete-build-directory', callback => del('_build', callback))

task('clear-lib-folder', cb => del(['./lib'], cb))

task('copy-css-assets', () => copyCssAssets())

task('copy-server-js', () =>
  src(['./src/**/*.js', '!./src/client/**/*.js'])
    .pipe(dest('./lib/')))

task('copy-server-html', () =>
  src('src/server/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./lib/server')))

task('copy-server', series('copy-server-js', 'copy-server-html'))

task('copy-client', () => src(['./src/client/**/*', '!./src/client/css/**/*'])
  .pipe(dest(path.resolve(process.env.deployPath, '../src/client'))))

task('copy-build-utils', () => src([
  './webpack.config.js',
  './webpack-entry.js',
  './riot-tag-loader.js',
  './babel.config.js',
  './tsconfig.json'
]).pipe(dest(path.resolve(process.env.deployPath, '../'))))

task('default',
  series(
    'delete-build-directory',
    'clear-lib-folder',
    'less:semantic',
    'copy-css-assets',
    'copy-server',
    'webpack',
    'copy-resources'
  )
)

task('less', series('copy-css-assets', compileLess))

task('copy-to-dev', () => {
  return src('./lib/**/*').pipe(dest('./_dev/lib'))
})

task('clear-lib-folder', cb => del(['./lib'], cb))

task('release', series(
  'default',
  function copyToWebConsoleFolder (cb) {
    return src(['./lib/**/*'])
      .pipe(dest(process.env.deployPath))
      .on('finish', () => {
        task('clear-lib-folder')(cb)
      })
  })
)
