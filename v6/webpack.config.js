var webpack = require("webpack");

module.exports = {
  entry: "./component1.js",
  output: {
    path: __dirname, //__dirname is a node.js global string that has the path to the root
    filename: "compiled/bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.css$/, loader: "style!css"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
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