const assert = require('assert')
const { Before, Given, When, Then } = require('cucumber')
const Shouty = require('../../lib/shouty')
const Coordinate = require('../../lib/coordinate')

Given('{word} is at {int}, {int}', function (person, x, y) {
  this.shouty.setLocation(person, new Coordinate(x, y))
})