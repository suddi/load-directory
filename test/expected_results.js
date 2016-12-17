'use strict';

/* eslint camelcase: 'off' */

const generateFilename = require('./utils/generate_filename');
const predictValue = require('./utils/predict_value');
const standard = require('./utils/templates/standard');
const ultimate = require('./utils/templates/ultimate');
const index = require('./utils/templates/index');

module.exports = {
    filter: {
        Templates: {
            Standard: standard,
            Ultimate: ultimate
        }
    },

    excludeDirs: {
        GenerateFilename: generateFilename,
        PredictValue: predictValue
    },

    recursive: {
        GenerateFilename: generateFilename,
        PredictValue: predictValue
    },

    map: {
        lowerCase: {
            generate_filename: generateFilename,
            predict_value: predictValue,
            templates: {
                standard: standard,
                ultimate: ultimate
            }
        },

        upperCase: {
            GENERATE_FILENAME: generateFilename,
            PREDICT_VALUE: predictValue,
            TEMPLATES: {
                STANDARD: standard,
                ULTIMATE: ultimate
            }
        },

        snakeCase: {
            generate_filename: generateFilename,
            predict_value: predictValue,
            templates: {
                standard: standard,
                ultimate: ultimate
            }
        },

        camelCase: {
            generateFilename: generateFilename,
            predictValue: predictValue,
            templates: {
                standard: standard,
                ultimate: ultimate
            }
        },

        pascalCase: {
            GenerateFilename: generateFilename,
            PredictValue: predictValue,
            Templates: {
                Standard: standard,
                Ultimate: ultimate
            }
        },

        functionCase: {
            generateFilename: generateFilename,
            predictValue: predictValue,
            Templates: {
                standard: standard,
                ultimate: ultimate
            }
        }
    },

    resolve: {
        GenerateFilename: 42,
        PredictValue: 42,
        Templates: {
            Standard: 42,
            Ultimate: 42
        }
    }
};

module.exports.generate_filename = generateFilename();
module.exports.predict_value = predictValue();
module.exports.standard = standard();
module.exports.ultimate = ultimate();
module.exports.index = index();
