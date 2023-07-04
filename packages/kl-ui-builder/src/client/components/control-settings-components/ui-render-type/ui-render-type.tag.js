const self = this

self.getValue = function () {
  const res = {}
  res[opts.fieldName] = self.checkbox.checked
  return res
}
