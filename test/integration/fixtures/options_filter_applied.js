'use strict';

/* eslint new-cap: off */

const expect = require('chai').expect;
const path = require('path');

const Require = require('../../../lib');

module.exports.runTest = function () {
    return Require.all(path.join(__dirname, 'utils'), {
        filter: /^(standard|ultimate)\.js$/
    });
};

module.exports.assert = function (result, expectedResults) {
    expect(result instanceof Object).to.eql(true);
    expect(result).to.deep.eql({
        Templates: {
            Standard: expectedResults.standard,
            Ultimate: expectedResults.ultimate
        }
    });
    expect(result.GenerateFilename).to.eql(undefined);
    expect(result.PredictValue).to.eql(undefined);
    expect(result.Templates.Standard()).to.eql(expectedResults.standard());
    expect(result.Templates.Ultimate()).to.eql(expectedResults.ultimate());
};
