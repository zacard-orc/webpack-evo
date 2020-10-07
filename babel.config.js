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
  ]
};
