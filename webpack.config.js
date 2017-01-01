var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');         //创建html
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); //打开浏览器

module.exports = {
    // 配置服务器
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: "./dist",
        port: 8080,
    },

    entry: {
        main: './src/main.tsx',
        vender: ['react', 'react-dom']//第三方库
    },

    output: {
        path: 'dist',
        publicPath: 'dist',
        filename: 'js/bundle.js'
    },

    devtool: "source-map",// 启用调试

    resolve: {
        extensions: ["", ".js", ".jsx", ".tsx"]// 添加需要解析的文件格式
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },//ts-loader
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }//ts-map
        ]
    },

    plugins: [
        // new webpack.optimize.UglifyJsPlugin({//release模式使用
        //     compress: {
        //         warnings: false//去除警告加速
        //     }
        // }),
        new webpack.HotModuleReplacementPlugin(),//hot
        new webpack.optimize.CommonsChunkPlugin('vender', 'js/vender.js'),
        // new HtmlwebpackPlugin({
        //     title: 'hello',
        //     filename: 'index.html'
        // }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080/webpack-dev-server/index.html'
        })
    ]
}