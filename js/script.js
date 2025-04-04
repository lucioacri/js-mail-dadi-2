const myNumber = Math.floor(Math.random() * 6 + 1);
console.log(myNumber);
const computerNumber = Math.floor(Math.random() * 6 + 1);
console.log(computerNumber);

if (myNumber > computerNumber) {
  alert("Complimenti! Hai vinto!");
} else if (myNumber === computerNumber) {
  alert("Avete lanciato lo stesso numero, riprova!");
} else alert("Mi dispiace... Hai perso...");
