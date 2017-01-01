'use strict';

/* eslint new-cap: off */

const expect = require('chai').expect;
const path = require('path');

const Require = require('../../../lib');

module.exports.runTest = function () {
    return Require.all(path.join(__dirname, 'utils'));
};

module.exports.assert = function (result, expectedResults) {
    expect(result instanceof Object).to.eql(true);
    expect(result).to.deep.eql({
        GenerateFilename: expectedResults.generateFilename,
        PredictValue: expectedResults.predictValue,
        Templates: {
            Standard: expectedResults.standard,
            Ultimate: expectedResults.ultimate
        }
    });
    expect(result.GenerateFilename()).to.eql(expectedResults.generateFilename());
    expect(result.PredictValue()).to.eql(expectedResults.predictValue());
    expect(result.Templates.Standard()).to.eql(expectedResults.standard());
    expect(result.Templates.Ultimate()).to.eql(expectedResults.ultimate());
};
