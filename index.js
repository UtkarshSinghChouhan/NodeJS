const path = require("path");


console.log(path.dirname("./index.js"))
console.log(path.basename("./index.js"))
console.log(path.extname("./index.js"))


console.log(path.parse("./index.js"))

const myPath = path.parse("./index.js")
console.log(myPath.name)
console.log(myPath.root)
console.log(myPath.dir)
console.log(myPath.base)
console.log(myPath.ext)