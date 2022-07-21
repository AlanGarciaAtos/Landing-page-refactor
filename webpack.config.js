// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    // vendor: './src/vendor.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     // title: 'Caching',
  //     template: './src/template.html',
  //   }),
  // ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/i,
  //       use: [
  //         'style-loader', //3. Inject styles into DOM
  //         'css-loader', //2. Turns css into commonjs
  //         'sass-loader', //1. Turns sass into css
  //       ],
  //     },
  //     {
  //       test: /\.html$/,
  //       use: ['html-loader'],
  //     },
  //   ],
  // },
};
