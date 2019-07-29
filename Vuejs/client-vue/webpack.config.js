const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    {loader: 'vue-style-loader'},
                    {loader:'css-loader'},
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.join(__dirname, 'node_modules/compass-mixins/lib')]
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                use: 'babel-loader',
                exclude: /(node_modules|bower_components)/, // 缺少这行会出错
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },
        ]
    },
    resolve:{
        extensions: ['.js', '.vue'],
        alias: {
          '@': path.join(__dirname, 'src')
        }
      },
    //devtool: '',
    
    devServer: {
        port: 9000,
        hot: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8333'
            }
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src', 'template', 'main.html'),
            chunks: ['main'],
            inject: true
          }),
        new CleanWebpackPlugin()
    ]

};

