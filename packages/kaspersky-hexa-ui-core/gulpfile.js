/* eslint-disable */
const fs = require('fs')

const { getTypographyCSSVarsString } = require('./src/typography/typography-build')

const WARNING = '/*! This file was created automatically. */\n'
const WARNING_TYPOGRAPHY = '/*! Use updateTypography gulp task if you need to update typography. */\n'

const handleError = (err) => { if (err) console.error(err) }

function writeCSSVarsToFile ({ fileName, content, isTSFile = false }) {
  const body = isTSFile ? `export const cssVarString = \`${content}\`\n` : content

  fs.writeFile(fileName, `${WARNING}${WARNING_TYPOGRAPHY}\n${body}`, {}, handleError)
}

function updateTypography (cb) {
  try {
    const content = `${getTypographyCSSVarsString()}`

    writeCSSVarsToFile({ fileName: './src/typography/tokens/tokens.css', content })
    writeCSSVarsToFile({ fileName: './src/typography/tokens/tokens.ts', content, isTSFile: true })

    console.log('\x1b[32;1m', '\nTypography build completed\n')
  } catch (error) {
    console.log('\x1b[31;1m', '\nTypography build failed\n', error)
  }
  cb()
}

exports.updateTypography = updateTypography
