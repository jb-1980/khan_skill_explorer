var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './index.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: ''
  },

  resolve: {
    extensions: ['','.js','.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: [
          './modules',
          path.join(__dirname, 'node_modules/react-select/'),
          path.join(__dirname, 'node_modules/react-virtualized-select/')
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff",
        include: './modules'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
        include: './modules'
      }
    ]
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : []
}
