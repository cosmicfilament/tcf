"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],
    devtool: 'source-map',
    module: {
        rules:
        [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: "css-loader"
                    }
                )
            },
        ]
    },
});
