module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*'],
      replace: true,
      mediaQuery: true,
      exclude: /node_modules/i
    }
  }
}
