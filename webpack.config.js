const path = require('path')

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.prod.js',
  },
  resolve: {
    extensions: ['.js']
  },
  target: 'node'
}