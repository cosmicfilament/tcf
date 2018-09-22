'use strict';
const conn = new Mongo('localhost');
const db = conn.getDB("tcf");
db.blogs.drop();

const someDate = new Date();

try {
    db.blogs.insertMany([
        {
            author: "John Butler",
            title: {
                short: "First Post",
                long: "First post and brief introduction.",
            },
            text: {
                brief: "<p>Hello everybody.</p>\r\n<p>This is the first of what I hope will be many posts on the Cosmic Filament blog. I would like to offer insights on how I managed to solve development problems and give small tutorials as I progress in learning web development with nodejs, express, handlebars, mongodb and all of the other plugins and tools that make web development so confusing.</p>\r\n<p>Why me? I have many years of software development experience but I always sort of just played around&nbsp; with web development. ......</p>",
                extended: "<p>I think that the last time I made a website was in 2001, when I used apache and perl to drive the backend of a website I built for a scuba diving club that I was in.</p>\r\n<p>The website was physically located in my garage on an old xenon server that I bought off of ebay and I used a dns proxy service to expose it to the outside. After running it for a couple of years I turned it over to someone else. His nickname was the dude. Well the dude did not abide, and the website never really ran again after that.</p>\r\n<p>Moving forward. A couple of months ago, I started getting back into software development and web development, the way I do everything, which is obsessively. Immediately I noticed that things had changed considerably and you could do javascript on the front end as well as the backend. I also fell in love with the simplicity of using node to power a webserver along with express, handlebars and npm.</p>\r\n<p>So, I would like to share my journey with others and hopefully help someone who is struggling and make new friends along the way.</p>\r\n<p>yours truly</p>\r\n<p>John</p>\r\n<p>&nbsp;</p>",
            },
            timestamp: someDate.setDate(someDate.getDate()),
        },
        {
            author: "John Butler",
            title: {
                short: "Second Post",
                long: "Second post and brief introduction.",
            },
            text: {
                brief: "<p>Hello everybody.</p>\r\n<p>This is the first of what I hope will be many posts on the Cosmic Filament blog. I would like to offer insights on how I managed to solve development problems and give small tutorials as I progress in learning web development with nodejs, express, handlebars, mongodb and all of the other plugins and tools that make web development so confusing.</p>\r\n<p>Why me? I have many years of software development experience but I always sort of just played around&nbsp; with web development. ......</p>",
                extended: "<p>I think that the last time I made a website was in 2001, when I used apache and perl to drive the backend of a website I built for a scuba diving club that I was in.</p>\r\n<p>The website was physically located in my garage on an old xenon server that I bought off of ebay and I used a dns proxy service to expose it to the outside. After running it for a couple of years I turned it over to someone else. His nickname was the dude. Well the dude did not abide, and the website never really ran again after that.</p>\r\n<p>Moving forward. A couple of months ago, I started getting back into software development and web development, the way I do everything, which is obsessively. Immediately I noticed that things had changed considerably and you could do javascript on the front end as well as the backend. I also fell in love with the simplicity of using node to power a webserver along with express, handlebars and npm.</p>\r\n<p>So, I would like to share my journey with others and hopefully help someone who is struggling and make new friends along the way.</p>\r\n<p>yours truly</p>\r\n<p>John</p>\r\n<p>&nbsp;</p>",
            },
            timestamp: someDate.setDate(someDate.getDate()),
        },
        {
            author: "John Butler",
            title: {
                short: "Third Post",
                long: "Third post and brief introduction.",
            },
            text: {
                brief: "<p>Hello everybody.</p>\r\n<p>This is the first of what I hope will be many posts on the Cosmic Filament blog. I would like to offer insights on how I managed to solve development problems and give small tutorials as I progress in learning web development with nodejs, express, handlebars, mongodb and all of the other plugins and tools that make web development so confusing.</p>\r\n<p>Why me? I have many years of software development experience but I always sort of just played around&nbsp; with web development. ......</p>",
                extended: "<p>I think that the last time I made a website was in 2001, when I used apache and perl to drive the backend of a website I built for a scuba diving club that I was in.</p>\r\n<p>The website was physically located in my garage on an old xenon server that I bought off of ebay and I used a dns proxy service to expose it to the outside. After running it for a couple of years I turned it over to someone else. His nickname was the dude. Well the dude did not abide, and the website never really ran again after that.</p>\r\n<p>Moving forward. A couple of months ago, I started getting back into software development and web development, the way I do everything, which is obsessively. Immediately I noticed that things had changed considerably and you could do javascript on the front end as well as the backend. I also fell in love with the simplicity of using node to power a webserver along with express, handlebars and npm.</p>\r\n<p>So, I would like to share my journey with others and hopefully help someone who is struggling and make new friends along the way.</p>\r\n<p>yours truly</p>\r\n<p>John</p>\r\n<p>&nbsp;</p>",
            },
            timestamp: someDate.setDate(someDate.getDate()),
        },
        {
            author: "John Butler",
            title: {
                short: "Fourth Post",
                long: "Fourth post and brief introduction.",
            },
            text: {
                brief: "<p>Hello everybody.</p>\r\n<p>This is the first of what I hope will be many posts on the Cosmic Filament blog. I would like to offer insights on how I managed to solve development problems and give small tutorials as I progress in learning web development with nodejs, express, handlebars, mongodb and all of the other plugins and tools that make web development so confusing.</p>\r\n<p>Why me? I have many years of software development experience but I always sort of just played around&nbsp; with web development. ......</p>",
                extended: "<p>I think that the last time I made a website was in 2001, when I used apache and perl to drive the backend of a website I built for a scuba diving club that I was in.</p>\r\n<p>The website was physically located in my garage on an old xenon server that I bought off of ebay and I used a dns proxy service to expose it to the outside. After running it for a couple of years I turned it over to someone else. His nickname was the dude. Well the dude did not abide, and the website never really ran again after that.</p>\r\n<p>Moving forward. A couple of months ago, I started getting back into software development and web development, the way I do everything, which is obsessively. Immediately I noticed that things had changed considerably and you could do javascript on the front end as well as the backend. I also fell in love with the simplicity of using node to power a webserver along with express, handlebars and npm.</p>\r\n<p>So, I would like to share my journey with others and hopefully help someone who is struggling and make new friends along the way.</p>\r\n<p>yours truly</p>\r\n<p>John</p>\r\n<p>&nbsp;</p>",
            },
            timestamp: someDate.setDate(someDate.getDate()),
        },
        {
            author: "John Butler",
            title: {
                short: "Fifth Post",
                long: "Fifth post and brief introduction.",
            },
            text: {
                brief: "<p>Hello everybody.</p>\r\n<p>This is the first of what I hope will be many posts on the Cosmic Filament blog. I would like to offer insights on how I managed to solve development problems and give small tutorials as I progress in learning web development with nodejs, express, handlebars, mongodb and all of the other plugins and tools that make web development so confusing.</p>\r\n<p>Why me? I have many years of software development experience but I always sort of just played around&nbsp; with web development. ......</p>",
                extended: "<p>I think that the last time I made a website was in 2001, when I used apache and perl to drive the backend of a website I built for a scuba diving club that I was in.</p>\r\n<p>The website was physically located in my garage on an old xenon server that I bought off of ebay and I used a dns proxy service to expose it to the outside. After running it for a couple of years I turned it over to someone else. His nickname was the dude. Well the dude did not abide, and the website never really ran again after that.</p>\r\n<p>Moving forward. A couple of months ago, I started getting back into software development and web development, the way I do everything, which is obsessively. Immediately I noticed that things had changed considerably and you could do javascript on the front end as well as the backend. I also fell in love with the simplicity of using node to power a webserver along with express, handlebars and npm.</p>\r\n<p>So, I would like to share my journey with others and hopefully help someone who is struggling and make new friends along the way.</p>\r\n<p>yours truly</p>\r\n<p>John</p>\r\n<p>&nbsp;</p>",
            },
            timestamp: someDate.setDate(someDate.getDate()),
        },
        {
            author: "John Butler",
            title: {
                short: "Sixth Post",
                long: "Sixth post and brief introduction.",
            },
            text: {
                brief: "<p>Hello everybody.</p>\r\n<p>This is the first of what I hope will be many posts on the Cosmic Filament blog. I would like to offer insights on how I managed to solve development problems and give small tutorials as I progress in learning web development with nodejs, express, handlebars, mongodb and all of the other plugins and tools that make web development so confusing.</p>\r\n<p>Why me? I have many years of software development experience but I always sort of just played around&nbsp; with web development. ......</p>",
            },
            timestamp: someDate.setDate(someDate.getDate()),
        },
    ]);
} catch (e) {
    print(e);
}
