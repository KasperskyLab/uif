const self = this
let editor
const beautifyJs = require('js-beautify').js_beautify
const CodeMirror = require('codemirror')
const esprima = require('esprima')
const jsonlint = require('json-lint')
self.errors = []

CodeMirror.defineExtension('autoFormatRange', function (from, to) {
  const cm = this
  const text = cm.getRange(from, to)
  const out = beautifyJs(text, { indent_size: 2 })

  cm.operation(function () {
    cm.replaceRange(out, from, to)
  })
})

self.on('mount', function () {
  editor = CodeMirror.fromTextArea(self.refs.area, {
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    mode: {
      name: 'javascript',
      json: true
    }
  })

  editor.on('blur', autoFormatRange)
  editor.on('blur', parseCode)
  blurSubscriptions.forEach(function (cb) {
    editor.on('blur', cb)
  })

  editor.on('change', onCodeChange)

  function autoFormatRange () {
    const totalLines = editor.lineCount()
    editor.autoFormatRange({ line: 0, ch: 0 }, { line: totalLines })
  }

  editor.autoFormatRange({ line: 0, ch: 0 }, { line: 1 })
})
let timer
function onCodeChange () {
  if (!timer) {
    setChangeTimeout()
  } else {
    clearTimeout(timer)
    setChangeTimeout()
  }
}

function setChangeTimeout () {
  timer = window.setTimeout(function () {
    parseCode()
  }, 1000)
}

function publishBlurEvent () {
  self.trigger('blur')
}

self.getValue = function () {
  return editor.getValue()
}

self.setValue = function (val) {
  self.refs.area.value = val
  editor.getDoc().setValue(val)
  const totalLines = editor.lineCount()
  editor.autoFormatRange({ line: 0, ch: 0 }, { line: totalLines })
}

self.refresh = function () {
  if (editor) { editor.refresh() }
}
var blurSubscriptions = []
self.onBlur = function (cb) {
  if (!editor) {
    blurSubscriptions.push(cb)
  } else editor.on('blur', cb)
}

let parseCode
function parseJSCode () {
  let val = editor.getValue()
  if (codePatchFunction) val = codePatchFunction(val)

  try {
    self.errors = []
    self.parseResult = esprima.parse(val, { tolerant: true, loc: true })
    if (self.parseResult.errors.length) {
      self.parseResult.errors.forEach(function (error) {
        self.errors.push('Line ' + error.lineNumber + ': ' + error.description)
      })
    }
    publishBlurEvent()
    self.update()
  } catch (ex) {
    self.errors.push(ex.toString())
    self.update()
  }
}

function parseJSONCode () {
  const val = editor.getValue()

  self.errors = []
  const lint = jsonlint(val)
  if (lint.error) {
    self.errors.push('Line ' + lint.line + ', character: "' + lint.character + '": ' + lint.error)
  } else {
    self.parseResult = JSON.parse(val)
    publishBlurEvent()
  }
  self.update()
}

runtime.on('getCode', function (cb) {
  parseCode()
  cb(self.parseResult)
})

self.getCode = function (cb) {
  parseCode()
  return self.parseResult
}

self.getParseResult = function () {
  return self.parseResult
}

self.getRawCode = function (cb) {
  return editor.getValue()
}

self.setValidationType = function (vType) {
  if (vType === 'js') {
    parseCode = parseJSCode
  } else {
    parseCode = parseJSONCode
  }
}
let codePatchFunction
self.setCodePatchFunction = function (fnc) {
  codePatchFunction = fnc
}
