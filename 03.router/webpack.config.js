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
        index: './main.js',
        vender: ['react', 'react-dom', 'react-router']
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vender', 'vender.js')
    ]
}