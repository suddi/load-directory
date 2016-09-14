'use strict';

const assert = require('assert');

const getDefaultOptions = require('../index').getDefaultOptions;

describe('Testing getDefaultOptions', function () {
    it('CASE 1: Correct types for all inputs', function () {
        const result = getDefaultOptions();

        assert.equal(result.filter instanceof RegExp, true);
        assert.equal(result.excludeDirs instanceof RegExp, true);
        assert.equal(typeof result.recursive, 'boolean');
        assert.equal(typeof result.map, 'function');
        assert.equal(typeof result.resolve, 'function');
    });
});
