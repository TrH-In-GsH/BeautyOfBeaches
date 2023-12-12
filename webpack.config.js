const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'BigProject/public'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'], // Thêm preset-react vào đây
          },
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'BigProject/public'),
    port: 8080,
    historyApiFallback: true,
  },
};
