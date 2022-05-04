const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = (env) => {
  return {
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /.html$/,
          use: 'html-loader'
        },
        {
          test: /.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(jpg|png)$/,
          use: 'file-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/public/index.html'),
        favicon: './public/Icon.png'
      }),
      new Dotenv({
        path: `./.env${env.file ? `.${env.file}` : ''}`
      })
    ],
    devServer: {
      port: 3000,
      historyApiFallback: true,
      compress: true
    }
  }
}
