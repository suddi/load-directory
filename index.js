'use strict';

const _ = require('lodash');
const change_case = require('change-case');
const r = require('require-all');

module.exports.getDefaultOptions = function () {
    return {
        filter: /^((?!index).+)*\..*$/,
        excludeDirs: /^\.(git|svn)$/,
        recursive: true,
        map: function (name, path) {
            return change_case.pascalCase(name);
        },
        resolve: function (func) {
            return func;
        }
    };
};

module.exports.all = function (dirname, options) {
    const default_options = module.exports.getDefaultOptions();
    options = _.merge(_.cloneDeep(default_options), options);
    options.dirname = dirname;
    return r(options);
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
            return change_case.snakeCase(name);
        },

        camelCase: function (name, path) {
            return change_case.camelCase(name);
        },

        pascalCase: function (name, path) {
            return change_case.pascalCase(name);
        },

        functionCase: function (name, path) {
            const is_js_file = path.lastIndexOf('.js') === path.length - 3;
            return is_js_file ? change_case.camelCase(name) : change_case.pascalCase(name);
        }
    }
};
