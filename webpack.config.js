/*
 * @authror : Leiyin.lin
 * @Date : 2020-10-05
 * @Project : my-app-r2
 * @CorpChn : 上海珺程网络科技有限公司
 * @CorpEng : JadeProgram.Shanghai,Ltd.Co
 * @CorpBu : R&D
 * @WebSite : http://shjson.top
 * @WeChat : llysonylin2012
 * @DescriptionMain : xxx,xxx
 * @Description : ...
 */


const path = require('path');
const os = require('os');
const webpack = require('webpack');
const argv = require('yargs-parser')(process.argv.slice(2));
const pro = argv.mode === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length
});

const basePlugin = [
  new HappyPack({
    id: 'js',
    threadPool: happyThreadPool,
    loaders: [
      'babel-loader'
    ],
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    chunks: [
      'vendor', 'index', 'utils'
    ],  //  引入需要的chunk
  }),
  new ExtractTextWebpackPlugin('css/style.[chunkhash].css'),
  new ExtractTextWebpackPlugin('css/reset.[chunkhash].css'),
  new webpack.DefinePlugin({
    'process.env': {
      'tags': '0.1.0'
    },
    'arg_a': 'foo',
    'arg_b': 'bar',
  }),
];

if (pro === 'development') {
  basePlugin.push(new webpack.HotModuleReplacementPlugin())
}

if (pro === 'production') {
  basePlugin.unshift(new CleanWebpackPlugin('dist'))
}

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].[hash].js',
    publicPath: pro
      ? './'
      : '/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js|jsx$/,
        use: 'happypack/loader?id=js',
        include: /src/,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,     // 解析scss
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:6]'
            }
          },
          'postcss-loader',
          'sass-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,     // 解析css
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:6]'
            }
          },
          'postcss-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: 'images/',   // 图片打包后存放的目录
            },
          },
        ],
      },
      {
        test: /\.(htm|html)$/,
        use: 'html-withimg-loader', // 打包页面img引用图片
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,  //  打包字体图片和svg图片
        use: 'file-loader',
      },
    ],
  },
  plugins: basePlugin,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    overlay: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utils/'),
    }
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  //  提取公共代码
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {   // 抽离第三方插件
          test: /node_modules/,   // 指定是node_modules下的第三方包
          chunks: 'initial',
          name: 'vendor',  // 打包后的文件名，任意命名
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10,
        },
        utils: {
          // 抽离自己写的公共代码，utils这个名字可以随意起
          chunks: 'initial',
          name: 'app',  //  任意命名
          minSize: 0,    // 只要超出0字节就生成一个新包
        },
      },
    },
  },
  devtool: pro
    ? ''
    : 'inline-source-map',
};
