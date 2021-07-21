const { join } = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: join(__dirname, 'build'),
    filename: 'worker.js',
  },
  devtool: false,
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      internal: join(__dirname, 'src/internal'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          // transpileOnly is useful to skip typescript checks occasionally:
          // transpileOnly: true,
        },
      },
    ],
  },
}
