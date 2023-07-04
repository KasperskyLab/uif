/**
 * babel function compiles configuration parameters that can be used in project-connected babel.config.js.
 * We assume, that project uses babel 7 and already moved from using .babelrc to babel.config.js
 * @param  {...any} args Babel provides api so we leave ...args argument in case we need to work with api
 * @returns { Object } babel config. Every key can be accessed using babel documentation.
 */
function babel (...args) {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: false,
          useBuiltIns: 'usage',
          corejs: 3,
          modules: 'cjs',
          targets: {
            browsers: [
              'chrome >= 49',
              'ie >= 11',
              'firefox >= 52',
              'safari >= 10'
            ]
          }
        }
      ]
    ],
    plugins: [
      ['@babel/plugin-transform-runtime', { regenerator: true }],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-transform-flow-strip-types'],
      ['@babel/plugin-transform-modules-commonjs'],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-optional-chaining'],
      ['@babel/plugin-proposal-nullish-coalescing-operator']
    ]
  }
}

module.exports = {
  babel
}
