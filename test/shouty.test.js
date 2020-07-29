const assert = require('assert')
const Shouty = require('../lib/shouty')

describe('Shouty', () => {

    describe('getShoutsHeardBy(listener)', () => {

        it("should not include listeners shouts", () => {
            const s = new Shouty
            s.shout("Lucy", "Hello!")
            assert.equal(s.getShoutsHeardBy('Lucy').size, 0)
        })
    })
})