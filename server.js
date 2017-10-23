'use strict';

const express = require('express');
const config = require('./server/configure');

let app = express();
app.set('port', process.env.NODE_PORT || 3000);
app.set('views', `${__dirname}/views`);
app = config(app);

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tcf');
mongoose.connection.on('open', function () {
    console.log('Mongoose connected.');
});

app.listen(app.get('port'), () => {
    console.log(`Server up: http://localhost:${app.get('port')}`);
});
