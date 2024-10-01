// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)


// import any from "./mymodule.js"
// console.log(any)

// For using import we need to use type="module" in script tag in html file or type="module" in package.json file


// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

const a = require("./mymodule2.js")

console.log(a, __dirname, __filename)