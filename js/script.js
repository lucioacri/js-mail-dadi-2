// let myNumber = Math.floor(Math.random() * 6 + 1);

// let computerNumber = Math.floor(Math.random() * 6 + 1);

// console.log(myNumber);
// console.log(computerNumber);

// if (myNumber > computerNumber) {
//   alert("Complimenti! Hai vinto!");
// } else if (myNumber === computerNumber) {
//   alert("Avete lanciato lo stesso numero, riprova!");
// } else alert("Mi dispiace... Hai perso...");
const mySumNumbers = [];
const computerSumNumbers = [];
let mySum = 0;
let computerSum = 0;

while (mySum < 64 && computerSum < 64) {
  const myNumber = Math.floor(Math.random() * 6 + 1);
  const computerNumber = Math.floor(Math.random() * 6 + 1);
  console.log(myNumber);
  console.log(computerNumber);
  mySumNumbers.push(myNumber);
  computerSumNumbers.push(computerNumber);
  mySum += myNumber;
  computerSum += computerNumber;
}
console.log("mia", mySum);
console.log("computer", computerSum);

if (mySum > computerSum) {
  alert("Complimenti! Hai vinto!");
} else alert("Mi dispiace... Hai perso...");
