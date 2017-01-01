'use strict';

const expect = require('chai').expect;

const Errors = require('../lib/errors');

describe('Unit Tests for errors', function () {
    it('CASE 1: Able to load all errors', function () {
        const result = Errors.get();

        expect(result).to.deep.eql({
            NO_PATH: Errors.get('NO_PATH')
        });
    });
});
