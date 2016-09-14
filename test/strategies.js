'use strict';

const assert = require('assert');

const Strategies = require('../index').Strategies;

describe('Testing require strategies', function () {
    it('CASE 1: lowerCase sets input to lowercase', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.lowerCase(name, path);

        assert.equal('java script', result);
    });

    it('CASE 2: upperCase sets input to UPPERCASE', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.upperCase(name, path);

        assert.equal('JAVA SCRIPT', result);
    });

    it('CASE 3: snakeCase sets input to snake_case', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.snakeCase(name, path);

        assert.equal('ja_va_sc_ri_pt', result);
    });

    it('CASE 4: camelCase sets input to camelCase', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.camelCase(name, path);

        assert.equal('jaVaScRiPt', result);
    });

    it('CASE 5: pascalCase sets input to PascalCase', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.pascalCase(name, path);

        assert.equal('JaVaScRiPt', result);
    });

    it('CASE 6: functionCase sets input to camelCase, if file is ".js" file', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.functionCase(name, path);

        assert.equal('jaVaScRiPt', result);
    });

    it('CASE 7: functionCase sets input to PascalCase, if file is not ".js" file', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world';
        const result = Strategies.Filename.functionCase(name, path);

        assert.equal('JaVaScRiPt', result);
    });
});
