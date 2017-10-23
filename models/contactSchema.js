'use strict';

const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    from: { type: String },
    email:{ type: String },
    subject: { type: String },
    comments: { type: String },
    timestamp: { type: Date, 'default': Date.now } // time of blog entry
});

module.exports = mongoose.model('Contact', ContactSchema);
