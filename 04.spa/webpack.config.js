var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//抽取css文件

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
        index: './main',
        vender: ['react', 'react-dom', 'antd']
    },
    output: {
        path: 'dist',
        filename: 'bundle.js'
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
        new ExtractTextPlugin('base.css'),
        new webpack.optimize.CommonsChunkPlugin('vender', 'vender.js')
    ]
}