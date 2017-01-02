var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');         //创建html

module.exports = {
    entry: {
        main: './src/main',
        vender: ['react', 'react-dom']//第三方库
    },

    output: {
        path: 'dist',
        publicPath: 'dist',
        filename: 'js/bundle.min.js'
    },

    resolve: {
        extensions: ["", ".js", ".jsx", ".tsx"]// 添加需要解析的文件格式
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }//ts-loader
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vender', 'js/vender.min.js'),//打包框架
        new HtmlwebpackPlugin({//新建html
            title: 'hello',
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({//去除控制台警告
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({//release模式使用
            compress: {
                warnings: false//去除警告加速
            }
        })
    ]
}