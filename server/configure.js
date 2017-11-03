'use strict';

const path = require('path');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const express = require('express');
const hbrs = require('handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const csrf = require('csurf');
//const morgan = require('morgan');
const errorHandler = require('errorhandler');
const moment = require('moment');
const fs = require('fs');
require('dotenv').config();

module.exports = (app) => {
    app.engine('handlebars', exphbs.create({
        defaultLayout: 'main',
        layoutsDir: `${app.get('views')}/layouts`,
        partialsDir: [`${app.get('views')}/partials`],
        helpers: {
            timeago: function (timestamp) {
                console.log(timestamp);
                return moment(timestamp).startOf('minute').fromNow();
            },
        }
    }).engine);
    app.set('view engine', 'handlebars');

    // load comiled templates
    exphbs.templates = exphbs.templates === undefined ? {} : exphbs.templates;
    const data = fs.readFileSync(`${app.get('views')}/partials/blogPost.handlebar`);
    exphbs.templates.blogPost = hbrs.compile(data.toString());

    //app.use(morgan('dev'));

    // app.use(session({
    //     name: 'server-session-cookie-id',
    //     secret: process.env.SECRET,
    //     cookie: {
    //         httpOnly: true,
    //         secure: true,
    //         samesite: true,
    //         domain: process.env.HOST
    //     }
    // }));

    // app.use(csrf({
    //     cookie: {
    //         key: '_csrf',
    //         sameSite: true,
    //         httpOnly: true,
    //         domain: process.env.HOST
    //     }
    // }));


    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.use('/public/', express.static(path.join(__dirname, '../public')));

    app.use(session({
        secret: process.env.SECRET
    }));

    app.use(csrf());

    app.use(function (err, req, res, next) {
        if (err.code !== 'EBADCSRFTOKEN') {
            return next(err);
        }
        console.log(`error: ${req.csrfToken()}`);
        res.status(403).json({ "error": "session has expired or tampered with" });
    });

    if ('development' === process.env.ENV) {
        app.use(errorHandler());
    }

    routes.initialize(app);

    return app;
};
