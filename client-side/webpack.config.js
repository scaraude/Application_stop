const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./client-side/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./bundle.js",
  },
  devServer: {
    open: true,
    host: "localhost",
    hot: true,
    proxy: [
      {
        context: ['/auth', '/api', '/login', '/signup'],
        target: 'http://localhost:8080',
      }
    ],
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      { 
        test: /\.css$/,use: ['style-loader', 'css-loader'] 
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
