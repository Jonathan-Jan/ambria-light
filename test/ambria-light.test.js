/**
 * Created by jonathan on 22/05/17.
 */

"use strict";

let assert = require('assert');
let path = require('path');

let ambria = require('../ambria-light');
let rekire = require('../ambria-light').require;

const appRootPath = path.resolve(`${__dirname}/..`);

/**
 * Ambria test
 */
describe('ambria', function() {

    beforeEach(function() {

        ambria.register({});
    });

    describe('#rekire()', function () {

        /**
         *
         */
        it('should crash', function () {
            try {
                require('./ressources/subfolder/two.module');
            }
            catch (err) {
                assert(true);
                return;
            }
            assert(false);
        });

        /**
         *
         */
        it('should work', function () {
            ambria.register({
                'one.module':'test/ressources/one.module',
                'two.module':'test/ressources/subfolder/two.module'
            }, appRootPath);
            rekire('two.module');
        });

    });
});