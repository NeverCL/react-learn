var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//抽取css文件
var HtmlwebpackPlugin = require('html-webpack-plugin');         //创建html
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); //打开浏览器

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: "./",
        port: 8080,
    },
    entry: {
        index: './main.jsx',
        vender: ['react', 'react-dom']
    },
    output: {
        path: 'dist',
        filename: 'js/bundle.js',
        chunkFilename: '[name].[chunkhash:5].chunk.js'//未在entry中声明,需要打包的文件
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".tsx"]// 添加需要解析的文件格式
    },
    devtool: "source-map",// 启用调试
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192&name=img/[name].[ext]'
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('css!less')
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//dev hot
        new HtmlwebpackPlugin({
            title: 'hello',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('base.css'),
        new webpack.optimize.CommonsChunkPlugin('vender', 'js/vender.js'),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080/webpack-dev-server/index.html'
        })
    ]
}