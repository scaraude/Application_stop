/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
	context: __dirname,
	entry: "./src/server.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
	devServer: {
		static: "./dist",
	},
	plugins: [
		new NodemonPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				exclude: ["/node_modules/*"],
				options: { configFile: "tsconfig.json" }
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
		],
	},
	target: "node",
	externalsPresets: { node: true },
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
