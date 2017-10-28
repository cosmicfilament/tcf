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
            select: '_id author title text timestamp',
            sort: { date: -1 },
            lean: false,
            offset: 0,
            limit: 5
        };

        try {
            blogModel.find().count((err, count) => {
                if (err) { throw err; }

                viewModel.page = 1;
                viewModel.total = Math.floor(count / ops.limit) + 1;
                 // total is count/# of items plus 1 if there is a remainder
                 viewModel.total = count / ops.limit;
                 viewModel.total = viewModel.total === Math.floor(viewModel.total) ? viewModel.total : Math.floor(viewModel.total + 1);

                blogModel.paginate({}, ops, (err, results) => {
                    if (err) { throw err; }
                    viewModel.blogs = results.docs;
                    footer(viewModel, (viewModel) => {
                        res.render('home', viewModel);
                    });
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
                select: '_id author title text timestamp',
                sort: { date: -1 },
                lean: false,
                offset: 0,
                limit: 5
            };
            // get next page which is zero based in the query, so subtract 1
            let page = parseInt(req.body.page) - 1;
            // starting item # of next query
            // for 1st page == 0 * 5 etc...
            ops.offset = page * ops.limit;
            // total is the total number of pages in the database
            let total = 0;

            try {
                blogModel.find().count((err, count) => {
                    if (err) { throw err; }
                    // total is count/# of items plus 1 if there is a remainder
                    total = count / ops.limit;
                    total = total === Math.floor(total) ? total : Math.floor(total + 1);
                    // add 1 back to page for page display on the front end
                    page += 1;
                    blogModel.paginate({}, ops, (err, results) => {
                        if (err) { throw err; }
                        return res.send({ data: models.buildHTML(results.docs, "blogPost"), page: page, total: total, success: true });
                    });
                });
            }
            catch (err) {
                console.log(`Error retrieving blogs: ${err}`);
                return res.send({ success: false });
            }
        }
    }
};
