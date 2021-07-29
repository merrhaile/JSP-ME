
/// CONVERTING TO ARROW FUNCTIONS---------------

// function with two parameters
function sum(a,b) {
    return a + b;
} // the crossponding arrow functionis as follows

let sum2 = (a, b) => {return a + b }
// let sum2 = (a, b) => a + b         // the arrow function can also be writen this way


// function with one parameters
function isPositive(number) {
    return number >= 0;
}  // the crossponding arrow functionis as follows

let isPositive2 = (number) => { 
    return number >= 0;
}
// let sPositive2 = number => number >= 0;     // the arrow function can also be writen this way


// fucntion with zero parameters
function randomNumber() {
    return Math.random();
}

let randomNumber2 = () => Math.random();
