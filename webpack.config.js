const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /vue-preview.src.*?js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'autoprefixer-loader']  // 执行顺序从右到左
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
      },
      {    
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|svg)$/,
        // use: ['url-loader']
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240
          }
        }]
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  
  devServer: {
         contentBase: './dist'
       },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'index.html', // 自动生成html的模板文件
      filename: 'index.html'  // 设置生成的html的文件名
    })
  ]
};
