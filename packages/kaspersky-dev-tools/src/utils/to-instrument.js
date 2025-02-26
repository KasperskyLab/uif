const babel = require('gulp-babel')

const babelConfig = require('../configs/babel').babel()
let cachedBabelConfig
const getBabelConfig = () => {
  if (cachedBabelConfig) {
    return cachedBabelConfig
  }

  const { IS_COVERAGE_BUILD } = process.env
  if (IS_COVERAGE_BUILD && String(IS_COVERAGE_BUILD).toLowerCase() === 'true') {
    babelConfig.plugins.unshift(['istanbul', {}])
  }

  cachedBabelConfig = babelConfig
  return cachedBabelConfig
}

const instrumentClient = () => {
  return getBabelConfig()
}

const instrumentServer = () => {
  const config = getBabelConfig()
  return babel(config)
}

module.exports = {
  instrumentClient,
  instrumentServer
}
