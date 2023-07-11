module.exports = function (api) {
  api.cache(false)
  const babel = require('@kaspersky/dev-tools').configs.babel()
  return { ...babel }
}
