const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /** 번들링의 시작지점 */
  entry: './src/app.js',

  /** 번들링결과물 저장지점 */
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  /** 파일 확장자 별로 어떻게 처리할지  */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: '/index.html',
      filename: 'index.html',
    }),
  ],

  // asset bundle.js 6.72 KiB [emitted] (name: main)

  // runtime modules 670 bytes 3 modules

  // cacheable modules 802 bytes

  // mode: 'production',

  // asset bundle.js 217 bytes [emitted] [minimized] (name: main)

  // orphan modules 285 bytes [orphan] 4 modules

  // ./src/app.js + 4 modules 802 bytes [built] [code generated]
};
