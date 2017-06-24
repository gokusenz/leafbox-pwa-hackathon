var path = require('path');
require('dotenv').config()
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const task = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/vendor',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(task),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css/,
      loaders: ["style-loader", "css-loader"]
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
    }]
  }
};
