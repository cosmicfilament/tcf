'use strict';
const dateFormat = require('dateformat');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const comment = require('./CommentSchema').CommentSchema;

const BlogSchema = new mongoose.Schema({
    author: { type: String },
    title: {
        short: { type: String },
        long: { type: String },
    },
    text: {
        brief: { type: String },
        extended: { type: String },
    },
    comments: [comment],
    timestamp: { type: Date, 'default': Date.now } // time of blog entry
});

//day as 04
BlogSchema.virtual('day').get(function () { return dateFormat(new Date(this.timestamp), "dd"); });
// sep 2017
BlogSchema.virtual('monthyr').get(function () { return dateFormat(new Date(this.timestamp), "mmm, yyyy"); });
// Sat Oct 9th, 2017 3:15 pm
BlogSchema.virtual('createdOn').get(function () { return dateFormat(new Date(this.timestamp), "ddd, mmm dS, yyyy h:MM TT"); });

BlogSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Blog', BlogSchema);
