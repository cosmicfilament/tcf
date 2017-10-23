'use strict';
const conn = new Mongo();
const db = conn.getDB("tcf");
db.blogs.drop();

const someDate = new Date();

try {
    db.blogs.insertMany([
        { author: "John Butler", short_title: "First Michoacán", title: "The Last of the first of the Michoacán.", text: "This was a smokin story that really left me buzzed.", views: 905, likes: 11, url: "#last5", timestamp: someDate.setDate(someDate.getDate() + 11) },
        { author: "John Butler", short_title: "Second Michoacán", title: "The Last of the second of the Michoacán.", text: "This was a smokin story that really left me buzzed.", views: 905, likes: 21, url: "#last5", timestamp: someDate.setDate(someDate.getDate() + 21) },
        { author: "John Butler", short_title: "Third Michoacán", title: "The Last of the third of the Michoacán.", text: "This was a smokin story that really left me buzzed.", views: 905, likes: 12, url: "#last5", timestamp: someDate.setDate(someDate.getDate() + 12) },
        { author: "John Butler", short_title: "Fourth Michoacán", title: "The Last of the fourth of the Michoacán.", text: "This was a smokin story that really left me buzzed.", views: 905, likes: 19, url: "#last5", timestamp: someDate.setDate(someDate.getDate() + 19) },
        { author: "John Butler", short_title: "Fifth Michoacán", title: "The Last of the fifth of the Michoacán.", text: "This was a smokin story that really left me buzzed.", views: 905, likes: 1, url: "#last5", timestamp: someDate.setDate(someDate.getDate() + 1) },
        { author: "John Butler", short_title: "Sixth Michoacán", title: "The Last of the sixth of the Michoacán.", text: "This was a smokin story that really left me buzzed.", views: 905, likes: 111, url: "#last5", timestamp: someDate.setDate(someDate.getDate() + 111) },
        { author: "John Butler", short_title: "Seventh Michoacán", title: "The Last of the seventh of the Michoacán.", text: "This was a smokin story that really left me buzzed.", views: 905, likes: 6, url: "#last5", timestamp: someDate.setDate(someDate.getDate() + 6) },
        { author: "John Butler", short_title: "Eighth Michoacán", title: "The Last of the eighth of the Michoacán.", text: "This was a smokin story that really left me buzzed.", views: 905, likes: 3, url: "#last5", timestamp: someDate.setDate(someDate.getDate() + 3) },
        { author: "John Butler", short_title: "Ninth Michoacán", title: "The Last of the ninth of the Michoacán.", text: "This was a smokin story that really left me buzzed.", views: 905, likes: 45, url: "#last5", timestamp: someDate.setDate(someDate.getDate() + 45) },
        { author: "John Butler", short_title: "Tenth Michoacán", title: "The Last of the tenth of the Michoacán.", text: "This was a smokin story that really left me buzzed.", views: 905, likes: 66, url: "#last5", timestamp: someDate.setDate(someDate.getDate() + 66) },
        { author: "John Butler", short_title: "Eleventh Michoacán", title: "The Last of the eleventh of the Michoacán.", text: "This was a smokin story that really left me buzzed.", views: 905, likes: 360, url: "#last5", timestamp: someDate.setDate(someDate.getDate() + 360) }
    ]);
} catch (e) {
    print(e);
}
