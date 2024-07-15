const path = require('path');

module.exports = {
  /** 번들링의 시작지점 */
  entry: './src/app.js',

  /** 번들링결과물 저장지점 */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
};
