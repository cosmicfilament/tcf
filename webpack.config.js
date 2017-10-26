'use strict';

module.exports = (env = { dev: true, prod: false }) => {

    console.log(`env.dev: ${env.dev}, env.prod: ${env.prod}.`);
    return require("./webpack." + Object.keys(env)[0] + ".js");
};
