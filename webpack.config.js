module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/standalone.js',
  output: {
    path: __dirname,
    filename: 'consent-manager.js',
    library: 'consentManager'
  },
  resolve: {
    alias: {
      react: 'inferno-compat',
      'react-dom': 'inferno-compat',
      lodash: 'lodash-es'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}