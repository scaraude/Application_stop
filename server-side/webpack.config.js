const path = require( 'path' );

module.exports = {

  // bundling mode
  mode: 'production',

  // entry files
  entry: './src/server.ts',

  // output bundles (location)
  output: {
    path: path.resolve( __dirname, './server-side/dist' ),
    filename: 'main.js',
  },

  // file resolutions
  resolve: {
    extensions: [ '.ts', '.js' ],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  
  devtool: 'source-map',
};