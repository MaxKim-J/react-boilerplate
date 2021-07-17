/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');

module.exports = () => ({
  mode: 'production',
  entry: './src/index.ts',
  output: {
    publicPath: '/',
    filename: 'bundle.[name].[chunkhash].js',
    path: path.join(__dirname, '../../', 'dist'),
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              ['@babel/preset-typescript', {
                isTSX: true,
                allExtensions: true,
              }],
            ],
            plugins: [
              '@babel/proposal-class-properties',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
      },
      hash: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public/assets',
          to: './assets',
          toType: 'dir',
          noErrorOnMissing: true,
        },
      ],
    }),
    // new DotenvPlugin({
    //   path: path.join(__dirname, "/env/dev.env"),
    //   safe: true,
    //   allowEmptyValues: true,
    // })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
});
