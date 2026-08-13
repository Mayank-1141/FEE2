const prompt = require("prompt-sync")();
const section = "64";
console.log("\nEnter Students Details");
let students = [];
{
    let id = parseInt(prompt("Enter Id : "));
    let name = prompt("Enter Name : ");
    let cgpa = parseFloat(prompt("Enter CGPA : "));
    let student = { id, name, cgpa };
    students = [...students, student];
    console.log("One object entered into Array");
}
console.log("Master Entry Completed");
var [a] = students;
console.log(`\nId : ${a.id} \nName : ${a.name} \nCGPA : ${a.cgpa}"`);
console.log("\nNow update MarksBase");
const MaxMarks = 100;
let MarksBase = [];
{
    let idValue = parseInt(prompt("Enter Id : "));
    let dbmsMarks = parseInt(prompt("Enter DBMS Marks : "));
    let feeMarks = parseInt(prompt("Enter FEE Marks : "));
    let sMarks = { id: idValue, dbms: dbmsMarks, fee: feeMarks };
    MarksBase.push(sMarks);
    console.log("\nMarks BAse Completed");

}
function fAverage(dbmsMarks,feeMarks){
    let average=(dbmsMarks+feeMarks)/2;
    return average;
}
function fGrade(average){
    let grade="";
    if(average>=90){
        grade="O";

    }
    else if(average>=80){
        grade="A+";
    }
    else if(average>=70){
        grade="A";
    }
    else{
        grade="B";
    }
}
let srNo=1;
console.log("\nResult \nSrNo. \tId \tName \t\tDBMS \tFEE \tAvg\tGrade");
for(let element1 of students){
    for(let element2 of MarksBase){
        if(element2.id===element1.id){
            var dbms=element2.dbms;
            var fee=element2.fee;
            var avg=(a,b)=>(a+b)/2;
            var average=avg(dbms,fee);
            var grade=fGrade(average);
            // var g=(p1)=>{
            //     if(p1>=90){
            //         return "0";

            //     }
            //     else if(p1>=80){
            //         return "A+";
            //     }
            //     else if(p1>=70){
            //         return "A";
            //     }
            //     else{
            //         return "B";
            //     }
            // }
            
        }
    }
    console.log(`\n ${srNo} \t ${element1.id} \t ${element1.name} \t ${dbms} \t ${fee} \t ${average}`);
    srNo++;
}
console.log();