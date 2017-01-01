var webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/main.tsx',
        vender: ['react', 'react-dom']//第三方库
    },

    output: {
        path: 'dist',
        publicPath: 'dist',
        filename: 'js/bundle.js'
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
        new webpack.optimize.UglifyJsPlugin({//release模式使用
            compress: {
                warnings: false//去除警告加速
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vender', 'js/vender.js')
    ]
}