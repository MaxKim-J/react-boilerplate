/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env) => ({
  mode: 'development',
  entry: './src/index.ts',
  output: {
    publicPath: '/',
    filename: 'assets/js/bundle.[name].[hash].js',
    path: path.resolve(__dirname, '../../', 'dist'),
  },
  devtool: 'eval-cheap-source-map',
  optimization: {
    minimize: true,
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
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(tsx?)|(js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                modules: false,
              }],
              '@babel/preset-react',
              ['@babel/preset-typescript', {
                isTSX: true,
                allExtensions: true,
              }],
            ],
            plugins: [
              'babel-plugin-styled-components',
              '@babel/proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
              [
                'module-resolver',
                {
                  alias: {
                    '@': './src',
                  },
                },
              ],
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
          from: 'public',
          to: './',
          toType: 'dir',
          globOptions: {
            ignore: ['./index.html'],
          },
        },
      ],
    }),
    new DotenvPlugin({
      path: path.resolve(__dirname, `../env/.env.${env}`),
      allowEmptyValues: true,
    }),
    new ESLintPlugin({
      extensions: ['ts', 'js', 'jsx', 'tsx'],
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../../', 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    overlay: true,
    clientLogLevel: 'error',
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
});
