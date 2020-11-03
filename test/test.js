const factors = require("../factors.js")
const assert = require('assert');

describe('factors', function() {
          it('should calculate factors correctly', function() {
                assert.deepStrictEqual(factors(2), [2]);
                assert.deepStrictEqual(factors(3), [3]);
                assert.deepStrictEqual(factors(4), [2, 2]);
                assert.deepStrictEqual(factors(5), [5]);
                assert.deepStrictEqual(factors(6), [2, 3]);
                assert.deepStrictEqual(factors(25), [5, 5]);
                assert.deepStrictEqual(factors(35), [5, 7]);
                assert.deepStrictEqual(factors(30), [2, 3, 5]);
                assert.deepStrictEqual(factors(73), [73]);
        });
      });
      