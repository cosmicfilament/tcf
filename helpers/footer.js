'use strict';

const last5 = require('./last5');
const async = require('async');

module.exports = (viewModel, callback) => {

    async.parallel([
        (next) => {
            last5(next);
        }
        // chain additional calls here
    ], (err, results) => {
        console.log(results.docs);
        viewModel.footer = {
            last5: results[0]
        };
        callback(viewModel);
    });
};
