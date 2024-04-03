require('dotenv').config()
const path = require('path')
const { src, dest, series } = require('gulp')
const babel = require('gulp-babel')
const del = require('del')
const fs = require('fs')
const less = require('less')
const updateFigmaJson = require('./updateFigmaJson')

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
    '!.storybook/StoryComponents.tsx',
    '!src/**/_story/*.{ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/**/__tests__/**/*'
  ])
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

// update colors
const paletteParser = (obj) => Object.entries(obj).reduce((acc, [key, vObj]) => {
  if (vObj.type === 'color') {
    acc[key] = vObj.value
    return acc
  }
  return { ...acc, ...paletteParser(vObj) }
}, {})

const buildHelpers = {
  isObject: (item) => {
    return (item && typeof item === 'object' && !Array.isArray(item))
  },
  mergeDeep: (target, ...sources) => {
    if (!sources.length) return target
    const source = sources.shift()

    if (buildHelpers.isObject(target) && buildHelpers.isObject(source)) {
      for (const key in source) {
        if (buildHelpers.isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} })
          buildHelpers.mergeDeep(target[key], source[key])
        } else {
          Object.assign(target, { [key]: source[key] })
        }
      }
    }

    return buildHelpers.mergeDeep(target, ...sources)
  }
}

const otherParser = (obj, palette, path = '') => Object.entries(obj).reduce((acc, [key, vObj]) => {
  let newPath = path ? path + '_' + key : key
  if (vObj.type === 'color') {
    const theme = path.match(/(__dark)|(__light)/g)
    const link = vObj && vObj.description && vObj.description.split('/').pop().toLowerCase()

    if (theme) {
      const themePath = theme[0].replace('__', '')

      newPath = newPath.replace(/(__dark)|(__light)/g, '')

      const [, strippedKey] = newPath.match(/.+(_.+)$/)

      newPath = newPath.replace(/(_.+)$/g, '')

      if (!acc[newPath]) {
        acc[newPath] = {}
      }

      const strippedPath = strippedKey.replace('_', '')

      if (!acc[newPath][strippedPath]) {
        acc[newPath][strippedPath] = {}
      }

      acc[newPath][strippedPath][themePath] = (link && palette[link]) ? palette[link] : vObj.value
    } else {
      acc[newPath] = (link && palette[link]) ? palette[link] : vObj.value
    }

    return acc
  }

  return buildHelpers.mergeDeep(acc, otherParser(vObj, palette, newPath))
}, {})

const getGroupedThemes = (data) => {
  const { staticpalette } = data
  const palette = paletteParser(staticpalette)
  return Object.entries(data).filter(([key]) => {
    return key.match(/(__dark)|(__light)/g)
  }).map(([key, value]) => {
    return [
      key, Object.fromEntries(Object.entries(value).map(([color, colorValue]) => {
        const paletteValueArr = colorValue.description?.split('/')
        const paletteValue = Array.isArray(paletteValueArr)
          ? palette[`${paletteValueArr[paletteValueArr?.length - 1].toLowerCase()}`]
          : colorValue.value
        return [
          color, paletteValue
        ]
      }))
    ]
  }).reduce((groups, [key, value]) => {
    const [section, themeName] = key.split('__')
    const result = {
      ...groups
    }
    return {
      ...groups,
      [themeName]: {
        ...result[themeName],
        [section]: value
      }
    }
  }, {})
}

const getColorList = ({ staticpalette: rawPalette, ...rest }) => {
  const palette = paletteParser(rawPalette)
  const other = otherParser(rest, palette)
  return { palette, other }
}

const getShortcuts = data => {
  const { staticpalette } = data
  const palette = paletteParser(staticpalette)
  return Object.fromEntries(Object.entries(data).filter(([key]) => {
    return !['staticpalette', 'fixedneutralcolor'].includes(key)
  }).map(([key, value]) => {
    return [
      key, Object.fromEntries(Object.entries(value).map(([color, colorValue]) => {
        const paletteValueArr = colorValue.description?.split('/')
        const paletteValue = Array.isArray(paletteValueArr)
          ? palette[`${paletteValueArr[paletteValueArr?.length - 1].toLowerCase()}`]
          : colorValue.value
        return [
          color, paletteValue
        ]
      }))
    ]
  }))
}

function updateColors (cb) {
  const data = JSON.parse(fs.readFileSync('./design-system/tokens/figma-colors-tokens.json'))
  const { palette, other } = getColorList(data)
  const groups = getGroupedThemes(data)
  fs.writeFile('./design-system/tokens/palette.ts',
    '//! This file create automatically.\n' +
    '//! Use updateColors scripts if you need update colors.\n' +
    '/* eslint-disable */\n' +
    '\n' +
    `const palette = ${JSON.stringify(palette, null, '  ')}\n` +
    '\n' +
    'export const colors = palette\n' +
    'export type colorType = keyof typeof colors;\n' +
    '\n' +
    `export const themeColors = ${JSON.stringify(other, null, '  ')}\n` +
    'export type themeColorsType = keyof typeof themeColors;\n' +
    `export const shortcuts = ${JSON.stringify(groups, null, '  ')}\n` +
    '\n' +
    'export type allColorType = colorType | themeColorsType;\n' +
    'export const allColors = { ...palette, ...themeColors }\n' +
    'export type allColorsType = typeof allColors;\n' +
    'export type extendedColorType = keyof typeof allColors;\n',
    {}, cb)
}

function deploy () {
  console.log('Deploying to', process.env.deployPath)
  if (!process.env.deployPath) return

  return src([
    './esm/**/*'
  ]).pipe(dest(process.env.deployPath))
}

exports.default = build
exports.build = build
exports.clear = clearLibFolder
exports.updateColors = updateColors
exports.updateFigmaJson = updateFigmaJson
exports.clearLibFolder = clearLibFolder
exports.release = series(build, deploy)
exports.deploy = deploy
