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
      modules: false,
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
  'styled-components',
  ['@babel/plugin-transform-optional-chaining'],
  ['@babel/plugin-transform-nullish-coalescing-operator'],
  ['@babel/plugin-transform-logical-assignment-operators']
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
