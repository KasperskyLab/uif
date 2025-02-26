require('dotenv').config()
const del = require('del')
const { src, dest, series } = require('gulp')
const babel = require('gulp-babel')
const gulpIf = require('gulp-if')
const template = require('gulp-template')
const less = require('less')

const fs = require('fs')
const path = require('path')

const packageJson = require('./package.json')

const reactDesignSystemFolder = 'design-system' // used in various funcs
const esmPath = 'esm'

const reactAssetFolders = [
  'helpers',
  reactDesignSystemFolder,
  'icons',
  'illustrations'
]

const buildReactHelpers = []
  .concat(...reactAssetFolders.map(folder => {
    return [
      // move non-ts(non-js) assets from helper folders
      () => src([
        `${folder}/**/*.*`,
        `!${folder}/**/*.{js,jsx,ts,tsx}`
      ]).pipe(dest(`./${esmPath}/${folder}`)),
      // transpile icons and helpers
      () => src([
        `${folder}/**/*.{ts,tsx}`,
        `!${folder}/**/*.test.{ts,tsx}`,
        '!icons/*.d.ts'
      ])
        .pipe(babel())
        .pipe(dest(`./${esmPath}/${folder}`))
    ]
  }))

function buildStyles (cb) {
  const src = './style/styles.less'

  less.render(
    fs.readFileSync(src).toString(),
    {
      filename: path.resolve(src),
      paths: ['node_modules'],
      javascriptEnabled: true,
      math: 'always'
    },
    function (e, output) {
      fs.writeFile(`./${esmPath}/${reactDesignSystemFolder}/global-style/styles.css`, output.css, cb)
    }
  )
}

function copyFonts () {
  return src('./design-system/assets/fonts/**/*')
    .pipe(dest(`./${esmPath}/design-system/assets/fonts`))
}

function buildReactComponents () {
  return src([
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/stories/**/*',
    '!src/**/*.stories.tsx',
    '!src/**/__tests__/**/*',
    '!src/**/*.test.{ts,tsx}'
  ])
    .pipe(gulpIf(
      file => file.relative === 'index.ts',
      template({ version: packageJson.version })
    ))
    .pipe(babel())
    .pipe(dest(`./${esmPath}/src`))
}

function copyPackageJson () {
  return src('./package.json')
    .pipe(dest(`./${esmPath}`))
}

const build = series(
  ...buildReactHelpers,
  buildStyles,
  buildReactComponents,
  copyPackageJson,
  copyFonts
)

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

exports.default = build
exports.build = build
exports.clear = clearLibFolder
exports.clearLibFolder = clearLibFolder
exports.release = series(build, deploy)
exports.deploy = deploy
exports.renamePackage = renamePackage
