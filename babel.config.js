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
        '@equal': './src/equal',
        '@utils': './src/utils'
      }
    }
  ]
]

module.exports = { presets, plugins }
