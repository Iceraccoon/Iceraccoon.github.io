const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 9999,
        contentBase: path.resolve(__dirname, 'dist')
    },
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 20480,
                    name: '[name].[ext]',
                    outputPath: 'img'
                }
            },
            // {test: /\.html$/, loader: 'html-loader'}
        ]
    }
}
