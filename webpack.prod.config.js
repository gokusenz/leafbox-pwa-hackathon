const path = require('path')
require('dotenv').config()
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack-plugin')

const task = 'production'
const lineUrl = process.env.LINE_URL || ''
const lineToken = process.env.LINE_TOKEN || ''

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: 'public/dist/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              babelrc: false,
              presets: ['es2015', 'stage-0', 'react'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
        exclude: /(node_modules)/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
        exclude: /(node_modules)/,
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|svg|otf|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
            },
          },
        ],
        exclude: /(node_modules)/,
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(task),
        LINE_URL: JSON.stringify(lineUrl),
        LINE_TOKEN: JSON.stringify(lineToken),
        apiKey: JSON.stringify(process.env.apiKey),
        authDomain: JSON.stringify(process.env.authDomain),
        databaseURL: JSON.stringify(process.env.databaseURL),
        storageBucket: JSON.stringify(process.env.storageBucket),
        messagingSenderId: JSON.stringify(process.env.messagingSenderId),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: { except: ['$super', '$', 'exports', 'require', 'window', 'global', 'self', '__webpack_require__'] },
    }),
    new PurifyCSSPlugin({
      basePath: process.cwd(),
      purifyOptions: { minify: true },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks (module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new PurifyCSSPlugin({
      basePath: process.cwd(),
      purifyOptions: { minify: true },
    }),
  ],
}
