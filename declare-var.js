// In Javascript we can create a variable using "var", "let", or "const"

//========================================================================================
// "var" is available in ES5 and earlier versions
    // when declared using "var", the variable is not only accessible
    // in the block it was created but also globally.

var x; // declaring a variable
x = "May"; // defining a variable
var y = 23; // declaring and defining a variable
var a = 'Moday', b = 'Tuesday';  // declaring and defining multiple variables

// behavior of var inside a block
function concat(arr) {
    
    for (var i = 0; i < arr.length ; i++) {
        var result = "";        // this declaration is accessible ouside the forloop block
        result += arr[i] + " " ;
       
    }
return result;
}
console.log(concat(['Monday', 'Tuesday', 'Wednsday']))

//======================================================================================

// let is introduced in ES6. In this case, variable created within a block is only
// accessible within that block. Any attempt to return outside the bock will give
// an error.
let month; // declaring a variable
month = "May"; // defining a variable
let num = 23; // declaring and defining a variable
let  day1 = 'Moday', day2 = 'Tuesday';  // declaring and defining multiple variables

//behavior of let inside a block
function concat(arr) {
    let result = "";   // this declaration is accessible inside the function block
    for (let i = 0; i < arr.length ; i++) {
        // let result = "";      // this declaration is not accessible outside the forloop block
        result += arr[i] + " " ;
       
    }
return result;
}
console.log(concat(['Monday', 'Tuesday', 'Wednsday']))

//========================================================================================

//let const is also introduced in ES6. It allows us to create constant value.

const PI = 3.1415 // variables created using const cannot be redifined 
// PI = 4.33      // this will produce and error

console.log(PI)
