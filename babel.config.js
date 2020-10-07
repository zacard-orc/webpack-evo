module.exports = {
  'presets': [
    '@babel/preset-env',
    '@babel/react',
  ],
  'plugins': [
    [
      '@babel/plugin-proposal-decorators',
      {
        'legacy': true
      }
    ],
    [
      'import',
      {
        'libraryName': 'antd',
        'libraryDirectory': 'es',
        'style': 'css ',
      }
    ],
    [
      '@babel/plugin-proposal-optional-chaining'
    ],
    [
      '@babel/plugin-proposal-class-properties', {
        'loose': true
      }
    ],
    [
      '@babel/plugin-proposal-nullish-coalescing-operator'
    ],
    [
      '@babel/plugin-transform-runtime', {
        'absoluteRuntime': false,
        'corejs': false,
        'helpers': true,
        'regenerator': true,
        'useESModules': false
      }
    ]
  ]
};
