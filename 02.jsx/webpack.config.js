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
        index: './main.jsx',
        vender: ['react', 'react-dom', 'antd']
    },
    output: {
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
        }
            // {
            //     test: /\.css$/,
            //     loader: 'style!css'//从右往左执行:css解析,style嵌入到js中
            // }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//dev hot
        new ExtractTextPlugin('base.css'),
        new webpack.optimize.CommonsChunkPlugin('vender', 'vender.js')
    ]
}