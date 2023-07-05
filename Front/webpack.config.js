'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/app/index.js',
    chat: './src/app/scripts/chat.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'Home.html',
      template: path.join(__dirname, './src/Home.html'),
    })
  ],
};