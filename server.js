const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');

const config = require('./webpack.config.js');
const options = {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    host: 'localhost',
    publicPath: '/',
    quiet: false,
    noInfo: false,
    stats: {
        chunks: false,
        colors: true
    },
    proxy: {
        "/": "http://localhost:5000/"
    },
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
});
