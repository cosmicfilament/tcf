'use strict';
const hbrs = require('handlebars');

module.exports = {
    'Contact': require('./contactSchema'),
    'Blog': require('./BlogSchema'),
    'Image': require('./portfolioSchema'),

    // populate a template with the data from the db
    buildHTML: function (ary, str) {
        const template = hbrs.templates[str];
        let html = "";
        for (let index = 0; index < ary.length; ++index) {
            html += template(ary[index]);
        }
        return html;
    }
};
