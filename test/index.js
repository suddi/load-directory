'use strict';

const expect = require('chai').expect;
const rewire = require('rewire');

const Require = rewire('../lib');

describe('Unit Tests for load-directory', function () {
    it('CASE 1: Correct types for all defaultOptions', function () {
        const result = Require.__get__('getDefaultOptions')();

        expect(result.filter instanceof RegExp).to.eql(true);
        expect(result.excludeDirs instanceof RegExp).to.eql(true);
        expect(typeof result.recursive).to.eql('boolean');
        expect(typeof result.map).to.eql('function');
        expect(typeof result.resolve).to.eql('function');
    });
});
