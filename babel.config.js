const presets = [
  [
    '@babel/env',
    {
      useBuiltIns: 'usage',
      corejs: '3.0.0',
      targets: {
        esmodules: true,
        ie: '11'
      }
    }
  ]
]

const plugins = [
  [
    'module-resolver',
    {
      alias: {
        '@equal': './src/equal/equal.js',
        '@utils': './src/utils/utils.js'
      }
    }
  ]
]

const env = {
  production: {
    presets: ['minify'],
    ignore: [
      'src/**/*.spec.js',
      '**/*.spec.js',
      '**.spec.js'
    ]
  }
}

module.exports = { presets, plugins, env }
