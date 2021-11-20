const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./client-side/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./bundle.js",
    sourceMapFilename: '[name].[hash:8].map',
  },
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: true,
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
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        }
      },
      { 
        test: /\.css$/,use: ['style-loader', 'css-loader'] 
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@utils": path.resolve(__dirname, 'packages/utils'),
    },
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
