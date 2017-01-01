'use strict';

const r = require('require-all');

const Errors = require('./errors');
const Strategies = require('./strategies');

function getDefaultOptions() {
    return {
        filter: /^((?!index).+)*\..*$/,
        excludeDirs: /^\.(git|svn)$/,
        recursive: true,
        map: Strategies.Filename.pascalCase,
        resolve: function (func) {
            return func;
        }
    };
}

module.exports.all = function (dirname, options) {
    if (!dirname) {
        throw new Error(Errors.get('NO_PATH'));
    }

    return r(Object.assign(
        getDefaultOptions(),
        options || {},
        {dirname: dirname}
    ));
};

module.exports.Strategies = Strategies;
