const assert = require('assert')
const { Before, Given, When, Then } = require('cucumber')
const Shouty = require('../../lib/shouty')
const Coordinate = require('../../lib/coordinate')

const ARBITARY_MESSAGE = 'Hello, world'
let shouty

Before(function() {
  shouty = new Shouty()
})

Given('{word} is at {int}, {int}', function (person, x, y) {
  shouty.setLocation(person, new Coordinate(x, y))
})

When('{word} shouts', function (shouter) {
  shouty.shout(shouter, ARBITARY_MESSAGE)
})

Then('Lucy should hear {word}', function (shouter) {
  assert(shouty.getShoutsHeardBy('Lucy').has(shouter))
})

Then('Lucy should not hear {word}', function (shouter) {
  assert(!(shouty.getShoutsHeardBy('Lucy').has(shouter)))
});

Then('she should not hear herself', function () {
  assert(!(shouty.getShoutsHeardBy('Lucy').has('Lucy')))
});

