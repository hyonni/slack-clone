const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode : "development",
    entry : {
        main: './src/js/index.js',
    },
    output : {
        path : path.resolve(__dirname, "/dist"),
        filename : '[name].js',
        clean: true,
    },
    module : {
        rules : [
            {
                test: /\.(css|scss)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: (url, resourcePath, context) => {
                        console.log(url, resourcePath, context)
                        return `images/${url}`;
                    },
                    outputPath: (url, resourcePath, context) => {
                        return `images/${url}`;
                    },
                    //outputPath: '/images',
                    name: '[name].[ext]?[hash]',
                    // limit: 5000
                },
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : './src/index.html',
            filename : './index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css', 
        })
    ],
}