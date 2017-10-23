'use strict';

module.exports = {
    index: (req, res)=>{
        res.render("portfolio");
    },
    imageRetrieve:(req, res)=>{
        res.send("Adding a blog entry");
    },
    imageDelete:(req, res)=>{
        res.send("Retrieving a blog entry.");
    },
    imageAdd:(req, res)=>{
        res.send("Adding a blog entry");
    },
    commentAdd:(req, res)=>{
        res.send("Retrieving a blog entry.");
    }
};
