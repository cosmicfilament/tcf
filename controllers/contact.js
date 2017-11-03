'use strict';
const contactModel = require('../models').Contact;
const sendmail = require('../helpers/sendmail');
const footer = require('../helpers/footer');

module.exports = {

    index: (req, res) => {

        const viewModel = {
        };
        viewModel.csrfToken = req.csrfToken();
        console.log(`contact-index: ${req.csrfToken()}`);
        footer(viewModel, (viewModel) => {
            res.render("contact", viewModel);
        });
    },

    process: (req, res) => {
        if (req.xhr || req.accepts('json,html') === 'json') {

            const frm = req.body;
            const doc = {
                from: frm.from,
                email: frm.email,
                subject: frm.subject,
                comments: frm.comments
            };
            // add entry to database
            contactModel.create(doc, (err) => {
                try {
                    if (err) {
                        console.log(`Error writing to database: ${err}. [try:1]`);
                    }
                    else {
                        console.log(`create: ${frm.from}`);
                        // send email to webmaster
                        sendmail({
                            from: '"The Cosmic Filament Website" <DoNotRespond@thecosmicfilament.com',
                            to: 'johnpbutler@gmail.com',
                            subject: `Contact Form filled by ${frm.from}`,
                            html: `<h2>Name: ${frm.from}</h2>
                                        subject: ${frm.subject}
                                        email: <address>${frm.email}</address>
                                        message: <p>${frm.comments}</p>`
                        }, (err, result) => {  //sendmail callback
                            try {
                                if (err) {
                                    console.log(`SendMail: ${err}`);
                                    return res.send({
                                        msg: "Error sending email. No message sent. Try again later. [try:2]",
                                        success: false
                                    });
                                }
                                else {
                                    console.log(`SendMail: ${result}`);
                                    return res.send({
                                        msg: "Successfully submitted email to The Cosmic Filament.",
                                        success: true
                                    });
                                }
                            }
                            catch (err) {
                                console.log(`WTF error sending contact email: ${err}.`);
                                return res.send({
                                    msg: "Error sending email. No message sent. Try again later. [catch:2]",
                                    success: false
                                });
                            }
                        }
                        );
                    }
                }
                catch (err) {
                    console.log(`WTF error writing to contact db: ${err}. [catch:1]`);
                }
            });
        }
    }
};
