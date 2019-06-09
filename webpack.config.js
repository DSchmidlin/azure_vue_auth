const path = reuire('path');

module.exports = {
  modules: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
          ]
      }
    ]
  }
}