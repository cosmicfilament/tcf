'use strict';

const mongoose = require('mongoose');

module.exports.CommentSchema = new mongoose.Schema({
    from: { type: String },
    body: { type: String },
    timestamp: { type: Date, 'default': Date.now },
});

module.exports.commentModel = mongoose.model('Comment', module.exports.CommentSchema);
