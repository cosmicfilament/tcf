'use strict';

const footer = require('../helpers/footer');
const blogModel = require('../models').Blog;

const buildHTML = (ary, str) => {
    const template = require('express-handlebars').templates[str];
    let html = "";
    for (let index = 0; index < ary.length; ++index) {
        html += template(ary[index]);
    }
    return html;
};

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
                //first time load a page set a csrf token.
                viewModel.csrfToken = req.csrfToken();
                console.log(`csrf Token for home-index: ${req.csrfToken()}`);
                footer(viewModel, (viewModel) => {
                    res.render('home', viewModel);
                });
            });
        });
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
            //pass the same token back and forth for the session
            const token = req.body._csrf;
            // starting item # of next query and it is zero based for the altzheimer bunch
            // for 1st page == 0 * 5 which means 1st entry
            // 2nd page == 1 * 5 which means 6th entry etc....
            ops.offset = page * ops.limit;
            // doesn't mean anything yet, see below
            let total = 0;


            blogModel.find().count((err, count) => {
                if (err) { throw err; }
                // total means the total # of pages in the database plus 1 if there is a remainder
                total = count / ops.limit;
                total = total === Math.floor(total) ? total : Math.floor(total + 1);
                // add 1 back to page for page display on the front end
                page += 1;
                blogModel.paginate({}, ops, (err, results) => {
                    if (err) { throw err; }
                    return res.send({
                        data: buildHTML(results.docs, "blogPost"),
                        csrfToken: token,
                        page: page,
                        total: total,
                        success: true
                    });
                });
            });
        }
    },
};
