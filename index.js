'use strict';

const _ = require('lodash');
const change_case = require('change-case');
const r = require('require-all');

const DEFAULT_OPTIONS = {
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

class Require {
    static all(dirname, options) {
        options = _.merge(_.cloneDeep(DEFAULT_OPTIONS), options);
        options.dirname = dirname;
        console.log(options);
        return r(options);
    }
}

Require.Strategies = {
    Filename: {
        lowerCase: function (name, path) {
            return name.toLowerCase();
        },

        upperCase: function (name, path) {
            return name.toUpperCase();
        },

        pascalCase: function (name, path) {
            return change_case.pascalCase(name);
        },

        camelCase: function (name, path) {
            return change_case.camelCase(name);
        },

        functionCase: function (name, path) {
            if (path.lastIndexOf('.js') === path.length - 3) {
                return change_case.camelCase(name);
            }
            return change_case.pascalCase(name);
        }
    }
};

module.exports = Require;
