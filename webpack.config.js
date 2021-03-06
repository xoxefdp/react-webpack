const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlBundle = new HtmlWebpackPlugin({
  title: 'React and Webpack4',
  template: './src/index.html',
  filename: 'index.html',
  favicon: './src/assets/images/favicon.ico',
  inject: 'body'
});

module.exports = {
  devtool: 'source-map', // eval, 
  entry: ['@babel/polyfill','./src/index.js'],
  watchOptions: {
    ignored: /node_modules/
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.html$/,          loader: 'html-loader',  exclude: /node_modules/ },
      { test:[/\.js$/, /\.jsx$/], loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/,           loader: 'babel-loader', exclude: /node_modules/ },
      { test:[/\.scss$/, /\.css$/],
        use: [
          { loader: 'style-loader', options: {} },  // creates style nodes from JS strings
          { loader: 'css-loader',   options: {} },  // translates CSS into CommonJS
          { loader: 'sass-loader',  options: {} }   // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/
      },
      { test: /\.(ttf|eot|woff2|woff)$/,
        use: [
          { loader: 'file-loader', options: { name: './assets/fonts/[name].[ext]' } }
        ],
        exclude: /node_modules/
      },
      { test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        use: [
          { loader: 'file-loader', options: { name: './assets/images/[name].[ext]' } }
        ],
        exclude: /node_modules/
      }
    ],
  },
  plugins: [HtmlBundle]
};
