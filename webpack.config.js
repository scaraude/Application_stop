const webpack = require("webpack");
const path = require("path");
const NodemonPlugin = require('nodemon-webpack-plugin');

let config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    historyApiFallback: true,
    inline: true,
    open: true,
    hot: true,
  },
  // A décommenter quand le back et le front fonctionneront ensemble
  // plugins: [
  //   new NodemonPlugin(),
  // ],
  devtool: "eval-source-map",
};

module.exports = config;
