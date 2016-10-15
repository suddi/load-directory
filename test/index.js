'use strict';

const assert = require('assert');
const path = require('path');

const Require = require('../index');
const Errors = require('../errors');
const expected_results = require('./expected_results');

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
        let result = Require.all(path.join(__dirname, '/utils'));

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expected_results.map.pascalCase));
        assert.equal(result.GenerateFilename(), expected_results.generate_filename);
        assert.equal(result.PredictValue(), expected_results.predict_value);
        assert.equal(result.Templates.Standard(), expected_results.standard);
        assert.equal(result.Templates.Ultimate(), expected_results.ultimate);
    });

    it('CASE 5: options.filter applied', function () {
        let result = Require.all(path.join(__dirname, '/utils'), {
            filter: /^(standard|ultimate)\.js$/
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expected_results.filter));
        assert.equal(result.GenerateFilename, undefined);
        assert.equal(result.PredictValue, undefined);
        assert.equal(result.Templates.Standard(), expected_results.standard);
        assert.equal(result.Templates.Ultimate(), expected_results.ultimate);
    });

    it('CASE 6: options.excludeDirs applied', function () {
        let result = Require.all(path.join(__dirname, '/utils'), {
            excludeDirs: /^templates$/
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expected_results.excludeDirs));
        assert.equal(result.GenerateFilename(), expected_results.generate_filename);
        assert.equal(result.PredictValue(), expected_results.predict_value);
        assert.equal(result.Templates, undefined);
    });

    it('CASE 7: options.recursive set to false', function () {
        let result = Require.all(path.join(__dirname, '/utils'), {
            recursive: false
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expected_results.recursive));
        assert.equal(result.GenerateFilename(), expected_results.generate_filename);
        assert.equal(result.PredictValue(), expected_results.predict_value);
        assert.equal(result.Templates, undefined);
    });

    it('CASE 8: options.map set to lowerCase', function () {
        let result = Require.all(path.join(__dirname, '/utils'), {
            map: Require.Strategies.Filename.lowerCase
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expected_results.map.lowerCase));
        assert.equal(result.generate_filename(), expected_results.generate_filename);
        assert.equal(result.predict_value(), expected_results.predict_value);
        assert.equal(result.templates.standard(), expected_results.standard);
        assert.equal(result.templates.ultimate(), expected_results.ultimate);
    });

    it('CASE 9: options.map set to upperCase', function () {
        let result = Require.all(path.join(__dirname, '/utils'), {
            map: Require.Strategies.Filename.upperCase
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expected_results.map.upperCase));
        assert.equal(result.GENERATE_FILENAME(), expected_results.generate_filename);
        assert.equal(result.PREDICT_VALUE(), expected_results.predict_value);
        assert.equal(result.TEMPLATES.STANDARD(), expected_results.standard);
        assert.equal(result.TEMPLATES.ULTIMATE(), expected_results.ultimate);
    });

    it('CASE 10: options.map set to snakeCase', function () {
        let result = Require.all(path.join(__dirname, '/utils'), {
            map: Require.Strategies.Filename.snakeCase
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expected_results.map.snakeCase));
        assert.equal(result.generate_filename(), expected_results.generate_filename);
        assert.equal(result.predict_value(), expected_results.predict_value);
        assert.equal(result.templates.standard(), expected_results.standard);
        assert.equal(result.templates.ultimate(), expected_results.ultimate);
    });

    it('CASE 11: options.map set to camelCase', function () {
        let result = Require.all(path.join(__dirname, '/utils'), {
            map: Require.Strategies.Filename.camelCase
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expected_results.map.camelCase));
        assert.equal(result.generateFilename(), expected_results.generate_filename);
        assert.equal(result.predictValue(), expected_results.predict_value);
        assert.equal(result.templates.standard(), expected_results.standard);
        assert.equal(result.templates.ultimate(), expected_results.ultimate);
    });

    it('CASE 12: options.map set to pascalCase', function () {
        let result = Require.all(path.join(__dirname, '/utils'), {
            map: Require.Strategies.Filename.pascalCase
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expected_results.map.pascalCase));
        assert.equal(result.GenerateFilename(), expected_results.generate_filename);
        assert.equal(result.PredictValue(), expected_results.predict_value);
        assert.equal(result.Templates.Standard(), expected_results.standard);
        assert.equal(result.Templates.Ultimate(), expected_results.ultimate);
    });

    it('CASE 13: options.map set to functionCase', function () {
        let result = Require.all(path.join(__dirname, '/utils'), {
            map: Require.Strategies.Filename.functionCase
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expected_results.map.functionCase));
        assert.equal(result.generateFilename(), expected_results.generate_filename);
        assert.equal(result.predictValue(), expected_results.predict_value);
        assert.equal(result.Templates.standard(), expected_results.standard);
        assert.equal(result.Templates.ultimate(), expected_results.ultimate);
    });

    it('CASE 14: options.resolve set to 42', function () {
        let result = Require.all(path.join(__dirname, '/utils'), {
            resolve: function () {
                return 42;
            }
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expected_results.resolve));
    });

    it('CASE 15: options.filter allow to require all .js files', function () {
        let result = Require.all(path.join(__dirname, '/utils'), {
            filter: /^(.*)\.js$/
        });

        assert.equal(result instanceof Object, true);
        assert.equal(JSON.stringify(result), JSON.stringify(expected_results.filter));
        assert.equal(result.GenerateFilename(), expected_results.generate_filename);
        assert.equal(result.PredictValue(), expected_results.predict_value);
        assert.equal(result.Templates.Index(), expected_results.index);
        assert.equal(result.Templates.Standard(), expected_results.standard);
        assert.equal(result.Templates.Ultimate(), expected_results.ultimate);
    });
});
