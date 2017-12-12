const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    // I should use vendors for react.
    devtool: 'inline-source-map',
    // this will be ignored, taken from server.js instead.
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "ts-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader" },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
};