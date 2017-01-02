var webpack = require('webpack');

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
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//hot
        new webpack.optimize.CommonsChunkPlugin('vender', 'vender.js')
    ]
}