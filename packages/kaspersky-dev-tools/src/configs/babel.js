/**
 * babel function compiles configuration parameters that can be used in project-connected babel.config.js.
 * We assume, that project uses babel 7 and already moved from using .babelrc to babel.config.js
 * @param  {...any} args Babel provides api so we leave ...args argument in case we need to work with api
 * @returns { Object } babel config. Every key can be accessed using babel documentation.
 */
function babel (...args) {
  const envOptions = {
    useBuiltIns: 'usage',
    corejs: '3.2',
    modules: 'cjs',
    targets: {
      browsers: [
        'Safari >= 15',
        'chrome >= 100',
        'edge >= 100',
        'Firefox ESR'
      ]
    }
  }

  return {
    presets: [
      ['@babel/preset-env', envOptions]
    ],
    plugins: [
      ['@babel/plugin-transform-runtime', { regenerator: true }],
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  }
}

module.exports = {
  babel
}
