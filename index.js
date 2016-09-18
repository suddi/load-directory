'use strict';

const _ = require('lodash');
const change_case = require('change-case');
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

    const default_options = module.exports.getDefaultOptions();
    const merged_options = _.merge(_.cloneDeep(default_options), options || {});
    merged_options.dirname = dirname;
    return r(merged_options);
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
