'use strict';

module.exports = (env = {}, mode = '') => {

    console.log(`\n\n**********\nenv.dev: ${env.dev}, env.prod: ${env.prod}.\n*********\n\n`);
    return require("./webpack." + Object.keys(env)[0] + ".js");
};
