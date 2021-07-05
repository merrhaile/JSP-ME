

let a = "4, 2, 5, 6 ,8 ,9";
let b = "Is there a fourth Economic Impact Payment"

let mySplit = a.split(',');
console.log(mySplit);

let mySlice = b.slice(11, 17);
console.log(mySlice);

let mySubstr = b.substr(11, 6);
console.log(mySubstr);

let myEndwith = b.endsWith("Payment");
console.log(myEndwith);

let myStartwith = b.startsWith("Is");
console.log(myStartwith);

let myIncludes = b.includes("economic");
console.log(myIncludes);

let myRepeat = 'Ha! '.repeat(3);
console.log(myRepeat);

let myTrim = '   bloated       ';
console.log(myTrim.length);
console.log(myTrim.trim().length);
