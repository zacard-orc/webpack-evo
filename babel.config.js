module.exports = {
  'presets': [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  'plugins': [
    [
      '@babel/plugin-proposal-decorators',
      {
        'legacy': true
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
