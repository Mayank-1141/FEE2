/*
=========================================
        ES.js (Main File)
=========================================

require() imports another JavaScript file.

"./Basic.js"

./  --> Current folder
Basic.js --> Module file

All exported functions are stored inside
the variable 'x'.
*/

const x = require("./Basic.js");

/*
Calling logHukum()

x represents the exported object.

Internally this becomes:

Basic.js --> logHukum()
*/

x.logHukum();

/*
Calling Alladin() function
*/

x.Alladin();

/*
Calling add() function.

10 is passed as parameter 'a'
20 is passed as parameter 'b'

add(10,20) returns 30
*/

let result = x.add(10, 20);

/*
Printing returned value
*/

console.log("Sum =", result);