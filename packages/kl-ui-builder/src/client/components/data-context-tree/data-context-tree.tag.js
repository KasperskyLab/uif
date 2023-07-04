const self = this

JSON.unflatten = function (data) {
  'use strict'
  if (Object(data) !== data || Array.isArray(data)) { return data }
  const result = {}; let cur; let prop; let idx; let last; let temp
  for (const p in data) {
    cur = result
    prop = ''
    last = 0
    do {
      idx = p.indexOf('.', last)
      temp = p.substring(last, idx !== -1 ? idx : undefined)
      cur = cur[prop] || (cur[prop] = (!isNaN(parseInt(temp)) ? [] : {}))
      prop = temp
      last = idx + 1
    } while (idx >= 0)
    cur[prop] = data[p]
  }
  return result['']
}
JSON.flatten = function (data) {
  const result = {}
  function recurse (cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur
    } else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++) { recurse(cur[i], prop ? prop + '.' + i : '' + i) }
      if (l === 0) { result[prop] = [] }
    } else {
      let isEmpty = true
      for (const p in cur) {
        isEmpty = false
        recurse(cur[p], prop ? prop + '.' + p : p)
      }
      if (isEmpty) { result[prop] = {} }
    }
  }
  recurse(data, '')
  return result
}
