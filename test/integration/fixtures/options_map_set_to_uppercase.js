'use strict';

/* eslint new-cap: off */

const expect = require('chai').expect;
const path = require('path');

const Require = require('../../../lib');

module.exports.runTest = function () {
    return Require.all(path.join(__dirname, 'utils'), {
        map: Require.Strategies.Filename.upperCase
    });
};

module.exports.assert = function (result, expectedResults) {
    expect(result instanceof Object).to.eql(true);
    expect(result).to.deep.eql({
        GENERATE_FILENAME: expectedResults.generateFilename,
        PREDICT_VALUE: expectedResults.predictValue,
        TEMPLATES: {
            STANDARD: expectedResults.standard,
            ULTIMATE: expectedResults.ultimate
        }
    });
    expect(result.GENERATE_FILENAME()).to.eql(expectedResults.generateFilename());
    expect(result.PREDICT_VALUE()).to.eql(expectedResults.predictValue());
    expect(result.TEMPLATES.STANDARD()).to.eql(expectedResults.standard());
    expect(result.TEMPLATES.ULTIMATE()).to.eql(expectedResults.ultimate());
};
