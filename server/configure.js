'use strict';

const path = require('path');
const routes = require('./routes');
const expressHbrs = require('express-handlebars');
const express = require('express');
const hbrs = require('handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const csrf = require('csurf');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const fs = require('fs');
require('dotenv').config();

module.exports.init = (app) => {
    app.engine('handlebars', expressHbrs.create({
        defaultLayout: 'main',
        layoutsDir: `${app.get('views')}/layouts`,
        partialsDir: [`${app.get('views')}/partials`],
    }).engine);
    app.set('view engine', 'handlebars');

    // load compiled templates
    expressHbrs.templates = expressHbrs.templates === undefined ? {} : expressHbrs.templates;
    const data = fs.readFileSync(`${app.get('views')}/partials/blogPost.handlebar`);
    expressHbrs.templates.blogPost = hbrs.compile(data.toString());

    app.use(logger('tiny'));

    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());

    app.use('/public/', express.static(path.join(__dirname, '../public')));

    //csrf
    app.use(session({
        name: 'server-session-cookie-id',
        secret: process.env.SECRET,
    }));
    app.use(csrf());

    if ('development' === process.env.ENV) {
        app.use(errorHandler());
    }

    routes.init(app);
    return app;
};
