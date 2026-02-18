module.exports = {
  configs: {
    ...require('./configs/babel'),
    ...require('./configs/jest')
  },
  babelCore: require('@babel/core'),
  utils: require('./utils')
}
