const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
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
      }),
      new WebpackPwaManifestPlugin({
        name: 'Miriio - Un lugar para compartir tus ideas',
        short_name: 'Miriio',
        description: 'Una aplicacion donde compartes lo que quieras.',
        background_color: '#fff',
        theme_color: '#f72',
        icons: [
          {
            src: path.join(__dirname, '/public/Icon.png'), // icono a resolver
            sizes: [96, 128, 144, 192, 256, 384, 512], // tamaños en los que este puede estar (son tamaños que estan regularmente en moviles)
            purpose: 'maskable'
          },
          {
            src: path.join(__dirname, '/public/Icon.png'), // icono a resolver
            sizes: [144], // tamaños en los que este puede estar (son tamaños que estan regularmente en moviles)
            purpose: 'any'
          }
        ]
      }),
      new WorkboxWebpackPlugin.GenerateSW({
        maximumFileSizeToCacheInBytes: 5000000,
        runtimeCaching: [
          {
            urlPattern: new RegExp(
              'https://(res.cloudinary.com|images.unsplash.com)'
            ),
            handler: 'CacheFirst',
            options: {
              cacheName: 'images'
            }
          },
          {
            urlPattern: new RegExp('https://miriio.vercel.app/'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api'
            }
          }
        ]
      })
    ],
    devServer: {
      port: 3000,
      historyApiFallback: true,
      compress: true
    }
  }
}
