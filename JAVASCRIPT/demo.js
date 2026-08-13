console.clear();
const newSection2 = document.createElement("section");
newSection2.id = "b";
newSection2.textContent = "Section 2";

newSection2.classList.add("box");
newSection2.classList.add("bg1");
newSection2.classList.add("box", "bg1");

document.body.append(newSection2);
newSection2.style.color = "white";
newSection2.textContent += " 😊";

document.body.prepend(newSection2);

const newSection3 = document.createElement("section");
newSection3.id = "c";
newSection3.classList.add("box", "bg1");
document.body.append(newSection3);
// document.body.prepend(newSection3);
newSection3.classList.remove("bg1");
newSection3.textContent = "section3";
newSection3.style.backgroundColor = "seagreen";

newSection3.style.width = "20rem";
newSection3.style.height = "10rem";
// newSection3.style.cssText = "width:20rem; height:10rem";

const section1 = document.getElementById("a");
document.body.insertBefore(newSection3, Section1);

newSection2.remove();
document.getElementById("b").remove();
Element.style.cssText = "color: red; font-size: 3px;";

//DOM Transversal

document.body.firstElementChild.style.color = "red";
document.body.lastElementChild.style.color = "red";
var firstElement = document.body.firstElementChild;
firstElement.style.fontSize = "1.25rem";
console.log(firstElement);
let lastElement = document.body.lastElementChild;
lastElement.style.fontSize = "1.5rem";
console.log(lastElement);
let middleElement = lastElement.previousElementSibling;
middleElement.style.fontsize = "2rem";
var firstElement = document.getElementById("a");
var firstElement = document.querySelector("#a");
var array = document.querySelectorAll("section");
array[2].style.width="20rem";

// const newSection2=document.createElement("section");
// newSection2.id="b";
// newSection2.textContent="Section2";

// newSection2.classList.add("box");
// newSection2.classList.add("box1");
// newSection2.classList.add("box","bg1");

// document.body.append(newSection2);
// newSection2.style.color="white";
// newSection2.textContent+="😁";

// document.body.prepend(newSection2);

// const newSection3=document.createElement("section");
// newSection3.id="c";
// newSection3.classList.add("box","bg1");
// document.body.append(newSection3);

// newSection3.classList.remove("bg1");
// newSection3.textContent="section3😒";
// newSection3.style.backgroundColor="seagreen";

// newSection3.style.width="20rem";
// newSection3.style.height="10rem";
// //newSection3.style.classText="width:20rem;height:10rem;background-color:seagreen;";
// newSection3.style.cssText = "color:green; font-size:20px;";

// const section1=document.getElementById("a");
// document.body.insertBefore(newSection3,section1);

// // newSection2.remove();
// // document.getElementById("b").remove();
// //element.style.cssText="color:red;font-size:;";
// newSection3.style.cssText = "color:red; font-size:20px;"; //Ye previous inline styles hata deta hai.

// document.body.firstElementChild.style.color="red";

// var firstElement = document.body.firstElementChild;
// firstElement.style.fontSize="1.25rem";
// console.log(firstElement);
// let lastElement=document.body.lastElementChild;
// lastElement.style.fontSize="1.5rem";
// console.log(lastElement);
// let middleElement=lastElement.previousElementSibling;
// middleElement.style.fontSize="2rem";

// var firstElement=document.getElementById("a");
// var firstElement=document.querySelector("#a");
// var array=document.querySelectorAll("section");
// array[2].style.width="20rem";



