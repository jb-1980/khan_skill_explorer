var fs = require('fs')
var path = require('path')

module.exports = {
  entry: path.resolve(__dirname,'server.js'),

  output: {
    filename: 'server.bundle.js'
  },

  target: 'node',

  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function(ext, mod){
    ext[mod] = 'commonjs '+mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
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
  }
}
