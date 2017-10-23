'use strict';

const path = require('path');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const express = require('express');
const hbrs = require('handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');
const moment = require('moment');
const multer = require('multer');
const fs = require('fs');

module.exports = (app) => {
    app.engine('handlebars', exphbs.create({
        defaultLayout: 'main',
        layoutsDir: `${app.get('views')}/layouts`,
        partialsDir: [`${app.get('views')}/partials`],
        helpers: {
            timeago: function (timestamp) {
                console.log(timestamp);
                return moment(timestamp).startOf('minute').fromNow();
            }
        }
    }).engine);
    app.set('view engine', 'handlebars');

    // load comiled templates
    hbrs.templates = hbrs.templates === undefined ? {} : hbrs.templates;
    const data = fs.readFileSync(`${app.get('views')}/partials/blogPost.handlebar`);
    hbrs.templates.blogPost = hbrs.compile(data.toString());

    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(multer({ dest: `${__dirname}'/file/uploads/'` }).any());
    app.use(methodOverride());
    app.use(cookieParser('some-secret-value-here'));

    routes.initialize(app);

    app.use('/public/', express.static(path.join(__dirname, '../public')));
    app.use('/vendor/', express.static(path.join(__dirname, '../vendor')));

    if ('development' === app.get('env')) {
        app.use(errorHandler());
    }


    return app;
};
