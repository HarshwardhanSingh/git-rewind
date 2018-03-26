const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ]
      },
      {
        test: /\.scss?$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ],
  mode: 'development',
}