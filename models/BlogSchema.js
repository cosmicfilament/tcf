'use strict';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const ObjectId = mongoose.Schema.ObjectId;

const BlogSchema = new mongoose.Schema({
    commentId: { type: ObjectId }, //not used right now
    author: { type: String },
    short_title: { type: String },
    title: { type: String },
    text: { type: String },
    views: { type: Number, 'default': 0 },
    likes: { type: Number, 'default': 0 },
    gravatar: { type: String },
    url: { type: String },
    timestamp: { type: Date, 'default': Date.now } // time of blog entry
});

BlogSchema.virtual('day')
    .get(function () {
        return new Date(this.timestamp).getDate();
    });

BlogSchema.virtual('monthyr')
    .get(function () {
        const date = new Date(this.timestamp);
        return `${months[date.getMonth()]}, ${date.getFullYear()}`;
    });

BlogSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Blog', BlogSchema);
