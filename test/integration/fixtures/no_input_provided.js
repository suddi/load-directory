'use strict';

const expect = require('chai').expect;

const Require = require('../../../lib');
const Errors = require('../../../lib/errors');

module.exports.runTest = function () {
    try {
        return Require.all();
    } catch (error) {
        return error;
    }
};

module.exports.assert = function (result, expectedResults) {
    expect(result instanceof Error).to.eql(true);
    expect(result.message).to.eql(Errors.get('NO_PATH'));
};
