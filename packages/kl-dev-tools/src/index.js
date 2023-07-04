module.exports = {
  configs: {
    ...require('./configs/babel'),
    ...require('./configs/jest'),
    ...require('./configs/eslint')
  },
  babelCore: require('@babel/core'),
  utils: require('./utils')
}
