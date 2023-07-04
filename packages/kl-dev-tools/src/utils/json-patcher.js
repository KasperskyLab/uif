const ENV_SECTION_PREFIX = 'env'
let envSectionName

module.exports = ({ file, buildTarget = 'local' }) => {
  envSectionName = `${ENV_SECTION_PREFIX}-${buildTarget}`

  const obj = Buffer.isBuffer(file) ? file.toString() : JSON.stringify(file)
  const patchedFile = transformRecursive(JSON.parse(obj))

  return patchedFile
}

function transformRecursive (property) {
  if (!property || (property.constructor !== Object)) {
    return property
  }

  return Object
    .entries(property)
    .reduce((acc, [key, value]) => ({
      ...acc,
      ...key === envSectionName && transformRecursive(value),
      ...key.indexOf(ENV_SECTION_PREFIX) && { [key]: transformRecursive(value) },
      ...Array.isArray(value) && { [key]: value.map(prop => transformRecursive(prop)) }
    }), {})
}
