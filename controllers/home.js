'use strict';

const footer = require('../helpers/footer');
const models = require('../models');
const blogModel = models.Blog;

module.exports = {
    index: (req, res) => {

        const viewModel = {
            blogs: [],
        };

        const ops = {
            select: 'author title text views likes timestamp',
            sort: { date: -1 },
            lean: false,
            offset: 0,
            limit: 5
        };

        try {

            blogModel.paginate({}, ops, (err, results) => {
                if (err) { throw err; }
                viewModel.blogs = results.docs;
                footer(viewModel, (viewModel) => {
                    res.render('home', viewModel);
                });
            });
        }
        catch (err) {
            console.log(`Error retrieving blogs: ${err}`);
            return res.render('home', err);
        }
    },

    newPage: (req, res) => {

        if (req.xhr || req.accepts('json,html') === 'json') {

            const ops = {
                select: 'author title text views likes timestamp',
                sort: { date: -1 },
                lean: false,
                offset: 0,
                limit: 5
            };
            ops.offset = parseInt(req.body.page) * ops.limit;

            try {
                blogModel.paginate({}, ops, (err, results) => {
                    if (err) { throw err; }
                    return res.send({ data: models.buildHTML(results.docs, "blogPost"), success: true });
                });
            }
            catch (err) {
                console.log(`Error retrieving blogs: ${err}`);
                return res.send({ success: false });
            }
        }
    }
};
