'use strict';

const expect = require('chai').expect;
const path = require('path');

const Require = require('../../../lib');

module.exports.runTest = function () {
    return Require.all(path.join(__dirname, 'utils'), {
        resolve: function () {
            return 42;
        }
    });
};

module.exports.assert = function (result, expectedResults) {
    expect(result instanceof Object).to.eql(true);
    expect(result).to.deep.eql({
        GenerateFilename: 42,
        PredictValue: 42,
        Templates: {
            Standard: 42,
            Ultimate: 42
        }
    });
};
