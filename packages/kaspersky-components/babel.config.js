const buildPresets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      targets: {
        browsers: [
          '>1%',
          'not ie 11',
          'last 1 chrome version',
          'last 1 ff version',
          'last 1 safari version'
        ]
      },
      modules: 'cjs',
      corejs: 3
    }
  ],
  [
    '@babel/preset-react',
    {
      runtime: 'classic'
    }
  ],
  '@babel/preset-typescript'
]

const testsPresets = [
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-typescript'
]

const buildPlugins = [
  'inline-react-svg',
  'styled-components',
  ['@babel/plugin-proposal-optional-chaining'],
  ['@babel/plugin-proposal-nullish-coalescing-operator']
]

const testPlugins = [
  '@babel/plugin-transform-runtime'
]

module.exports = function (api) {
  const isTest = api.env('test')
  api.cache(false)

  const config = {
    presets: buildPresets,
    plugins: buildPlugins
  }

  if (isTest) {
    config.presets = testsPresets
    config.plugins = [
      ...buildPlugins,
      ...testPlugins
    ]
  }

  return config
}
