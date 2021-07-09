
const prompt = require('prompt-sync')();
const s = prompt("Enter side of a square: ");
s = parseInt(s);


let area_square = Math.pow(s, 2)
console.log(area_square)

