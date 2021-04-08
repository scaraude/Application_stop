/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const webpack = require("webpack");
const path = require("path");

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
      },{
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },{ test: /\.css$/,use: ['style-loader', 'css-loader']},
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    historyApiFallback: false,
    inline: true,
    open: true,
    hot: true,
    proxy: [
      {
        context: ['/auth', '/api', '/login'],
        target: 'http://localhost:8080',
      },
    ],
  },
  devtool: "eval-source-map",
};

module.exports = config;
