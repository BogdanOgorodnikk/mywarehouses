const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: ['@babel/polyfill','./src/index.jsx'],
    output: {
        filename: `js/[name].[hash].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js`}} 
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js`}} 
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true} 
                    }
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `css/[name].[hash].css`,
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin ({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: `${PATHS.src}/img`,
                    to: `${PATHS.assets}img`
                },
                {
                    from: `${PATHS.src}/static`,
                    to: `${PATHS.assets}static`
                }
            ]
        })
    ],
}