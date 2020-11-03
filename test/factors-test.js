const assert = require('assert')
const factors = require('../factors')

test('should factor an integer greater than 1', () => {
        assert.deepStrictEqual(factors(30), [2, 3, 5])
})
