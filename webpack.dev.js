"use strict";

//const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    module: {
        rules:
        [
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
            },
        ]
    },
});
