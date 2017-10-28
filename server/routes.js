'use strict';

const home = require('../controllers/home');
const portfolio = require('../controllers/portfolio');
const about = require('../controllers/about');
const contact = require('../controllers/contact');
const page = require('../controllers/blogPage');

module.exports.initialize = (app) => {
    app.get('/', home.index);
    app.get('/home', home.index);
    app.post('/home/newPage', home.newPage);
    app.get('/blogPage/:id', page.index);
    app.get('/portfolio', portfolio.index);
    app.post('/portfolio/images/:imageId', portfolio.imageRetrieve);
    app.delete('/portfolio/images/:imageId', portfolio.imageDelete);
    app.post('/portfolio/images/add', portfolio.imageAdd);
    app.post('/portfolio/comment/:imageId', portfolio.commentAdd);
    app.get('/about', about.index);
    app.get('/contact', contact.index);
    app.post('/contact/process', contact.process);
};
