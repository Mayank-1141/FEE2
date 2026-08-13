function add(a,b){
    let sum=0;
    sum=a+b;
    return sum;
}
console.log(add(10,20));
//function expression
var x= function(a,b){
    let sum=0;
    sum=a+b;
    return sum;
}
console.log(x(30,20));
//Arrow function
var p = (a,b) => { let s = a+b;return s};
console.log(p(60,20));
var x = () => console.log("Hello");
x();

var x="Hello";
var y= "Mayank Garg";
var age = 18;
console.log(x,y,age);
console.log("");
console.log(`${x} 
your name is ${y} 
${age}`)




// const x=require("./Basic.js");

// x.logHukum();
// x.Alladin();
// var result=add(10,20);
// // export function logHukum(){
// //     console.log("Hukum mere aakaaa");
// // }
// // export function Alladin(){
// //     console.log("I am aladin");
// // }
// // export const add= (a,b)=>a+b;
// // export default Alladin();

// import {loghukum,Alladin,add} from "./Basic.js";
// loghukum();
// Alladin();
// var result=add(10,20);
// console.log(result);



function logHukum() {
    console.log("Hukum Mere Aaka");
}

function Alladin() {
    console.log("I am Alladin");
}

function add(a,b){
    return a+b;
}

module.exports = {
    logHukum,
    Alladin,
    add
};