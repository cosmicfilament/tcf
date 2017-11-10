'use strict';
const footer = require('../helpers/footer');

module.exports = {
    index: (req, res) => {

        const viewModel = {};

        footer(viewModel, (viewModel) => {
            res.render("about", viewModel);
        });
    },
};
