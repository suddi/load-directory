'use strict';

/* eslint new-cap: 'off' */

const assert = require('assert');
const path = require('path');

const Require = require('../index');
const Errors = require('../errors');
const expectedResults = require('./expected_results');

describe('Testing load-directory', function () {
    it('CASE 1: No input provided', function () {
        let error;
        try {
            Require.all();
        } catch (err) {
            error = err;
        }

        assert.equal(error instanceof Error, true);
        assert.equal(error.message, Errors.NO_PATH);
    });

    it('CASE 2: Path not provided', function () {
        let error;
        try {
            Require.all(null, {});
        } catch (err) {
            error = err;
        }

        assert.equal(error instanceof Error, true);
        assert.equal(error.message, Errors.NO_PATH);
    });

    it('CASE 3: Empty string provided for path', function () {
        let error;
        try {
            Require.all('', {});
        } catch (err) {
            error = err;
        }

        assert.equal(error instanceof Error, true);
        assert.equal(error.message, Errors.NO_PATH);
    });

    it('CASE 4: No options provided', function () {
        const result = Require.all(path.join(__dirname, '/utils'));

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expectedResults.map.pascalCase));
        assert.equal(result.GenerateFilename(), expectedResults.generate_filename);
        assert.equal(result.PredictValue(), expectedResults.predict_value);
        assert.equal(result.Templates.Standard(), expectedResults.standard);
        assert.equal(result.Templates.Ultimate(), expectedResults.ultimate);
    });

    it('CASE 5: options.filter applied', function () {
        const result = Require.all(path.join(__dirname, '/utils'), {
            filter: /^(standard|ultimate)\.js$/
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expectedResults.filter));
        assert.equal(result.GenerateFilename);
        assert.equal(result.PredictValue);
        assert.equal(result.Templates.Standard(), expectedResults.standard);
        assert.equal(result.Templates.Ultimate(), expectedResults.ultimate);
    });

    it('CASE 6: options.excludeDirs applied', function () {
        const result = Require.all(path.join(__dirname, '/utils'), {
            excludeDirs: /^templates$/
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expectedResults.excludeDirs));
        assert.equal(result.GenerateFilename(), expectedResults.generate_filename);
        assert.equal(result.PredictValue(), expectedResults.predict_value);
        assert.equal(result.Templates, undefined);
    });

    it('CASE 7: options.recursive set to false', function () {
        const result = Require.all(path.join(__dirname, '/utils'), {
            recursive: false
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expectedResults.recursive));
        assert.equal(result.GenerateFilename(), expectedResults.generate_filename);
        assert.equal(result.PredictValue(), expectedResults.predict_value);
        assert.equal(result.Templates, undefined);
    });

    it('CASE 8: options.map set to lowerCase', function () {
        const result = Require.all(path.join(__dirname, '/utils'), {
            map: Require.Strategies.Filename.lowerCase
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expectedResults.map.lowerCase));
        assert.equal(result.generate_filename(), expectedResults.generate_filename);
        assert.equal(result.predict_value(), expectedResults.predict_value);
        assert.equal(result.templates.standard(), expectedResults.standard);
        assert.equal(result.templates.ultimate(), expectedResults.ultimate);
    });

    it('CASE 9: options.map set to upperCase', function () {
        const result = Require.all(path.join(__dirname, '/utils'), {
            map: Require.Strategies.Filename.upperCase
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expectedResults.map.upperCase));
        assert.equal(result.GENERATE_FILENAME(), expectedResults.generate_filename);
        assert.equal(result.PREDICT_VALUE(), expectedResults.predict_value);
        assert.equal(result.TEMPLATES.STANDARD(), expectedResults.standard);
        assert.equal(result.TEMPLATES.ULTIMATE(), expectedResults.ultimate);
    });

    it('CASE 10: options.map set to snakeCase', function () {
        const result = Require.all(path.join(__dirname, '/utils'), {
            map: Require.Strategies.Filename.snakeCase
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expectedResults.map.snakeCase));
        assert.equal(result.generate_filename(), expectedResults.generate_filename);
        assert.equal(result.predict_value(), expectedResults.predict_value);
        assert.equal(result.templates.standard(), expectedResults.standard);
        assert.equal(result.templates.ultimate(), expectedResults.ultimate);
    });

    it('CASE 11: options.map set to camelCase', function () {
        const result = Require.all(path.join(__dirname, '/utils'), {
            map: Require.Strategies.Filename.camelCase
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expectedResults.map.camelCase));
        assert.equal(result.generateFilename(), expectedResults.generate_filename);
        assert.equal(result.predictValue(), expectedResults.predict_value);
        assert.equal(result.templates.standard(), expectedResults.standard);
        assert.equal(result.templates.ultimate(), expectedResults.ultimate);
    });

    it('CASE 12: options.map set to pascalCase', function () {
        const result = Require.all(path.join(__dirname, '/utils'), {
            map: Require.Strategies.Filename.pascalCase
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expectedResults.map.pascalCase));
        assert.equal(result.GenerateFilename(), expectedResults.generate_filename);
        assert.equal(result.PredictValue(), expectedResults.predict_value);
        assert.equal(result.Templates.Standard(), expectedResults.standard);
        assert.equal(result.Templates.Ultimate(), expectedResults.ultimate);
    });

    it('CASE 13: options.map set to functionCase', function () {
        const result = Require.all(path.join(__dirname, '/utils'), {
            map: Require.Strategies.Filename.functionCase
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expectedResults.map.functionCase));
        assert.equal(result.generateFilename(), expectedResults.generate_filename);
        assert.equal(result.predictValue(), expectedResults.predict_value);
        assert.equal(result.Templates.standard(), expectedResults.standard);
        assert.equal(result.Templates.ultimate(), expectedResults.ultimate);
    });

    it('CASE 14: options.resolve set to 42', function () {
        const result = Require.all(path.join(__dirname, '/utils'), {
            resolve: function () {
                return 42;
            }
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expectedResults.resolve));
    });

    it('CASE 15: options.filter allow to require all .js files', function () {
        const result = Require.all(path.join(__dirname, '/utils'), {
            filter: /^(.*)\.js$/
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expectedResults.filter));
        assert.equal(result.GenerateFilename(), expectedResults.generate_filename);
        assert.equal(result.PredictValue(), expectedResults.predict_value);
        assert.equal(result.Templates.Index(), expectedResults.index);
        assert.equal(result.Templates.Standard(), expectedResults.standard);
        assert.equal(result.Templates.Ultimate(), expectedResults.ultimate);
    });
});
