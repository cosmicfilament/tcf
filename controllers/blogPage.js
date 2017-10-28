'use strict';

const footer = require('../helpers/footer');
const models = require('../models');
const blogModel = models.Blog;

module.exports = {
    index: (req, res) => {

        const viewModel = {};

        blogModel.findById(req.params.id, (err, results) => {
            if (err) { throw err; }
            viewModel.page = results;
            footer(viewModel, (viewModel) => {
                res.render('blogPage', viewModel);
            });
        });
    }
};
