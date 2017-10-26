'use strict';
const conn = new Mongo('whaleshark');
const db = conn.getDB("tcf");
db.blogs.drop();

const someDate = new Date();

try {
    db.blogs.insertMany([
        {
            author: "John Butler", short_title: "Introduction", title: "First post and brief introduction.", text: `<p>Hello everybody.</p> <p>This is the first of what I hope are many blog entries documenting my journey as I learn full stack web development. I know just what the internet needs, right? Yet another monkey hurling his offal through the blogosphere. Well, just maybe mine doesn’t stink as bad as most. Hopefully I have something meaningful to offer.</p>
        john`, views: 0, likes: 0, url: "#last5", timestamp: someDate.setDate(someDate.getDate())
        },

    ]);
} catch (e) {
    print(e);
}
