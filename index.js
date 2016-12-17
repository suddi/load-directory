'use strict';

const _ = require('lodash');
const changeCase = require('change-case');
const r = require('require-all');

const Errors = require('./errors');

module.exports.getDefaultOptions = function () {
    return {
        filter: /^((?!index).+)*\..*$/,
        excludeDirs: /^\.(git|svn)$/,
        recursive: true,
        map: module.exports.Strategies.Filename.pascalCase,
        resolve: function (func) {
            return func;
        }
    };
};

module.exports.all = function (dirname, options) {
    if (!dirname) {
        throw new Error(Errors.NO_PATH);
    }

    const defaultOptions = module.exports.getDefaultOptions();
    const mergedOptions = _.merge(_.cloneDeep(defaultOptions), options || {});
    mergedOptions.dirname = dirname;
    return r(mergedOptions);
};

module.exports.Strategies = {
    Filename: {
        lowerCase: function (name, path) {
            return name.toLowerCase();
        },

        upperCase: function (name, path) {
            return name.toUpperCase();
        },

        snakeCase: function (name, path) {
            return changeCase.snakeCase(name);
        },

        camelCase: function (name, path) {
            return changeCase.camelCase(name);
        },

        pascalCase: function (name, path) {
            return changeCase.pascalCase(name);
        },

        functionCase: function (name, path) {
            const isJSFile = path.lastIndexOf('.js') === path.length - 3;
            return isJSFile ? changeCase.camelCase(name) : changeCase.pascalCase(name);
        }
    }
};
