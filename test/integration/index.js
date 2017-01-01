'use strict';

const fs = require('fs');
const path = require('path');

function getFixturesPath(filename) {
    const directory = 'fixtures';
    if (filename) {
        return path.join(__dirname, directory, filename);
    }
    return path.join(__dirname, directory);
}

function getExpectedResults() {
    return {
        generateFilename: require('./fixtures/utils/generate_filename'),
        predictValue: require('./fixtures/utils/predict_value'),
        standard: require('./fixtures/utils/templates/standard'),
        ultimate: require('./fixtures/utils/templates/ultimate'),
        index: require('./fixtures/utils/templates/index')
    };
}

describe('Integration Tests for load-directory', function () {
    const filenames = fs.readdirSync(getFixturesPath()).filter(function (filename) {
        return filename.endsWith('.js');
    });

    filenames.map(function (filename, index) {
        it(`CASE ${index + 1}: Testing ${filename}`, function () {
            const T = require(getFixturesPath(filename));

            T.assert(T.runTest(), getExpectedResults());
        });
        return filename;
    });
});
