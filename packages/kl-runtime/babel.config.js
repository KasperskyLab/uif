module.exports = function (api) {
  api.cache(false)
  const babel = require('@kl/dev-tools').configs.babel()
  return { ...babel }
}
