// function logHukum() {
//     console.log("Hukum Mere Aaka");
// }

// function Alladin() {
//     console.log("I am Alladin");
// }

// function add(a,b){
//     return a+b;
// }

// module.exports = {
//     logHukum,
//     Alladin,
//     add
// };

const x = require("./Basic.js");

// Calling first function
x.logHukum();

// Calling second function
x.Alladin();

// Calling add function
let result = x.add(10, 20);

console.log("Sum =", result);