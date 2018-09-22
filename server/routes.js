'use strict';

const home = require('../controllers/home');
const portfolio = require('../controllers/portfolio');
const about = require('../controllers/about');
const contact = require('../controllers/contact');
const page = require('../controllers/blogPage');

module.exports.init = (app) => {

    // blog page and homepage
    app.get('/', home.index);
    app.get('/home', home.index);
    app.post('/home/newPage', home.newPage);
    app.get('/blogPage/:id', page.index);

    // portfolio page
    app.get('/portfolio', portfolio.index);
    app.post('/portfolio/images/:imageId', portfolio.imageRetrieve);
    app.delete('/portfolio/images/:imageId', portfolio.imageDelete);
    app.post('/portfolio/images/add', portfolio.imageAdd);
    app.post('/portfolio/comment/:imageId', portfolio.commentAdd);

    // about page
    app.get('/about', about.index);

    //contact page
    app.get('/contact', contact.index);
    app.post('/contact/process', contact.process);

    app.use(function (err, req, res, next) {
        if (err.code !== 'EBADCSRFTOKEN') {
            return next(err);
        }
        console.log(`csrf error: ${req.csrfToken()}`);
        res.status(403).json({ "error": "session has expired or was tampered with" });
    });
};
