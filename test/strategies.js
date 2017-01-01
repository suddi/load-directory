'use strict';

const expect = require('chai').expect;

const Strategies = require('../lib/strategies');

describe('Unit Tests for file load strategies', function () {
    it('CASE 1: lowerCase sets input to lowercase', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.lowerCase(name, path);

        expect(result).to.eql('java script');
    });

    it('CASE 2: upperCase sets input to UPPERCASE', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.upperCase(name, path);

        expect(result).to.eql('JAVA SCRIPT');
    });

    it('CASE 3: dotCase sets input to dot.Case', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.dotCase(name, path);

        expect(result).to.eql('ja.va.sc.ri.pt');
    });

    it('CASE 4: headerCase sets input to Header-Case', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.headerCase(name, path);

        expect(result).to.eql('Ja-Va-Sc-Ri-Pt');
    });

    it('CASE 5: paramCase sets input to param-case', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.paramCase(name, path);

        expect(result).to.eql('ja-va-sc-ri-pt');
    });

    it('CASE 6: sentenceCase sets input to Sentence Case', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.sentenceCase(name, path);

        expect(result).to.eql('Ja va sc ri pt');
    });

    it('CASE 7: snakeCase sets input to snake_case', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.snakeCase(name, path);

        expect(result).to.eql('ja_va_sc_ri_pt');
    });

    it('CASE 8: camelCase sets input to camelCase', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.camelCase(name, path);

        expect(result).to.eql('jaVaScRiPt');
    });

    it('CASE 9: pascalCase sets input to PascalCase', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.pascalCase(name, path);

        expect(result).to.eql('JaVaScRiPt');
    });

    it('CASE 10: functionCase sets input to camelCase, if file is ".js" file', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world/this/is/a/javascript.js';
        const result = Strategies.Filename.functionCase(name, path);

        expect(result).to.eql('jaVaScRiPt');
    });

    it('CASE 11: functionCase sets input to PascalCase, if file is not ".js" file', function () {
        const name = 'JaVa ScRiPt';
        const path = 'hello/world';
        const result = Strategies.Filename.functionCase(name, path);

        expect(result).to.eql('JaVaScRiPt');
    });
});
