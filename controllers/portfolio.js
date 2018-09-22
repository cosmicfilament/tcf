'use strict';
const footer = require('../helpers/footer');

module.exports = {
    index: (req, res) => {

        const viewModel = {};

        footer(viewModel, (viewModel) => {
            res.render("portfolio", viewModel);
        });
    },
    imageRetrieve: (req, res) => {
        res.send("Adding a portfolio entry");
    },
    imageDelete: (req, res) => {
        res.send("Retrieving a portfolio entry.");
    },
    imageAdd: (req, res) => {
        res.send("Adding a portfolio entry");
    },
    commentAdd: (req, res) => {
        res.send("Adding a portfolio comment.");
    }
};
