const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: path.resolve(__dirname, './src/index'),
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(bmp|png|jpg|gif|ttf|svg|woff|woff2)$/,
        type: 'asset',
      },
      {
        test: /\.tsx?$/,
        include: path.join(__dirname, 'src'),
        use: [
          isDevelopment && {
            loader: 'babel-loader',
            options: { plugins: ['react-refresh/babel'] },
          },
          {
            loader: 'ts-loader',
            options: { transpileOnly: true },
          },
        ].filter(Boolean),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:8]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // 将 var.scss 引入到每个 scss 文件，方便每个文件直接使用变量
              resources: [path.resolve(__dirname, './src/styles/var.scss')],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'Untitled',
      template: './index.html',
      env: process.env.NODE_ENV,
    }),
  ],
}
