var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: "./js/main.js",
    output: {
        path: "/",
        filename: "index.js"
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css?$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new ExtractTextPlugin("slider.css")
    ]
};

module.exports = config;