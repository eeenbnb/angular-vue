const path = require('path')

module.exports = {
  entry: './vue-components.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'vue-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
}
