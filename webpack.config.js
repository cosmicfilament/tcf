"use strict";

const webpack = require("webpack");
const path = require("path");
//const merge = require("webpack-merge");
//const glob = require("glob");

const PATHS = {
    in: path.join(__dirname, "public"),
    out: path.join(__dirname, "public/dist"),
};

module.exports = {
    cache: true,
    entry: [
        "webpack-bootstrap-installer",
        path.resolve(PATHS.in, "require.js"),
    ],
    output: {
        path: PATHS.out,
        filename: "bundle.js",
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery"
        })
    ],
    module: {
        rules:
        [
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader",
                options: {
                    limit: "10000",
                    name: "/fonts/[name].[ext]",
                    publicPath: "public/dist",
                },
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                // use: [
                //     "url-loader?limit=10000&name=img/[name].[ext]",
                //     "img-loader?name=img/[name].[ext]",
                // ],
                loader: "url-loader",
                options: {
                    limit: "10000",
                    name: "/img/[name].[ext]",
                    publicPath: "public/dist",

                },
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "img-loader",
                options: {
                    name: "/img/[name].[ext]",
                    publicPath: "public/dist",

                },
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /.js$/,
                include: [
                    path.resolve(__dirname, "./public/js"),
                ],
                loader: "babel-loader",
                query: {
                    presets: ["babel-preset-env"]
                }
            },
        ]
    }
};
