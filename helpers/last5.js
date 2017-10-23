'use strict';

const blogModel = require('../models').Blog;

module.exports = function (callback) {

    const ops = {
        select: 'url short_title',
        limit: 5
    };
    blogModel.find({}, {}, ops, (err, results) => {
        if (err) { throw err; }
        callback(null, results);
    });
};
