"use strict";

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const merge = require("webpack-merge");
//const glob = require("glob");

const path = require("path");

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
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("styles.css"),
    ],
    devtool: 'source-map',
    module: {
        rules:
        [
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                // use: [{
                //     loader: "url-loader",
                //     options: {
                //         limit: "10000",
                //         name: "/fonts/[name].[ext]",
                //         publicPath: "public/dist",
                //     }
                // },
                use: 'file-loader?name=/fonts/[name].[ext]',

            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000&name=/img/[name].[ext]',
                    {
                        loader: 'img-loader',
                        options: {
                            name: "/img/[name].[ext]",
                            enabled: true,
                            gifsicle: {
                                interlaced: false
                            },
                            mozjpeg: {
                                progressive: true,
                                arithmetic: false
                            },
                            optipng: false,
                            pngquant: {
                                floyd: 0.5,
                                speed: 2
                            },
                            svgo: {
                                plugins: [
                                    { removeTitle: true },
                                    { convertPathData: false }
                                ]
                            }
                        }
                    },
                    'file-loader?name=/img/[name].[ext]',
                ]
            },
            {
                test: /\.css$/,
                //loaders: ["style-loader", "css-loader"],
                use: ExtractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: "css-loader"
                    }
                )
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
    },
};
