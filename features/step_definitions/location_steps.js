const assert = require('assert')
const { Before, Given, When, Then } = require('cucumber')
const Shouty = require('../../lib/shouty')
const Coordinate = require('../../lib/coordinate')

Given('{word} is at {coordinate}', function (person, coordinate) {
  this.shouty.setLocation(person, coordinate)
})