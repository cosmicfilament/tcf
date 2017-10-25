'use strict';
const footer = require('../helpers/footer');
const models = require('../models');

module.exports = {
    index: (req, res) => {

        const viewModel = {
        };

        footer(viewModel, (viewModel) => {
            res.render("portfolio", viewModel);
        });
    },
    imageRetrieve: (req, res) => {
        res.send("Adding a blog entry");
    },
    imageDelete: (req, res) => {
        res.send("Retrieving a blog entry.");
    },
    imageAdd: (req, res) => {
        res.send("Adding a blog entry");
    },
    commentAdd: (req, res) => {
        res.send("Retrieving a blog entry.");
    }
};
