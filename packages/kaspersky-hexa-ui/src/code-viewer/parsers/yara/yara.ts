/** Copied from https://github.com/VirusTotal/yara/blob/master/extra/codemirror/yara.js */

/* eslint-disable */
// @ts-nocheck

import { StreamParser } from '@codemirror/language'

function words (str) {
  const obj = {}, words = str.split(' ')
  for (let i = 0; i < words.length; ++i) obj[words[i]] = true
  return obj
}

const keywords = words('all and any ascii at base64 base64wide condition contains endswith entrypoint filesize for ' +
                         'fullword global icontains iendswith import in include int16 int32 int8 istartswith matches meta ' +
                         'nocase not of or private rule startswith strings them uint16 uint32 ' +
                         'uint8 wide xor')

var atoms = {'true': true, 'false': true}

const isOperatorChar = /[+\-*&%=<>!?|\/]/

function tokenBase (stream, state) {
  const ch = stream.next()
  if (ch == '#' && state.startOfLine) {
    stream.skipToEnd()
    return 'meta'
  }
  if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
    return null
  }
  if (/\d/.test(ch)) {
    stream.eatWhile(/[\w\.]/)
    return 'number'
  }
  if (ch == '/') {
    if (stream.eat('/')) {
      stream.skipToEnd()
      return 'comment'
    }
    if (stream.eat('*')) {
      state.tokenize = tokenComment
      return tokenComment(stream, state)
    }
  }
  if (ch == '"' || ch == '/') {
    state.tokenize = tokenString(ch)
    return state.tokenize(stream, state)
  }
  if (isOperatorChar.test(ch)) {
    stream.eatWhile(isOperatorChar)
    return 'operator'
  }
  stream.eatWhile(/[\w\$_]/)
  const cur = stream.current()
  if (keywords.propertyIsEnumerable(cur)) return 'keyword'
  if (atoms.propertyIsEnumerable(cur)) return 'atom'
  return 'word'
}

function tokenString (quote) {
  return function (stream, state) {
    let escaped = false, next, end = false
    while ((next = stream.next()) != null) {
      if (next == quote && !escaped) {end = true; break}
      escaped = !escaped && next == '\\'
    }
    if (end || !escaped) state.tokenize = null
    return 'string'
  }
}

function tokenComment (stream, state) {
  let maybeEnd = false, ch
  while (ch = stream.next()) {
    if (ch == '/' && maybeEnd) {
      state.tokenize = null
      break
    }
    maybeEnd = (ch == '*')
  }
  return 'comment'
}

export const yara: StreamParser<unknown> = {
  name: 'yara',
  startState: function (basecolumn) {
    return {tokenize: null}
  },

  token: function (stream, state) {
    if (stream.eatSpace()) return null
    const style = (state.tokenize || tokenBase)(stream, state)
    return style
  },

  electricChars: '{}'
}
