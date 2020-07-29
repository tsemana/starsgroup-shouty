const { Before, After } = require("cucumber");

Before({tags: "@quiet or @shush"}, function () {
    console.log(">>> ssshhhhh")
})

// Before(function () {
//     console.log(">>> this is the second Before hook")
// })

// After(function () {
//     console.log(">>> this is the first After hook")
// })


