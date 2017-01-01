'use strict';

const expect = require('chai').expect;
const path = require('path');

const Require = require('../../../lib');

module.exports.runTest = function () {
    return Require.all(path.join(__dirname, 'utils'), {
        map: Require.Strategies.Filename.camelCase
    });
};

module.exports.assert = function (result, expectedResults) {
    expect(result instanceof Object).to.eql(true);
    expect(result).to.deep.eql({
        generateFilename: expectedResults.generateFilename,
        predictValue: expectedResults.predictValue,
        templates: {
            standard: expectedResults.standard,
            ultimate: expectedResults.ultimate
        }
    });
    expect(result.generateFilename()).to.eql(expectedResults.generateFilename());
    expect(result.predictValue()).to.eql(expectedResults.predictValue());
    expect(result.templates.standard()).to.eql(expectedResults.standard());
    expect(result.templates.ultimate()).to.eql(expectedResults.ultimate());
};
