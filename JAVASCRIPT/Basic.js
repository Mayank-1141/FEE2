/*
=========================================
        Basic.js (Module File)
=========================================

This file is called a MODULE.

A module is simply a JavaScript file that
contains reusable code (functions, variables,
objects, etc.) which can be used in another file.

To make functions available outside this file,
we use module.exports.
*/

// Function 1
function logHukum() {
    console.log("Hukum Mere Aaka");
}

// Function 2
function Alladin() {
    console.log("I am Alladin");
}

// Function 3
// Takes two numbers and returns their sum
function add(a, b) {
    return a + b;
}

/*
module.exports exports the functions.

It creates an object like:

{
   logHukum: logHukum,
   Alladin: Alladin,
   add: add
}

Any other JavaScript file can import these
functions using require().
*/

module.exports = {
    logHukum,
    Alladin,
    add
};