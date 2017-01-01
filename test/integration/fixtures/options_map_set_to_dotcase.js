'use strict';

/* eslint camelcase: off */

const expect = require('chai').expect;
const path = require('path');

const Require = require('../../../lib');

module.exports.runTest = function () {
    return Require.all(path.join(__dirname, 'utils'), {
        map: Require.Strategies.Filename.dotCase
    });
};

module.exports.assert = function (result, expectedResults) {
    expect(result instanceof Object).to.eql(true);
    expect(result).to.deep.eql({
        'generate.filename': expectedResults.generateFilename,
        'predict.value': expectedResults.predictValue,
        templates: {
            standard: expectedResults.standard,
            ultimate: expectedResults.ultimate
        }
    });
    expect(result['generate.filename']()).to.eql(expectedResults.generateFilename());
    expect(result['predict.value']()).to.eql(expectedResults.predictValue());
    expect(result.templates.standard()).to.eql(expectedResults.standard());
    expect(result.templates.ultimate()).to.eql(expectedResults.ultimate());
};
