const
  path = require('path'),
  webpack = require('webpack'),

  //this parses the command line arguments
  argv = require('minimist')(process.argv.slice(2)),
  //if the --release argument is present then some things we will change at build time, look for DEBUG through the code
  DEBUG = !argv.release;

module.exports = {
  entry: './src/components/component1/component1.js',
  output: {
    path: path.join(__dirname, 'build') , //__dirname is a node.js global string that has the path to the root
    filename: 'compiled/bundle.js',
    publicPath: 'build/',
    sourcePrefix: '  '
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=8192'
      }
    ]
  },
  plugins: DEBUG ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false,
      comments: false
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};