const { setWorldConstructor } = require('cucumber')
const Shouty = require('../../lib/shouty')

function CustomWorld() {
    this.shouty = new Shouty()
}

setWorldConstructor(CustomWorld)
