console.clear();
console.log("\n");
console.log("\t\tHello world");
console.log("\n");

// //variables
// var name="Mayank Garg";
// var roll_no=1141;
// var cgpa=9.78;
// var isCR=false;
// console.log("Name : "+ name + " Cgpa is : "+ cgpa);
// console.log();
// let grade = "O";
// // console.log("Grade is : ",grade);
// // console.log();

///////////////////////////////taking input///////////////////////////////////////////////////
var grade = "O";
const prompt=require('prompt-sync')();
var cgpa=prompt("Please enter your cgpa : ");
cgpa =Number(cgpa);////////////////////////////////////////////most important as prompt takes value in form of string///
console.log();
if(cgpa>=9.00){ 
    grade="O"
}else if(cgpa>=8.00){
    grade="A+"
}else{
    grade="A"
};
console.log("Grade is : ",grade);
console.log();