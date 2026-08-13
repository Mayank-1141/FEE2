// Import prompt-sync to take input from the user
const prompt=require("prompt-sync")();
// Generate a random number between 1 and 10
const secretNumber=Math.floor(Math.random()*10)+1;
const maxAttempts=5;
let attempts=0,myNumber;
console.log("\n Game : Guess the number : Number ko pehchano");
console.log("Hint: The number is between 1 and 10.");
console.log(`You have ${maxAttempts} chances.\n`);
while(attempts<maxAttempts){
    myNumber=Number(prompt("Enter your guess: "));
    attempts++;
    if(myNumber===secretNumber){
        console.log("\n Congratulations!");
        console.log(`You guessed the correct number: ${secretNumber}`);
        console.log(`You won in ${attempts} attempt(s).`);
        break;}
    else if(myNumber<secretNumber){
        console.log("Too Low!");
    }
    else{
        console.log("Too High!");
    }
    if(attempts<maxAttempts){
        console.log(`Remaining Chances: ${maxAttempts - attempts}\n`);
    }}
if(myNumber!==secretNumber){
    console.log("\n Game Over!");
    console.log(`You used all ${maxAttempts} chances.`);
    console.log(`The correct number was: ${secretNumber}`);
}
console.log("\nThanks for playing!");