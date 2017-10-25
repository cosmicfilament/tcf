'use strict';
const footer = require('../helpers/footer');
const models = require('../models');

module.exports = {
    index: (req, res) => {

        const viewModel = {
        };

        footer(viewModel, (viewModel) => {
            res.render("about", viewModel);
        });
    },
};
