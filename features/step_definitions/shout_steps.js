const assert = require('assert')
const { Before, Given, When, Then, After } = require('cucumber')
const Shouty = require('../../lib/shouty')
const Coordinate = require('../../lib/coordinate')

const ARBITARY_MESSAGE = 'Hello, world'

When('{word} shouts', function (shouter) {
  this.shouty.shout(shouter, ARBITARY_MESSAGE)
})

Then('Lucy should hear {word}', function (shouter) {
  if (shouter == 'nothing') {
    assert.equal(this.shouty.getShoutsHeardBy('Lucy').size, 0)
  } else {
    assert(this.shouty.getShoutsHeardBy('Lucy').has(shouter))
  }
})

Then('Lucy should not hear {word}', function (shouter) {
  assert(!(this.shouty.getShoutsHeardBy('Lucy').has(shouter)))
});

Then('she should not hear herself', function () {
  assert(!(this.shouty.getShoutsHeardBy('Lucy').has('Lucy')))
});

Given('people are located at', function (dataTable) {
  dataTable.hashes().forEach(row => {
    this.shouty.setLocation(row.name, new Coordinate(row.x, row.y))
  })
});

Then('Lucy should hear {int} shout(s) from {word}', function (shouts, shouter) {
  assert.equal(this.shouty.getShoutsHeardBy('Lucy').get(shouter).length, shouts)
});