/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env) => ({
  mode: 'production',
  entry: './src/index.ts',
  output: {
    publicPath: '/',
    filename: 'bundle.[name].[chunkhash].js',
    path: path.join(__dirname, '../../', 'dist'),
  },
  devtool: 'source-map',
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
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: '../analysis/bundle-analysis.html',
      generateStatsFile: true,
      statsFilename: '../analysis/bundle-stats.json',
    }),
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
    new DotenvPlugin({
      path: path.resolve(__dirname, `../env/.env.${env}`),
      allowEmptyValues: true,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
});
