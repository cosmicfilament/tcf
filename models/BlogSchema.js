'use strict';
const dateFormat = require('dateformat');
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const ObjectId = mongoose.Schema.ObjectId;

const BlogSchema = new mongoose.Schema({
    commentId: { type: ObjectId }, //not used right now
    author: { type: String },
    title: {
        short: { type: String },
        long: { type: String },
    },
    text: {
        brief: { type: String },
        extended: { type: String },
    },
    timestamp: { type: Date, 'default': Date.now } // time of blog entry
});

//day as 04
BlogSchema.virtual('day').get(function () { return dateFormat(new Date(this.timestamp), "dd"); });
// sep 2017
BlogSchema.virtual('monthyr').get(function () { return dateFormat(new Date(this.timestamp), "mmm, yyyy"); });
// Sat Oct 09, 2017 3:15 pm
BlogSchema.virtual('createdOn').get(function () { return dateFormat(new Date(this.timestamp), "ddd, mmm dS, yyyy h:MM TT"); });

BlogSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Blog', BlogSchema);
