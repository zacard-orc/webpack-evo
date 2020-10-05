module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default'
    }),
    // require('postcss-import'),
    require('postcss-preset-env')({
      autoprefixer: {
        grid: true
      },
      stage: 3,
      browsers: 'last 2 versions'
    }),
  ],
  minimize: true
};
