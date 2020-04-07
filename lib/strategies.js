'use strict';

const changeCase = require('change-case');

module.exports.Filename = {
    lowerCase(name, path) {
        return String(name).toLowerCase();
    },

    upperCase(name, path) {
        return String(name).toUpperCase();
    },

    dotCase(name, path) {
        return changeCase.dotCase(name);
    },

    headerCase(name, path) {
        return changeCase.headerCase(name);
    },

    paramCase(name, path) {
        return changeCase.paramCase(name);
    },

    sentenceCase(name, path) {
        return changeCase.sentenceCase(name);
    },

    snakeCase(name, path) {
        return changeCase.snakeCase(name);
    },

    camelCase(name, path) {
        return changeCase.camelCase(name);
    },

    pascalCase(name, path) {
        return changeCase.pascalCase(name);
    },

    functionCase(name, path) {
        const isJSFile = path.lastIndexOf('.js') === path.length - 3;
        return isJSFile ? changeCase.camelCase(name) : changeCase.pascalCase(name);
    }
};
