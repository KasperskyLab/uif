const path = require('path')
const fs = require('fs')
const riot = require('riot-compiler')
const _ = require('lodash')
const babel = require('@babel/core')

global.riot_loader_cache = {}

function getBabelConfig () {
  const babelConfig = require('./babel.config')
  if (!babelConfig) throw Error('No @kl/dev-tools package found or no config resolved')
  return { ...babelConfig }
}

function loader (contents) {
  this.cacheable && this.cacheable()
  const callback = this.async()
  const rawFilePath = path.normalize(this.resourcePath)
  const filename = _.last(this._module.rawRequest.split('/'))
  if (rawFilePath.match(/\.html$/)) {
    const jsFilePath = rawFilePath.replace(/\.html$/, '.js')
    if (global.riot_loader_cache[filename]) {
      fs.readFile(jsFilePath, 'utf-8', function (err, jsContent) {
        if (err) return
        fs.writeFile(jsFilePath, jsContent, err => {
          console.error(err)
        })
      })
    }
    global.riot_loader_cache[filename] = true
    callback(null, ' ')
  } else {
    const htmlFilePath = rawFilePath.replace(/\.js$/, '.html')
    fs.readFile(htmlFilePath, 'utf-8', function (err, htmlContent) {
      if (err || !htmlContent) throw new Error('Could not load tag template in ' + htmlFilePath)
      const tagname = htmlContent.match(/^<[a-z-]+/)
      console.time('riot-tag-loader: ' + tagname + '> compilation took')
      const _content = htmlContent.replace(/<script>[\s\S]*?<\/script>/, '<script>' + contents + '</script>')
      const tag = riot.compile(_content, { type: 'none' })
      const transpiledTag = babel.transform(tag, getBabelConfig())
      callback(null, transpiledTag.code)
      console.timeEnd('riot-tag-loader: ' + tagname + '> compilation took')
    })
  }
}
module.exports = loader
