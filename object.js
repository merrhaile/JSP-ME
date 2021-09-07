// Objects in JavaScript, just as in many other programming languages, 
// can be compared to objects in real life. In JavaScript, an object 
// is a standalone entity, with properties and type. 

// Declaring and defining an object

// objects can be created in two ways. {...} is object litral
let car = {};
let car1 = new Object();

// object litrals and properties
const cars = {
    make: "Nissan",  // propreties are entered in form of key:value
    model: "Rogue",
    year: "2019",
};
// to add a property
console.log(cars);
cars.vin = 234; // property value can be added using dot notation
console.log(cars);

// to delete a property
delete cars.vin;
console.log(cars);

//expressions can be applied within the bracket notation
let vin = "vin"
cars[vin+"Number"] = 254;

console.log(cars);
console.log(cars.make); // accessing a property value using dot
console.log(cars.year); 

// the "for...in" loop is a special form of loop that acesses the property names
// instead of values
for (let property in cars){
    console.log(property); // returns the property names
}
for (let property in cars){
    console.log(cars[property]); // returns the property values
}
