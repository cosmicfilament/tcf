'use strict';

const express = require('express');
const config = require('./server/configure');
require('dotenv').config();

const NODE_PORT = process.env.NODE_PORT || 3000;
const MONGO_HOST = process.env.MONGO_HOST || "localhost";


let app = express();
//app.set('port', NODE_PORT);
app.set('views', `${__dirname}/views`);
config.init(app);

const mongoose = require('mongoose');

console.log(`Mongo connecting to: ${MONGO_HOST}`);
mongoose.connect(`mongodb://${MONGO_HOST}/tcf`);
mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
});

app.listen(NODE_PORT, () => {
    console.log(`Server up: http://localhost:${NODE_PORT}`);
});
