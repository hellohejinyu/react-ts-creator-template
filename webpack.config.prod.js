const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

const prodConfig = {
  mode: 'production',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
  },
  output: {
    filename: '[name]-[chunkhash].js',
  },
  plugins: [new CleanWebpackPlugin()],
}

const config = merge(baseConfig, prodConfig)

module.exports = config
